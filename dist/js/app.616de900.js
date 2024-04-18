(function(){"use strict";var t={1486:function(t,e,o){var n=o(9746),i=o(5976),l=o(160);const s=(0,i.Lk)("h1",null,"To-Do List",-1),d={"aria-labelledby":"list-summary",class:"stack-large"};function a(t,e,o,n,a,r){const u=(0,i.g2)("to-do-form"),c=(0,i.g2)("to-do-item");return(0,i.uX)(),(0,i.CE)(i.FK,null,[s,(0,i.bF)(u,{onTodoAdded:r.addToDo},null,8,["onTodoAdded"]),(0,i.Lk)("h2",{id:"list-summary",ref:"listSummary",tabindex:"-1"},(0,l.v_)(r.listSummary),513),(0,i.Lk)("ul",d,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.ToDoItems,(t=>((0,i.uX)(),(0,i.CE)("li",{key:t.id},[(0,i.bF)(c,{id:t.id,label:t.label,done:t.done,onCheckboxChanged:e=>r.updateDoneStatus(t.id),onItemDeleted:e=>r.deleteToDo(t.id),onItemEdited:e=>r.editToDo(t.id,e)},null,8,["id","label","done","onCheckboxChanged","onItemDeleted","onItemEdited"])])))),128))])],64)}o(4114);const r=(0,i.Lk)("h2",{class:"label-wrapper"},[(0,i.Lk)("label",{for:"new-todo-input",class:"label__lg"},"What needs to be done?")],-1),u=(0,i.Lk)("button",{type:"submit",class:"btn btn__primary btn__lg"},"Add",-1);function c(t,e,o,l,s,d){return(0,i.uX)(),(0,i.CE)("form",{onSubmit:e[1]||(e[1]=(0,n.D$)(((...t)=>d.onSubmit&&d.onSubmit(...t)),["prevent"]))},[r,(0,i.bo)((0,i.Lk)("input",{type:"text",id:"new-todo-input",name:"new-todo",autocomplete:"off","onUpdate:modelValue":e[0]||(e[0]=t=>s.label=t),class:"input__lg",required:""},null,512),[[n.Jo,s.label,void 0,{lazy:!0,trim:!0}]]),u],32)}var m={data(){return{label:""}},methods:{onSubmit(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="",this.clearInput("new-todo-input"))},clearInput(t){const e=this.$el.elements.namedItem(t);e&&(e.value="")}}},b=o(1169);const f=(0,b.A)(m,[["render",c]]);var h=f;const p={key:0,class:"stack-small"},v={class:"custom-checkbox"},k=["id","checked"],g=["for"],D={class:"btn-group"},y={class:"visually-hidden"},I={class:"visually-hidden"};function T(t,e,o,n,s,d){const a=(0,i.g2)("to-do-item-edit-form");return s.isEditing?((0,i.uX)(),(0,i.Wv)(a,{key:1,id:o.id,label:o.label,onItemEdited:d.itemEdited,onEditCancelled:d.editCancelled},null,8,["id","label","onItemEdited","onEditCancelled"])):((0,i.uX)(),(0,i.CE)("div",p,[(0,i.Lk)("div",v,[(0,i.Lk)("input",{type:"checkbox",id:o.id,checked:d.isDone,class:"checkbox",onChange:e[0]||(e[0]=e=>t.$emit("checkbox-changed"))},null,40,k),(0,i.Lk)("label",{for:o.id,class:"checkbox-label"},(0,l.v_)(o.label),9,g)]),(0,i.Lk)("div",D,[(0,i.Lk)("button",{type:"button",ref:"editButton",class:"btn",onClick:e[1]||(e[1]=(...t)=>d.toggleToDoItemEditForm&&d.toggleToDoItemEditForm(...t))},[(0,i.eW)(" Edit "),(0,i.Lk)("span",y,(0,l.v_)(o.label),1)],512),(0,i.Lk)("button",{type:"button",class:"btn btn__danger",onClick:e[2]||(e[2]=(...t)=>d.deleteToDo&&d.deleteToDo(...t))},[(0,i.eW)(" Delete "),(0,i.Lk)("span",I,(0,l.v_)(o.label),1)])])]))}const E=["for"],L=["id"],_={class:"btn-group"},C={class:"visually-hidden"},S={type:"submit",class:"btn btn__primary"},w={class:"visually-hidden"};function x(t,e,o,s,d,a){return(0,i.uX)(),(0,i.CE)("form",{class:"stack-small",onSubmit:e[2]||(e[2]=(0,n.D$)(((...t)=>a.onSubmit&&a.onSubmit(...t)),["prevent"]))},[(0,i.Lk)("div",null,[(0,i.Lk)("label",{for:o.id,class:"edit-label"},'Edit Name for "'+(0,l.v_)(o.label)+'"',9,E),(0,i.bo)((0,i.Lk)("input",{type:"text",id:o.id,ref:"labelInput",autocomplete:"off","onUpdate:modelValue":e[0]||(e[0]=t=>d.newLabel=t)},null,8,L),[[n.Jo,d.newLabel,void 0,{lazy:!0,trim:!0}]])]),(0,i.Lk)("div",_,[(0,i.Lk)("button",{type:"button",class:"btn",onClick:e[1]||(e[1]=(...t)=>a.onCancel&&a.onCancel(...t))},[(0,i.eW)(" Cancel "),(0,i.Lk)("span",C,"editing "+(0,l.v_)(o.label),1)]),(0,i.Lk)("button",S,[(0,i.eW)(" Save "),(0,i.Lk)("span",w,"edit for "+(0,l.v_)(o.label),1)])])],32)}var O={props:{id:{required:!0,type:String},label:{required:!0,type:String}},data(){return{newLabel:this.label}},methods:{onSubmit(){this.newLabel&&this.newLabel!==this.label?this.$emit("item-edited",this.newLabel):this.$emit("edit-cancelled")},onCancel(){this.$emit("edit-cancelled")}},mounted(){const t=this.$refs.labelInput;t.focus()}};const $=(0,b.A)(O,[["render",x],["__scopeId","data-v-6856ffb7"]]);var F=$,A={components:{ToDoItemEditForm:F},props:{id:{required:!0,type:String},label:{required:!0,type:String},done:{default:!1,type:Boolean}},data(){return{isEditing:!1}},computed:{isDone(){return this.done}},methods:{toggleToDoItemEditForm(){this.isEditing=!0},deleteToDo(){this.$emit("item-deleted")},editCancelled(){this.isEditing=!1,this.focusOnEditButton()},itemEdited(t){this.$emit("item-edited",t),this.isEditing=!1,this.focusOnEditButton()},focusOnEditButton(){this.$nextTick((()=>{const t=this.$refs.editButton;t.focus()}))}}};const X=(0,b.A)(A,[["render",T],["__scopeId","data-v-9febe2b8"]]);var j=X,B=o(6981),W=o.n(B),q={name:"App",components:{ToDoForm:h,ToDoItem:j},data(){return{ToDoItems:[]}},computed:{listSummary(){const t=this.ToDoItems.filter((t=>t.done)).length;return`${t} out of ${this.ToDoItems.length} completed`}},methods:{addToDo(t){this.ToDoItems.push({id:W()("todo-"),label:t,done:!1}),this.storeToDoItems()},updateDoneStatus(t){const e=this.ToDoItems.find((e=>e.id===t));e&&(e.done=!e.done),this.storeToDoItems()},deleteToDo(t){const e=this.ToDoItems.findIndex((e=>e.id===t));this.ToDoItems.splice(e,1),this.$refs.listSummary.focus(),this.storeToDoItems()},editToDo(t,e){const o=this.ToDoItems.find((e=>e.id===t));o&&(o.label=e),this.storeToDoItems()},storeToDoItems(){localStorage.setItem("ToDoItems",JSON.stringify(this.ToDoItems))}},mounted(){let t=localStorage.getItem("ToDoItems");null!=t&&(this.ToDoItems=JSON.parse(t))}};const z=(0,b.A)(q,[["render",a]]);var J=z;const N=(0,n.Ef)(J);N.mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var l=e[n]={exports:{}};return t[n].call(l.exports,l,l.exports,o),l.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,l){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],l=t[u][2];for(var d=!0,a=0;a<n.length;a++)(!1&l||s>=l)&&Object.keys(o.O).every((function(t){return o.O[t](n[a])}))?n.splice(a--,1):(d=!1,l<s&&(s=l));if(d){t.splice(u--,1);var r=i();void 0!==r&&(e=r)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[n,i,l]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,l,s=n[0],d=n[1],a=n[2],r=0;if(s.some((function(e){return 0!==t[e]}))){for(i in d)o.o(d,i)&&(o.m[i]=d[i]);if(a)var u=a(o)}for(e&&e(n);r<s.length;r++)l=s[r],o.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return o.O(u)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(1486)}));n=o.O(n)})();
//# sourceMappingURL=app.616de900.js.map