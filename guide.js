/* Categories */
const CATS = [
  {id:'eng',   name:'Engineering & Technology', emoji:'💻', roles:['Software Dev','AI/ML Engineer','Hardware Engineer']},
  {id:'med',   name:'Medical & Healthcare',     emoji:'🩺', roles:['Doctor/Nurse','Pharmacist','Clinical Research']},
  {id:'law',   name:'Law & Government',         emoji:'⚖️', roles:['Lawyer','Judge','Civil Servant']},
  {id:'biz',   name:'Business & Management',    emoji:'📊', roles:['Entrepreneur','Manager','Product Owner']},
  {id:'arts',  name:'Arts & Design',            emoji:'🎨', roles:['UI/UX Designer','Animator','Architect']},
  {id:'media', name:'Media & Communication',    emoji:'🎤', roles:['Journalist','Content Creator','PR']},
  {id:'edu',   name:'Education & Research',     emoji:'📚', roles:['Teacher','Professor','EdTech Specialist']},
  {id:'social',name:'Social Work & Humanities', emoji:'🤝', roles:['Social Worker','Counselor','Policy Analyst']},
  {id:'sci',   name:'Science & Research',       emoji:'🔬', roles:['Researcher','Lab Scientist','Astronomer']},
  {id:'fin',   name:'Commerce & Finance',       emoji:'💹', roles:['CA/Accountant','Financial Analyst','Banker']},
  {id:'voc',   name:'Vocational / Skilled Trades', emoji:'🔧', roles:['Electrician','Chef','Automotive Tech']},
  {id:'sport', name:'Sports & Defence',         emoji:'⚽🪖', roles:['Athlete/Coach','Armed Forces','Sports Scientist']}
];

/* Questions with weighted scores
   Each option has: { t: 'text', scores: {catId: weight, ...} }
   weight = 0 (none), 1 (weak), 2 (medium), 3 (strong)
*/




