/* Stormpine site: shared header/footer injection + behaviour
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
    caret:'<path d="M6 9l6 6 6-6"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"/>',
    guide:'<path d="M12 6c-1.5-1-3.5-1.5-5.5-1.5H4v13h2.5c2 0 4 .5 5.5 1.5M12 6c1.5-1 3.5-1.5 5.5-1.5H20v13h-2.5c-2 0-4 .5-5.5 1.5M12 6v13"/>',
    link:'<path d="M9.5 14.5l5-5"/><path d="M13.5 7l1-1a3.4 3.4 0 0 1 4.8 4.8l-2 2a3.4 3.4 0 0 1-4.8 0"/><path d="M10.5 17l-1 1a3.4 3.4 0 0 1-4.8-4.8l2-2a3.4 3.4 0 0 1 4.8 0"/>',
    help:'<circle cx="12" cy="12" r="9"/><path d="M9.6 9.6a2.5 2.5 0 1 1 3.4 2.3c-.9.5-1.5 1.1-1.5 2.1M12 16.8h.01"/>',
    profile:'<circle cx="12" cy="8.5" r="3.5"/><path d="M5.5 19.5a6.5 6.5 0 0 1 13 0"/>',
    tasks:'<path d="M4 6.5l1.5 1.5L8 5.5"/><path d="M4 12.5l1.5 1.5L8 11.5"/><path d="M4 18.5l1.5 1.5L8 17.5"/><path d="M11 7h9M11 13h9M11 19h9"/>',
    overview:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>'
  };
  function icon(n){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+(P[n]||'')+'</svg>'; }

  /* ---------- Stormpine wordmark (official logo, recolours via currentColor) ---------- */
  var LOGO = '<svg class="brand-mark" viewBox="0 0 500 104.65" fill="currentColor" role="img" aria-label="Stormpine">' +
    '<path d="M44.49,65.81c0,10.72-9.22,17.29-21.55,17.29-11.53,0-19.59-5.53-22.94-13.49l8.64-4.96c1.84,5.53,7.15,8.99,14.29,8.99,6.11,0,11.41-2.19,11.41-7.84,0-12.33-32.27-5.3-32.27-26.16,0-10.14,8.76-17.17,20.4-17.17,9.45,0,17.06,4.49,20.75,11.99l-8.41,4.73c-2.19-5.19-7.26-7.38-12.33-7.38s-10.26,2.54-10.26,7.72c0,12.33,32.27,5.07,32.27,26.28Z"/>' +
    '<path d="M86.56,52.79c0-17.06,13.49-30.31,30.31-30.31s30.43,13.25,30.43,30.31-13.6,30.31-30.43,30.31-30.31-13.25-30.31-30.31ZM137.28,52.79c0-11.64-8.88-20.52-20.4-20.52s-20.29,8.87-20.29,20.52,8.88,20.52,20.29,20.52,20.4-8.87,20.4-20.52Z"/>' +
    '<path d="M276.28,45.76v35.84h-10.03v-35.5c0-9.11-5.07-14.06-12.68-14.06-8.07,0-14.18,5.07-14.18,17.52v32.04h-10.03v-35.5c0-9.11-4.73-14.06-12.22-14.06s-14.75,5.07-14.75,17.52v32.04h-10.03V23.97h10.03v7.72c4.15-6.45,10.14-9.22,17.17-9.22,7.84,0,13.6,3.57,16.94,9.8,4.03-6.57,10.6-9.8,18.1-9.8,12.79,0,21.67,8.87,21.67,23.28Z"/>' +
    '<path d="M348.89,52.79c0,17.06-13.14,30.31-29.16,30.31-9.8,0-17.17-4.38-21.78-11.41v32.96h-10.03V23.97h10.03v9.91c4.61-7.03,11.99-11.41,21.78-11.41,16.02,0,29.16,13.25,29.16,30.31ZM338.87,52.79c0-11.76-8.87-20.63-20.4-20.63s-20.52,8.87-20.52,20.63,8.87,20.63,20.52,20.63,20.4-8.88,20.4-20.63Z"/>' +
    '<path d="M356.85,6.8c0-3.69,3-6.8,6.8-6.8s6.68,3.11,6.68,6.8-3,6.69-6.68,6.69-6.8-3-6.8-6.69ZM358.58,23.97h10.03v57.63h-10.03V23.97Z"/>' +
    '<path d="M432.69,46.22v35.38h-10.03v-34.81c0-9.45-5.42-14.75-14.29-14.75s-16.71,5.42-16.71,19.02v30.54h-10.03V23.97h10.03v8.3c4.26-6.8,10.6-9.8,18.67-9.8,13.49,0,22.36,8.99,22.36,23.74Z"/>' +
    '<path d="M472.22,73.65c7.95,0,13.72-3.69,16.6-8.41l8.53,4.84c-5.07,7.84-13.83,13.02-25.36,13.02-18.56,0-30.89-13.02-30.89-30.31s12.22-30.31,30.2-30.31,28.7,14.29,28.7,30.43c0,1.5-.12,3-.35,4.5h-48.29c1.96,10.37,10.14,16.25,20.86,16.25ZM451.36,48.64h38.5c-1.73-11.41-9.91-16.71-18.56-16.71-10.83,0-18.33,6.69-19.94,16.71Z"/>' +
    '<path d="M83.71,23.97h-13.64s-8.02-.02-8.02-.02l6.33-6.33V7.84l-10.03.05v16.09h-11.41v9.68h11.41v31.23c0,14.41,8.07,19.02,25.36,16.71v-8.99c-10.26.46-15.33,1.04-15.33-7.72v-24.93l-6.34-6.34h8.04s0,.04,0,.04h13.63v-9.68Z"/>' +
    '<polyline points="156.97 81.47 166.99 81.47 166.99 39.96 160.69 33.66 182.32 33.66 182.32 23.97 156.82 23.97 156.82 33.66"/>' +
  '</svg>';
  function mItem(ic,tt,dd,href){
    return '<a class="mega-item" href="'+href+'"><span class="mega-ic">'+icon(ic)+'</span>'+
      '<span class="mega-tx"><span class="mega-tt">'+tt+'</span><span class="mega-dd">'+dd+'</span></span></a>';
  }

  /* ---------- region / language selector ----------
     Prototype: English is live; Danish is present but marked "coming soon".
     The control remembers the choice and sets the document lang attribute.
     Actual translation of page content is deferred to the production build. */
  var LOCALES = [
    { code:'en-GB', tag:'EN', country:'United Kingdom', lang:'English', live:true },
    { code:'da-DK', tag:'DA', country:'Danmark', lang:'Dansk', live:false }
  ];
  function localeCtl(up){
    var opts = LOCALES.map(function(l){
      var on = l.code === 'en-GB';
      return '<button class="locale-opt'+(l.live?'':' soon')+'" type="button" role="menuitemradio"'+
        ' aria-checked="'+(on?'true':'false')+'"'+(l.live?'':' aria-disabled="true"')+' data-locale="'+l.code+'">'+
        '<span class="lo-main">'+l.country+'</span><span class="lo-sub">'+l.lang+'</span>'+
        (l.live ? '<span class="lo-right locale-check" aria-hidden="true">✓</span>'
                : '<span class="lo-right locale-soon">Soon</span>')+
      '</button>';
    }).join('');
    return '<div class="locale'+(up?' up':'')+'">'+
      '<button class="locale-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Region and language">'+
        icon('globe')+'<span class="locale-code">EN</span><span class="caret">'+icon('caret')+'</span>'+
      '</button>'+
      '<div class="locale-menu" role="menu">'+
        '<div class="locale-menu-h">Region &amp; language</div>'+opts+
        '<div class="locale-note" hidden>Dansk kommer snart.</div>'+
      '</div>'+
    '</div>';
  }

  /* ---------- header ---------- */
  function headerHTML(active){
    function cur(k){ return active===k ? ' aria-current="page"' : ''; }
    return '' +
    '<div class="matbar"><div class="matbar-in">' +
      '<span class="matlabel">Materials</span>' +
      '<a class="mat active" href="index.html">Website prototype</a>' +
      '<a class="mat" href="stormpine-website-direction.html">Moodboard</a>' +
      '<a class="mat" href="stormpine-design-system.html">Design system</a>' +
      '<a class="mat" href="stormpine-page-element-concepts.html">Page elements</a>' +
    '</div></div>' +
    '<header class="nav"><div class="nav-inner">' +
      '<a class="brand" href="index.html" aria-label="Stormpine home">'+LOGO+'</a>' +
      '<nav class="nav-links" id="navLinks" aria-label="Primary">' +
        '<div class="has-mega">' +
          '<a class="nav-top" href="product.html"'+cur('product')+'>Product <span class="caret">'+icon('caret')+'</span></a>' +
          '<div class="mega product"><div class="mega-inner">' +
            mItem('overview','The overview','Your day, next steps and what needs you now.','overview.html') +
            mItem('pipeline','Pipeline','Every parallel process and its stage on one board.','pipeline.html') +
            mItem('profile','Profile','Your career written once, tailored per role.','profile.html') +
            mItem('relationships','Relationships','Recruiters, sponsors, board contacts and referees.','relationships.html') +
            mItem('tasks','Tasks','Every next step across your processes in one list.','tasks.html') +
            mItem('ai','Intelligence','Grounded analysis over your own record.','intelligence.html') +
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
        '<div class="has-mega">' +
          '<a class="nav-top" href="guides.html"'+cur('resources')+'>Resources <span class="caret">'+icon('caret')+'</span></a>' +
          '<div class="mega product"><div class="mega-inner">' +
            mItem('guide','Guides &amp; playbooks','Executive-grade craft for board, advisory and recruiter work.','guides.html') +
            mItem('link','Integrations','How Stormpine connects to LinkedIn and email, on your consent.','integrations.html') +
            mItem('help','Help &amp; support','Getting started, FAQs and a direct line to the team.','help.html') +
          '</div></div>' +
        '</div>' +
        '<a class="nav-top" href="trust.html"'+cur('trust')+'>Trust &amp; privacy</a>' +
      '</nav>' +
      '<div class="nav-right">' +
        localeCtl(false) +
        '<button class="theme-toggle" id="themeToggle" type="button" role="switch" aria-checked="false" aria-label="Switch theme"><span class="tt-thumb"></span></button>' +
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
        '<div><a class="brand" href="index.html" aria-label="Stormpine home">'+LOGO+'</a>' +
          '<p style="margin-top:14px;max-width:30ch">The Personal Career CRM for experienced leaders managing director, board and advisory moves.</p></div>' +
        '<div><h4>Product</h4><ul>' +
          '<li><a href="product.html">How it works</a></li>' +
          '<li><a href="overview.html">The overview</a></li>' +
          '<li><a href="pipeline.html">Pipeline</a></li>' +
          '<li><a href="profile.html">Profile</a></li>' +
          '<li><a href="relationships.html">Relationships</a></li>' +
          '<li><a href="tasks.html">Tasks</a></li>' +
          '<li><a href="intelligence.html">Intelligence</a></li>' +
          '<li><a href="pricing.html">Pricing</a></li></ul></div>' +
        '<div><h4>For organisations</h4><ul>' +
          '<li><a href="organisations.html">A-kasser &amp; associations</a></li>' +
          '<li><a href="organisations.html">Outplacement</a></li>' +
          '<li><a href="organisations.html">Coaches</a></li></ul></div>' +
        '<div><h4>Resources</h4><ul>' +
          '<li><a href="guides.html">Guides &amp; playbooks</a></li>' +
          '<li><a href="integrations.html">Integrations</a></li>' +
          '<li><a href="help.html">Help &amp; support</a></li></ul></div>' +
        '<div><h4>Company</h4><ul>' +
          '<li><a href="about.html">About us</a></li>' +
          '<li><a href="contact.html">Contact</a></li>' +
          '<li><a href="trust.html">Trust &amp; privacy</a></li>' +
          '<li><a href="privacy.html">Privacy policy</a></li>' +
          '<li><a href="terms.html">Terms</a></li></ul></div>' +
      '</div>' +
      '<div class="footer-bottom"><span>&copy; 2026 Stormpine · Nordic-native, Denmark first</span>' +
        localeCtl(true) + '</div>' +
    '</div></footer>';
  }

  /* ---------- inject ---------- */
  var hEl = document.getElementById('site-header');
  if (hEl) hEl.outerHTML = headerHTML(hEl.getAttribute('data-active') || '');
  var fEl = document.getElementById('site-footer');
  if (fEl) fEl.outerHTML = footerHTML();

  /* ---------- theme toggle (pill switch: sun in light, moon in dark) ---------- */
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></svg>';
  function effective(){ var t=root.getAttribute('data-theme'); if(t==='dark'||t==='light') return t; return mq&&mq.matches?'dark':'light'; }
  var toggle = document.getElementById('themeToggle');
  var thumb = toggle && toggle.querySelector('.tt-thumb');
  function syncToggle(){ if(!toggle) return; var dark = effective()==='dark';
    if(thumb) thumb.innerHTML = dark ? MOON : SUN;
    toggle.setAttribute('aria-checked', dark ? 'true' : 'false');
    toggle.setAttribute('aria-label','Switch to '+(dark?'light':'dark')+' theme'); }
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

  /* ---------- region / language selector behaviour ---------- */
  (function(){
    var ctls = [].slice.call(document.querySelectorAll('.locale'));
    if (!ctls.length) return;
    var saved = null; try { saved = window.localStorage.getItem('sp-locale'); } catch(e){}
    // Only English is live for now, so the effective locale stays en-GB regardless.
    root.setAttribute('lang', (saved === 'da-DK' ? 'da' : 'en'));

    function closeAll(){
      ctls.forEach(function(c){
        c.classList.remove('open');
        var b = c.querySelector('.locale-btn'); if (b) b.setAttribute('aria-expanded','false');
        var n = c.querySelector('.locale-note'); if (n) n.hidden = true;
      });
    }
    ctls.forEach(function(c){
      var btn = c.querySelector('.locale-btn');
      var menu = c.querySelector('.locale-menu');
      var note = c.querySelector('.locale-note');
      menu.addEventListener('click', function(e){ e.stopPropagation(); });
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var willOpen = !c.classList.contains('open');
        closeAll();
        if (willOpen){ c.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
      });
      c.querySelectorAll('.locale-opt').forEach(function(opt){
        opt.addEventListener('click', function(){
          if (opt.classList.contains('soon')){ if (note) note.hidden = false; return; }
          var code = opt.getAttribute('data-locale');
          try { window.localStorage.setItem('sp-locale', code); } catch(err){}
          root.setAttribute('lang', code.slice(0,2));
          ctls.forEach(function(cc){
            cc.querySelectorAll('.locale-opt').forEach(function(o){
              o.setAttribute('aria-checked', o.getAttribute('data-locale') === code ? 'true' : 'false');
            });
          });
          closeAll();
        });
      });
    });
    document.addEventListener('click', closeAll);
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeAll(); });
  })();

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
