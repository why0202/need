webpackJsonp([12],{"Uf+E":function(t,a){},mNMX:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("Gu7T"),o=e.n(n),r=e("IhBI"),s=e("rZ/o"),i=e("4AKl"),c=e("FeFv"),l=e("tRgf"),u={components:{Headers:r.a,BScroll:s.a,TopBar:i.a,VTable:c.a},data:function(){return{year:this.$route.params.month.split("-")[0],month:"",barData:[],tHead:[],tBody:[],tFoot:[],isLinkNumberMin:0,isLinkNumberMax:100,show:!1,columns:[]}},computed:{_setTitle:function(){return this.$route.params.street+" "+this.month+"月 销售收入考核进度表(万元)"}},mounted:function(){var t=this,a=JSON.parse(localStorage.getItem("yearData"));a.length&&a.forEach(function(a){t.columns.push(a.name),a.name===t.year&&(t.barData=a.children.map(function(a){return a.str===t.$route.params.month.split("-")[1]&&(a.active=!0),a}))})},methods:{onCancel:function(){this.show=!1},onConfirm:function(t){this.year=t,this.onCancel()},_trClick:function(t,a){if(a&&t.canClick){if("-"===t.text[a])return;var e=this.$route.params,n=e.type,o=e.name,r=e.street;localStorage.setItem("name",t.account);var s=this.tHead[a].replace(/\//g,"-").replace(/%/g,"@");this.$router.push("/menu/traction/"+this.year+"-"+this.month+"/"+n+"/"+o+"/grid/"+r+"/manager/"+t.name+"/"+s)}},_barClick:function(t){t&&(this.month=t.str)},_getApi:function(){var t=this,a=JSON.parse(localStorage.getItem("role"));t.$post("/incomeconstituent/findSalesManagerIncomeConstituent",{month:t.year+"-"+t.month,branch:t.$route.params.name,gridding:t.$route.params.street}).then(function(e){t.tHead=[e.boxhead].concat(o()(e.incomeItemList)),t.tBody=[],e.data.forEach(function(e){var n={name:e.name,account:e.account,text:[e.name].concat(o()(e.itemList.map(function(t){return Object(l.c)(t.complete)})))};3===a.role?e.account===localStorage.getItem("name")?n.canClick=!0:n.canClick=!1:n.canClick=!0,t.tBody.push(n)}),t.tFoot=["合计"].concat(o()(e.statistics.itemList.map(function(t){return Object(l.c)(t.complete)})))})}},watch:{month:function(){this._getApi()},year:function(t,a){var e=this;t!==a&&JSON.parse(localStorage.getItem("yearData")).forEach(function(a){a.name===t&&(e.year=a.name,e.barData=a.children)})}}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"manager-wrap common-width"},[e("headers",{attrs:{showRight:""}}),t._v(" "),e("div",{staticClass:"top-date-wrap"},[e("div",{staticClass:"year-wrap",on:{click:function(a){t.show=!0}}},[t._v(t._s(t.year)+"年")]),t._v(" "),e("div",{staticClass:"month-wrap"},[e("top-bar",{attrs:{data:t.barData},on:{barClick:t._barClick}})],1)]),t._v(" "),e("div",{staticClass:"title-wrap",domProps:{textContent:t._s(t._setTitle)}}),t._v(" "),e("div",{staticClass:"next-content-wrap"},[e("div",{staticClass:"table-wrap"},[e("table",[e("thead",[e("tr",{attrs:{border:"0"}},t._l(t.tHead,function(a){return e("th",{domProps:{innerHTML:t._s(a)}})}),0)])]),t._v(" "),e("b-scroll",[e("table",{staticClass:"content-table"},[e("thead",{staticClass:"hide-header"},[e("tr",{attrs:{border:"0"}},t._l(t.tHead,function(a){return e("th",{domProps:{innerHTML:t._s(a)}})}),0)]),t._v(" "),e("tbody",[t.$store.state.isLoading||0!==t.tBody.length?t._l(t.tBody,function(a,n){return e("tr",{key:n},t._l(a.text,function(n,o){return e("td",{key:o,class:{"can-click":a.canClick},domProps:{innerHTML:t._s(n)},on:{click:function(e){return t._trClick(a,o)}}})}),0)}):e("tr",[e("td",{staticClass:"not-date",attrs:{colspan:"5"}},[t._v("没有数据")])])],2)])])],1)]),t._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1),t._v(" "),e("transition",{attrs:{name:"slide"}},[e("router-view")],1)],1)},staticRenderFns:[]};var h=e("VU/8")(u,m,!1,function(t){e("Uf+E")},"data-v-ff2d2874",null);a.default=h.exports}});