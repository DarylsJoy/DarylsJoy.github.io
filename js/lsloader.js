// build time:Mon Mar 19 2018 01:06:48 GMT+0800 (中国标准时间)
(function(){window.lsloader={jsRunSequence:[],jsnamemap:{},cssnamemap:{}};lsloader.removeLS=function(e){try{localStorage.removeItem(e)}catch(t){}};lsloader.setLS=function(e,t){try{localStorage.setItem(e,t)}catch(s){}};lsloader.getLS=function(e){var t="";try{t=localStorage.getItem(e)}catch(s){t=""}return t};versionString="/*"+(window.materialVersion||"unknownVersion")+"*/";lsloader.clean=function(){try{var e=[];for(var t=0;t<localStorage.length;t++){e.push(localStorage.key(t))}e.forEach(function(e){var t=lsloader.getLS(e);if(window.oldVersion){var s=window.oldVersion.reduce(function(e,s){return e||t.indexOf("/*"+s+"*/")!==-1},false);if(s){lsloader.removeLS(e)}}})}catch(s){}};lsloader.clean();lsloader.load=function(e,t,s,n){if(typeof s==="boolean"){n=s;s=undefined}n=n||false;s=s||function(){};var a;a=this.getLS(e);if(a&&a.indexOf(versionString)===-1){this.removeLS(e);this.requestResource(e,t,s,n);return}if(a){var i=a.split(versionString)[0];if(i!=t){console.log("reload:"+t);this.removeLS(e);this.requestResource(e,t,s,n);return}a=a.split(versionString)[1];if(n){this.jsRunSequence.push({name:e,code:a});this.runjs(t,e,a)}else{document.getElementById(e).appendChild(document.createTextNode(a));s()}}else{this.requestResource(e,t,s,n)}};lsloader.requestResource=function(e,t,s,n){var a=this;if(n){this.iojs(t,e,function(e,t,s){a.setLS(t,e+versionString+s);a.runjs(e,t,s)})}else{this.iocss(t,e,function(s){document.getElementById(e).appendChild(document.createTextNode(s));a.setLS(e,t+versionString+s)},s)}};lsloader.iojs=function(e,t,s){var n=this;n.jsRunSequence.push({name:t,code:""});try{var a=new XMLHttpRequest;a.open("get",e,true);a.onreadystatechange=function(){if(a.readyState==4){if(a.status>=200&&a.status<300||a.status==304){if(a.response!=""){s(e,t,a.response);return}}n.jsfallback(e,t)}};a.send(null)}catch(i){n.jsfallback(e,t)}};lsloader.iocss=function(e,t,s,n){var a=this;try{var i=new XMLHttpRequest;i.open("get",e,true);i.onreadystatechange=function(){if(i.readyState==4){if(i.status>=200&&i.status<300||i.status==304){if(i.response!=""){s(i.response);n();return}}a.cssfallback(e,t,n)}};i.send(null)}catch(r){a.cssfallback(e,t,n)}};lsloader.iofonts=function(e,t,s,n){var a=this;try{var i=new XMLHttpRequest;i.open("get",e,true);i.onreadystatechange=function(){if(i.readyState==4){if(i.status>=200&&i.status<300||i.status==304){if(i.response!=""){s(i.response);n();return}}a.cssfallback(e,t,n)}};i.send(null)}catch(r){a.cssfallback(e,t,n)}};lsloader.runjs=function(e,t,s){if(!!t&&!!s){for(var n in this.jsRunSequence){if(this.jsRunSequence[n].name==t){this.jsRunSequence[n].code=s}}}if(!!this.jsRunSequence[0]&&!!this.jsRunSequence[0].code&&this.jsRunSequence[0].status!="failed"){var a=document.createElement("script");a.appendChild(document.createTextNode(this.jsRunSequence[0].code));a.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(a);this.jsRunSequence.shift();if(this.jsRunSequence.length>0){this.runjs()}}else if(!!this.jsRunSequence[0]&&this.jsRunSequence[0].status=="failed"){var i=this;var a=document.createElement("script");a.src=this.jsRunSequence[0].path;a.type="text/javascript";this.jsRunSequence[0].status="loading";a.onload=function(){i.jsRunSequence.shift();if(i.jsRunSequence.length>0){i.runjs()}};document.body.appendChild(a)}};lsloader.tagLoad=function(e,t){this.jsRunSequence.push({name:t,code:"",path:e,status:"failed"});this.runjs()};lsloader.jsfallback=function(e,t){if(!!this.jsnamemap[t]){return}else{this.jsnamemap[t]=t}for(var s in this.jsRunSequence){if(this.jsRunSequence[s].name==t){this.jsRunSequence[s].code="";this.jsRunSequence[s].status="failed";this.jsRunSequence[s].path=e}}this.runjs()};lsloader.cssfallback=function(e,t,s){if(!!this.cssnamemap[t]){return}else{this.cssnamemap[t]=1}var n=document.createElement("link");n.type="text/css";n.href=e;n.rel="stylesheet";n.onload=n.onerror=s;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a)};lsloader.runInlineScript=function(e,t){var s=document.getElementById(t).innerText;this.jsRunSequence.push({name:e,code:s});this.runjs()};lsloader.loadCombo=function(e){var t="";var s={};for(var n in e){var a=this.getLS(e[n].name);if(!!a){var i=a.split(versionString)[0];var r=a.split(versionString)[1]}else{var i=""}if(i==e[n].path){this.jsRunSequence.push({name:e[n].name,code:r,path:e[n].path})}else{this.jsRunSequence.push({name:e[n].name,code:null,path:e[n].path,status:"comboloading"});s[e[n].name]=true;t+=(t==""?"":";")+e[n].path}}var u=this;if(!!t){var o=new XMLHttpRequest;o.open("get",combo+t,true);o.onreadystatechange=function(){if(o.readyState==4){if(o.status>=200&&o.status<300||o.status==304){if(o.response!=""){u.runCombo(o.response,s);return}}else{for(var e in u.jsRunSequence){if(s[u.jsRunSequence[e].name]){u.jsRunSequence[e].status="failed"}}u.runjs()}}};o.send(null)}this.runjs()};lsloader.runCombo=function(e,t){e=e.split("/*combojs*/");e.shift();for(var s in this.jsRunSequence){if(!!t[this.jsRunSequence[s].name]&&!!e[0]){this.jsRunSequence[s].status="comboJS";this.jsRunSequence[s].code=e[0];this.setLS(this.jsRunSequence[s].name,this.jsRunSequence[s].path+versionString+e[0]);e.shift()}}this.runjs()}})();
//rebuild by neat 