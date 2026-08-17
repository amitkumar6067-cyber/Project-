/* EDUNOVA Lottie micro-interactions — lightweight CDN player */
(function () {
  const LOTTIE_CDN = 'https://unpkg.com/@lottiefiles/lottie-player@2.0.4/dist/lottie-player.js';
  let loaded = false;
  let loading = null;

  const ANIMS = {
    success: 'https://assets10.lottiefiles.com/packages/lf20_jbrw3hcz.json',
    confetti: 'https://assets9.lottiefiles.com/packages/lf20_u4yrau.json',
    check: 'https://assets5.lottiefiles.com/packages/lf20_vvnh81zf.json',
    empty: 'https://assets9.lottiefiles.com/packages/lf20_wnqlqnca.json',
    loading: 'https://assets9.lottiefiles.com/packages/lf20_x62chjyg.json',
    book: 'https://assets5.lottiefiles.com/packages/lf20_1a8dx7zj.json',
    trophy: 'https://assets2.lottiefiles.com/packages/lf20_k3aa9yia.json',
    fire: 'https://assets5.lottiefiles.com/packages/lf20_obhph3sh.json',
    search: 'https://assets9.lottiefiles.com/packages/lf20_wnqlqnca.json',
    bell: 'https://assets3.lottiefiles.com/packages/lf20_ycwj9x.json'
  };

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function loadPlayer() {
    if (loaded) return Promise.resolve();
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      if (customElements.get('lottie-player')) {
        loaded = true;
        resolve();
        return;
      }
      var s = document.createElement('script');
      s.src = LOTTIE_CDN;
      s.async = true;
      s.onload = function () { loaded = true; resolve(); };
      s.onerror = function () { reject(new Error('Lottie load failed')); };
      document.head.appendChild(s);
    });
    return loading;
  }

  function createPlayer(src, opts) {
    opts = opts || {};
    var el = document.createElement('lottie-player');
    el.setAttribute('src', src);
    el.setAttribute('background', 'transparent');
    el.setAttribute('speed', opts.speed || '1');
    el.style.width = (opts.size || 120) + 'px';
    el.style.height = (opts.size || 120) + 'px';
    el.style.margin = '0 auto';
    el.style.display = 'block';
    if (opts.loop !== false) el.setAttribute('loop', '');
    if (opts.autoplay !== false) el.setAttribute('autoplay', '');
    if (opts.mode) el.setAttribute('mode', opts.mode);
    return el;
  }

  window.EdunovaLottie = {
    anims: ANIMS,

    mount: function (container, type, opts) {
      if (!container) return Promise.resolve(null);
      if (prefersReducedMotion()) {
        container.innerHTML = '<div class="lottie-fallback">' + (opts && opts.fallback ? opts.fallback : '✓') + '</div>';
        return Promise.resolve(null);
      }
      var src = ANIMS[type] || type;
      return loadPlayer().then(function () {
        container.innerHTML = '';
        var player = createPlayer(src, opts);
        container.appendChild(player);
        return player;
      }).catch(function () {
        container.innerHTML = '<div class="lottie-fallback">' + (opts && opts.fallback ? opts.fallback : '✓') + '</div>';
        return null;
      });
    },

    successBurst: function (parent) {
      if (prefersReducedMotion() || !parent) return;
      loadPlayer().then(function () {
        var wrap = document.createElement('div');
        wrap.className = 'lottie-burst';
        wrap.setAttribute('aria-hidden', 'true');
        var player = createPlayer(ANIMS.confetti, { size: 200, loop: false });
        wrap.appendChild(player);
        parent.appendChild(wrap);
        setTimeout(function () {
          wrap.style.opacity = '0';
          setTimeout(function () { wrap.remove(); }, 400);
        }, 2200);
      }).catch(function () {});
    },

    enhanceEmpty: function (selector, type) {
      document.querySelectorAll(selector).forEach(function (el) {
        var icon = el.querySelector('.empty-state-icon');
        if (!icon) return;
        var host = document.createElement('div');
        host.className = 'lottie-empty';
        icon.replaceWith(host);
        window.EdunovaLottie.mount(host, type || 'empty', { size: 100, fallback: '📭' });
      });
    }
  };

  // Auto-enhance empty states when DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    if (prefersReducedMotion()) return;
    // Soft load player in background on student pages
    if (document.body.classList.contains('dashboard-page') || document.querySelector('.quiz-container') || document.querySelector('.player-layout')) {
      loadPlayer().catch(function () {});
    }
  });
})();
