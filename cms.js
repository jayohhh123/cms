/* ══ Script Block 1 ══ */
/* ─── MASTER DATA ─────────────────────────────── */
const COUNSELORS = [
  {id:1,  name:'김선경', hex:'#F0625E', role:'센터장',    type:'internal'},
  {id:3,  name:'김지윤', hex:'#89C458', role:'수석상담사', type:'internal'},
  {id:2,  name:'권하린', hex:'#A351D2', role:'선임상담사', type:'internal'},
  {id:4,  name:'김혜주', hex:'#FFBB00', role:'선임상담사', type:'internal'},
  {id:5,  name:'조예지', hex:'#77D5FA', role:'매니저',    type:'internal'},
  {id:6,  name:'최혜숙', hex:'#FF7B54', role:'',          type:'external'},
  {id:7,  name:'조미나', hex:'#2EC4B6', role:'',          type:'external'},
  {id:8,  name:'왕선아', hex:'#5B8DB8', role:'',          type:'external'},
  {id:9,  name:'박소현', hex:'#F4A261', role:'',          type:'external'},
  {id:10, name:'강미숙', hex:'#C06C84', role:'',          type:'external'},
];


const PRODUCTS = [
  {name:'센터장 일반상담 (50분)',          cat:'일반 - 상담', min:50},
  {name:'1급 일반상담 (대면)',             cat:'일반 - 상담', min:50},
  {name:'2급 일반상담 (대면)',             cat:'일반 - 상담', min:50},
  {name:'커플/부부/가족 상담 (90분)',      cat:'일반 - 상담', min:90},
  {name:'커플/부부/가족 상담 (50분)',      cat:'일반 - 상담', min:50},
  {name:'센터장 일반상담 (90분)',          cat:'일반 - 상담', min:90},
  {name:'슈퍼비전 (12만원)',              cat:'일반 - 상담', min:50},
  {name:'슈퍼비전 (13만원)',              cat:'일반 - 상담', min:50},
  {name:'(선결제) 1급 일반상담',          cat:'일반 - 상담', min:50},
  {name:'(선결제) 센터장 일반상담 (50분)', cat:'일반 - 상담', min:50},
  {name:'(선결제) 2급 일반상담',          cat:'일반 - 상담', min:50},
  {name:'성인 ADHD 상담',                cat:'일반 - 상담', min:50},
  {name:'1급 비대면 상담',               cat:'일반 - 상담', min:50},
  {name:'2급 비대면 상담',               cat:'일반 - 상담', min:50},
  {name:'MMPI-2',                       cat:'일반 - 검사', min:50},
  {name:'SCT 문장완성검사',              cat:'일반 - 검사', min:50},
  {name:'BGT 검사',                     cat:'일반 - 검사', min:50},
  {name:'HTP 검사',                     cat:'일반 - 검사', min:50},
  {name:'IQ 검사',                      cat:'일반 - 검사', min:50},
  {name:'ADHD 검사',                    cat:'일반 - 검사', min:50},
  {name:'종합심리평가',                  cat:'일반 - 검사', min:90},
  {name:'우울/불안 검사',                cat:'일반 - 검사', min:50},
  {name:'마음바우처 개인상담',            cat:'마음바우처',  min:50},
  {name:'마음바우처 커플상담',            cat:'마음바우처',  min:50},
  {name:'마음바우처 가족상담',            cat:'마음바우처',  min:50},
  {name:'인스파이어 특별상담 (50분)',     cat:'인스파이어',  min:50},
  {name:'인스파이어 검사',               cat:'인스파이어',  min:50},
  {name:'화승R&A 상담',                  cat:'화승R&A',    min:50},
  {name:'화승R&A 검사',                  cat:'화승R&A',    min:50},
  {name:'삼화 상담',                     cat:'삼화',       min:50},
  {name:'애큐온 상담',                   cat:'애큐온',     min:50},
  {name:'애큐온 검사',                   cat:'애큐온',     min:50},
  {name:'미쉐린코리아 상담',             cat:'미쉐린코리아', min:50},
  {name:'미쉐린코리아 검사',             cat:'미쉐린코리아', min:50},
  {name:'SIB 상담',                     cat:'SIB',        min:50},
  {name:'SIB 검사',                     cat:'SIB',        min:50},
  {name:'광기술원 상담',                 cat:'광기술원',    min:50},
  {name:'광기술원 검사',                 cat:'광기술원',    min:50},
];

const NAMES = [
  '김지수','이민호','박서연','최준영','정유나','강민준','윤서연','임지훈',
  '사범기','오지수','장원우','장요엘','천두인','최혜근','안지현','조성민',
  '황은지','서민준','노유진','전우주','심지은','변재현','곽민서','탁현수',
  '남가은','석준호','오하린','백지훈','신유미','천재원','나현서','배성민',
  '구하은','함준혁','표지현','형민준','소유진','두현우','팽서연','계민아',
];

// allday = 종일 칩으로 상단 노출 / timed = 시간 있는 행으로 노출
const PTYPES_ALLDAY = [
  {label:'연차',      cls:'annual',    icon:'🌿'},
  {label:'오전 반차', cls:'half-am',   icon:'🌤'},
  {label:'오후 반차', cls:'half-pm',   icon:'🌇'},
];
const PTYPES_TIMED = [
  {label:'회의',   cls:'meeting', icon:'💬', duration:50},
  {label:'종합심리검사보고서 작성', cls:'report', icon:'📝', duration:120},
];
const MEETING_NAMES = [
  '주간 팀 미팅', '케이스 리뷰', '월례 보고', '슈퍼비전', '신규 내담자 배정', '운영 회의', '위기 케이스 논의',
];


// 상담사별 근무 요일(0=일,1=월,...,6=토) 및 시간대
const COUNSELOR_SCHEDULE = {
  1: { days: [1,2,4],    times: ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'] }, // 김선경 월화목
  2: { days: [2,3,4,5],  times: ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'],
       sat:              ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30'] }, // 권하린 화수목금+토
  3: { days: [1,2,3],    times: ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'] }, // 김지윤 월화수
  4: { days: [1,5],      times: ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'],
       sat:              ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30'] }, // 김혜주 월금+토
  // 외부상담사 (상담 일정만, 근태 없음)
  6: { days: [1,3],      times: ['10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'] }, // 최혜숙 월수
  7: { days: [2,4],      times: ['10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'] }, // 조미나 화목
  8: { days: [3,5],      times: ['10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'] }, // 왕선아 수금
  9: { days: [1,4],      times: ['10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'] }, // 박소현 월목
  10:{ days: [2,5],      times: ['10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'] }, // 강미숙 화금
};

/* ─── STATE ─────────────────────────────────── */
let activeCounselors = new Set([1,2,3,4,5,6,7,8,9,10]);
let clientNameFilter = '';
let prodNameFilter = '';
let viewMode = 'all';
let selFilter = null;
let miniDate  = new Date();

// Current month view — start from today's month
const _now = new Date();
let curYear  = _now.getFullYear();
let curMonth = _now.getMonth(); // 0-indexed

/* ─── UTILS ──────────────────────────────────── */
const p2 = n => String(n).padStart(2,'0');
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}
function addMin(timeStr, mins) {
  const [h, m] = timeStr.split(':').map(Number);
  const total = h * 60 + m + mins;
  return `${p2(Math.floor(total/60) % 24)}:${p2(total % 60)}`;
}
const dk = d => `${d.getFullYear()}-${p2(d.getMonth()+1)}-${p2(d.getDate())}`;
const isToday = d => d.toDateString() === new Date().toDateString();

/* ─── HOLIDAYS ───────────────────────────────── */
const HOLIDAYS = new Set([
  '2026-01-01', // 신정
  '2026-01-28', '2026-01-29', '2026-01-30', // 설날 연휴
  '2026-03-01', // 삼일절
  '2026-03-02', // 삼일절 대체공휴일
  '2026-05-05', // 어린이날
  '2026-05-24', // 부처님오신날
  '2026-06-06', // 현충일
  '2026-08-15', // 광복절
  '2026-09-24', '2026-09-25', '2026-09-26', // 추석 연휴
  '2026-10-03', // 개천절
  '2026-10-09', // 한글날
  '2026-12-25', // 성탄절
]);

/* ─── SCHEDULE GENERATION ────────────────────── */
// Generate 6 months of data (3 months back, 3 months forward) for richness
function genSchedules() {
  const out = {};
  const base = new Date(_now.getFullYear(), _now.getMonth() - 3, 1);

  for (let m = 0; m < 7; m++) {
    const y = base.getFullYear(), mo = base.getMonth();
    const daysInMonth = new Date(y, mo + 1, 0).getDate();

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(y, mo, d);
      const dow = date.getDay();
      if (dow === 0 || HOLIDAYS.has(dk(date))) { base.setDate(base.getDate() + (d === daysInMonth ? 0 : 1)); continue; } // skip Sunday & holidays
      const isSat = dow === 6;
      const key = dk(date);
      out[key] = [];

      // sessions
      // personal items 먼저 생성 (weekday only, ~50% chance)
      const personalItems = [];
      if (!isSat && Math.random() > 0.48) {
        // 회의가 생성될 경우, 해당 날짜 출근 상담사 전원에게 동일 회의명·시간 배정
        const rawItems = genPersonal();
        for (const item of rawItems) {
          if (item.subtype === 'timed' && item.label === '회의') {
            // 회의: 해당 요일 출근 상담사 전원 공유 (조예지 포함)
            const workingCounselors = COUNSELORS.filter(c => {
              if (c.type === 'external') return false;
              if (c.id === 5) return true;
              const sch = COUNSELOR_SCHEDULE[c.id];
              return sch && sch.days.includes(dow);
            });
            const meetingName = MEETING_NAMES[Math.floor(Math.random() * MEETING_NAMES.length)];
            for (const wc of workingCounselors) {
              personalItems.push({ ...item, counselorId: wc.id, meetingName });
            }
          } else if (item.subtype === 'timed' && item.label === '종합심리검사보고서 작성') {
            // 보고서: 조예지 제외 출근 상담사 개인별 생성
            const workingCounselors = COUNSELORS.filter(c => {
              if (c.type === 'external') return false;
              if (c.id === 5) return false;
              const sch = COUNSELOR_SCHEDULE[c.id];
              return sch && sch.days.includes(dow);
            });
            for (const wc of workingCounselors) {
              personalItems.push({ ...item, counselorId: wc.id });
            }
          } else {
            personalItems.push({ ...item });
          }
        }
      }

      // 연차인 상담사 ID 수집 + 상담사별 allday 중복(연차+반차) 방지
      const annualCounselorIds = new Set();
      const busyCounselorIds   = new Set();
      const filteredPersonal   = [];
      for (const p of personalItems) {
        if (p.subtype !== 'allday') { filteredPersonal.push(p); continue; }
        if (busyCounselorIds.has(p.counselorId)) continue;
        busyCounselorIds.add(p.counselorId);
        if (p.label === '연차') annualCounselorIds.add(p.counselorId);
        filteredPersonal.push(p);
      }

      // 내담자 세션 생성 후 연차 상담사 담당 세션 제거
      const MANAGER_IDS = new Set([5]);
      const sessions = genSessions(isSat ? 3 : 6, isSat ? 6 : 13, date)
        .filter(s => !annualCounselorIds.has(s.counselorId) && !MANAGER_IDS.has(s.counselorId));

      out[key].push(...sessions);

      // 외부상담사: 근무일당 ~60% 확률 → 월 5건 내외
      if (!isSat) {
        const _now = new Date();
        const _today = dk(_now);
        const _ds = dk(date);
        const _past = _ds < _today;
        const _isToday = _ds === _today;
        COUNSELORS.filter(c => c.type === 'external').forEach(extC => {
          const sch = COUNSELOR_SCHEDULE[extC.id];
          if (!sch || !sch.days.includes(dow)) return;
          if (Math.random() > 0.6) return;
          const t = sch.times[Math.floor(Math.random() * sch.times.length)];
          const prod = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
          const slotPast = _past || (_isToday && t < `${p2(_now.getHours())}:${p2(_now.getMinutes())}`);
          let sessionStatus, payStatus;
          if (slotPast) {
            const cancelled = Math.random() < 0.1;
            sessionStatus = cancelled ? 'cancelled' : 'done';
            payStatus = cancelled ? 'unpaid' : (Math.random() < 0.15 ? 'free' : 'paid');
          } else {
            sessionStatus = 'upcoming';
            payStatus = 'unpaid';
          }
          out[key].push({
            type: 'client', time: t,
            name: NAMES[Math.floor(Math.random() * NAMES.length)],
            phone: `010-${String(1000+Math.floor(Math.random()*9000))}-${String(1000+Math.floor(Math.random()*9000))}`,
            productObj: prod, counselorId: extC.id,
            cancelled: sessionStatus === 'cancelled',
            payStatus, sessionStatus,
            memo: '', link: '', prevRecords: [],
            sessionNum: 1 + Math.floor(Math.random() * 4), totalSession: 8,
            price: Math.floor((40000 + Math.random() * 80000) / 1000) * 1000,
            channel: 'phone', confirmed: true,
          });
        });
      }

      out[key].unshift(...filteredPersonal);

      // sort: personal first, then by time
      out[key].sort((a, b) => {
        if (a.type === 'personal' && b.type !== 'personal') return -1;
        if (a.type !== 'personal' && b.type === 'personal') return  1;
        return (a.time || '').localeCompare(b.time || '');
      });
    }

    base.setMonth(base.getMonth() + 1);
    base.setDate(1);
  }
  return out;
}

function genSessions(min, max, date) {
  const count = min + Math.floor(Math.random() * (max - min));
  // 상담사별 사용 시간 추적 (같은 시간대라도 다른 상담사면 허용)
  const usedByCounselor = {}; // counselorId -> Set of times
  const items = [];
  const now = new Date();
  const todayStr = dk(now);
  const dateStr  = dk(date);
  const isPast   = dateStr < todayStr;
  const isToday2 = dateStr === todayStr;
  // 해당 요일에 근무하는 상담사만 풀에 포함
  const dow = date.getDay();
  const counselorPool = COUNSELORS.filter(x => {
    if (x.type === 'external') return false; // 외부상담사 별도 처리
    if (x.id === 5) return false; // 매니저 제외
    const sch = COUNSELOR_SCHEDULE[x.id];
    if (!sch) return false;
    if (dow === 6) return !!sch.sat; // 토요일은 sat 시간대 있는 상담사만
    return sch.days.includes(dow);
  });
  if (counselorPool.length === 0) return items;
  for (let i = 0; i < count; i++) {
    const c = counselorPool[Math.floor(Math.random() * counselorPool.length)];
    if (!usedByCounselor[c.id]) usedByCounselor[c.id] = new Set();
    // 해당 상담사의 근무 시간대 중 빈 슬롯 찾기
    const sch = COUNSELOR_SCHEDULE[c.id];
    const cTimes = (dow === 6 && sch.sat) ? sch.sat : sch.times;
    const available = cTimes.filter(t => !usedByCounselor[c.id].has(t));
    if (available.length === 0) continue;
    const t = available[Math.floor(Math.random() * available.length)];
    usedByCounselor[c.id].add(t);
    const prod = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];

    // 날짜+시간 기준으로 과거 여부 판단
    const slotPast = isPast || (isToday2 && t < `${p2(now.getHours())}:${p2(now.getMinutes())}`);

    let sessionStatus, payStatus;
    if (slotPast) {
      // 과거: 취소(13%) 또는 진행 완료
      const isCancelled = Math.random() < 0.13;
      if (isCancelled) {
        sessionStatus = 'cancelled';
        // 취소는 결제 전 or 무료만
        payStatus = Math.random() < 0.3 ? 'free' : 'unpaid';
      } else {
        sessionStatus = 'done';
        // 진행 완료: 결제 완료 or 무료
        payStatus = Math.random() < 0.15 ? 'free' : 'paid';
      }
    } else {
      // 미래: 항상 진행 예정 + 결제 전
      sessionStatus = 'upcoming';
      payStatus = 'unpaid';
    }
    const isCancelled = sessionStatus === 'cancelled';
    const isOnline = prod.name.includes('비대면');
    const prevCount = Math.floor(Math.random() * 4);
    const prevRecords = [];
    for (let pr = 0; pr < prevCount; pr++) {
      const pd = new Date(2025, 10 + Math.floor(Math.random()*4), 1 + Math.floor(Math.random()*27));
      const DOW = ['일','월','화','수','목','금','토'];
      const pdKey = `${pd.getFullYear()}-${String(pd.getMonth()+1).padStart(2,'0')}-${String(pd.getDate()).padStart(2,'0')}`;
      prevRecords.push({
        dateStr: `${pd.getFullYear()}.${String(pd.getMonth()+1).padStart(2,'0')}.${String(pd.getDate()).padStart(2,'0')}(${DOW[pd.getDay()]})`,
        dateKey: pdKey,
        written: Math.random() < 0.6,
      });
    }
    const CH = ['phone','app','online'];
    const chW = [0.4, 0.35, 0.25];
    let chR = Math.random(), chIdx = 0;
    for (let ci = 0; ci < chW.length; ci++) { chR -= chW[ci]; if (chR <= 0) { chIdx = ci; break; } }
    const channel = CH[chIdx];
    const confirmed = channel === 'phone' || isCancelled || Math.random() < 0.5;
    items.push({
      type: 'client',
      time: t,
      name: NAMES[Math.floor(Math.random() * NAMES.length)],
      phone: `010-${String(1000+Math.floor(Math.random()*9000))}-${String(1000+Math.floor(Math.random()*9000))}`,
      productObj: prod,
      counselorId: c.id,
      cancelled: isCancelled,
      payStatus,
      sessionStatus,
      memo: Math.random() < 0.5 ? ['2급 라유형\n바우처 1/8회기, 만료:5/16\n서류작성 완료', '초기 상담 진행\n추후 검사 예약 권유', '내담자 요청으로 비대면으로 변경'][Math.floor(Math.random()*3)] : '',
      link: isOnline ? `https://meet.clify.co.kr/session/${Math.random().toString(36).slice(2,10)}` : '',
      prevRecords,
      sessionNum: 1 + Math.floor(Math.random() * 8),
      totalSession: 8,
      price: Math.floor((40000 + Math.random() * 80000) / 1000) * 1000,
      channel,
      confirmed,
    });
  }
  return items;
}

function genPersonal() {
  const count = 1 + Math.floor(Math.random() * 2);
  const items = [];
  for (let i = 0; i < count; i++) {
    // ~35% chance of being a timed item (meeting/보고서), rest are allday
    const isTimedMeeting = Math.random() < 0.35;
    const pool = isTimedMeeting ? PTYPES_TIMED : PTYPES_ALLDAY;
    const t = pool[Math.floor(Math.random() * pool.length)];
    const internalC = COUNSELORS.filter(x => x.type === 'internal');
    const c = internalC[Math.floor(Math.random() * internalC.length)];
    if (isTimedMeeting) {
      // Give timed personal item a specific time slot
      const timedSlots = ['10:00','11:00','13:00','14:00','15:00','16:00','17:00'];
      const time = timedSlots[Math.floor(Math.random() * timedSlots.length)];
      items.push({ type:'personal', subtype:'timed', label:t.label, cls:t.cls, icon:t.icon, counselorId:c.id, time, duration:t.duration });
    } else {
      items.push({ type:'personal', subtype:'allday', label:t.label, cls:t.cls, icon:t.icon, counselorId:c.id });
    }
  }
  return items;
}

const SCHED = genSchedules();
window.__SCHED = SCHED;



/* ─── MAIN RENDER ────────────────────────────── */
let _renderTimer = null;
function render() {
  if (_renderTimer) cancelAnimationFrame(_renderTimer);
  _renderTimer = requestAnimationFrame(() => {
    renderTopbar();
    renderMonthGrid();
    renderMiniCal();
    renderCounselorList();
    renderUnconfirmedBtn();
    _renderTimer = null;
  });
}

/* ─── TOPBAR ─────────────────────────────────── */
const MONTH_KR = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

function renderTopbar() {
  const dim = new Date(curYear, curMonth + 1, 0).getDate();
  document.getElementById('tbTitle').textContent = `${curYear}년 ${MONTH_KR[curMonth]}`;
  document.getElementById('tbSub').textContent = `${curYear}.${p2(curMonth+1)}.01 – ${curYear}.${p2(curMonth+1)}.${p2(dim)}`;
  document.getElementById('mnLabel').textContent  = `${curYear}. ${p2(curMonth+1)}`;
}



/* ─── MONTH GRID ─────────────────────────────── */
function renderMonthGrid() {
  const grid = document.getElementById('monthGrid');
  grid.innerHTML = '';

  const firstDow = new Date(curYear, curMonth, 1).getDay(); // 0=Sun
  const dim      = new Date(curYear, curMonth + 1, 0).getDate();
  const prevDim  = new Date(curYear, curMonth, 0).getDate();
  // Leading cells (prev month)
  for (let i = 0; i < firstDow; i++) {
    const d = prevDim - firstDow + 1 + i;
    const cell = makeCell(new Date(curYear, curMonth - 1, d), true);
    grid.appendChild(cell);
  }

  // Current month cells
  for (let d = 1; d <= dim; d++) {
    const date = new Date(curYear, curMonth, d);
    const cell = makeCell(date, false);
    grid.appendChild(cell);
  }

  // Trailing cells (next month) — fill to complete last row
  const totalCells = firstDow + dim;
  const trailing   = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let d = 1; d <= trailing; d++) {
    const cell = makeCell(new Date(curYear, curMonth + 1, d), true);
    grid.appendChild(cell);
  }


}

