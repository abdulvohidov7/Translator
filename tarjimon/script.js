// UZ -> EN dictionary, 200+ A1-level words
const dict = {
"salom":"hello","xayr":"goodbye","rahmat":"thank you","iltimos":"please",
"ha":"yes","yo'q":"no","kechirasiz":"sorry","xush kelibsiz":"welcome",
"men":"i","sen":"you","u":"he/she","biz":"we","siz":"you","ular":"they",
"bu":"this","o'sha":"that","kim":"who","nima":"what","qayer":"where",
"qachon":"when","nega":"why","qanday":"how","qancha":"how much",
"ism":"name","yosh":"age","uy":"house","maktab":"school","universitet":"university",
"ish":"work","do'st":"friend","oila":"family","ota":"father","ona":"mother",
"aka":"older brother","opa":"older sister","uka":"younger brother","singil":"younger sister",
"bola":"child","erkak":"man","ayol":"woman","o'g'il":"son","qiz":"daughter",
"kitob":"book","daftar":"notebook","qalam":"pencil","ruchka":"pen","stol":"table",
"stul":"chair","eshik":"door","deraza":"window","devor":"wall","tom":"roof",
"pol":"floor","xona":"room","oshxona":"kitchen","hammom":"bathroom","bog'":"garden",
"ko'cha":"street","shahar":"city","qishloq":"village","mamlakat":"country","dunyo":"world",
"suv":"water","non":"bread","sut":"milk","tuxum":"egg","go'sht":"meat",
"baliq":"fish","sabzavot":"vegetable","meva":"fruit","olma":"apple","banan":"banana",
"uzum":"grape","tarvuz":"watermelon","qovun":"melon","pomidor":"tomato","kartoshka":"potato",
"piyoz":"onion","sabzi":"carrot","choy":"tea","kofe":"coffee","shakar":"sugar",
"tuz":"salt","yog'":"oil/butter","qand":"candy/sugar cube","taom":"food","nonushta":"breakfast",
"tushlik":"lunch","kechki ovqat":"dinner","restoran":"restaurant","do'kon":"shop","bozor":"market",
"pul":"money","narx":"price","arzon":"cheap","qimmat":"expensive","katta":"big",
"kichik":"small","uzun":"long","qisqa":"short","baland":"tall/high","past":"short/low",
"yangi":"new","eski":"old","yaxshi":"good","yomon":"bad","chiroyli":"beautiful",
"xunuk":"ugly","toza":"clean","iflos":"dirty","issiq":"hot","sovuq":"cold",
"iliq":"warm","quruq":"dry","nam":"wet","tez":"fast","sekin":"slow",
"kun":"day","tun":"night","ertalab":"morning","kunduzi":"afternoon","kechqurun":"evening",
"bugun":"today","ertaga":"tomorrow","kecha":"yesterday","hafta":"week","oy":"month",
"yil":"year","soat":"hour/clock","daqiqa":"minute","soniya":"second","vaqt":"time",
"dushanba":"monday","seshanba":"tuesday","chorshanba":"wednesday","payshanba":"thursday",
"juma":"friday","shanba":"saturday","yakshanba":"sunday",
"yanvar":"january","fevral":"february","mart":"march","aprel":"april","may":"may",
"iyun":"june","iyul":"july","avgust":"august","sentyabr":"september","oktyabr":"october",
"noyabr":"november","dekabr":"december",
"bir":"one","ikki":"two","uch":"three","to'rt":"four","besh":"five",
"olti":"six","yetti":"seven","sakkiz":"eight","to'qqiz":"nine","o'n":"ten",
"yuz":"hundred","ming":"thousand","nol":"zero",
"rang":"color","qizil":"red","ko'k":"blue","sariq":"yellow","yashil":"green",
"oq":"white","qora":"black","jigarrang":"brown","kulrang":"gray","binafsha":"purple",
"bosh":"head","yuz":"face","ko'z":"eye","quloq":"ear","burun":"nose",
"og'iz":"mouth","tish":"tooth","qo'l":"hand/arm","oyoq":"leg/foot","barmoq":"finger",
"yurak":"heart","qorin":"stomach","sog'lom":"healthy","kasal":"sick","shifokor":"doctor",
"dorixona":"pharmacy","kasalxona":"hospital","dori":"medicine","og'riq":"pain",
"o'qituvchi":"teacher","talaba":"student","o'quvchi":"pupil","kitobxona":"library",
"sinf":"classroom","dars":"lesson","imtihon":"exam","savol":"question","javob":"answer",
"til":"language","so'z":"word","gap":"sentence","harf":"letter","kitob o'qish":"reading",
"yozish":"writing","gapirish":"speaking","tinglash":"listening","tushunish":"understanding",
"o'ynamoq":"to play","ishlamoq":"to work","o'qimoq":"to read/study","yozmoq":"to write",
"gapirmoq":"to speak","eshitmoq":"to hear","ko'rmoq":"to see","bilmoq":"to know",
"sevmoq":"to love","yoqtirmoq":"to like","xohlamoq":"to want","kerak":"need",
"bormoq":"to go","kelmoq":"to come","turmoq":"to stand/live","o'tirmoq":"to sit",
"yurmoq":"to walk","yugurmoq":"to run","uxlamoq":"to sleep","uyg'onmoq":"to wake up",
"yemoq":"to eat","ichmoq":"to drink","pishirmoq":"to cook","sotib olmoq":"to buy",
"sotmoq":"to sell","bermoq":"to give","olmoq":"to take","ochmoq":"to open",
"yopmoq":"to close","boshlamoq":"to start","tugatmoq":"to finish","kutmoq":"to wait",
"o'ylamoq":"to think","hazillashmoq":"to joke","kulmoq":"to laugh","yig'lamoq":"to cry",
"transport":"transport","mashina":"car","avtobus":"bus","poyezd":"train","samolyot":"plane",
"velosiped":"bicycle","kema":"ship","taksi":"taxi","yo'l":"road","chipta":"ticket",
"aeroport":"airport","vokzal":"station","bekat":"stop",
"kiyim":"clothes","ko'ylak":"shirt/dress","shim":"trousers","poyabzal":"shoes",
"shapka":"hat","kurtka":"jacket","sumka":"bag",
"quvonch":"joy","baxt":"happiness","g'am":"sadness","qo'rquv":"fear","g'azab":"anger",
"sevgi":"love","umid":"hope","xotira":"memory","tush":"dream",
"osmon":"sky","quyosh":"sun","tog'":"mountain","dengiz":"sea","daryo":"river",
"ko'l":"lake","o'rmon":"forest","yulduz":"star","yer":"earth/ground",
"gul":"flower","daraxt":"tree","o't":"grass","hayvon":"animal","it":"dog",
"mushuk":"cat","ot":"horse","sigir":"cow","qo'y":"sheep","tovuq":"chicken",
"qush":"bird","sichqon":"mouse",
"bahor":"spring","yoz":"summer","kuz":"autumn","qish":"winter",
"yomg'ir":"rain","qor":"snow","shamol":"wind","bulut":"cloud","tuman":"fog",
"telefon":"phone","kompyuter":"computer","televizor":"television","radio":"radio",
"internet":"internet","xat":"letter/mail","xabar":"message",
"albatta":"certainly","balki":"maybe","tez orada":"soon",
"hozir":"now","keyin":"later","oldin":"before","hamma":"everyone","hech kim":"nobody",
"hamma narsa":"everything","hech narsa":"nothing","doim":"always","hech qachon":"never",
"ba'zan":"sometimes","tez-tez":"often"
};

