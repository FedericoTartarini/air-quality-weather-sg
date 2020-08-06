(this["webpackJsonpair-quality-sg-react"]=this["webpackJsonpair-quality-sg-react"]||[]).push([[12],{247:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(64),c=t(18);var o=function(e){var a=e.dataPSI,t=e.locationUser,n="";if((t.error||a.error)&&(n=l.a.createElement("div",null,"Could not fetch API")),(t.loading||a.loading)&&(n=l.a.createElement(c.a,null)),t.data&&a.data){var o=Object(r.b)(a.data,t.data).name,s=Object(r.e)(o,a.data),i=Object(r.h)(s.psi_twenty_four_hourly,"psi_twenty_four_hourly").description;n=l.a.createElement("div",{className:"container mx-auto flex items-center justify-center shadow-lg"},l.a.createElement("img",{className:"h-48 w-full rounded object-cover shadow-lg",alt:"singapore",src:Object(r.a)(i)}))}return n},s=t(9),i=t(11),m=t(74),d=t(8);var u=function(e){var a=e.dataPSI,t=e.locationUser,n=e.pollutant,o=null;if((t.error||a.error)&&(o=l.a.createElement("div",null,"Could not fetch API")),(t.loading||a.loading)&&(o=l.a.createElement("div",{className:"container mx-auto"},l.a.createElement(c.a,null))),t.data&&a.data){var s=Object(r.b)(a.data,t.data).name,u=Object(r.e)(s,a.data);o=l.a.createElement("div",{className:"p-4 w-1/2 md:mb-0 mb-6 flex flex-col text-center items-center"},l.a.createElement("div",{className:"w-20 h-20 inline-flex items-center justify-center rounded-full mb-3 flex-shrink-0"},l.a.createElement(i.a,{icon:Object(r.h)(u[n],n).icon,size:"3x",color:Object(r.h)(u[n],n).color})),l.a.createElement("div",{className:"flex-grow"},l.a.createElement("h2",{className:"text-lg title-font font-medium mb-3"},Object(r.g)(n,!0),":"),l.a.createElement("h2",{className:"text-3xl title-font font-medium mb-3"},u[n],"pm25_one_hourly"===n?l.a.createElement("span",{className:"text-sm"}," ","\xb5g/m",l.a.createElement("sup",null,"3")):""),l.a.createElement("p",{className:"leading-relaxed text-base"},Object(r.h)(u[n],n).description),l.a.createElement(d.b,{to:"/psi"},l.a.createElement("p",{className:"mt-3 mr-2 inline-flex items-center text-sm"},"Learn More"),l.a.createElement(i.a,{icon:m.h}))))}return l.a.createElement(l.a.Fragment,null,o)};var f=function(e){var a=e.data,t=e.locationUser,n=null;return(a.error||t.error)&&(n=l.a.createElement("div",null,"Could not fetch API")),a.loading&&t.loading&&(n=l.a.createElement(c.a,null)),a.data&&t.data&&(n=l.a.createElement("span",null,Object(r.i)(a.data,t.data))),l.a.createElement(l.a.Fragment,null,n)};var E=function(e){var a=e.dataFor2H,t=e.dataFor24H,n=e.locationUser,o=e.station,s="";if((a.error||t.error||n.error)&&(s=l.a.createElement("div",null,"Could not fetch API")),(a.loading||t.loading||n.loading)&&(s=l.a.createElement(c.a,null)),a.data&&t.data&&n.data){var i="",m="",d="";0===Object.entries(a.data.items[0]).length?(i="next 6-h forecast",m=t.data.items[0].periods[0].regions[o],d=Object(r.c)(m)):(i="next 2-hour forecast",m=Object(r.j)(a.data,Object(r.b)(a.data,n.data).name),d=Object(r.c)(m)),s=l.a.createElement("div",null,l.a.createElement("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"},i,": ",m),l.a.createElement("img",{className:"h-12 w-full object-contain my-3",src:d,alt:"weather icon"}))}return s};var b=function(e){var a=e.dataPSI,t=e.dataTmp,c=e.dataRH,o=e.dataFor2H,d=e.dataFor24H,b=e.dataPM25,x=e.locationUser,p=e.RequestedUseLocation,g=e.showRequestLocButton,h=Object(n.useState)("central"),v=Object(s.a)(h,2),y=v[0],N=v[1];return Object(n.useEffect)((function(){var e="";o.data&&x.data&&a.data&&(void 0===(e=Object(r.b)(o.data,x.data).name)&&(e=Object(r.b)(a.data,x.data).name),N(e))}),[o,a,x]),l.a.createElement("div",{className:"container mx-auto my-3 flex px-5 items-center justify-center shadow-lg border rounded"},l.a.createElement("section",{className:"text-gray-700 body-font flex-grow"},l.a.createElement("div",{className:"container px-5 py-5 mx-auto"},l.a.createElement("div",{className:"text-center my-3"},l.a.createElement("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"},"Closest air quality station:"," ",l.a.createElement("span",{className:"capitalize"},y))),l.a.createElement("div",{className:"container flex mx-auto justify-center"+(g?"":" hidden")},l.a.createElement("button",{className:"bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",onClick:function(){p()}},"Use my location",l.a.createElement("span",{className:"ml-2"},l.a.createElement(i.a,{icon:m.b})))),l.a.createElement("div",{className:"flex my-3 justify-center"},l.a.createElement("div",{className:"w-16 h-1 rounded-full bg-gray-400 inline-flex"})),l.a.createElement("div",{className:"flex flex-wrap content-between sm:-m-4 -mx-4 my-3"},l.a.createElement(u,{dataPSI:a,locationUser:x,pollutant:"psi_twenty_four_hourly"}),l.a.createElement(u,{dataPSI:b,locationUser:x,pollutant:"pm25_one_hourly"})),l.a.createElement("div",{className:"text-center my-5"},l.a.createElement("div",{className:"flex my-3 justify-center"},l.a.createElement("div",{className:"w-16 h-1 rounded-full bg-gray-400 inline-flex"})),l.a.createElement("div",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"},"Temperature:"," ",l.a.createElement(f,{data:t,locationUser:x}),"\xb0C"),l.a.createElement("div",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"},"Relative humidity:"," ",l.a.createElement(f,{data:c,locationUser:x}),"%"),l.a.createElement(E,{locationUser:x,dataFor2H:o,dataFor24H:d,station:y})))))},x=t(87),p=t.n(x);var g=function(e){var a=e.dataPSI,t=e.locationUser,n="";if(a.error&&(n=l.a.createElement("div",null,"Could not fetch API")),a.loading&&(n=l.a.createElement(c.a,null)),t.data&&a.data){var o=Object(r.b)(a.data,t.data).name,s=Object(r.e)(o,a.data),i=Object(r.h)(s.psi_twenty_four_hourly,"psi_twenty_four_hourly").description;n=l.a.createElement("div",{className:"container mx-auto flex-col p-8 items-center justify-center rounded overflow-hidden border shadow-lg"},l.a.createElement("div",{className:"text-gray-800 mb-2"},l.a.createElement("div",{className:"font-bold text-md mb-2"},'The 24-h Pollutant Standards Index (PSI) is "',i,'". Advisory for the general public regarding activities outdoors:'),l.a.createElement("p",{className:"text-base"},l.a.createElement("span",{className:"font-bold"},"Healthy persons: "),Object(r.f)(i).healthy),l.a.createElement("p",{className:"text-base"},l.a.createElement("span",{className:"font-bold"},"Elderly, pregnant women, children:"," "),Object(r.f)(i).old),l.a.createElement("p",{className:"text-base"},l.a.createElement("span",{className:"font-bold"},"People with lung or heart diseases:"," "),Object(r.f)(i).sick)),l.a.createElement("img",{className:"w-full mt-3 object-contain",src:p.a,alt:"Singapore's line"}),l.a.createElement("p",{className:"mt-2 text-xs text-center text-gray-800"},"This app does not provide medical advice. It is intended for informational purposes only. It is not a substitute for professional medical advice. For more information about the above recommendations visit"," ",l.a.createElement("a",{className:"text-gray-700",href:Object(r.d)("help")},"NEA's website"),"."))}return n},h=t(67);a.default=function(e){var a=e.dataPSI,t=e.dataTmp,n=e.dataRH,r=e.dataFor2H,c=e.dataFor24H,s=e.dataPM25,i=e.locationUser,m=e.RequestedUseLocation,d=e.showRequestLocButton;return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement("title",null,"Air quality and weather Singapore"),l.a.createElement("meta",{name:"description",content:"This page shows you the current temperature, relative humidity, PM 2.5, PSI readings."})),l.a.createElement("div",{className:"flex"},l.a.createElement(o,{dataPSI:a,locationUser:i})),l.a.createElement("div",null,l.a.createElement(b,{dataPSI:a,dataTmp:t,dataRH:n,dataFor2H:r,dataFor24H:c,dataPM25:s,locationUser:i,RequestedUseLocation:m,showRequestLocButton:d})),l.a.createElement("div",null,l.a.createElement(g,{dataPSI:a,locationUser:i})))}},87:function(e,a,t){e.exports=t.p+"static/media/singapore-line.d67ab07e.png"}}]);
//# sourceMappingURL=12.98d8c33a.chunk.js.map