function displayWords({value:word}){
  if(word.trim().length<3){
    const error=document.getElementById("too-short");
    error.style.animation="smooth-pop 5s ease-in-out";
    setTimeout(()=>{
      error.style.animation="none";
    },5e3);
    return;
  };
  const format=s=>s.toLowerCase().replace(/[ \-_]/g,"");
  const includes=dict.filter(w=>w.includes(format(word))&&w!=format(word));
  const startsWith=dict.filter(w=>w.startsWith(format(word).slice(-3)));
  const endsWith=dict.filter(w=>w.endsWith(format(word).slice(0,3)));
  const includesContainer=document.getElementById("includes");
  const startsWithContainer=document.getElementById("startswith");
  const endsWithContainer=document.getElementById("endswith");
  document.getElementById("includes-title").innerHTML=`Mots contenant <span class="term">"${word}"</span>`;
  document.getElementById("startswith-title").innerHTML=`Mots dont le debut se lie avec <span class="term">"${word}"</span>`;
  document.getElementById("endswith-title").innerHTML=`Mots dont la fin se lie avec <span class="term">"${word}"</span>`;
  includesContainer.innerHTML=includes.map(w=>`<a class="word" href="https://www.le-dictionnaire.com/definition/${w}" target="_blank">${w}</a>`).join("");
  startsWithContainer.innerHTML=startsWith.map(w=>`<a class="word" href="https://www.le-dictionnaire.com/definition/${w}" target="_blank">${format(word).slice(0,-3)}${w}</a>`).join("");
  endsWithContainer.innerHTML=endsWith.map(w=>`<a class="word" href="https://www.le-dictionnaire.com/definition/${w}" target="_blank">${w}${format(word).slice(3)}</a>`).join("");
  if(!includes.length)includesContainer.innerHTML=`<span class="commentary">Aucun mot ne contient "${word}"</span>`;
  if(!startsWith.length)startsWithContainer.innerHTML=`<span class="commentary">Aucun ne se lie avec "${word}" en son début</span>`;
  if(!endsWith.length)endsWithContainer.innerHTML=`<span class="commentary">Aucun ne se lie avec "${word}" en sa fin</span>`;
};