// build reverse EN -> UZ (first-match wins)
const rev = {};
for(const [uz,en] of Object.entries(dict)){
  const key = en.split("/")[0].trim().toLowerCase();
  if(!(key in rev)) rev[key] = uz;
}

let direction = "uz2en"; // or en2uz

const inputEl = document.getElementById("inputText");
const outputEl = document.getElementById("outputText");
const inLabel = document.getElementById("inLabel");
const lblUz = document.getElementById("lblUz");
const lblEn = document.getElementById("lblEn");
const swapBtn = document.getElementById("swapBtn");
const translateBtn = document.getElementById("translateBtn");

function updateLabels(){
  if(direction === "uz2en"){
    lblUz.classList.add("active");
    lblEn.classList.remove("active");
    inLabel.textContent = "Matn kiriting (o'zbekcha):";
  } else {
    lblEn.classList.add("active");
    lblUz.classList.remove("active");
    inLabel.textContent = "Enter text (English):";
  }
}

swapBtn.addEventListener("click", () => {
  direction = direction === "uz2en" ? "en2uz" : "uz2en";
  updateLabels();
  outputEl.innerHTML = "—";
});

function translateWord(word, punct){
  const clean = word.toLowerCase();
  const table = direction === "uz2en" ? dict : rev;
  let translated = table[clean];
  if(translated){
    if(translated.includes("/")) translated = translated.split("/")[0];
    if(word[0] === word[0].toUpperCase() && word[0] !== word[0].toLowerCase()){
      translated = translated.charAt(0).toUpperCase() + translated.slice(1);
    }
    return `<span>${translated}</span>${punct}`;
  }
  return `<span class="missing">${word}</span>${punct}`;
}

function doTranslate(){
  const text = inputEl.value.trim();
  if(!text){
    outputEl.innerHTML = "—";
    return;
  }
  const tokens = text.match(/[\wʻ'’]+|[^\w\s]+|\s+/g) || [];
  let result = "";
  let i = 0;
  while(i < tokens.length){
    const tok = tokens[i];
    if(/^[\wʻ'’]+$/.test(tok)){
      let punct = "";
      let j = i+1;
      while(j < tokens.length && /^[^\w\s]+$/.test(tokens[j])){
        punct += tokens[j];
        j++;
      }
      result += translateWord(tok, punct);
      i = j;
    } else {
      result += tok;
      i++;
    }
  }
  outputEl.innerHTML = result;
}

translateBtn.addEventListener("click", doTranslate);
inputEl.addEventListener("keydown", (e)=>{
  if(e.key === "Enter" && (e.ctrlKey || e.metaKey)) doTranslate();
});

updateLabels();
