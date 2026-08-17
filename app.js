/* EDUNOVA Core App Logic */

const App = {
  // State
  state: {
    theme: localStorage.getItem('edunova_theme') || 'light',
    isLoggedIn: localStorage.getItem('edunova_logged_in') === 'true',
    notifications: null,
    wishlist: JSON.parse(localStorage.getItem('edunova_wishlist') || '[]'),
    progress: JSON.parse(localStorage.getItem('edunova_progress') || '{}'),
    completedLessons: JSON.parse(localStorage.getItem('edunova_completed') || '[]'),
    tasks: null,
    quizAnswers: {},
    searchRecent: JSON.parse(localStorage.getItem('edunova_search_recent') || '[]')
  },

  init() {
    this.applyTheme();
    this.loadNotifications();
    this.loadTasks();
    this.bindGlobalEvents();
    this.updateAuthUI();
    this.updateNotifBadge();
    this.initCounters();
    this.initScrollReveal();
  },

  // Theme
  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.innerHTML = this.state.theme === 'dark'
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  },

  toggleTheme() {
    this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('edunova_theme', this.state.theme);
    this.applyTheme();
  },

  // Auth
  login() {
    this.state.isLoggedIn = true;
    localStorage.setItem('edunova_logged_in', 'true');
    this.updateAuthUI();
    this.toast('Welcome back, Aarav!', 'success');
  },

  logout() {
    this.state.isLoggedIn = false;
    localStorage.setItem('edunova_logged_in', 'false');
    this.updateAuthUI();
    this.toast('Logged out successfully', 'info');
    if (window.location.pathname.includes('dashboard') || window.location.pathname.includes('player') || window.location.pathname.includes('quiz') || window.location.pathname.includes('profile')) {
      window.location.href = this.getBasePath() + 'index.html';
    }
  },

  updateAuthUI() {
    const loggedInEls = document.querySelectorAll('[data-auth="logged-in"]');
    const loggedOutEls = document.querySelectorAll('[data-auth="logged-out"]');
    loggedInEls.forEach(el => el.style.display = this.state.isLoggedIn ? '' : 'none');
    loggedOutEls.forEach(el => el.style.display = this.state.isLoggedIn ? 'none' : '');
  },

  demoLogin() {
    this.login();
    window.location.href = this.getBasePath() + 'pages/dashboard.html';
  },

  // Notifications
  loadNotifications() {
    const saved = localStorage.getItem('edunova_notifications');
    this.state.notifications = saved ? JSON.parse(saved) : [...EDUNOVA_DATA.notifications];
  },

  saveNotifications() {
    localStorage.setItem('edunova_notifications', JSON.stringify(this.state.notifications));
  },

  updateNotifBadge() {
    const badge = document.getElementById('notifBadge');
    if (!badge) return;
    const unread = this.state.notifications.filter(n => !n.read).length;
    if (unread > 0) {
      badge.textContent = unread > 9 ? '9+' : unread;
      badge.style.display = '';
    } else {
      badge.style.display = 'none';
    }
  },

  markAllRead() {
    this.state.notifications.forEach(n => n.read = true);
    this.saveNotifications();
    this.updateNotifBadge();
    this.renderNotifications();
  },

  renderNotifications() {
    const list = document.getElementById('notifList');
    if (!list) return;
    if (this.state.notifications.length === 0) {
      list.innerHTML = '<div class="empty-state" style="padding:32px 16px"><div class="empty-state-icon">🔔</div><h3>No notifications</h3><p>You\'re all caught up!</p></div>';
      if (window.EdunovaLottie) setTimeout(function(){ EdunovaLottie.enhanceEmpty('#notifList .empty-state', 'bell'); }, 50);
      return;
    }
    list.innerHTML = this.state.notifications.map(n => `
      <div class="notif-item ${n.read ? '' : 'unread'}" data-id="${n.id}">
        <div class="notif-icon ${n.type}">${this.getNotifEmoji(n.type)}</div>
        <div class="notif-content">
          <h4>${n.title}</h4>
          <p>${n.message}</p>
          <div class="notif-time">${n.time}</div>
        </div>
      </div>
    `).join('');
  },

  getNotifEmoji(type) {
    const map = { class: '📹', assignment: '📝', result: '📊', course: '📚', offer: '🎁', announcement: '📢' };
    return map[type] || '🔔';
  },

  // Tasks
  loadTasks() {
    const saved = localStorage.getItem('edunova_tasks');
    this.state.tasks = saved ? JSON.parse(saved) : [...EDUNOVA_DATA.tasks];
  },

  saveTasks() {
    localStorage.setItem('edunova_tasks', JSON.stringify(this.state.tasks));
  },

  toggleTask(id) {
    const task = this.state.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
    }
  },

  // Toast
  toast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  // Search
  openSearch() {
    const overlay = document.getElementById('searchOverlay');
    if (overlay) {
      overlay.classList.add('active');
      const input = document.getElementById('searchInput');
      if (input) setTimeout(() => input.focus(), 100);
    }
  },

  closeSearch() {
    const overlay = document.getElementById('searchOverlay');
    if (overlay) overlay.classList.remove('active');
  },

  performSearch(query) {
    query = query.toLowerCase().trim();
    const results = document.getElementById('searchResults');
    if (!results) return;

    if (!query) {
      results.innerHTML = this.renderSearchSuggestions();
      return;
    }

    const courses = EDUNOVA_DATA.courses.filter(c =>
      c.title.toLowerCase().includes(query) || c.category.toLowerCase().includes(query)
    );
    const faculty = EDUNOVA_DATA.faculty.filter(f =>
      f.name.toLowerCase().includes(query) || f.subject.toLowerCase().includes(query)
    );
    const resources = EDUNOVA_DATA.resources.filter(r =>
      r.title.toLowerCase().includes(query) || r.subject.toLowerCase().includes(query)
    );

    let html = '';
    if (courses.length) {
      html += courses.map(c => `
        <a href="${this.getBasePath()}pages/course-details.html?id=${c.id}" class="search-result-item">
          <div class="search-result-icon">${c.image}</div>
          <div class="search-result-info">
            <h4>${c.title}</h4>
            <p>${c.category} · ${c.faculty}</p>
          </div>
        </a>
      `).join('');
    }
    if (faculty.length) {
      html += faculty.map(f => `
        <a href="${this.getBasePath()}pages/faculty.html#${f.id}" class="search-result-item">
          <div class="search-result-icon">👤</div>
          <div class="search-result-info">
            <h4>${f.name}</h4>
            <p>${f.subject} · ${f.experience}</p>
          </div>
        </a>
      `).join('');
    }
    if (resources.length) {
      html += resources.map(r => `
        <div class="search-result-item">
          <div class="search-result-icon">📄</div>
          <div class="search-result-info">
            <h4>${r.title}</h4>
            <p>${r.subject} · ${r.type}</p>
          </div>
        </div>
      `).join('');
    }

    if (!html) {
      html = '<div class="empty-state" style="padding:32px 16px"><div class="empty-state-icon">🔍</div><h3>No results found</h3><p>Try searching for courses, faculty or resources</p></div>';
      if (window.EdunovaLottie) setTimeout(function(){ EdunovaLottie.enhanceEmpty('#searchResults .empty-state', 'search'); }, 50);
    }

    results.innerHTML = html;

    // Save recent
    if (query && !this.state.searchRecent.includes(query)) {
      this.state.searchRecent.unshift(query);
      this.state.searchRecent = this.state.searchRecent.slice(0, 5);
      localStorage.setItem('edunova_search_recent', JSON.stringify(this.state.searchRecent));
    }
  },

  renderSearchSuggestions() {
    const popular = ['JEE Advanced', 'NEET', 'Physics', 'Mock Test', 'Dr. Rahul Sharma'];
    return `
      <div class="search-suggestions">
        <h5>Popular Searches</h5>
        <div class="suggestion-tags">
          ${popular.map(s => `<span class="suggestion-tag" onclick="document.getElementById('searchInput').value='${s}';App.performSearch('${s}')">${s}</span>`).join('')}
        </div>
        ${this.state.searchRecent.length ? `
          <h5 style="margin-top:16px">Recent</h5>
          <div class="suggestion-tags">
            ${this.state.searchRecent.map(s => `<span class="suggestion-tag" onclick="document.getElementById('searchInput').value='${s}';App.performSearch('${s}')">${s}</span>`).join('')}
          </div>
        ` : ''}
      </div>
    `;
  },

  // Mobile menu
  openMobileMenu() {
    document.getElementById('mobileMenu')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeMobileMenu() {
    document.getElementById('mobileMenu')?.classList.remove('active');
    document.body.style.overflow = '';
  },

  // Notif panel
  toggleNotifPanel() {
    const panel = document.getElementById('notifPanel');
    if (!panel) return;
    const isActive = panel.classList.contains('active');
    document.querySelectorAll('.notif-panel, .profile-menu').forEach(el => el.classList.remove('active'));
    if (!isActive) {
      panel.classList.add('active');
      this.renderNotifications();
    }
  },

  toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    if (!menu) return;
    const isActive = menu.classList.contains('active');
    document.querySelectorAll('.notif-panel, .profile-menu').forEach(el => el.classList.remove('active'));
    if (!isActive) menu.classList.add('active');
  },

  // Counters
  initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.counter);
          const suffix = el.dataset.suffix || '';
          const duration = 1500;
          const start = performance.now();

          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  },

  // Scroll reveal
  initScrollReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  },

  // FAQ
  initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!wasActive) item.classList.add('active');
      });
    });
  },

  // Format price
  formatPrice(n) {
    return '₹' + n.toLocaleString('en-IN');
  },

  getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/pages/')) return '../';
    return '';
  },

  // Global events
  bindGlobalEvents() {
    // Theme toggle
    document.getElementById('themeToggle')?.addEventListener('click', () => this.toggleTheme());

    // Search
    document.getElementById('searchBtn')?.addEventListener('click', () => this.openSearch());
    document.getElementById('searchClose')?.addEventListener('click', () => this.closeSearch());
    document.getElementById('searchOverlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'searchOverlay') this.closeSearch();
    });
    document.getElementById('searchInput')?.addEventListener('input', (e) => this.performSearch(e.target.value));

    // Mobile menu
    document.getElementById('mobileMenuBtn')?.addEventListener('click', () => this.openMobileMenu());
    document.getElementById('mobileMenuClose')?.addEventListener('click', () => this.closeMobileMenu());

    // Notif
    document.getElementById('notifBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleNotifPanel();
    });
    document.getElementById('markAllRead')?.addEventListener('click', () => this.markAllRead());

    // Profile
    document.getElementById('profileBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleProfileMenu();
    });

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      document.querySelectorAll('.notif-panel, .profile-menu').forEach(el => el.classList.remove('active'));
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeSearch();
        this.closeMobileMenu();
        document.querySelectorAll('.notif-panel, .profile-menu, .modal-overlay').forEach(el => el.classList.remove('active'));
      }
    });

    // Demo login buttons
    document.querySelectorAll('[data-action="demo-login"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.demoLogin();
      });
    });

    // Logout
    document.querySelectorAll('[data-action="logout"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.logout();
      });
    });
  }
};

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => App.init());
