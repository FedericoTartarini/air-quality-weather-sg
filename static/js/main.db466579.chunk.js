(this["webpackJsonpair-quality-sg-react"]=this["webpackJsonpair-quality-sg-react"]||[]).push([[5],{32:function(e,t,a){e.exports=a.p+"static/media/logo192.9a9969a0.png"},34:function(e,t,a){e.exports=a.p+"static/media/logo192.ad9688c3.webp"},35:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(37),a(10)),o=a(4),i=a(32);var c=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement("nav",{className:"container mx-auto flex items-center justify-between flex-wrap p-6"},r.a.createElement(o.b,{to:"/"},r.a.createElement("div",{className:"flex items-center flex-shrink-0"},r.a.createElement("picture",null,r.a.createElement("source",{type:"image/webp",srcSet:a(34)}),r.a.createElement("source",{type:"image/png",srcSet:i}),r.a.createElement("img",{src:i,alt:"logo Air Quality and Weather SG",width:50})),r.a.createElement("span",{className:"font-semibold text-xl tracking-tight ml-3 w-40"},"Air Quality and Weather SG"))),r.a.createElement("div",{className:"block xl:hidden"},r.a.createElement("button",{className:"flex items-center px-3 py-2 border rounded hover:text-gray-700 hover:border-white",type:"button",onClick:function(){return c(!n)}},r.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),r.a.createElement("div",{className:"w-full block flex-end xl:flex xl:items-center xl:w-auto"+(n?"":" hidden"),onClick:function(){return c(!n)}},r.a.createElement("div",{className:"text-sm xl:flex-grow"},r.a.createElement(o.b,{to:"/"},r.a.createElement("span",{className:"block mt-4 xl:inline-block xl:mt-0 hover:text-gray-600 ml-4"},"Home")),r.a.createElement(o.b,{to:"/air-pollution-singapore-haze"},r.a.createElement("span",{className:"block mt-4 xl:inline-block xl:mt-0 hover:text-gray-600 ml-4"},"Charts")),r.a.createElement(o.b,{to:"/weather-forecast-singapore"},r.a.createElement("span",{className:"block mt-4 xl:inline-block xl:mt-0 over:text-gray-600 ml-4"},"Forecast")),r.a.createElement(o.b,{to:"/map-air-pollution-singapore-haze"},r.a.createElement("span",{className:"block mt-4 xl:inline-block xl:mt-0 over:text-gray-600 ml-4"},"Air Quality Map")),r.a.createElement(o.b,{to:"/about-air-quality-and-weather-sg"},r.a.createElement("span",{className:"block mt-4 xl:inline-block xl:mt-0 over:text-gray-600 ml-4"},"About")))))},s=a(17),m=a(9),u=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(0),a.e(10)]).then(a.bind(null,265))})),d=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(0),a.e(17)]).then(a.bind(null,266))})),h=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(0),a.e(15)]).then(a.bind(null,268))}));var p=function(e){var t=e.dataPSI,a=e.dataTmp,l=e.dataRH,i=e.dataFor2H,c=e.dataFor24H,p=e.dataPM25,g=e.locationUser,E=e.RequestedUseLocation,b=e.showRequestLocButton;return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("title",null,"Air quality and Weather Singapore"),r.a.createElement("meta",{name:"description",content:"This page allows you to monitor and track in real-time the standard indexes of the major outdoor pollutants in Singapore. In addition you can monitor the current temperature and relative humidity in your location as well as the weather forecasts for Singapore"})),r.a.createElement(n.Suspense,{fallback:r.a.createElement(m.a,null)},r.a.createElement("div",{className:"flex"},r.a.createElement(d,{dataPSI:t,locationUser:g}))),r.a.createElement(n.Suspense,{fallback:r.a.createElement(m.a,null)},r.a.createElement(h,{dataPSI:t,dataTmp:a,dataRH:l,dataFor2H:i,dataFor24H:c,dataPM25:p,locationUser:g,RequestedUseLocation:E,showRequestLocButton:b})),r.a.createElement(n.Suspense,{fallback:r.a.createElement(m.a,null)},r.a.createElement(u,{dataPSI:t,locationUser:g})),r.a.createElement("div",{className:"container mx-auto my-3 p-8 items-center justify-center rounded overflow-hidden border shadow-lg"},r.a.createElement("div",{className:"text-gray-800 mb-2"},r.a.createElement("div",{className:"font-bold text-md mb-2"},"Learn more about:"),r.a.createElement("div",null,r.a.createElement("ul",{className:"list-disc list-inside"},r.a.createElement("li",{className:"py-1"},r.a.createElement(o.b,{to:"/climate-of-singapore"},"The climate of Singapore")),r.a.createElement("li",{className:"py-1"},r.a.createElement(o.b,{to:"/pollutant-standards-index-singapore"},"What the Pollutant Standards Index (PSI) measures")),r.a.createElement("li",{className:"py-1"},r.a.createElement(o.b,{to:"/pm25"},"What is 1-h Particular Matter 2.5 \xb5m")),r.a.createElement("li",{className:"py-1"},r.a.createElement(o.b,{to:"/weather-singapore"},"Where we are getting the data from")))))))},g=a(31),E=a.n(g);function b(e){var t=Object(n.useState)({loading:!1,data:null,error:!1}),a=Object(l.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){o({loading:!0,data:null,error:!1}),console.log("Requesting API data: "+e),E.a.get(e).then((function(e){o({loading:!1,data:e.data,error:!1})})).catch((function(){o({loading:!1,data:null,error:!0})}))}),[e.split(":")[1]]),r}var f=a(2),v=Object(n.lazy)((function(){return Promise.all([a.e(3),a.e(9)]).then(a.bind(null,269))})),y=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(0),a.e(19)]).then(a.bind(null,259))})),w=Object(n.lazy)((function(){return a.e(14).then(a.bind(null,260))})),x=Object(n.lazy)((function(){return a.e(11).then(a.bind(null,261))})),S=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(0),a.e(13)]).then(a.bind(null,262))})),N=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(4),a.e(0),a.e(8)]).then(a.bind(null,271))})),k=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(4),a.e(0),a.e(18)]).then(a.bind(null,267))})),O=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(0),a.e(12)]).then(a.bind(null,270))})),j=Object(n.lazy)((function(){return Promise.all([a.e(2),a.e(20),a.e(16)]).then(a.bind(null,264))}));var P=function(){var e=(new Date).getTimezoneOffset();e-=480+e;var t=new Date(Date.now()-6e4*e).toISOString().substr(0,19),a="https://api.data.gov.sg/v1/environment/relative-humidity?date_time="+t,i="https://api.data.gov.sg/v1/environment/air-temperature?date_time="+t,s="https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time="+t,u="https://api.data.gov.sg/v1/environment/24-hour-weather-forecast?date_time="+t;if("00"===t.split("T")[1].split(":")[0]){var d=(new Date).getTimezoneOffset();d-=360+d,t=new Date(Date.now()-6e4*d).toISOString().substr(0,19)}var h=t.split("T")[0],g="https://api.data.gov.sg/v1/environment/pm25?date="+h,E=b("https://api.data.gov.sg/v1/environment/psi?date="+h),P=b(i),z=b(a),I=b(g),H=b(s),q=b(u);q.data&&1===q.data.items.length&&(q.error=!0),P.data&&1===P.data.items.length&&(P.error=!0),q.data&&1===q.data.items.length&&(q.error=!0);var A=Object(n.useState)({loading:!1,data:{accuracy:2678,altitude:null,altitudeAccuracy:null,heading:null,latitude:1.3271039999999998,longitude:103.841792,speed:null},error:!1}),R=Object(l.a)(A,2),T=R[0],W=R[1],U=Object(n.useState)(!0),L=Object(l.a)(U,2),F=L[0],M=L[1];function D(e){W({loading:!1,data:e.coords,error:!1})}function B(e){switch(e.code){case e.PERMISSION_DENIED:alert("You denied the request for Geolocation.\nPlease allow us to access your location if you want to see the data for your current location.");break;case e.POSITION_UNAVAILABLE:alert("Location information is unavailable.\nWe are assuming you are in the center of Singapore");break;case e.TIMEOUT:alert("The request to get user location timed out.\nWe are assuming you are in the center of Singapore");break;case e.UNKNOWN_ERR:alert("An unknown error occurred.\nWe are assuming you are in the center of Singapore");break;default:alert("An unknown error occurred.\nWe are assuming you are in the center of Singapore")}}Object(n.useEffect)((function(){try{navigator.permissions.query({name:"geolocation"}).then((function(e){"granted"===e.state?(C(),M(!1)):console.log("permission not granted")}))}catch(e){}}),[t]);var _={enableHighAccuracy:!0,timeout:3e3,maximumAge:0};function C(){navigator.geolocation?navigator.geolocation.getCurrentPosition(D,B,_):alert("Geolocation is not supported by this browser")}return r.a.createElement(o.a,{basename:"/"},r.a.createElement("div",{className:"relative pb-10 min-h-screen"},r.a.createElement(c,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/"},r.a.createElement(p,{dataPSI:E,dataTmp:P,dataRH:z,dataFor2H:H,dataFor24H:q,dataPM25:I,locationUser:T,RequestedUseLocation:C,showRequestLocButton:F})),r.a.createElement(n.Suspense,{fallback:r.a.createElement(m.a,null)},r.a.createElement(f.a,{path:"/air-pollution-singapore-haze"},r.a.createElement(O,{data:E,locationUser:T})),r.a.createElement(f.a,{path:"/weather-forecast-singapore"},r.a.createElement(k,{dataFor2H:H,dataFor24H:q})),r.a.createElement(f.a,{path:"/map-air-pollution-singapore-haze"},r.a.createElement(N,{data:E})),r.a.createElement(f.a,{path:"/about-air-quality-and-weather-sg"},r.a.createElement(x,null)),r.a.createElement(f.a,{path:"/pollutant-standards-index-singapore"},r.a.createElement(S,null)),r.a.createElement(f.a,{path:"/pm25"},r.a.createElement(y,null)),r.a.createElement(f.a,{path:"/weather-singapore"},r.a.createElement(w,null)),r.a.createElement(f.a,{path:"/climate-of-singapore"},r.a.createElement(v,null)))),r.a.createElement(n.Suspense,{fallback:r.a.createElement(m.a,null)},r.a.createElement("div",null,r.a.createElement(j,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(14),I=document.getElementById("root");I.hasChildNodes()?Object(z.hydrate)(r.a.createElement(P,null),I):Object(z.render)(r.a.createElement(P,null),I),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("div",{className:"container mx-auto"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"loader"})))}}},[[35,6,7]]]);
//# sourceMappingURL=main.db466579.chunk.js.map