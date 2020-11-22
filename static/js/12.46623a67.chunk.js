(this["webpackJsonpair-quality-sg-react"]=this["webpackJsonpair-quality-sg-react"]||[]).push([[12],{270:function(e,t,a){"use strict";a.r(t);var r=a(10),o=a(0),n=a.n(o),l=a(82),d=a(9),s=a(62);var i=function(e){var t,a=e.data,r=e.pollutants,o=e.stationName,i=e.footNote;t=window.innerWidth>500?150:250;var c={labels:["January","February","March","April","May","June","July"],datasets:[{label:"PSI",fill:!1,lineTension:.1,borderColor:"rgb(116, 111, 117)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(116, 111, 117)",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgb(116, 111, 117)",pointHoverBorderColor:"#ddd",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]},{label:"PSI",fill:!1,lineTension:.1,borderColor:"#9467bd",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#9467bd",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#9467bd",pointHoverBorderColor:"#ddd",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]},{label:"PSI",fill:!1,lineTension:.1,borderColor:"#8c564b",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#8c564b",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#8c564b",pointHoverBorderColor:"#ddd",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]},m=null;return a.error&&(m=n.a.createElement("div",null,"Could not fetch API")),a.loading&&(m=n.a.createElement(d.a,null)),a.data&&(c.labels=a.data.items.map((function(e){return e.timestamp.split("T")[1].split(":")[0]})),r.map((function(e,t){c.datasets[t].data=a.data.items.map((function(t){return t.readings[e][o]})),c.datasets[t].label=Object(s.g)(e,!1)})),m=n.a.createElement("div",{className:"container mx-auto my-3 p-4 shadow-lg border rounded"},n.a.createElement(l.Line,{data:c,options:{responsive:!0,scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Hour"},ticks:{major:{fontStyle:"bold",fontColor:"#FF0000"}},gridLines:{display:!1}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Sub-index value"}}]}},height:t}),i.map((function(e){return n.a.createElement("p",{key:e,className:"text-xs text-center text-gray-800"},e)})))),n.a.createElement("div",null,m)},c=a(72),m=a(81),u=a(79);var p=function(e){var t=e.selected,a=e.listItems,l=e.setValue,d=Object(o.useState)(!1),s=Object(r.a)(d,2),i=s[0],c=s[1];function p(e){var t=e.item;return n.a.createElement("span",{className:"block py-1 px-8 hover:bg-gray-200 capitalize",onClick:function(){c(!i),l(t)}},t)}return n.a.createElement("div",{className:"relative"},n.a.createElement("button",{className:"bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",onClick:function(){return c(!i)}},n.a.createElement("span",{className:"capitalize mx-2"},t),n.a.createElement(m.a,{icon:u.a})),n.a.createElement("div",{className:"bg-gray-100 absolute right-0 rounded mt-1 py-1 text-center shadow-md"+(i?"":" hidden")},a.map((function(e){return n.a.createElement(p,{key:e,item:e})}))))},b=a(17);t.default=function(e){var t=e.data,a=e.locationUser,l=Object(o.useState)(!1),m=Object(r.a)(l,2),u=m[0],y=m[1];Object(o.useEffect)((function(){a.data&&t.data&&y(Object(s.b)(t.data,a.data).name)}),[t.data,a.data]);var f="";return t.error&&(f=n.a.createElement("div",{className:"flex justify-center content-center my-5"},n.a.createElement("p",null,"Could download the necessary data to plot the results"))),(t.loading||a.loading)&&(f=n.a.createElement(d.a,null)),a.data&&t.data&&(f=0!==t.data.items.length&&u?n.a.createElement("div",{className:"container mx-auto"},n.a.createElement(b.a,null,n.a.createElement("title",null,"Historical pollution data"),n.a.createElement("meta",{name:"description",content:"This page shows you the concentrations, over the last 24 hours, of the major outdoor pollutants: Particulate matter (PM10 and PM2.5), Ozone (O3), Nitrogen Oxide (NOx), Sulfur Oxide (SOx) and Carbon Monoxide in Singapore."})),n.a.createElement("div",{className:"flex justify-center content-center"},n.a.createElement("p",{className:"py-2 mr-2"},"Pollution last 24-h. Station:"),n.a.createElement(p,{selected:u,listItems:["north","south","central","east","west"],setValue:y})),n.a.createElement(i,{data:t,pollutants:["pm10_sub_index","pm25_sub_index","no2_one_hour_max"],stationName:u,footNote:["* computed on 24-hour average Particulate Matter (PM) 10 reading (\xb5g/m3)","** computed on 24-hour average Particulate Matter (PM) 2.5 reading (\xb5g/m3)"]}),n.a.createElement(i,{data:t,pollutants:["o3_sub_index","co_sub_index","so2_sub_index"],stationName:u,footNote:["* computed based on 8-hour average Ozone reading (\xb5g/m3)","** computed on 8-hour average Carbon Monoxide (CO) reading(mg/m3)","*** computed on 24-hour average Sulphur Dioxide (SO2) reading (\xb5g/m3)"]}),n.a.createElement(c.a,{index:"Sub-Index value"})):n.a.createElement("div",{className:"flex justify-center content-center my-5"},n.a.createElement("p",null,"Could download the necessary data to plot the results"))),f}},72:function(e,t,a){"use strict";var r=a(0),o=a.n(r);t.a=function(e){var t=e.index;return o.a.createElement("div",{className:"flex mx-auto justify-center py-3"},o.a.createElement("table",{className:"table-auto text-center"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"px-4 py-1"},t),o.a.createElement("th",{className:"px-4 py-1"},"Description"))),o.a.createElement("tbody",null,o.a.createElement("tr",{className:"font-medium",style:{color:"#2ca02c"}},o.a.createElement("td",{className:"border px-4 py-1"},"0 - 50"),o.a.createElement("td",{className:"border px-4 py-1"},"Good")),o.a.createElement("tr",{className:"font-medium",style:{color:"#1f77b4"}}," ",o.a.createElement("td",{className:"border px-4 py-1"},"51 - 100"),o.a.createElement("td",{className:"border px-4 py-1"},"Moderate")),o.a.createElement("tr",{className:"font-medium",style:{color:"#fcc105"}},o.a.createElement("td",{className:"border px-4 py-1"},"101 - 200"),o.a.createElement("td",{className:"border px-4 py-1"},"Unhealthy")),o.a.createElement("tr",{className:"font-medium",style:{color:"#ff7f0e"}},o.a.createElement("td",{className:"border px-4 py-1"},"201 - 300"),o.a.createElement("td",{className:"border px-4 py-1"},"Very Unhealthy")),o.a.createElement("tr",{className:"font-medium",style:{color:"#d62728"}},o.a.createElement("td",{className:"border px-4 py-1"},"Above 300"),o.a.createElement("td",{className:"border px-4 py-1"},"Hazardous")))))}}}]);
//# sourceMappingURL=12.46623a67.chunk.js.map