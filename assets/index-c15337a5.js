var E=Object.defineProperty;var b=(n,a,t)=>a in n?E(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t;var o=(n,a,t)=>(b(n,typeof a!="symbol"?a+"":a,t),t),L=(n,a,t)=>{if(!a.has(n))throw TypeError("Cannot "+t)};var f=(n,a,t)=>{if(a.has(n))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(n):a.set(n,t)};var u=(n,a,t)=>(L(n,a,"access private method"),t);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const S=[["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","Del","CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter","Shift","я","ч","с","м","и","т","ь","б","ю",".","▲","Shift","Ctrl","Win","Alt"," ","Alt","◄","▼","►","Ctrl"],["ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","/","Del","CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter","Shift","я","ч","с","м","и","т","ь","б","ю",",","▲","Shift","Ctrl","Win","Alt"," ","Alt","◄","▼","►","Ctrl"]],w=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Del","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","▲","Shift","Ctrl","Win","Alt"," ","Alt","◄","▼","►","Ctrl"],["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","{","}","|","Del","CapsLock","a","s","d","f","g","h","j","k","l",":",'"',"Enter","Shift","z","x","c","v","b","n","m","<",">","?","▲","Shift","Ctrl","Win","Alt"," ","Alt","◄","▼","►","Ctrl"]],K=[["'","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ї","\\","Del","CapsLock","ф","і","в","а","п","р","о","л","д","ж","є","Enter","Shift","я","ч","с","м","и","т","ь","б","ю",".","▲","Shift","Ctrl","Win","Alt"," ","Alt","◄","▼","►","Ctrl"],["~","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ї","/","Del","CapsLock","ф","і","в","а","п","р","о","л","д","ж","є","Enter","Shift","я","ч","с","м","и","т","ь","б","ю",",","▲","Shift","Ctrl","Win","Alt"," ","Alt","◄","▼","►","Ctrl"]],m=["backquote","digit1","digit2","digit3","digit4","digit5","digit6","digit7","digit8","digit9","digit0","minus","equal","backspace","tab","keyq","keyw","keye","keyr","keyt","keyy","keyu","keyi","keyo","keyp","bracketleft","bracketright","backslash","delete","capslock","keya","keys","keyd","keyf","keyg","keyh","keyj","keyk","keyl","semicolon","quote","enter","shiftleft","keyz","keyx","keyc","keyv","keyb","keyn","keym","comma","period","slash","arrowup","shiftright","controlleft","metaleft","altleft","space","altright","arrowleft","arrowdown","arrowright","controlright"],l=[S,w,K];var c,p;class y{constructor(){f(this,c);this.keyboardElem=document.createElement("div"),this.keys=this.keyboardElem.children,this.isCaps=!1,this.isShift=!1,this.currentLang=+localStorage.getItem("currentLang")||0,this.doc=document}getKey(a){return this.doc.getElementById(a.toLowerCase())}renderKeys(a){this.keyboardElem.innerHTML="";for(let t=0,e=a.length;t<e;t+=1){const s=document.createElement("div"),i=a[t];s.id=m[t],s.classList.add("key"),s.textContent=i,this.keyboardElem.append(s)}}render(a){return u(this,c,p).call(this,a)}}c=new WeakSet,p=function(){return this.keyboardElem.classList.add("keyboard"),this.renderKeys(l[this.currentLang][0]),this.keyboardElem};class A extends y{toggleCaps(){[...this.keys].forEach(a=>{const t=a,e=t.textContent;e.length===1&&(t.textContent=this.isCaps?e.toUpperCase():e.toLowerCase())})}renderKeysContent(){[...this.keys].forEach((a,t)=>{const e=a,s=l[this.currentLang][this.isShift?1:0][t];e.textContent.length!==1||e.textContent===s||(e.textContent=s)})}switchKeysLang(a){!a.altKey||!a.ctrlKey||(this.currentLang=this.currentLang===l.length-1?0:this.currentLang+1,localStorage.setItem("currentLang",this.currentLang),this.renderKeysContent())}toggleShift(){this.isShift=!this.isShift,this.isCaps=!this.isCaps,this.renderKeysContent(),this.toggleCaps()}}class v extends A{constructor(){super();o(this,"handleTextarea",t=>{this.textareaElem.focus();const{selectionStart:e}=this.textareaElem,{selectionEnd:s}=this.textareaElem,i=this.textareaElem.value.split("");if(t.length===1&&(i.splice(e,0,t),this.textareaElem.value=i.join(""),this.textareaElem.setSelectionRange(e+1,s+1)),t==="Backspace"){if(e===0)return;i.splice(e-1,1),this.textareaElem.value=i.join(""),this.textareaElem.setSelectionRange(e-1,s-1)}t==="Enter"&&(i.splice(e,0,`
`),this.textareaElem.value=i.join(""),this.textareaElem.setSelectionRange(e+1,s+1)),t==="Tab"&&(i.splice(e,0,"	"),this.textareaElem.value=i.join(""),this.textareaElem.setSelectionRange(e+1,s+1)),t==="Del"&&(i.splice(e,1),this.textareaElem.value=i.join(""),this.textareaElem.setSelectionRange(e,s))});o(this,"createAnimationWave",(t=!1)=>{const e=this.doc.createElement("span");return e.classList.add("key__layer",`key__layer--active${t?"-rev":""}`),e.onanimationend=()=>e.remove(),e});o(this,"keyPress",(t,e=!0)=>{if(!m.includes(t.code.toLowerCase()))return;t.preventDefault();const s=t.code,i=this.getKey(s),r=this.createAnimationWave();if(e){if(this.handleTextarea(i.textContent),i.classList.add("active"),t.repeat)return;i.append(r),this.checkCaps(s,i)}else!e&&s!=="CapsLock"&&i.classList.remove("active");this.switchKeysLang(t),(t!=null&&t.shiftKey&&!this.isShift||!(t!=null&&t.shiftKey)&&this.isShift)&&this.toggleShift(t)});o(this,"mousePress",(t,e=!0)=>{if(!t.target.classList.contains("key"))return;const s=t.target,i=this.getKey(s.id),r=this.createAnimationWave();if(e){if(document.body.onmouseup=()=>this.mousePress(t,!1),this.handleTextarea(i.textContent),i==null||i.classList.add("active"),t.repeat)return;i.append(r),this.checkCaps(s,i)}else!e&&s.id!=="capslock"&&(i==null||i.classList.remove("active"));(s.textContent==="Shift"&&!this.isShift||s.textContent==="Shift"&&this.isShift)&&this.toggleShift()});this.keyboardElem=document.querySelector(".keyboard"),this.textareaElem=document.querySelector("#textarea"),this.keys=this.keyboardElem.children}checkCaps(t,e){if(t!=="CapsLock"&&t.id!=="capslock")return;const s=e;if(this.isCaps=!this.isCaps,this.isCaps&&e.classList.add("active"),!this.isCaps){const i=this.createAnimationWave(!0);s.innerHTML=s.textContent,s.append(i),s.classList.remove("active")}this.toggleCaps()}}class T{constructor(){this.textarea=document.createElement("textarea")}initializeTextarea(){this.textarea.setAttribute("id","textarea"),this.textarea.setAttribute("rows","5"),this.textarea.setAttribute("cols","50"),this.textarea.setAttribute("placeholder","RSS Virtual Keyboard"),this.textarea.focus()}render(){return this.initializeTextarea(),this.textarea}}class _{constructor(){o(this,"createNotification",(a,t)=>{const e=document.createElement("div"),s=document.createElement("p"),i=document.createElement("button"),r=document.createElement("span");return e.classList.add("notification"),s.classList.add("notification__text"),s.textContent=a,i.classList.add("notification__btn"),i.textContent="Ok",r.classList.add("notification__time-line"),e.append(s,i,r),i.onclick=g=>{g.preventDefault();const[C,x]=this.animations.get("hide");e.animate(C,x),e.getAnimations()[0].onfinish=()=>e.remove()},this.notifications.set(t,e),e});o(this,"showNotification",a=>{const[t,e]=this.animations.get("show");this.notifications.get(a).animate(t,e)});this.notifications=new Map,this.animations=new Map([["show",[[{transform:"translateX(-100%) scale(.9)"},{transform:"scale(.9) translateX(0)",offset:.5},{transform:"scale(.9) translateX(0)",offset:.8},{transform:"scale(1)",offset:1}],{duration:500,easing:"ease-out"}]],["hide",[[{transform:"translateX(0)",opacity:1},{transform:"translateX(0)",scale:".9",boxShadow:"0 .1rem .1rem rgba(0, 0, 0, .1)",offset:.1},{transform:"translateX(0)",scale:".9",offset:.5},{transform:"translateX(-100%)",opacity:0,offset:1}],{duration:500,easing:"ease-out"}]]])}render(){const a=this.createNotification(`
      Keyboard shortcut: To switch between keyboard layouts, press Ctrl+Alt.
    `,"shortcut");return this.showNotification("shortcut"),a}}const h=document.createElement("div"),k=new y().render(),P=new T().render(),D=new _().render();h.setAttribute("id","app");document.body.prepend(h);h.append(P,k,D);const d=new v;document.body.addEventListener("keydown",d.keyPress);document.body.addEventListener("keyup",n=>d.keyPress(n,!1));k.addEventListener("mousedown",d.mousePress);
