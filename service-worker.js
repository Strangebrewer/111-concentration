"use strict";var precacheConfig=[["/111-concentration/index.html","53d02c546230daa95e796f7e0369413b"],["/111-concentration/static/css/main.39a3428a.css","21cd2e730b937cb1c69905fbd05e195c"],["/111-concentration/static/js/main.66194791.js","5d44b9d19d2e1842fcea7c2c8117b419"],["/111-concentration/static/media/pic1.05fd1300.jpg","05fd130076f66130f0ee5b0f77b02074"],["/111-concentration/static/media/pic10.307d3527.jpeg","307d352790a17de9f39462731436460b"],["/111-concentration/static/media/pic11.4657e5e1.jpg","4657e5e1f7375045558b750dd67001a7"],["/111-concentration/static/media/pic12.28e560d1.png","28e560d1d9cacca9d4a9091c16678fa6"],["/111-concentration/static/media/pic2.f1380259.jpg","f13802595764c8922510c9a34062d2ba"],["/111-concentration/static/media/pic3.1118a12d.jpg","1118a12dd0fa0525b1d70409c222f5ee"],["/111-concentration/static/media/pic4.7064bb17.jpeg","7064bb17406f669b8df0b08f4e88e8b5"],["/111-concentration/static/media/pic5.d8174ded.jpg","d8174ded13a8e2fa70227b3ef616631f"],["/111-concentration/static/media/pic6.4bb4d82f.JPG","4bb4d82ff2636a56069ad0b22577a77f"],["/111-concentration/static/media/pic7.f123d69e.jpg","f123d69e4ef13cb68de99385b51b4a2c"],["/111-concentration/static/media/pic8.b9523484.jpg","b9523484377fedfc9242c8cccdffc77b"],["/111-concentration/static/media/pic9.ead8a93c.jpg","ead8a93cd5b8a94f9d3797b777c7e9eb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var c="/111-concentration/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});