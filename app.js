/* Stormpine site — shared header/footer injection + behaviour
   (theme toggle, mega-menu nav, mobile nav, scroll reveal, value-prop walkthrough) */
(function () {
  var root = document.documentElement;
  var mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  /* ---------- icons (inline, stroke = currentColor) ---------- */
  var P = {
    pipeline:'<rect x="3" y="4" width="4.5" height="16" rx="1"/><rect x="9.75" y="4" width="4.5" height="11" rx="1"/><rect x="16.5" y="4" width="4.5" height="7" rx="1"/>',
    relationships:'<circle cx="6" cy="7" r="2.4"/><circle cx="18" cy="7" r="2.4"/><circle cx="12" cy="17" r="2.4"/><path d="M7.7 8.6l2.6 6.8M16.3 8.6l-2.6 6.8M8.4 7h7.2"/>',
    week:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 3v4M16 3v4"/>',
    ai:'<path d="M12 3l1.7 4.8 4.8 1.7-4.8 1.7L12 16l-1.7-4.8L5.5 9.5l4.8-1.7z"/><path d="M18.5 15l.6 1.9 1.9.6-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.6z"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7.5l8 5.5 8-5.5"/>',
    record:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    transition:'<path d="M4 12h13.5M12 6.5l6 5.5-6 5.5"/>',
    board:'<rect x="3.5" y="4" width="7" height="7" rx="1.2"/><rect x="13.5" y="4" width="7" height="7" rx="1.2"/><rect x="3.5" y="13" width="7" height="7" rx="1.2"/><rect x="13.5" y="13" width="7" height="7" rx="1.2"/>',
    open:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.6"/>',
    placed:'<path d="M5.5 21V4.5M5.5 5h11l-2 3 2 3h-11"/>',
    org:'<rect x="4.5" y="3.5" width="15" height="17" rx="1.2"/><path d="M8.5 7.5h2M8.5 11h2M8.5 14.5h2M13.5 7.5h2M13.5 11h2M13.5 14.5h2M9.5 20.5v-3h5v3"/>',
    caret:'<path d="M6 9l6 6 6-6"/>'
  };
  function icon(n){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+(P[n]||'')+'</svg>'; }
  function mItem(ic,tt,dd,href){
    return '<a class="mega-item" href="'+href+'"><span class="mega-ic">'+icon(ic)+'</span>'+
      '<span class="mega-tx"><span class="mega-tt">'+tt+'</span><span class="mega-dd">'+dd+'</span></span></a>';
  }

  /* ---------- header ---------- */
  function headerHTML(active){
    function cur(k){ return active===k ? ' aria-current="page"' : ''; }
    return '' +
    '<div class="matbar"><div class="matbar-in">' +
      '<span class="matlabel">Materials</span>' +
      '<a class="mat active" href="index.html">Website prototype</a>' +
      '<a class="mat" href="stormpine-website-direction.html">Moodboard</a>' +
      '<a class="mat" href="stormpine-hero-concepts.html">Hero concepts</a>' +
      '<a class="mat" href="stormpine-page-element-concepts.html">Page elements</a>' +
    '</div></div>' +
    '<header class="nav"><div class="nav-inner">' +
      '<a class="brand" href="index.html"><span class="glyph">S</span> Stormpine</a>' +
      '<nav class="nav-links" id="navLinks" aria-label="Primary">' +
        '<div class="has-mega">' +
          '<a class="nav-top" href="product.html"'+cur('product')+'>Product <span class="caret">'+icon('caret')+'</span></a>' +
          '<div class="mega product"><div class="mega-inner">' +
            mItem('pipeline','Pipeline','Every opportunity, stage and strategy on one board.','product.html') +
            mItem('relationships','Relationships','Recruiters, sponsors and board contacts as records.','product.html') +
            mItem('week','This Week','What is overdue, stalling or missing — at a glance.','product.html') +
            mItem('ai','AI assessment','Grounded analysis of a specific opportunity.','product.html') +
            mItem('mail','Gmail capture','Log conversations with people you already know.','product.html') +
            mItem('record','Durable record','A private career memory you keep between searches.','product.html') +
          '</div></div>' +
        '</div>' +
        '<div class="has-mega">' +
          '<a class="nav-top" href="who-its-for.html"'+cur('who')+'>Who it\'s for <span class="caret">'+icon('caret')+'</span></a>' +
          '<div class="mega who"><div class="mega-inner">' +
            '<div class="mega-col">' +
              mItem('transition','Active transition','Several live leadership opportunities at once.','who-its-for.html#transition') +
              mItem('board','Board &amp; advisory','Long, relationship-led board and advisory pursuits.','who-its-for.html#board') +
              mItem('open','Quietly open','Maintaining recruiter relationships, not yet searching.','who-its-for.html#open') +
              mItem('placed','Recently placed','Preserve the context you just built.','who-its-for.html#placed') +
            '</div>' +
            '<div class="mega-col aside">' +
              '<div class="mega-h">For organisations</div>' +
              mItem('org','A-kasser &amp; associations','A private career benefit for leader members.','organisations.html') +
              mItem('org','Outplacement','A digital backbone between consultant sessions.','organisations.html') +
              mItem('org','Coaches','Shared, consent-based context with clients.','organisations.html') +
            '</div>' +
          '</div></div>' +
        '</div>' +
        '<a class="nav-top" href="pricing.html"'+cur('pricing')+'>Pricing</a>' +
        '<a class="nav-top" href="trust.html"'+cur('trust')+'>Trust &amp; privacy</a>' +
      '</nav>' +
      '<div class="nav-right">' +
        '<button class="iconbtn" id="themeToggle" type="button" aria-label="Switch theme">☾</button>' +
        '<a class="btn ghost hide-sm" href="https://app.stormpine.com">Sign in</a>' +
        '<a class="btn pri" href="https://app.stormpine.com">Start free</a>' +
        '<button class="navtoggle" id="navToggle" aria-label="Menu" aria-expanded="false">☰</button>' +
      '</div>' +
    '</div></header>';
  }

  /* ---------- footer ---------- */
  function footerHTML(){
    return '' +
    '<footer class="footer"><div class="wrap">' +
      '<div class="footer-top">' +
        '<div><a class="brand" href="index.html"><span class="glyph">S</span> Stormpine</a>' +
          '<p style="margin-top:14px;max-width:30ch">The Personal Career CRM for experienced leaders managing director, board and advisory moves.</p></div>' +
        '<div><h4>Product</h4><ul>' +
          '<li><a href="product.html">How it works</a></li>' +
          '<li><a href="who-its-for.html">Who it\'s for</a></li>' +
          '<li><a href="pricing.html">Pricing</a></li>' +
          '<li><a href="https://app.stormpine.com">Sign in</a></li></ul></div>' +
        '<div><h4>For organisations</h4><ul>' +
          '<li><a href="organisations.html">A-kasser &amp; associations</a></li>' +
          '<li><a href="organisations.html">Outplacement</a></li>' +
          '<li><a href="organisations.html">Coaches</a></li></ul></div>' +
        '<div><h4>Company</h4><ul>' +
          '<li><a href="trust.html">Trust &amp; privacy</a></li>' +
          '<li><a href="privacy.html">Privacy policy</a></li>' +
          '<li><a href="terms.html">Terms</a></li></ul></div>' +
      '</div>' +
      '<div class="footer-bottom"><span>&copy; 2026 Stormpine · Nordic-native, Denmark first</span>' +
        '<span class="langhint">English · Dansk (kommer snart)</span></div>' +
    '</div></footer>';
  }

  /* ---------- inject ---------- */
  var hEl = document.getElementById('site-header');
  if (hEl) hEl.outerHTML = headerHTML(hEl.getAttribute('data-active') || '');
  var fEl = document.getElementById('site-footer');
  if (fEl) fEl.outerHTML = footerHTML();

  /* ---------- theme toggle ---------- */
  function effective(){ var t=root.getAttribute('data-theme'); if(t==='dark'||t==='light') return t; return mq&&mq.matches?'dark':'light'; }
  var toggle = document.getElementById('themeToggle');
  function syncToggle(){ if(!toggle) return; var t=effective(); toggle.textContent = t==='dark'?'☾':'☀';
    toggle.setAttribute('aria-label','Switch to '+(t==='dark'?'light':'dark')+' theme'); toggle.setAttribute('aria-pressed', t==='dark'); }
  if (toggle){
    toggle.addEventListener('click', function(){ root.setAttribute('data-theme', effective()==='dark'?'light':'dark'); syncToggle(); });
    if (mq && mq.addEventListener) mq.addEventListener('change', syncToggle);
    syncToggle();
  }

  /* ---------- mobile nav ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks){
    navToggle.addEventListener('click', function(){ var open=navLinks.classList.toggle('open'); navToggle.setAttribute('aria-expanded', open); });
    navLinks.addEventListener('click', function(e){ if(e.target.closest('a')){ navLinks.classList.remove('open'); navToggle.setAttribute('aria-expanded', false);} });
  }

  /* ---------- scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length){
    var io = new IntersectionObserver(function(es){ es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} }); }, { rootMargin:'0px 0px -8% 0px', threshold:0.06 });
    reveals.forEach(function(el){ io.observe(el); });
  } else { reveals.forEach(function(el){ el.classList.add('in'); }); }

  /* ---------- value-prop walkthrough (sticky scrollspy) ---------- */
  var walkNav = document.querySelector('.walk2-nav');
  if (walkNav){
    var links = [].slice.call(walkNav.querySelectorAll('.walk2-link'));
    var blocks = links.map(function(l){ return document.getElementById(l.getAttribute('href').slice(1)); });
    function setActive(i){ links.forEach(function(l,n){ l.classList.toggle('is-active', n===i); }); }
    if ('IntersectionObserver' in window){
      var spy = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if (en.isIntersecting){ var i = blocks.indexOf(en.target); if (i >= 0) setActive(i); }
        });
      }, { rootMargin: '-22% 0px -68% 0px', threshold: 0 });
      blocks.forEach(function(b){ if (b) spy.observe(b); });
    }
    links.forEach(function(l,i){ l.addEventListener('click', function(){ setActive(i); }); });
    setActive(0);
  }
})();
