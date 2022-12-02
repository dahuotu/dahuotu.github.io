const apps={"trip-card":{title:"通信大数据行程卡",icon:"trip-card/static/img_arrow@2x.png",link:"trip-card/index.html",color:"#2ba667",help_text:"<p>点击手机号或途经地点可以修改相关信息。</p>",menu:[]},ykm:{title:"粤康码",icon:"ykm/static/yss.jpeg",link:"ykm/index.html",color:"#aacc00",help_text:"<p>点击姓名、城市、场所地址等可以修改对应<p>点击二维码可以切换 “粤康码” 及 “粤康码场所通行” 页面。</p>",menu:[{title:"场所",icon:"@place",link:"ykm/checkin.html"},{title:"核酸",icon:"@vaccines",link:"ykm/detail.html"}]}};function render(){let a="";for(var[i,n]of Object.entries(apps))if(n.html)a+=n.html;else{let t="";if(n.menu)for(const s of n.menu){let e=s.icon||"@qr_code";e.startsWith("@")&&(e=`common/icons/${e.slice(1)}.svg`),t+=`
          <div class="app-menu-item" data-role="link" data-link="${s.link||""}">
            <img class="app-menu-app-icon" src="${e}"></img>
            <span class="app-menu-app-title">${s.title}</span>
          </div>
        `}t+=`
    <div class="app-menu-item ${localStorage.getItem("pinned")&&0<=localStorage.getItem("pinned").split(",").indexOf(i)?"active":""}" data-role="pin">
      <img class="app-menu-app-icon" src="common/icons/push_pin.svg"></img>
    </div>`,n.help_text&&(t+=`
        <div class="app-menu-item" data-role="help">
          <img class="app-menu-app-icon" src="common/icons/info.svg"></img>
        </div>
      `);let e="";if(n.contributors)for(const c of n.contributors)"namestrip"==c.style?e+=`
            <div class="app-contributor app-contributor-namestrip">
              <span class="contributor-nametag">${c.name}</span>
              <span class="contributor-description">${c.description}</span>
            </div>
          `:"text"==c.style&&(e+=`
            <div class="app-contributor">
              <span class="contributor-nametag">${c.name}</span>
              <span class="contributor-description">${c.description}</span>
            </div>
          `);a+=`
    <div class="app" data-link="${n.link||""}" data-role="app" data-app-name="${i}">
      <div class="app-content">
        ${n.icon&&`<img src="${n.icon}" style="border-color: ${n.color||"#aaa"};">`||""}
        <div class="app-description">
          <div class="app-title-wrapper">
            <span class="app-title">${n.title}</span>
            <img class="app-title-icon" src="common/icons/arrow_forward.svg"></img>
          </div>
          <div class="app-menu">
            ${t}
          </div>
        </div>
      </div>
      <div class="app-help">
        <div class="app-help-subtitle">使用说明</div>
        ${n.help_text}
        ${e?`
          <div class="app-help-subtitle">致谢</div> 
          <div class="app-contributors-container">
            ${e} 
          </div>
        `:""}
      </div>
    </div>`}document.querySelector(".apps-list").innerHTML=a;var e=[...document.querySelectorAll(".app"),...document.getElementsByClassName("app-menu-item")];if(e.length)for(const r of e){const l=r.attributes["data-link"]&&r.attributes["data-link"].value;var t=r.attributes["data-role"]&&r.attributes["data-role"].value;const p=r.closest(".app");if(l)r.addEventListener("click",e=>{e.stopPropagation(),window.location.href=l});else if("help"==t)r.addEventListener("click",e=>{e.stopPropagation(),r.classList.contains("active")?(r.classList.remove("active"),p.querySelector(".app-help").style.display="none"):(document.querySelectorAll(".app-help").forEach(e=>{e.classList.remove("active")}),r.classList.add("active"),p.querySelector(".app-help").style.display="block")});else if("pin"==t){const d=p.attributes["data-app-name"]&&p.attributes["data-app-name"].value;d&&r.addEventListener("click",e=>{e.stopPropagation();let t=localStorage.getItem("pinned")?localStorage.getItem("pinned").split(","):[];if(r.classList.contains("active"))r.classList.remove("active"),p.style.order=0,(t=t.filter(e=>e!=d)).length?localStorage.setItem("pinned",t.join(",")):localStorage.removeItem("pinned");else{r.classList.add("active"),p.style.order=-1,t.push(d),localStorage.setItem("pinned",t.join(","));try{var a=p.attributes["data-app-name"].value;navigator.serviceWorker.controller.postMessage({type:"download",content:a})}catch(e){}}})}}var o=localStorage.getItem("pinned")?localStorage.getItem("pinned").split(","):[];if(o)for(const v of document.querySelectorAll(".app")||[])o.includes(v.attributes["data-app-name"].value)&&(v.style.order=-1),v.addEventListener("touchstart",e=>{e.target.classList[0]&&e.target.classList[0].startsWith("app-menu-item")||v.classList.add("selected")}),v.addEventListener("touchmove",()=>{v.classList.remove("selected")}),v.addEventListener("touchend",()=>{v.classList.remove("selected")}),v.addEventListener("touchcancel",()=>{v.classList.remove("selected")});for(const m of document.querySelectorAll(".app-menu-item[data-role=link]")||[])m.addEventListener("touchstart",()=>{m.classList.add("active")}),m.addEventListener("touchmove",()=>{m.classList.remove("active")}),m.addEventListener("touchend",()=>{m.classList.remove("active")}),m.addEventListener("touchcancel",()=>{m.classList.remove("active")});for(const u of document.querySelectorAll(".app-help")||[])u.addEventListener("click",e=>{e.stopPropagation()});if(window.updateServiceWorker=()=>{},"serviceWorker"in navigator){navigator.serviceWorker.register("./service-worker.js",{scope:"./"}).then(e=>{window.updateServiceWorker=t=>{t&&(t.innerText="正在检查更新..."),e.addEventListener("updatefound",()=>{window.location.reload()}),e.update().then(e=>{e.installing?t&&(t.innerText="正在应用更新..."):t&&(t.innerText="未发现更新")}).catch(()=>{t&&(t.innerText="检查更新失败")})};let t=window.setInterval(()=>{navigator.serviceWorker.controller&&(window.clearInterval(t),navigator.serviceWorker.controller.postMessage({type:"download",content:["root","common","trip-card"].concat(localStorage.getItem("pinned")?localStorage.getItem("pinned").split(","):[]).filter((e,t,a)=>a.indexOf(e)==t)}),window.setInterval(()=>{navigator.serviceWorker.controller.postMessage({type:"check"})},4e3))},300)}).catch(e=>{});const g=e=>{e&&(e=document.querySelector(`.app[data-app-name=${e}]`))&&(e.querySelector(".app-title-icon").attributes.src.value="common/icons/download_done.svg")};navigator.serviceWorker.addEventListener("message",e=>{if(e.data&&"progress"!=e.data.type)if("complete"==e.data.type){document.getElementById("sw-help-text").style.display="flex";var t=e.data.content.cached;if("string"==typeof t)g(t);else for(const a of t)g(a);e.data.content.version&&(document.getElementById("last-update-version").innerText=`(${e.data.content.version})`)}else"reload"==e.data.type&&window.location.reload()})}document.getElementById("clear-local-data").addEventListener("click",()=>{navigator.serviceWorker&&navigator.serviceWorker.controller?window.confirm("要清除全部填充信息与页面缓存吗？")&&clearCache():window.confirm("要清除全部填充信息吗？")&&clearCache()}),navigator.standalone||window.matchMedia("(display-mode: standalone)").matches?document.querySelector(".sw-status").innerHTML=`
      <div class="icon-align" onclick="toggleDisplay('#pwa-usage-help');">
        <img class="icon" src="common/icons/help.svg">
        <span>帮助</span>
      </div>`:document.querySelector(".sw-status").innerHTML=`
      <div class="icon-align" onclick="toggleDisplay('#pwa-install-help');">
        <img class="icon" src="common/icons/add_box.svg">
        <span>全屏显示</span>
      </div>`}function toggleDisplay(e,t=!1){e=document.querySelector(e);if(!e)return!1;e.style.display&&"none"!=e.style.display?e.style.display="none":e.style.display=t?"flex":"block"}function clearCache(){localStorage.clear(),navigator.serviceWorker&&navigator.serviceWorker.controller?(document.querySelector(".apps-list").innerHTML=`
      <p style="text-align: center">请稍候...</p>
    `,navigator.serviceWorker.controller.postMessage({type:"clear"})):window.location.reload()}