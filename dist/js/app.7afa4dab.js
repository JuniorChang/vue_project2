(function(e){function t(t){for(var r,c,u=t[0],l=t[1],i=t[2],d=0,p=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09b8":function(e,t,n){},1003:function(e,t,n){},"135a":function(e,t,n){"use strict";n("1003")},"1ed9":function(e,t,n){"use strict";n("09b8")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"nav"},o=Object(r["g"])("Home"),c=Object(r["g"])("About"),u=Object(r["g"])("Show Players"),l=Object(r["g"])("Add Players");function i(e,t,n,i,s,d){var p=Object(r["x"])("router-link"),b=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["e"])("div",a,[Object(r["h"])(p,{to:"/"},{default:Object(r["F"])((function(){return[o]})),_:1}),Object(r["h"])(p,{to:"/about"},{default:Object(r["F"])((function(){return[c]})),_:1}),Object(r["h"])(p,{to:"/player"},{default:Object(r["F"])((function(){return[u]})),_:1}),Object(r["h"])(p,{to:"/addplayer"},{default:Object(r["F"])((function(){return[l]})),_:1})]),Object(r["h"])(b)])}var s=n("1da1"),d=(n("96cf"),n("b0c0"),n("bc3a")),p=n.n(d),b={name:"App",data:function(){return{}},methods:{update:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.a.patch(update_URL,{name:this.name,role:this.role,server:this.server,status:this.status,items:this.items});case 2:e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},O=(n("fc12"),n("6b0d")),j=n.n(O);const f=j()(b,[["render",i]]);var m=f,v=n("6c02"),h=n("86d5"),y=n.n(h),g=function(e){return Object(r["t"])("data-v-d505adac"),e=e(),Object(r["r"])(),e},w={class:"home"},x=g((function(){return Object(r["e"])("img",{src:y.a},null,-1)})),_=[x];function k(e,t){return Object(r["q"])(),Object(r["d"])("div",w,_)}n("135a");const S={},B=j()(S,[["render",k],["__scopeId","data-v-d505adac"]]);var V=B,G={class:"about"},U=Object(r["e"])("p",null," Looking for a friend to play with or do you need to understand the current meta of the game? ",-1),C=Object(r["e"])("p",null," Look no further as a have the latest infomation on players across different servers. Check if they are online and contact them directly in game with the Name ",-1),R=Object(r["e"])("p",null,"Help improve the data by adding your character. Do remember to update your online status otherwise other players who are trying to contact you may be left dissapointed ",-1),A=[U,C,R];function P(e,t){return Object(r["q"])(),Object(r["d"])("div",G,A)}const N={},J=j()(N,[["render",P]]);var q=J,$=function(e){return Object(r["t"])("data-v-02875ae7"),e=e(),Object(r["r"])(),e},z=$((function(){return Object(r["e"])("h1",null,"Player List",-1)})),E={class:"row"},F={class:"card text-center"},I={class:"card-body"},M={class:"card-title"},H={class:""},D={class:""},L={class:""},T={class:""},W={class:"btn btn-outline-success"},K=Object(r["g"])(" Edit "),Q=["onClick"];function X(e,t,n,a,o,c){var u=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["d"])("div",null,[z,Object(r["e"])("div",E,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(e.playerdata,(function(e){return Object(r["q"])(),Object(r["d"])("div",{class:"col-md-4",key:e.id},[Object(r["e"])("div",F,[Object(r["e"])("div",I,[Object(r["e"])("h4",M," Name: "+Object(r["z"])(e.name),1),Object(r["e"])("p",H,"Server: "+Object(r["z"])(e.server),1),Object(r["e"])("p",D,"Status: "+Object(r["z"])(e.status),1),Object(r["e"])("p",L,"Role: "+Object(r["z"])(e.role),1),Object(r["e"])("p",T,"Items: "+Object(r["z"])(e.items),1),Object(r["e"])("button",W,[Object(r["h"])(u,{to:{name:"editPlayer",params:{playerdata:JSON.stringify({name:e.name,server:e.server,role:e.role,status:e.status,items:e.items,_id:e._id})}}},{default:Object(r["F"])((function(){return[K]})),_:2},1032,["to"])]),Object(r["e"])("button",{class:"btn btn-danger",onClick:function(t){return c.deleteplayer(e._id)}}," Delete ",8,Q)])])])})),128))])])}var Y="https://jr-wildpath-project2.herokuapp.com/showplayer",Z={name:"playerdata",data:function(){return{playerdata:[]}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(Y);case 2:t=e.sent,this.playerdata=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{update:function(e){this.$emit("update-player",e)},deleteplayer:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,p.a.delete("http://localhost:3000/showplayer/".concat(t));case 3:n=e.sent,console.log(n),this.$router.go("/player");case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};n("9596");const ee=j()(Z,[["render",X],["__scopeId","data-v-02875ae7"]]);var te=ee,ne=Object(r["e"])("label",null," Name: ",-1),re=Object(r["e"])("label",null," Server: ",-1),ae=Object(r["g"])(" Alpha "),oe=Object(r["g"])(" Beta "),ce=Object(r["g"])(" Charlie "),ue=Object(r["e"])("label",null," Role: ",-1),le=Object(r["f"])('<option value="adc">Adc</option><option value="solo">Solo</option><option value="mid">Mid</option><option value="sp">Sp</option><option value="roam">roam</option>',5),ie=[le],se=Object(r["e"])("label",null," Status: ",-1),de=Object(r["g"])("Online "),pe=Object(r["g"])("Offline "),be=Object(r["e"])("label",null," Items: ",-1),Oe=Object(r["f"])('<option value="boots">Boots</option><option value="helmet">Helmet</option><option value="gloves">Gloves</option><option value="weapon">Weapon</option><option value="belt">Belt</option>',5),je=[Oe],fe=Object(r["g"])("Cancel");function me(e,t,n,a,o,c){var u=Object(r["x"])("b-form-checkbox"),l=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["e"])("div",null,[ne,Object(r["G"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.name=t})},null,512),[[r["D"],e.name]])]),Object(r["e"])("div",null,[re,Object(r["G"])(Object(r["e"])("input",{type:"radio",value:"Alpha","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.server=t})},null,512),[[r["B"],e.server]]),ae,Object(r["G"])(Object(r["e"])("input",{type:"radio",value:"Beta","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.server=t})},null,512),[[r["B"],e.server]]),oe,Object(r["G"])(Object(r["e"])("input",{type:"radio",value:"Charlie","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.server=t})},null,512),[[r["B"],e.server]]),ce]),Object(r["e"])("div",null,[ue,Object(r["G"])(Object(r["e"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.role=t})},ie,512),[[r["C"],e.role]])]),Object(r["e"])("div",null,[se,Object(r["G"])(Object(r["e"])("input",{type:"radio",value:"online","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.status=t})},null,512),[[r["B"],e.status]]),de,Object(r["G"])(Object(r["e"])("input",{type:"radio",value:"offline","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.status=t})},null,512),[[r["B"],e.status]]),pe]),Object(r["e"])("div",null,[be,Object(r["G"])(Object(r["e"])("select",{multiple:"","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.items=t})},je,512),[[r["C"],e.items]])]),Object(r["e"])("div",null,[Object(r["h"])(u,{id:"checkbox-1",modelValue:e.items,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.items=t}),value:"boots",name:"checkbox-1"},null,8,["modelValue"])]),Object(r["e"])("button",{onClick:t[9]||(t[9]=function(){return c.processAdd&&c.processAdd.apply(c,arguments)}),class:"btn btn-success custom_btn1"}," Add "),Object(r["h"])(l,{to:"player",class:"btn btn-primary custom_btn"},{default:Object(r["F"])((function(){return[fe]})),_:1})])}var ve="http://localhost:3000/addplayer",he={name:"addplayer",data:function(){return{name:"",role:[],server:[],status:[],items:[]}},methods:{processAdd:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.a.post(ve,{name:this.name,role:this.role,server:this.server,status:this.status,items:this.items});case 2:t=e.sent,console.log(t.data),this.$emit("new-player-added"),console.log(this.$router),this.$router.push("/player");case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};n("1ed9");const ye=j()(he,[["render",me]]);var ge=ye,we={class:"card"},xe=Object(r["g"])("Name: "),_e=Object(r["g"])(" Server: "),ke=Object(r["g"])(" Alpha "),Se=Object(r["g"])(" Beta "),Be=Object(r["g"])(" Charlie "),Ve=Object(r["g"])(" Role: "),Ge=Object(r["g"])(" Adc "),Ue=Object(r["g"])(" Sp "),Ce=Object(r["g"])(" Roam "),Re=Object(r["g"])(" Mid "),Ae=Object(r["g"])(" Solo "),Pe=Object(r["g"])(" Status: "),Ne=Object(r["g"])(" Online "),Je=Object(r["g"])(" Offline "),qe=Object(r["g"])(" Items: "),$e=Object(r["f"])('<option value="boots" data-v-49dde1d0>Boots</option><option value="helmet" data-v-49dde1d0>Helmet</option><option value="gloves" data-v-49dde1d0>Gloves</option><option value="weapon" data-v-49dde1d0>Weapon</option><option value="belt" data-v-49dde1d0>Belt</option>',5),ze=[$e];function Ee(e,t,n,a,o,c){return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["e"])("h1",null,"Editing "+Object(r["z"])(JSON.parse(n.playerdata).name),1),Object(r["e"])("div",we,[Object(r["e"])("div",null,[Object(r["e"])("h6",null,[xe,Object(r["G"])(Object(r["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.name=t})},null,512),[[r["D"],e.name]])])]),Object(r["e"])("div",null,[Object(r["e"])("h6",null,[_e,Object(r["G"])(Object(r["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.server=t}),type:"radio",value:"Alpha"},null,512),[[r["B"],e.server]]),ke,Object(r["G"])(Object(r["e"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.server=t}),type:"radio",value:"Beta"},null,512),[[r["B"],e.server]]),Se,Object(r["G"])(Object(r["e"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.server=t}),type:"radio",value:"Charlie"},null,512),[[r["B"],e.server]]),Be])]),Object(r["e"])("div",null,[Object(r["e"])("h6",null,[Ve,Object(r["G"])(Object(r["e"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.role=t}),type:"radio",value:"adc"},null,512),[[r["B"],e.role]]),Ge,Object(r["G"])(Object(r["e"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.role=t}),type:"radio",value:"sp"},null,512),[[r["B"],e.role]]),Ue,Object(r["G"])(Object(r["e"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.role=t}),type:"radio",value:"roam"},null,512),[[r["B"],e.role]]),Ce,Object(r["G"])(Object(r["e"])("input",{"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.role=t}),type:"radio",value:"mid"},null,512),[[r["B"],e.role]]),Re,Object(r["G"])(Object(r["e"])("input",{"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.role=t}),type:"radio",value:"solo"},null,512),[[r["B"],e.role]]),Ae])]),Object(r["e"])("div",null,[Pe,Object(r["G"])(Object(r["e"])("input",{"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.status=t}),type:"radio",value:"online"},null,512),[[r["B"],e.status]]),Ne,Object(r["G"])(Object(r["e"])("input",{"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.status=t}),type:"radio",value:"offline"},null,512),[[r["B"],e.status]]),Je]),Object(r["e"])("div",null,[qe,Object(r["G"])(Object(r["e"])("select",{multiple:"","onUpdate:modelValue":t[11]||(t[11]=function(t){return e.items=t})},ze,512),[[r["C"],e.items]])]),Object(r["e"])("div",null,[Object(r["e"])("button",{onClick:t[12]||(t[12]=function(){return c.Editplayer&&c.Editplayer.apply(c,arguments)}),class:"btn btn-success custom_btn1"},"Confirm "),Object(r["e"])("button",{onClick:t[13]||(t[13]=function(){return c.Cancel&&c.Cancel.apply(c,arguments)}),class:"btn btn-danger"}," Cancel ")])])])}var Fe={name:"EditPlayer",data:function(){return{playerid:JSON.parse(this.playerdata)._id,name:JSON.parse(this.playerdata).name,role:JSON.parse(this.playerdata).role,server:JSON.parse(this.playerdata).server,status:JSON.parse(this.playerdata).status,items:JSON.parse(this.playerdata).items}},methods:{Editplayer:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("http://localhost:3000/showplayer/".concat(this.playerid,"/update"),{name:this.name,role:this.role,server:this.server,status:this.status,items:this.items});case 2:e.sent,this.$router.push("/player");case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),Cancel:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$router.push("/player");case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},props:["playerdata"]};n("eb5d");const Ie=j()(Fe,[["render",Ee],["__scopeId","data-v-49dde1d0"]]);var Me=Ie,He=[{path:"/",name:"Home",component:V},{path:"/editplayer",name:"editPlayer",component:Me,props:!0},{path:"/about",name:"About",component:q},{path:"/player",name:"player",component:te},{path:"/AddPlayer",name:"AddPlayer",component:ge}],De=Object(v["a"])({history:Object(v["b"])("/"),routes:He}),Le=De;n("f9e3");Object(r["c"])(m).use(Le).mount("#app")},"83b1":function(e,t,n){},"86d5":function(e,t,n){e.exports=n.p+"img/bg.fb127869.jpg"},9596:function(e,t,n){"use strict";n("c51e")},c51e:function(e,t,n){},eb5d:function(e,t,n){"use strict";n("83b1")},fc12:function(e,t,n){"use strict";n("fc55")},fc55:function(e,t,n){}});
//# sourceMappingURL=app.7afa4dab.js.map