(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const qs = new URLSearchParams(location.search);

  function isHost() {
    return qs.get("role") === "host" || location.hash.includes("host");
  }

  function isLayoutEdit() {
    return qs.get("layout") === "edit";
  }

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

  const MANUAL_LAYOUTS = {
    CASABLANCA: { dx: -39, dy: 282 },
    HAVANA: { dx: 49, dy: 283 },
    LIMA: { dx: 3, dy: 166 },
    SANTIAGO: { dx: 3, dy: 119 },
    BUENOS_AIRES: { dx: 10, dy: 148 },
    SAO_PAULO: { dx: -11, dy: 82 },
    RIO_DE_JANEIRO: { dx: -16, dy: 54 },
    LOS_ANGELES: { dx: 50, dy: 188 },
    SAN_FRANCISCO: { dx: 62, dy: 173 },
    CHICAGO: { dx: 56, dy: 260 },
    NEW_YORK: { dx: 56, dy: 205 },
    TORONTO: { dx: -14, dy: 181 },
    LAGOS: { dx: -33, dy: 230 },
    CAPE_TOWN: { dx: -30, dy: 142 },
    JOHANNESBURG: { dx: -44, dy: 157 },
    NAIROBI: { dx: -74, dy: 207 },
    CAIRO: { dx: -75, dy: 280 },
    VENICE: { dx: -14, dy: 294 },
    ZURICH: { dx: -18, dy: 250 },
    ATHENS: { dx: -41, dy: 276 },
    DUBAI: { dx: -102, dy: 284 },
    VIENNA: { dx: 70, dy: 275 },
    ROME: { dx: 117, dy: 269 },
    BARCELONA: { dx: -109, dy: 263 },
    MADRID: { dx: -69, dy: 225 },
    LONDON: { dx: -103, dy: 226 },
    PARIS: { dx: -82, dy: 245 },
    OSLO: { dx: -84, dy: 217 },
    BERLIN: { dx: -30, dy: 233 },
    AMSTERDAM: { dx: 66, dy: 196 },
    HELSINKI: { dx: -45, dy: 185 },
    STOCKHOLM: { dx: -113, dy: 144 },
    ISTANBUL: { dx: 73, dy: 309 },
    MELBOURNE: { dx: -324, dy: 77 },
    SYDNEY: { dx: -228, dy: 92 },
    AUCKLAND: { dx: -243, dy: 144 },
    JAKARTA: { dx: -89, dy: 193 },
    SINGAPORE: { dx: -203, dy: 223 },
    KUALA_LUMPUR: { dx: -194, dy: 199 },
    BANGKOK: { dx: -199, dy: 225 },
    HO_CHI_MINH_CITY: { dx: -103, dy: 215 },
    HANOI: { dx: -107, dy: 251 },
    HONG_KONG: { dx: -227, dy: 226 },
    MANILA: { dx: -135, dy: 301 },
    TAIPEI: { dx: -137, dy: 245 },
    SHANGHAI: { dx: -242, dy: 241 },
    BEIJING: { dx: -196, dy: 255 },
    SEOUL: { dx: -158, dy: 271 },
    BUSAN: { dx: -118, dy: 285 },
    TOKYO: { dx: -105, dy: 252 }
  };

  let liveManualLayouts = JSON.parse(JSON.stringify(MANUAL_LAYOUTS));

  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }

  function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

  function lonLatToXY(lon, lat){
    return {
      x: (lon + 180) / 360,
      y: (90 - lat) / 180
    };
  }

  function toast(main, sub=""){
    const t = $("toast");
    t.innerHTML = `${main}<span class="sub">${sub}</span>`;
    t.classList.add("show");
    setTimeout(()=>t.classList.remove("show"), 1700);
  }

  function getCityById(id){
    return cities.find(c=>c.id===id);
  }

  function labelWidthPx(city){
    return Math.max(90, city.ko.length * 15 + city.country.length * 8 + 46);
  }

  function labelHeightPx(){
    return 36;
  }

  function prettyLayoutJSON(){
    const out = {};
    Object.keys(liveManualLayouts).sort().forEach(key=>{
      const dx = Math.round(liveManualLayouts[key].dx || 0);
      const dy = Math.round(liveManualLayouts[key].dy || 0);
      if(dx !== 0 || dy !== 0){
        out[key] = { dx, dy };
      }
    });
    return JSON.stringify(out, null, 2);
  }

  const STEP = { SETUP:0, PICK:1, ELIM:2, GUESS:3, END:4 };
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

  let currentNodeMap = new Map();
  let dragState = null;

  const citiesLayer = $("citiesLayer");
  const stepBadge = $("stepBadge");
  const panelBody = $("panelBody");
  const controls = $("controls");
  const remainCount = $("remainCount");
  const pickCount = $("pickCount");
  const resetBtn = $("resetBtn");
  const hostBox = $("hostBox");
  const hostAnswer = $("hostAnswer");
  const layoutEditorSection = $("layoutEditorSection");
  const layoutJson = $("layoutJson");
  const copyLayoutBtn = $("copyLayoutBtn");
  const resetLayoutBtn = $("resetLayoutBtn");

  resetBtn.addEventListener("click", resetAll);

  if (copyLayoutBtn) {
    copyLayoutBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(prettyLayoutJSON());
        toast("복사 완료!", "수동 위치 JSON이 복사됐어요.");
      } catch {
        toast("복사 실패", "직접 복사해주세요.");
      }
    });
  }

  if (resetLayoutBtn) {
    resetLayoutBtn.addEventListener("click", () => {
      liveManualLayouts = {};
      updateLayoutEditor();
      renderCities();
      toast("초기화 완료", "수동 위치값을 지웠어요.");
    });
  }

  function computeAutoOffsets(nodes){
    const stageRect = citiesLayer.getBoundingClientRect();
    const W = Math.max(900, stageRect.width || 1200);
    const H = Math.max(600, stageRect.height || 700);

    const placed = [];

    for(const n of nodes){
      const city = getCityById(n.id);
      const baseX = n.x * W;
      const baseY = n.y * H;
      const w = labelWidthPx(city);
      const h = labelHeightPx();

      const candidates = [];
      const rings = [0, 16, 28, 42, 58, 76];
      const angleCount = 16;

      for(const r of rings){
        if(r === 0){
          candidates.push({ dx: 0, dy: 0 });
        } else {
          for(let i=0;i<angleCount;i++){
            const a = (Math.PI * 2 * i) / angleCount;
            candidates.push({
              dx: Math.round(Math.cos(a) * r),
              dy: Math.round(Math.sin(a) * r)
            });
          }
        }
      }

      let best = null;
      let bestScore = Infinity;

      for(const cand of candidates){
        const cx = baseX + cand.dx;
        const cy = baseY + cand.dy;

        const rect = {
          left: cx - w / 2,
          top: cy - h / 2,
          right: cx + w / 2,
          bottom: cy + h / 2
        };

        let overlapArea = 0;
        for(const p of placed){
          const ix = Math.max(0, Math.min(rect.right, p.rect.right) - Math.max(rect.left, p.rect.left));
          const iy = Math.max(0, Math.min(rect.bottom, p.rect.bottom) - Math.max(rect.top, p.rect.top));
          overlapArea += ix * iy;
        }

        const outPenalty =
          Math.max(0, 8 - rect.left) +
          Math.max(0, rect.right - (W - 8)) +
          Math.max(0, 8 - rect.top) +
          Math.max(0, rect.bottom - (H - 8));

        const distancePenalty = Math.abs(cand.dx) + Math.abs(cand.dy);
        const score = overlapArea * 1000 + outPenalty * 500 + distancePenalty;

        if(score < bestScore){
          bestScore = score;
          best = { ...cand };
          if(score === 0) break;
        }
      }

      n.autoDx = best.dx;
      n.autoDy = best.dy;
      n.baseX = baseX;
      n.baseY = baseY;
      n.w = w;
      n.h = h;

      placed.push({
        id: n.id,
        rect: {
          left: baseX + best.dx - w/2,
          top: baseY + best.dy - h/2,
          right: baseX + best.dx + w/2,
          bottom: baseY + best.dy + h/2
        }
      });
    }
  }

  function renderCities(){
    citiesLayer.innerHTML = "";
    currentNodeMap = new Map();

    const nodes = cities.map(c=>{
      const {x,y} = lonLatToXY(c.lon, c.lat);
      return {
        id: c.id,
        x, y,
        autoDx: 0,
        autoDy: 0
      };
    });

    computeAutoOffsets(nodes);

    for(const n of nodes){
      currentNodeMap.set(n.id, n);
    }

    const frag = document.createDocumentFragment();

    for(const c of cities){
      const n = currentNodeMap.get(c.id);
      const manual = liveManualLayouts[c.id] || { dx: 0, dy: 0 };
      const finalDx = n.autoDx + manual.dx;
      const finalDy = n.autoDy + manual.dy;

      const el = document.createElement("div");
      el.className = "city";
      el.dataset.id = c.id;
      el.style.left = (n.x * 100) + "%";
      el.style.top = (n.y * 100) + "%";
      el.style.transform = `translate(-50%, -50%) translate(${finalDx}px, ${finalDy}px)`;

      const dot = document.createElement("span");
      dot.className = "dot";

      const label = document.createElement("span");
      label.className = "label";
      label.textContent = `${c.ko}(${c.country})`;

      el.appendChild(dot);
      el.appendChild(label);

      if(isLayoutEdit()){
        el.classList.add("layout-edit");
        bindDrag(el, c.id);
      }

      el.addEventListener("click", () => {
        if(dragState && dragState.moved) return;
        onCityClick(c.id);
      });

      frag.appendChild(el);
    }

    citiesLayer.appendChild(frag);
    applyCityClasses();
    updateLayoutEditor();
  }

  function applyCityClasses(){
    for(const el of citiesLayer.querySelectorAll(".city")){
      const id = el.dataset.id;
      el.classList.toggle("selected", picked.has(id));
      el.classList.toggle("eliminated", eliminated.has(id));
      el.classList.toggle("guessable", step===STEP.GUESS && !eliminated.has(id));

      if(isLayoutEdit()){
        el.classList.remove("guessable");
      }
    }

    remainCount.textContent = String(getRemainingIds().length);
    pickCount.textContent = String(picked.size);

    const nextBtn = document.getElementById("btnNext");
    if(nextBtn) nextBtn.disabled = (picked.size === 0);
  }

  function updateLayoutEditor(){
    if(!layoutEditorSection || !layoutJson) return;
    if(!isLayoutEdit()){
      layoutEditorSection.style.display = "none";
      return;
    }
    layoutEditorSection.style.display = "block";
    layoutJson.value = prettyLayoutJSON();
  }

  function getRemainingIds(){
    return cities.map(c=>c.id).filter(id=>!eliminated.has(id));
  }

  function bindDrag(el, cityId){
    el.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const current = liveManualLayouts[cityId] || { dx: 0, dy: 0 };

      dragState = {
        cityId,
        startX: e.clientX,
        startY: e.clientY,
        startDx: current.dx,
        startDy: current.dy,
        moved: false,
        el
      };

      el.classList.add("dragging");
      if (el.setPointerCapture) el.setPointerCapture(e.pointerId);
    });

    el.addEventListener("pointermove", (e) => {
      if(!dragState || dragState.cityId !== cityId) return;

      const deltaX = e.clientX - dragState.startX;
      const deltaY = e.clientY - dragState.startY;

      if(Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2){
        dragState.moved = true;
      }

      liveManualLayouts[cityId] = {
        dx: Math.round(dragState.startDx + deltaX),
        dy: Math.round(dragState.startDy + deltaY)
      };

      renderCities();
    });

    const finishDrag = () => {
      if(!dragState || dragState.cityId !== cityId) return;
      if(dragState.el) dragState.el.classList.remove("dragging");
      dragState = null;
      updateLayoutEditor();
    };

    el.addEventListener("pointerup", finishDrag);
    el.addEventListener("pointercancel", finishDrag);
  }

  function onCityClick(id){
    if(isLayoutEdit()) return;

    if(step===STEP.PICK){
      if(picked.has(id)) picked.delete(id);
      else picked.add(id);
      applyCityClasses();
      return;
    }

    if(step===STEP.GUESS){
      if(eliminated.has(id)) return;
      if(!answerId) return;

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
    const ans = getCityById(answerId);
    usedContinent = false;
    shownLetters = [];
    shownInitials = [];

    const letters = [...new Set(ans.en.toUpperCase().replace(/[^A-Z]/g,"").split(""))];
    const initials = [...new Set(ans.koInitials.split(""))];

    hintLetters = shuffle(letters);
    hintInitials = shuffle(initials);
  }

  function hintText(){
    const ans = getCityById(answerId);
    const cont = usedContinent ? ans.continent : "??";
    const en = shownLetters.length ? shownLetters.join(" , ") : "없음";
    const ko = shownInitials.length ? shownInitials.join(" , ") : "없음";
    return `• 대륙: ${cont}<br>• 영문 힌트: ${en}<br>• 초성 힌트: ${ko}`;
  }

  function eliminateNonAnswer(count){
    if(!answerId) return;
    const remaining = getRemainingIds();
    const pool = remaining.filter(id=>id!==answerId);

    if(pool.length===0){
      toast("이제 정답만 남았어요!", "정답 도시를 클릭하면 끝!");
      return;
    }

    const toRemove = shuffle(pool).slice(0, Math.min(count, pool.length));
    toRemove.forEach(id=>eliminated.add(id));
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
          <button id="btnHostTip" class="btn secondary">진행자 모드 안내</button>
        </div>
      `;

      const range = $("rangeCount");
      const val = $("countVal");
      range.addEventListener("input", ()=> val.textContent = range.value);

      $("btnStart").addEventListener("click", ()=>{
        const n = parseInt(range.value, 10);
        newRound(n);
      });

      $("btnHostTip").addEventListener("click", ()=>{
        toast("진행자 모드", "주소 끝에 ?role=host 를 붙이면 정답이 보여요");
      });

      updateHostBox();
      updateLayoutEditor();
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
        if(picked.size===0) return;

        const candidates = cities.filter(c=>!picked.has(c.id)).map(c=>c.id);
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
      updateLayoutEditor();
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

      controls.querySelectorAll(".dice").forEach(b=>{
        b.addEventListener("click", ()=>{
          const n = parseInt(b.dataset.n, 10);
          eliminateNonAnswer(n);
        });
      });

      $("btnTrim").addEventListener("click", ()=> eliminateNonAnswer(5));
      $("btnToGuess").addEventListener("click", ()=>{
        step = STEP.GUESS;
        toast("추리 시작!", "도시를 클릭해서 정답을 찾자!");
        renderUI();
      });

      applyCityClasses();
      updateLayoutEditor();
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

      $("btnHintC").addEventListener("click", ()=>{
        usedContinent = true;
        box.innerHTML = hintText();
        toast("힌트 공개!", "대륙이 열렸어요");
      });

      $("btnHintE").addEventListener("click", ()=>{
        if(shownLetters.length < hintLetters.length){
          shownLetters.push(hintLetters[shownLetters.length]);
          box.innerHTML = hintText();
          toast("영문 힌트 +1", "알파벳이 추가됐어요");
        }else{
          toast("영문 힌트 끝!", "더 이상 없음");
        }
      });

      $("btnHintK").addEventListener("click", ()=>{
        if(shownInitials.length < hintInitials.length){
          shownInitials.push(hintInitials[shownInitials.length]);
          box.innerHTML = hintText();
          toast("초성 힌트 +1", "초성이 추가됐어요");
        }else{
          toast("초성 힌트 끝!", "더 이상 없음");
        }
      });

      $("btnBack").addEventListener("click", ()=>{
        step = STEP.ELIM;
        renderUI();
      });

      applyCityClasses();
      updateLayoutEditor();
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
      updateLayoutEditor();
      return;
    }
  }

  function updateHostBox(){
    if(isHost() && answerId){
      const ans = getCityById(answerId);
      hostBox.classList.add("show");
      hostAnswer.textContent = `${ans.ko} (${ans.country})`;
    }else{
      hostBox.classList.remove("show");
      hostAnswer.textContent = "-";
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
    toast("도시가 배치됐어요!", "가고 싶은 도시를 선택하세요");
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
    renderUI();
    updateLayoutEditor();
  }

  let resizeTimer = null;
  window.addEventListener("resize", ()=>{
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
      if(cities.length) renderCities();
    }, 120);
  });

  resetAll();
})();