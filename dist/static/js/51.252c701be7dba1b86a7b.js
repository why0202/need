webpackJsonp([51],{MEX3:function(t,e){},jkMi:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("Gu7T"),n=o.n(r),a=o("zjrN"),i=o("/DwW"),c={components:{NewTable:a.a},data:function(){var t=this;return{tBody:[],columns:[{title:"网格",key:"name",fixed:"",width:90,align:"center",render:function(e,o){return e("div",o.row.isFooter?{attrs:{class:"table-total"}}:{attrs:{class:"can-click"},on:{click:function(){t._trClick(o.row)}}},o.row.name)}},{title:"渠道总数",key:"trenchAmount",width:80,align:"center",render:function(t,e){return t("div",e.row.isFooter?{attrs:{class:"table-total"}}:{},e.row.trenchAmount?e.row.trenchAmount.toFixed(3):e.row.trenchAmount)}},{title:"零产能渠道数",key:"zeroCapacityTrenchAmount",width:90,align:"center",render:function(t,e){return t("div",e.row.isFooter?{attrs:{class:"table-total"}}:{},e.row.zeroCapacityTrenchAmount?e.row.zeroCapacityTrenchAmount.toFixed(3):e.row.zeroCapacityTrenchAmount)}},{title:"占比%",key:"proportion",width:60,align:"center",render:function(t,e){return t("div",e.row.isFooter?{attrs:{class:"table-total"}}:{},e.row.proportion?e.row.proportion.toFixed(3):e.row.proportion)}},{title:"月环比%",key:"monthChainRelativeRatio",width:80,align:"center",render:function(t,e){return t("div",e.row.isFooter?{attrs:{class:"table-total"}}:{},e.row.monthChainRelativeRatio?e.row.monthChainRelativeRatio.toFixed(3):e.row.monthChainRelativeRatio)}}],updateText:""}},mounted:function(){var t=this;Object(i.g)({branch:t.$route.params.district},function(e){t.updateText=e.description,t.tBody=[].concat(n()(e.data),[{isFooter:!0,name:"合计",trenchAmount:e.statistics.trenchAmount,zeroCapacityTrenchAmount:e.statistics.zeroCapacityTrenchAmount,proportion:e.statistics.proportion,monthChainRelativeRatio:e.statistics.monthChainRelativeRatio}]),t.columns[0].fixed="left"})},methods:{_trClick:function(t){var e=this.$route.path,o=t.name.replace(/#/g,"@").replace(/\//g,"-");this.$router.push(e+"/person/"+o)}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"street-wrap common-width"},[""!==t.updateText?o("div",{staticClass:"update-wrap",domProps:{textContent:t._s(t.updateText)}}):t._e(),t._v(" "),o("div",{staticClass:"content-wrap"},[o("div",{staticClass:"new-table-list-wrap"},[o("new-table",{attrs:{columns:t.columns,data:t.tBody}})],1)]),t._v(" "),o("transition",{attrs:{name:"slide"}},[o("router-view")],1)],1)},staticRenderFns:[]};var l=o("VU/8")(c,s,!1,function(t){o("MEX3")},"data-v-3e9eccda",null);e.default=l.exports}});