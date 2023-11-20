"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[81803],{663873:(e,l,t)=>{function r(e,l,t){var r;return(l="symbol"==typeof(r=function(e,l){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,l||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(e)}(l,"string"))?r:String(r))in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}t.d(l,{ZP:()=>a,f7:()=>s,y$:()=>i});let s=" > ",i=(e,l)=>l?`${l}${s}${e}`:e,_=(e,l)=>e.displayName<l.displayName?-1:e.displayName>l.displayName?1:0,a=class{constructor(){r(this,"nodeMap",{}),r(this,"treeRoot",null),r(this,"getNodeMap",()=>this.nodeMap),r(this,"getNode",e=>this.nodeMap[e]||null),r(this,"getRoot",()=>this.treeRoot),r(this,"getPreOrderListTree",()=>this.preOrderListTree),r(this,"getRecursivelyOpenTreeFromNode",e=>{let l=[];if(e.isExpanded){let t=[],r=e.children||[],s=r.filter(e=>e.numChildren>0),i=r.filter(e=>0===e.numChildren),a=s.sort(_),o=i.sort(_),c=[].concat(o,a);c.forEach(e=>{let l=this.getNode(e.fullyQualifiedPath);l&&t.push(l)},this),t.forEach((e,t)=>{l=l.concat([e],this.getRecursivelyOpenTreeFromNode(e))},this)}return l}),r(this,"collapseAllChildrenNodes",e=>{var l;e&&(e.isExpanded=!1,null===(l=e.children)||void 0===l||l.forEach(e=>{this.collapseAllChildrenNodes(e)}))}),r(this,"populatePreOrderListTree",e=>{let l=[],t=e=>{var r;l.push(e),null===(r=e.children)||void 0===r||r.forEach(e=>{t(e)})};return t(null!=e?e:this.getRoot()),this.preOrderListTree=l,l}),r(this,"constructChildTree",({displayName:e,curData:l,parent:t,initialSelectedStatus:r="NOT_SELECTED",selectLeaves:s=!1,ordered:_=!1})=>{let a=i(e,t&&t.fullyQualifiedPath),o={displayName:e,fullyQualifiedPath:a,parent:t,children:null,numChildren:0,numFullySelectedChildren:0,numPartiallySelectedChildren:0,selectedStatus:r,isExpanded:!1,level:t?t.level+1:0,expandOnSelect:!1};if(Object.keys(l).length>0){let e=new Map([...Object.entries(l)]);_&&(e=new Map([...Object.entries(l)].sort()));let t=[];for(let[l,i]of e)t.push(this.constructChildTree({displayName:l,curData:i,parent:o,initialSelectedStatus:r,selectLeaves:s}));o.children=t,o.numChildren=t.length}else s&&(o.selectedStatus="FULLY_SELECTED");return this.nodeMap[a]=o,o}),r(this,"partiallySelect",e=>{if("NOT_SELECTED"===e.selectedStatus){e.selectedStatus="PARTIALLY_SELECTED";let{parent:l}=e;l&&(l.numPartiallySelectedChildren+=1,this.partiallySelect(l))}}),r(this,"select",(e,l=!1,t=!1,r=!1)=>{if("FULLY_SELECTED"===e.selectedStatus)return e;if(e.children&&!l){let s=r&&!l&&!t;e.children.forEach(e=>this.select(e,!1,!0,s))}r&&(e.isExpanded=!0);let{parent:s}=e;return s&&(s.numFullySelectedChildren+=1,"PARTIALLY_SELECTED"===e.selectedStatus&&(s.numPartiallySelectedChildren-=1),t||(s.numFullySelectedChildren===s.numChildren?this.select(s,!0,!1):this.partiallySelect(s))),e.selectedStatus="FULLY_SELECTED",e}),r(this,"partiallyDeselect",e=>{if("PARTIALLY_SELECTED"!==e.selectedStatus&&"FULLY_SELECTED"===e.selectedStatus){e.selectedStatus="PARTIALLY_SELECTED";let{parent:l}=e;l&&(l.numFullySelectedChildren-=1,l.numPartiallySelectedChildren+=1,"FULLY_SELECTED"===l.selectedStatus&&this.partiallyDeselect(l))}}),r(this,"deselect",(e,l=!1,t=!1)=>{if("NOT_SELECTED"===e.selectedStatus)return e;e.children&&!l&&e.children.forEach(e=>this.deselect(e,!1,!0));let{parent:r}=e;return r&&("FULLY_SELECTED"===e.selectedStatus?r.numFullySelectedChildren-=1:"PARTIALLY_SELECTED"===e.selectedStatus&&(r.numPartiallySelectedChildren-=1),t||(0===r.numFullySelectedChildren&&0===r.numPartiallySelectedChildren?this.deselect(r,!0,!1):"FULLY_SELECTED"===e.selectedStatus&&this.partiallyDeselect(r))),e.selectedStatus="NOT_SELECTED",e}),r(this,"updateFilterTree",(e,{expandChildrenOnSelect:l=!0}={})=>{let t=this.getNode(e);t&&("PARTIALLY_SELECTED"===t.selectedStatus||"FULLY_SELECTED"===t.selectedStatus?this.deselect(t):this.select(t,!1,!1,l))}),r(this,"updateTreeWithAPISelectedFilter",(e,l="")=>{if(e){let t=Object.keys(e);if(t.length>0)t.forEach(t=>{let r=e[t],s=i(t,l);this.updateTreeWithAPISelectedFilter(r,s)});else{let e=this.getNode(l);e&&this.select(e)}}}),r(this,"createShallowTreeFromAPISelectedFilters",(e,l)=>(this.treeRoot=this.constructChildTree({displayName:e,curData:l,parent:null,initialSelectedStatus:"PARTIALLY_SELECTED",selectLeaves:!0}),this.treeRoot)),r(this,"assignNewTree",(e,l)=>{l&&(this.treeRoot=e),this.nodeMap[e.fullyQualifiedPath]=e,e.children&&e.children.forEach(e=>this.assignNewTree(e,!1))}),r(this,"createFilterTree",(e,l,t=!1)=>(this.treeRoot=this.constructChildTree({displayName:e,curData:l,parent:null,ordered:t}),this.treeRoot))}}},581803:(e,l,t)=>{t.d(l,{Wq:()=>C,WO:()=>R,vO:()=>g,Lq:()=>G,Nh:()=>M,ii:()=>V,bV:()=>W,sq:()=>j,P4:()=>y,yY:()=>b,of:()=>L,_S:()=>F,Iw:()=>k,i9:()=>m,WU:()=>P,LM:()=>N,l_:()=>x,Eh:()=>Z,G6:()=>Y,DC:()=>U,RZ:()=>v,$H:()=>I,vC:()=>D,Ei:()=>S,fG:()=>f,VT:()=>w,qF:()=>B});var r=t(150361),s=t.n(r),i=t(618446),_=t.n(i),a=t(630089),o=t(275084),c=t(611756),h=t(402094);let n={ITEM_ID:1,AVAILABILITY:2,BRAND:3,CONDITION:4,GOOGLE_PRODUCT_CATEGORY_0:5,GOOGLE_PRODUCT_CATEGORY_1:6,GOOGLE_PRODUCT_CATEGORY_2:7,GOOGLE_PRODUCT_CATEGORY_3:8,GOOGLE_PRODUCT_CATEGORY_4:9,GOOGLE_PRODUCT_CATEGORY_5:10,GOOGLE_PRODUCT_CATEGORY_6:11,PRODUCT_TYPE_0:12,PRODUCT_TYPE_1:13,PRODUCT_TYPE_2:14,PRODUCT_TYPE_3:15,PRODUCT_TYPE_4:16,CUSTOM_LABEL_0:17,CUSTOM_LABEL_1:18,CUSTOM_LABEL_2:19,CUSTOM_LABEL_3:20,CUSTOM_LABEL_4:21,MIN_PRICE:22,MAX_PRICE:23,ITEM_GROUP_ID:24,GENDER:25,CURRENCY:26,COUNTRY:27,MEDIA_TYPE:28};var d=t(395487),u=t(663873);let p=e=>d.DD[e]?d.DD[e].map(e=>n[e]):[],T=(e,l)=>({[d.h8.NEW]:l.bt("novo", "new", "Catalogs.ProductGroups.contitionType.new", undefined, true),[d.h8.USED]:l.bt("usado", "used", "Catalogs.ProductGroups.contitionType.used", undefined, true),[d.h8.REFURBISHED]:l.bt("recondicionado", "refurbished", "Catalogs.ProductGroups.contitionType.refurbished", undefined, true)})[e],E=(e,l)=>({[d.ps.MALE]:l.bt("masculino", "male", "Catalogs.ProductGroups.genderType.male", undefined, true),[d.ps.FEMALE]:l.bt("feminino", "female", "Catalogs.ProductGroups.genderType.female", undefined, true),[d.ps.UNISEX]:l.bt("unissex", "unisex", "Catalogs.ProductGroups.genderType.unisex", undefined, true)})[e],C=(e,l)=>({[d.ul.IN_STOCK]:l.bt("em estoque", "in stock", "Catalogs.ProductGroups.availabilityType.inStock", undefined, true),[d.ul.OUT_OF_STOCK]:l.bt("indisponível", "out of stock", "Catalogs.ProductGroups.availabilityType.outOfStock", undefined, true),[d.ul.PREORDER]:l.bt("pré-venda", "preorder", "Catalogs.ProductGroups.availabilityType.preorder", undefined, true)})[e],y=(e,l)=>{switch(e){case d.hh.PRODUCT_CATEGORY:return l.bt("Categoria", "Category", "FilterType.Category.filterType", undefined, true);case d.hh.PRODUCT_TYPE:return l.bt("Tipo de produto", "Product type", "FilterType.Product.filterType", undefined, true);case d.hh.COST:return l.bt("Custo", "Cost", "FilterType.Cost.filterType", undefined, true);case d.hh.BRANDS:return l.bt("Marcas", "Brands", "FilterType.Brands.filterType", undefined, true);case d.hh.CUSTOM_LABEL:return l.bt("Personalizado", "Custom", "FilterType.Custom.filterType", undefined, true);case d.hh.ITEM_ID:return l.bt("ID do item", "Item ID", "FilterType.ItemID.filterType", undefined, true);case d.hh.CUSTOM_LABEL_0:return l.bt("Rótulo personalizado 0", "Custom label 0", "FilterType.CustomLabel0.filterType", undefined, true);case d.hh.CUSTOM_LABEL_1:return l.bt("Rótulo personalizado 1", "Custom label 1", "FilterType.CustomLabel1.filterType", undefined, true);case d.hh.CUSTOM_LABEL_2:return l.bt("Rótulo personalizado 2", "Custom label 2", "FilterType.CustomLabel2.filterType", undefined, true);case d.hh.CUSTOM_LABEL_3:return l.bt("Rótulo personalizado 3", "Custom label 3", "FilterType.CustomLabel3.filterType", undefined, true);case d.hh.CUSTOM_LABEL_4:return l.bt("Rótulo personalizado 4", "Custom label 4", "FilterType.CustomLabel4.filterType", undefined, true);case d.hh.AVAILABILITY:return l.bt("Disponibilidade", "Availability", "FilterType.Availability.filterType", undefined, true);case d.hh.PRICE:return l.bt("Preço", "Price", "FilterType.Price.filterType", undefined, true);case d.hh.GENDER:return l.bt("Gênero", "Gender", "FilterType.Gender.filterType", undefined, true);case d.hh.CONDITION:return l.bt("Condição", "Condition", "FilterType.Condition.filterType", undefined, true);case d.hh.CURRENCY:return l.bt("Moeda", "Currency", "FilterType.Currency.filterType", undefined, true);case d.hh.ITEM_GROUP_ID:return l.bt("ID do grupo de itens", "Item group ID", "FilterType.ItemGroupID.filterType", undefined, true);default:return l.bt("Tipo desconhecido", "Unknown Type", "FilterType.Unknown.filterType", undefined, true)}},A=(e,l)=>23===e?null!=l&&l.inclusion?"<=":"<":22===e?null!=l&&l.inclusion?">=":">":"",P=(e,l,t,r)=>{if("number"!=typeof l)return"";let s=A(e,t);return(0,a.Wc)(r.bt("Preço ({{operator}} {{price}})", "Price ({{operator}} {{price}})", "catalogs.productGroup.filterValueDropdown.selectedValue", undefined, true),{operator:s,price:"number"==typeof l?`${l}`:""})},L=(e,l,t)=>{var r,s,i;switch(l){case 2:return(0,h.Z)(null!==(r=C(d.QE[Number(e)],t))&&void 0!==r?r:t.bt("Tipo desconhecido", "Unknown Type", "Catalogs.AvailabilityType.Unknown", undefined, true));case 4:return(0,h.Z)(null!==(s=T(d.g2[Number(e)],t))&&void 0!==s?s:t.bt("Tipo desconhecido", "Unknown Type", "Catalogs.ProductGroups.conditionType.Unknown", undefined, true));case 25:return(0,h.Z)(null!==(i=E(d.gd[Number(e)],t))&&void 0!==i?i:t.bt("Tipo desconhecido", "Unknown Type", "Catalogs.ProductGroups.genderType.Unknown", undefined, true));default:return e}},O=(e,l=!1,t)=>({displayName:e,checked:l,index:t,key:e}),f=(e,l=[])=>e.map((e,t)=>O(e,l.includes(e),t)),S=e=>e?{[d.hh.ITEM_ID]:e[p(d.hh.ITEM_ID)[0]]||[],[d.hh.ITEM_GROUP_ID]:e[p(d.hh.ITEM_GROUP_ID)[0]]||[],[d.hh.PRODUCT_CATEGORY]:e[p(d.hh.PRODUCT_CATEGORY)[0]]||{},[d.hh.PRODUCT_TYPE]:e[p(d.hh.PRODUCT_TYPE)[0]]||{},[d.hh.BRANDS]:e[p(d.hh.BRANDS)[0]]||[],[d.hh.CUSTOM_LABEL_0]:e[p(d.hh.CUSTOM_LABEL)[0]]||[],[d.hh.CUSTOM_LABEL_1]:e[p(d.hh.CUSTOM_LABEL)[1]]||[],[d.hh.CUSTOM_LABEL_2]:e[p(d.hh.CUSTOM_LABEL)[2]]||[],[d.hh.CUSTOM_LABEL_3]:e[p(d.hh.CUSTOM_LABEL)[3]]||[],[d.hh.CUSTOM_LABEL_4]:e[p(d.hh.CUSTOM_LABEL)[4]]||[],[d.hh.AVAILABILITY]:e[p(d.hh.AVAILABILITY)[0]]||[],[d.hh.GENDER]:e[p(d.hh.GENDER)[0]]||[],[d.hh.CONDITION]:e[p(d.hh.CONDITION)[0]]||[]}:{},D=e=>!d.d0.includes(e),U=e=>!d.cU.includes(e),m=e=>{if(!e)return[];let l=[];return d.d0.forEach(t=>{var r,s,i,_,a,o,c;switch(t){case d.hh.PRODUCT_CATEGORY:case d.hh.PRODUCT_TYPE:Object.keys(null!==(r=e[p(t)])&&void 0!==r?r:{}).length>0&&l.push(t);break;case d.hh.CUSTOM_LABEL_0:(null!==(s=e[p(d.hh.CUSTOM_LABEL)[0]])&&void 0!==s?s:[]).length>0&&l.push(t);break;case d.hh.CUSTOM_LABEL_1:(null!==(i=e[p(d.hh.CUSTOM_LABEL)[1]])&&void 0!==i?i:[]).length>0&&l.push(t);break;case d.hh.CUSTOM_LABEL_2:(null!==(_=e[p(d.hh.CUSTOM_LABEL)[2]])&&void 0!==_?_:[]).length>0&&l.push(t);break;case d.hh.CUSTOM_LABEL_3:(null!==(a=e[p(d.hh.CUSTOM_LABEL)[3]])&&void 0!==a?a:[]).length>0&&l.push(t);break;case d.hh.CUSTOM_LABEL_4:(null!==(o=e[p(d.hh.CUSTOM_LABEL)[4]])&&void 0!==o?o:[]).length>0&&l.push(t);break;default:(null!==(c=e[p(t)])&&void 0!==c?c:[]).length>0&&l.push(t)}}),l},g=(e=[],l=null)=>{let t=[];return e.forEach(e=>{if("NOT_SELECTED"!==e.selectedStatus){if("FULLY_SELECTED"!==e.selectedStatus||e!==l&&e.children){if(e.children&&e.children.length){let r=g(e.children,l);r.length&&t.push(...r)}}else t.push(e.fullyQualifiedPath.split(u.f7).slice(1))}}),t},R=e=>e.reduce((e,{displayName:l,checked:t})=>(e.push(...t?[l]:[]),e),[]),I=e=>[23,22].includes(e),v=e=>[1,24].includes(e),z=e=>[12,5].includes(e),G=({logicalOperator:e,filterOrders:l,filterValueById:t,filterTypeById:r,filterOperatorById:s},i=!1)=>({logical_operator:e,criteria:l.map(e=>{var l,_,a,o;return I(r[e])?{key:r[e],values:t[e],negated:!!(null!==(_=s[e])&&void 0!==_&&_.negated),inclusion:!!(null!==(a=s[e])&&void 0!==a&&a.inclusion)}:26===r[e]?{key:r[e],values:t[e]}:i&&z(r[e])&&Array.isArray(t[e])?{key:r[e],values:t[e].map(e=>Array.isArray(e)?e:e.split(">").map(e=>e.trim())),negated:!!(null!==(o=s[e])&&void 0!==o&&o.negated)}:{key:r[e],values:t[e],negated:!!(null!==(l=s[e])&&void 0!==l&&l.negated)}})}),b=({filterValueById:e,filterTypeById:l})=>{let t=Object.keys(l).find(e=>26===l[e]);return t?{id:t,value:"string"==typeof e[t]?e[t]:""}:null},M=e=>{let l=b(e);return e.filterOrders.filter(e=>(null==l?void 0:l.id)!==e).length},N=({filterValueById:e,filterTypeById:l,filterOrders:t})=>t.filter(e=>I(l[e])).map(l=>({id:l,value:e[l]})),B=(e,l,t,{customComparator:r,defaultValue:i}={})=>{var a,o;let c=(a=l.id,e.find(e=>a===e.id));return c&&!(null!=r?r:(e,l)=>_()(e[t],l[t]))(l,c)?{...c,[t]:null!==(o=s()(l[t]))&&void 0!==o?o:i}:null},F=(e,l,{omitProps:t=[]}={})=>{let r=!1;e.length!==l.length&&(r=!0);let s=l.map(l=>{let s=e.find(e=>e.id===l.id);if(!s)return r=!0,{...l};let i=(0,o.Z)(l,t);return _()(i,(0,o.Z)(s,t))?{...s}:(r=!0,{...s,...i})});return r?s:e},Y=()=>["pin.description","pin.dominant_color","pin.grid_title","pin.id","pin.images[170x, 236x, 474x, orig]","pin.price_currency","pin.price_value","pin.rich_metadata()","pin.rich_summary()","pin.title"],k=e=>"badge_"+e,w=e=>{let l=new Date;e.forEach(e=>(0,c.Nh)(k(e),l.getTime()+108e5))},x=e=>{let l=d.kl.indexOf(e);return -1===l?d.kl.length:l},j=(e,l)=>l.filter(({name:l,id:t})=>l.toLowerCase().includes(e.toLowerCase())||t.toString().includes(e)),V=e=>e.filter(({feedProfileId:e})=>!e),W=(e,l)=>l.filter(({country:l})=>l&&l===e),Z=(e,l,t)=>{let r=Object.freeze({});return e&&(r={...r,[d.VO]:e}),l&&(r={...r,[d.j0]:l}),t&&(r={...r,[d.pM]:t}),r}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/81803.pt_BR-19e452a08b6e9832.mjs.map