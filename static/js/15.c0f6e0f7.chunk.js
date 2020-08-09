(this["webpackJsonpair-quality-sg-react"]=this["webpackJsonpair-quality-sg-react"]||[]).push([[15],{253:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(0),i=a.n(r),l=(a(84),a(64)),o=a.n(l),c=a(256),s=a(257),m=a(258),u=a(251),d=a(259),h=a(65),p=a(66);function g(e,t,a){return o.a.icon({iconUrl:Object(h.c)(Object(h.j)(e.data,t)),iconSize:[a]})}var E=function(e){var t,a,n=e.data,r=window,l=r.innerWidth,o=r.innerHeight;return l>500?(t=11,a=35):(t=10,a=25),i.a.createElement("div",null,i.a.createElement(p.a,null,i.a.createElement("title",null,"2-hour weather forecasts in Singapore"),i.a.createElement("meta",{name:"description",content:"This page shows the next two hours weather forecasts for Singapore"})),i.a.createElement(c.a,{center:[1.3521,103.8198],zoom:t,style:{height:o-108-104,width:"100%"},zoomControl:!1},i.a.createElement(s.a,{position:"bottomleft"}),i.a.createElement(m.a,{className:"leaflet-tile-pane",attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.data?n.data.area_metadata.map((function(e){return i.a.createElement(u.a,{key:e.name,position:[e.label_location.latitude,e.label_location.longitude],icon:g(n,e.name,a)},i.a.createElement(d.a,null,i.a.createElement("div",{className:"text-center"},i.a.createElement("span",{className:"text-lg capitalize"},e.name)," ",i.a.createElement("br",null),Object(h.j)(n.data,e.name))))})):""))};var b={west:{latitude:1.35735,longitude:103.7},national:{latitude:0,longitude:0},east:{latitude:1.35735,longitude:103.94},central:{latitude:1.35735,longitude:103.82},south:{latitude:1.29587,longitude:103.82},north:{latitude:1.41803,longitude:103.82}};var f=function(e){var t,a,l=e.data,g=window,E=g.innerWidth,f=g.innerHeight,x=Object(r.useState)(0),w=Object(n.a)(x,2),v=w[0],y=w[1];function N(e){var t=e.text,a=e.index;return"12-18"===t?t="Afternoon":"18-06"===t||"00-06"===t?t="Night":"18-00"===t?t="Evening":"06-12"===t&&(t="Morning"),i.a.createElement("button",{className:"bg-white hover:bg-gray-200 text-gray-500 py-1 px-2"+(v===a?" border text-gray-700 font-semibold":" border-b hover:text-gray-800 "),onClick:function(){return y(a)}},t)}return E>500?(t=11,a=50):(t=10,a=40),i.a.createElement("div",{className:"relative"},i.a.createElement(p.a,null,i.a.createElement("title",null,"24-hour weather forecasts"),i.a.createElement("meta",{name:"description",content:"This page shows the next 24 hours weather forecasts for Singapore"})),i.a.createElement(c.a,{center:[1.3521,103.8198],zoom:t,style:{height:f-108-104,width:"100%"},className:"z-0",zoomControl:!1},i.a.createElement(s.a,{position:"bottomleft"}),i.a.createElement(m.a,{className:"leaflet-tile-pane",attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.data?Object.keys(l.data.items[0].periods[0].regions).map((function(e){return i.a.createElement(u.a,{key:e,position:[b[e].latitude,b[e].longitude],icon:(t=l.data.items[0].periods[v].regions[e],n=a,o.a.icon({iconUrl:Object(h.c)(t),iconSize:[n]}))},i.a.createElement(d.a,null,i.a.createElement("div",{className:"text-center"},i.a.createElement("span",{className:"text-lg capitalize"},e)," ",i.a.createElement("br",null),l.data.items[0].periods[v].regions[e])));var t,n})):""),i.a.createElement("div",{className:"z-10 absolute top-0 right-0 left-0 mx-auto text-center"},i.a.createElement("div",{className:"inline-flex mt-2 shadow-lg"},l.data?l.data.items[0].periods.map((function(e,t){return i.a.createElement(N,{key:e.time.start,text:e.time.start.split("T")[1].split(":")[0]+"-"+e.time.end.split("T")[1].split(":")[0],index:t})})):"")))};var x=function(){var e=window.innerHeight;return i.a.createElement("div",{className:"container-flex mx-auto"},i.a.createElement(p.a,null,i.a.createElement("title",null,"Rain Radar"),i.a.createElement("meta",{name:"description",content:"This page shows the rain radar data for the past two hours."})),i.a.createElement("iframe",{src:"https://www.rainviewer.com/map.html?loc=1.3521,103.8198,9&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=1&rmt=4&c=1&o=83&lm=1&th=0&sm=1&sn=1",width:"100%",frameBorder:"0",title:"Rain Radar",style:{height:e-108-104,width:"100%"},allowFullScreen:!0}))};t.default=function(e){var t=e.dataFor2H,a=e.dataFor24H,l=Object(r.useState)("24-h Forecast"),o=Object(n.a)(l,2),c=o[0],s=o[1],m=["24-h Forecast","Rain Radar"];function u(e){var t=e.text;return i.a.createElement("li",{className:"-mb-px mr-1"},i.a.createElement("span",{className:"bg-white inline-block text-gray-500 py-2 px-4 "+(c===t?" border-l border-t border-r rounded-t text-gray-700 font-semibold":" border-b hover:text-gray-800 "),onClick:function(){return s(t)}},t))}function d(){return i.a.createElement("div",{className:"container mx-auto my-2 text-center text-sm"},i.a.createElement("ul",{className:"flex border-b justify-center"},m.map((function(e){return i.a.createElement(u,{key:e,text:e})}))))}function h(e){var n=e.selection;return"2-h Forecast"===n?i.a.createElement(E,{data:t}):"24-h Forecast"===n?i.a.createElement(f,{data:a}):i.a.createElement(x,null)}return t.data&&0!==Object.entries(t.data.items[0]).length&&m.unshift("2-h Forecast"),i.a.createElement("div",null,i.a.createElement(d,null),i.a.createElement(h,{selection:c}))}}}]);
//# sourceMappingURL=15.c0f6e0f7.chunk.js.map