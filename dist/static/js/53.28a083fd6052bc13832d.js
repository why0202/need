webpackJsonp([53],{"5edw":function(t,n){},hNsD:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("Gu7T"),i=a.n(e),r=a("IhBI"),o=a("4AKl"),c=a("zjrN"),s=a("7AB6"),l={components:{Headers:r.a,TopBar:o.a,NewTable:c.a},data:function(){return{yearAndmonthData:[],barData:[],year:(new Date).getFullYear(),month:"",show:!1,dateList:[],columns:[{title:"分类",key:"classification",fixed:"left",width:90,colspan:"2",align:"center",render:function(t,n){return t("div",{},n.row.oIndex?"":n.row.classification)}},{title:"指标项",key:"indicatorItem",width:200,align:"center",render:function(t,n){return t("div",{style:{"text-align":"left","padding-left":"5px"}},n.row.indicatorItem)}},{title:"占比 / 总量",key:"indicatorProgress",width:80,align:"center"},{title:"月环比%",key:"monthChainRelativeRatio",width:80,align:"center"}],tBody:[]}},created:function(){var t,n=this;t=function(t){var a=[];t.forEach(function(t,n){var e=t.split("-"),i=e[0],r=e[1];a.find(function(t){return t.name===i})?a.forEach(function(t){t.name===i&&t.children.push({id:n,name:r+"月",str:r,active:!1})}):a.unshift({name:i,children:[{id:n,name:r+"月",str:r,active:!1}]})}),a.forEach(function(t,a){n.dateList.push(t.name),a||(n.barData=t.children)})},Object(s.a)("/trenchTransition/findMonth",{}).then(function(n){return t(n)})},methods:{onCancel:function(){this.show=!1},onConfirm:function(t){this.year=t,this.onCancel()},_barClick:function(t){t&&(this.month=t.str)},_getListApi:function(){var t,n,a=this;t={month:a.year+"-"+a.month},n=function(t){var n=[],e=0;t.forEach(function(t){n.find(function(n){return n===t.classification})?e++:(e=0,n.push(t.classification)),t.oIndex=e}),a.tBody=[].concat(i()(t))},Object(s.a)("/trenchTransition/findTrenchTransition",t).then(function(t){return n(t)})}},watch:{month:function(){this._getListApi()},year:function(t,n){var a=this;t!==n&&""!==n&&(JSON.parse(localStorage.getItem("yearData"))||[]).forEach(function(n){n.name===t&&(a.barData=n.children)})}}},h={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"trench-wrap common-width"},[a("headers",{attrs:{showRight:""}}),t._v(" "),a("div",{staticClass:"top-date-wrap"},[a("div",{staticClass:"year-wrap",on:{click:function(n){t.show=!0}}},[t._v(t._s(t.year)+"年")]),t._v(" "),a("div",{staticClass:"month-wrap"},[a("top-bar",{ref:"vbar1",attrs:{data:t.barData},on:{barClick:t._barClick}})],1)]),t._v(" "),a("div",{staticClass:"trench-view-wrap"},[a("div",{staticClass:"new-table-list-wrap"},[a("new-table",{attrs:{columns:t.columns,data:t.tBody}})],1)]),t._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:t.dateList},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1)],1)},staticRenderFns:[]};var d=a("VU/8")(l,h,!1,function(t){a("5edw")},"data-v-3e3326be",null);n.default=d.exports}});