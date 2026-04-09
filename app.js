document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const qs = new URLSearchParams(location.search);
  const isLayoutEdit = qs.get("layout") === "edit";

  // 보정된 수동 위치 (Havana, Mexico City 등)
let MANUAL_LAYOUTS = {
  "SEOUL": { "x": 75.55, "y": 49.4 },
  "BUSAN": { "x": 75.63, "y": 52.31 },
  "TOKYO": { "x": 80.35, "y": 48.69 },
  "OSAKA": { "x": 78.48, "y": 51.44 },
  "BEIJING": { "x": 72.34, "y": 50.03 },
  "SHANGHAI": { "x": 73.2, "y": 54.2 },
  "HONG_KONG": { "x": 73.13, "y": 58.29 },
  "TAIPEI": { "x": 75.98, "y": 56.55 },
  "BANGKOK": { "x": 69.1, "y": 63.16 },
  "SINGAPORE": { "x": 71.09, "y": 71.19 },
  "KUALA_LUMPUR": { "x": 69.8, "y": 67.88 },
  "JAKARTA": { "x": 73.09, "y": 73.78 },
  "HANOI": { "x": 70.16, "y": 59.47 },
  "HO_CHI_MINH_CITY": { "x": 71.56, "y": 62.69 },
  "MANILA": { "x": 74.96, "y": 63.63 },
  "DELHI": { "x": 65.94, "y": 61.43 },
  "MUMBAI": { "x": 63.16, "y": 61.04 },
  "DUBAI": { "x": 58.83, "y": 57.26 },
  "ISTANBUL": { "x": 55.12, "y": 48.14 },
  "ATHENS": { "x": 52.19, "y": 49.87 },
  "ROME": { "x": 50.08, "y": 47.12 },
  "VENICE": { "x": 52.66, "y": 45.86 },
  "PARIS": { "x": 47.66, "y": 42 },
  "LONDON": { "x": 45.16, "y": 37.99 },
  "BERLIN": { "x": 51.41, "y": 38.94 },
  "MADRID": { "x": 44.22, "y": 47.51 },
  "BARCELONA": { "x": 47.19, "y": 48.06 },
  "AMSTERDAM": { "x": 48.13, "y": 37.28 },
  "VIENNA": { "x": 54.14, "y": 42.71 },
  "PRAGUE": { "x": 51.68, "y": 40.82 },
  "ZURICH": { "x": 51.02, "y": 43.5 },
  "STOCKHOLM": { "x": 49.49, "y": 32.56 },
  "OSLO": { "x": 48.09, "y": 30.2 },
  "HELSINKI": { "x": 52.85, "y": 32.01 },
  "NEW_YORK": { "x": 30.78, "y": 46.49 },
  "LOS_ANGELES": { "x": 21.17, "y": 49.63 },
  "SAN_FRANCISCO": { "x": 20.51, "y": 46.88 },
  "CHICAGO": { "x": 28.13, "y": 43.5 },
  "TORONTO": { "x": 30, "y": 40.59 },
  "VANCOUVER": { "x": 19.3, "y": 41.37 },
  "MEXICO_CITY": { "x": 24.53, "y": 55.53 },
  "HAVANA": { "x": 30.31, "y": 59.54 },
  "RIO_DE_JANEIRO": { "x": 38.71, "y": 75.75 },
  "SAO_PAULO": { "x": 36.64, "y": 78.89 },
  "BUENOS_AIRES": { "x": 35.74, "y": 82.98 },
  "SANTIAGO": { "x": 31.48, "y": 85.26 },
  "LIMA": { "x": 30, "y": 72.92 },
  "CAIRO": { "x": 54.26, "y": 54.67 },
  "CASABLANCA": { "x": 45.51, "y": 52.07 },
  "NAIROBI": { "x": 56.41, "y": 67.88 },
  "LAGOS": { "x": 47.58, "y": 65.21 },
  "CAPE_TOWN": { "x": 51.37, "y": 84.87 },
  "JOHANNESBURG": { "x": 53.36, "y": 81.73 },
  "SYDNEY": { "x": 80.98, "y": 82.67 },
  "MELBOURNE": { "x": 78.79, "y": 84.48 },
  "AUCKLAND": { "x": 86.25, "y": 84.48 }
};

  

  // 2. 전체 도시 데이터 (56개 전체 및 초성 데이터 포함)
  const ALL_CITIES = [
    {"id":"SEOUL","ko":"서울","en":"Seoul","country":"대한민국","continent":"ASIA","lat":37.5665,"lon":126.9780,"koInitials":"ㅅㅇ"},
    {"id":"BUSAN","ko":"부산","en":"Busan","country":"대한민국","continent":"ASIA","lat":35.1796,"lon":129.0756,"koInitials":"ㅂㅅ"},
    {"id":"TOKYO","ko":"도쿄","en":"Tokyo","country":"일본","continent":"ASIA","lat":35.6762,"lon":139.6503,"koInitials":"ㄷㅋ"},
    {"id":"OSAKA","ko":"오사카","en":"Osaka","country":"일본","continent":"ASIA","lat":34.6937,"lon":135.5023,"koInitials":"ㅇㅅㅋ"},
    {"id":"BEIJING","ko":"베이징","en":"Beijing","country":"중국","continent":"ASIA","lat":39.9042,"lon":116.4074,"koInitials":"ㅂㅇㅈ"},
    {"id":"SHANGHAI","ko":"상하이","en":"Shanghai","country":"중국","continent":"ASIA","lat":31.2304,"lon":121.4737,"koInitials":"ㅅㅎㅇ"},
    {"id":"HONG_KONG","ko":"홍콩","en":"Hong Kong","country":"중국","continent":"ASIA","lat":22.3193,"lon":114.1694,"koInitials":"ㅎㅋ"},
    {"id":"TAIPEI","ko":"타이베이","en":"Taipei","country":"대만","continent":"ASIA","lat":25.0330,"lon":121.5654,"koInitials":"ㅌㅇㅂㅇ"},
    {"id":"BANGKOK","ko":"방콕","en":"Bangkok","country":"태국","continent":"ASIA","lat":13.7563,"lon":100.5018,"koInitials":"ㅂㅋ"},
    {"id":"SINGAPORE","ko":"싱가포르","en":"Singapore","country":"싱가포르","continent":"ASIA","lat":1.3521,"lon":103.8198,"koInitials":"ㅅㄱㅍㄹ"},
    {"id":"KUALA_LUMPUR","ko":"쿠알라룸푸르","en":"Kuala Lumpur","country":"말레이시아","continent":"ASIA","lat":3.1390,"lon":101.6869,"koInitials":"ㅋㅇㄹㄹㅍㄹ"},
    {"id":"JAKARTA","ko":"자카르타","en":"Jakarta","country":"인도네시아","continent":"ASIA","lat":-6.2088,"lon":106.8456,"koInitials":"ㅈㅋㄹㅌ"},
    {"id":"HANOI","ko":"하노이","en":"Hanoi","country":"베트남","continent":"ASIA","lat":21.0278,"lon":105.8342,"koInitials":"ㅎㄴㅇ"},
    {"id":"HO_CHI_MINH_CITY","ko":"호치민","en":"Ho Chi Minh City","country":"베트남","continent":"ASIA","lat":10.8231,"lon":106.6297,"koInitials":"ㅎㅊㅁ"},
    {"id":"MANILA","ko":"마닐라","en":"Manila","country":"필리핀","continent":"ASIA","lat":14.5995,"lon":120.9842,"koInitials":"ㅁㄴㄹ"},
    {"id":"DELHI","ko":"델리","en":"Delhi","country":"인도","continent":"ASIA","lat":28.6139,"lon":77.2090,"koInitials":"ㄷㄹ"},
    {"id":"MUMBAI","ko":"뭄바이","en":"Mumbai","country":"인도","continent":"ASIA","lat":19.0760,"lon":72.8777,"koInitials":"ㅁㅂㅇ"},
    {"id":"DUBAI","ko":"두바이","en":"Dubai","country":"아랍에미리트","continent":"ASIA","lat":25.2048,"lon":55.2708,"koInitials":"ㄷㅂㅇ"},
    {"id":"ISTANBUL","ko":"이스탄불","en":"Istanbul","country":"튀르키예","continent":"EUROPE","lat":41.0082,"lon":28.9784,"koInitials":"ㅇㅅㅌㅂ"},
    {"id":"ATHENS","ko":"아테네","en":"Athens","country":"그리스","continent":"EUROPE","lat":37.9838,"lon":23.7275,"koInitials":"ㅇㅌㄴ"},
    {"id":"ROME","ko":"로마","en":"Rome","country":"이탈리아","continent":"EUROPE","lat":41.9028,"lon":12.4964,"koInitials":"ㄹㅁ"},
    {"id":"VENICE","ko":"베네치아","en":"Venice","country":"이탈리아","continent":"EUROPE","lat":45.4408,"lon":12.3155,"koInitials":"ㅂㄴㅊㅇ"},
    {"id":"PARIS","ko":"파리","en":"Paris","country":"프랑스","continent":"EUROPE","lat":48.8566,"lon":2.3522,"koInitials":"ㅍㄹ"},
    {"id":"LONDON","ko":"런던","en":"London","country":"영국","continent":"EUROPE","lat":51.5074,"lon":-0.1278,"koInitials":"ㄹㄷ"},
    {"id":"BERLIN","ko":"베를린","en":"Berlin","country":"독일","continent":"EUROPE","lat":52.5200,"lon":13.4050,"koInitials":"ㅂㄹㄹ"},
    {"id":"MADRID","ko":"마드리드","en":"Madrid","country":"스페인","continent":"EUROPE","lat":40.4168,"lon":-3.7038,"koInitials":"ㅁㄷㄹㄷ"},
    {"id":"BARCELONA","ko":"바르셀로나","en":"Barcelona","country":"스페인","continent":"EUROPE","lat":41.3851,"lon":2.1734,"koInitials":"ㅂㄹㅅㄹㄴ"},
    {"id":"AMSTERDAM","ko":"암스테르담","en":"Amsterdam","country":"네덜란드","continent":"EUROPE","lat":52.3676,"lon":4.9041,"koInitials":"ㅇㅅㅌㄹㄷ"},
    {"id":"VIENNA","ko":"비엔나","en":"Vienna","country":"오스트리아","continent":"EUROPE","lat":48.2082,"lon":16.3738,"koInitials":"ㅂㅇㄴ"},
    {"id":"PRAGUE","ko":"프라하","en":"Prague","country":"체코","continent":"EUROPE","lat":50.0755,"lon":14.4378,"koInitials":"ㅍㄹㅎ"},
    {"id":"ZURICH","ko":"취리히","en":"Zurich","country":"스위스","continent":"EUROPE","lat":47.3769,"lon":8.5417,"koInitials":"ㅊㄹㅎ"},
    {"id":"STOCKHOLM","ko":"스톡홀름","en":"Stockholm","country":"스웨덴","continent":"EUROPE","lat":59.3293,"lon":18.0686,"koInitials":"ㅅㅌㅎㄹㅁ"},
    {"id":"OSLO","ko":"오슬로","en":"Oslo","country":"노르웨이","continent":"EUROPE","lat":59.9139,"lon":10.7522,"koInitials":"ㅇㅅㄹ"},
    {"id":"HELSINKI","ko":"헬싱키","en":"Helsinki","country":"핀란드","continent":"EUROPE","lat":60.1699,"lon":24.9384,"koInitials":"ㅎㅅㅋ"},
    {"id":"NEW_YORK","ko":"뉴욕","en":"New York","country":"미국","continent":"AMERICAS","lat":40.7128,"lon":-74.0060,"koInitials":"ㄴㅇ"},
    {"id":"LOS_ANGELES","ko":"로스앤젤레스","en":"Los Angeles","country":"미국","continent":"AMERICAS","lat":34.0522,"lon":-118.2437,"koInitials":"ㄹㅅㅇㅈㄹㅅ"},
    {"id":"SAN_FRANCISCO","ko":"샌프란시스코","en":"San Francisco","country":"미국","continent":"AMERICAS","lat":37.7749,"lon":-122.4194,"koInitials":"ㅅㅍㄹㅅㅅㅋ"},
    {"id":"CHICAGO","ko":"시카고","en":"Chicago","country":"미국","continent":"AMERICAS","lat":41.8781,"lon":-87.6298,"koInitials":"ㅅㅋㄱ"},
    {"id":"TORONTO","ko":"토론토","en":"Toronto","country":"캐나다","continent":"AMERICAS","lat":43.6532,"lon":-79.3832,"koInitials":"ㅌㄹㅌ"},
    {"id":"VANCOUVER","ko":"밴쿠버","en":"Vancouver","country":"캐나다","continent":"AMERICAS","lat":49.2827,"lon":-123.1207,"koInitials":"ㅂㅋㅂ"},
    {"id":"MEXICO_CITY","ko":"멕시코시티","en":"Mexico City","country":"멕시코","continent":"AMERICAS","lat":19.4326,"lon":-99.1332,"koInitials":"ㅁㅅㅋㅅㅌ"},
    {"id":"HAVANA","ko":"아바나","en":"Havana","country":"쿠바","continent":"AMERICAS","lat":23.1136,"lon":-82.3666,"koInitials":"ㅇㅂㄴ"},
    {"id":"RIO_DE_JANEIRO","ko":"리우데자네이루","en":"Rio de Janeiro","country":"브라질","continent":"AMERICAS","lat":-22.9068,"lon":-43.1729,"koInitials":"ㄹㅇㄷㅈㄴㅇㄹ"},
    {"id":"SAO_PAULO","ko":"상파울루","en":"Sao Paulo","country":"브라질","continent":"AMERICAS","lat":-23.5505,"lon":-46.6333,"koInitials":"ㅅㅍㅇㄹ"},
    {"id":"BUENOS_AIRES","ko":"부에노스아이레스","en":"Buenos Aires","country":"아르헨티나","continent":"AMERICAS","lat":-34.6037,"lon":-58.3816,"koInitials":"ㅂㅇㄴㅅㅇㅇㄹㅅ"},
    {"id":"SANTIAGO","ko":"산티아고","en":"Santiago","country":"칠레","continent":"AMERICAS","lat":-33.4489,"lon":-70.6693,"koInitials":"ㅅㅌㅇㄱ"},
    {"id":"LIMA","ko":"리마","en":"Lima","country":"페루","continent":"AMERICAS","lat":-12.0464,"lon":-77.0428,"koInitials":"ㄹㅁ"},
    {"id":"CAIRO","ko":"카이로","en":"Cairo","country":"이집트","continent":"AFRICA","lat":30.0444,"lon":31.2357,"koInitials":"ㅋㅇㄹ"},
    {"id":"CASABLANCA","ko":"카사블랑카","en":"Casablanca","country":"모로코","continent":"AFRICA","lat":33.5731,"lon":-7.5898,"koInitials":"ㅋㅅㅂㄹㅋ"},
    {"id":"NAIROBI","ko":"나이로비","en":"Nairobi","country":"케냐","continent":"AFRICA","lat":-1.2921,"lon":36.8219,"koInitials":"ㄴㅇㄹㅂ"},
    {"id":"LAGOS","ko":"라고스","en":"Lagos","country":"나이지리아","continent":"AFRICA","lat":6.5244,"lon":3.3792,"koInitials":"ㄹㄱㅅ"},
    {"id":"CAPE_TOWN","ko":"케이프타운","en":"Cape Town","country":"남아프리카공화국","continent":"AFRICA","lat":-33.9249,"lon":18.4241,"koInitials":"ㅋㅇㅍㅌㅇ"},
    {"id":"JOHANNESBURG","ko":"요하네스버그","en":"Johannesburg","country":"남아프리카공화국","continent":"AFRICA","lat":-26.2041,"lon":28.0473,"koInitials":"ㅇㅎㄴㅅㅂㄱ"},
    {"id":"SYDNEY","ko":"시드니","en":"Sydney","country":"호주","continent":"OCEANIA","lat":-33.8688,"lon":151.2093,"koInitials":"ㅅㄷㄴ"},
    {"id":"MELBOURNE","ko":"멜버른","en":"Melbourne","country":"호주","continent":"OCEANIA","lat":-37.8136,"lon":144.9631,"koInitials":"ㅁㄹㅂㄹㄴ"},
    {"id":"AUCKLAND","ko":"오클랜드","en":"Auckland","country":"뉴질랜드","continent":"OCEANIA","lat":-36.8485,"lon":174.7633,"koInitials":"ㅇㅋㄹㄷ"}
  ];

  let cities = [], picked = new Set(), eliminated = new Set(), answerId = null;
  let step = 0, dragState = null;

  let hintState = { continent: false, enLetters: new Set(), koInitials: new Set() };

  const toast = (msg) => {
    const t = $("toast"); t.textContent = msg; t.style.opacity = 1;
    setTimeout(() => t.style.opacity = 0, 1500);
  };

  const lonLatToXY = (lon, lat) => ({ x: (lon + 180) / 360, y: (90 - lat) / 180 });

  function getPos(city) {
    if (MANUAL_LAYOUTS[city.id]) return MANUAL_LAYOUTS[city.id];
    const raw = lonLatToXY(city.lon, city.lat);
    return { x: raw.x * 100, y: raw.y * 100 };
  }

  function renderCities() {
    const layer = $("citiesLayer");
    layer.innerHTML = "";
    cities.forEach(c => {
      const pos = getPos(c);
      const el = document.createElement("div");
      el.className = "city";
      el.dataset.id = c.id;
      el.style.left = pos.x + "%"; 
      el.style.top = pos.y + "%";
      el.innerHTML = `<span class="dot" style="width:6px; height:6px; background:#111; border-radius:50%"></span><span class="label" style="font-weight:700; font-size:12px;">${c.ko}</span>`;
      el.onclick = () => onCityClick(c.id);
      layer.appendChild(el);
    });
    applyCityClasses();
  }

  function applyCityClasses() {
    document.querySelectorAll(".city").forEach(el => {
      const id = el.dataset.id;
      el.classList.toggle("selected", picked.has(id));
      el.classList.toggle("eliminated", eliminated.has(id));
    });
    $("remainCount").textContent = cities.filter(c => !eliminated.has(c.id)).length;
    $("pickCount").textContent = picked.size;
  }

  function onCityClick(id) {
    if (step === 1) {
      picked.has(id) ? picked.delete(id) : picked.add(id);
      applyCityClasses();
    } else if (step === 3) {
      if (id === answerId) {
        $("victoryCityName").textContent = cities.find(c => c.id === id).ko;
        $("victoryOverlay").classList.add("show");
      } else {
        eliminated.add(id); toast("❌ 다른 길입니다!"); applyCityClasses();
      }
    }
  }

  function updateHintUI() {
    const ans = cities.find(c => c.id === answerId);
    $("hintPanel").style.display = "block";
    if (hintState.continent) $("hintContinent").innerHTML = `대륙: <b>${ans.continent}</b>`;
    if (hintState.enLetters.size > 0) $("hintEnList").textContent = Array.from(hintState.enLetters).sort().join(", ");
    if (hintState.koInitials.size > 0) $("hintKoList").textContent = Array.from(hintState.koInitials).sort().join(", ");
  }

  function renderUI() {
    $("stepBadge").textContent = `STEP ${step}`;
    const body = $("panelBody"), ctrl = $("controls");
    body.innerHTML = ""; ctrl.innerHTML = "";

    if (step === 0) {
      body.innerHTML = `도시 개수: <b id="rangeVal" style="color:var(--primary); font-size:20px;">20</b>개`;
      const range = document.createElement("input");
      range.type = "range"; range.min = "10"; range.max = "50"; range.value = "20";
      range.style.width = "100%";
      range.oninput = () => $("rangeVal").textContent = range.value;
      
      const startBtn = document.createElement("button");
      startBtn.className = "btn"; startBtn.textContent = "게임 시작";
      startBtn.onclick = () => {
        const count = parseInt(range.value);
        cities = ALL_CITIES.sort(() => Math.random() - 0.5).slice(0, count);
        step = 1; renderCities(); renderUI();
      };
      ctrl.appendChild(range); ctrl.appendChild(startBtn);
    } 
    else if (step === 1) {
      body.innerHTML = "도시를 선택</b>하세요.";
      const nextBtn = document.createElement("button");
      nextBtn.className = "btn"; nextBtn.textContent = "선택 완료";
      nextBtn.onclick = () => {
        if (picked.size === 0) return toast("도시를 선택해주세요!");
        const pool = cities.filter(c => !picked.has(c.id));
        answerId = pool[Math.floor(Math.random() * pool.length)].id;
        step = 2; renderUI();
      };
      ctrl.appendChild(nextBtn);
    } 
    else if (step === 2) {
      body.innerHTML = "<b>주사위</b>로 도시 제거";
      const grid = document.createElement("div"); grid.className = "dice-grid";
      [1,2,3,4,5,6].forEach(n => {
        const b = document.createElement("button");
        b.className = "btn secondary"; b.textContent = n;
        b.onclick = () => {
          const p = cities.filter(c => !eliminated.has(c.id) && c.id !== answerId);
          p.sort(() => Math.random() - 0.5).slice(0, n).forEach(c => eliminated.add(c.id));
          applyCityClasses();
        };
        grid.appendChild(b);
      });
      const findBtn = document.createElement("button");
      findBtn.className = "btn"; findBtn.textContent = "목적지 찾기";
      findBtn.onclick = () => { step = 3; renderUI(); };
      ctrl.appendChild(grid); ctrl.appendChild(findBtn);
    } 
    else if (step === 3) {
      body.innerHTML = "목적지 찾기!";
      const stack = document.createElement("div"); stack.className = "hint-stack";
      const hData = [
        { id: "hCont", text: "대륙 힌트", action: () => { hintState.continent = true; } },
        { id: "hEn", text: "영문 알파벳", action: () => {
          const ans = cities.find(c => c.id === answerId);
          const letters = ans.en.replace(/\s/g, '').toUpperCase().split('');
          const filtered = letters.filter(l => !hintState.enLetters.has(l));
          if (filtered.length) hintState.enLetters.add(filtered[Math.floor(Math.random() * filtered.length)]);
        } },
        { id: "hKo", text: "한글 초성", action: () => {
          const ans = cities.find(c => c.id === answerId);
          const initials = ans.koInitials.split('');
          const filtered = initials.filter(i => !hintState.koInitials.has(i));
          if (filtered.length) hintState.koInitials.add(filtered[Math.floor(Math.random() * filtered.length)]);
        } }
      ];
      hData.forEach(h => {
        const b = document.createElement("button");
        b.className = "btn secondary"; b.textContent = h.text;
        b.onclick = () => { h.action(); updateHintUI(); };
        stack.appendChild(b);
      });
      ctrl.appendChild(stack);
    }
  }

  $("fullResetBtn").onclick = () => location.reload();
  renderUI();
});