function makeCell(date, isOtherMonth) {
  const dow   = date.getDay();
  const isSat = dow === 6;
  const isSun = dow === 0;
  const itod  = isToday(date);
  const key   = dk(date);
  const isHoliday = HOLIDAYS.has(key);
  const items = (isHoliday || isSun) ? [] : (SCHED[key] || []);

  const cell = document.createElement('div');
  let cls = 'day-cell';
  if (isOtherMonth) cls += ' other-month';
  if (itod)   cls += ' today-cell';
  if (isSat)  cls += ' sat-cell';
  if (isSun)  cls += ' sun-cell';
  if (isHoliday) cls += ' sun-cell'; // 공휴일도 빨간색
  cell.className = cls;
  cell.dataset.date = key;

  // Date number
  const numEl = document.createElement('div');
  numEl.className = 'dc-num';
  numEl.textContent = date.getDate();
  cell.appendChild(numEl);

  // 공휴일 라벨
  if (isHoliday && !isSun) {
    const hlEl = document.createElement('div');
    hlEl.style.cssText = 'font-size:13px;color:var(--sun-text);font-weight:400;padding-left:6px;';
    hlEl.textContent = key === '2026-03-02' ? '삼일절 대체공휴일' : '공휴일';
    cell.appendChild(hlEl);
  }



  // Split personal: allday chips vs timed rows
  const allday  = items.filter(s => s.type === 'personal' && s.subtype !== 'timed');
  const timedPersonal = items.filter(s => s.type === 'personal' && s.subtype === 'timed');
  const clients = items.filter(s => s.type === 'client');

  // — Allday personal chips (top) —
  if (allday.length && (viewMode === 'all' || viewMode === 'personal')) {
    let addedP = 0;
    allday.forEach(s => {
      if (!activeCounselors.has(s.counselorId)) return;
      if (clientNameFilter || prodNameFilter) return;
      const c = COUNSELORS.find(x => x.id === s.counselorId);
      const chip = document.createElement('div');
      chip.className = 'p-chip';

      const rgb = hexToRgb(c.hex);
      chip.style.background = `rgba(${rgb},0.20)`;
      chip.style.color = '#111';
      const DOW_KR2 = ['일','월','화','수','목','금','토'];
      const chipTimeStr = s.label === '오전 반차' ? '10:00~14:00' : s.label === '오후 반차' ? '15:00~19:00' : '종일';
      const chipTipHtml = `<div class="ev-tip-name">[${c.name}] ${s.label}</div><div class="ev-tip-datetime">${dk(date).replace(/-/g,'.')}(${DOW_KR2[date.getDay()]}) ${chipTimeStr}</div>`;
      chip.innerHTML = `[${c.name}] <span class="p-chip-name">${s.label}</span>`;
      chip.style.cursor = 'pointer';
      chip.addEventListener('click', () => { hideGlobalTip(); openPersonalDetail(s, c, dk(date)); });
      chip.addEventListener('mouseenter', e => showGlobalTip(chipTipHtml, e));
      chip.addEventListener('mousemove',  e => moveGlobalTip(e));
      chip.addEventListener('mouseleave', () => hideGlobalTip());
      cell.appendChild(chip);
      addedP++;
    });

  }

  // — Timed personal + client rows, merged and sorted by time —
  const showPersonal = (viewMode === 'all' || viewMode === 'personal');
  const showClient   = (viewMode === 'all' || viewMode === 'client');

  const timedRows = [
    ...(showPersonal ? timedPersonal : []),
    ...(showClient   ? clients       : []),
  ].filter(s => {
    if (!activeCounselors.has(s.counselorId)) return false;
    if (clientNameFilter && s.type === 'client' && !s.name.includes(clientNameFilter)) return false;
    if (clientNameFilter && s.type === 'personal') return false;
    if (prodNameFilter && s.type === 'client' && !(s.productObj && s.productObj.name.includes(prodNameFilter))) return false;
    if (prodNameFilter && s.type === 'personal') return false;
    return true;
  })
   .sort((a, b) => (a.time || '').localeCompare(b.time || ''));

  timedRows.forEach(s => {
    const c = COUNSELORS.find(x => x.id === s.counselorId);
    const row = document.createElement('div');
    row.className = 'ev-row';

    row.dataset.date = dk(date);
    row.dataset.evId = `${dk(date)}_${s.counselorId}_${s.time || s.label}`;
    if (selFilter && s.counselorId !== selFilter) row.classList.add('dim');
    if (selFilter && s.counselorId === selFilter) row.classList.add('hi');

    const isPersonal = s.type === 'personal';
    const duration = isPersonal ? (s.duration || 50) : 50;
    const DOW_KR3 = ['일','월','화','수','목','금','토'];
    const dateStr3 = dk(date).replace(/-/g,'.');
    const dowStr3 = DOW_KR3[date.getDay()];
    const tipHtml = isPersonal
      ? `<div class="ev-tip-name">${s.meetingName || s.label}</div>
         <div class="ev-tip-datetime">${dateStr3}(${dowStr3}) ${s.time}~${addMin(s.time, duration)}</div>
         <div class="ev-tip-body">
           ${s.meetingName ? `<div class="ev-tip-row"><span class="ev-tip-label">회의명</span><span class="ev-tip-value">${s.meetingName}</span></div>` : ''}
           <div class="ev-tip-row"><span class="ev-tip-label">담당자</span><span class="ev-tip-value" style="display:flex;align-items:center;gap:5px"><span class="ev-tip-dot" style="background:${c.hex}"></span>${c.name}</span></div>
           <div class="ev-tip-row"><span class="ev-tip-label">소요시간</span><span class="ev-tip-value">약 ${duration}분</span></div>
         </div>`
      : `<div class="ev-tip-name">${s.name}</div>
         <div class="ev-tip-datetime">${dateStr3}(${dowStr3}) ${s.time}~${addMin(s.time, s.productObj ? s.productObj.min : 50)}</div>
         <div class="ev-tip-body">
           ${s.productObj ? `<div class="ev-tip-row"><span class="ev-tip-label">카테고리</span><span class="ev-tip-value">${s.productObj.cat}</span></div><div class="ev-tip-row"><span class="ev-tip-label">상담/검사</span><span class="ev-tip-value">${s.productObj.name}</span></div>` : ''}
           <div class="ev-tip-row"><span class="ev-tip-label">담당자</span><span class="ev-tip-value" style="display:flex;align-items:center;gap:5px"><span class="ev-tip-dot" style="background:${c.hex}"></span>${c.name}</span></div>
         </div>`;
    if (!isPersonal && s.cancelled) row.classList.add('cancelled');

    // 취소된 경우 툴팁 이름 우측 상단에 뱃지 삽입
    const statusBadge = !isPersonal ? (() => {
      if (s.sessionStatus === 'cancelled') return `<span style="font-size:11px;font-weight:400;color:#E5373A;background:rgba(229,55,58,0.08);border-radius:20px;padding:4px 8px;flex-shrink:0;">취소</span>`;
      if (s.sessionStatus === 'done')      return `<span style="font-size:11px;font-weight:400;color:#666666;background:#F6F7F8;border-radius:20px;padding:4px 8px;flex-shrink:0;">진행 완료</span>`;
      return `<span style="font-size:11px;font-weight:400;color:#F59E0B;background:#FEF3C7;border-radius:20px;padding:4px 8px;flex-shrink:0;">진행 예정</span>`;
    })() : '';
    const tipHtmlWithBadge = !isPersonal
      ? tipHtml.replace(
          `<div class="ev-tip-name">${s.name}</div>`,
          `<div class="ev-tip-name" style="display:flex;align-items:center;justify-content:space-between;gap:8px;">${s.name}${statusBadge}</div>`
        )
      : tipHtml;

    row._tipHtml = tipHtmlWithBadge;
    row.innerHTML = `
      <div class="ev-bar" style="background:${c.hex}"></div>
      <span class="ev-time">${s.time}</span>
      <span class="ev-name">${isPersonal ? (s.meetingName || s.label) : s.name}</span>
      <span class="ev-type">${isPersonal ? c.name : s.productObj.name}</span>
`;
    row.style.cursor = 'pointer';
    if (isPersonal) {
      row.addEventListener('click', () => { hideGlobalTip(); openPersonalDetail(s, c, dk(date)); });
    } else {
      row.addEventListener('click', () => { hideGlobalTip(); openDetail(s, c, dk(date)); });
    }
    row.addEventListener('mouseenter', e => showGlobalTip(row._tipHtml, e));
    row.addEventListener('mousemove',  e => moveGlobalTip(e));
    row.addEventListener('mouseleave', () => hideGlobalTip());
    cell.appendChild(row);
  });

  // 빈 영역 클릭 → 일정 추가 패널 (일정 row/chip 클릭은 별도 처리됨)
  cell.addEventListener('dblclick', e => {
    // 이벤트 row, chip, 날짜 숫자 클릭은 무시
    if (e.target.closest('.ev-row, .p-chip, .dc-num')) return;
    openModal(key);
  });

  return cell;
}

/* ─── MINI CALENDAR ──────────────────────────── */
function renderMiniCal() {
  const el = document.getElementById('miniCal');
  const y = miniDate.getFullYear(), m = miniDate.getMonth();
  const firstDow = new Date(y, m, 1).getDay();
  const dim = new Date(y, m + 1, 0).getDate();
  const offset = firstDow; // Sun-first
  const today = new Date();

  let h = `
    <div class="mc-head">
      <div class="mc-title">${y}년 ${m + 1}월</div>
      <div class="mc-nav">
        <button onclick="miniPrev()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
        <button onclick="miniNext()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
      </div>
    </div>
    <div class="mc-grid">
      <div class="mc-dl sun">일</div><div class="mc-dl">월</div><div class="mc-dl">화</div>
      <div class="mc-dl">수</div><div class="mc-dl">목</div><div class="mc-dl">금</div>
      <div class="mc-dl sat">토</div>`;

  for (let i = 0; i < offset; i++) h += `<div class="mcd other"></div>`;

  for (let d = 1; d <= dim; d++) {
    const dt = new Date(y, m, d);
    const dow = dt.getDay();
    const isT = today.getFullYear()===y && today.getMonth()===m && today.getDate()===d;
    const isCurView = curYear===y && curMonth===m;
    const hasEv = SCHED[dk(dt)]?.length > 0;

    let cls = 'mcd';
    if (isT) cls += ' today';
    else if (isCurView && !isT) cls += ''; // no special highlight for just "current month"
    if (dow === 6) cls += ' sat';
    if (dow === 0) cls += ' sun';
    if (hasEv && !isT) cls += ' has-ev';

    h += `<div class="${cls}" onclick="jumpTo(${y},${m},${d})">${d}</div>`;
  }
  h += '</div>';
  el.innerHTML = h;
}

function miniPrev() { miniDate.setMonth(miniDate.getMonth() - 1); renderMiniCal(); }
function miniNext() { miniDate.setMonth(miniDate.getMonth() + 1); renderMiniCal(); }
function jumpTo(y, m, d) {
  const targetKey = dk(new Date(y, m, d));

  // 같은 달이면 렌더 없이 스크롤만
  if (y === curYear && m === curMonth) {
    const cell = document.querySelector(`[data-date="${targetKey}"]`);
    if (cell) {
      const scroll = document.querySelector('.cal-scroll');
      const cellTop = cell.offsetTop - scroll.offsetTop;
      scroll.scrollTo({ top: cellTop - 12, behavior: 'smooth' });
      // 잠깐 하이라이트
      cell.style.transition = 'background 0.2s';
      cell.style.background = 'var(--brand-soft)';
      setTimeout(() => { cell.style.background = ''; }, 900);
    }
  } else {
    // 다른 달이면 월 이동 후 스크롤
    curYear = y; curMonth = m;
    miniDate = new Date(y, m, d);
    render();
    setTimeout(() => {
      const cell = document.querySelector(`[data-date="${targetKey}"]`);
      if (cell) {
        const scroll = document.querySelector('.cal-scroll');
        scroll.scrollTo({ top: cell.offsetTop - scroll.offsetTop - 12, behavior: 'smooth' });
        cell.style.transition = 'background 0.2s';
        cell.style.background = 'var(--brand-soft)';
        setTimeout(() => { cell.style.background = ''; }, 900);
      }
    }, 50);
  }
}

