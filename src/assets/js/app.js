/**
 * HOP Theme — Main JavaScript
 * Salla Twilight — Hellstar-inspired
 */
(function(){
  'use strict';

  /* Announce close */
  var ann=document.getElementById('hop-announce');
  if(ann){var btn=ann.querySelector('button');btn&&btn.addEventListener('click',function(){ann.style.display='none'})}

  /* Header scroll */
  var header=document.getElementById('hop-header');
  if(header){
    window.addEventListener('scroll',function(){
      header.classList.toggle('is-scrolled',window.scrollY>60);
    },{passive:true});
  }

  /* Search toggle */
  var searchBtn=document.getElementById('search-btn');
  var searchEl=document.getElementById('hop-search');
  if(searchBtn&&searchEl){
    searchBtn.addEventListener('click',function(){
      searchEl.hidden=!searchEl.hidden;
      if(!searchEl.hidden){var inp=searchEl.querySelector('input');inp&&setTimeout(function(){inp.focus()},50)}
    });
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!searchEl.hidden)searchEl.hidden=true});
  }

  /* Mobile nav drawer */
  var toggle=document.getElementById('nav-toggle');
  var drawer=document.getElementById('hop-drawer');
  var drawerClose=document.getElementById('drawer-close');
  var overlays=document.querySelectorAll('.hop-overlay');
  function openDrawer(){
    drawer&&drawer.classList.add('is-open');
    overlays.forEach(function(o){o.classList.add('is-active')});
    document.body.style.overflow='hidden';
    toggle&&toggle.setAttribute('aria-expanded','true');
  }
  function closeDrawer(){
    drawer&&drawer.classList.remove('is-open');
    overlays.forEach(function(o){o.classList.remove('is-active')});
    document.body.style.overflow='';
    toggle&&toggle.setAttribute('aria-expanded','false');
  }
  toggle&&toggle.addEventListener('click',openDrawer);
  drawerClose&&drawerClose.addEventListener('click',closeDrawer);
  overlays.forEach(function(o){o.addEventListener('click',closeDrawer)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeDrawer()});

  /* Hero slider */
  var hero=document.getElementById('hop-hero');
  if(hero){
    var slides=hero.querySelectorAll('.hop-hero__slide');
    var dots=hero.querySelectorAll('.hop-hero__dot');
    var prevBtn=document.getElementById('hero-prev');
    var nextBtn=document.getElementById('hero-next');
    if(slides.length>1){
      var cur=0,timer=null;
      function goTo(n){
        slides[cur].classList.remove('is-active');
        dots[cur]&&dots[cur].classList.remove('is-active');
        cur=(n+slides.length)%slides.length;
        slides[cur].classList.add('is-active');
        dots[cur]&&dots[cur].classList.add('is-active');
      }
      function startAuto(){timer=setInterval(function(){goTo(cur+1)},5000)}
      function stopAuto(){clearInterval(timer)}
      prevBtn&&prevBtn.addEventListener('click',function(){stopAuto();goTo(cur-1);startAuto()});
      nextBtn&&nextBtn.addEventListener('click',function(){stopAuto();goTo(cur+1);startAuto()});
      dots.forEach(function(d,i){d.addEventListener('click',function(){stopAuto();goTo(i);startAuto()})});
      var tx=0;
      hero.addEventListener('touchstart',function(e){tx=e.touches[0].clientX},{passive:true});
      hero.addEventListener('touchend',function(e){
        var diff=tx-e.changedTouches[0].clientX;
        if(Math.abs(diff)>40){stopAuto();goTo(diff>0?cur+1:cur-1);startAuto()}
      },{passive:true});
      startAuto();
    }
  }

  /* Product gallery */
  var gMain=document.getElementById('gallery-main');
  if(gMain){
    var gSlides=gMain.querySelectorAll('.hop-gallery__slide');
    var gThumbs=document.querySelectorAll('.hop-gallery__thumb');
    gThumbs.forEach(function(t){
      t.addEventListener('click',function(){
        var idx=parseInt(t.dataset.idx);
        gSlides.forEach(function(s){s.classList.remove('is-active')});
        gThumbs.forEach(function(th){th.classList.remove('is-active')});
        gSlides[idx]&&gSlides[idx].classList.add('is-active');
        t.classList.add('is-active');
      });
    });
  }

  /* Qty controls */
  document.addEventListener('click',function(e){
    var minus=e.target.closest('.hop-qty__minus');
    var plus=e.target.closest('.hop-qty__plus');
    if(minus){
      var inp=minus.closest('.hop-qty').querySelector('.hop-qty__input');
      if(inp&&parseInt(inp.value)>1){inp.value=parseInt(inp.value)-1;inp.dispatchEvent(new Event('change',{bubbles:true}))}
    }
    if(plus){
      var inp2=plus.closest('.hop-qty').querySelector('.hop-qty__input');
      if(inp2){inp2.value=parseInt(inp2.value)+1;inp2.dispatchEvent(new Event('change',{bubbles:true}))}
    }
  });

  /* Option selection */
  document.addEventListener('click',function(e){
    var btn=e.target.closest('.hop-option__btn');
    if(btn){
      var grp=btn.closest('.hop-option__btns');
      grp&&grp.querySelectorAll('.hop-option__btn').forEach(function(b){b.classList.remove('is-active')});
      btn.classList.add('is-active');
    }
    var sw=e.target.closest('.hop-color-swatch');
    if(sw){
      var grp2=sw.closest('.hop-option__colors');
      grp2&&grp2.querySelectorAll('.hop-color-swatch').forEach(function(s){s.classList.remove('is-active')});
      sw.classList.add('is-active');
    }
  });

  /* Filter toggle (mobile) */
  var filterBtn=document.getElementById('filter-btn');
  var filterEl=document.getElementById('hop-filters');
  var filterClose=document.getElementById('filter-close');
  var filterOverlay=document.getElementById('filter-overlay');
  function openFilter(){filterEl&&filterEl.classList.add('is-open');filterOverlay&&filterOverlay.classList.add('is-active');document.body.style.overflow='hidden'}
  function closeFilter(){filterEl&&filterEl.classList.remove('is-open');filterOverlay&&filterOverlay.classList.remove('is-active');document.body.style.overflow=''}
  filterBtn&&filterBtn.addEventListener('click',openFilter);
  filterClose&&filterClose.addEventListener('click',closeFilter);
  filterOverlay&&filterOverlay.addEventListener('click',closeFilter);

  /* Back to top */
  var totop=document.getElementById('totop');
  if(totop){
    window.addEventListener('scroll',function(){totop.classList.toggle('is-visible',window.scrollY>400)},{passive:true});
    totop.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
  }

  /* Tabs */
  document.querySelectorAll('[data-tab-trigger]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var target=btn.dataset.tabTrigger;
      var parent=btn.closest('[data-tabs]');
      if(!parent)return;
      parent.querySelectorAll('[data-tab-trigger]').forEach(function(b){b.classList.remove('is-active')});
      parent.querySelectorAll('[data-tab-panel]').forEach(function(p){p.classList.remove('is-active')});
      btn.classList.add('is-active');
      var panel=parent.querySelector('[data-tab-panel="'+target+'"]');
      panel&&panel.classList.add('is-active');
    });
  });

})();
