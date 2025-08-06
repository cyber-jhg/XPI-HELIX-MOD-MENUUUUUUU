(() => {
  const c=(t,s)=>Object.assign(document.createElement('div'),{textContent:t,style:s});
  const d=c('','display:none;position:fixed;top:-90%;left:10px;background:black;color:#fff;border:1px solid #ccc;padding:10px;z-index:9999;width:80%;height:90%;overflow-y:auto;border-radius:10px;box-shadow:0 4px 10px rgba(0,0,0,.2);transition:top .5s ease;');
  document.body.appendChild(d);
  d.append(c("XPI HELIX","height:50px;background:url('https://www.transparenttextures.com/patterns/red-code.png');color:#fff;font-weight:bold;display:flex;align-items:center;justify-content:flex-end;padding-right:20px;border-radius:10px;font-size:24px;"));
  d.append(c("PRODIGY HACKS","height:50px;background:red;color:#fff;font-weight:bold;display:flex;align-items:center;justify-content:center;margin-bottom:20px;border-radius:10px;font-size:24px;"));
  const cats={
    "Item Hacks":["Complete Dragon Isle","Infinite Gold","Item Stacker","Obtain All Furniture","Max Item Stack","Unlock All Equipment","Unlock All Pets","Unlock All Zones"],
    "Account Hacks":["Unlock Pet Names","Unlock Unfinished Worlds","Get All Pets Level 1000","Unlock All Spells","Max Account Level","Unlock All Achievements","Unlock All Quests","Unlock All Cards"],
    "Teleportation":["Teleport to Astral Tower","Teleport to Fire Tower","Teleport to Earth Tower","Teleport to Ice Tower","Teleport to Storm Tower","Unlock All Worlds"],
    "Interface Hacks":["Unlock Hidden Features","Custom UI Skins","Remove UI Elements","Unlock Hidden Worlds","Change UI Theme","Move UI Elements"],
    "Environment Hacks":["Unlock Night Time","Unlock Hidden Areas","Spawn Items","Change Pet Names","Unlock All Bosses"],
    "Beta Hacks":["Unlock Beta Zones","Unlock Beta Pets","Unlock Beta Spells","Unlock Beta Achievements","Unlock Beta Quests","Unlock Beta Mounts","Beta Skins","Unlock Beta Worlds"],
    "Future Updates":["Future Prodigy Version","Future Wands","Future Outfits","Future Pets","Future Quests","Advanced Teleportation","Custom Pets","Super Speed","Super Strength"],
    "Spam Players":["Throw Pudding","Glitch Their Screen","Send Fake Messages","Invisibility Hack","Teleport Players","Spamming Effects"],
    "Gameplay Hacks":["Unlock All Achievements","Speed Hack","Unlimited Health","Unlock All Worlds","Unlock All Missions"]
  };
  for(const [cat,opts]of Object.entries(cats)){
    d.append(c(cat,'font-weight:bold;padding:10px 0;border-bottom:2px solid #ccc;font-size:16px;'));
    const con=c('','display:flex;flex-wrap:wrap;');
    d.append(con);
    opts.forEach(o=>{
      const b=c(o,'background:red;color:#fff;width:150px;height:50px;margin:10px;display:flex;justify-content:center;align-items:center;cursor:pointer;border-radius:5px;font-size:14px;');
      b.onclick=()=>alert(`${o} - Success!`);
      con.appendChild(b);
    });
  }
  const t=c('↑','position:fixed;top:10px;left:10px;background:black;color:red;padding:10px;font-size:24px;cursor:pointer;z-index:10001;border-radius:50%;border:2px solid red;text-align:center;');
  document.body.appendChild(t);
  let o=false;
  t.onclick=()=>{
    if(o){d.style.top='-90%';t.textContent='↑';}
    else{d.style.display='block';d.style.top='10px';t.textContent='↓';}
    o=!o;
  };
  const ai=c('AI','position:fixed;top:10px;right:10px;background:black;color:red;padding:10px;font-size:20px;border-radius:50%;cursor:pointer;border:2px solid red;z-index:10002;user-select:none;');
  document.body.appendChild(ai);
  const chat=c('','position:fixed;bottom:20px;right:20px;width:320px;height:400px;background:black;color:white;border:2px solid red;border-radius:15px;display:none;flex-direction:column;font-family:monospace;z-index:10003;box-shadow:0 0 15px red;');
  document.body.appendChild(chat);
  chat.append(c("ZEN AI Chat","padding:10px;background:red;font-weight:bold;text-align:center;border-top-left-radius:13px;border-top-right-radius:13px;"));
  const msgs=c('','flex:1;padding:10px;overflow-y:auto;background:#111;font-size:14px;line-height:1.3;white-space:pre-wrap;');
  chat.appendChild(msgs);
  const ic=c('','display:flex;border-top:1px solid red;');
  chat.appendChild(ic);
  const inp=Object.assign(document.createElement('input'),{type:'text',placeholder:'Ask something...',style:'flex:1;padding:10px;border:none;outline:none;background:black;color:white;font-family:monospace;font-size:14px;'});
  ic.appendChild(inp);
  const send=c('Send','background:red;border:none;color:white;font-weight:bold;cursor:pointer;padding:0 15px;font-family:monospace;font-size:14px;');
  ic.appendChild(send);
  let chatOpen=false,count=0;
  ai.onclick=()=>{
    chatOpen=!chatOpen;
    chat.style.display=chatOpen?'flex':'none';
    if(chatOpen) inp.focus();
  };
  const simulate=txt=>new Promise(res=>{
    let i=0,m=c('','margin:10px 0;color:#0f0;');
    msgs.appendChild(m);
    (function type(){
      if(i<txt.length){m.textContent+=txt.charAt(i++);msgs.scrollTop=msgs.scrollHeight;setTimeout(type,50);}
      else res();
    })();
  });
  async function sendMessage(){
    let val=inp.value.trim();
    if(!val) return;
    count++;
    msgs.appendChild(c(val,'margin:10px 0;color:red;'));
    inp.value='';
    inp.disabled=send.disabled=true;
    const loading=c('ZEN is thinking...','color:#0f0;margin:10px 0;');
    msgs.appendChild(loading);
    await new Promise(r=>setTimeout(r,1500));
    msgs.removeChild(loading);
    let response="ERROR: Please reload your screen and attempt the action again.";
    if(count===4) response="Please hold your comments for a moment.";
    else if(count>=5) response="Okay, okay, we get it, let’s give it a rest for now.";
    await simulate(response);
    inp.disabled=send.disabled=false;
    inp.focus();
  }
  send.onclick=sendMessage;
  inp.addEventListener('keydown',e=>{if(e.key==='Enter')sendMessage();});
})();


