"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9489],{39489:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var s=r(43697),a=(r(5600),r(80442),r(75215),r(92604),r(52525)),i=r(3172),o=r(28263),n=r(38581),u=r(5226),l=r(11282);const c=(0,o.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});var p=r(59633);let f=class extends p.Z{constructor(e){super(e)}solve(e,t){return async function(e,t,r){const s=[],a=[],o={},p={},f=(0,l.en)(e),{path:m}=f;t.stops&&t.stops.features&&(0,u.et)(t.stops.features,a,"stops.features",o),t.pointBarriers&&t.pointBarriers.features&&(0,u.et)(t.pointBarriers.features,a,"pointBarriers.features",o),t.polylineBarriers&&t.polylineBarriers.features&&(0,u.et)(t.polylineBarriers.features,a,"polylineBarriers.features",o),t.polygonBarriers&&t.polygonBarriers.features&&(0,u.et)(t.polygonBarriers.features,a,"polygonBarriers.features",o);const y=await(0,n.aX)(a);for(const e in o){const t=o[e];s.push(e),p[e]=y.slice(t[0],t[1])}if((0,u.Wf)(p,s)){let e=null;try{e=await(0,u.bI)(m,t.apiKey,r)}catch{}e&&!e.hasZ&&(0,u.ef)(p,s)}for(const e in p)p[e].forEach(((r,s)=>{t.get(e)[s].geometry=r}));const B={...r,query:{...f.query,...c.toQueryParams(t),f:"json"}},b=m.endsWith("/solve")?m:`${m}/solve`,d=await(0,i.default)(b,B);return(0,u.mT)(d)}(this.url,e,t)}};f=(0,s._)([(0,a.j)("esri.tasks.RouteTask")],f);var m=f}}]);