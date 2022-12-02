const version="17b87f59",cache_name="hcsim-cache-"+version;let assets={};async function cleanResponse(e){const a=e.clone();return 0==a.redirected?a:("body"in a?Promise.resolve(a.body):a.blob()).then(e=>new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText}))}async function cacheAsset(e){console.log("[Service Worker] Searching for resource: "+(e.url||e));var a,s,t=await caches.match(e);return t||(t=await fetch(e),a=await caches.open(cache_name),console.log("[Service Worker] Caching new resource: "+(e.url||e)),s=await cleanResponse(t),await a.put(e,s),t)}self.addEventListener("install",e=>{console.log("[Service Worker] Install"),e.waitUntil(self.skipWaiting())}),self.addEventListener("fetch",e=>{e.respondWith(cacheAsset(e.request))});let cached_apps=[];async function broadcastMessage(e){var a=await self.clients.matchAll();if(a)for(const s of a)await s.postMessage(e)}async function checkCachedApps(){var a,s;await caches.open(cache_name);for([a,s]of Object.entries(assets))if(!cached_apps.includes(a)){let e=!1;for(const t of s){if(!await caches.match(t))break;e=!0}e&&cached_apps.push(a)}await broadcastMessage({type:"complete",content:{cached:cached_apps,version:version}})}function getAssetsList(e){return!e in assets?[]:"ykm"==e?assets.ykm.concat(assets["gwongzau-hc"]):"shandong-hc"==e?assets["shandong-hc"].concat(assets["weihai-hc"]):assets[e]}self.addEventListener("activate",e=>{console.log("[Service Worker] Activate"),e.waitUntil((async()=>{cached_apps=[];for(const e of await caches.keys())e!==cache_name&&await caches.delete(e);await self.clients.claim()})())}),self.addEventListener("message",t=>{t.data&&("download"==t.data.type?(async()=>{await checkCachedApps();let a=[];if("string"==typeof t.data.content){if(cached_apps.includes(t.data.content))return;a=getAssetsList(t.data.content)}else for(const e of t.data.content)cached_apps.includes(e)||(a=a.concat(getAssetsList(e)));if(a){await caches.open(cache_name);let e=0;for(const s of a)try{await cacheAsset(s),e++}catch(e){console.log("[Service Worker] Failed to download "+s)}e==a.length&&("string"==typeof t.data.content?cached_apps.push(t.data.content):cached_apps=cached_apps.concat(t.data.content)),broadcastMessage({type:"complete",content:{cached:cached_apps,version:version}})}})():"clear"==t.data.type?(async()=>{cached_apps=[];for(const e of await caches.keys())await caches.delete(e);for(const a of await self.clients.matchAll())a.postMessage({type:"reload"})})():"check"==t.data.type&&checkCachedApps())});;assets = {"root":["app.css","app.js","index.html","manifest.json","trip-card/app.css","trip-card/index.html","trip-card/manifest.json","trip-card/static/dianxin0.png","trip-card/static/g2.png","trip-card/static/gif_green.gif","trip-card/static/guangdian0.png","trip-card/static/img_arrow@2x.png","trip-card/static/liant0.png","trip-card/static/ucload.png","trip-card/static/withtext@2x.png","trip-card/static/xty0.png","trip-card/static/yidong0.png","common/base.js","common/g-icon.css","common/nav.css","ykm/checkin.html","ykm/detail.css","ykm/detail.html","ykm/index.html","ykm/manifest.json","common/components/capsule.scss","common/components/navbar.scss","ykm/static/029ff54f704e01717fb30acf1c95ad75.svg","ykm/static/0619260a7addd8f89093cd21356e0b80.png","ykm/static/150f406201f0b0e674a6abe0d1ac292f.svg","ykm/static/19bdc888e99ae0d767dcc137ba1464cf.png","ykm/static/27597bf024b2ecbf42295c976b1eca16.svg","ykm/static/2aee70d3d005c220bc9e4c64ad8c7485.png","ykm/static/2c258b7b98bdfcb70a00c769d685e9bb.svg","ykm/static/44e817161a84279f6440d4a52d117900.svg","ykm/static/4508c60464ce3888449fc79e838e73cd.svg","ykm/static/456533e61ba93e1af44a2d3a5c2fd032.gif","ykm/static/4f474259427737a36d6c292a3c2f7553.svg","ykm/static/80401c2e955ec7aa3f126ae90801efd1.png","ykm/static/88caf508845af9f014f0df2e2e687061.png","ykm/static/afe4df7c15bffd8eaef1fe02a4af8474.svg","ykm/static/b4455fa4d4a6cd9227fe4703238eeb51.svg","ykm/static/b739d24b3e9cf335c3d74126ce8e2b98.png","ykm/static/b80e47116a2514556e388a3639d93b7c.png","ykm/static/c8cd86abb92bbc77b0db2b2d7f390090.png","ykm/static/c9652a23beac030ca4899831aa87ff62.svg","ykm/static/d88e60f10d7b8da943b5e9ebac2fee7f.svg","ykm/static/dd22fed45003c852735958d99a0443e7.png","ykm/static/dfa1c9f48ba289110ab1d9f61c5fc749.jpg","ykm/static/e5cebec2f715d6d4f4c4e19b5856f836.svg","ykm/static/eb043b4b54f68bcc19242a706636561d.png","ykm/static/eb0bdecffb0b41192f65fbaee7cb5d39.png","ykm/static/f00f1d0fbb5c9f1863cf882cbd6f1933.svg","ykm/static/fd5c377f998d7e9484c862b9cb98ceb5.svg","ykm/static/mm.svg","ykm/static/reload.e5cebec2f715d6d4f4c4e19b5856f836.svg","ykm/static/yss.jpeg","common/icons/add_box.svg","common/icons/arrow_forward.svg","common/icons/download_done.svg","common/icons/help.svg","common/icons/info.svg","common/icons/map.svg","common/icons/place.svg","common/icons/push_pin.svg","common/icons/qr_code.svg","common/icons/qr_code_scanner.svg","common/icons/vaccines.svg","common/images/codeberg-logo.svg","common/images/logo.jpg","common/images/reddit-logo.png","common/images/telegram-logo.svg"]}