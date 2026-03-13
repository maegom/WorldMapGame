(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);

  const ALL_CITIES = [
    {id:"SEOUL",ko:"서울",en:"Seoul",country:"대한민국",continent:"ASIA",lat:37.5665,lon:126.9780,koInitials:"ㅅㅇ"},
    {id:"BUSAN",ko:"부산",en:"Busan",country:"대한민국",continent:"ASIA",lat:35.1796,lon:129.0756,koInitials:"ㅂㅅ"},
    {id:"TOKYO",ko:"도쿄",en:"Tokyo",country:"일본",continent:"ASIA",lat:35.6762,lon:139.6503,koInitials:"ㄷㅋ"},
    {id:"OSAKA",ko:"오사카",en:"Osaka",country:"일본",continent:"ASIA",lat:34.6937,lon:135.5023,koInitials:"ㅇㅅㅋ"},
    {id:"BEIJING",ko:"베이징",en:"Beijing",country:"중국",continent:"ASIA",lat:39.9042,lon:116.4074,koInitials:"ㅂㅇㅈ"},
    {id:"SHANGHAI",ko:"상하이",en:"Shanghai",country:"중국",continent:"ASIA",lat:31.2304,lon:121.4737,koInitials:"ㅅㅎㅇ"},
    {id:"HONG_KONG",ko:"홍콩",en:"Hong Kong",country:"중국",continent:"ASIA",lat:22.3193,lon:114.1694,koInitials:"ㅎㅋ"},
    {id:"TAIPEI",ko:"타이베이",en:"Taipei",country:"대만",continent:"ASIA",lat:25.0330,lon:121.5654,koInitials:"ㅌㅇㅂㅇ"},
    {id:"BANGKOK",ko:"방콕",en:"Bangkok",country:"태국",continent:"ASIA",lat:13.7563,lon:100.5018,koInitials:"ㅂㅋ"},
    {id:"SINGAPORE",ko:"싱가포르",en:"Singapore",country:"싱가포르",continent:"ASIA",lat:1.3521,lon:103.8198,koInitials:"ㅅㄱㅍㄹ"},
    {id:"KUALA_LUMPUR",ko:"쿠알라룸푸르",en:"Kuala Lumpur",country:"말레이시아",continent:"ASIA",lat:3.1390,lon:101.6869,koInitials:"ㅋㅇㄹㄹㅍㄹ"},
    {id:"JAKARTA",ko:"자카르타",en:"Jakarta",country:"인도네시아",continent:"ASIA",lat:-6.2088,lon:106.8456,koInitials:"ㅈㅋㄹㅌ"},
    {id:"HANOI",ko:"하노이",en:"Hanoi",country:"베트남",continent:"ASIA",lat:21.0278,lon:105.8342,koInitials:"ㅎㄴㅇ"},
    {id:"HO_CHI_MINH_CITY",ko:"호치민",en:"Ho Chi Minh City",country:"베트남",continent:"ASIA",lat:10.8231,lon:106.6297,koInitials:"ㅎㅊㅁ"},
    {id:"MANILA",ko:"마닐라",en:"Manila",country:"필리핀",continent:"ASIA",lat:14.5995,lon:120.9842,koInitials:"ㅁㄴㄹ"},
    {id:"DELHI",ko:"델리",en:"Delhi",country:"인도",continent:"ASIA",lat:28.6139,lon:77.2090,koInitials:"ㄷㄹ"},
    {id:"MUMBAI",ko:"뭄바이",en:"Mumbai",country:"인도",continent:"ASIA",lat:19.0760,lon:72.8777,koInitials:"ㅁㅂㅇ"},
    {id:"DUBAI",ko:"두바이",en:"Dubai",country:"아랍에미리트",continent:"ASIA",lat:25.2048,lon:55.2708,koInitials:"ㄷㅂㅇ"},

    {id:"ISTANBUL",ko:"이스탄불",en:"Istanbul",country:"튀르키예",continent:"EUROPE",lat:41.0082,lon:28.9784,koInitials:"ㅇㅅㅌㅂ"},
    {id:"ATHENS",ko:"아테네",en:"Athens",country:"그리스",continent:"EUROPE",lat:37.9838,lon:23.7275,koInitials:"ㅇㅌㄴ"},
    {id:"ROME",ko:"로마",en:"Rome",country:"이탈리아",continent:"EUROPE",lat:41.9028,lon:12.4964,koInitials:"ㄹㅁ"},
    {id:"VENICE",ko:"베네치아",en:"Venice",country:"이탈리아",continent:"EUROPE",lat:45.4408,lon:12.3155,koInitials:"ㅂㄴㅊㅇ"},
    {id:"PARIS",ko:"파리",en:"Paris",country:"프랑스",continent:"EUROPE",lat:48.8566,lon:2.3522,koInitials:"ㅍㄹ"},
    {id:"LONDON",ko:"런던",en:"London",country:"영국",continent:"EUROPE",lat:51.5074,lon:-0.1278,koInitials:"ㄹㄷ"},
    {id:"BERLIN",ko:"베를린",en:"Berlin",country:"독일",continent:"EUROPE",lat:52.5200,lon:13.4050,koInitials:"ㅂㄹㄹ"},
    {id:"MADRID",ko:"마드리드",en:"Madrid",country:"스페인",continent:"EUROPE",lat:40.4168,lon:-3.7038,koInitials:"ㅁㄷㄹㄷ"},
    {id:"BARCELONA",ko:"바르셀로나",en:"Barcelona",country:"스페인",continent:"EUROPE",lat:41.3851,lon:2.1734,koInitials:"ㅂㄹㅅㄹㄴ"},
    {id:"AMSTERDAM",ko:"암스테르담",en:"Amsterdam",country:"네덜란드",continent:"EUROPE",lat:52.3676,lon:4.9041,koInitials:"ㅇㅅㅌㄹㄷ"},
    {id:"VIENNA",ko:"비엔나",en:"Vienna",country:"오스트리아",continent:"EUROPE",lat:48.2082,lon:16.3738,koInitials:"ㅂㅇㄴ"},
    {id:"PRAGUE",ko:"프라하",en:"Prague",country:"체코",continent:"EUROPE",lat:50.0755,lon:14.4378,koInitials:"ㅍㄹㅎ"},
    {id:"ZURICH",ko:"취리히",en:"Zurich",country:"스위스",continent:"EUROPE",lat:47.3769,lon:8.5417,koInitials:"ㅊㄹㅎ"},
    {id:"STOCKHOLM",ko:"스톡홀름",en:"Stockholm",country:"스웨덴",continent:"EUROPE",lat:59.3293,lon:18.0686,koInitials:"ㅅㅌㅎㄹㅁ"},
    {id:"OSLO",ko:"오슬로",en:"Oslo",country:"노르웨이",continent:"EUROPE",lat:59.9139,lon:10.7522,koInitials:"ㅇㅅㄹ"},
    {id:"HELSINKI",ko:"헬싱키",en:"Helsinki",country:"핀란드",continent:"EUROPE",lat:60.1699,lon:24.9384,koInitials:"ㅎㅅㅋ"},

    {id:"NEW_YORK",ko:"뉴욕",en:"New York",country:"미국",continent:"AMERICAS",lat:40.7128,lon:-74.0060,koInitials:"ㄴㅇ"},
    {id:"LOS_ANGELES",ko:"로스앤젤레스",en:"Los Angeles",country:"미국",continent:"AMERICAS",lat:34.0522,lon:-118.2437,koInitials:"ㄹㅅㅇㅈㄹㅅ"},
    {id:"SAN_FRANCISCO",ko:"샌프란시스코",en:"San Francisco",country:"미국",continent:"AMERICAS",lat:37.7749,lon:-122.4194,koInitials:"ㅅㅍㄹㅅㅅㅋ"},
    {id:"CHICAGO",ko:"시카고",en:"Chicago",country:"미국",continent:"AMERICAS",lat:41.8781,lon:-87.6298,koInitials:"ㅅㅋㄱ"},
    {id:"TORONTO",ko:"토론토",en:"Toronto",country:"캐나다",continent:"AMERICAS",lat:43.6532,lon:-79.3832,koInitials:"ㅌㄹㅌ"},
    {id:"VANCOUVER",ko:"밴쿠버",en:"Vancouver",country:"캐나다",continent:"AMERICAS",lat:49.2827,lon:-123.1207,koInitials:"ㅂㅋㅂ"},
    {id:"MEXICO_CITY",ko:"멕시코시티",en:"Mexico City",country:"멕시코",continent:"AMERICAS",lat:19.4326,lon:-99.1332,koInitials:"ㅁㅅㅋㅅㅌ"},
    {id:"HAVANA",ko:"아바나",en:"Havana",country:"쿠바",continent:"AMERICAS",lat:23.1136,lon:-82.3666,koInitials:"ㅇㅂㄴ"},
    {id:"RIO_DE_JANEIRO",ko:"리우데자네이루",en:"Rio de Janeiro",country:"브라질",continent:"AMERICAS",lat:-22.9068,lon:-43.1729,koInitials:"ㄹㅇㄷㅈㄴㅇㄹ"},
    {id:"SAO_PAULO",ko:"상파울루",en:"Sao Paulo",country:"브라질",continent:"AMERICAS",lat:-23.5505,lon:-46.6333,koInitials:"ㅅㅍㅇㄹ"},
    {id:"BUENOS_AIRES",ko:"부에노스아이레스",en:"Buenos Aires",country:"아르헨티나",continent:"AMERICAS",lat:-34.6037,lon:-58.3816,koInitials:"ㅂㅇㄴㅅㅇㅇㄹㅅ"},
    {id:"SANTIAGO",ko:"산티아고",en:"Santiago",country:"칠레",continent:"AMERICAS",lat:-33.4489,lon:-70.6693,koInitials:"ㅅㅌㅇㄱ"},
    {id:"LIMA",ko:"리마",en:"Lima",country:"페루",continent:"AMERICAS",lat:-12.0464,lon:-77.0428,koInitials:"ㄹㅁ"},

    {id:"CAIRO",ko:"카이로",en:"Cairo",country:"이집트",continent:"AFRICA",lat:30.0444,lon:31.2357,koInitials:"ㅋㅇㄹ"},
    {id:"CASABLANCA",ko:"카사블랑카",en:"Casablanca",country:"모로코",continent:"AFRICA",lat:33.5731,lon:-7.5898,koInitials:"ㅋㅅㅂㄹㅋ"},
    {id:"NAIROBI",ko:"나이로비",en:"Nairobi",country:"케냐",continent:"AFRICA",lat:-1.2921,lon:36.8219,koInitials:"ㄴㅇㄹㅂ"},
    {id:"LAGOS",ko:"라고스",en:"Lagos",country:"나이지리아",continent:"AFRICA",lat:6.5244,lon:3.3792,koInitials:"ㄹㄱㅅ"},
    {id:"CAPE_TOWN",ko:"케이프타운",en:"Cape Town",country:"남아프리카공화국",continent:"AFRICA",lat:-33.9249,lon:18.4241,koInitials:"ㅋㅇㅍㅌㅇ"},
    {id:"JOHANNESBURG",ko:"요하네스버그",en:"Johannesburg",country:"남아프리카공화국",continent:"AFRICA",lat:-26.2041,lon:28.0473,koInitials:"ㅇㅎㄴㅅㅂㄱ"},

    {id:"SYDNEY",ko:"시드니",en:"Sydney",country:"호주",continent:"OCEANIA",lat:-33.8688,lon:151.2093,koInitials:"ㅅㄷㄴ"},
    {id:"MELBOURNE",ko:"멜버른",en:"Melbourne",country:"호주",continent:"OCEANIA",lat:-37.8136,lon:144.9631,koInitials:"ㅁㄹㅂㄹㄴ"},
    {id:"AUCKLAND",ko:"오클랜드",en:"Auckland",country:"뉴질랜드",continent:"OCEANIA",lat:-36.8485,lon:174.7633,koInitials:"ㅇㅋㄹㄷ"}
  ];

  const STEP = { SETUP:0, PICK:1, ELIM:2, GUESS:3, END:4 };
  const STORAGE_KEY = "macedonia-game-manual-layouts-v1";

  const CONTINENT_KO = {
    ASIA: "아시아",
    EUROPE: "유럽",
    AMERICAS: "아메리카",
    AFRICA: "아프리카",
    OCEANIA: "오세아니아"
  };

  // 필요하면 여기에 고정 미세조정값을 넣으세요.
  // 예: { "LONDON": { dx: -8, dy: -20 } }
  const MANUAL_LAYOUTS = {};

  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]] = [a[j],a[i]];
    }
    return a;
  }
  function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  function clamp(v, min, max){ return Math.min(max, Math.max(min, v)); }

  function lonLatToXY(lon, lat){
    const x = (lon + 180) / 360;
    const y = (90 - lat) / 180;
    return {x, y};
  }

  function toast(main, sub=""){
    const t = $("toast");
    t.innerHTML = `${main}<span class="sub">${sub}</span>`;
    t.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(()=>t.classList.remove("show"), 1700);
  }

  function getParams(){ return new URLSearchParams(location.search); }
  function isHost(){ return getParams().get("role") === "host" || location.hash.includes("host"); }
  function isLayoutEdit(){ return getParams().get("layout") === "edit"; }

  let step = STEP.SETUP;
  let cities = [];
  let picked = new Set();
  let eliminated = new Set();
  let answerId = null;

  let usedContinent = false;
  let hintLetters = [];
  let hintInitials = [];
  let shownLetters = [];
  let shownInitials = [];

  let cityLayouts = new Map();
  let manualLayouts = loadManualLayouts();
  let dragState = null;

  const citiesLayer = $("citiesLayer");
  const stepBadge = $("stepBadge");
  const panelBody = $("panelBody");
  const controls = $("controls");
  const remainCount = $("remainCount");
  const pickCount = $("pickCount");
  const resetBtn = $("resetBtn");
  const stage = $("stage");
  const hostBox = $("hostBox");
  const hostAnswer = $("hostAnswer");
  const manualBox = $("manualBox");
  const manualOutput = $("manualOutput");

  resetBtn.addEventListener("click", resetAll);
  window.addEventListener("resize", rerenderCurrentLayout);
  window.addEventListener("hashchange", () => { updateHostBox(); updateManualBox(); });
  window.addEventListener("popstate", () => { updateHostBox(); updateManualBox(); });

  $("btnCopyLayout")?.addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(manualOutput.value);
      toast("복사 완료", "수동 위치 JSON이 복사됐어요.");
    }catch{
      toast("복사 실패", "직접 선택해서 복사해 주세요.");
    }
  });

  $("btnResetLayout")?.addEventListener("click", () => {
    if(!confirm("수동 위치 조정값을 모두 초기화할까요?")) return;
    manualLayouts = {};
    localStorage.removeItem(STORAGE_KEY);
    rerenderCurrentLayout();
    syncManualOutput();
    toast("초기화 완료", "수동 위치값이 지워졌어요.");
  });

  function loadManualLayouts(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return { ...MANUAL_LAYOUTS, ...parsed };
    }catch{
      return { ...MANUAL_LAYOUTS };
    }
  }

  function saveManualLayouts(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(manualLayouts, null, 2));
  }

  function syncManualOutput(){
    if(!manualOutput) return;
    manualOutput.value = JSON.stringify(manualLayouts, null, 2);
  }

  function updateManualBox(){
    if(isLayoutEdit()){
      manualBox.classList.add("show");
      syncManualOutput();
    }else{
      manualBox.classList.remove("show");
    }
  }

  function updateHostBox(){
    if(isHost() && answerId){
      const ans = cities.find(c=>c.id===answerId);
      hostBox.classList.add("show");
      hostAnswer.innerHTML = `${ans.ko} (${ans.country})<br><span class="muted">${ans.en} · ${CONTINENT_KO[ans.continent] || ans.continent}</span>`;
    }else{
      hostBox.classList.remove("show");
      hostAnswer.textContent = "-";
    }
  }

  function cityBasePoint(city){
    const {x, y} = lonLatToXY(city.lon, city.lat);
    const rect = stage.getBoundingClientRect();
    return { x: x * rect.width, y: y * rect.height };
  }

  function estimateBox(city){
    const label = `${city.ko}(${city.country})`;
    const width = clamp(label.length * 7.4 + 40, 78, 180);
    return { width, height: 34 };
  }

  function overlaps(a, b, gap = 8){
    return !(
      a.x + a.width/2 + gap < b.x - b.width/2 ||
      a.x - a.width/2 - gap > b.x + b.width/2 ||
      a.y + a.height/2 + gap < b.y - b.height/2 ||
      a.y - a.height/2 - gap > b.y + b.height/2
    );
  }

  function computeAutoLayouts(list){
    const rect = stage.getBoundingClientRect();
    const placed = [];
    const result = new Map();

    const nodes = list.map(city => {
      const base = cityBasePoint(city);
      const size = estimateBox(city);
      return {
        id: city.id,
        city,
        baseX: base.x,
        baseY: base.y,
        x: base.x,
        y: base.y,
        width: size.width,
        height: size.height
      };
    }).sort((a,b) => a.baseX - b.baseX);

    for(const node of nodes){
      const manual = manualLayouts[node.id];
      if(manual){
        node.x = clamp(node.baseX + manual.dx, node.width/2 + 4, rect.width - node.width/2 - 4);
        node.y = clamp(node.baseY + manual.dy, node.height/2 + 4, rect.height - node.height/2 - 4);
        placed.push(node);
        result.set(node.id, { left: node.x, top: node.y, source:"manual" });
        continue;
      }

      let best = null;
      const radiusSteps = [0, 18, 30, 42, 58, 78, 100, 126, 154];
      for(const r of radiusSteps){
        const angleCount = r === 0 ? 1 : 18;
        for(let i=0;i<angleCount;i++){
          const angle = r === 0 ? 0 : (Math.PI * 2 * i / angleCount);
          const testX = clamp(node.baseX + Math.cos(angle) * r, node.width/2 + 4, rect.width - node.width/2 - 4);
          const testY = clamp(node.baseY + Math.sin(angle) * r, node.height/2 + 4, rect.height - node.height/2 - 4);
          const candidate = { ...node, x: testX, y: testY };
          const collisionCount = placed.reduce((acc,p) => acc + (overlaps(candidate, p) ? 1 : 0), 0);
          const distancePenalty = Math.hypot(testX - node.baseX, testY - node.baseY);
          const score = collisionCount * 1000 + distancePenalty;
          if(best === null || score < best.score){
            best = { score, x: testX, y: testY, collisionCount };
          }
          if(collisionCount === 0) break;
        }
        if(best && best.collisionCount === 0) break;
      }

      node.x = best ? best.x : node.baseX;
      node.y = best ? best.y : node.baseY;
      placed.push(node);
      result.set(node.id, { left: node.x, top: node.y, source:"auto" });
    }

    return result;
  }

  function renderCities(){
    citiesLayer.innerHTML = "";
    cityLayouts = computeAutoLayouts(cities);
    const frag = document.createDocumentFragment();

    for(const city of cities){
      const pos = cityLayouts.get(city.id);
      const el = document.createElement("div");
      el.className = "city";
      el.dataset.id = city.id;
      el.style.left = `${pos.left}px`;
      el.style.top = `${pos.top}px`;
      el.style.transform = "translate(-50%, -50%)";
      if(pos.source === "manual") el.classList.add("manual-adjust");

      const dot = document.createElement("span");
      dot.className = "dot";
      const label = document.createElement("span");
      label.className = "label";
      label.textContent = `${city.ko}(${city.country})`;

      el.appendChild(dot);
      el.appendChild(label);
      el.addEventListener("click", () => onCityClick(city.id));

      if(isLayoutEdit()) bindDrag(el, city);
      frag.appendChild(el);
    }

    citiesLayer.appendChild(frag);
    applyCityClasses();
    updateManualBox();
  }

  function bindDrag(el, city){
    el.addEventListener("pointerdown", (e) => {
      if(!isLayoutEdit()) return;
      e.preventDefault();
      e.stopPropagation();
      const rect = stage.getBoundingClientRect();
      const currentLeft = parseFloat(el.style.left);
      const currentTop = parseFloat(el.style.top);
      dragState = {
        id: city.id,
        city,
        startX: e.clientX,
        startY: e.clientY,
        initialLeft: currentLeft,
        initialTop: currentTop,
        stageRect: rect,
        element: el
      };
      el.classList.add("dragging");
      el.setPointerCapture(e.pointerId);
    });

    el.addEventListener("pointermove", (e) => {
      if(!dragState || dragState.id !== city.id) return;
      const dx = e.clientX - dragState.startX;
      const dy = e.clientY - dragState.startY;
      const w = el.offsetWidth || 100;
      const h = el.offsetHeight || 34;
      const left = clamp(dragState.initialLeft + dx, w/2 + 4, dragState.stageRect.width - w/2 - 4);
      const top = clamp(dragState.initialTop + dy, h/2 + 4, dragState.stageRect.height - h/2 - 4);
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
    });

    const finish = (e) => {
      if(!dragState || dragState.id !== city.id) return;
      const left = parseFloat(el.style.left);
      const top = parseFloat(el.style.top);
      const base = cityBasePoint(city);
      manualLayouts[city.id] = {
        dx: Math.round(left - base.x),
        dy: Math.round(top - base.y)
      };
      saveManualLayouts();
      syncManualOutput();
      el.classList.remove("dragging");
      el.classList.add("manual-adjust");
      try { el.releasePointerCapture(e.pointerId); } catch {}
      dragState = null;
    };

    el.addEventListener("pointerup", finish);
    el.addEventListener("pointercancel", finish);
  }

  function rerenderCurrentLayout(){
    if(!cities.length) return;
    renderCities();
  }

  function applyCityClasses(){
    for(const el of citiesLayer.querySelectorAll(".city")){
      const id = el.dataset.id;
      el.classList.toggle("selected", picked.has(id));
      el.classList.toggle("eliminated", eliminated.has(id));
      el.classList.toggle("guessable", step === STEP.GUESS && !eliminated.has(id));
    }
    remainCount.textContent = String(getRemainingIds().length);
    pickCount.textContent = String(picked.size);
    const nextBtn = $("btnNext");
    if(nextBtn) nextBtn.disabled = (picked.size === 0);
  }

  function getRemainingIds(){
    return cities.map(c=>c.id).filter(id=>!eliminated.has(id));
  }

  function onCityClick(id){
    if(dragState) return;
    if(step===STEP.PICK){
      if(picked.has(id)) picked.delete(id);
      else picked.add(id);
      applyCityClasses();
      return;
    }

    if(step===STEP.GUESS){
      if(eliminated.has(id) || !answerId) return;
      if(id===answerId){
        step = STEP.END;
        toast("✅ 성공!", "하나님이 계획하신 도시를 찾았어요!");
        renderUI();
      }else{
        eliminated.add(id);
        toast("❌ 막힌 길!", "틀렸어요. 힌트로 다시 좁혀보자!");
        applyCityClasses();
      }
    }
  }

  function setupHints(){
    const ans = cities.find(c=>c.id===answerId);
    usedContinent = false;
    shownLetters = [];
    shownInitials = [];
    const letters = [...new Set(ans.en.toUpperCase().replace(/[^A-Z]/g, "").split(""))];
    const initials = [...new Set(ans.koInitials.split(""))];
    hintLetters = shuffle(letters);
    hintInitials = shuffle(initials);
  }

  function hintText(){
    const ans = cities.find(c=>c.id===answerId);
    const cont = usedContinent ? (CONTINENT_KO[ans.continent] || ans.continent) : "??";
    const en = shownLetters.length ? shownLetters.join(" , ") : "없음";
    const ko = shownInitials.length ? shownInitials.join(" , ") : "없음";
    return `• 대륙: ${cont}<br>• 영문 힌트: ${en}<br>• 초성 힌트: ${ko}`;
  }

  function eliminateNonAnswer(count){
    if(!answerId) return;
    const pool = getRemainingIds().filter(id => id !== answerId);
    if(pool.length === 0){
      toast("이제 정답만 남았어요!", "정답 도시를 클릭하면 끝!");
      return;
    }
    const toRemove = shuffle(pool).slice(0, Math.min(count, pool.length));
    toRemove.forEach(id => eliminated.add(id));
    toast("도시 제거!", `${toRemove.length}개가 사라졌어요.`);
    applyCityClasses();
  }

  function renderUI(){
    stepBadge.textContent = `STEP ${step}`;

    if(step===STEP.SETUP){
      panelBody.innerHTML = `
        <b>난이도(도시 수)를 선택</b>하고 시작하세요.<br>
        아이들이 먼저 “가고 싶은 도시(내 계획)”를 고른 뒤,<br>
        하나님이 계획하신 도시(정답)는 <b>아이들이 고른 도시가 아닌 곳</b>에서 정해집니다.
      `;
      controls.innerHTML = `
        <div class="row">
          <span class="chip">도시 수</span>
          <input id="rangeCount" type="range" min="10" max="50" value="30" style="flex:1">
          <span class="chip"><b id="countVal">30</b>개</span>
        </div>
        <div class="row" style="margin-top:12px">
          <button id="btnStart" class="btn">시작</button>
          <button id="btnHostTip" class="btn secondary">진행자 URL 안내</button>
        </div>
      `;
      const range = $("rangeCount");
      const val = $("countVal");
      range.addEventListener("input", ()=> val.textContent = range.value);
      $("btnStart").addEventListener("click", ()=> newRound(parseInt(range.value,10)));
      $("btnHostTip").addEventListener("click", ()=> {
        const base = `${location.origin}${location.pathname}`;
        toast("진행자 URL", `${base}?role=host`);
      });
      updateHostBox();
      updateManualBox();
      return;
    }

    if(step===STEP.PICK){
      panelBody.innerHTML = `
        <b>아이들이 가고 싶은 도시를 선택</b>하세요. (여러 개 가능)<br>
        다 고르면 <b>다음 단계</b>로 넘어가요.
      `;
      controls.innerHTML = `
        <div class="row">
          <button id="btnNext" class="btn" disabled>다음 단계 →</button>
          <button id="btnClear" class="btn secondary">선택 초기화</button>
        </div>
      `;

      $("btnNext").addEventListener("click", ()=>{
        if(picked.size === 0) return;
        const candidates = cities.filter(c => !picked.has(c.id)).map(c => c.id);
        answerId = pickRandom(candidates);
        setupHints();
        updateHostBox();
        step = STEP.ELIM;
        toast("게임 시작!", "주사위로 정답 아닌 도시가 줄어들어요.");
        renderUI();
      });

      $("btnClear").addEventListener("click", ()=>{
        picked.clear();
        applyCityClasses();
      });

      applyCityClasses();
      return;
    }

    if(step===STEP.ELIM){
      panelBody.innerHTML = `
        <b>주사위 단계</b><br>
        각자 주사위를 던지고, 나온 숫자(1~6)를 눌러주세요.<br>
        그러면 <b>정답이 아닌 도시</b>가 그 수만큼 제거됩니다.
      `;
      controls.innerHTML = `
        <div class="row">
          ${[1,2,3,4,5,6].map(n=>`<button class="btn secondary small dice" data-n="${n}">${n}</button>`).join("")}
        </div>
        <div class="row" style="margin-top:12px">
          <button id="btnToGuess" class="btn">추리 단계로 →</button>
          <button id="btnTrim" class="btn secondary">랜덤 5개 더 제거</button>
        </div>
      `;

      controls.querySelectorAll(".dice").forEach(btn => {
        btn.addEventListener("click", ()=> eliminateNonAnswer(parseInt(btn.dataset.n,10)));
      });
      $("btnTrim").addEventListener("click", ()=> eliminateNonAnswer(5));
      $("btnToGuess").addEventListener("click", ()=> {
        step = STEP.GUESS;
        toast("추리 시작!", "도시를 클릭해서 정답을 찾자!");
        renderUI();
      });

      applyCityClasses();
      return;
    }

    if(step===STEP.GUESS){
      panelBody.innerHTML = `
        <b>정답 도시를 클릭해서 맞추기</b><br>
        틀리면 그 도시는 자동 탈락! (막힌 길)<br>
        <b>힌트</b>를 눌러 “신호”를 더 받으세요.
      `;
      controls.innerHTML = `
        <div class="row" style="gap:8px">
          <button id="btnHintC" class="btn secondary small">대륙 힌트</button>
          <button id="btnHintE" class="btn secondary small">영문 힌트</button>
          <button id="btnHintK" class="btn secondary small">초성 힌트</button>
        </div>
        <div class="hr"></div>
        <div class="muted"><b>현재 힌트</b></div>
        <div id="hintBox" class="muted" style="margin-top:8px; line-height:1.65"></div>
        <div class="row" style="margin-top:12px">
          <button id="btnBack" class="btn secondary">주사위 단계로 ←</button>
        </div>
      `;

      const box = $("hintBox");
      box.innerHTML = hintText();
      $("btnHintC").addEventListener("click", ()=> {
        usedContinent = true;
        box.innerHTML = hintText();
        toast("힌트 공개!", "대륙이 열렸어요.");
      });
      $("btnHintE").addEventListener("click", ()=> {
        if(shownLetters.length < hintLetters.length){
          shownLetters.push(hintLetters[shownLetters.length]);
          box.innerHTML = hintText();
          toast("영문 힌트 +1", "알파벳이 추가됐어요.");
        }else{
          toast("영문 힌트 끝!", "더 이상 없음");
        }
      });
      $("btnHintK").addEventListener("click", ()=> {
        if(shownInitials.length < hintInitials.length){
          shownInitials.push(hintInitials[shownInitials.length]);
          box.innerHTML = hintText();
          toast("초성 힌트 +1", "초성이 추가됐어요.");
        }else{
          toast("초성 힌트 끝!", "더 이상 없음");
        }
      });
      $("btnBack").addEventListener("click", ()=> {
        step = STEP.ELIM;
        renderUI();
      });
      applyCityClasses();
      return;
    }

    if(step===STEP.END){
      panelBody.innerHTML = `
        🎉 <b>완료!</b><br>
        “내가 가고 싶은 길”이 아니라<br>
        <b>하나님이 계획하신 길</b>을 따라갔어요.
      `;
      controls.innerHTML = `
        <div class="row">
          <button id="btnAgain" class="btn">다시 시작(리셋)</button>
        </div>
      `;
      $("btnAgain").addEventListener("click", resetAll);
      applyCityClasses();
    }
  }

  function newRound(n){
    cities = shuffle(ALL_CITIES).slice(0, n);
    picked.clear();
    eliminated.clear();
    answerId = null;
    usedContinent = false;
    hintLetters = [];
    hintInitials = [];
    shownLetters = [];
    shownInitials = [];
    step = STEP.PICK;
    renderCities();
    toast("도시가 배치됐어요!", "가고 싶은 도시를 선택하세요.");
    renderUI();
  }

  function resetAll(){
    cities = [];
    picked.clear();
    eliminated.clear();
    answerId = null;
    usedContinent = false;
    hintLetters = [];
    hintInitials = [];
    shownLetters = [];
    shownInitials = [];
    step = STEP.SETUP;
    citiesLayer.innerHTML = "";
    remainCount.textContent = "0";
    pickCount.textContent = "0";
    updateHostBox();
    updateManualBox();
    renderUI();
  }

  resetAll();
})();
