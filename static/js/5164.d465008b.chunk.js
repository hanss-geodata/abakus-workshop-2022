"use strict";(globalThis.webpackChunkabakus_workshop=globalThis.webpackChunkabakus_workshop||[]).push([[5164],{85164:(e,a,t)=>{t.r(a),t.d(a,{createSymbolSchema:()=>o});var r=t(80613),s=t(54815);function l(e){return"line-marker"===e.type?{type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function n(e){return(0,s.hF)(e)}function o(e,a,t){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,a,t){const o=(0,s.jj)(r.LW.FILL,a),c=t?n(o):o,h=e.clone(),i=h.outline,m=(0,s.jy)(a.symbologyType);m||(h.outline=null);const u={materialKey:c,hash:h.hash(),...l(h)};if(m)return u;const y=[];if(y.push(u),i){const e=(0,s.jj)(r.LW.LINE,{...a,isOutline:!0}),o={materialKey:t?n(e):e,hash:i.hash(),...l(i)};y.push(o)}return{type:"composite-symbol",layers:y,hash:y.reduce(((e,a)=>a.hash+e),"")}}(e,a,t);case"simple-marker":case"picture-marker":return function(e,a,t){const o=(0,s.jj)(r.LW.MARKER,a),c=t?n(o):o,h=l(e);return{materialKey:c,hash:e.hash(),...h,angle:e.angle,maxVVSize:a.maxVVSize}}(e,a,t);case"simple-line":return function(e,a,t){const o=(0,s.jy)(a.symbologyType)?r.mD.DEFAULT:a.symbologyType,c=(0,s.jj)(r.LW.LINE,{...a,symbologyType:o}),h=t?n(c):c,i=e.clone(),m=i.marker;i.marker=null;const u=[];if(u.push({materialKey:h,hash:i.hash(),...l(i)}),m){const e=(0,s.jj)(r.LW.MARKER,a),o=t?n(e):e;m.color=m.color??i.color,u.push({materialKey:o,hash:m.hash(),lineWidth:i.width,...l(m)})}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,a)=>a.hash+e),"")}}(e,a,t);case"text":return function(e,a,t){const o=(0,s.jj)(r.LW.TEXT,a),c=t?n(o):o,h=l(e);return{materialKey:c,hash:e.hash(),...h,angle:e.angle,maxVVSize:a.maxVVSize}}(e,a,t);case"label":return function(e,a,t){const l=e.toJSON(),o=(0,s.jj)(r.LW.LABEL,{...a,placement:l.labelPlacement});return{materialKey:t?n(o):o,hash:e.hash(),...l,labelPlacement:l.labelPlacement}}(e,a,t);case"cim":return{type:"cim",rendererKey:a.vvFlags,data:e.data,maxVVSize:a.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:a.vvFlags,data:e,maxVVSize:a.maxVVSize};case"web-style":return{...l(e),type:"web-style",hash:e.hash(),rendererKey:a.vvFlags,maxVVSize:a.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}}}]);
//# sourceMappingURL=5164.d465008b.chunk.js.map