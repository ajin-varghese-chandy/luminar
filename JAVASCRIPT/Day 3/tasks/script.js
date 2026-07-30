(function(){
  "use strict";

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function svgWrap(inner){
    return '<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">'+inner+'</svg>';
  }

  document.getElementById('s1-water').innerHTML = svgWrap(
    '<g stroke="#DCE7E4" stroke-width="2" opacity="0.22" fill="none">' +
    '<path d="M0,420 Q50,410 100,420 T200,420 T300,420 T400,420 T500,420 T600,420 T700,420 T800,420 T900,420 T1000,420"/>' +
    '<path d="M0,450 Q50,440 100,450 T200,450 T300,450 T400,450 T500,450 T600,450 T700,450 T800,450 T900,450 T1000,450"/>' +
    '</g>'
  );
  document.getElementById('s2-egrets').innerHTML = svgWrap(
    '<g fill="#F3F1E7" opacity="0.85">' +
    '<path d="M300 300 q10 -10 20 0 q-10 4 -20 0"/>' +
    '<path d="M340 320 q10 -10 20 0 q-10 4 -20 0"/>' +
    '<path d="M700 290 q10 -10 20 0 q-10 4 -20 0"/>' +
    '</g>'
  );
  document.getElementById('s3-rain').innerHTML = svgWrap(
    '<g stroke="#CFE8E4" stroke-width="2" opacity="0.32" stroke-linecap="round">' +
    '<line x1="120" y1="0" x2="90" y2="70"/><line x1="260" y1="30" x2="230" y2="100"/>' +
    '<line x1="420" y1="10" x2="390" y2="80"/><line x1="600" y1="40" x2="570" y2="110"/>' +
    '<line x1="760" y1="0" x2="730" y2="70"/><line x1="900" y1="20" x2="870" y2="90"/>' +
    '</g>'
  );
  document.getElementById('s4-mist').innerHTML = svgWrap(
    '<rect x="0" y="120" width="1000" height="50" fill="#fff" opacity="0.1"/>' +
    '<rect x="0" y="200" width="1000" height="30" fill="#fff" opacity="0.06"/>'
  );
  document.getElementById('s5-waves').innerHTML = svgWrap(
    '<g stroke="#FFE3C2" stroke-width="2" opacity="0.28" fill="none">' +
    '<path d="M0,440 Q200,425 400,440 T800,440 T1000,440"/>' +
    '<path d="M0,470 Q200,455 400,470 T800,470 T1000,470"/>' +
    '</g>'
  );

  var starsHtml = '';
  for(var i=0;i<50;i++){
    var x = Math.random()*1000, y = Math.random()*260;
    var r = 0.6 + Math.random()*1.2;
    starsHtml += '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="#fff" opacity="'+(0.3+Math.random()*0.5)+'"/>';
  }
  document.getElementById('s6-stars').innerHTML = svgWrap(starsHtml);

  /* ---------- Background crossfader ---------- */
  var bgImages = [
    { id:'s1', url:'https://commons.wikimedia.org/wiki/Special:FilePath/House_boat_from_Alappuzha_01.jpg?width=1600' },
    { id:'s2', url:'https://commons.wikimedia.org/wiki/Special:FilePath/Paddy_fields_at_Kadavoor.jpg?width=1600' },
    { id:'s3', url:'https://commons.wikimedia.org/wiki/Special:FilePath/Mountains_of_Western_Ghats.jpg?width=1600' },
    { id:'s4', url:'https://commons.wikimedia.org/wiki/Special:FilePath/Tea_plantations_in_Munnar_town.jpg?width=1600' },
    { id:'s5', url:'https://commons.wikimedia.org/wiki/Special:FilePath/Beach_and_cliff_of_varkala.jpg?width=1600' },
    { id:'s6', url:'https://commons.wikimedia.org/wiki/Special:FilePath/Houseboats_in_Alleppey_Backwaters.jpg?width=1600' },
  ];
  var fader = document.getElementById('bgFader');
  var bgLayers = [];
  bgImages.forEach(function(img){
    var el = document.createElement('div');
    el.className = 'bg-layer';
    el.style.backgroundImage = 'url('+img.url+')';
    fader.appendChild(el);
    bgLayers.push({ el:el, id:img.id });
  });

  function updateBgFade(){
    var vh = window.innerHeight, center = vh * 0.5;
    var sections = Array.prototype.slice.call(document.querySelectorAll('.stop, .outro'));
    var activeIdx = -1, progress = 0;
    for(var i=0;i<sections.length;i++){
      var r = sections[i].getBoundingClientRect();
      if(r.top <= center && r.bottom >= center){
        activeIdx = i;
        progress = (center - r.top) / r.height;
        break;
      }
    }
    // Overlap: previous bg stays visible while next fades in on top
    bgLayers.forEach(function(l, idx){
      var opacity = 0;
      if(idx === activeIdx){
        opacity = 1;
      } else if(activeIdx > 0 && idx === activeIdx - 1) {
        opacity = Math.max(0.15, 1 - progress * 1.5);
      } else if(activeIdx < bgLayers.length - 1 && idx === activeIdx + 1) {
        opacity = progress * 1.2;
      } else if(activeIdx === -1 && idx === 0) {
        opacity = 1;
      }
      l.el.style.opacity = Math.min(1, Math.max(0, opacity)).toFixed(3);
    });
  }

  /* ---------- Parallax engine ---------- */
  var layers = Array.prototype.slice.call(document.querySelectorAll('.pl, .pl-photo'));

  function updateParallax(){
    var vh = window.innerHeight;
    layers.forEach(function(el){
      var speed = parseFloat(el.getAttribute('data-speed')) || 0.3;
      var section = el.closest('.stop, .outro, .hero');
      if(!section) return;
      var rect = section.getBoundingClientRect();
      var total = rect.height + vh;
      var progress = (vh - rect.top) / total;
      progress = Math.max(0, Math.min(1, progress));
      var amplitude = 460;
      var y = (progress - 0.5) * amplitude * speed;
      el.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0)';
    });
  }

  var ticking = false;
  function onScroll(){
    if(!ticking){
      window.requestAnimationFrame(function(){ updateParallax(); updateBgFade(); ticking = false; });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  updateParallax();
  updateBgFade();

  /* ---------- Journey log + bird ---------- */
  var bird = document.getElementById('bird');
  var hudElev = document.getElementById('hud-elev');
  var hudTime = document.getElementById('hud-time');
  var hudDist = document.getElementById('hud-dist');
  var hudStop = document.getElementById('hud-stop');
  var trackDots = document.querySelectorAll('#hud-track span');
  var sections = Array.prototype.slice.call(document.querySelectorAll('.stop, .outro'));

  function lerp(a,b,t){ return a + (b-a)*t; }
  function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }

  function minutesFromClock(str){
    var m = str.match(/(\d+):(\d+)\s*(AM|PM)/i);
    var h = parseInt(m[1],10) % 12;
    if(/PM/i.test(m[3])) h += 12;
    return h*60 + parseInt(m[2],10);
  }
  function clockFromMinutes(min){
    min = ((min % 1440) + 1440) % 1440;
    var h = Math.floor(min/60), m = Math.round(min%60);
    var ap = h >= 12 ? 'PM' : 'AM';
    var h12 = h % 12; if(h12 === 0) h12 = 12;
    return h12 + ':' + (m<10?'0':'') + m + ' ' + ap;
  }

  function updateJourney(){
    var vh = window.innerHeight;
    var center = vh * 0.5;
    var current = null, progress = 0;

    for(var i=0;i<sections.length;i++){
      var r = sections[i].getBoundingClientRect();
      if(r.top <= center && r.bottom >= center){
        current = sections[i];
        progress = clamp((center - r.top) / r.height, 0, 1);
        break;
      }
    }

    if(current && current.hasAttribute('data-elev-min')){
      var elevMin = parseFloat(current.getAttribute('data-elev-min'));
      var elevMax = parseFloat(current.getAttribute('data-elev-max'));
      var distMin = parseFloat(current.getAttribute('data-dist-min'));
      var distMax = parseFloat(current.getAttribute('data-dist-max'));
      var t0 = minutesFromClock(current.getAttribute('data-time'));
      var t1 = minutesFromClock(current.getAttribute('data-time-end'));
      var name = current.getAttribute('data-name');

      var elev = lerp(elevMin, elevMax, progress);
      hudElev.textContent = elev.toFixed(1).replace(/\.0$/,'') + ' m';
      hudTime.textContent = clockFromMinutes(lerp(t0, t1, progress));
      hudDist.textContent = Math.round(lerp(distMin, distMax, progress)) + ' km';
      hudStop.textContent = name;

      var idx = sections.indexOf(current);
      trackDots.forEach(function(dot, i){ dot.classList.toggle('active', i <= idx); });

      var docTop = sections[0].offsetTop;
      var last = sections[sections.length-1];
      var docBottom = last.offsetTop + last.offsetHeight;
      var whole = clamp((window.scrollY - docTop + center) / (docBottom - docTop), 0, 1);
      bird.style.top = (20 + whole*46) + '%';
      bird.style.left = (10 + Math.sin(whole*Math.PI*3) * 6 + whole*8) + '%';
    } else {
      var r0 = sections[0].getBoundingClientRect();
      if(r0.top > center){
        hudElev.textContent = '0 m';
        hudTime.textContent = '5:40 AM';
        hudDist.textContent = '0 km';
        hudStop.textContent = 'Setting out';
        trackDots.forEach(function(dot){ dot.classList.remove('active'); });
        bird.style.top = '32%'; bird.style.left = '14%';
      } else {
        hudElev.textContent = '0 m';
        hudTime.textContent = '6:45 PM';
        hudDist.textContent = '210 km';
        hudStop.textContent = 'Kadaloram';
        trackDots.forEach(function(dot){ dot.classList.add('active'); });
        bird.style.top = '68%'; bird.style.left = '20%';
      }
    }
  }

  var jTicking = false;
  function onScrollJourney(){
    if(!jTicking){
      window.requestAnimationFrame(function(){ updateJourney(); jTicking = false; });
      jTicking = true;
    }
  }
  window.addEventListener('scroll', onScrollJourney, {passive:true});
  window.addEventListener('resize', onScrollJourney);
  updateJourney();

  document.getElementById('replay').addEventListener('click', function(){
    document.getElementById('hero').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth'});
  });

})();