const QUESTIONS = [
  {q:"📱 New phone in hand — what do you explore first?", opts:[
    {t:"⚙️ Developer settings / tinkering", scores:{eng:3, sci:1}},
    {t:"💪 Health & fitness features", scores:{med:2, sport:1}},
    {t:"🛡️ Privacy / legal terms", scores:{law:3}},
    {t:"💰 Budgeting/finance apps", scores:{fin:3, biz:1}},
    {t:"📸 Camera composition / UI look", scores:{arts:3, media:1}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"👫 Friends usually ask you for help with…", opts:[
    {t:"🔧 Fixing gadgets / apps", scores:{eng:3, voc:1}},
    {t:"📚 Study tips / explaining chapters", scores:{edu:3}},
    {t:"⚖️ Arguing a point / debate prep", scores:{law:3}},
    {t:"🎨 Making posters / slides look good", scores:{arts:3, media:1}},
    {t:"💹 Choosing investments / savings", scores:{fin:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🏫 Free period at school — you’d rather…", opts:[
    {t:"⚽ Play a quick match", scores:{sport:3}},
    {t:"🔬 Read science / space facts", scores:{sci:3, eng:1}},
    {t:"✏️ Sketch or doodle ideas", scores:{arts:3}},
    {t:"🎥 Record a short reel / interview", scores:{media:3}},
    {t:"🤝 Help a classmate who’s stressed", scores:{social:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"👥 Group project role you pick naturally:", opts:[
    {t:"📝 Team lead / organize tasks", scores:{biz:3, edu:1}},
    {t:"🔍 Research & references", scores:{sci:3, edu:2}},
    {t:"💻 Technical build (code / hardware)", scores:{eng:3}},
    {t:"🎨 Design / layout / storytelling", scores:{arts:3, media:1}},
    {t:"🎤 Presenting on stage / emcee", scores:{media:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"📰 A news headline catches you most when it’s about…", opts:[
    {t:"🩺 Medical breakthroughs", scores:{med:3, sci:1}},
    {t:"🏛️ Supreme Court / gov policy", scores:{law:3}},
    {t:"📈 Startups, markets, IPOs", scores:{fin:3, biz:2}},
    {t:"🔭 New telescope / discovery", scores:{sci:3}},
    {t:"🏅 Sports records / defence drills", scores:{sport:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🛠️ Your ideal weekend mini-project:", opts:[
    {t:"💻 Build a small app or automation", scores:{eng:3, sci:1}},
    {t:"🎬 Shoot & edit a vlog", scores:{media:3}},
    {t:"🖌️ Design a room / moodboard", scores:{arts:3}},
    {t:"📖 Coach juniors in your favorite subject", scores:{edu:3}},
    {t:"🔧 Repair a bike / learn a tool", scores:{voc:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🎁 If you win a voucher, you’d buy…", opts:[
    {t:"🖥️ Electronics kit (Raspberry Pi)", scores:{eng:3, sci:1}},
    {t:"🩺 Anatomy / first-aid kit", scores:{med:3}},
    {t:"📚 Law / current-affairs books", scores:{law:3}},
    {t:"💼 Business / marketing book", scores:{biz:3}},
    {t:"🖊️ Sketchbook, pens, or tablet", scores:{arts:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🧩 What kind of problems are fun to solve?", opts:[
    {t:"💻 Debugging code / logic puzzles", scores:{eng:3, sci:1}},
    {t:"💰 Balancing budgets / cost cutting", scores:{fin:3, biz:1}},
    {t:"🌱 Community waste / safety issues", scores:{social:3}},
    {t:"🎨 Visual layout / aesthetics", scores:{arts:3}},
    {t:"🏋️ Training strategy / fitness plans", scores:{sport:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"⏱️ Which class feels like 'time flies' for you?", opts:[
    {t:"🔬 Physics / Computers", scores:{sci:3, eng:2}},
    {t:"🧬 Biology", scores:{med:3, sci:1}},
    {t:"⚖️ Civics / Political Science", scores:{law:3}},
    {t:"💹 Business / Economics", scores:{fin:3, biz:2}},
    {t:"🎭 Art / Design / Drama", scores:{arts:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"📱 You follow creators who mostly talk about…", opts:[
    {t:"💻 Tech & coding tips", scores:{eng:3, sci:1}},
    {t:"💊 Health & wellness", scores:{med:3}},
    {t:"⚖️ Policy / legal explainers", scores:{law:3}},
    {t:"📈 Entrepreneurship / side hustles", scores:{biz:3}},
    {t:"🎬 Filmmaking & storytelling", scores:{media:3, arts:1}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🤖 If school set up a new club, you’d join:", opts:[
    {t:"🤖 Robotics / Coding", scores:{eng:3, sci:1}},
    {t:"🩹 Red Cross / First Aid", scores:{med:3}},
    {t:"🏛️ Model Parliament / MUN", scores:{law:3}},
    {t:"💼 Entrepreneurship / Finance", scores:{biz:3, fin:2}},
    {t:"📷 Photography / Film", scores:{media:3, arts:1}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🏢 Your dream workplace vibe:", opts:[
    {t:"🔬 Lab with experiments", scores:{sci:3, eng:1}},
    {t:"🏥 Hospital / clinic", scores:{med:3}},
    {t:"⚖️ Courtroom / secretariat", scores:{law:3}},
    {t:"🎨 Studio / creative agency", scores:{arts:3, media:2}},
    {t:"🛠️ Hangar / workshop / field site", scores:{voc:3, eng:1}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"💡 On a tough day, what still energizes you?", opts:[
    {t:"🏋️ Physical training / practice", scores:{sport:3}},
    {t:"🎨 Sketching / playing music", scores:{arts:3}},
    {t:"💻 Solving a technical challenge", scores:{eng:3, sci:1}},
    {t:"🤝 Helping someone one-on-one", scores:{social:3}},
    {t:"📋 Planning / organizing tasks", scores:{biz:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"💼 Which internship would you pick first?", opts:[
    {t:"📦 Startup product team", scores:{biz:3, eng:1}},
    {t:"📰 Newspaper / TV desk", scores:{media:3}},
    {t:"🔬 Research lab assistant", scores:{sci:3}},
    {t:"🌱 NGO fieldwork", scores:{social:3}},
    {t:"🛠️ Workshop / technician shadowing", scores:{voc:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🎥 Which documentary are you clicking on?", opts:[
    {t:"💻 Cybersecurity / AI", scores:{eng:3, sci:1}},
    {t:"🏥 ER / surgeon life", scores:{med:3}},
    {t:"⚖️ Elections / courts", scores:{law:3}},
    {t:"📉 Stock market crash", scores:{fin:3}},
    {t:"🚀 Space mission", scores:{sci:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"👏 A teacher praises you for…", opts:[
    {t:"📚 Explaining concepts clearly", scores:{edu:3}},
    {t:"💼 Leadership & deadlines", scores:{biz:3}},
    {t:"🎨 Beautiful visuals & design", scores:{arts:3}},
    {t:"⚖️ Strong evidence-based arguments", scores:{law:3, sci:1}},
    {t:"🔧 Fixing practical issues quickly", scores:{voc:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🎪 Pick a side task for a fest:", opts:[
    {t:"🎤 Stage management & hosting", scores:{media:3}},
    {t:"💰 Budgeting stalls & sponsors", scores:{fin:3}},
    {t:"🎨 Stage design & posters", scores:{arts:3}},
    {t:"🏃 Security & discipline", scores:{sport:3}},
    {t:"🔧 Backstage tech (sound / lights)", scores:{eng:2, voc:2}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🌅 Morning routine you'd keep even if busy:", opts:[
    {t:"🏋️ Workout / training", scores:{sport:3}},
    {t:"🔬 Read science / tech digest", scores:{sci:3, eng:1}},
    {t:"💹 Check market / finance news", scores:{fin:3}},
    {t:"📓 Plan & journal the day", scores:{biz:2}},
    {t:"🎶 Sketch / practice instrument", scores:{arts:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🤗 If a junior is anxious, you would…", opts:[
    {t:"📖 Teach concepts calmly", scores:{edu:3}},
    {t:"🫂 Listen & support them", scores:{social:3}},
    {t:"🩺 Offer practical health tips", scores:{med:3}},
    {t:"🚀 Motivate with targets", scores:{biz:2}},
    {t:"🎥 Make an informational video", scores:{media:2, edu:1}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🏆 Your favorite kind of competition:", opts:[
    {t:"💻 Hackathon", scores:{eng:3, sci:1}},
    {t:"⚖️ Debate / MUN", scores:{law:3}},
    {t:"📈 Stock trading simulation", scores:{fin:3}},
    {t:"🎨 Design / Art contest", scores:{arts:3}},
    {t:"🏅 Sports tournament", scores:{sport:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"📰 Big dream headline you want:", opts:[
    {t:"💻 Builds breakthrough app / AI", scores:{eng:3, sci:1}},
    {t:"🩺 Saves lives with new procedure", scores:{med:3}},
    {t:"⚖️ Wins landmark case", scores:{law:3}},
    {t:"🚀 Scales a unicorn startup", scores:{biz:3}},
    {t:"🏆 Wins national award for film / design", scores:{media:2, arts:2}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🌍 Which place sounds exciting to spend a day at?", opts:[
    {t:"🔬 Research lab / ISRO", scores:{sci:3}},
    {t:"🏛️ Supreme Court / Secretariat", scores:{law:3}},
    {t:"🎬 Film studio / newsroom", scores:{media:3}},
    {t:"💹 Stock exchange / Bank", scores:{fin:3}},
    {t:"✈️ Airbase / training academy", scores:{sport:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🛠️ What tool would you learn deeply first?", opts:[
    {t:"💻 Programming language / IDE", scores:{eng:3, sci:1}},
    {t:"🩺 First-aid / diagnostic kit", scores:{med:3}},
    {t:"⚖️ Legal research database", scores:{law:3}},
    {t:"📊 Spreadsheet / CRM", scores:{fin:3, biz:1}},
    {t:"🎨 Photoshop / Figma", scores:{arts:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🌀 Your style in a crisis:", opts:[
    {t:"🔧 Fix physically (repair / arrange)", scores:{voc:3}},
    {t:"🔬 Analyze root cause", scores:{sci:3, eng:1}},
    {t:"📋 Coordinate people & tasks", scores:{biz:3}},
    {t:"🗣️ Communicate updates clearly", scores:{media:2}},
    {t:"🤝 Care for those affected", scores:{social:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"💼 After school, part-time gig you'd love:", opts:[
    {t:"💻 Coding tutor / app helper", scores:{eng:2, edu:1}},
    {t:"🏥 Clinic assistant", scores:{med:3}},
    {t:"⚖️ Legal intern", scores:{law:3}},
    {t:"📱 Social media manager", scores:{media:3}},
    {t:"🏋️ Gym / sports assistant", scores:{sport:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🎓 Pick a mini-course right now:", opts:[
    {t:"🎨 UI/UX basics", scores:{arts:3}},
    {t:"💰 Personal finance / investing", scores:{fin:3}},
    {t:"📊 Data science intro", scores:{sci:3, eng:1}},
    {t:"🫂 Counseling skills", scores:{social:3}},
    {t:"🎬 Video editing", scores:{media:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"💬 Feedback you enjoy the most:", opts:[
    {t:"'🎨 So clean and beautiful!'", scores:{arts:3}},
    {t:"'💻 This logic is solid.'", scores:{sci:3, eng:2}},
    {t:"'📚 You explained it so well.'", scores:{edu:3}},
    {t:"'💼 Great leadership / ownership.'", scores:{biz:3}},
    {t:"'⚖️ Powerful argument.'", scores:{law:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"👕 Which uniform excites you (if any)?", opts:[
    {t:"🧪 Lab coat", scores:{sci:3, med:2}},
    {t:"⚖️ Court black & white", scores:{law:3}},
    {t:"🏃 Jersey / tracks", scores:{sport:3}},
    {t:"🛠️ Overalls / helmet", scores:{voc:3}},
    {t:"🎨 No uniform, creative fit", scores:{arts:2, media:1}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🎥 If you start a YouTube channel, it's about…", opts:[
    {t:"💻 Coding / tech hacks", scores:{eng:3, sci:1}},
    {t:"💊 Health myths & tips", scores:{med:3}},
    {t:"⚖️ Explaining laws / current affairs", scores:{law:3}},
    {t:"💼 Business case studies", scores:{biz:3}},
    {t:"🎨 Design / film reviews", scores:{media:2, arts:2}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"🌊 Your 'flow state' appears when…", opts:[
    {t:"💻 Solving technical problems", scores:{eng:3, sci:1}},
    {t:"🤝 Caring / assisting others", scores:{med:2, social:2}},
    {t:"⚖️ Structuring strong arguments", scores:{law:3}},
    {t:"📊 Planning growth / strategy", scores:{biz:3}},
    {t:"🎨 Creating visuals / sound", scores:{arts:3, media:2}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
  {q:"📅 Mini: Weekend do you prefer?", opts:[
    {t:"💻 Tinker with electronics / code", scores:{eng:3, sci:1}},
    {t:"🩺 Volunteer at a clinic / camp", scores:{med:3}},
    {t:"⚖️ Attend a debate / discussion", scores:{law:3}},
    {t:"💼 Organize a small market / stall", scores:{biz:3}},
    {t:"🏃 Practice sport / fitness", scores:{sport:3}},
    {t:"❓ None / Not sure", scores:{}},
  ]},
];









/* State */
let step = 0;
const total = QUESTIONS.length;
const scores = Object.fromEntries(CATS.map(c=>[c.id,0]));
const content = document.getElementById('content');
const bar = document.getElementById('bar');
const stepLabel = document.getElementById('stepLabel');

/* History stack for back: store chosen option's scores and question index */
const historyStack = [];

/* Helpers */
function escapeHtml(s){ return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

function renderQuestion(){
  stepLabel.textContent = `Q ${Math.min(step+1,total)} / ${total}`;
  bar.style.width = `${Math.round((step/total)*100)}%`;

  if(step >= total){
    showResult();
    return;
  }
  const q = QUESTIONS[step];
  let html = `<h2 class="q">${escapeHtml(q.q)}</h2><div class="grid">`;
  for(const [i,opt] of q.opts.entries()){
    const cls = (Object.keys(opt.scores).length === 0) ? 'opt none' : 'opt';
    html += `<div class="${cls}" onclick="chooseOption(${i})"><div style="flex:1">${escapeHtml(opt.t)}</div></div>`;
  }
  html += `</div><div class="center" style="margin-top:14px">
             <button class="btn ghost" onclick="goBack()">← Back</button>
             <div class="muted" style="color:var(--muted)">Choose one</div>
          </div>`;
  content.innerHTML = html;
}

/* Apply scores of an option (add) */
function applyScores(scoreMap){
  for(const [cat, w] of Object.entries(scoreMap)){
    if(scores.hasOwnProperty(cat)) scores[cat] += Number(w);
  }
}
/* Revert scores of an option (subtract) */
function revertScores(scoreMap){
  for(const [cat, w] of Object.entries(scoreMap)){
    if(scores.hasOwnProperty(cat)) scores[cat] = Math.max(0, scores[cat] - Number(w));
  }
}

/* Choose option by index for current question */
window.chooseOption = function(optIndex){
  const opt = QUESTIONS[step].opts[optIndex];
  // apply
  applyScores(opt.scores || {});
  // push history
  historyStack.push({q: step, optIndex, scores: opt.scores || {}});
  step++;
  renderQuestion();
};

function goBack(){
  if(historyStack.length === 0){
    // nothing chosen yet
    if(step > 0) step = Math.max(0, step-1);
    renderQuestion();
    return;
  }
  // pop last
  const last = historyStack.pop();
  // revert its scores
  revertScores(last.scores || {});
  // set step to that question index
  step = last.q;
  renderQuestion();
}

/* Result handling */
function showResult(){
  bar.style.width = '100%';
  // compute winners
  const entries = Object.entries(scores).sort((a,b)=> b[1]-a[1]);
  const topScore = entries[0][1];
  const winners = entries.filter(([_,v])=> v === topScore).map(([id])=> id);

  if(topScore === 0){
    content.innerHTML = `
      <div class="result">
        <div class="badge">❓ No strong preference detected</div>
        <h2 class="q" style="margin-top:8px">We couldn't find a clear fit</h2>
        <p class="muted">You chose many "Not sure" answers or low-signal options. Try again and pick the options you resonate with most.</p>
        <div class="center" style="margin-top:12px">
          <button class="btn primary" onclick="restart()">Restart</button>
        </div>
      </div>`;
    return;
  }

  if(winners.length === 1){
    displayFinal(winners[0]);
    return;
  }

  // tie resolution: show tied categories and ask user to pick one
  const tiedCats = winners.map(id => CATS.find(c=>c.id===id));
  let html = `<div class="result"><div class="badge">⚖️ Tie detected</div>
              <h2 class="q" style="margin-top:8px">You match multiple paths</h2>
              <p class="muted">Choose which of these appeals to you the most right now:</p>
              <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px">`;
  for(const cat of tiedCats){
    html += `<button class="btn" onclick="resolveTie('${cat.id}')">${cat.emoji} ${escapeHtml(cat.name)}</button>`;
  }
  html += `</div><div class="center" style="margin-top:12px"><button class="btn ghost" onclick="restart()">Restart</button></div></div>`;
  content.innerHTML = html;
}

function resolveTie(catId){
  // increment chosen cat to break tie then show final
  if(scores.hasOwnProperty(catId)) scores[catId] += 1;
  displayFinal(catId);
}

function displayFinal(catId){
  const cat = CATS.find(c=> c.id === catId);
  const rolesHtml = (cat.roles || []).map(r=> `<span class="pill">${escapeHtml(r)}</span>`).join('');
  const shareText = encodeURIComponent(`I got ${cat.emoji} ${cat.name} as my career fit! Try this test:`);
  const shareUrl = encodeURIComponent(window.location.href.split('#')[0]);
  const wa = `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`;

  content.innerHTML = `
    <div class="result">
      <div class="badge">${cat.emoji} Final Match</div>
      <h2 class="q" style="margin-top:8px">${escapeHtml(cat.name)}</h2>
      <p class="muted">Based on your weighted answers across ${total} questions.</p>
      <div class="roles">${rolesHtml}</div>
      <div class="center" style="margin-top:14px">
        <button class="btn primary" onclick="restart()">🔁 Restart</button>
        <a class="btn" href="${wa}" target="_blank">📲 Share on WhatsApp</a>
      </div>
    </div>`;
}

/* Restart */
function restart(){
  step = 0;
  historyStack.length = 0;
  for(const k in scores) scores[k] = 0;
  renderQuestion();
}

/* start */
renderQuestion();
