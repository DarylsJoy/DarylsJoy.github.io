// build time:Mon Mar 19 2018 01:09:40 GMT+0800 (中国标准时间)
function Queue(){this.dataStore=[];this.offer=e;this.poll=t;this.execNext=u;this.debug=false;this.startDebug=o;function e(e){if(this.debug){console.log("Offered a Queued Function.")}if(typeof e==="function"){this.dataStore.push(e)}else{console.log("You must offer a function.")}}function t(){if(this.debug){console.log("Polled a Queued Function.")}return this.dataStore.shift()}function u(){var e=this.poll();if(e!==undefined){if(this.debug){console.log("Run a Queued Function.")}e()}}function o(){this.debug=true}}var queue=new Queue;
//rebuild by neat 