// build time:Sat Mar 17 2018 17:25:33 GMT+0800 (中国标准时间)
!function(e){e.fn.navList=function(){var t=e(this);return $a=t.find("a"),b=[],$a.each(function(){var t=e(this),o=Math.max(0,t.parents("li").length-1),n=t.attr("href"),i=t.attr("target");b.push('<a class="link depth-'+o+'"'+("undefined"!=typeof i&&""!=i?' target="'+i+'"':"")+("undefined"!=typeof n&&""!=n?' href="'+n+'"':"")+'><span class="indent-'+o+'"></span>'+t.text()+"</a>")}),b.join("")},e.fn.panel=function(t){if(0==this.length){return i}if(this.length>1){for(var o=0;o<this.length;o++){e(this[o]).panel(t)}return i}var n,i=e(this),a=e("body"),r=e(window),s=i.attr("id");return n=e.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:i,visibleClass:"visible"},t),"jQuery"!=typeof n.target&&(n.target=e(n.target)),i._hide=function(e){n.target.hasClass(n.visibleClass)&&(e&&(e.preventDefault(),e.stopPropagation()),n.target.removeClass(n.visibleClass),window.setTimeout(function(){n.resetScroll&&i.scrollTop(0),n.resetForms&&i.find("form").each(function(){this.reset()})},n.delay))},i.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),n.hideOnClick&&(i.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),i.on("click","a",function(t){var o=e(this),a=o.attr("href"),r=o.attr("target");a&&"#"!=a&&""!=a&&a!="#"+s&&(t.preventDefault(),t.stopPropagation(),i._hide(),window.setTimeout(function(){"_blank"==r?window.open(a):window.location.href=a},n.delay+10))})),i.on("touchstart",function(e){i.touchPosX=e.originalEvent.touches[0].pageX,i.touchPosY=e.originalEvent.touches[0].pageY}),i.on("touchmove",function(e){if(null!==i.touchPosX&&null!==i.touchPosY){var t=i.touchPosX-e.originalEvent.touches[0].pageX,o=i.touchPosY-e.originalEvent.touches[0].pageY,a=i.outerHeight(),r=i.get(0).scrollHeight-i.scrollTop();if(n.hideOnSwipe){var s=!1,p=20,c=50;switch(n.side){case"left":s=p>o&&o>-1*p&&t>c;break;case"right":s=p>o&&o>-1*p&&-1*c>t;break;case"top":s=p>t&&t>-1*p&&o>c;break;case"bottom":s=p>t&&t>-1*p&&-1*c>o}if(s){return i.touchPosX=null,i.touchPosY=null,i._hide(),!1}}(i.scrollTop()<0&&0>o||r>a-2&&a+2>r&&o>0)&&(e.preventDefault(),e.stopPropagation())}}),i.on("click touchend touchstart touchmove",function(e){e.stopPropagation()}),i.on("click",'a[href="#'+s+'"]',function(e){e.preventDefault(),e.stopPropagation(),n.target.removeClass(n.visibleClass)}),a.on("click touchend",function(e){i._hide(e)}),a.on("click",'a[href="#'+s+'"]',function(e){e.preventDefault(),e.stopPropagation(),n.target.toggleClass(n.visibleClass)}),n.hideOnEscape&&r.on("keydown",function(e){27==e.keyCode&&i._hide(e)}),i},e.fn.placeholder=function(){if("undefined"!=typeof document.createElement("input").placeholder){return e(this)}if(0==this.length){return o}if(this.length>1){for(var t=0;t<this.length;t++){e(this[t]).placeholder()}return o}var o=e(this);return o.find("input[type=text],textarea").each(function(){var t=e(this);(""==t.val()||t.val()==t.attr("placeholder"))&&t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("blur",function(){var t=e(this);t.attr("name").match(/-polyfill-field$/)||""==t.val()&&t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("focus",function(){var t=e(this);t.attr("name").match(/-polyfill-field$/)||t.val()==t.attr("placeholder")&&t.removeClass("polyfill-placeholder").val("")}),o.find("input[type=password]").each(function(){var t=e(this),o=e(e("<div>").append(t.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=t.attr("id")&&o.attr("id",t.attr("id")+"-polyfill-field"),""!=t.attr("name")&&o.attr("name",t.attr("name")+"-polyfill-field"),o.addClass("polyfill-placeholder").val(o.attr("placeholder")).insertAfter(t),""==t.val()?t.hide():o.hide(),t.on("blur",function(e){e.preventDefault();var o=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]");""==t.val()&&(t.hide(),o.show())}),o.on("focus",function(e){e.preventDefault();var t=o.parent().find("input[name="+o.attr("name").replace("-polyfill-field","")+"]");o.hide(),t.show().focus()}).on("keypress",function(e){e.preventDefault(),o.val("")})}),o.on("submit",function(){o.find("input[type=text],input[type=password],textarea").each(function(t){var o=e(this);o.attr("name").match(/-polyfill-field$/)&&o.attr("name",""),o.val()==o.attr("placeholder")&&(o.removeClass("polyfill-placeholder"),o.val(""))})}).on("reset",function(t){t.preventDefault(),o.find("select").val(e("option:first").val()),o.find("input,textarea").each(function(){var t,o=e(this);switch(o.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":o.val(o.attr("defaultValue")),t=o.parent().find("input[name="+o.attr("name")+"-polyfill-field]"),""==o.val()?(o.hide(),t.show()):(o.show(),t.hide());break;case"checkbox":case"radio":o.attr("checked",o.attr("defaultValue"));break;case"text":case"textarea":o.val(o.attr("defaultValue")),""==o.val()&&(o.addClass("polyfill-placeholder"),o.val(o.attr("placeholder")));break;default:o.val(o.attr("defaultValue"))}})}),o},e.prioritize=function(t,o){var n="__prioritize";"jQuery"!=typeof t&&(t=e(t)),t.each(function(){var t,i=e(this),a=i.parent();if(0!=a.length){if(i.data(n)){if(o){return}t=i.data(n),i.insertAfter(t),i.removeData(n)}else{if(!o){return}if(t=i.prev(),0==t.length){return}i.prependTo(a),i.data(n,t)}}})}}(jQuery);var skel=function(){var e={breakpointIds:null,events:{},isInit:!1,obj:{attachments:{},breakpoints:{},head:null,states:{}},sd:"/",state:null,stateHandlers:{},stateId:"",vars:{},DOMReady:null,indexOf:null,isArray:null,iterate:null,matchesMedia:null,extend:function(t,o){e.iterate(o,function(n){e.isArray(o[n])?(e.isArray(t[n])||(t[n]=[]),e.extend(t[n],o[n])):"object"==typeof o[n]?("object"!=typeof t[n]&&(t[n]={}),e.extend(t[n],o[n])):t[n]=o[n]})},newStyle:function(e){var t=document.createElement("style");return t.type="text/css",t.innerHTML=e,t},_canUse:null,canUse:function(t){e._canUse||(e._canUse=document.createElement("div"));var o=e._canUse.style,n=t.charAt(0).toUpperCase()+t.slice(1);return t in o||"Moz"+n in o||"Webkit"+n in o||"O"+n in o||"ms"+n in o},on:function(t,o){var n=t.split(/[\s]+/);return e.iterate(n,function(t){var i=n[t];if(e.isInit){if("init"==i){return void o()}if("change"==i){o()}else{var a=i.charAt(0);if("+"==a||"!"==a){var r=i.substring(1);if(r in e.obj.breakpoints){if("+"==a&&e.obj.breakpoints[r].active){o()}else{if("!"==a&&!e.obj.breakpoints[r].active){return void o()}}}}}}e.events[i]||(e.events[i]=[]),e.events[i].push(o)}),e},trigger:function(t){return e.events[t]&&0!=e.events[t].length?(e.iterate(e.events[t],function(o){e.events[t][o]()}),e):void 0},breakpoint:function(t){return e.obj.breakpoints[t]},breakpoints:function(t){function o(e,t){this.name=this.id=e,this.media=t,this.active=!1,this.wasActive=!1}return o.prototype.matches=function(){return e.matchesMedia(this.media)},o.prototype.sync=function(){this.wasActive=this.active,this.active=this.matches()},e.iterate(t,function(n){e.obj.breakpoints[n]=new o(n,t[n])}),window.setTimeout(function(){e.poll()},0),e},addStateHandler:function(t,o){e.stateHandlers[t]=o},callStateHandler:function(t){var o=e.stateHandlers[t]();e.iterate(o,function(t){e.state.attachments.push(o[t])})},changeState:function(t){e.iterate(e.obj.breakpoints,function(t){e.obj.breakpoints[t].sync()}),e.vars.lastStateId=e.stateId,e.stateId=t,e.breakpointIds=e.stateId===e.sd?[]:e.stateId.substring(1).split(e.sd),e.obj.states[e.stateId]?e.state=e.obj.states[e.stateId]:(e.obj.states[e.stateId]={attachments:[]},e.state=e.obj.states[e.stateId],e.iterate(e.stateHandlers,e.callStateHandler)),e.detachAll(e.state.attachments),e.attachAll(e.state.attachments),e.vars.stateId=e.stateId,e.vars.state=e.state,e.trigger("change"),e.iterate(e.obj.breakpoints,function(t){e.obj.breakpoints[t].active?e.obj.breakpoints[t].wasActive||e.trigger("+"+t):e.obj.breakpoints[t].wasActive&&e.trigger("-"+t)})},generateStateConfig:function(t,o){var n={};return e.extend(n,t),e.iterate(e.breakpointIds,function(t){e.extend(n,o[e.breakpointIds[t]])}),n},getStateId:function(){var t="";return e.iterate(e.obj.breakpoints,function(o){var n=e.obj.breakpoints[o];n.matches()&&(t+=e.sd+n.id)}),t},poll:function(){var t="";t=e.getStateId(),""===t&&(t=e.sd),t!==e.stateId&&e.changeState(t)},_attach:null,attach:function(t){var o=e.obj.head,n=t.element;return n.parentNode&&n.parentNode.tagName?!1:(e._attach||(e._attach=o.firstChild),o.insertBefore(n,e._attach.nextSibling),t.permanent&&(e._attach=n),!0)},attachAll:function(t){var o=[];e.iterate(t,function(e){o[t[e].priority]||(o[t[e].priority]=[]),o[t[e].priority].push(t[e])}),o.reverse(),e.iterate(o,function(t){e.iterate(o[t],function(n){e.attach(o[t][n])})})},detach:function(e){var t=e.element;return e.permanent||!t.parentNode||t.parentNode&&!t.parentNode.tagName?!1:(t.parentNode.removeChild(t),!0)},detachAll:function(t){var o={};e.iterate(t,function(e){o[t[e].id]=!0}),e.iterate(e.obj.attachments,function(t){t in o||e.detach(e.obj.attachments[t])})},attachment:function(t){return t in e.obj.attachments?e.obj.attachments[t]:null},newAttachment:function(t,o,n,i){return e.obj.attachments[t]={id:t,element:o,priority:n,permanent:i}},init:function(){e.initMethods(),e.initVars(),e.initEvents(),e.obj.head=document.getElementsByTagName("head")[0],e.isInit=!0,e.trigger("init")},initEvents:function(){e.on("resize",function(){e.poll()}),e.on("orientationChange",function(){e.poll()}),e.DOMReady(function(){e.trigger("ready")}),window.onload&&e.on("load",window.onload),window.onload=function(){e.trigger("load")},window.onresize&&e.on("resize",window.onresize),window.onresize=function(){e.trigger("resize")},window.onorientationchange&&e.on("orientationChange",window.onorientationchange),window.onorientationchange=function(){e.trigger("orientationChange")}},initMethods:function(){document.addEventListener?!function(t,o){e.DOMReady=o()}("domready",function(){function e(e){for(a=1;e=o.shift();){e()}}var t,o=[],n=document,i="DOMContentLoaded",a=/^loaded|^c/.test(n.readyState);return n.addEventListener(i,t=function(){n.removeEventListener(i,t),e()}),function(e){a?e():o.push(e)}}):!function(t,o){e.DOMReady=o()}("domready",function(e){function t(e){for(h=1;e=n.shift();){e()}}var o,n=[],i=!1,a=document,r=a.documentElement,s=r.doScroll,p="DOMContentLoaded",c="addEventListener",l="onreadystatechange",u="readyState",d=s?/^loaded|^c/:/^loaded|c/,h=d.test(a[u]);return a[c]&&a[c](p,o=function(){a.removeEventListener(p,o,i),t()},i),s&&a.attachEvent(l,o=function(){/^c/.test(a[u])&&(a.detachEvent(l,o),t())}),e=s?function(t){self!=top?h?t():n.push(t):function(){try{r.doScroll("left")}catch(o){return setTimeout(function(){e(t)},50)}t()}()}:function(e){h?e():n.push(e)}}),Array.prototype.indexOf?e.indexOf=function(e,t){return e.indexOf(t)}:e.indexOf=function(e,t){if("string"==typeof e){return e.indexOf(t)}var o,n,i=t?t:0;if(!this){throw new TypeError}if(n=this.length,0===n||i>=n){return-1}for(0>i&&(i=n-Math.abs(i)),o=i;n>o;o++){if(this[o]===e){return o}}return-1},Array.isArray?e.isArray=function(e){return Array.isArray(e)}:e.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},Object.keys?e.iterate=function(e,t){if(!e){return[]}var o,n=Object.keys(e);for(o=0;n[o]&&t(n[o],e[n[o]])!==!1;o++){}}:e.iterate=function(e,t){if(!e){return[]}var o;for(o in e){if(Object.prototype.hasOwnProperty.call(e,o)&&t(o,e[o])===!1){break}}},window.matchMedia?e.matchesMedia=function(e){return""==e?!0:window.matchMedia(e).matches}:window.styleMedia||window.media?e.matchesMedia=function(e){if(""==e){return!0}var t=window.styleMedia||window.media;return t.matchMedium(e||"all")}:window.getComputedStyle?e.matchesMedia=function(e){if(""==e){return!0}var t=document.createElement("style"),o=document.getElementsByTagName("script")[0],n=null;t.type="text/css",t.id="matchmediajs-test",o.parentNode.insertBefore(t,o),n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=i:t.textContent=i,"1px"===n.width}:e.matchesMedia=function(e){if(""==e){return!0}var t,o,n,i,a={"min-width":null,"max-width":null},r=!1;for(n=e.split(/\s+and\s+/),t=0;t<n.length;t++){o=n[t],"("==o.charAt(0)&&(o=o.substring(1,o.length-1),i=o.split(/:\s+/),2==i.length&&(a[i[0].replace(/^\s+|\s+$/g,"")]=parseInt(i[1]),r=!0))}if(!r){return!1}var s=document.documentElement.clientWidth,p=document.documentElement.clientHeight;return null!==a["min-width"]&&s<a["min-width"]||null!==a["max-width"]&&s>a["max-width"]||null!==a["min-height"]&&p<a["min-height"]||null!==a["max-height"]&&p>a["max-height"]?!1:!0},navigator.userAgent.match(/MSIE ([0-9]+)/)&&RegExp.$1<9&&(e.newStyle=function(e){var t=document.createElement("span");return t.innerHTML='&nbsp;<style type="text/css">'+e+"</style>",t})},initVars:function(){var t,o,n,i=navigator.userAgent;t="other",o=0,n=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],e.iterate(n,function(e,n){return i.match(n[1])?(t=n[0],o=parseFloat(RegExp.$1),!1):void 0}),e.vars.browser=t,e.vars.browserVersion=o,t="other",o=0,n=[["ios",/([0-9_]+) like Mac OS X/,function(e){return e.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(e){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(e){return e.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null]],e.iterate(n,function(e,n){return i.match(n[1])?(t=n[0],o=parseFloat(n[2]?n[2](RegExp.$1):RegExp.$1),!1):void 0}),e.vars.os=t,e.vars.osVersion=o,e.vars.IEVersion="ie"==e.vars.browser?e.vars.browserVersion:99,e.vars.touch="wp"==e.vars.os?navigator.msMaxTouchPoints>0:!!("ontouchstart"in window),e.vars.mobile="wp"==e.vars.os||"android"==e.vars.os||"ios"==e.vars.os||"bb"==e.vars.os}};return e.init(),e}();!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.skel=t()}(this,function(){return skel});!function(e){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"}),e(function(){var t=e(window),o=e("body");e("#wrapper");if(skel.vars.IEVersion<12&&o.addClass("ie"),skel.vars.mobile&&o.addClass("touch"),skel.canUse("transition")){o.addClass("loading"),t.on("load",function(){window.setTimeout(function(){o.removeClass("loading")},100)});var n;t.on("resize",function(){window.clearTimeout(n),o.addClass("resizing"),n=window.setTimeout(function(){o.removeClass("resizing")},100)})}t.scrollTop(0),e("form").placeholder();var i=e(".panel");i.each(function(){var t=e(this),n=e('[href="#'+t.attr("id")+'"]'),a=e('<div class="closer" />').appendTo(t);a.on("click",function(e){t.trigger("---hide")}),t.on("click",function(e){e.stopPropagation()}).on("---toggle",function(){t.hasClass("active")?t.triggerHandler("---hide"):t.triggerHandler("---show")}).on("---show",function(){o.hasClass("content-active")&&i.trigger("---hide"),t.addClass("active"),n.addClass("active"),o.addClass("content-active")}).on("---hide",function(){t.removeClass("active"),n.removeClass("active"),o.removeClass("content-active")}),n.removeAttr("href").css("cursor","pointer").on("click",function(e){e.preventDefault(),e.stopPropagation(),t.trigger("---toggle")})}),o.on("click",function(e){o.hasClass("content-active")&&(e.preventDefault(),e.stopPropagation(),i.trigger("---hide"))}),t.on("keyup",function(e){27==e.keyCode&&o.hasClass("content-active")&&(e.preventDefault(),e.stopPropagation(),i.trigger("---hide"))});var a=e("#header");a.find("a").each(function(){var t=e(this),o=t.attr("href");o&&"#"!=o.charAt(0)&&t.removeAttr("href").css("cursor","pointer").on("click",function(e){e.preventDefault(),e.stopPropagation(),window.location.href=o})});var r=e("#footer");r.find(".copyright").each(function(){var t=e(this),o=t.parent(),n=o.parent().children().last();skel.on("+medium",function(){t.appendTo(n)}).on("-medium",function(){t.appendTo(o)})});var s=e("#main");s.children(".thumb").each(function(){var t,o=e(this),n=o.find(".image"),i=n.children("img");0!=n.length&&((t=i.data("position"))&&n.css("background-position",t),i.hide(),skel.vars.IEVersion<11&&o.css("cursor","pointer").on("click",function(){n.trigger("click")}))}),s.poptrox({baseZIndex:2e4,caption:function(e){var t="";return e.nextAll().each(function(){t+=this.outerHTML}),t},fadeSpeed:300,onPopupClose:function(){o.removeClass("modal-active")},onPopupOpen:function(){o.addClass("modal-active")},overlayOpacity:0,popupCloserText:"",popupHeight:150,popupLoaderText:"",popupSpeed:300,popupWidth:150,selector:".thumb > a.image",usePopupCaption:!0,usePopupCloser:!0,usePopupDefaultStyling:!1,usePopupForceClose:!0,usePopupLoader:!0,usePopupNav:!0,windowMargin:50}),skel.on("-xsmall",function(){s[0]._poptrox.windowMargin=50}).on("+xsmall",function(){s[0]._poptrox.windowMargin=0})})}(jQuery);!function(e){e.fn.poptrox_disableSelection=function(){return e(this).css("user-select","none").css("-khtml-user-select","none").css("-moz-user-select","none").css("-o-user-select","none").css("-webkit-user-select","none")},e.fn.poptrox=function(t){function o(){i=e(window).width(),a=e(window).height()+r.windowHeightPad;var t=Math.abs(v.width()-v.outerWidth()),o=Math.abs(v.height()-v.outerHeight()),n=(w.width(),w.height(),i-2*r.windowMargin-t),s=a-2*r.windowMargin-o;v.css("min-width",r.popupWidth).css("min-height",r.popupHeight),m.children().css("max-width",n).css("max-height",s)}if(0==this.length){return e(this)}if(this.length>1){for(var n=0;n<this.length;n++){e(this[n]).poptrox(t)}return e(this)}var i,a,r=e.extend({preload:!1,baseZIndex:1e3,fadeSpeed:300,overlayColor:"#000000",overlayOpacity:.6,overlayClass:"poptrox-overlay",windowMargin:50,windowHeightPad:0,selector:"a",caption:null,parent:"body",popupSpeed:300,popupWidth:200,popupHeight:100,popupIsFixed:!1,useBodyOverflow:!1,usePopupEasyClose:!0,usePopupForceClose:!1,usePopupLoader:!0,usePopupCloser:!0,usePopupCaption:!1,usePopupNav:!1,usePopupDefaultStyling:!0,popupBackgroundColor:"#FFFFFF",popupTextColor:"#000000",popupLoaderTextSize:"2em",popupCloserBackgroundColor:"#000000",popupCloserTextColor:"#FFFFFF",popupCloserTextSize:"20px",popupPadding:10,popupCaptionHeight:60,popupCaptionTextSize:null,popupBlankCaptionText:"(untitled)",popupCloserText:"&#215;",popupLoaderText:"&bull;&bull;&bull;&bull;",popupClass:"poptrox-popup",popupSelector:null,popupLoaderSelector:".loader",popupCloserSelector:".closer",popupCaptionSelector:".caption",popupNavPreviousSelector:".nav-previous",popupNavNextSelector:".nav-next",onPopupClose:null,onPopupOpen:null},t),s=e(this),p=e("body"),l=e('<div class="'+r.overlayClass+'"></div>'),u=e(window),d=[],h=0,f=!1,g=new Array;r.usePopupLoader||(r.popupLoaderSelector=null),r.usePopupCloser||(r.popupCloserSelector=null),r.usePopupCaption||(r.popupCaptionSelector=null),r.usePopupNav||(r.popupNavPreviousSelector=null,r.popupNavNextSelector=null);var v;v=e(r.popupSelector?r.popupSelector:'<div class="'+r.popupClass+'">'+(r.popupLoaderSelector?'<div class="loader">'+r.popupLoaderText+"</div>":"")+'<div class="pic"></div>'+(r.popupCaptionSelector?'<div class="caption"></div>':"")+(r.popupCloserSelector?'<span class="closer">'+r.popupCloserText+"</span>":"")+(r.popupNavPreviousSelector?'<div class="nav-previous"></div>':"")+(r.popupNavNextSelector?'<div class="nav-next"></div>':"")+"</div>");var m=v.find(".pic"),w=e(),b=v.find(r.popupLoaderSelector),x=v.find(r.popupCaptionSelector),y=v.find(r.popupCloserSelector),C=v.find(r.popupNavNextSelector),k=v.find(r.popupNavPreviousSelector),S=C.add(k);if(r.usePopupDefaultStyling&&(v.css("background",r.popupBackgroundColor).css("color",r.popupTextColor).css("padding",r.popupPadding+"px"),x.length>0&&(v.css("padding-bottom",r.popupCaptionHeight+"px"),x.css("position","absolute").css("left","0").css("bottom","0").css("width","100%").css("text-align","center").css("height",r.popupCaptionHeight+"px").css("line-height",r.popupCaptionHeight+"px"),r.popupCaptionTextSize&&x.css("font-size",popupCaptionTextSize)),y.length>0&&y.html(r.popupCloserText).css("font-size",r.popupCloserTextSize).css("background",r.popupCloserBackgroundColor).css("color",r.popupCloserTextColor).css("display","block").css("width","40px").css("height","40px").css("line-height","40px").css("text-align","center").css("position","absolute").css("text-decoration","none").css("outline","0").css("top","0").css("right","-40px"),b.length>0&&b.html("").css("position","relative").css("font-size",r.popupLoaderTextSize).on("startSpinning",function(t){var o=e("<div>"+r.popupLoaderText+"</div>");o.css("height",Math.floor(r.popupHeight/2)+"px").css("overflow","hidden").css("line-height",Math.floor(r.popupHeight/2)+"px").css("text-align","center").css("margin-top",Math.floor((v.height()-o.height()+(x.length>0?x.height():0))/2)).css("color",r.popupTextColor?r.popupTextColor:"").on("xfin",function(){o.fadeTo(300,.5,function(){o.trigger("xfout")})}).on("xfout",function(){o.fadeTo(300,.05,function(){o.trigger("xfin")})}).trigger("xfin"),b.append(o)}).on("stopSpinning",function(e){var t=b.find("div");t.remove()}),2==S.length)){S.css("font-size","75px").css("text-align","center").css("color","#fff").css("text-shadow","none").css("height","100%").css("position","absolute").css("top","0").css("opacity","0.35").css("cursor","pointer").css("box-shadow","inset 0px 0px 10px 0px rgba(0,0,0,0)").poptrox_disableSelection();var P,T;r.usePopupEasyClose?(P="100px",T="100px"):(P="75%",T="25%"),C.css("right","0").css("width",P).html('<div style="position: absolute; height: 100px; width: 125px; top: 50%; right: 0; margin-top: -50px;">&gt;</div>'),k.css("left","0").css("width",T).html('<div style="position: absolute; height: 100px; width: 125px; top: 50%; left: 0; margin-top: -50px;">&lt;</div>')}return u.on("resize orientationchange",function(){o()}),x.on("update",function(e,t){t&&0!=t.length||(t=r.popupBlankCaptionText),x.html(t)}),y.css("cursor","pointer").on("click",function(e){return e.preventDefault(),e.stopPropagation(),v.trigger("poptrox_close"),!0}),C.on("click",function(e){e.stopPropagation(),e.preventDefault(),v.trigger("poptrox_next")}),k.on("click",function(e){e.stopPropagation(),e.preventDefault(),v.trigger("poptrox_previous")}),l.css("position","fixed").css("left",0).css("top",0).css("z-index",r.baseZIndex).css("width","100%").css("height","100%").css("text-align","center").css("cursor","pointer").appendTo(r.parent).prepend('<div style="display:inline-block;height:100%;vertical-align:middle;"></div>').append('<div style="position:absolute;left:0;top:0;width:100%;height:100%;background:'+r.overlayColor+";opacity:"+r.overlayOpacity+";filter:alpha(opacity="+100*r.overlayOpacity+');"></div>').hide().on("touchmove",function(e){return!1}).on("click",function(e){e.preventDefault(),e.stopPropagation(),v.trigger("poptrox_close")}),v.css("display","inline-block").css("vertical-align","middle").css("position","relative").css("z-index",1).css("cursor","auto").appendTo(l).hide().on("poptrox_next",function(){var e=h+1;e>=d.length&&(e=0),v.trigger("poptrox_switch",[e])}).on("poptrox_previous",function(){var e=h-1;0>e&&(e=d.length-1),v.trigger("poptrox_switch",[e])}).on("poptrox_reset",function(){o(),v.data("width",r.popupWidth).data("height",r.popupHeight),b.hide().trigger("stopSpinning"),x.hide(),y.hide(),S.hide(),m.hide(),w.attr("src","").detach()}).on("poptrox_open",function(e,t){return f?!0:(f=!0,r.useBodyOverflow&&p.css("overflow","hidden"),r.onPopupOpen&&r.onPopupOpen(),v.addClass("loading"),void l.fadeTo(r.fadeSpeed,1,function(){v.trigger("poptrox_switch",[t,!0])}))}).on("poptrox_switch",function(t,n,i){var a;if(!i&&f){return!0}if(f=!0,v.addClass("loading").css("width",v.data("width")).css("height",v.data("height")),x.hide(),w.attr("src")&&w.attr("src",""),w.detach(),a=d[n],w=a.object,w.off("load"),m.css("text-indent","-9999px").show().append(w),"ajax"==a.type?e.get(a.src,function(e){w.html(e),w.trigger("load")}):w.attr("src",a.src),"image"!=a.type){var s,p;s=a.width,p=a.height,"%"==s.slice(-1)&&(s=parseInt(s.substring(0,s.length-1))/100*u.width()),"%"==p.slice(-1)&&(p=parseInt(p.substring(0,p.length-1))/100*u.height()),w.css("position","relative").css("outline","0").css("z-index",r.baseZIndex+100).width(s).height(p)}b.trigger("startSpinning").fadeIn(300),v.show(),r.popupIsFixed?(v.removeClass("loading").width(r.popupWidth).height(r.popupHeight),w.load(function(){w.off("load"),b.hide().trigger("stopSpinning"),x.trigger("update",[a.captionText]).fadeIn(r.fadeSpeed),y.fadeIn(r.fadeSpeed),m.css("text-indent",0).hide().fadeIn(r.fadeSpeed,function(){f=!1}),h=n,S.fadeIn(r.fadeSpeed)})):w.load(function(){o(),w.off("load"),b.hide().trigger("stopSpinning");var e=w.width(),t=w.height(),i=function(){x.trigger("update",[a.captionText]).fadeIn(r.fadeSpeed),y.fadeIn(r.fadeSpeed),m.css("text-indent",0).hide().fadeIn(r.fadeSpeed,function(){f=!1}),h=n,S.fadeIn(r.fadeSpeed),v.removeClass("loading").data("width",e).data("height",t).css("width","auto").css("height","auto")};e==v.data("width")&&t==v.data("height")?i():v.animate({width:e,height:t},r.popupSpeed,"swing",i)}),"image"!=a.type&&w.trigger("load")}).on("poptrox_close",function(){return f&&!r.usePopupForceClose?!0:(f=!0,v.hide().trigger("poptrox_reset"),r.onPopupClose&&r.onPopupClose(),void l.fadeOut(r.fadeSpeed,function(){r.useBodyOverflow&&p.css("overflow","auto"),f=!1}))}).trigger("poptrox_reset"),r.usePopupEasyClose?(x.on("click","a",function(e){e.stopPropagation()}),v.css("cursor","pointer").on("click",function(e){e.stopPropagation(),e.preventDefault(),v.trigger("poptrox_close")})):v.on("click",function(e){e.stopPropagation()}),u.keydown(function(e){if(v.is(":visible")){switch(e.keyCode){case 37:case 32:if(r.usePopupNav){return v.trigger("poptrox_previous"),!1}break;case 39:if(r.usePopupNav){return v.trigger("poptrox_next"),!1}break;case 27:return v.trigger("poptrox_close"),!1}}}),s.find(r.selector).each(function(t){var o,n,i=e(this),a=i.find("img"),s=i.data("poptrox");if("ignore"!=s&&i.attr("href")){if(o={src:i.attr("href"),captionText:a.attr("title"),width:null,height:null,type:null,object:null,options:null},r.caption){if("function"==typeof r.caption){c=r.caption(i)}else{if("selector"in r.caption){var p;p=i.find(r.caption.selector),"attribute"in r.caption?c=p.attr(r.caption.attribute):(c=p.html(),r.caption.remove===!0&&p.remove())}}}else{c=a.attr("title")}if(o.captionText=c,s){var l=s.split(",");0 in l&&(o.type=l[0]),1 in l&&(n=l[1].match(/([0-9%]+)x([0-9%]+)/),n&&3==n.length&&(o.width=n[1],o.height=n[2])),2 in l&&(o.options=l[2])}if(!o.type){switch(n=o.src.match(/\/\/([a-z0-9\.]+)\/.*/),(!n||n.length<2)&&(n=[!1]),n[1]){case"api.soundcloud.com":o.type="soundcloud";break;case"youtu.be":o.type="youtube";break;case"vimeo.com":o.type="vimeo";break;case"wistia.net":o.type="wistia";break;case"bcove.me":o.type="bcove";break;default:o.type="image"}}switch(n=o.src.match(/\/\/[a-z0-9\.]+\/(.*)/),o.type){case"iframe":o.object=e('<iframe src="" frameborder="0"></iframe>'),o.object.on("click",function(e){e.stopPropagation()}).css("cursor","auto"),o.width&&o.height||(o.width="600",o.height="400");break;case"ajax":o.object=e('<div class="poptrox-ajax"></div>'),o.object.on("click",function(e){e.stopPropagation()}).css("cursor","auto").css("overflow","auto"),o.width&&o.height||(o.width="600",o.height="400");break;case"soundcloud":o.object=e('<iframe scrolling="no" frameborder="no" src=""></iframe>'),o.src="//w.soundcloud.com/player/?url="+escape(o.src)+(o.options?"&"+o.options:""),o.width="600",o.height="166";break;case"youtube":o.object=e('<iframe src="" frameborder="0" allowfullscreen="1"></iframe>'),o.src="//www.youtube.com/embed/"+n[1]+(o.options?"?"+o.options:""),o.width&&o.height||(o.width="800",o.height="480");break;case"vimeo":o.object=e('<iframe src="" frameborder="0" allowFullScreen="1"></iframe>'),o.src="//player.vimeo.com/video/"+n[1]+(o.options?"?"+o.options:""),o.width&&o.height||(o.width="800",o.height="480");break;case"wistia":o.object=e('<iframe src="" frameborder="0" allowFullScreen="1"></iframe>'),o.src="//fast.wistia.net/"+n[1]+(o.options?"?"+o.options:""),o.width&&o.height||(o.width="800",o.height="480");break;case"bcove":o.object=e('<iframe src="" frameborder="0" allowFullScreen="1" width="100%"></iframe>'),o.src="//bcove.me/"+n[1]+(o.options?"?"+o.options:""),o.width&&o.height||(o.width="640",o.height="360");break;default:if(o.object=e('<img src="" alt="" style="vertical-align:bottom" />'),r.preload){var n=document.createElement("img");n.src=o.src,g.push(n)}o.width=i.attr("width"),o.height=i.attr("height")}"file:"==window.location.protocol&&o.src.match(/^\/\//)&&(o.src="http:"+o.src),d.push(o),a.removeAttr("title"),i.removeAttr("href").css("cursor","pointer").css("outline",0).on("click",function(e){e.preventDefault(),e.stopPropagation(),v.trigger("poptrox_open",[t])})}}),s.prop("_poptrox",r),s}}(jQuery);!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t=e.event.dispatch||e.event.handle,o=e.event.special,n="D"+ +new Date,i="D"+(+new Date+1);o.scrollstart={setup:function(i){var a,r=e.extend({latency:o.scrollstop.latency},i),s=function(e){var o=this,n=arguments;a?clearTimeout(a):(e.type="scrollstart",t.apply(o,n)),a=setTimeout(function(){a=null},r.latency)};e(this).bind("scroll",s).data(n,s)},teardown:function(){e(this).unbind("scroll",e(this).data(n))}},o.scrollstop={latency:250,setup:function(n){var a,r=e.extend({latency:o.scrollstop.latency},n),s=function(e){var o=this,n=arguments;a&&clearTimeout(a),a=setTimeout(function(){a=null,e.type="scrollstop",t.apply(o,n)},r.latency)};e(this).bind("scroll",s).data(i,s)},teardown:function(){e(this).unbind("scroll",e(this).data(i))}}});
//rebuild by neat 