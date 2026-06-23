// Reveal-on-scroll: fade + rise elements as they enter the viewport.
// Elements already in view on load are never hidden (so the hero never
// flashes blank), and a timeout guarantees everything becomes visible
// even if the IntersectionObserver never fires.
(function () {
    var els = [].slice.call(document.querySelectorAll('[data-reveal]'));
    var show = function (el) { el.classList.remove('is-hidden'); };
    var vh = window.innerHeight || document.documentElement.clientHeight || 800;

    // Only hide below-the-fold elements; in-view content stays visible.
    var hidden = els.filter(function (el) {
        if (el.getBoundingClientRect().top > vh * 0.92) {
            el.classList.add('is-hidden');
            return true;
        }
        return false;
    });

    if ('IntersectionObserver' in window && hidden.length) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
            });
        }, { threshold: 0.06, rootMargin: '0px 0px -6% 0px' });
        hidden.forEach(function (el) { io.observe(el); });
    } else {
        hidden.forEach(show);
    }

    // Guaranteed fail-safe: reveal everything regardless of observer behavior.
    setTimeout(function () { els.forEach(show); }, 1600);
})();
