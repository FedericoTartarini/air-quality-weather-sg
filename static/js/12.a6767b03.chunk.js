(this["webpackJsonpair-quality-sg-react"]=this["webpackJsonpair-quality-sg-react"]||[]).push([[12],{275:function(e,t,a){"use strict";a.r(t);var r=a(18),n=a(0),o=a.n(n),l=a(86),i=a(15),d=a(66);var s=function(e){var t,a=e.data,r=e.pollutants,n=e.stationName,s=e.footNote;t=window.innerWidth>500?150:250;var c={labels:["January","February","March","April","May","June","July"],datasets:[{label:"PSI",fill:!1,lineTension:.1,borderColor:"rgb(116, 111, 117)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(116, 111, 117)",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgb(116, 111, 117)",pointHoverBorderColor:"#ddd",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]},{label:"PSI",fill:!1,lineTension:.1,borderColor:"#9467bd",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#9467bd",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#9467bd",pointHoverBorderColor:"#ddd",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]},{label:"PSI",fill:!1,lineTension:.1,borderColor:"#8c564b",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#8c564b",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#8c564b",pointHoverBorderColor:"#ddd",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]},m=null;return a.error&&(m=o.a.createElement("div",null,"Could not fetch API")),a.loading&&(m=o.a.createElement(i.a,null)),a.data&&(c.labels=a.data.items.map((function(e){return e.timestamp.split("T")[1].split(":")[0]})),r.map((function(e,t){c.datasets[t].data=a.data.items.map((function(t){return t.readings[e][n]})),c.datasets[t].label=Object(d.g)(e,!1)})),m=o.a.createElement("div",{className:"container mx-auto my-3 p-4 shadow-lg border rounded"},o.a.createElement(l.Line,{data:c,options:{responsive:!0,scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Hour"},ticks:{major:{fontStyle:"bold",fontColor:"#FF0000"}},gridLines:{display:!1}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Sub-index value"}}]}},height:t}),s.map((function(e){return o.a.createElement("p",{key:e,className:"text-xs text-center text-gray-800"},e)})))),o.a.createElement("div",null,m)},c=a(76),m=a(85),u=a(83);var p=function(e){var t=e.selected,a=e.listItems,l=e.setValue,i=Object(n.useState)(!1),d=Object(r.a)(i,2),s=d[0],c=d[1];function p(e){var t=e.item;return o.a.createElement("span",{className:"block py-1 px-8 hover:bg-gray-200 capitalize",onClick:function(){c(!s),l(t)}},t)}return o.a.createElement("div",{className:"relative"},o.a.createElement("button",{className:"bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",onClick:function(){return c(!s)}},o.a.createElement("span",{className:"capitalize mx-2"},t),o.a.createElement(m.a,{icon:u.a})),o.a.createElement("div",{className:"bg-gray-100 absolute right-0 rounded mt-1 py-1 text-center shadow-md"+(s?"":" hidden")},a.map((function(e){return o.a.createElement(p,{key:e,item:e})}))))},b=a(28);t.default=function(e){var t=e.data,a=e.locationUser,l=Object(n.useState)(!1),m=Object(r.a)(l,2),u=m[0],y=m[1];Object(n.useEffect)((function(){a.data&&t.data&&y(Object(d.b)(t.data,a.data).name)}),[t.data,a.data]);var f="";return t.error&&(f=o.a.createElement("div",{className:"flex justify-center content-center"},o.a.createElement("p",{className:"p-5"},"data.gov.sg is under maintenance and we could not download the data to generate the plots. Please try again later. Sorry for the inconvenience."))),(t.loading||a.loading)&&(f=o.a.createElement(i.a,null)),a.data&&t.data&&(f=0!==t.data.items.length&&u?o.a.createElement("div",{className:"container mx-auto"},o.a.createElement(b.a,null,o.a.createElement("title",null,"Historical pollution data"),o.a.createElement("meta",{name:"description",content:"This page shows you the concentrations, over the last 24 hours, of the major outdoor\r pollutants: Particulate matter (PM10 and PM2.5), Ozone (O3), Nitrogen Oxide (NOx), Sulfur Oxide (SOx) and Carbon\r Monoxide in Singapore."})),o.a.createElement("div",{className:"flex justify-center content-center"},o.a.createElement("p",{className:"py-2 mr-2"},"Pollution last 24-h. Station:"),o.a.createElement(p,{selected:u,listItems:["north","south","central","east","west"],setValue:y})),o.a.createElement(s,{data:t,pollutants:["pm10_sub_index","pm25_sub_index","no2_one_hour_max"],stationName:u,footNote:["* computed on 24-hour average Particulate Matter (PM) 10 reading (\xb5g/m3)","** computed on 24-hour average Particulate Matter (PM) 2.5 reading (\xb5g/m3)"]}),o.a.createElement(s,{data:t,pollutants:["o3_sub_index","co_sub_index","so2_sub_index"],stationName:u,footNote:["* computed based on 8-hour average Ozone reading (\xb5g/m3)","** computed on 8-hour average Carbon Monoxide (CO) reading(mg/m3)","*** computed on 24-hour average Sulphur Dioxide (SO2) reading (\xb5g/m3)"]}),o.a.createElement(c.a,{index:"Sub-Index value"})):o.a.createElement("div",{className:"flex justify-center content-center"},o.a.createElement("p",{className:"p-5"},"data.gov.sg is under maintenance and we could not download the data to generate the plots. Please try again later. Sorry for the inconvenience."))),f}},76:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.index;return n.a.createElement("div",{className:"flex mx-auto justify-center py-3"},n.a.createElement("table",{className:"table-auto text-center"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"px-4 py-1"},t),n.a.createElement("th",{className:"px-4 py-1"},"Description"))),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"font-medium",style:{color:"#2ca02c"}},n.a.createElement("td",{className:"border px-4 py-1"},"0 - 50"),n.a.createElement("td",{className:"border px-4 py-1"},"Good")),n.a.createElement("tr",{className:"font-medium",style:{color:"#1f77b4"}}," ",n.a.createElement("td",{className:"border px-4 py-1"},"51 - 100"),n.a.createElement("td",{className:"border px-4 py-1"},"Moderate")),n.a.createElement("tr",{className:"font-medium",style:{color:"#fcc105"}},n.a.createElement("td",{className:"border px-4 py-1"},"101 - 200"),n.a.createElement("td",{className:"border px-4 py-1"},"Unhealthy")),n.a.createElement("tr",{className:"font-medium",style:{color:"#ff7f0e"}},n.a.createElement("td",{className:"border px-4 py-1"},"201 - 300"),n.a.createElement("td",{className:"border px-4 py-1"},"Very Unhealthy")),n.a.createElement("tr",{className:"font-medium",style:{color:"#d62728"}},n.a.createElement("td",{className:"border px-4 py-1"},"Above 300"),n.a.createElement("td",{className:"border px-4 py-1"},"Hazardous")))))}}}]);
//# sourceMappingURL=12.a6767b03.chunk.js.map