/* ─── COUNSELOR LIST ─────────────────────────── */
function renderCounselorList() {
  const list = document.getElementById('cList');
  // Count per counselor for current month
  const counts = {};
  const dim = new Date(curYear, curMonth + 1, 0).getDate();
  for (let d = 1; d <= dim; d++) {
    const items = SCHED[dk(new Date(curYear, curMonth, d))] || [];
    items.forEach(s => {
      if (s.type === 'client') counts[s.counselorId] = (counts[s.counselorId] || 0) + 1;
    });
  }

  list.innerHTML = '';
  const groups = [
    { label: '내부상담사', counselors: COUNSELORS.filter(c => c.type === 'internal') },
    { label: '외부상담사', counselors: COUNSELORS.filter(c => c.type === 'external') },
  ];
  groups.forEach((group, gi) => {
    const header = document.createElement('div');
    header.className = 'c-group-label';
    if (gi > 0) header.style.marginTop = '10px';
    header.textContent = group.label;
    list.appendChild(header);
    group.counselors.forEach(c => {
      const btn = document.createElement('button');
      btn.className = `c-chip${activeCounselors.has(c.id) ? ' active' : ''}`;
      btn.innerHTML = `
        <div class="c-bar" style="background:${c.hex}"></div>
        <div class="c-name-wrap">
          <span class="c-name">${c.name}</span>
          ${c.role ? `<span class="c-role">${c.role}</span>` : ''}
        </div>
        <span class="c-cnt">${counts[c.id] || 0}건</span>
        <div class="c-check"></div>`;
      btn.addEventListener('click', () => toggleC(c.id));
      list.appendChild(btn);
    });
  });

  // Toggle all button label
  const toggleBtn = document.getElementById('toggleAllBtn');
  if (toggleBtn) toggleBtn.textContent = activeCounselors.size === COUNSELORS.length ? '전체 해제' : '전체 선택';

  // Modal select
  const sel = document.getElementById('cSel');
  if (sel) {
    const internalOpts = COUNSELORS.filter(c => c.type === 'internal')
      .map(c => `<option value="${c.id}">${c.name}${c.role ? ' (' + c.role + ')' : ''}</option>`).join('');
    const externalOpts = COUNSELORS.filter(c => c.type === 'external')
      .map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    sel.innerHTML = `<optgroup label="내부상담사">${internalOpts}</optgroup><optgroup label="외부상담사">${externalOpts}</optgroup>`;
  }
}

function toggleC(id) {
  if (activeCounselors.has(id)) activeCounselors.delete(id);
  else activeCounselors.add(id);
  render();
}
function filterC(id) { selFilter = selFilter === id ? null : id; render(); }
function toggleAll() {
  if (activeCounselors.size === COUNSELORS.length) {
    activeCounselors.clear();
  } else {
    COUNSELORS.forEach(c => activeCounselors.add(c.id));
  }
  render();
}

/* ─── CLIENT SEARCH ──────────────────────────── */
function onClientInput(val) {
  filterByClient(val);
  const clear = document.getElementById('clientClear');
  if (clear) clear.classList.toggle('visible', val.length > 0);
}

function clearClientSearch() {
  const input = document.getElementById('clientSearch');
  input.value = '';
  filterByClient('');
  const clear = document.getElementById('clientClear');
  if (clear) clear.classList.remove('visible');
  input.focus();
}

