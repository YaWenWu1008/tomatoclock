if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let l={};const o=s=>i(s,a),c={module:{uri:a},exports:l,require:o};e[a]=Promise.all(n.map((s=>c[s]||o(s)))).then((s=>(r(...s),l)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"56317123680a2fe928c9280105825bbc"},{url:"android-chrome-512x512.png",revision:"9dec4487d63b88be25109f113e7e98cc"},{url:"apple-touch-icon.png",revision:"e2f5dda180cc6cadfc9e571106406b7a"},{url:"assets/classic-3226dccc.mp3",revision:null},{url:"assets/danger-4da224a8.mp3",revision:null},{url:"assets/duck-8f2ed903.mp3",revision:null},{url:"assets/Home-69649208.js",revision:null},{url:"assets/index-36feaff9.js",revision:null},{url:"assets/index-fb1f3803.css",revision:null},{url:"assets/list-105ab501.js",revision:null},{url:"assets/List-a2c6f404.css",revision:null},{url:"assets/List-fe5b8b35.js",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/meow-c167a132.mp3",revision:null},{url:"assets/Settings-12a2ba9b.css",revision:null},{url:"assets/Settings-b77e9a94.js",revision:null},{url:"assets/settings-e7022536.js",revision:null},{url:"assets/VInput-1db70ba6.js",revision:null},{url:"assets/VInput-d3ab9d85.css",revision:null},{url:"assets/VRow-469aad74.js",revision:null},{url:"assets/webfontloader-523643f5.js",revision:null},{url:"favicon.ico",revision:"f5c905c05aa0a922c1722273dc756bce"},{url:"index.html",revision:"e05554824b397440ebd98edc0b8393de"},{url:"mstile-150x150.png",revision:"7fc3a23e8cb09f6376905f8d95986696"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"d78fe48d60a1de4f4ed3246c0e09c2f7"},{url:"splashscreens/ipad_splash.png",revision:"045953c8762e38aa78238060abab8a26"},{url:"splashscreens/ipadpro1_splash.png",revision:"a2a4121eba94e6fbffb91ac8c6195e94"},{url:"splashscreens/ipadpro2_splash.png",revision:"8cdbcbce20d5c2f216e77f8d3fd5939b"},{url:"splashscreens/ipadpro3_splash.png",revision:"5d3e1477bd4d8942fe21b368e1e61557"},{url:"splashscreens/iphone5_splash.png",revision:"a0747ca5d7aedcf05241800408f3596f"},{url:"splashscreens/iphone6_splash.png",revision:"4d7c8ff1b6e05d1d9e7be0e180abe1f0"},{url:"splashscreens/iphoneplus_splash.png",revision:"194160a7d123efc7399804bf3794937c"},{url:"splashscreens/iphonex_splash.png",revision:"7c4739e734b5eeaebd6b71f5e08f9ad0"},{url:"splashscreens/iphonexr_splash.png",revision:"858d5513cc91d0cd6abd9cb87226cb48"},{url:"splashscreens/iphonexsmax_splash.png",revision:"2adfddee0ff8e99a6ec37c50bcc45669"},{url:"tomato.png",revision:"8160e5fd1c0cfb731cd8b8a5e924baaf"},{url:"android-chrome-192x192.png",revision:"56317123680a2fe928c9280105825bbc"},{url:"android-chrome-512x512.png",revision:"9dec4487d63b88be25109f113e7e98cc"},{url:"manifest.webmanifest",revision:"229ad100baf48bf58af7b39584b1e36a"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
