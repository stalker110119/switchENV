webpackJsonp([1],{"0HI2":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o={data:function(){return{level:[{key:"php74",value:"php74"},{key:"php80",value:"php80"}],applist:[{key:"php74",value:"php74"},{key:"php80",value:"php80"}],form:{region:"",type:[]},activeName:"first"}},created:function(){},methods:{open1:function(){this.$notify({title:"已终止",message:"您已成功终止程序运行",type:"success"})},open2:function(){this.$notify({title:"已保存",message:"已保存当前配置",type:"success"})},onSubmit:function(){this.open2(),console.log(this.form.region),console.log(this.form.type)},StopApp:function(){this.open1()},handleClick:function(e,t){console.log(e,t)}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{margin:"auto",width:"350px",padding:"5%","background-color":"rgb(243, 246, 253)","text-align":"center"},attrs:{id:"app"}},[n("div",[n("el-button",{attrs:{type:"primary",plain:""}},[e._v("Switch Env V1.0")])],1),e._v(" "),n("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"软件配置",name:"first"}},[n("div",{staticStyle:{"background-color":"#fff","box-shadow":"0px 4px 10px darkgrey",padding:"5px","text-align":"center"}},[n("div",{staticStyle:{height:"1rem"}}),e._v(" "),n("div",{staticStyle:{height:"1rem"}}),e._v(" "),n("el-form",{ref:"form",attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"软件列表"}},[n("el-select",{attrs:{placeholder:"请选择软件版本"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},e._l(e.applist,function(e,t){return n("el-option",{key:t,attrs:{label:e.key,value:e.value}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"软件版本"}},[n("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.level,function(e,t){return n("el-radio",{key:t,attrs:{label:e.key}})}),1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交保存")])],1)],1)],1)]),e._v(" "),n("el-tab-pane",{attrs:{label:"版本管理",name:"second"}},[e._v("版本管理")]),e._v(" "),n("el-tab-pane",{attrs:{label:"程序设置",name:"third"}},[n("el-button",{attrs:{type:"danger"},on:{click:e.StopApp}},[e._v("终止程序")])],1)],1)],1)},staticRenderFns:[]};var r=n("VU/8")(o,l,!1,function(e){n("0HI2")},null,null).exports,i=n("zL8q"),p=n.n(i),c=(n("tvR6"),n("mtWM"));a.default.config.productionTip=!1,a.default.prototype.$axios=c.a,a.default.use(p.a),new a.default({el:"#app",render:function(e){return e(r)}})},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2b9e02318e46bb8745bf.js.map