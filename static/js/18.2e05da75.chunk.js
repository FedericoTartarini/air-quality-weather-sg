(this["webpackJsonpair-quality-sg-react"]=this["webpackJsonpair-quality-sg-react"]||[]).push([[18],{272:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(0),o=a.n(r),i=(a(101),a(67)),l=a.n(i),c=a(277),s=a(278),m=a(279),u=a(268),d=a(280),h=a(66),p=a(28);function g(e,t,a){return l.a.icon({iconUrl:Object(h.c)(Object(h.j)(e.data,t)),iconSize:[a]})}var f=function(e){var t,a,n=e.data,r=window,i=r.innerWidth,l=r.innerHeight;return i>500?(t=11,a=35):(t=10,a=25),o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement("title",null,"2-hour weather forecasts in Singapore"),o.a.createElement("meta",{name:"description",content:"This page shows the next two hours weather forecasts for more than 20 locations in Singapore"})),o.a.createElement(c.a,{center:[1.3521,103.8198],zoom:t,style:{height:l-108-104,width:"100%"},zoomControl:!1},o.a.createElement(s.a,{position:"bottomleft"}),o.a.createElement(m.a,{className:"leaflet-tile-pane",attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.data?n.data.area_metadata.map((function(e){return o.a.createElement(u.a,{key:e.name,position:[e.label_location.latitude,e.label_location.longitude],icon:g(n,e.name,a)},o.a.createElement(d.a,null,o.a.createElement("div",{className:"text-center"},o.a.createElement("span",{className:"text-lg capitalize"},e.name)," ",o.a.createElement("br",null),Object(h.j)(n.data,e.name))))})):""))},E=a(15);var b={west:{latitude:1.35735,longitude:103.7},national:{latitude:0,longitude:0},east:{latitude:1.35735,longitude:103.94},central:{latitude:1.35735,longitude:103.82},south:{latitude:1.29587,longitude:103.82},north:{latitude:1.41803,longitude:103.82}};var w=function(e){var t,a,i=e.data,g=window,f=g.innerWidth,w=g.innerHeight,y=Object(r.useState)(0),x=Object(n.a)(y,2),v=x[0],N=x[1];function j(e){var t=e.text,a=e.index;return"12-18"===t?t="Afternoon":"18-06"===t||"00-06"===t?t="Night":"18-00"===t?t="Evening":"06-12"===t&&(t="Morning"),o.a.createElement("button",{className:"bg-white hover:bg-gray-200 text-gray-500 py-1 px-2"+(v===a?" border text-gray-700 font-semibold":" border-b hover:text-gray-800 "),onClick:function(){return N(a)}},t)}return f>500?(t=11,a=50):(t=10,a=40),i.error?o.a.createElement("p",{className:"p-5"},"data.gov.sg is under maintenance and we could not download the current weather forecasts. Please try again later. Sorry for the inconvenience."):i.loading?o.a.createElement(E.a,null):o.a.createElement("div",{className:"relative"},o.a.createElement(p.a,null,o.a.createElement("title",null,"24-hour weather forecasts"),o.a.createElement("meta",{name:"description",content:"In this page you can monitor the next 24 hours weather forecasts for five locations across Singapore"})),o.a.createElement(c.a,{center:[1.3521,103.8198],zoom:t,style:{height:w-108-104,width:"100%"},className:"z-0",zoomControl:!1},o.a.createElement(s.a,{position:"bottomleft"}),o.a.createElement(m.a,{className:"leaflet-tile-pane",attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.data?Object.keys(i.data.items[0].periods[0].regions).map((function(e){return o.a.createElement(u.a,{key:e,position:[b[e].latitude,b[e].longitude],icon:(t=i.data.items[0].periods[v].regions[e],n=a,l.a.icon({iconUrl:Object(h.c)(t),iconSize:[n]}))},o.a.createElement(d.a,null,o.a.createElement("div",{className:"text-center"},o.a.createElement("span",{className:"text-lg capitalize"},e)," ",o.a.createElement("br",null),i.data.items[0].periods[v].regions[e])));var t,n})):""),o.a.createElement("div",{className:"z-10 absolute top-0 right-0 left-0 mx-auto text-center"},o.a.createElement("div",{className:"inline-flex mt-2 shadow-lg"},i.data?i.data.items[0].periods.map((function(e,t){return o.a.createElement(j,{key:e.time.start,text:e.time.start.split("T")[1].split(":")[0]+"-"+e.time.end.split("T")[1].split(":")[0],index:t})})):"")))};var y=function(){var e=window.innerHeight;return o.a.createElement("div",{className:"container-flex mx-auto"},o.a.createElement(p.a,null,o.a.createElement("title",null,"Rain Radar Singapore"),o.a.createElement("meta",{name:"description",content:"This page shows the rain radar data for the past two hours in Singapore.\r The weather radar data is extremely useful since it allows you to assess where it is currently raining\r and how the rain clouds are moving.\r In addition you can also zoom out and see the weather radar for any location in the world."})),o.a.createElement("iframe",{src:"https://www.rainviewer.com/map.html?loc=1.3521,103.8198,9&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=1&rmt=4&c=1&o=83&lm=1&th=0&sm=1&sn=1",width:"100%",frameBorder:"0",title:"Rain Radar",style:{height:e-108-104,width:"100%"},allowFullScreen:!0}))};t.default=function(e){var t=e.dataFor2H,a=e.dataFor24H,i=Object(r.useState)("Rain Radar"),l=Object(n.a)(i,2),c=l[0],s=l[1],m=["Rain Radar"];function u(e){var t=e.text;return o.a.createElement("li",{className:"-mb-px mr-1"},o.a.createElement("span",{className:"bg-white inline-block text-gray-500 py-2 px-4 "+(c===t?" border-l border-t border-r rounded-t text-gray-700 font-semibold":" border-b hover:text-gray-800 "),onClick:function(){return s(t)}},t))}function d(){return o.a.createElement("div",{className:"container mx-auto my-2 text-center text-sm"},o.a.createElement("ul",{className:"flex border-b justify-center"},m.map((function(e){return o.a.createElement(u,{key:e,text:e})}))))}function h(e){var n=e.selection;return"2-h Forecast"===n?o.a.createElement(f,{data:t}):"24-h Forecast"===n?(console.log(a),o.a.createElement(w,{data:a})):o.a.createElement(y,null)}return t.data&&0!==Object.entries(t.data.items[0]).length&&m.unshift("2-h Forecast"),a.data&&0!==Object.entries(a.data.items[0]).length&&m.unshift("24-h Forecast"),o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement(h,{selection:c}))}}}]);
//# sourceMappingURL=18.2e05da75.chunk.js.map