"use strict";(self.webpackChunkglowworm=self.webpackChunkglowworm||[]).push([[8703],{68703:function(e,r,n){n.r(r),n.d(r,{default:function(){return I}});var t=n(23080),i=n(29336),s=n(59061),a=n(37172),l=n(89227),o=n(3469),c=n(24960),u=n(17944),d=n(48943),m=n(75641),x=n(19363),h=n(46029),p=n(1867),Z=n(33543),f=n(40758),j=n(44367),g=n(36834),w=n(82173),b=n(23151),v=n(77597),y=n(26865),S=n(53690),k=n(7233),C=n(84832),N=n(33469),W=n(68135),q=n(14682),E=n(13164),P=n(98151),_=n(7567),B=n(46055),D=n(53525),J=n(11098),T=n(10250),U=n(58847);function A(){var e=(0,h.Z)().register,r=(0,T.Z)(),n=(0,B.Ds)(),t=n.enqueueSnackbar,i=n.closeSnackbar,s=(0,D.useState)(!1),a=(0,b.Z)(s,2),l=a[0],o=a[1],c=J.Ry().shape({firstName:J.Z_().min(2,"\u592a\u77ed!").max(50,"\u592a\u957f!").required("\u9700\u8981\u540d\u5b57"),lastName:J.Z_().min(2,"\u592a\u77ed!").max(50,"\u592a\u957f!").required("\u9700\u8981\u540d\u5b57"),email:J.Z_().email("\u90ae\u4ef6\u5fc5\u987b\u662f\u6709\u6548\u7684\u90ae\u4ef6\u5730\u5740").required("\u90ae\u4ef6\u662f\u5fc5\u9700\u7684"),password:J.Z_().required("\u5bc6\u7801\u662f\u5fc5\u987b\u7684")}),u=(0,_.TA)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:c,onSubmit:function(){var n=(0,w.Z)((0,g.Z)().mark((function n(s,a){var l,o;return(0,g.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=a.setErrors,o=a.setSubmitting,n.prev=1,n.next=4,e(s.email,s.password,s.firstName,s.lastName);case 4:t("\u6ce8\u518c\u6210\u529f",{variant:"success",action:function(e){return(0,U.jsx)(d.V3,{size:"small",onClick:function(){return i(e)},children:(0,U.jsx)(k.JO,{icon:v.Z})})}}),r.current&&o(!1),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.error(n.t0),r.current&&(l({afterSubmit:n.t0.message}),o(!1));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,r){return n.apply(this,arguments)}}()}),m=u.errors,x=u.touched,p=u.handleSubmit,Z=u.isSubmitting,f=u.getFieldProps;return(0,U.jsx)(_.Hy,{value:u,children:(0,U.jsx)(_.l0,{autoComplete:"off",noValidate:!0,onSubmit:p,children:(0,U.jsxs)(N.Z,{spacing:3,children:[m.afterSubmit&&(0,U.jsx)(W.Z,{severity:"error",children:m.afterSubmit}),(0,U.jsx)(q.Z,(0,j.Z)((0,j.Z)({fullWidth:!0,label:"\u7528\u6237\u540d"},f("name")),{},{error:Boolean(x.username&&m.username),helperText:x.username&&m.username})),(0,U.jsx)(q.Z,(0,j.Z)((0,j.Z)({fullWidth:!0,autoComplete:"username",type:"email",label:"\u90ae\u7bb1 \u5730\u5740"},f("email")),{},{error:Boolean(x.email&&m.email),helperText:x.email&&m.email})),(0,U.jsx)(q.Z,(0,j.Z)((0,j.Z)({fullWidth:!0,autoComplete:"current-password",type:l?"text":"password",label:"\u5bc6\u7801"},f("password")),{},{InputProps:{endAdornment:(0,U.jsx)(E.Z,{position:"end",children:(0,U.jsx)(P.Z,{edge:"end",onClick:function(){return o((function(e){return!e}))},children:(0,U.jsx)(k.JO,{icon:l?y.Z:S.Z})})})},error:Boolean(x.password&&m.password),helperText:x.password&&m.password})),(0,U.jsx)(C.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:Z,children:"\u6ce8\u518c"})]})})})}var V=(0,c.ZP)(m.Z)((function(e){var r=e.theme;return(0,t.Z)({},r.breakpoints.up("md"),{display:"flex"})})),z=(0,c.ZP)(i.Z)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2)}})),H=(0,c.ZP)("div")((function(e){return{maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0)}}));function I(){var e=(0,h.Z)().method;return(0,U.jsxs)(V,{title:"\u6ce8\u518c".concat(x.uU),children:[(0,U.jsxs)(p.Z,{children:["\u5df2\u7ecf\u6709\u8d26\u6237\u4e86? \xa0",(0,U.jsx)(s.Z,{underline:"none",variant:"subtitle2",component:u.rU,to:Z.EE.login,children:"\u767b\u5f55"})]}),(0,U.jsx)(d.Jh,{width:"mdDown",children:(0,U.jsxs)(z,{children:[(0,U.jsx)(a.Z,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"\u6700\u5c11\u7684\u6210\u672c\u66f4\u6709\u6548\u5730\u7ba1\u7406\u5de5\u4f5c"}),(0,U.jsx)("img",{alt:"register",src:"/static/illustrations/illustration_register.png"})]})}),(0,U.jsx)(l.Z,{children:(0,U.jsxs)(H,{children:[(0,U.jsx)(o.Z,{sx:{mb:5,display:"flex",alignItems:"center"},children:(0,U.jsx)(o.Z,{sx:{flexGrow:1},children:(0,U.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:"\u73b0\u5728\u5f00\u59cb."})})}),"firebase"===e&&(0,U.jsx)(f.Z,{}),(0,U.jsx)(A,{}),(0,U.jsxs)(a.Z,{variant:"body2",align:"center",sx:{color:"text.secondary",mt:3},children:["\u6211\u540c\u610f\xa0",(0,U.jsx)(s.Z,{underline:"always",color:"text.primary",href:"#",children:"\u670d\u52a1\u6761\u6b3e"}),"\xa0\u548c\xa0",(0,U.jsx)(s.Z,{underline:"always",color:"text.primary",href:"#",children:"\u9690\u79c1\u653f\u7b56"}),"."]}),(0,U.jsx)(d.Jh,{width:"smUp",children:(0,U.jsxs)(a.Z,{variant:"subtitle2",sx:{mt:3,textAlign:"center"},children:["\u5df2\u7ecf\u6709\u8d26\u6237\u4e86?\xa0",(0,U.jsx)(s.Z,{to:Z.EE.login,component:u.rU,children:"\u767b\u5f55"})]})})]})})]})}}}]);
//# sourceMappingURL=8703.716d3b04.chunk.js.map