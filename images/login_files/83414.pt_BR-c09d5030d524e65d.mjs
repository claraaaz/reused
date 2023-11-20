"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[83414],{881610:(e,t,s)=>{s.d(t,{l:()=>d,E:()=>c});var i=s(667294),a=s(583592),n=s(170567);function r(e={},t){if("SUGGESTIONS_FETCH_COMPLETE"===t.type){var s,i;let{payload:a}=t;if("ShareSuggestionsResource"===a.resource){let i=t.payload.response.resource_response.data||[],{term:n=""}=null!==(s=a.options)&&void 0!==s?s:{};return{...e,[n]:i}}if("ShareSuggestionsTypeaheadResource"===a.resource){let s=t.payload.response.resource_response.data||{},n=s.items||[],{term:r=""}=null!==(i=a.options)&&void 0!==i?i:{};return{...e,[r]:n}}}return e}var o=s(785893);let{Provider:l,useHook:c}=(0,a.Z)("ShareSuggestions");function d({children:e}){let[t,s]=(0,i.useReducer)(r,{}),a=e=>{s({type:"SUGGESTIONS_FETCH_COMPLETE",payload:e})};(0,n.Z8)("ShareSuggestionsResource",a),(0,n.Z8)("ShareSuggestionsTypeaheadResource",a);let c=(0,i.useMemo)(()=>({shareSuggestions:t}),[t]);return(0,o.jsx)(l,{value:c,children:e})}},883414:(e,t,s)=>{s.r(t),s.d(t,{default:()=>H});var i=s(667294),a=s(883119),n=s(40660),r=s(388011),o=s(788241),l=s(245410),c=s(204125),d=s(589665),_=s(690108),h=s(222443),u=s(550140),p=s(536042),m=s(63262),g=s(802071),v=s(329689),x=s(384722),y=s(336331),b=s(510525),j=s(377553),w=s(819079),f=s(870243),S=s(630089),P=s(785893);function C({idx:e,item:t,onSendMessage:s,onViewConversation:n,sentHistory:l,objectAttachment:c,component:_}){var h;let u,m;let g=(0,p.ZP)(),{logContextEvent:v}=(0,r.v)(),[x,y]=(0,i.useState)(!1),{viewType:b,viewParameter:w}=(0,o.SU)(),C=t.id||"string"==typeof t.email&&t.email||"",z=l[C]===j.pO,A=Object.prototype.hasOwnProperty.call(l,C)&&!z,k=null!==(h=l[C])&&void 0!==h?h:"";(0,i.useEffect)(()=>{z&&y(!1)},[z]);let I="",{full_name:O,email:T}=t;"string"!=typeof O||O.match(/^\s*$/)?"string"!=typeof T||T.match(/^\s*$/)||(I=T):I=O;let E="";A?E=g.bt("Ver chat", "View chat", "shareSheet.ContactItem.viewChat", undefined, true):x&&(E=g.bt("Enviado", "Sent", "shareSheet.ContactItem.sent", undefined, true)),"pinner"===c.type||"user"===c.type?(u=13530,m=13532):"board"===c.type?(u=13527,m=13529):(u=13524,m=13526);let B=()=>{v({event_type:101,component:13029,element:1039,aux_data:{result_index:e+1,rs:t.debug_reason.reason}}),v({view_type:b,view_parameter:w,event_type:10399,component:_,element:u,aux_data:{result_index:e+1,rs:t.debug_reason.reason}})};return(0,P.jsx)(a.xu,{"data-test-id":"sharesheet-contact-item",width:j.iB+j.hN,marginBottom:5,children:(0,P.jsx)(a.iP,{onTap:A?()=>{v({view_type:b,view_parameter:w,event_type:10399,component:_,element:m}),n(k)}:()=>{B(),y(!0),s(t)},children:(0,P.jsxs)(a.kC,{direction:"column",alignItems:"center",children:[(0,P.jsxs)(a.xu,{alignItems:"center","data-test-id":x?"sharesheet-viewchat-link":"sharesheet-contact-item-button",display:"flex",height:j.iB,justifyContent:"center",marginBottom:j.vt,width:j.iB,children:[x&&(0,P.jsx)(a.xu,{alignItems:"center",color:"transparentDarkGray","data-test-id":"sharesheet-contact-item-sent-icon",display:"flex",height:j.iB,justifyContent:"center",position:"absolute",rounding:"circle",width:j.iB,zIndex:new a.Ry(d.fe),children:(0,P.jsx)(a.JO,{accessibilityLabel:(0,S.Wc)(g.bt("Enviado para {{recipientName}}", "Sent to {{recipientName}}", "shareSheet.ContactItem.sentIcon.accessibilityLabel", undefined, true),{recipientName:I}),icon:"check",color:"light",size:24})}),(0,P.jsx)(f.qE,{size:"fit",src:t.image_large_url,name:I})]}),(0,P.jsxs)(a.xu,{"data-test-id":"sharesheet-contact-item-label",width:"100%",paddingX:1,children:[(0,P.jsx)(a.xv,{lineClamp:1,size:"100",align:"center",children:I}),(0,P.jsx)(a.xv,{color:"subtle",size:"100",align:"center",children:(0,P.jsx)(a.xu,{"data-test-id":"contact-send-status",children:E})})]})]})})})}var z=s(881610);function A(e){var t;let{logContextEvent:s}=(0,r.v)(),n=(0,p.ZP)(),{onHide:l,onSendMessage:c,onShowImportContacts:d,objectAttachment:_,sentHistory:h}=e,{isLoaded:u}=(0,w.Z)({name:"ShareSuggestionsResource",options:{field_set_key:"default",hide_group_conversations:!0},noCache:!0}),{shareSuggestions:m}=(0,z.E)(),g=(null===(t=m[""])||void 0===t?void 0:t.slice(0,j.Qj))||[],v=g.length>0,{viewType:x,viewParameter:y}=(0,o.SU)();(0,i.useEffect)(()=>{if(u){let e=v?7511:7512;s({event_type:e,component:56,view_type:70,view_parameter:256})}},[v,s,u]);let{dropdownOpen:f,conversationOpen:S,newMessageOpen:A}=(0,b.Z5)(),k=e=>{S(e),f(),l()},I=g.map((t,s)=>{let i=`${t.id||t.email||s}`,{component:a}=e;return(0,P.jsx)(C,{item:t,idx:s,onSendMessage:c,onViewConversation:k,sentHistory:h,objectAttachment:_,component:a},i)}),O=!v&&!u;return(0,P.jsxs)(a.kC,{direction:"column",children:[(0,P.jsx)(a.kC,{alignItems:"center",height:j.dN,justifyContent:"center",children:(0,P.jsx)(a.xv,{align:"center",size:j.Kt,weight:"bold",children:n.bt("Enviar no Pinterest", "Send on Pinterest", "ContactsSuggestions.Header.text", undefined, true)})}),(0,P.jsx)(a.kC,{flex:"none",minHeight:j.$N,justifyContent:O?"center":void 0,children:O?(0,P.jsx)(a.xu,{paddingY:2,children:(0,P.jsx)(a.$j,{accessibilityLabel:n.bt("Carregando mensagens de conversas", "Loading Conversation Messages", "SendObject.contactList.spinner", undefined, true),show:!0})}):(0,P.jsxs)(a.kC,{wrap:!0,children:[(0,P.jsxs)(a.kC,{alignItems:"center",direction:"column",justifyContent:"start",width:j.iB+j.hN,children:[(0,P.jsx)(a.xu,{height:j.iB,marginBottom:j.vt,width:j.iB,"data-test-id":"search-for-users-button",children:(0,P.jsx)(a.hU,{accessibilityLabel:n.bt("Procurar usuários", "Search for users", "ContactsSuggestsions.SearchIcon.accessibilityLabel", undefined, true),bgColor:"lightGray",icon:"search",iconColor:"darkGray",onClick:()=>{e.onSearchClick&&e.onSearchClick();let{component:t}=e;s({view_type:x,view_parameter:y,event_type:10399,component:t,element:"pinner"===_.type||"user"===_.type?13531:"board"===_.type?13528:13525}),A(_),f(),l()},size:"lg"})}),(0,P.jsx)(a.xv,{lineClamp:1,size:"100",children:n.bt("Pesquisar", "Search", "ContactsSuggestions.SearchOption.text", undefined, true)})]}),v?I:(0,P.jsxs)(a.kC,{alignItems:"center",direction:"column",justifyContent:"start",width:j.iB+j.hN,children:[(0,P.jsx)(a.xu,{height:j.iB,marginBottom:j.vt,width:j.iB,"data-test-id":"import-contacts",children:(0,P.jsx)(a.hU,{accessibilityLabel:n.bt("Procurar usuários", "Search for users", "ContactsSuggestsions.SearchIcon.accessibilityLabel", undefined, true),bgColor:"lightGray",icon:"people",iconColor:"darkGray",onClick:d,size:"lg"})}),(0,P.jsx)(a.xv,{lineClamp:1,size:"100",children:n.bt("Importar", "Import", "ContactsSuggestions.ImportOption.text", undefined, true)})]})]})})]})}function k(e){switch(e){case"AuthHomefeed":return 13;case"BaseBoardPinGrid":return 5;case"BoardMoreIdeasTabContent":return 23;case"ConversationView":return 19;case"FollowingFeedGrid":return 21;case"ProfilePromotablePinCard":return 1;case"RelatedPinGrid":case"RelatedProductsFeed":return 14;case"RelatedProductsExploreTab":return 4;case"ShoppingPackageItem":case"ShoppingSquareGridProductDetailPage":case"ShoppingGridShippedMetadata":case"ProductPinsFeed":return 27;case"StoryPinFeedGrid":return 28;case"TodayArticleFeed":return 20;default:return e}}var I=s(730724),O=s(541361);let T=(e,t)=>e.reduce((e,s)=>({...e,[s]:t}),{}),E=(e,t)=>"today_article"===e?t.bt("Confira este artigo no Pinterest!", "Check out this article on Pinterest!", "sendObject.initialTextValue.todayArticle", undefined, true):"";function B(e){let{logContextEvent:t}=(0,r.v)(),s=(0,p.ZP)(),[o,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)(null),[w,f]=(0,i.useState)({}),[S]=(0,i.useState)(E(e.sendType,s)),{showOneToast:C}=(0,m.F9)(),{surface:z}=(0,y.$)(),B=(0,g.Z)(),L=(0,v.Z)(),{conversationCreate:Z}=(0,b.Z5)(),G=(0,b.NG)(),F=(0,i.useRef)(),H=(0,h.Z)();(0,i.useEffect)(()=>{var e;return null===(e=F.current)||void 0===e?void 0:e.focus()},[]);let N=(s,i)=>{let{sharedObject:a}=e,r=a.id;n.Z.increment("web.sharesheet.internal.send",1,{status:"success"}),t({event_type:180,element:276,object_id_str:r,aux_data:{conversation_id:s,pin_id:i}})},R=(t,s)=>{l(!1),e.onMessageSent(),N(t,s)},M=(e,t)=>{n.Z.increment("web.sharesheet.internal.send",1,{status:"fail"}),f({...w,...T(e,j.pO)});let i=s.bt("Falha ao enviar o email.", "Failed to send email.", "sendObject.emailError", undefined, true),a=o&&"email"===c?i:t.message_detail||t.message;a&&C(({hideToast:e})=>(0,P.jsx)(u.ZP,{type:"error",duration:5e3,onHide:e,text:a}))},U=(t,s)=>{let i;let{sharedObject:a,sendType:n}=e;switch(n){case"pin":i="pinId";break;case"board":i="boardId";break;case"did_it":i="didItId";break;case"user":case"pinner":i="userId"}let r=i?G(t,{text:s,[i]:a.id,source:k(z)},void 0,B):void 0;r&&r.then(()=>{R(t,"pin"===n?a.id:null),f({...w,[t]:t})}).catch(e=>{M([t],e)})},D=async(t,s,i)=>{let{sharedObject:a,sendType:n}=e,r=a.id,o={emails:s,user_ids:t,text:i,source:k(z),client_tracking_params:H(a.id)};o[n]=r;let l=_.Z.create("ConversationsResource",o),c=t.length>0?t:s;try{let e=await l.callCreate(),t=e&&e.resource_response.data;Z(t),R(t.id,"pin"===n?r:null),f({...w,...T(c,t.id)})}catch(e){M(c,e)}},$=(e,s)=>{"conversation_share_suggestion"===e.type?U(e.id,s):"user_share_suggestion"===e.type&&e.username?D([e.id],[],s):D([],[e.email],s),t({event_type:101,component:56,element:276})},{onCreatePincodeClick:V,onShowImport:X,sendType:q,sharedObject:Y,onHide:K,onExternalSend:W,viewType:J,viewParameter:Q,onSearchClick:ee,component:et}=e,es="user"===e.sendType&&(0,x.q6)(B,e.sharedObject.id,L),ei=("board"===e.sendType||"pin"===e.sendType)&&void 0!==e.sharedObject.ownerId&&(0,x.q6)(B,e.sharedObject.ownerId,L),ea=B.should_show_messaging&&!(es||ei),en=(0,P.jsx)(a.xu,{paddingY:1,paddingX:3,children:(0,P.jsx)(a.iz,{})}),er=(0,P.jsxs)(i.Fragment,{children:[ea&&en,(0,P.jsx)(O.Z,{onCreatePincodeClick:V,onEmailIconClick:()=>{l(!0),d("email")},onExternalSend:W,onHide:K,sharedObject:Y,showEmailOption:ea,viewType:J,viewParameter:Q,component:et})]});return o&&"email"===c?(0,P.jsx)(I.Z,{initialTextValue:S,objectId:Y.id,objectType:q,onCancelDraft:()=>{l(!1),d(null)},onHide:K,onSendMessage:$,width:j.lp}):(0,P.jsxs)(a.xu,{color:"default",paddingX:j.Mb,paddingY:j.sS,width:j.lp,tabIndex:0,ref:F,children:[ea&&(0,P.jsx)(A,{objectAttachment:{type:q,id:Y.id},onHide:K,onSendMessage:$,onSearchClick:ee,onShowImportContacts:X,sentHistory:w,component:et}),er]})}var L=s(937633);let Z=["facebook","google"];function G({onBack:e}){let t=(0,p.ZP)(),s=(0,g.Z)(),i=s.isAuth?s.email:null,n=Z.filter(e=>!s.isAuth||!1===s.socialNetwork[e].connected),r=(0,L.k)(),o=e=>{r.handleConnect(e,!0,Object.freeze({}),t)};return(0,P.jsx)(a.xu,{paddingX:1,paddingY:2,"data-test-id":"import-contacts-container",children:(0,P.jsxs)(a.kC,{gap:{row:0,column:2},direction:"column",children:[(0,P.jsxs)(a.kC,{gap:{row:2,column:0},alignItems:"center",children:[(0,P.jsx)(a.hU,{accessibilityLabel:t.bt("Voltar", "Back", " - ", undefined, true),icon:"arrow-back",iconColor:"darkGray",onClick:e,size:"md"}),(0,P.jsx)(a.xv,{size:"300",weight:"bold",children:t.bt("Carregar contatos de...", "Upload contacts from...", " - ", undefined, true)})]}),(0,P.jsx)(a.kC,{direction:"column",gap:{row:0,column:4},children:n.map(e=>(0,P.jsx)(a.xu,{paddingX:2,children:(0,P.jsxs)(a.iP,{onTap:()=>o(e),children:[(0,P.jsx)(a.xv,{size:"200",children:"facebook"===e?t.bt("Facebook", "Facebook", " - ", undefined, true):"google"===e?t.bt("Google", "Google", " - ", undefined, true):t.bt("Outro", "Other", " - ", undefined, true)}),(0,P.jsx)(a.xv,{size:"200",children:"facebook"===e?t.bt("Amigos que estão no Pinterest", "Friends who are on Pinterest", " - ", undefined, true):"google"===e&&i&&-1!==i.indexOf("@gmail")?i:null})]})},e))})]})})}var F=s(387815);function H({element:e,onCreatePincodeClick:t,onExternalSend:s,onHide:_,sendType:h,sharedObject:u,viewType:p,viewParameter:m,component:g}){let{logContextEvent:v}=(0,r.v)(),[x,y]=(0,i.useState)(!1),{checkExperiment:b}=(0,l.F)(),j=b("web_share_menu_logging").anyEnabled,w=(0,i.useRef)(!1),{viewParameter:f}=(0,o.SU)();return(0,i.useEffect)(()=>{let t=c.yF[h];return t||n.Z.increment("social.web.sendObjectWrapper.sendType",void 0,{type:h}),v({event_type:7120,component:j?14121:void 0,object_id_str:u.id,element:j?e:void 0,view_type:p,view_parameter:m,aux_data:j?{invite_object:t}:void 0}),v({event_type:10400,component:g,object_id_str:u.id,element:(0,F.O)(t),view_type:p,view_parameter:m||f,aux_data:{invite_object:t}}),()=>{j||v({event_type:7121,object_id_str:u.id,view_type:p,view_parameter:m}),w.current||v({event_type:10403,component:g,object_id_str:u.id,element:13478,view_type:p,view_parameter:f,aux_data:{invite_object:t}});let e=w.current?7493:7492;v({event_type:e,component:j?14121:void 0,object_id_str:j?u.id:void 0,element:j?13097:void 0,view_type:p,view_parameter:m,aux_data:j?{invite_object:t}:void 0})}},[]),x?(0,P.jsx)(G,{onBack:()=>{y(!1)}}):(0,P.jsx)(a.xu,{overflow:"hidden",rounding:4,zIndex:new a.Ry(d.fe-1),color:"default",children:(0,P.jsx)(B,{onCreatePincodeClick:t,onHide:_,onShowImport:()=>{y(!0)},onMessageSent:()=>{w.current=!0},onExternalSend:()=>{w.current=!0,s&&s()},onSearchClick:()=>{w.current=!0},sendType:h,sharedObject:u,viewType:p,viewParameter:m,component:g})})}},387815:(e,t,s)=>{s.d(t,{O:()=>i});let i=e=>{switch(e){case 2:return 331;case 3:return 12631;default:return 72}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/83414.pt_BR-c09d5030d524e65d.mjs.map