"use strict";function _createForOfIteratorHelper(e,t){var r,o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length)return o&&(e=o),r=0,{s:t=function(){},n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a=!0,i=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return a=e.done,e},e:function(e){i=!0,n=e},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw n}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t,r,o;"function"==typeof define&&define.amd&&(define(e),t=!0),"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&(module.exports=e(),t=!0),t||(r=window.Cookies,(o=window.Cookies=e()).noConflict=function(){return window.Cookies=r,o})}(function(){function d(){for(var e=0,t={};e<arguments.length;e++){var r,o=arguments[e];for(r in o)t[r]=o[r]}return t}function l(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function e(s){function i(){}function r(e,t,r){if("undefined"!=typeof document){"number"==typeof(r=d({path:"/"},i.defaults,r)).expires&&(r.expires=new Date(+new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var o=JSON.stringify(t);/^[\{\[]/.test(o)&&(t=o)}catch(e){}t=s.write?s.write(t,e):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var n,a="";for(n in r)r[n]&&(a+="; "+n,!0!==r[n]&&(a+="="+r[n].split(";")[0]));return document.cookie=e+"="+t+a}}function t(e,t){if("undefined"!=typeof document){for(var r={},o=document.cookie?document.cookie.split("; "):[],n=0;n<o.length;n++){var a=o[n].split("="),i=a.slice(1).join("=");t||'"'!==i.charAt(0)||(i=i.slice(1,-1));try{var d=l(a[0]),i=(s.read||s)(i,d)||l(i);if(t)try{i=JSON.parse(i)}catch(e){}if(r[d]=i,e===d)break}catch(e){}}return e?r[e]:r}}return i.set=r,i.get=function(e){return t(e,!1)},i.getJSON=function(e){return t(e,!0)},i.remove=function(e,t){r(e,"",d(t,{expires:-1}))},i.defaults={},i.withConverter=e,i}(function(){})}),function(i,d){var s=d("body"),l=d("head"),u="#skin-theme",c=".nk-header",f=["demo4","subscription"],a=["style","header","header_opt","skin","mode"],n="light-mode",m="dark-mode",p=".nk-opt-item",y=".nk-opt-list",h={demo4:{header:"is-light",header_opt:"nk-header-fixed",style:"ui-default"},subscription:{header:"is-light",header_opt:"nk-header-fixed",style:"ui-default"}};i.Demo={save:function(e,t){Cookies.set(i.Demo.apps(e),t)},remove:function(e){Cookies.remove(i.Demo.apps(e))},current:function(e){return Cookies.get(i.Demo.apps(e))},apps:function(e){var t,r,o=window.location.pathname.split("/").map(function(e,t,r){return e.replace("-","")}),n=_createForOfIteratorHelper(f);try{for(n.s();!(r=n.n()).done;){var a=r.value;0<=o.indexOf(a)&&(t=a)}}catch(e){n.e(e)}finally{n.f()}return e?e+"_"+t:t},style:function(e,t){var r={mode:n+" "+m,style:"ui-default ui-softy",header:"is-light is-default is-theme is-dark",header_opt:"nk-header-fixed"};return"all"===e?r[t]||"":"any"===e?r.mode+" "+r.style+" "+r.header:"body"===e?r.mode+" "+r.style:"is-default"===e||"ui-default"===e||"is-regular"===e?"":e},skins:function(e){return!e||"default"===e?"theme":"theme-"+e},defs:function(e){var t=i.Demo.apps(),t=h[t][e]||"";return i.Demo.current(e)?i.Demo.current(e):t},apply:function(){i.Demo.apps();var e,t=_createForOfIteratorHelper(a);try{for(t.s();!(e=t.n()).done;){var r,o,n=e.value;"header"!==n&&"header_opt"!==n&&"style"!==n||(r=i.Demo.defs(n),d(o="header"!==n&&"header_opt"!==n?s:c).removeClass(i.Demo.style("all",n)),"ui-default"!==r&&"is-default"!==r&&d(o).addClass(r)),"mode"===n&&i.Demo.update(n,i.Demo.current("mode")),"skin"===n&&i.Demo.update(n,i.Demo.current("skin"))}}catch(e){t.e(e)}finally{t.f()}i.Demo.update("dir",i.Demo.current("dir"))},locked:function(e){!0===e?(d(p+"[data-key=header]").add(p+"[data-key=skin]").addClass("disabled"),i.Demo.update("skin","default",!0),d(p+"[data-key=skin]").removeClass("active"),d(p+"[data-key=skin][data-update=default]").addClass("active")):d(p+"[data-key=header]").add(p+"[data-key=skin]").removeClass("disabled")},update:function(e,t,r){var o,n=i.Demo.style(t,e),a=i.Demo.style("all",e);i.Demo.apps();"header"!==e&&"header_opt"!==e||(d(o="header"==e||"header_opt"==e?c:"").removeClass(a),d(o).addClass(n)),"mode"===e&&(s.removeClass(a).removeAttr("theme"),n===m?(s.addClass(n).attr("theme","dark"),i.Demo.locked(!0)):(s.addClass(n).removeAttr("theme"),i.Demo.locked(!1))),"style"===e&&(s.removeClass(a),s.addClass(n)),"skin"===e&&(o=i.Demo.skins(n),a=d("#skin-default").attr("href").replace("theme","skins/"+o),"theme"===o?d(u).remove():0<d(u).length?d(u).attr("href",a):l.append('<link id="skin-theme" rel="stylesheet" href="'+a+'">')),!0===r&&i.Demo.save(e,t)},reset:function(){var e,t=i.Demo.apps(),r=(s.removeClass(i.Demo.style("body")).removeAttr("theme"),d(p).removeClass("active"),d(u).remove(),d(c).removeClass(i.Demo.style("all","header")),_createForOfIteratorHelper(a));try{for(r.s();!(e=r.n()).done;){var o=e.value;d("[data-key='"+o+"']").each(function(){var e=d(this).data("update");"header"!==o&&"header_opt"!==o&&"style"!==o||e===h[t][o]&&d(this).addClass("active"),"mode"!==o&&"skin"!==o||e!==n&&"default"!==e||d(this).addClass("active")}),i.Demo.remove(o)}}catch(e){r.e(e)}finally{r.f()}d("[data-key='dir']").each(function(){d(this).data("update")===i.Demo.current("dir")&&d(this).addClass("active")}),i.Demo.apply()},load:function(){i.Demo.apply(),0<d(p).length&&d(p).each(function(){var e=d(this).data("update"),t=d(this).data("key");"header"!==t&&"header_opt"!==t&&"style"!==t||e===i.Demo.defs(t)&&(d(this).parent(y).find(p).removeClass("active"),d(this).addClass("active")),"mode"!==t&&"skin"!==t&&"dir"!==t||e!=i.Demo.current("skin")&&e!=i.Demo.current("mode")&&e!=i.Demo.current("dir")||(d(this).parent(y).find(p).removeClass("active"),d(this).addClass("active"))})},trigger:function(){d(p).on("click",function(e){e.preventDefault();var e=d(this),t=e.parent(y),r=e.data("update"),o=e.data("key");i.Demo.update(o,r,!0),t.find(p).removeClass("active"),e.addClass("active"),"dir"==o&&setTimeout(function(){window.location.reload()},100)}),d(".nk-opt-reset > a").on("click",function(e){e.preventDefault(),i.Demo.reset()})},init:function(e){i.Demo.load(),i.Demo.trigger()}},i.coms.docReady.push(i.Demo.init),i.Promo=function(){var t=d(".pmo-st"),r=d(".pmo-lv"),e=d(".pmo-close");0<e.length&&e.on("click",function(){var e=Cookies.get("intm-offer");return r.removeClass("active"),t.addClass("active"),null==e&&Cookies.set("intm-offer","true",{expires:1,path:""}),!1}),d(window).on("load",function(){(null==Cookies.get("intm-offer")?r:t).addClass("active")})},i.coms.docReady.push(i.Promo)}(NioApp,jQuery);