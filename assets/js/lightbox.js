/* The screenshot lightbox on the GitHub Pages site.
 *
 * Loaded ONLY from _includes/head-custom.html. It must never be referenced
 * from README.md: GitHub's markdown renderer does not strip a <script>, it
 * ESCAPES it, so this whole file would be printed as text on the repo landing
 * page. Measured against `gh api markdown`, which renders exactly what GitHub
 * will serve.
 *
 * Consequences of that, and they shape everything below:
 *
 *   * README.md is UNTOUCHED. No class, no data- attribute, no id -- the same
 *     measurement showed all three are stripped or rewritten. So the gallery
 *     is found by what survives: an <a> that wraps an <img> and points at a
 *     picture. That is exactly the eight screenshots and nothing else; the
 *     badges and the four logos point at pages, not files.
 *   * Without JavaScript every link still works and still does what it always
 *     did -- opens the full-size file on raw.githubusercontent.com. This is an
 *     enhancement over a page that is already complete.
 *   * The picture shown is the <img> already ON the page, not the raw URL. It
 *     is the same 1440x900 file, already downloaded and decoded to draw the
 *     thumbnail, so opening costs no request at all.
 */
(function () {
  "use strict";

  var PICTURE = /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/i;
  var links = [];
  var at = -1;
  var lastFocus = null;
  var lb, imgEl, capEl, countEl, fullEl, closeEl;

  function galleryLinks() {
    return Array.prototype.filter.call(
      document.querySelectorAll("a[href]"),
      function (a) {
        return PICTURE.test(a.getAttribute("href") || "") && a.querySelector("img");
      });
  }

  /* The caption is whatever sits beside the picture in its own cell. Cloning
   * it keeps the <b>, the <code> and the links; taking .textContent would flatten
   * all three.
   *
   * It hands back NODES, never a string of HTML. The two are equivalent here --
   * the source is the page's own rendered DOM, which has already been through
   * GitHub's sanitiser -- but serialising it only to re-parse it is a round trip
   * that buys nothing and puts an innerHTML sink in the file for a later reader
   * to have to think about. */
  function captionFor(a) {
    var frag = document.createDocumentFragment();
    var cell = a.closest("td") || a.parentElement;
    if (!cell) return frag;
    var clone = cell.cloneNode(true);
    Array.prototype.forEach.call(clone.querySelectorAll("a"), function (x) {
      if (x.querySelector("img")) x.parentNode.removeChild(x);
    });
    while (clone.firstChild &&
           (clone.firstChild.nodeName === "BR" ||
            (clone.firstChild.nodeType === 3 && !clone.firstChild.data.trim()))) {
      clone.removeChild(clone.firstChild);
    }
    while (clone.firstChild) frag.appendChild(clone.firstChild);
    return frag;
  }

  function build() {
    lb = document.createElement("div");
    lb.className = "lb";
    lb.hidden = true;
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Schermafbeelding, groot");
    lb.innerHTML =
      '<div class="lb-bar">' +
        '<span class="lb-count"></span>' +
        '<span class="lb-spacer"></span>' +
        '<a class="lb-full" target="_blank" rel="noopener">volledige afbeelding ↗</a>' +
        '<button type="button" class="lb-close" aria-label="Sluiten (Escape)">✕</button>' +
      '</div>' +
      '<div class="lb-stage">' +
        '<button type="button" class="lb-nav lb-prev" aria-label="Vorige">‹</button>' +
        '<img class="lb-img" alt="">' +
        '<button type="button" class="lb-nav lb-next" aria-label="Volgende">›</button>' +
      '</div>' +
      '<div class="lb-cap"></div>';
    document.body.appendChild(lb);

    imgEl = lb.querySelector(".lb-img");
    capEl = lb.querySelector(".lb-cap");
    countEl = lb.querySelector(".lb-count");
    fullEl = lb.querySelector(".lb-full");
    closeEl = lb.querySelector(".lb-close");

    closeEl.addEventListener("click", close);
    lb.querySelector(".lb-prev").addEventListener("click", function () { step(-1); });
    lb.querySelector(".lb-next").addEventListener("click", function () { step(1); });

    /* Clicking away closes -- but the picture, the caption and the two bars are
     * things you point AT, so a click landing on one of them is not "away". */
    lb.addEventListener("click", function (e) {
      if (!e.target.closest(".lb-img, .lb-cap, .lb-bar, .lb-nav")) close();
    });
  }

  function show(i) {
    at = (i + links.length) % links.length;
    var a = links[at];
    var img = a.querySelector("img");
    imgEl.src = img.currentSrc || img.src;   /* already in cache: no request */
    imgEl.alt = img.alt || "";
    while (capEl.firstChild) capEl.removeChild(capEl.firstChild);
    capEl.appendChild(captionFor(a));
    Array.prototype.forEach.call(capEl.querySelectorAll("a"), function (x) {
      x.target = "_blank";
      x.rel = "noopener";
    });
    capEl.scrollTop = 0;
    countEl.textContent = (at + 1) + " / " + links.length;
    fullEl.href = a.href;
  }

  function step(d) { show(at + d); }

  /* Hiding the page's scrollbar shifts the layout under the overlay by its own
   * width. Pay it back as padding, or the whole page jumps sideways on open. */
  function lockScroll(on) {
    var doc = document.documentElement;
    if (on) {
      var gap = window.innerWidth - doc.clientWidth;
      doc.style.overflow = "hidden";
      if (gap > 0) doc.style.paddingRight = gap + "px";
    } else {
      doc.style.overflow = "";
      doc.style.paddingRight = "";
    }
  }

  function open(i) {
    lastFocus = document.activeElement;
    show(i);
    lb.hidden = false;
    lockScroll(true);
    closeEl.focus();
  }

  function close() {
    if (lb.hidden) return;
    lb.hidden = true;
    imgEl.removeAttribute("src");
    lockScroll(false);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function onKey(e) {
    if (lb.hidden) return;
    if (e.key === "Escape") { e.preventDefault(); close(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    else if (e.key === "Home") { e.preventDefault(); show(0); }
    else if (e.key === "End") { e.preventDefault(); show(links.length - 1); }
    else if (e.key === "Tab") trapTab(e);
  }

  function trapTab(e) {
    var stops = lb.querySelectorAll("button, a[href]");
    if (!stops.length) return;
    var first = stops[0], last = stops[stops.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  function wireSwipe() {
    var x0 = null, y0 = null;
    lb.addEventListener("touchstart", function (e) {
      x0 = e.changedTouches[0].clientX;
      y0 = e.changedTouches[0].clientY;
    }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      /* Horizontal only, or scrolling the caption would flip the picture. */
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.6) step(dx < 0 ? 1 : -1);
      x0 = y0 = null;
    }, { passive: true });
  }

  function init() {
    links = galleryLinks();
    if (links.length < 2) return;      /* nothing to page through */
    build();
    wireSwipe();
    links.forEach(function (a, i) {
      a.style.cursor = "zoom-in";
      a.addEventListener("click", function (e) {
        /* Leave every deliberate "open this elsewhere" gesture alone: a middle
         * click, ctrl/cmd-click, shift-click. Those mean the new tab, and the
         * link still points at the real file. */
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        open(i);
      });
    });
    document.addEventListener("keydown", onKey);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
