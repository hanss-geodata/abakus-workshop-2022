"use strict";(globalThis.webpackChunkabakus_workshop=globalThis.webpackChunkabakus_workshop||[]).push([[7387],{67387:(e,r,t)=>{t.r(r),t.d(r,{getGeometryServiceURL:()=>c,projectGeometry:()=>s});var n=t(42265),o=t(10064),i=t(70032),l=t(18924),a=t(81943);async function c(){let e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;if(n.Z.geometryServiceUrl)return n.Z.geometryServiceUrl;if(!r)throw new o.Z("internal:geometry-service-url-not-configured");e="portal"in r?r.portal||i.Z.getDefault():r,await e.load({signal:t});const l=e.helperServices?.geometry?.url;if(!l)throw new o.Z("internal:geometry-service-url-not-configured");return l}async function s(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0;const i=await c(t,n),s=new a.Z;s.geometries=[e],s.outSpatialReference=r;const g=await(0,l.i)(i,s,{signal:n});if(g&&Array.isArray(g)&&1===g.length)return g[0];throw new o.Z("internal:geometry-service-projection-failed")}}}]);
//# sourceMappingURL=7387.b8bdfbd6.chunk.js.map