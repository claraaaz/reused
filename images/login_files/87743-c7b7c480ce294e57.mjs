"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[87743],{358796:e=>{var a,l,n,r,t={fragment:{argumentDefinitions:a=[{defaultValue:null,kind:"LocalArgument",name:"boardId"}],kind:"Fragment",metadata:null,name:"collab_AcceptInvite_Mutation",selections:[{alias:null,args:l=[{fields:[{kind:"Variable",name:"board",variableName:"boardId"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3AcceptBoardCollaboratorInviteMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},r={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"collab_AcceptInvite_Mutation",selections:[{alias:null,args:l,concreteType:null,kind:"LinkedField",name:"v3AcceptBoardCollaboratorInviteMutation",plural:!1,selections:[n,{kind:"InlineFragment",selections:[r],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"781c41132fefa007ebde7bcd8c49840ce1768ed6f6781fd72e3904bd35fb576f",metadata:{},name:"collab_AcceptInvite_Mutation",operationKind:"mutation",text:null}};t.hash="e0cd549ce31635291bd74113393edc53",e.exports=t},63919:e=>{var a,l,n,r,t={fragment:{argumentDefinitions:a=[{defaultValue:null,kind:"LocalArgument",name:"boardId"},{defaultValue:null,kind:"LocalArgument",name:"userId"}],kind:"Fragment",metadata:null,name:"collab_ApproveInvite_Mutation",selections:[{alias:null,args:l=[{fields:[{kind:"Variable",name:"board",variableName:"boardId"},{kind:"Variable",name:"user",variableName:"userId"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3ApproveBoardCollaboratorInviteMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},r={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"collab_ApproveInvite_Mutation",selections:[{alias:null,args:l,concreteType:null,kind:"LinkedField",name:"v3ApproveBoardCollaboratorInviteMutation",plural:!1,selections:[n,{kind:"InlineFragment",selections:[r],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"472a584df4a467181ed32ec33d235ef2f2e6d53fdb4c7a43d11156b6d51dcd50",metadata:{},name:"collab_ApproveInvite_Mutation",operationKind:"mutation",text:null}};t.hash="7c32abc79b81b52b7c0d6582f9278b22",e.exports=t},458551:e=>{var a,l,n,r,t,i,o={fragment:{argumentDefinitions:[a={defaultValue:null,kind:"LocalArgument",name:"ban"},l={defaultValue:null,kind:"LocalArgument",name:"boardId"},n={defaultValue:null,kind:"LocalArgument",name:"userId"}],kind:"Fragment",metadata:null,name:"collab_DeclineOrDeleteBoardCollaboratorInvite_Mutation",selections:[{alias:null,args:r=[{fields:[{kind:"Variable",name:"ban",variableName:"ban"},{kind:"Variable",name:"board",variableName:"boardId"},{kind:"Variable",name:"user",variableName:"userId"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3DeclineOrDeleteBoardCollaboratorInviteMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[l,n,a],kind:"Operation",name:"collab_DeclineOrDeleteBoardCollaboratorInvite_Mutation",selections:[{alias:null,args:r,concreteType:null,kind:"LinkedField",name:"v3DeclineOrDeleteBoardCollaboratorInviteMutation",plural:!1,selections:[t,{kind:"InlineFragment",selections:[i],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"ff3059743c1d13d4f1c2ef07e10d2b29925c7b330db4103e55e9e65c380c0ce5",metadata:{},name:"collab_DeclineOrDeleteBoardCollaboratorInvite_Mutation",operationKind:"mutation",text:null}};o.hash="a3cb87deead5a06468a3b46652f22daa",e.exports=o},397289:e=>{var a,l,n,r,t,i,o,s,d={fragment:{argumentDefinitions:a=[{defaultValue:null,kind:"LocalArgument",name:"board"},{defaultValue:null,kind:"LocalArgument",name:"collaboratorIds"}],kind:"Fragment",metadata:null,name:"collab_RemoveBoardCollaborators_Mutation",selections:[{alias:null,args:l=[{fields:[{kind:"Variable",name:"board",variableName:"board"},{kind:"Variable",name:"collaboratorIds",variableName:"collaboratorIds"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3RemoveBoardCollaboratorsMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"data",plural:!1,selections:[r={alias:null,args:null,kind:"ScalarField",name:"collaboratorCount",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"collaboratingUsers",plural:!1,selections:[{kind:"InlineFragment",selections:[n,{alias:null,args:null,concreteType:"UserCollaboratingUsersConnection",kind:"LinkedField",name:"connection",plural:!1,selections:[{alias:null,args:null,concreteType:"UserCollaboratingUsersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[t={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"UserCollaboratingUsersConnectionContainer",abstractKey:null}],storageKey:null}],storageKey:null}],type:"V3RemoveBoardCollaborators",abstractKey:null},{kind:"InlineFragment",selections:[n,o={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"collab_RemoveBoardCollaborators_Mutation",selections:[{alias:null,args:l,concreteType:null,kind:"LinkedField",name:"v3RemoveBoardCollaboratorsMutation",plural:!1,selections:[n,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"data",plural:!1,selections:[r,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"collaboratingUsers",plural:!1,selections:[n,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"UserCollaboratingUsersConnection",kind:"LinkedField",name:"connection",plural:!1,selections:[{alias:null,args:null,concreteType:"UserCollaboratingUsersEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[t,i,s={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"UserCollaboratingUsersConnectionContainer",abstractKey:null}],storageKey:null},s],storageKey:null}],type:"V3RemoveBoardCollaborators",abstractKey:null},{kind:"InlineFragment",selections:[o],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"83dd1206102cffdd460f8c072df0ca515d27c8fcf3798423f1657afabdf467ac",metadata:{},name:"collab_RemoveBoardCollaborators_Mutation",operationKind:"mutation",text:null}};d.hash="f70efc59a3f6a73e0af36081d8552b3a",e.exports=d},403787:e=>{var a,l,n,r,t,i,o,s,d,u,c=(a=[{defaultValue:null,kind:"LocalArgument",name:"boardId"},{defaultValue:null,kind:"LocalArgument",name:"message"}],l=[{fields:[{kind:"Variable",name:"board",variableName:"boardId"},{kind:"Variable",name:"message",variableName:"message"}],kind:"ObjectValue",name:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},t=[r={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null}],i={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},d={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null},u=[r,s={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"collab_RequestToJoin_Mutation",selections:[{alias:null,args:l,concreteType:null,kind:"LinkedField",name:"v3CreateRequestToJoinBoardMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[n,{alias:null,args:null,concreteType:"CollaboratorInvite",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"invitedByUser",plural:!1,selections:t,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"invitedUser",plural:!1,selections:t,storageKey:null},i,o,s,{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:t,storageKey:null}],storageKey:null}],type:"CollaboratorInviteResponse",abstractKey:null},{kind:"InlineFragment",selections:[n,d],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"collab_RequestToJoin_Mutation",selections:[{alias:null,args:l,concreteType:null,kind:"LinkedField",name:"v3CreateRequestToJoinBoardMutation",plural:!1,selections:[n,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"CollaboratorInvite",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"invitedByUser",plural:!1,selections:u,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"invitedUser",plural:!1,selections:u,storageKey:null},i,o,s,{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:u,storageKey:null}],storageKey:null}],type:"CollaboratorInviteResponse",abstractKey:null},{kind:"InlineFragment",selections:[d],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"ff45f353c3246c417487b54a02f0669dbc6c45761df9567395537bf1f7875a9f",metadata:{},name:"collab_RequestToJoin_Mutation",operationKind:"mutation",text:null}});c.hash="38716861de712c68561883b0d58d8bc6",e.exports=c},496538:e=>{var a,l,n,r,t={fragment:{argumentDefinitions:a=[{defaultValue:null,kind:"LocalArgument",name:"boardId"},{defaultValue:null,kind:"LocalArgument",name:"emails"},{defaultValue:null,kind:"LocalArgument",name:"message"}],kind:"Fragment",metadata:null,name:"collab_emails_Mutation",selections:[{alias:null,args:l=[{fields:[{kind:"Variable",name:"board",variableName:"boardId"},{kind:"Variable",name:"emails",variableName:"emails"},{kind:"Variable",name:"message",variableName:"message"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3InviteBoardCollaboratorEmailMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},r={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"collab_emails_Mutation",selections:[{alias:null,args:l,concreteType:null,kind:"LinkedField",name:"v3InviteBoardCollaboratorEmailMutation",plural:!1,selections:[n,{kind:"InlineFragment",selections:[r],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"8900846b1564b60aeba0d82306e017e0f19e812705f67e3814980c045de36fca",metadata:{},name:"collab_emails_Mutation",operationKind:"mutation",text:null}};t.hash="f346c00717b8f4893552fb8053a1ff5b",e.exports=t},392002:e=>{var a,l,n,r,t,i,o={fragment:{argumentDefinitions:[a={defaultValue:null,kind:"LocalArgument",name:"boardId"},l={defaultValue:null,kind:"LocalArgument",name:"collaboratorIds"},n={defaultValue:null,kind:"LocalArgument",name:"message"}],kind:"Fragment",metadata:null,name:"collab_users_Mutation",selections:[{alias:null,args:r=[{fields:[{kind:"Variable",name:"board",variableName:"boardId"},{kind:"Variable",name:"collaboratorIds",variableName:"collaboratorIds"},{kind:"Variable",name:"message",variableName:"message"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3InviteBoardCollaboratorsMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"Error",abstractKey:"__isError"}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[l,a,n],kind:"Operation",name:"collab_users_Mutation",selections:[{alias:null,args:r,concreteType:null,kind:"LinkedField",name:"v3InviteBoardCollaboratorsMutation",plural:!1,selections:[t,{kind:"InlineFragment",selections:[i],type:"Error",abstractKey:"__isError"}],storageKey:null}]},params:{id:"42ceaa3423a096a27613e5738f83aaadcee449c55d4dd03624d2f08a6b6dca04",metadata:{},name:"collab_users_Mutation",operationKind:"mutation",text:null}};o.hash="f4d87e820bd0fba4aa4c8fdaeed6231e",e.exports=o},887743:(e,a,l)=>{l.d(a,{A8:()=>f,CQ:()=>C,Cf:()=>_,DK:()=>p,GJ:()=>L,RZ:()=>K,SD:()=>F,aN:()=>T,h6:()=>k,tV:()=>E,xx:()=>v,yC:()=>M,zC:()=>y});var n,r,t,i,o,s,d,u=l(702664),c=l(167912),m=l(690108),g=l(388011),b=l(970588);let p=()=>{let e=void 0!==n?n:n=l(392002),[a]=(0,c.useMutation)(e),{logContextEvent:r}=(0,g.v)();return async(e,l,n)=>{let t={boardId:e,collaboratorIds:l,message:n||""};return await new Promise((l,n)=>{a({variables:{...t},onCompleted:(a,t)=>{t&&n(t[0]),r({event_type:28,object_id_str:e}),l()},onError:e=>n(e)})})}},y=()=>{let e=void 0!==r?r:r=l(496538),[a]=(0,c.useMutation)(e),{logContextEvent:n}=(0,g.v)();return async(e,l,r)=>{let t={boardId:e,emails:l,message:r||""};return await new Promise((l,r)=>{a({variables:{...t},onCompleted:(a,t)=>{t&&r(t[0]),n({event_type:28,object_id_str:e}),l()},onError:e=>r(e)})})}},k=()=>{let e=void 0!==t?t:t=l(63919),[a]=(0,c.useMutation)(e),{logContextEvent:n}=(0,g.v)();return async(e,l)=>{let r={boardId:e,userId:l};return await new Promise((l,t)=>{a({variables:{...r},onCompleted:(a,r)=>{r&&t(r[0]),n({event_type:32,object_id_str:e}),l(a)},onError:e=>t(e)})})}};function _(e,a){return async l=>{await (0,b.Z)({url:`/v3/boards/${e}/collaborators/requests/ownership/`,method:"POST",data:{collaborator:a}}),l({type:"BOARD_OWNERSHIP_TRANSFER_REQUEST",payload:{boardId:e,collaboratorId:a}})}}function v(e,a){return async l=>{await (0,b.Z)({url:`/v3/boards/${e}/collaborators/requests/ownership/`,method:"DELETE",data:{collaborator:a}}),l({type:"BOARD_OWNERSHIP_TRANSFER_REQUEST_CANCEL",payload:{boardId:e}})}}let f=(e,a)=>({type:"BOARD_INVITE_ACCEPTED_BY_VIEWER",payload:{boardId:e,collaboratingUser:a}}),K=()=>{let e=void 0!==i?i:i=l(358796),[a]=(0,c.useMutation)(e),{logContextEvent:n}=(0,g.v)();return async e=>{let l={boardId:e};return await new Promise((r,t)=>{a({variables:{...l},onCompleted:(a,l)=>{l&&t(l[0]),n({event_type:32,object_id_str:e}),r(a)},onError:e=>t(e)})})}},F=(e,a,l)=>async n=>{n(f(e,a));let r=await m.Z.create("BoardInviteResource",{board_id:e,invited_user_id:a.id}).callUpdate();r.resource_response.error||l({event_type:32,object_id_str:e})};function I(e,a){return{type:"BOARD_REQUEST_TO_JOIN",payload:{boardId:e,value:a}}}let E=()=>{let e=void 0!==o?o:o=l(403787),[a]=(0,c.useMutation)(e),n=(0,u.useDispatch)();return async e=>{let l={boardId:e};return await new Promise((r,t)=>{a({variables:{...l},onCompleted:(a,l)=>{l&&(n(I(e,!1)),t(l[0])),n(I(e,!0)),r(a)},onError:a=>{n(I(e,!1)),t(a)}})})}};function L(e,a){return l=>{(0,b.Z)({url:`/v3/boards/${e}/collaborators/request/${a}/`,method:"DELETE",data:{board:e,user:a}}).catch(()=>{l(I(e,!0))}),l(I(e,!1))}}let C=()=>{let e=void 0!==s?s:s=l(458551),[a]=(0,c.useMutation)(e),{logContextEvent:n}=(0,g.v)();return async(e,l,r)=>{let t={boardId:e,userId:l,ban:!!r&&r};return await new Promise((l,r)=>{a({variables:{...t},onCompleted:(a,t)=>{t&&r(t[0]),n({event_type:29,object_id_str:e}),l(a)},onError:e=>r(e)})})}},T=()=>{let e=void 0!==d?d:d=l(397289),[a]=(0,c.useMutation)(e),{logContextEvent:n}=(0,g.v)();return async(e,l)=>{let r={board:e,collaboratorIds:[l]};return await new Promise((l,t)=>{a({variables:{...r},onCompleted:(a,r)=>{r&&t(r[0]),n({event_type:29,object_id_str:e}),l(a)},onError:e=>t(e)})})}},M=()=>{let e=C(),a=T();return(l,n,r)=>async()=>{let{invited_user:n,status:t,board:{id:i}}=l;n&&("accepted"===t?await a(i,n.id):await e(i,n.id,r))}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/87743-c7b7c480ce294e57.mjs.map