/* ─── CONTROLS ───────────────────────────────── */
function setView(mode, btn) {
  viewMode = mode;
  document.querySelectorAll('#viewToggle button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}
function changeMonth(dir) {
  curMonth += dir;
  if (curMonth > 11) { curMonth = 0; curYear++; }
  if (curMonth < 0)  { curMonth = 11; curYear--; }
  render();
}
function goToday() {
  const t = new Date();
  jumpTo(t.getFullYear(), t.getMonth(), t.getDate());
}
/* ─── PAGE SWITCHING ────────────────────────── */
function setNav(btn) {
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}



/* ─── PRODUCT SEARCH ─────────────────────────── */

/* ─── PROD SEARCH ────────────────────────────── */
function onProdInput(val) {
  filterProds(val);
  filterByProd(val);
  const clear = document.getElementById('prodClear');
  if (clear) clear.classList.toggle('visible', val.length > 0);
}

function clearProdSearch() {
  const input = document.getElementById('prodSearch');
  if (input) input.value = '';
  filterByProd('');
  const clear = document.getElementById('prodClear');
  if (clear) clear.classList.remove('visible');
  if (input) input.focus();
}

function filterByProd(val) {
  prodNameFilter = val.trim();
  render();
}

function filterProds(q) {
  const dd = document.getElementById('prodDd');
  const list = (q ? PRODUCTS.filter(p => p.name.includes(q)) : PRODUCTS).slice(0, 10);
  dd.innerHTML = list.map(p => `<div class="prod-item" onmousedown="selectProd('${p.name}')">${p.name}</div>`).join('');
}
function filterByClient(val) {
  clientNameFilter = val.trim();
  render();
}
function openProd()  { filterProds(document.getElementById('prodSearch').value); document.getElementById('prodDd').classList.add('open'); }
function closeProd() { setTimeout(() => document.getElementById('prodDd').classList.remove('open'), 160); }
function selectProd(n) { document.getElementById('prodSearch').value = n; document.getElementById('prodDd').classList.remove('open'); }

/* ─── MODAL ──────────────────────────────────── */

/* ── 상세 패널 ── */

/* ─── PERSONAL DETAIL PANEL ─────────────────── */
function openPersonalDetail(s, c, dateKey) {
  const overlay = document.getElementById('detailOverlay');
  if (!overlay) return;

  // 스크롤 위치 저장
  const calScroll = document.querySelector('.cal-scroll');
  if (calScroll) _savedScrollTop = calScroll.scrollTop;

  // timed 일정만 ev-row 하이라이트
  document.querySelectorAll('.ev-row').forEach(el => el.classList.remove('detail-focus'));
  if (s.subtype === 'timed' && dateKey && s.time) {
    const focusRow = document.querySelector(`[data-ev-id="${dateKey}_${s.counselorId}_${s.time}"]`);
    if (focusRow) focusRow.classList.add('detail-focus');
  }

  // 컬러 바
  const colorBar = document.getElementById('dpColorBar');
  if (colorBar) colorBar.style.background = c.hex;

  // 헤더 뱃지 + 액션버튼
  const _badge = document.getElementById('dpPayBadge');
  if (_badge) {
    _badge.className = 'dp-badge';
    _badge.textContent = '상담사 일정';
    _badge.style.cssText = 'background:#fff;color:#555;border:1px solid #888;';
  }
  document.getElementById('dpActions').innerHTML = `
    <button class="dp-action-btn" title="수정" aria-label="수정" data-tip="수정">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
    </button>
    <button class="dp-action-btn" title="삭제" aria-label="삭제" data-tip="삭제">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
    </button>
  `;

  // 타이틀
  document.getElementById('dpTitle').innerHTML = `
    <span class="dp-title-name">${c.name}</span>
    <span class="dp-title-div">|</span>
    <span class="dp-title-prod">${s.meetingName || s.label}</span>
  `;

  // 일시
  const DOW_KR = ['일','월','화','수','목','금','토'];
  const d = new Date(dateKey);
  const dow = DOW_KR[d.getDay()];
  const dateDisplay = `${dateKey.replace(/-/g,'.')}(${dow})`;
  let timeDisplay;
  if (s.label === '연차') {
    timeDisplay = `${dateDisplay} 종일`;
  } else if (s.label === '오전 반차') {
    timeDisplay = `${dateDisplay} 10:00~14:00 (4시간)`;
  } else if (s.label === '오후 반차') {
    timeDisplay = `${dateDisplay} 15:00~19:00 (4시간)`;
  } else if (s.label === '외근') {
    timeDisplay = `${dateDisplay} 10:00~19:00 (8시간)`;
  } else if (s.subtype === 'timed') {
    const end = addMin(s.time, s.duration);
    timeDisplay = `${dateDisplay} ${s.time}~${end} (${s.duration}분)`;
  } else {
    timeDisplay = `${dateDisplay} 종일`;
  }

  const catMap = { '연차':'근태', '오전 반차':'근태', '오후 반차':'근태', '외근':'근태', '회의':'일정 관리', '종합심리검사보고서 작성':'일정 관리' };
  const cat = catMap[s.label] || '일정 관리';

  document.getElementById('dpMeta').innerHTML = `
    <div class="dp-row">
      <span class="dp-label">일시</span>
      <span class="dp-value">${timeDisplay}</span>
    </div>
    <div class="dp-row">
      <span class="dp-label">카테고리</span>
      <span class="dp-value">${cat}</span>
    </div>
  `;

  document.getElementById('dpInfo').innerHTML = `
    <div class="dp-row">
      <span class="dp-label">담당자</span>
      <span class="dp-value" style="display:flex;align-items:center;">
        <span class="dp-counselor-avatar" style="background:${c.hex}">${c.name[0]}</span>
        ${c.name}
      </span>
    </div>
    <div class="dp-row">
      <span class="dp-label">메모</span>
      <span class="dp-value" style="color:#BABABA;">-</span>
    </div>
  `;

  document.getElementById('dpPrev').style.display = 'none';
  document.getElementById('dpFooter').innerHTML = '';

  overlay.classList.add('open');
}

function openDetail(s, c, dateKey) {
  currentDetailSession = s;
  currentDetailCounselor = c;
  currentDetailDateKey = dateKey;
  const overlay = document.getElementById('detailOverlay');
  if (!overlay || !s || !c) return;

  // 스크롤 위치 저장
  const calScroll = document.querySelector('.cal-scroll');
  if (calScroll) _savedScrollTop = calScroll.scrollTop;

  // 해당 일정 row 하이라이트
  document.querySelectorAll('.ev-row').forEach(el => el.classList.remove('detail-focus'));
  if (dateKey && s.time) {
    const focusRow = document.querySelector(`[data-ev-id="${dateKey}_${s.counselorId}_${s.time}"]`);
    if (focusRow) focusRow.classList.add('detail-focus');
  }

  // 컬러바
  const colorBar = document.getElementById('dpColorBar');
  if (colorBar) colorBar.style.background = c.hex;

  // 결제 상태 뱃지 (헤더)
  const badge = document.getElementById('dpPayBadge');
  if (badge) {
    badge.style.cssText = '';
    const payLabel = { unpaid:'결제 전', paid:'결제 완료', free:'무료' };
    badge.textContent = payLabel[s.payStatus] || '결제 전';
    badge.className = 'dp-badge ' + (s.payStatus || 'unpaid');
  }

  // 액션 아이콘들
  document.getElementById('dpActions').innerHTML = `
    <button class="dp-action-btn" data-tip="일정 리마인드 전송" aria-label="일정 리마인드 전송"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
    <button class="dp-action-btn" data-tip="일정 수정" aria-label="일정 수정"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
    <button class="dp-action-btn" data-tip="일정 복제" aria-label="일정 복제"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
    <button class="dp-action-btn" data-tip="일정 취소" aria-label="일정 취소"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></button>
    <button class="dp-action-btn" data-tip="삭제" aria-label="삭제"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg></button>
  `;

  // 타이틀
  const prodName = s.productObj ? s.productObj.name : '';
  document.getElementById('dpTitle').innerHTML = `
    <span class="dp-title-name">${s.name}님</span>
    <span class="dp-title-div">|</span>
    <span class="dp-title-prod">${prodName}</span>
  `;

  // 날짜 파싱
  const DOW_KR = ['일','월','화','수','목','금','토'];
  const d = new Date(dateKey);
  const dow = DOW_KR[d.getDay()];
  const dateDisplay = `${dateKey.replace(/-/g,'.')}(${dow})`;
  const endTime = s.productObj ? addMin(s.time, s.productObj.min) : addMin(s.time, 50);
  const min = s.productObj ? s.productObj.min : 50;

  const statusHtml = {
    upcoming: `<span class="dp-status-pill upcoming">진행 예정</span>`,
    done:     `<span class="dp-status-pill done">진행 완료</span>`,
    cancelled:`<span class="dp-status-pill cancelled">취소</span>`,
  }[s.sessionStatus] || '';

  // 메타 섹션
  document.getElementById('dpMeta').innerHTML = `
    <div class="dp-row">
      <span class="dp-label">일시</span>
      <span class="dp-value">${dateDisplay} ${s.time}~${endTime} (${min}분)${statusHtml}</span>
    </div>
    <div class="dp-row">
      <span class="dp-label">고객</span>
      <span class="dp-value" style="display:flex;align-items:center;gap:4px;font-size:15px;font-weight:600;cursor:pointer;">
        ${s.name} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </span>
    </div>
    <div class="dp-row">
      <span class="dp-label">연락처</span>
      <span class="dp-value">${s.phone || '-'}</span>
    </div>
  `;

  // 상담 정보 섹션
  const linkHtml = '';
  const memoHtml = s.memo
    ? `<div class="dp-row"><span class="dp-label">메모</span><span class="dp-value"><div class="dp-memo-box">${s.memo}</div></span></div>`
    : '';

  document.getElementById('dpInfo').innerHTML = `
    <div class="dp-row">
      <span class="dp-label">담당자</span>
      <span class="dp-value" style="display:flex;align-items:center;">
        <span class="dp-counselor-avatar" style="background:${c.hex}">${c.name[0]}</span>
        ${c.name}
      </span>
    </div>
    <div class="dp-row">
      <span class="dp-label">카테고리</span>
      <span class="dp-value">${s.productObj ? s.productObj.cat.replace(' - 상담','').replace(' - 검사','') : '-'}</span>
    </div>
    <div class="dp-row">
      <span class="dp-label">상담/검사</span>
      <span class="dp-value">${s.productObj ? s.productObj.name : '-'}</span>
    </div>
    <div class="dp-row">
      <span class="dp-label">비용</span>
      <span class="dp-value bold">${s.payStatus === 'free' ? '무료' : s.price ? s.price.toLocaleString() + '원' : '-'}</span>
    </div>
    <div class="dp-row">
      <span class="dp-label">회기</span>
      <span class="dp-value">${s.sessionNum || 1} / ${s.totalSession || 1}</span>
    </div>
    ${linkHtml}
    ${memoHtml}
  `;

  // 이전 기록 섹션
  const prevEl = document.getElementById('dpPrev');
  if (s.prevRecords && s.prevRecords.length > 0) {
    // 날짜 오름차순 정렬
    const sorted = [...s.prevRecords].sort((a, b) => a.dateStr.localeCompare(b.dateStr));
    const SHOW = 3;
    const hasMore = sorted.length > SHOW;

    const renderItems = (records) => records.map(r => `
      <div class="dp-tl-item">
        <div class="dp-tl-left">
          <div class="dp-tl-dot ${r.written ? 'written' : 'unwritten'}"></div>
          <div class="dp-tl-line"></div>
        </div>
        <div class="dp-tl-content">
          <span class="dp-tl-date" onclick="openDetailByDateKey('${r.dateKey}', currentDetailSession)">${r.dateStr}</span>
          <span class="dp-tl-status ${r.written ? 'written' : 'unwritten'}">${r.written ? '작성 완료' : '미작성'}</span>
        </div>
      </div>`).join('');

    const buildPrev = (expanded) => {
      const records = expanded ? sorted : sorted.slice(0, SHOW);
      const items = renderItems(records);
      const moreBtn = (!expanded && hasMore)
        ? `<span class="dp-tl-more" onclick="expandPrevRecords()">
            +${sorted.length - SHOW}개 더보기
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
           </span>` : '';
      return `<div class="dp-row" style="align-items:flex-start;">
        <span class="dp-label" style="padding-top:2px;">기록</span>
        <div style="flex:1;">
          <div class="dp-timeline${expanded ? ' expanded' : ''}" id="dpTimeline">${items}</div>
          ${moreBtn}
        </div>
      </div>`;
    };

    prevEl.innerHTML = buildPrev(false);
    prevEl._sorted = sorted;
    prevEl._buildPrev = buildPrev;
    prevEl.style.display = 'block';
  } else {
    prevEl.innerHTML = `<div class="dp-row">
      <span class="dp-label">기록</span>
      <span class="dp-value" style="color:#BABABA;">이전 기록이 없어요</span>
    </div>`;
    prevEl.style.display = 'block';
  }

  // 푸터 버튼
  const footer = document.getElementById('dpFooter');
  if (s.sessionStatus === 'cancelled') {
    footer.innerHTML = '';
    overlay.classList.add('open');
    return;
  }
  const hasRecord = s.prevRecords && s.prevRecords.some(r => r.written);
  const journalBtn = `<button class="dp-btn dp-btn-secondary" onclick="openJournal()">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ${hasRecord ? '상담일지 보기' : '상담일지 작성'}
  </button>`;

  let ctaBtn = '';
  if (s.payStatus === 'unpaid') {
    ctaBtn = `<button class="dp-btn dp-btn-primary">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
      해당 일정 결제하기
    </button>`;
  } else {
    ctaBtn = `<button class="dp-btn dp-btn-primary">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      일정 마감 처리하기
    </button>`;
  }
  footer.innerHTML = journalBtn + ctaBtn;

  overlay.classList.add('open');
}


/* ─── 상담일지 작성 ────────────────────────── */
function openJournal() {
  const s = currentDetailSession;
  if (!s) return;
  const DOW_KR = ['일','월','화','수','목','금','토'];

  // 컬러바 동기화
  const jnBar = document.getElementById('jnColorBar');
  const dpBar = document.getElementById('dpColorBar');
  if (jnBar && dpBar) jnBar.style.background = dpBar.style.background;

  // 회기 뱃지
  document.getElementById('jnSessionNum').textContent = `${s.sessionNum || 1}회기`;

  // 메타
  const d = new Date(currentDetailDateKey);
  const dow = DOW_KR[d.getDay()];
  const dateDisplay = `${currentDetailDateKey.replace(/-/g,'.')}(${dow})`;
  const endTime = s.productObj ? addMin(s.time, s.productObj.min) : addMin(s.time, 50);
  document.getElementById('jnMeta').innerHTML = `
    <span class="jn-meta-label">고객명</span><span class="jn-meta-value">${s.name}</span>
    <span class="jn-meta-label">상담사</span><span class="jn-meta-value">${currentDetailCounselor ? currentDetailCounselor.name : '-'}</span>
    <span class="jn-meta-label">상담 일시</span><span class="jn-meta-value">${dateDisplay} ${s.time}~${endTime}</span>
    <span class="jn-meta-label">상담 유형</span><span class="jn-meta-value">${s.productObj ? s.productObj.cat.replace(' - 상담','').replace(' - 검사','') : '-'}</span>
    <span class="jn-meta-label">회기 정보</span><span class="jn-meta-value">${s.sessionNum || 1}회기</span>
    <span class="jn-extra-title">추가 정보</span>
    <span class="jn-meta-label">성별</span><span class="jn-meta-value">-</span>
    <span class="jn-meta-label">생년월일</span><span class="jn-meta-value">-</span>
    <span class="jn-meta-label">연락처</span><span class="jn-meta-value">${s.phone || '-'}</span>
  `;

  // FAV/PHQ 날짜
  document.getElementById('jnFavDate').textContent = dateDisplay + ' ' + s.time;
  document.getElementById('jnPhqDate').textContent = dateDisplay;

  // PHQ-9 문항
  const PHQ_ITEMS = [
    '일 또는 여가 활동을 하는데 흥미나 즐거움을 느끼지 못함',
    '기분이 가라앉거나 우울하거나 희망이 없음',
    '잠이 들거나 계속 잠을 자는 것이 어려움, 또는 잠을 너무 많이 잠',
    '피곤하다고 느끼거나 기운이 거의 없음',
    '입맛이 없거나 과식을 함',
    '자신을 부정적으로 봄 – 또는 자신이 실패자라고 느끼거나 자신 또는 가족을 실망시킴',
    '신문을 읽거나 텔레비전 보는 것과 같은 일에 집중하는 것이 어려움',
    '다른 사람들이 주목할 정도로 너무 느리게 움직이거나 말을 함 또는 반대로 평상시보다 많이 움직여서, 너무 안절부절 못하거나 들떠 있음',
    '자신이 죽는 것이 더 낫다고 생각하거나 어떤 식으로든 자신을 해칠 것이라고 생각함',
  ];
  document.getElementById('jnPhqItems').innerHTML = PHQ_ITEMS.map((q, i) => `
    <tr>
      <td style="color:var(--text-3);width:32px;">${i+1}</td>
      <td>${q}</td>
      <td><input class="jn-score-input" type="number" min="0" max="3" placeholder="–"
        oninput="calcPhqTotal()"></td>
    </tr>`).join('');

  switchJnTab('journal', document.querySelector('.jn-tab'));
  document.getElementById('detailPanel').classList.add('journal-open');
}

function closeJournal() {
  document.getElementById('detailPanel').classList.remove('journal-open');
}

function switchJnTab(tab, btn) {
  document.querySelectorAll('.jn-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('jnBodyJournal').style.display = tab === 'journal' ? '' : 'none';
  document.getElementById('jnBodyExtra').style.display   = tab === 'extra'   ? '' : 'none';
}

function calcPhqTotal() {
  const inputs = document.querySelectorAll('#jnPhqItems input');
  let total = 0, a1=0, a2=0, a3=0, a4=0;
  inputs.forEach((inp, i) => {
    const v = parseInt(inp.value) || 0;
    total += v;
    if ([0,1].includes(i))       a1 += v;
    if ([2,3,4,7].includes(i))   a2 += v;
    if ([5,6].includes(i))       a3 += v;
    if (i === 8)                 a4 += v;
  });
  const setVal = (id, v) => { const el=document.getElementById(id); if(el) el.value = v || ''; };
  setVal('jnPhqTotal', total);
  setVal('jnArea1', a1); setVal('jnArea2', a2); setVal('jnArea3', a3); setVal('jnArea4', a4);
  const sev = total <= 4 ? '없음' : total <= 9 ? '경미한 수준' : total <= 14 ? '중간 수준' : total <= 19 ? '중증도 수준' : '심각한 수준';
  const sevEl = document.getElementById('jnPhqSeverity');
  if (sevEl) sevEl.textContent = sev;
}


/* ─── 미확인 예약 알림 ──────────────────────── */
const DOW_KR_UC = ['일','월','화','수','목','금','토'];
const CH_LABEL = { app: '앱', online: '온라인' };

function getUnconfirmedSessions() {
  const result = [];
  Object.keys(SCHED).forEach(dateKey => {
    SCHED[dateKey].forEach(s => {
      if (s.type === 'client' && !s.confirmed && s.channel !== 'phone') {
        const counselor = COUNSELORS.find(c => c.id === s.counselorId);
        result.push({ s, counselor, dateKey });
      }
    });
  });
  result.sort((a, b) => b.dateKey.localeCompare(a.dateKey) || b.s.time.localeCompare(a.s.time));

  // 10개 초과분은 confirmed 처리
  if (result.length > 10) {
    result.slice(10).forEach(({ s }) => { s.confirmed = true; });
    return result.slice(0, 10);
  }
  return result;
}

function renderUnconfirmedBtn() {
  const items = getUnconfirmedSessions();
  const btn = document.getElementById('unconfirmedBtn');
  const cnt = document.getElementById('unconfirmedCount');
  if (!btn) return;
  if (items.length > 0) {
    btn.classList.remove('hidden');
    cnt.textContent = items.length > 10 ? '10+' : items.length;
    cnt.style.display = 'inline-flex';
  } else {
    btn.classList.add('hidden');
  }
}

function openUcPanel() {
  renderUcList();
  document.getElementById('ucOverlay').classList.add('open');
}

function closeUcPanel() {
  document.getElementById('ucOverlay').classList.remove('open');
}

function renderUcList() {
  const items = getUnconfirmedSessions();
  const countEl = document.getElementById('ucHeadCount');
  if (countEl) countEl.textContent = items.length;

  const list = document.getElementById('ucList');
  if (items.length === 0) {
    list.innerHTML = '<div class="uc-empty"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>미확인 예약이 없어요</div>';
    return;
  }

  list.innerHTML = items.map(({ s, counselor, dateKey }) => {
    const d = new Date(dateKey);
    const dow = DOW_KR_UC[d.getDay()];
    const dateDisplay = `${dateKey.replace(/-/g,'.')}(${dow}) ${s.time}`;
    const chLabel = CH_LABEL[s.channel] || s.channel;
    return `
    <div class="uc-item" onclick="highlightCalEvent('${dateKey}', ${s.counselorId}, '${s.time}')">
      <div class="uc-item-left">
        <div class="uc-item-name">
          ${s.name}
          <span class="uc-ch-badge ${s.channel}">${chLabel} 예약</span>
        </div>
        <div class="uc-item-info">
          ${counselor ? counselor.name : '-'} · ${dateDisplay}<br>
          ${s.productObj ? s.productObj.name : '-'}
        </div>
      </div>
      <button class="uc-confirm-btn" onclick="event.stopPropagation(); confirmSession('${dateKey}', ${s.counselorId}, '${s.time}')">확인</button>
    </div>`;
  }).join('');
}

function confirmSession(dateKey, counselorId, time) {
  const sessions = SCHED[dateKey];
  if (!sessions) return;
  const s = sessions.find(s => s.counselorId === counselorId && s.time === time);
  if (s) s.confirmed = true;
  renderUcList();
  renderUnconfirmedBtn();
  render();
}

function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('open');
  document.getElementById('detailPanel').classList.remove('journal-open');

  // 스크롤 위치 복원
  const calScroll = document.querySelector('.cal-scroll');
  if (calScroll) {
    setTimeout(() => {
      calScroll.scrollTo({ top: _savedScrollTop, behavior: 'smooth' });
    }, 50);
  }

  // 하이라이트 제거
  setTimeout(() => {
    document.querySelectorAll('.ev-row.detail-focus').forEach(el => el.classList.remove('detail-focus'));
  }, 400);

}

function updateMemoCount(el) {
  const len = el.value.length;
  document.getElementById('memoCount').textContent = `${len}/1000자`;
  if (len > 1000) el.value = el.value.slice(0, 1000);
}



/* ─── 고객 커스텀 드롭다운 ───────────────────── */
const CLIENT_LIST = [
  ...Array.from({length: 20}, (_,i) => ({
    name: NAMES[i % NAMES.length],
    phone: `010-${String(1000+Math.floor(Math.random()*9000))}-${String(1000+Math.floor(Math.random()*9000))}`
  }))
];
let _clientSelected = null;

function renderClientList() {
  const list = document.getElementById('clientList');
  if (!list) return;
  list.innerHTML = CLIENT_LIST.map((c, i) => `
    <div class="f-custom-item${_clientSelected === i ? ' selected' : ''}"
         onmousedown="selectClient(${i})">
      ${c.name} (${c.phone})
    </div>`).join('');
}

function toggleClientDropdown() {
  const dd = document.getElementById('clientDropdown');
  const trigger = document.getElementById('clientTrigger');
  if (!dd || !trigger) return;
  const isOpen = dd.classList.contains('open');
  if (isOpen) {
    dd.classList.remove('open');
    trigger.classList.remove('open');
  } else {
    renderClientList();
    dd.classList.add('open');
    trigger.classList.add('open');
  }
}

function closeClientDropdown() {
  const dd = document.getElementById('clientDropdown');
  const trigger = document.getElementById('clientTrigger');
  if (dd) dd.classList.remove('open');
  if (trigger) trigger.classList.remove('open');
}

function selectClient(idx) {
  _clientSelected = idx;
  const c = CLIENT_LIST[idx];
  const text = document.getElementById('clientTriggerText');
  const trigger = document.getElementById('clientTrigger');
  if (text) text.textContent = `${c.name} (${c.phone})`;
  if (trigger) trigger.classList.remove('placeholder');
  closeClientDropdown();
}

// 외부 클릭 시 드롭다운 닫기
document.addEventListener('click', e => {
  const sel = document.getElementById('clientSelect');
  if (sel && !sel.contains(e.target)) closeClientDropdown();
});


let currentDetailSession = null;
let currentDetailCounselor = null;
let currentDetailDateKey = null;
let _savedScrollTop = 0;

function openDetailByDateKey(dateKey, refSession) {
  if (!dateKey || !refSession) return;
  const dayItems = SCHED[dateKey] || [];
  // 같은 내담자 이름 + 상담사로 매칭
  const match = dayItems.find(s =>
    s.type === 'client' &&
    s.name === refSession.name &&
    s.counselorId === refSession.counselorId
  ) || dayItems.find(s =>
    s.type === 'client' && s.name === refSession.name
  );
  if (match) {
    closeDetail();
    setTimeout(() => openDetail(match, null, dateKey), 320);
  }
}

function expandPrevRecords() {
  const prevEl = document.getElementById('dpPrev');
  if (prevEl && prevEl._buildPrev) {
    prevEl.innerHTML = prevEl._buildPrev(true);
  }
}

function toggleMeetingName(val) {
  const row = document.getElementById('meetingNameRow');
  if (row) row.style.display = val === '회의' ? '' : 'none';
  if (val !== '회의') {
    const inp = document.getElementById('meetingNameInput');
    if (inp) inp.value = '';
  }
}

function switchTab(tab) {
  const isClient = tab === 'client';
  document.getElementById('tabClient').classList.toggle('active', isClient);
  document.getElementById('tabPersonal').classList.toggle('active', !isClient);
  document.getElementById('clientF').style.display = isClient ? '' : 'none';
  document.getElementById('personalF').style.display = isClient ? 'none' : '';
  document.getElementById('spBody').scrollTop = 0;
}

function openModal(dateStr) {
  switchTab('client');
  document.getElementById('modalOverlay').classList.add('open');
  const d = dateStr || dk(new Date());
  document.getElementById('schedDate').value = d;
}
function closeModal() {
  const el = document.getElementById('modalOverlay');
  el.classList.remove('open');
}
function closeModalOuter(e) { if (e.target === document.getElementById('modalOverlay')) closeModal(); }
function toggleF() {
  const t = document.getElementById('sType').value;
  document.getElementById('clientF').style.display   = t === 'client'   ? '' : 'none';
  document.getElementById('personalF').style.display = t === 'personal' ? '' : 'none';
}

/* ─── INIT ───────────────────────────────────── */
render();

/* ─── 캘린더 행 높이 자동 맞춤 ─────────────────── */
function fitCalRows() {
  const grid   = document.getElementById('monthGrid');
  const scroll = document.getElementById('monthGrid')?.closest('.cal-scroll');
  if (!grid || !scroll) return;
  const availH = scroll.clientHeight;
  const cells  = grid.childElementCount;
  if (!availH || !cells) return;
  const numRows = cells / 7;
  const rowH = Math.floor(availH / numRows);
  const base = rowH > 80 ? rowH + 'px' : '80px';
  grid.style.gridAutoRows = 'minmax(' + base + ', auto)';
}

// render() 이후 레이아웃 완료 후 실행
const _origRender = render;
window._fitOnRender = function() {
  requestAnimationFrame(() => requestAnimationFrame(fitCalRows));
};

// render를 래핑해서 항상 fitCalRows 호출
(function() {
  const calScroll = document.querySelector('.cal-scroll');
  if (calScroll) {
    new ResizeObserver(fitCalRows).observe(calScroll);
  }
  // render가 호출될 때마다 fitCalRows도 호출되도록 패치
  const origRAF = window.requestAnimationFrame.bind(window);
  let pending = false;
  function schedFit() {
    if (pending) return;
    pending = true;
    origRAF(() => origRAF(() => { fitCalRows(); pending = false; }));
  }
  // MutationObserver로 monthGrid 변경 감지
  const mo = new MutationObserver(schedFit);
  const grid = document.getElementById('monthGrid');
  if (grid) mo.observe(grid, { childList: true });
})();


let _tipTimer = null;
let _tipX = 0, _tipY = 0;

function showGlobalTip(html, e) {
  hideGlobalTip();
  _tipX = e.clientX; _tipY = e.clientY;
  _tipTimer = setTimeout(() => {
    const t = document.getElementById('globalTip');
    t.innerHTML = html;
    t.style.opacity = '1';
    _positionTip(t, _tipX, _tipY);
  }, 500);
}
function moveGlobalTip(e) {
  _tipX = e.clientX; _tipY = e.clientY;
  const t = document.getElementById('globalTip');
  if (parseFloat(t.style.opacity) !== 1) return;
  _positionTip(t, _tipX, _tipY);
}
function _positionTip(t, cx, cy) {
  const w = t.offsetWidth, h = t.offsetHeight;
  const vw = window.innerWidth, vh = window.innerHeight;
  let x = cx + 14;
  let y = cy - h / 2;
  if (x + w > vw - 8) x = cx - w - 14;
  if (y < 8) y = 8;
  if (y + h > vh - 8) y = vh - h - 8;
  t.style.left = x + 'px';
  t.style.top  = y + 'px';
}
function hideGlobalTip() {
  clearTimeout(_tipTimer);
  _tipTimer = null;
  const t = document.getElementById('globalTip');
  if (t) t.style.opacity = '0';
}

/* ══ Script Block 2 (PC) ══ */
  {
    /* ─── MASTER DATA ─────────────────────────────── */
const COUNSELORS = [
  {id:1,  name:'김선경', hex:'#F0625E', role:'센터장',    type:'internal'},
  {id:3,  name:'김지윤', hex:'#89C458', role:'수석상담사', type:'internal'},
  {id:2,  name:'권하린', hex:'#A351D2', role:'선임상담사', type:'internal'},
  {id:4,  name:'김혜주', hex:'#FFBB00', role:'선임상담사', type:'internal'},
  {id:5,  name:'조예지', hex:'#77D5FA', role:'매니저',    type:'internal'},
  {id:6,  name:'최혜숙', hex:'#FF7B54', role:'',          type:'external'},
  {id:7,  name:'조미나', hex:'#2EC4B6', role:'',          type:'external'},
  {id:8,  name:'왕선아', hex:'#5B8DB8', role:'',          type:'external'},
  {id:9,  name:'박소현', hex:'#F4A261', role:'',          type:'external'},
  {id:10, name:'강미숙', hex:'#C06C84', role:'',          type:'external'},
];


const PRODUCTS = [
  {name:'센터장 일반상담 (50분)',          cat:'일반 - 상담', min:50},
  {name:'1급 일반상담 (대면)',             cat:'일반 - 상담', min:50},
  {name:'2급 일반상담 (대면)',             cat:'일반 - 상담', min:50},
  {name:'커플/부부/가족 상담 (90분)',      cat:'일반 - 상담', min:90},
  {name:'커플/부부/가족 상담 (50분)',      cat:'일반 - 상담', min:50},
  {name:'센터장 일반상담 (90분)',          cat:'일반 - 상담', min:90},
  {name:'슈퍼비전 (12만원)',              cat:'일반 - 상담', min:50},
  {name:'슈퍼비전 (13만원)',              cat:'일반 - 상담', min:50},
  {name:'(선결제) 1급 일반상담',          cat:'일반 - 상담', min:50},
  {name:'(선결제) 센터장 일반상담 (50분)', cat:'일반 - 상담', min:50},
  {name:'(선결제) 2급 일반상담',          cat:'일반 - 상담', min:50},
  {name:'성인 ADHD 상담',                cat:'일반 - 상담', min:50},
  {name:'1급 비대면 상담',               cat:'일반 - 상담', min:50},
  {name:'2급 비대면 상담',               cat:'일반 - 상담', min:50},
  {name:'MMPI-2',                       cat:'일반 - 검사', min:50},
  {name:'SCT 문장완성검사',              cat:'일반 - 검사', min:50},
  {name:'BGT 검사',                     cat:'일반 - 검사', min:50},
  {name:'HTP 검사',                     cat:'일반 - 검사', min:50},
  {name:'IQ 검사',                      cat:'일반 - 검사', min:50},
  {name:'ADHD 검사',                    cat:'일반 - 검사', min:50},
  {name:'종합심리평가',                  cat:'일반 - 검사', min:90},
  {name:'우울/불안 검사',                cat:'일반 - 검사', min:50},
  {name:'마음바우처 개인상담',            cat:'마음바우처',  min:50},
  {name:'마음바우처 커플상담',            cat:'마음바우처',  min:50},
  {name:'마음바우처 가족상담',            cat:'마음바우처',  min:50},
  {name:'인스파이어 특별상담 (50분)',     cat:'인스파이어',  min:50},
  {name:'인스파이어 검사',               cat:'인스파이어',  min:50},
  {name:'화승R&A 상담',                  cat:'화승R&A',    min:50},
  {name:'화승R&A 검사',                  cat:'화승R&A',    min:50},
  {name:'삼화 상담',                     cat:'삼화',       min:50},
  {name:'애큐온 상담',                   cat:'애큐온',     min:50},
  {name:'애큐온 검사',                   cat:'애큐온',     min:50},
  {name:'미쉐린코리아 상담',             cat:'미쉐린코리아', min:50},
  {name:'미쉐린코리아 검사',             cat:'미쉐린코리아', min:50},
  {name:'SIB 상담',                     cat:'SIB',        min:50},
  {name:'SIB 검사',                     cat:'SIB',        min:50},
  {name:'광기술원 상담',                 cat:'광기술원',    min:50},
  {name:'광기술원 검사',                 cat:'광기술원',    min:50},
];

const NAMES = [
  '김지수','이민호','박서연','최준영','정유나','강민준','윤서연','임지훈',
  '사범기','오지수','장원우','장요엘','천두인','최혜근','안지현','조성민',
  '황은지','서민준','노유진','전우주','심지은','변재현','곽민서','탁현수',
  '남가은','석준호','오하린','백지훈','신유미','천재원','나현서','배성민',
  '구하은','함준혁','표지현','형민준','소유진','두현우','팽서연','계민아',
];

// allday = 종일 칩으로 상단 노출 / timed = 시간 있는 행으로 노출
const PTYPES_ALLDAY = [
  {label:'연차',      cls:'annual',    icon:'🌿'},
  {label:'오전 반차', cls:'half-am',   icon:'🌤'},
  {label:'오후 반차', cls:'half-pm',   icon:'🌇'},
];
const PTYPES_TIMED = [
  {label:'회의',   cls:'meeting', icon:'💬', duration:50},
  {label:'종합심리검사보고서 작성', cls:'report', icon:'📝', duration:120},
];
const MEETING_NAMES = [
  '주간 팀 미팅', '케이스 리뷰', '월례 보고', '슈퍼비전', '신규 내담자 배정', '운영 회의', '위기 케이스 논의',
];


// 상담사별 근무 요일(0=일,1=월,...,6=토) 및 시간대
const COUNSELOR_SCHEDULE = {
  1: { days: [1,2,4],    times: ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'] }, // 김선경 월화목
  2: { days: [2,3,4,5],  times: ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'],
       sat:              ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30'] }, // 권하린 화수목금+토
  3: { days: [1,2,3],    times: ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'] }, // 김지윤 월화수
  4: { days: [1,5],      times: ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'],
       sat:              ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30'] }, // 김혜주 월금+토
  // 외부상담사 (상담 일정만, 근태 없음)
  6: { days: [1,3],      times: ['10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'] }, // 최혜숙 월수
  7: { days: [2,4],      times: ['10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'] }, // 조미나 화목
  8: { days: [3,5],      times: ['10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'] }, // 왕선아 수금
  9: { days: [1,4],      times: ['10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'] }, // 박소현 월목
  10:{ days: [2,5],      times: ['10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'] }, // 강미숙 화금
};

/* ─── STATE ─────────────────────────────────── */
let activeCounselors = new Set([1,2,3,4,5,6,7,8,9,10]);
let clientNameFilter = '';
let prodNameFilter = '';
let viewMode = 'all';
let selFilter = null;
let miniDate  = new Date();

// Current month view — start from today's month
const _now = new Date();
let curYear  = _now.getFullYear();
let curMonth = _now.getMonth(); // 0-indexed

/* ─── UTILS ──────────────────────────────────── */
const p2 = n => String(n).padStart(2,'0');
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}
function addMin(timeStr, mins) {
  const [h, m] = timeStr.split(':').map(Number);
  const total = h * 60 + m + mins;
  return `${p2(Math.floor(total/60) % 24)}:${p2(total % 60)}`;
}
const dk = d => `${d.getFullYear()}-${p2(d.getMonth()+1)}-${p2(d.getDate())}`;
const isToday = d => d.toDateString() === new Date().toDateString();

/* ─── HOLIDAYS ───────────────────────────────── */
const HOLIDAYS = new Set([
  '2026-01-01', // 신정
  '2026-01-28', '2026-01-29', '2026-01-30', // 설날 연휴
  '2026-03-01', // 삼일절
  '2026-03-02', // 삼일절 대체공휴일
  '2026-05-05', // 어린이날
  '2026-05-24', // 부처님오신날
  '2026-06-06', // 현충일
  '2026-08-15', // 광복절
  '2026-09-24', '2026-09-25', '2026-09-26', // 추석 연휴
  '2026-10-03', // 개천절
  '2026-10-09', // 한글날
  '2026-12-25', // 성탄절
]);

/* ─── SCHEDULE GENERATION ────────────────────── */
// Generate 6 months of data (3 months back, 3 months forward) for richness
function genSchedules() {
  const out = {};
  const base = new Date(_now.getFullYear(), _now.getMonth() - 3, 1);

  for (let m = 0; m < 7; m++) {
    const y = base.getFullYear(), mo = base.getMonth();
    const daysInMonth = new Date(y, mo + 1, 0).getDate();

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(y, mo, d);
      const dow = date.getDay();
      if (dow === 0 || HOLIDAYS.has(dk(date))) { base.setDate(base.getDate() + (d === daysInMonth ? 0 : 1)); continue; } // skip Sunday & holidays
      const isSat = dow === 6;
      const key = dk(date);
      out[key] = [];

      // sessions
      // personal items 먼저 생성 (weekday only, ~50% chance)
      const personalItems = [];
      if (!isSat && Math.random() > 0.48) {
        // 회의가 생성될 경우, 해당 날짜 출근 상담사 전원에게 동일 회의명·시간 배정
        const rawItems = genPersonal();
        for (const item of rawItems) {
          if (item.subtype === 'timed' && item.label === '회의') {
            // 회의: 해당 요일 출근 상담사 전원 공유 (조예지 포함)
            const workingCounselors = COUNSELORS.filter(c => {
              if (c.type === 'external') return false;
              if (c.id === 5) return true;
              const sch = COUNSELOR_SCHEDULE[c.id];
              return sch && sch.days.includes(dow);
            });
            const meetingName = MEETING_NAMES[Math.floor(Math.random() * MEETING_NAMES.length)];
            for (const wc of workingCounselors) {
              personalItems.push({ ...item, counselorId: wc.id, meetingName });
            }
          } else if (item.subtype === 'timed' && item.label === '종합심리검사보고서 작성') {
            // 보고서: 조예지 제외 출근 상담사 개인별 생성
            const workingCounselors = COUNSELORS.filter(c => {
              if (c.type === 'external') return false;
              if (c.id === 5) return false;
              const sch = COUNSELOR_SCHEDULE[c.id];
              return sch && sch.days.includes(dow);
            });
            for (const wc of workingCounselors) {
              personalItems.push({ ...item, counselorId: wc.id });
            }
          } else {
            personalItems.push({ ...item });
          }
        }
      }

      // 연차인 상담사 ID 수집 + 상담사별 allday 중복(연차+반차) 방지
      const annualCounselorIds = new Set();
      const busyCounselorIds   = new Set();
      const filteredPersonal   = [];
      for (const p of personalItems) {
        if (p.subtype !== 'allday') { filteredPersonal.push(p); continue; }
        if (busyCounselorIds.has(p.counselorId)) continue;
        busyCounselorIds.add(p.counselorId);
        if (p.label === '연차') annualCounselorIds.add(p.counselorId);
        filteredPersonal.push(p);
      }

      // 내담자 세션 생성 후 연차 상담사 담당 세션 제거
      const MANAGER_IDS = new Set([5]);
      const sessions = genSessions(isSat ? 3 : 6, isSat ? 6 : 13, date)
        .filter(s => !annualCounselorIds.has(s.counselorId) && !MANAGER_IDS.has(s.counselorId));

      out[key].push(...sessions);

      // 외부상담사: 근무일당 ~60% 확률 → 월 5건 내외
      if (!isSat) {
        const _now = new Date();
        const _today = dk(_now);
        const _ds = dk(date);
        const _past = _ds < _today;
        const _isToday = _ds === _today;
        COUNSELORS.filter(c => c.type === 'external').forEach(extC => {
          const sch = COUNSELOR_SCHEDULE[extC.id];
          if (!sch || !sch.days.includes(dow)) return;
          if (Math.random() > 0.6) return;
          const t = sch.times[Math.floor(Math.random() * sch.times.length)];
          const prod = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
          const slotPast = _past || (_isToday && t < `${p2(_now.getHours())}:${p2(_now.getMinutes())}`);
          let sessionStatus, payStatus;
          if (slotPast) {
            const cancelled = Math.random() < 0.1;
            sessionStatus = cancelled ? 'cancelled' : 'done';
            payStatus = cancelled ? 'unpaid' : (Math.random() < 0.15 ? 'free' : 'paid');
          } else {
            sessionStatus = 'upcoming';
            payStatus = 'unpaid';
          }
          out[key].push({
            type: 'client', time: t,
            name: NAMES[Math.floor(Math.random() * NAMES.length)],
            phone: `010-${String(1000+Math.floor(Math.random()*9000))}-${String(1000+Math.floor(Math.random()*9000))}`,
            productObj: prod, counselorId: extC.id,
            cancelled: sessionStatus === 'cancelled',
            payStatus, sessionStatus,
            memo: '', link: '', prevRecords: [],
            sessionNum: 1 + Math.floor(Math.random() * 4), totalSession: 8,
            price: Math.floor((40000 + Math.random() * 80000) / 1000) * 1000,
            channel: 'phone', confirmed: true,
          });
        });
      }

      out[key].unshift(...filteredPersonal);

      // sort: personal first, then by time
      out[key].sort((a, b) => {
        if (a.type === 'personal' && b.type !== 'personal') return -1;
        if (a.type !== 'personal' && b.type === 'personal') return  1;
        return (a.time || '').localeCompare(b.time || '');
      });
    }

    base.setMonth(base.getMonth() + 1);
    base.setDate(1);
  }
  return out;
}

function genSessions(min, max, date) {
  const count = min + Math.floor(Math.random() * (max - min));
  // 상담사별 사용 시간 추적 (같은 시간대라도 다른 상담사면 허용)
  const usedByCounselor = {}; // counselorId -> Set of times
  const items = [];
  const now = new Date();
  const todayStr = dk(now);
  const dateStr  = dk(date);
  const isPast   = dateStr < todayStr;
  const isToday2 = dateStr === todayStr;
  // 해당 요일에 근무하는 상담사만 풀에 포함
  const dow = date.getDay();
  const counselorPool = COUNSELORS.filter(x => {
    if (x.type === 'external') return false; // 외부상담사 별도 처리
    if (x.id === 5) return false; // 매니저 제외
    const sch = COUNSELOR_SCHEDULE[x.id];
    if (!sch) return false;
    if (dow === 6) return !!sch.sat; // 토요일은 sat 시간대 있는 상담사만
    return sch.days.includes(dow);
  });
  if (counselorPool.length === 0) return items;
  for (let i = 0; i < count; i++) {
    const c = counselorPool[Math.floor(Math.random() * counselorPool.length)];
    if (!usedByCounselor[c.id]) usedByCounselor[c.id] = new Set();
    // 해당 상담사의 근무 시간대 중 빈 슬롯 찾기
    const sch = COUNSELOR_SCHEDULE[c.id];
    const cTimes = (dow === 6 && sch.sat) ? sch.sat : sch.times;
    const available = cTimes.filter(t => !usedByCounselor[c.id].has(t));
    if (available.length === 0) continue;
    const t = available[Math.floor(Math.random() * available.length)];
    usedByCounselor[c.id].add(t);
    const prod = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];

    // 날짜+시간 기준으로 과거 여부 판단
    const slotPast = isPast || (isToday2 && t < `${p2(now.getHours())}:${p2(now.getMinutes())}`);

    let sessionStatus, payStatus;
    if (slotPast) {
      // 과거: 취소(13%) 또는 진행 완료
      const isCancelled = Math.random() < 0.13;
      if (isCancelled) {
        sessionStatus = 'cancelled';
        // 취소는 결제 전 or 무료만
        payStatus = Math.random() < 0.3 ? 'free' : 'unpaid';
      } else {
        sessionStatus = 'done';
        // 진행 완료: 결제 완료 or 무료
        payStatus = Math.random() < 0.15 ? 'free' : 'paid';
      }
    } else {
      // 미래: 항상 진행 예정 + 결제 전
      sessionStatus = 'upcoming';
      payStatus = 'unpaid';
    }
    const isCancelled = sessionStatus === 'cancelled';
    const isOnline = prod.name.includes('비대면');
    const prevCount = Math.floor(Math.random() * 4);
    const prevRecords = [];
    for (let pr = 0; pr < prevCount; pr++) {
      const pd = new Date(2025, 10 + Math.floor(Math.random()*4), 1 + Math.floor(Math.random()*27));
      const DOW = ['일','월','화','수','목','금','토'];
      const pdKey = `${pd.getFullYear()}-${String(pd.getMonth()+1).padStart(2,'0')}-${String(pd.getDate()).padStart(2,'0')}`;
      prevRecords.push({
        dateStr: `${pd.getFullYear()}.${String(pd.getMonth()+1).padStart(2,'0')}.${String(pd.getDate()).padStart(2,'0')}(${DOW[pd.getDay()]})`,
        dateKey: pdKey,
        written: Math.random() < 0.6,
      });
    }
    items.push({
      type: 'client',
      time: t,
      name: NAMES[Math.floor(Math.random() * NAMES.length)],
      phone: `010-${String(1000+Math.floor(Math.random()*9000))}-${String(1000+Math.floor(Math.random()*9000))}`,
      productObj: prod,
      counselorId: c.id,
      cancelled: isCancelled,
      payStatus,
      sessionStatus,
      memo: Math.random() < 0.5 ? ['2급 라유형\n바우처 1/8회기, 만료:5/16\n서류작성 완료', '초기 상담 진행\n추후 검사 예약 권유', '내담자 요청으로 비대면으로 변경'][Math.floor(Math.random()*3)] : '',
      link: isOnline ? `https://meet.clify.co.kr/session/${Math.random().toString(36).slice(2,10)}` : '',
      prevRecords,
      sessionNum: 1 + Math.floor(Math.random() * 8),
      totalSession: 8,
      price: Math.floor((40000 + Math.random() * 80000) / 1000) * 1000,
    });
  }
  return items;
}

function genPersonal() {
  const count = 1 + Math.floor(Math.random() * 2);
  const items = [];
  for (let i = 0; i < count; i++) {
    // ~35% chance of being a timed item (meeting/보고서), rest are allday
    const isTimedMeeting = Math.random() < 0.35;
    const pool = isTimedMeeting ? PTYPES_TIMED : PTYPES_ALLDAY;
    const t = pool[Math.floor(Math.random() * pool.length)];
    const internalC = COUNSELORS.filter(x => x.type === 'internal');
    const c = internalC[Math.floor(Math.random() * internalC.length)];
    if (isTimedMeeting) {
      // Give timed personal item a specific time slot
      const timedSlots = ['10:00','11:00','13:00','14:00','15:00','16:00','17:00'];
      const time = timedSlots[Math.floor(Math.random() * timedSlots.length)];
      items.push({ type:'personal', subtype:'timed', label:t.label, cls:t.cls, icon:t.icon, counselorId:c.id, time, duration:t.duration });
    } else {
      items.push({ type:'personal', subtype:'allday', label:t.label, cls:t.cls, icon:t.icon, counselorId:c.id });
    }
  }
  return items;
}

const SCHED = window.__SCHED;

/* ─── MAIN RENDER ────────────────────────────── */
let _renderTimer = null;
function render() {
  if (_renderTimer) cancelAnimationFrame(_renderTimer);
  _renderTimer = requestAnimationFrame(() => {
    renderTopbar();
    renderMonthGrid();
    renderMiniCal();
    renderCounselorList();
    _renderTimer = null;
  });
}

/* ─── TOPBAR ─────────────────────────────────── */
const MONTH_KR = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

function renderTopbar() {
  const dim = new Date(curYear, curMonth + 1, 0).getDate();
  document.getElementById('tbTitle').textContent = `${curYear}년 ${MONTH_KR[curMonth]}`;
  document.getElementById('tbSub').textContent = `${curYear}.${p2(curMonth+1)}.01 – ${curYear}.${p2(curMonth+1)}.${p2(dim)}`;
  document.getElementById('mnLabel').textContent  = `${curYear}. ${p2(curMonth+1)}`;
}



/* ─── MONTH GRID ─────────────────────────────── */
function renderMonthGrid() {
  const grid = document.getElementById('monthGrid');
  grid.innerHTML = '';

  const firstDow = new Date(curYear, curMonth, 1).getDay(); // 0=Sun
  const dim      = new Date(curYear, curMonth + 1, 0).getDate();
  const prevDim  = new Date(curYear, curMonth, 0).getDate();
  // Leading cells (prev month)
  for (let i = 0; i < firstDow; i++) {
    const d = prevDim - firstDow + 1 + i;
    const cell = makeCell(new Date(curYear, curMonth - 1, d), true);
    grid.appendChild(cell);
  }

  // Current month cells
  for (let d = 1; d <= dim; d++) {
    const date = new Date(curYear, curMonth, d);
    const cell = makeCell(date, false);
    grid.appendChild(cell);
  }

  // Trailing cells (next month) — fill to complete last row
  const totalCells = firstDow + dim;
  const trailing   = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let d = 1; d <= trailing; d++) {
    const cell = makeCell(new Date(curYear, curMonth + 1, d), true);
    grid.appendChild(cell);
  }
}

function makeCell(date, isOtherMonth) {
  const dow   = date.getDay();
  const isSat = dow === 6;
  const isSun = dow === 0;
  const itod  = isToday(date);
  const key   = dk(date);
  const isHoliday = HOLIDAYS.has(key);
  const items = (isHoliday || isSun) ? [] : (SCHED[key] || []);

  const cell = document.createElement('div');
  let cls = 'day-cell';
  if (isOtherMonth) cls += ' other-month';
  if (itod)   cls += ' today-cell';
  if (isSat)  cls += ' sat-cell';
  if (isSun)  cls += ' sun-cell';
  if (isHoliday) cls += ' sun-cell'; // 공휴일도 빨간색
  cell.className = cls;
  cell.dataset.date = key;

  // Date number
  const numEl = document.createElement('div');
  numEl.className = 'dc-num';
  numEl.textContent = date.getDate();
  cell.appendChild(numEl);

  // 공휴일 라벨
  if (isHoliday && !isSun) {
    const hlEl = document.createElement('div');
    hlEl.style.cssText = 'font-size:13px;color:var(--sun-text);font-weight:400;padding-left:6px;';
    hlEl.textContent = key === '2026-03-02' ? '삼일절 대체공휴일' : '공휴일';
    cell.appendChild(hlEl);
  }



  // Split personal: allday chips vs timed rows
  const allday  = items.filter(s => s.type === 'personal' && s.subtype !== 'timed');
  const timedPersonal = items.filter(s => s.type === 'personal' && s.subtype === 'timed');
  const clients = items.filter(s => s.type === 'client');

  // — Allday personal chips (top) —
  if (allday.length && (viewMode === 'all' || viewMode === 'personal')) {
    let addedP = 0;
    allday.forEach(s => {
      if (!activeCounselors.has(s.counselorId)) return;
      if (clientNameFilter || prodNameFilter) return;
      const c = COUNSELORS.find(x => x.id === s.counselorId);
      const chip = document.createElement('div');
      chip.className = 'p-chip';

      const rgb = hexToRgb(c.hex);
      chip.style.background = `rgba(${rgb},0.20)`;
      chip.style.color = '#111';
      const DOW_KR2 = ['일','월','화','수','목','금','토'];
      const chipTimeStr = s.label === '오전 반차' ? '10:00~14:00' : s.label === '오후 반차' ? '15:00~19:00' : '종일';
      const chipTipHtml = `<div class="ev-tip-name">[${c.name}] ${s.label}</div><div class="ev-tip-datetime">${dk(date).replace(/-/g,'.')}(${DOW_KR2[date.getDay()]}) ${chipTimeStr}</div>`;
      chip.innerHTML = `[${c.name}] <span class="p-chip-name">${s.label}</span>`;
      chip.style.cursor = 'pointer';
      chip.addEventListener('click', () => { hideGlobalTip(); openPersonalDetail(s, c, dk(date)); });
      chip.addEventListener('mouseenter', e => showGlobalTip(chipTipHtml, e));
      chip.addEventListener('mousemove',  e => moveGlobalTip(e));
      chip.addEventListener('mouseleave', () => hideGlobalTip());
      cell.appendChild(chip);
      addedP++;
    });

  }

  // — Timed personal + client rows, merged and sorted by time —
  const showPersonal = (viewMode === 'all' || viewMode === 'personal');
  const showClient   = (viewMode === 'all' || viewMode === 'client');

  const timedRows = [
    ...(showPersonal ? timedPersonal : []),
    ...(showClient   ? clients       : []),
  ].filter(s => {
    if (!activeCounselors.has(s.counselorId)) return false;
    if (clientNameFilter && s.type === 'client' && !s.name.includes(clientNameFilter)) return false;
    if (clientNameFilter && s.type === 'personal') return false;
    if (prodNameFilter && s.type === 'client' && !(s.productObj && s.productObj.name.includes(prodNameFilter))) return false;
    if (prodNameFilter && s.type === 'personal') return false;
    return true;
  })
   .sort((a, b) => (a.time || '').localeCompare(b.time || ''));

  timedRows.forEach(s => {
    const c = COUNSELORS.find(x => x.id === s.counselorId);
    const row = document.createElement('div');
    row.className = 'ev-row';

    row.dataset.date = dk(date);
    row.dataset.evId = `${dk(date)}_${s.counselorId}_${s.time || s.label}`;
    if (selFilter && s.counselorId !== selFilter) row.classList.add('dim');
    if (selFilter && s.counselorId === selFilter) row.classList.add('hi');

    const isPersonal = s.type === 'personal';
    const duration = isPersonal ? (s.duration || 50) : 50;
    const DOW_KR3 = ['일','월','화','수','목','금','토'];
    const dateStr3 = dk(date).replace(/-/g,'.');
    const dowStr3 = DOW_KR3[date.getDay()];
    const tipHtml = isPersonal
      ? `<div class="ev-tip-name">${s.meetingName || s.label}</div>
         <div class="ev-tip-datetime">${dateStr3}(${dowStr3}) ${s.time}~${addMin(s.time, duration)}</div>
         <div class="ev-tip-body">
           ${s.meetingName ? `<div class="ev-tip-row"><span class="ev-tip-label">회의명</span><span class="ev-tip-value">${s.meetingName}</span></div>` : ''}
           <div class="ev-tip-row"><span class="ev-tip-label">담당자</span><span class="ev-tip-value" style="display:flex;align-items:center;gap:5px"><span class="ev-tip-dot" style="background:${c.hex}"></span>${c.name}</span></div>
           <div class="ev-tip-row"><span class="ev-tip-label">소요시간</span><span class="ev-tip-value">약 ${duration}분</span></div>
         </div>`
      : `<div class="ev-tip-name">${s.name}</div>
         <div class="ev-tip-datetime">${dateStr3}(${dowStr3}) ${s.time}~${addMin(s.time, s.productObj ? s.productObj.min : 50)}</div>
         <div class="ev-tip-body">
           ${s.productObj ? `<div class="ev-tip-row"><span class="ev-tip-label">카테고리</span><span class="ev-tip-value">${s.productObj.cat}</span></div><div class="ev-tip-row"><span class="ev-tip-label">상담/검사</span><span class="ev-tip-value">${s.productObj.name}</span></div>` : ''}
           <div class="ev-tip-row"><span class="ev-tip-label">담당자</span><span class="ev-tip-value" style="display:flex;align-items:center;gap:5px"><span class="ev-tip-dot" style="background:${c.hex}"></span>${c.name}</span></div>
         </div>`;
    if (!isPersonal && s.cancelled) row.classList.add('cancelled');

    // 취소된 경우 툴팁 이름 우측 상단에 뱃지 삽입
    const statusBadge = !isPersonal ? (() => {
      if (s.sessionStatus === 'cancelled') return `<span style="font-size:11px;font-weight:400;color:#E5373A;background:rgba(229,55,58,0.08);border-radius:20px;padding:4px 8px;flex-shrink:0;">취소</span>`;
      if (s.sessionStatus === 'done')      return `<span style="font-size:11px;font-weight:400;color:#666666;background:#F6F7F8;border-radius:20px;padding:4px 8px;flex-shrink:0;">진행 완료</span>`;
      return `<span style="font-size:11px;font-weight:400;color:#F59E0B;background:#FEF3C7;border-radius:20px;padding:4px 8px;flex-shrink:0;">진행 예정</span>`;
    })() : '';
    const tipHtmlWithBadge = !isPersonal
      ? tipHtml.replace(
          `<div class="ev-tip-name">${s.name}</div>`,
          `<div class="ev-tip-name" style="display:flex;align-items:center;justify-content:space-between;gap:8px;">${s.name}${statusBadge}</div>`
        )
      : tipHtml;

    row._tipHtml = tipHtmlWithBadge;
    row.innerHTML = `
      <div class="ev-bar" style="background:${c.hex}"></div>
      <span class="ev-time">${s.time}</span>
      <span class="ev-name">${isPersonal ? (s.meetingName || s.label) : s.name}</span>
      <span class="ev-type">${isPersonal ? c.name : s.productObj.name}</span>
`;
    row.style.cursor = 'pointer';
    if (isPersonal) {
      row.addEventListener('click', () => { hideGlobalTip(); openPersonalDetail(s, c, dk(date)); });
    } else {
      row.addEventListener('click', () => { hideGlobalTip(); openDetail(s, c, dk(date)); });
    }
    row.addEventListener('mouseenter', e => showGlobalTip(row._tipHtml, e));
    row.addEventListener('mousemove',  e => moveGlobalTip(e));
    row.addEventListener('mouseleave', () => hideGlobalTip());
    cell.appendChild(row);
  });

  // 빈 영역 클릭 → 일정 추가 패널 (일정 row/chip 클릭은 별도 처리됨)
  cell.addEventListener('dblclick', e => {
    // 이벤트 row, chip, 날짜 숫자 클릭은 무시
    if (e.target.closest('.ev-row, .p-chip, .dc-num')) return;
    openModal(key);
  });

  return cell;
}

/* ─── MINI CALENDAR ──────────────────────────── */
function renderMiniCal() {
  const el = document.getElementById('miniCal');
  const y = miniDate.getFullYear(), m = miniDate.getMonth();
  const firstDow = new Date(y, m, 1).getDay();
  const dim = new Date(y, m + 1, 0).getDate();
  const offset = firstDow; // Sun-first
  const today = new Date();

  let h = `
    <div class="mc-head">
      <div class="mc-title">${y}년 ${m + 1}월</div>
      <div class="mc-nav">
        <button onclick="miniPrev()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
        <button onclick="miniNext()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
      </div>
    </div>
    <div class="mc-grid">
      <div class="mc-dl sun">일</div><div class="mc-dl">월</div><div class="mc-dl">화</div>
      <div class="mc-dl">수</div><div class="mc-dl">목</div><div class="mc-dl">금</div>
      <div class="mc-dl sat">토</div>`;

  for (let i = 0; i < offset; i++) h += `<div class="mcd other"></div>`;

  for (let d = 1; d <= dim; d++) {
    const dt = new Date(y, m, d);
    const dow = dt.getDay();
    const isT = today.getFullYear()===y && today.getMonth()===m && today.getDate()===d;
    const isCurView = curYear===y && curMonth===m;
    const hasEv = SCHED[dk(dt)]?.length > 0;

    let cls = 'mcd';
    if (isT) cls += ' today';
    else if (isCurView && !isT) cls += ''; // no special highlight for just "current month"
    if (dow === 6) cls += ' sat';
    if (dow === 0) cls += ' sun';
    if (hasEv && !isT) cls += ' has-ev';

    h += `<div class="${cls}" onclick="jumpTo(${y},${m},${d})">${d}</div>`;
  }
  h += '</div>';
  el.innerHTML = h;
}

function miniPrev() { miniDate.setMonth(miniDate.getMonth() - 1); renderMiniCal(); }
function miniNext() { miniDate.setMonth(miniDate.getMonth() + 1); renderMiniCal(); }
function jumpTo(y, m, d) {
  const targetKey = dk(new Date(y, m, d));

  // 같은 달이면 렌더 없이 스크롤만
  if (y === curYear && m === curMonth) {
    const cell = document.querySelector(`[data-date="${targetKey}"]`);
    if (cell) {
      const scroll = document.querySelector('.cal-scroll');
      const cellTop = cell.offsetTop - scroll.offsetTop;
      scroll.scrollTo({ top: cellTop - 12, behavior: 'smooth' });
      // 잠깐 하이라이트
      cell.style.transition = 'background 0.2s';
      cell.style.background = 'var(--brand-soft)';
      setTimeout(() => { cell.style.background = ''; }, 900);
    }
  } else {
    // 다른 달이면 월 이동 후 스크롤
    curYear = y; curMonth = m;
    miniDate = new Date(y, m, d);
    render();
    setTimeout(() => {
      const cell = document.querySelector(`[data-date="${targetKey}"]`);
      if (cell) {
        const scroll = document.querySelector('.cal-scroll');
        scroll.scrollTo({ top: cell.offsetTop - scroll.offsetTop - 12, behavior: 'smooth' });
        cell.style.transition = 'background 0.2s';
        cell.style.background = 'var(--brand-soft)';
        setTimeout(() => { cell.style.background = ''; }, 900);
      }
    }, 50);
  }
}

/* ─── COUNSELOR LIST ─────────────────────────── */
function renderCounselorList() {
  const list = document.getElementById('cList');
  // Count per counselor for current month
  const counts = {};
  const dim = new Date(curYear, curMonth + 1, 0).getDate();
  for (let d = 1; d <= dim; d++) {
    const items = SCHED[dk(new Date(curYear, curMonth, d))] || [];
    items.forEach(s => {
      if (s.type === 'client') counts[s.counselorId] = (counts[s.counselorId] || 0) + 1;
    });
  }

  list.innerHTML = '';
  const groups = [
    { label: '내부상담사', counselors: COUNSELORS.filter(c => c.type === 'internal') },
    { label: '외부상담사', counselors: COUNSELORS.filter(c => c.type === 'external') },
  ];
  groups.forEach((group, gi) => {
    const header = document.createElement('div');
    header.className = 'c-group-label';
    if (gi > 0) header.style.marginTop = '10px';
    header.textContent = group.label;
    list.appendChild(header);
    group.counselors.forEach(c => {
      const btn = document.createElement('button');
      btn.className = `c-chip${activeCounselors.has(c.id) ? ' active' : ''}`;
      btn.innerHTML = `
        <div class="c-bar" style="background:${c.hex}"></div>
        <div class="c-name-wrap">
          <span class="c-name">${c.name}</span>
          ${c.role ? `<span class="c-role">${c.role}</span>` : ''}
        </div>
        <span class="c-cnt">${counts[c.id] || 0}건</span>
        <div class="c-check"></div>`;
      btn.addEventListener('click', () => toggleC(c.id));
      list.appendChild(btn);
    });
  });

  // Toggle all button label
  const toggleBtn = document.getElementById('toggleAllBtn');
  if (toggleBtn) toggleBtn.textContent = activeCounselors.size === COUNSELORS.length ? '전체 해제' : '전체 선택';

  // Modal select
  const sel = document.getElementById('cSel');
  if (sel) {
    const internalOpts = COUNSELORS.filter(c => c.type === 'internal')
      .map(c => `<option value="${c.id}">${c.name}${c.role ? ' (' + c.role + ')' : ''}</option>`).join('');
    const externalOpts = COUNSELORS.filter(c => c.type === 'external')
      .map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    sel.innerHTML = `<optgroup label="내부상담사">${internalOpts}</optgroup><optgroup label="외부상담사">${externalOpts}</optgroup>`;
  }
}

function toggleC(id) {
  if (activeCounselors.has(id)) activeCounselors.delete(id);
  else activeCounselors.add(id);
  render();
}
function filterC(id) { selFilter = selFilter === id ? null : id; render(); }
function toggleAll() {
  if (activeCounselors.size === COUNSELORS.length) {
    activeCounselors.clear();
  } else {
    COUNSELORS.forEach(c => activeCounselors.add(c.id));
  }
  render();
}

/* ─── CLIENT SEARCH ──────────────────────────── */
function onClientInput(val) {
  filterByClient(val);
  const clear = document.getElementById('clientClear');
  if (clear) clear.classList.toggle('visible', val.length > 0);
}

function clearClientSearch() {
  const input = document.getElementById('clientSearch');
  input.value = '';
  filterByClient('');
  const clear = document.getElementById('clientClear');
  if (clear) clear.classList.remove('visible');
  input.focus();
}

/* ─── CONTROLS ───────────────────────────────── */
function setView(mode, btn) {
  viewMode = mode;
  document.querySelectorAll('#viewToggle button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}
function changeMonth(dir) {
  curMonth += dir;
  if (curMonth > 11) { curMonth = 0; curYear++; }
  if (curMonth < 0)  { curMonth = 11; curYear--; }
  render();
}

function onProdInput(val) {
  filterProds(val);
  filterByProd(val);
  const clear = document.getElementById('prodClear');
  if (clear) clear.classList.toggle('visible', val.length > 0);
}

function clearProdSearch() {
  const input = document.getElementById('prodSearch');
  if (input) input.value = '';
  filterByProd('');
  const clear = document.getElementById('prodClear');
  if (clear) clear.classList.remove('visible');
  if (input) input.focus();
}

function filterByProd(val) {
  prodNameFilter = val.trim();
  render();
}

function filterProds(q) {
  const dd = document.getElementById('prodDd');
  const list = (q ? PRODUCTS.filter(p => p.name.includes(q)) : PRODUCTS).slice(0, 10);
  dd.innerHTML = list.map(p => `<div class="prod-item" onmousedown="selectProd('${p.name}')">${p.name}</div>`).join('');
}
function filterByClient(val) {
  clientNameFilter = val.trim();
  render();
}
function openProd()  { filterProds(document.getElementById('prodSearch').value); document.getElementById('prodDd').classList.add('open'); }
function closeProd() { setTimeout(() => document.getElementById('prodDd').classList.remove('open'), 160); }
function selectProd(n) { document.getElementById('prodSearch').value = n; document.getElementById('prodDd').classList.remove('open'); }

/* ─── MODAL ──────────────────────────────────── */

/* ── 상세 패널 ── */

/* ─── PERSONAL DETAIL PANEL ─────────────────── */
function openPersonalDetail(s, c, dateKey) {
  const overlay = document.getElementById('detailOverlay');
  if (!overlay) return;

  // 스크롤 위치 저장
  const calScroll = document.querySelector('.cal-scroll');
  if (calScroll) _savedScrollTop = calScroll.scrollTop;

  // timed 일정만 ev-row 하이라이트
  document.querySelectorAll('.ev-row').forEach(el => el.classList.remove('detail-focus'));
  if (s.subtype === 'timed' && dateKey && s.time) {
    const focusRow = document.querySelector(`[data-ev-id="${dateKey}_${s.counselorId}_${s.time}"]`);
    if (focusRow) focusRow.classList.add('detail-focus');
  }

  // 컬러 바
  const colorBar = document.getElementById('dpColorBar');
  if (colorBar) colorBar.style.background = c.hex;

  // 헤더 뱃지 + 액션버튼
  const _badge = document.getElementById('dpPayBadge');
  if (_badge) {
    _badge.className = 'dp-badge';
    _badge.textContent = '상담사 일정';
    _badge.style.cssText = 'background:#fff;color:#555;border:1px solid #888;';
  }
  document.getElementById('dpActions').innerHTML = `
    <button class="dp-action-btn" title="수정" aria-label="수정" data-tip="수정">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
    </button>
    <button class="dp-action-btn" title="삭제" aria-label="삭제" data-tip="삭제">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
    </button>
  `;

  // 타이틀
  document.getElementById('dpTitle').innerHTML = `
    <span class="dp-title-name">${c.name}</span>
    <span class="dp-title-div">|</span>
    <span class="dp-title-prod">${s.meetingName || s.label}</span>
  `;

  // 일시
  const DOW_KR = ['일','월','화','수','목','금','토'];
  const d = new Date(dateKey);
  const dow = DOW_KR[d.getDay()];
  const dateDisplay = `${dateKey.replace(/-/g,'.')}(${dow})`;
  let timeDisplay;
  if (s.label === '연차') {
    timeDisplay = `${dateDisplay} 종일`;
  } else if (s.label === '오전 반차') {
    timeDisplay = `${dateDisplay} 10:00~14:00 (4시간)`;
  } else if (s.label === '오후 반차') {
    timeDisplay = `${dateDisplay} 15:00~19:00 (4시간)`;
  } else if (s.label === '외근') {
    timeDisplay = `${dateDisplay} 10:00~19:00 (8시간)`;
  } else if (s.subtype === 'timed') {
    const end = addMin(s.time, s.duration);
    timeDisplay = `${dateDisplay} ${s.time}~${end} (${s.duration}분)`;
  } else {
    timeDisplay = `${dateDisplay} 종일`;
  }

  const catMap = { '연차':'근태', '오전 반차':'근태', '오후 반차':'근태', '외근':'근태', '회의':'일정 관리', '종합심리검사보고서 작성':'일정 관리' };
  const cat = catMap[s.label] || '일정 관리';

  document.getElementById('dpMeta').innerHTML = `
    <div class="dp-row">
      <span class="dp-label">일시</span>
      <span class="dp-value">${timeDisplay}</span>
    </div>
    <div class="dp-row">
      <span class="dp-label">카테고리</span>
      <span class="dp-value">${cat}</span>
    </div>
  `;

  document.getElementById('dpInfo').innerHTML = `
    <div class="dp-row">
      <span class="dp-label">담당자</span>
      <span class="dp-value" style="display:flex;align-items:center;">
        <span class="dp-counselor-avatar" style="background:${c.hex}">${c.name[0]}</span>
        ${c.name}
      </span>
    </div>
    <div class="dp-row">
      <span class="dp-label">메모</span>
      <span class="dp-value" style="color:#BABABA;">-</span>
    </div>
  `;

  document.getElementById('dpPrev').style.display = 'none';
  document.getElementById('dpFooter').innerHTML = '';

  overlay.classList.add('open');
}

function highlightCalEvent(dateKey, counselorId, time) {
  document.getElementById('ucOverlay').classList.remove('open');

  const [y, m] = dateKey.split('-').map(Number);
  curYear = y;
  curMonth = m - 1;

  // 필터 초기화 (필터에 걸려 ev-row가 렌더 안 될 수 있으므로)
  activeCounselors = new Set([1,2,3,4,5,6,7,8,9,10]);
  selFilter = null;
  clientNameFilter = '';
  prodNameFilter = '';
  viewMode = 'all';

  renderTopbar();
  renderMonthGrid();
  renderMiniCal();
  renderCounselorList();
  renderUnconfirmedBtn();

  setTimeout(() => {
    document.querySelectorAll('.ev-row').forEach(el => el.classList.remove('detail-focus'));
    const evId = `${dateKey}_${counselorId}_${time}`;
    const focusRow = document.querySelector(`[data-ev-id="${evId}"]`);
    if (focusRow) {
      focusRow.classList.add('detail-focus');
      focusRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => focusRow.classList.remove('detail-focus'), 3000);
    }
  }, 100);
}
window.highlightCalEvent = highlightCalEvent;

  }

/* ══ Script Block 3 (Mobile) ══ */
  {
    /* ── 데이터 ── */
const COUNSELORS = [
  {id:1,  name:'김선경', hex:'#F0625E', role:'센터장',    type:'internal'},
  {id:3,  name:'김지윤', hex:'#89C458', role:'수석상담사', type:'internal'},
  {id:2,  name:'권하린', hex:'#A351D2', role:'선임상담사', type:'internal'},
  {id:4,  name:'김혜주', hex:'#FFBB00', role:'선임상담사', type:'internal'},
  {id:5,  name:'조예지', hex:'#77D5FA', role:'매니저',    type:'internal'},
  {id:6,  name:'최혜숙', hex:'#FF7B54', role:'',          type:'external'},
  {id:7,  name:'조미나', hex:'#2EC4B6', role:'',          type:'external'},
  {id:8,  name:'왕선아', hex:'#5B8DB8', role:'',          type:'external'},
  {id:9,  name:'박소현', hex:'#F4A261', role:'',          type:'external'},
  {id:10, name:'강미숙', hex:'#C06C84', role:'',          type:'external'},
];
const PRODUCTS = [
  {name:'센터장 일반상담 (50분)', cat:'일반 - 상담', min:50},
  {name:'1급 일반상담 (대면)',    cat:'일반 - 상담', min:50},
  {name:'2급 일반상담 (대면)',    cat:'일반 - 상담', min:50},
  {name:'커플/부부/가족 상담',    cat:'일반 - 상담', min:90},
  {name:'마음바우처 개인상담',    cat:'마음바우처',  min:50},
  {name:'인스파이어 특별상담',    cat:'인스파이어',  min:50},
  {name:'SIB 상담',              cat:'SIB',        min:50},
  {name:'MMPI-2',                cat:'일반 - 검사', min:50},
  {name:'종합심리평가',           cat:'일반 - 검사', min:90},
];
const NAMES = [
  '김지수','이민호','박서연','최준영','정유나','강민준','윤서연','임지훈',
  '사범기','오지수','장원우','장요엘','천두인','최혜근','안지현','조성민',
  '황은지','서민준','노유진','전우주','심지은','변재현','곽민서','탁현수',
  '남가은','석준호','오하린','백지훈','신유미','천재원','나현서','배성민',
];
const HOLIDAYS = new Set([
  '2026-01-01','2026-01-28','2026-01-29','2026-01-30',
  '2026-03-01','2026-03-02','2026-05-05','2026-05-24',
  '2026-06-06','2026-08-15','2026-09-24','2026-09-25','2026-09-26',
  '2026-10-03','2026-10-09','2026-12-25',
]);
const COUNSELOR_SCHEDULE = {
  1: { days:[1,2,4],   times:['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'] },
  2: { days:[2,3,4,5], times:['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'],
       sat:['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30'] },
  3: { days:[1,2,3],   times:['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'] },
  4: { days:[1,5],     times:['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'],
       sat:['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30'] },
};
const PTYPES_ALLDAY = [
  {label:'연차', icon:'🌿'}, {label:'오전 반차', icon:'🌤'}, {label:'오후 반차', icon:'🌇'},
];
const PTYPES_TIMED = [
  {label:'회의', icon:'💬', duration:50},
  {label:'종합심리검사보고서 작성', icon:'📝', duration:120},
];
const MEETING_NAMES = ['주간 팀 미팅','케이스 리뷰','월례 보고','슈퍼비전','신규 내담자 배정','운영 회의'];
const DOW_KR = ['일','월','화','수','목','금','토'];
const MONTH_KR = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

/* ── 유틸 ── */
const p2 = n => String(n).padStart(2,'0');
const dk = d => `${d.getFullYear()}-${p2(d.getMonth()+1)}-${p2(d.getDate())}`;
const isToday = d => dk(d) === dk(new Date());
function mob_addMin(t, m) {
  const [h, mm] = t.split(':').map(Number);
  const tot = h*60+mm+m;
  return `${p2(Math.floor(tot/60)%24)}:${p2(tot%60)}`;
}

/* ── 일정 생성 ── */
const _now = new Date();

function genSessions(isSat, date) {
  const max = isSat ? 6 : 13, min = isSat ? 2 : 5;
  const count = min + Math.floor(Math.random()*(max-min));
  const dow = date.getDay();
  const todayStr = dk(_now), dateStr = dk(date);
  const isPast = dateStr < todayStr, isToday2 = dateStr === todayStr;
  const pool = COUNSELORS.filter(c => {
    if (c.id===5) return false;
    const sch = COUNSELOR_SCHEDULE[c.id];
    if (!sch) return false;
    return dow===6 ? !!sch.sat : sch.days.includes(dow);
  });
  if (!pool.length) return [];
  const used = {};
  const items = [];
  for (let i = 0; i < count; i++) {
    const c = pool[Math.floor(Math.random()*pool.length)];
    if (!used[c.id]) used[c.id] = new Set();
    const sch = COUNSELOR_SCHEDULE[c.id];
    const cTimes = (dow===6&&sch.sat) ? sch.sat : sch.times;
    const avail = cTimes.filter(t => !used[c.id].has(t));
    if (!avail.length) continue;
    const t = avail[Math.floor(Math.random()*avail.length)];
    used[c.id].add(t);
    const prod = PRODUCTS[Math.floor(Math.random()*PRODUCTS.length)];
    const slotPast = isPast || (isToday2 && t<`${p2(_now.getHours())}:${p2(_now.getMinutes())}`);
    let sessionStatus, payStatus;
    if (slotPast) {
      const cancelled = Math.random() < 0.13;
      sessionStatus = cancelled ? 'cancelled' : 'done';
      payStatus = cancelled ? (Math.random()<0.3?'free':'unpaid') : (Math.random()<0.15?'free':'paid');
    } else { const upCancelled = Math.random() < 0.25; sessionStatus = upCancelled ? 'cancelled' : 'upcoming'; payStatus = upCancelled ? 'unpaid' : 'unpaid'; }
    const prevCount = Math.floor(Math.random()*4);
    const prevRecords = Array.from({length:prevCount}, () => {
      const pd = new Date(2025,10+Math.floor(Math.random()*4),1+Math.floor(Math.random()*27));
      return { dateStr:`${pd.getFullYear()}.${p2(pd.getMonth()+1)}.${p2(pd.getDate())}(${DOW_KR[pd.getDay()]})`, dateKey:dk(pd), written:Math.random()<0.6 };
    });
    items.push({
      type:'client', time:t, name:NAMES[Math.floor(Math.random()*NAMES.length)],
      phone:`010-${String(1000+Math.floor(Math.random()*9000))}-${String(1000+Math.floor(Math.random()*9000))}`,
      productObj:prod, counselorId:c.id, sessionStatus, payStatus,
      memo:Math.random()<0.4?['초기 상담 진행\n추후 검사 예약 권유','내담자 요청으로 비대면 변경','2급 라유형\n바우처 1/8회기'][Math.floor(Math.random()*3)]:'',
      prevRecords, sessionNum:1+Math.floor(Math.random()*8), totalSession:8,
      price:Math.floor((40000+Math.random()*80000)/1000)*1000,
    });
  }
  return items;
}

function genSchedules() {
  const out = {};
  const base = new Date(_now.getFullYear(), _now.getMonth()-3, 1);
  for (let m = 0; m < 7; m++) {
    const y = base.getFullYear(), mo = base.getMonth();
    const dim = new Date(y, mo+1, 0).getDate();
    for (let d = 1; d <= dim; d++) {
      const date = new Date(y, mo, d);
      const dow = date.getDay();
      if (dow===0 || HOLIDAYS.has(dk(date))) continue;
      const isSat = dow===6;
      const key = dk(date);
      const personal = [];
      if (!isSat && Math.random()>0.48) {
        const isTimed = Math.random()<0.35;
        if (isTimed) {
          const t = PTYPES_TIMED[Math.floor(Math.random()*PTYPES_TIMED.length)];
          const slots = ['10:00','11:00','13:00','14:00','15:00'];
          const time = slots[Math.floor(Math.random()*slots.length)];
          if (t.label==='회의') {
            const mn = MEETING_NAMES[Math.floor(Math.random()*MEETING_NAMES.length)];
            COUNSELORS.filter(c => c.type!=='external' && (c.id===5||(COUNSELOR_SCHEDULE[c.id]&&COUNSELOR_SCHEDULE[c.id].days.includes(dow))))
              .forEach(c => personal.push({type:'personal',subtype:'timed',label:t.label,icon:t.icon,counselorId:c.id,time,duration:t.duration,meetingName:mn}));
          } else {
            COUNSELORS.filter(c => c.type!=='external' && c.id!==5&&COUNSELOR_SCHEDULE[c.id]&&COUNSELOR_SCHEDULE[c.id].days.includes(dow))
              .forEach(c => personal.push({type:'personal',subtype:'timed',label:t.label,icon:t.icon,counselorId:c.id,time,duration:t.duration}));
          }
        } else {
          const t = PTYPES_ALLDAY[Math.floor(Math.random()*PTYPES_ALLDAY.length)];
          const internalC = COUNSELORS.filter(x => x.type === 'internal');
          const c = internalC[Math.floor(Math.random()*internalC.length)];
          personal.push({type:'personal',subtype:'allday',label:t.label,icon:t.icon,counselorId:c.id});
        }
      }
      const annualIds = new Set(personal.filter(p=>p.subtype==='allday'&&p.label==='연차').map(p=>p.counselorId));
      const sessions = genSessions(isSat,date).filter(s=>!annualIds.has(s.counselorId));
      out[key] = [...personal,...sessions].sort((a,b)=>(a.time||'00:00').localeCompare(b.time||'00:00'));
    }
    base.setMonth(base.getMonth()+1); base.setDate(1);
  }
  return out;
}

const SCHED = genSchedules();

/* ── 상태 ── */
const _today = new Date();
let curYear  = _today.getFullYear();
let curMonth = _today.getMonth();
let selectedDate = new Date();
let activeCounselors = new Set([1,2,3,4,5,6,7,8,9,10]);
let listOpen = false;

/* ── 밀도 계산 ── */
function mob_buildDots(items) {
  // 상담사별 내담자 세션 목록 (최대 6개)
  const sessions = items.filter(s => s.type === 'client').slice(0, 6);
  if (!sessions.length) return null;
  const wrap = document.createElement('div');
  wrap.className = 'dc-dots';
  sessions.forEach(s => {
    const c = COUNSELORS.find(x => x.id === s.counselorId);
    const dot = document.createElement('div');
    dot.className = 'dc-dot';
    dot.style.background = c ? c.hex : '#ccc';
    wrap.appendChild(dot);
  });
  return wrap;
}

/* ── 필터 ── */
function mob_renderFilter() {
  const wrap = document.getElementById('mob-filterWrap');
  wrap.innerHTML = '';
  const allChip = document.createElement('div');
  allChip.className = 'c-chip' + (activeCounselors.size===COUNSELORS.length?' active':'');
  allChip.textContent = '전체';
  allChip.onclick = () => { activeCounselors = new Set([1,2,3,4,5,6,7,8,9,10]); mob_renderCal(); if(listOpen) mob_renderList(); };
  wrap.appendChild(allChip);
  COUNSELORS.forEach(c => {
    const chip = document.createElement('div');
    const isActive = activeCounselors.size===1 && activeCounselors.has(c.id);
    chip.className = 'c-chip' + (isActive?' active':'');
    chip.innerHTML = `<span class="c-chip-dot" style="background:${c.hex}"></span>${c.name}`;
    chip.onclick = () => { activeCounselors = new Set([c.id]); mob_renderCal(); if(listOpen) mob_renderList(); };
    wrap.appendChild(chip);
  });
}

/* ── 캘린더 ── */
function mob_renderCal() {
  const grid = document.getElementById('mob-monthGrid');
  grid.innerHTML = '';

  document.getElementById('mob-calTitle').textContent = `${curYear}년 ${MONTH_KR[curMonth]}`;

  const firstDow = new Date(curYear, curMonth, 1).getDay();
  const dim      = new Date(curYear, curMonth+1, 0).getDate();
  const prevDim  = new Date(curYear, curMonth,   0).getDate();

  const addCells = (dates, isOther) => {
    dates.forEach(({ date }) => {
      const dow = date.getDay();
      const key = dk(date);
      const raw   = SCHED[key] || [];
      const items = raw.filter(s => activeCounselors.has(s.counselorId));
      const cell = document.createElement('div');
      let cls = 'day-cell';
      if (isOther)         cls += ' other-month';
      if (isToday(date))   cls += ' today';
      if (dk(date)===dk(selectedDate) && !isOther) cls += ' selected';
      if (dow===0||HOLIDAYS.has(key)) cls += ' red-day';
      else if (dow===6)    cls += ' sat-day';
      cell.className = cls;

      const num = document.createElement('div');
      num.className = 'dc-num';
      num.textContent = date.getDate();
      cell.appendChild(num);

      // 컬러 도트
      const dots = mob_buildDots(items);
      if (dots) {
        cell.appendChild(dots);
      } else {
        const empty = document.createElement('div');
        empty.className = 'dc-dots';
        cell.appendChild(empty);
      }

      if (!isOther) {
        cell.addEventListener('click', () => {
          selectedDate = new Date(date);
          mob_renderCal();
          mob_openList();
        });
      }
      grid.appendChild(cell);
    });
  };


  // 이전달
  const prevDates = Array.from({length:firstDow}, (_,i) => ({ date: new Date(curYear, curMonth-1, prevDim-firstDow+1+i) }));
  addCells(prevDates, true);
  // 이번달
  const thisDates = Array.from({length:dim}, (_,i) => ({ date: new Date(curYear, curMonth, i+1) }));
  addCells(thisDates, false);
  // 다음달
  const total = firstDow + dim;
  const remain = total%7===0 ? 0 : 7-(total%7);
  const nextDates = Array.from({length:remain}, (_,i) => ({ date: new Date(curYear, curMonth+1, i+1) }));
  addCells(nextDates, true);
}

/* ── 리스트 뷰 ── */
function mob_openList() {
  listOpen = true;
  mob_renderList();
  document.getElementById('mob-viewList').classList.add('open');
  document.getElementById('mob-viewCal').classList.add('hidden');
}

function mob_closeList() {
  listOpen = false;
  document.getElementById('mob-viewList').classList.remove('open');
  document.getElementById('mob-viewCal').classList.remove('hidden');
  // 캘린더 선택 셀 업데이트
  mob_renderCal();
}

function mob_listMoveDate(dir) {
  const d = new Date(selectedDate);
  d.setDate(d.getDate() + dir);
  selectedDate = d;
  // 달이 바뀌면 캘린더도 업데이트
  if (d.getMonth() !== curMonth || d.getFullYear() !== curYear) {
    curYear = d.getFullYear(); curMonth = d.getMonth();
  }
  mob_renderList();
}

function mob_renderList() {
  const key  = dk(selectedDate);
  const dow  = selectedDate.getDay();
  const isHol = HOLIDAYS.has(key);
  const isTod = isToday(selectedDate);

  // 헤더
  document.getElementById('mob-listHeaderDate').textContent =
    `${selectedDate.getMonth()+1}월 ${selectedDate.getDate()}일 (${DOW_KR[dow]})`;
  document.getElementById('mob-listHeaderSub').textContent =
    `${selectedDate.getFullYear()}`;
  const badge = document.getElementById('mob-listTodayBadge');
  badge.style.display = isTod ? '' : 'none';

  const body = document.getElementById('mob-listBody');
  body.innerHTML = '';

  if (dow===0 || isHol) {
    body.innerHTML = `<div class="list-empty">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <p>${isHol?'공휴일입니다':'일요일은 휴무입니다'}</p>
    </div>`;
    return;
  }

  const raw = (SCHED[key]||[]).filter(s => activeCounselors.has(s.counselorId));
  if (!raw.length) {
    body.innerHTML = `<div class="list-empty">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <p>일정이 없어요</p>
    </div>`;
    return;
  }

  // 종일 근태
  const alldays = raw.filter(s=>!s.time);
  if (alldays.length) {
    const row = document.createElement('div');
    row.className = 'allday-row';
    alldays.forEach(s => {
      const c = COUNSELORS.find(x=>x.id===s.counselorId);
      const chip = document.createElement('div');
      chip.className = 'allday-chip';
      chip.style.cssText = `background:${c?c.hex+'22':'#f0f0f0'};color:#1A1A1A;`;
      chip.textContent = `[${c?c.name:''}] ${s.label}`;
      chip.onclick = () => mob_openDp(s, c, key);
      row.appendChild(chip);
    });
    body.appendChild(row);
  }

  // 시간대별 그룹
  const timed = raw.filter(s=>s.time);
  // 시간 기준 정렬
  timed.sort((a,b) => a.time.localeCompare(b.time));

  // AM / PM 그룹
  const amItems = timed.filter(s => parseInt(s.time)<12);
  const pmItems = timed.filter(s => parseInt(s.time)>=12);

  const renderGroup = (label, items) => {
    if (!items.length) return;
    const grp = document.createElement('div');
    grp.className = 'time-group';
    const lbl = document.createElement('div');
    lbl.className = 'time-group-label';
    lbl.textContent = label;
    grp.appendChild(lbl);
    items.forEach(s => {
      const c = COUNSELORS.find(x=>x.id===s.counselorId);
      const isPersonal = s.type==='personal';
      const dur = isPersonal ? s.duration : (s.productObj?s.productObj.min:50);
      const isCancelled = s.sessionStatus === 'cancelled';

      const item = document.createElement('div');
      item.className = 'sched-item' + (isCancelled ? ' cancelled-item' : '');

      // 도트
      const dot = document.createElement('div');
      dot.className = 'sched-dot';
      dot.style.background = c ? c.hex : '#ccc';

      // 왼쪽: 이름 + 시간
      const left = document.createElement('div');
      left.className = 'sched-left';
      const nameEl = document.createElement('div');
      nameEl.className = 'sched-name';
      nameEl.textContent = isPersonal ? (s.meetingName||s.label) : s.name;
      const timeEl = document.createElement('div');
      timeEl.className = 'sched-time';
      timeEl.textContent = `${s.time}~${mob_addMin(s.time,dur)}`;
      left.appendChild(nameEl);
      left.appendChild(timeEl);

      // 오른쪽: 카테고리 + 상품명 + 상태
      const right = document.createElement('div');
      right.className = 'sched-right';
      const cat = isPersonal ? '일정 관리' : (s.productObj ? s.productObj.cat : '');
      const sub = isPersonal ? (s.meetingName||s.label) : (s.productObj ? s.productObj.name : '');
      const pillText = s.sessionStatus==='done' ? '진행 완료'
                     : s.sessionStatus==='cancelled' ? '취소'
                     : '진행 예정';
      const pillCls = s.sessionStatus||'upcoming';
      right.innerHTML = `
        ${cat ? `<div class="sched-cat">${cat}</div>` : ''}
        <div class="sched-sub-row">
          ${sub ? `<div class="sched-sub">${sub}</div>` : ''}
          ${!isPersonal ? `<span class="status-pill ${pillCls}">${pillText}</span>` : ''}
        </div>
      `;

      item.appendChild(dot);
      item.appendChild(left);
      item.appendChild(right);
      item.addEventListener('click', () => mob_openDp(s, c, key));
      grp.appendChild(item);
    });
    body.appendChild(grp);
  };

  renderGroup('오전', amItems);
  renderGroup('오후', pmItems);
}

/* ── 상세 패널 ── */
function mob_openDp(s, c) {
  const overlay  = document.getElementById('mob-dpOverlay');
  const colorBar = document.getElementById('mob-dpColorBar');
  const badge    = document.getElementById('mob-dpBadge');
  const title    = document.getElementById('mob-dpTitle');
  const scroll   = document.getElementById('mob-dpScroll');
  const footer   = document.getElementById('mob-dpFooter');

  colorBar.style.background = c ? c.hex : '#ccc';
  scroll.innerHTML = '';
  footer.innerHTML = '';

  const isPersonal = s.type==='personal';
  const selD = new Date(selectedDate);
  const dateDisp = `${selD.getFullYear()}.${p2(selD.getMonth()+1)}.${p2(selD.getDate())}(${DOW_KR[selD.getDay()]})`;

  if (isPersonal) {
    badge.className = 'dp-badge personal-badge';
    badge.textContent = '상담사 일정';
    title.innerHTML = `<span>${c?c.name:''}</span><span class="dp-title-div">|</span><span>${s.meetingName||s.label}</span>`;
    const timeStr = s.time ? `${s.time} ~ ${mob_addMin(s.time,s.duration||50)}` : '종일';
    scroll.innerHTML = `
      <div class="dp-section dp-section-top">
        <div class="dp-row"><span class="dp-label">일시</span><span class="dp-value">${dateDisp} ${timeStr}</span></div>
        <div class="dp-row"><span class="dp-label">카테고리</span><span class="dp-value">${s.subtype==='allday'?'근태':'일정 관리'}</span></div>
      </div>
      <div class="dp-section">
        <div class="dp-row">
          <span class="dp-label">담당자</span>
          <span class="dp-value" style="display:flex;align-items:center;">
            <span class="dp-c-avatar" style="background:${c?c.hex:'#ccc'}">${c?c.name[0]:''}</span>${c?c.name:'-'}
          </span>
        </div>
      </div>`;
  } else {
    badge.className = `dp-badge ${s.payStatus}`;
    badge.textContent = s.payStatus==='paid'?'결제 완료':s.payStatus==='free'?'무료':'결제 전';
    const prodName = s.productObj ? s.productObj.name : '-';
    title.innerHTML = `<span>${s.name}님</span><span class="dp-title-div">|</span><span>${prodName}</span>`;
    const dur = s.productObj?s.productObj.min:50;
    const statusPill = `<span class="dp-status-pill ${s.sessionStatus}">${s.sessionStatus==='upcoming'?'진행 예정':s.sessionStatus==='done'?'진행 완료':'취소'}</span>`;

    let prevHtml = '';
    if (s.prevRecords&&s.prevRecords.length>0) {
      const sorted = [...s.prevRecords].sort((a,b)=>a.dateStr.localeCompare(b.dateStr));
      const SHOW=3;
      const buildItems = rs => rs.map(r=>`
        <div class="dp-tl-item">
          <div class="dp-tl-left"><div class="dp-tl-dot ${r.written?'written':'unwritten'}"></div><div class="dp-tl-line"></div></div>
          <div class="dp-tl-content">
            <span class="dp-tl-date">${r.dateStr}</span>
            <span class="dp-tl-status ${r.written?'written':'unwritten'}">${r.written?'작성 완료':'미작성'}</span>
          </div>
        </div>`).join('');
      prevHtml = `<div class="dp-row" style="align-items:flex-start;">
        <span class="dp-label">기록</span>
        <div style="flex:1;"><div id="dpTimeline">${buildItems(sorted.slice(0,SHOW))}</div>
        ${sorted.length>SHOW?`<span class="dp-tl-more" id="dpTlMore">+${sorted.length-SHOW}개 더보기</span>`:''}</div>
      </div>`;
    } else {
      prevHtml = `<div class="dp-row"><span class="dp-label">기록</span><span class="dp-value" style="color:#BABABA;">이전 기록이 없어요</span></div>`;
    }

    scroll.innerHTML = `
      <div class="dp-section dp-section-top">
        <div class="dp-row"><span class="dp-label">일시</span><span class="dp-value">${dateDisp} ${s.time}~${mob_addMin(s.time,dur)} (${dur}분)${statusPill}</span></div>
        <div class="dp-row"><span class="dp-label">고객</span><span class="dp-value" style="font-size:15px;font-weight:700;">${s.name} <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><polyline points="9 18 15 12 9 6"/></svg></span></div>
        <div class="dp-row"><span class="dp-label">연락처</span><span class="dp-value">${s.phone}</span></div>
      </div>
      <div class="dp-section">
        <div class="dp-row">
          <span class="dp-label">담당자</span>
          <span class="dp-value" style="display:flex;align-items:center;">
            <span class="dp-c-avatar" style="background:${c?c.hex:'#ccc'}">${c?c.name[0]:''}</span>${c?c.name:'-'}
          </span>
        </div>
        <div class="dp-row"><span class="dp-label">카테고리</span><span class="dp-value">${s.productObj?s.productObj.cat.replace(' - 상담','').replace(' - 검사',''):'-'}</span></div>
        <div class="dp-row"><span class="dp-label">상담/검사</span><span class="dp-value">${prodName}</span></div>
        <div class="dp-row"><span class="dp-label">비용</span><span class="dp-value bold">${s.price?s.price.toLocaleString()+'원':'-'}</span></div>
        <div class="dp-row"><span class="dp-label">회기</span><span class="dp-value">${s.sessionNum} / ${s.totalSession}</span></div>
        ${s.memo?`<div class="dp-row" style="align-items:flex-start;"><span class="dp-label">메모</span><div class="dp-value"><div class="dp-memo-box">${s.memo}</div></div></div>`:''}
      </div>
      <div class="dp-section">${prevHtml}</div>`;

    if (s.sessionStatus!=='cancelled') {
      const hasRecord = s.prevRecords && s.prevRecords.some(r => r.written);
      footer.innerHTML = hasRecord
        ? `<button class="dp-btn dp-btn-primary" onclick="mob_closeDp()" style="flex:1;">상담일지 보기</button>`
        : `<button class="dp-btn dp-btn-secondary" onclick="mob_closeDp()" style="flex:1;">상담일지 작성</button>`;
    }

    setTimeout(() => {
      const moreEl = document.getElementById('mob-dpTlMore');
      if (moreEl && s.prevRecords) {
        const sorted = [...s.prevRecords].sort((a,b)=>a.dateStr.localeCompare(b.dateStr));
        moreEl.addEventListener('click', () => {
          const tl = document.getElementById('mob-dpTimeline');
          if (tl) {
            tl.style.cssText = 'max-height:180px;overflow-y:auto;';
            tl.innerHTML = sorted.map(r=>`
              <div class="dp-tl-item">
                <div class="dp-tl-left"><div class="dp-tl-dot ${r.written?'written':'unwritten'}"></div><div class="dp-tl-line"></div></div>
                <div class="dp-tl-content">
                  <span class="dp-tl-date">${r.dateStr}</span>
                  <span class="dp-tl-status ${r.written?'written':'unwritten'}">${r.written?'작성 완료':'미작성'}</span>
                </div>
              </div>`).join('');
            moreEl.remove();
          }
        });
      }
    }, 50);
  }

  overlay.classList.add('open');
}

function mob_closeDp() {
  document.getElementById('mob-dpOverlay').classList.remove('open');
}

/* ── 컨트롤 ── */
function mob_changeMonth(dir) {
  curMonth += dir;
  if (curMonth>11) { curMonth=0; curYear++; }
  if (curMonth<0)  { curMonth=11; curYear--; }
  mob_renderCal();
}
function mob_goToday() {
  const t = new Date();
  curYear=t.getFullYear(); curMonth=t.getMonth();
  selectedDate=new Date();
  mob_renderCal();
}

document.addEventListener('keydown', e => {
  if (e.key==='Escape') {
    if (document.getElementById('mob-dpOverlay').classList.contains('open')) mob_closeDp();
    else if (listOpen) mob_closeList();
  }
});

// 초기 렌더
mob_renderFilter();
mob_renderCal();


// onclick 핸들러용 전역 노출
window.mob_changeMonth  = mob_changeMonth;
window.mob_goToday      = mob_goToday;
window.mob_closeDp      = mob_closeDp;
window.mob_closeList    = mob_closeList;
window.mob_listMoveDate = mob_listMoveDate;
window.mob_openDp       = mob_openDp;
  }

