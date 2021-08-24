(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={list:"ContactList_list__1krQ7",item:"ContactList_item__3Eh9X",name:"ContactList_name__21rVU",btn:"ContactList_btn__hpMUn"}},34:function(t,e,n){t.exports={input:"Filter_input__3Q7Vf",btn:"Filter_btn__17_F9"}},45:function(t,e,n){},8:function(t,e,n){t.exports={form:"ContactForm_form__MhL5X",label:"ContactForm_label__2Ymjm",input:"ContactForm_input__2N26J",btn:"ContactForm_btn__350Fu"}},92:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),u=n(13),i=n.n(u),s=n(15),b=n(5),l=n(4),j=n(3),d=Object(j.b)("contacts /fetchContactsRequest"),f=Object(j.b)("contacts/fetchContactsSuccess"),O=Object(j.b)("contact/fetchContactsError"),h=Object(j.b)("contacts / addContactRequest"),m=Object(j.b)("contacts/addContactSuccess"),p=Object(j.b)("contact/addContactError"),C=Object(j.b)("contacts / deleteContactRequest"),x=Object(j.b)("contacts/deleteContactSuccess"),v=Object(j.b)("contact/deleteContactError"),g=Object(j.b)("contacts/changeFilter"),_=Object(j.c)([],(c={},Object(b.a)(c,f,(function(t,e){return e.payload})),Object(b.a)(c,m,(function(t,e){var n=e.payload;return[].concat(Object(s.a)(t),[n])})),Object(b.a)(c,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),F=Object(j.c)(!1,(a={},Object(b.a)(a,h,(function(){return!0})),Object(b.a)(a,m,(function(){return!1})),Object(b.a)(a,p,(function(){return!1})),Object(b.a)(a,C,(function(){return!0})),Object(b.a)(a,x,(function(){return!1})),Object(b.a)(a,v,(function(){return!1})),Object(b.a)(a,d,(function(){return!0})),Object(b.a)(a,f,(function(){return!1})),Object(b.a)(a,O,(function(){return!1})),a)),L=Object(j.c)("",Object(b.a)({},g,(function(t,e){return e.payload}))),y=Object(j.c)(null,{}),N=Object(l.b)({items:_,filter:L,loading:F,error:y}),w=n(30),k=n.n(w),S=n(9),A=[].concat(Object(s.a)(Object(j.d)({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}})),[k.a]),P=Object(j.a)({reducer:{contacts:N},middleware:A,devTools:!1}),q=n(7),E=(n(45),n(1));var z=function(t){var e=t.children;return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("h1",{children:e})})},D=n(21),T=n(32),B=n.n(T),J=function(){return Object(E.jsx)(B.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},M=n(19),R=n.n(M),U=n(33),Z=n(11),I=n.n(Z);I.a.defaults.baseURL="http://localhost:4040";var Q=function(){return function(){var t=Object(U.a)(R.a.mark((function t(e){var n,c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(d()),t.prev=1,t.next=4,I.a.get("/contacts");case 4:n=t.sent,c=n.data,e(f(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(O(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},V=function(t){return function(e){e(h()),I.a.post("/contacts",t).then((function(t){var n=t.data;return e(m(n))})).catch((function(t){return e(p(t))}))}},X=function(t){return function(e){e(C),I.a.delete("/contacts/".concat(t)).then((function(){return e(x(t))})).catch((function(t){return e(v(t))}))}},Y=n(20),$=n.n(Y),G=n(8),H=n.n(G),K=Object(q.b)((function(t){return{contacts:t.contacts.items,isLoading:t.contacts.loading}}),(function(t){return{onSubmit:function(e){return t(V(e))}}}))((function(t){var e=t.contacts,n=t.onSubmit,c=t.isLoading,a=Object(r.useState)(""),o=Object(D.a)(a,2),u=o[0],i=o[1],s=Object(r.useState)(""),b=Object(D.a)(s,2),l=b[0],j=b[1],d=$.a.generate(),f=$.a.generate(),O=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":i(c);break;case"number":j(c);break;default:return}};return Object(E.jsxs)(E.Fragment,{children:[c&&Object(E.jsx)(J,{}),Object(E.jsx)("form",{className:H.a.form,onSubmit:function(t){t.preventDefault(),function(t){if(e)return e.find((function(e){return e.name.toLowerCase()===t}))?(alert("".concat(t," is already in contacts")),!0):void 0}(u.toLowerCase())||(n({name:u,number:l}),i(""),j(""))},children:Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("label",{className:H.a.label,htmlFor:d,children:"Name:"}),Object(E.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",className:H.a.input,id:d,value:u,onChange:O,required:!0}),Object(E.jsx)("label",{className:H.a.label,htmlFor:f,children:"Number:"}),Object(E.jsx)("input",{type:"tel",name:"number",id:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",className:H.a.input,value:l,onChange:O,required:!0}),Object(E.jsx)("button",{type:"submit",className:H.a.btn,children:"Add contact"})]})})]})})),W=n(16),tt=n.n(W),et=function(t){var e=t.contacts,n=t.onDeleteContact,c=t.isLoading,a=Object(q.c)();return Object(r.useEffect)((function(){a(Q())}),[a]),console.log(e),Object(E.jsxs)(E.Fragment,{children:[c&&Object(E.jsx)(J,{}),Object(E.jsx)("ul",{className:tt.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(E.jsxs)("li",{className:tt.a.item,children:[Object(E.jsx)("span",{children:c}),Object(E.jsx)("span",{children:a}),Object(E.jsx)("button",{className:tt.a.btn,type:"button",id:e,onClick:function(){return n(e)},children:"Delete"})]},e)}))})]})};et.defaultProps={contacts:[]};var nt=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},ct=Object(q.b)((function(t){return{contacts:nt(t.contacts.items,t.contacts.filter),isLoading:t.contacts.loading}}),(function(t){return{fetchContacts:function(){return t(Q())},onDeleteContact:function(e){return t(X(e))}}}))(et),at=n(2),rt=n.n(at),ot=n(34),ut=n.n(ot),it=function(t){var e=t.value,n=t.onChange;return Object(E.jsxs)("div",{children:[Object(E.jsx)("p",{children:" Find contacts by name"}),Object(E.jsx)("input",{type:"text",className:ut.a.input,value:e,onChange:n})]})};it.defaultProps={value:" "},it.propsTypes={value:rt.a.string,onChange:rt.a.isPequired};var st=Object(q.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(g(e.target.value))}}}))(it);n(92);function bt(){return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(z,{children:"Phonebook"}),Object(E.jsx)(K,{}),Object(E.jsx)(st,{}),Object(E.jsx)(ct,{})]})}bt.defaultProps={totalContactsCount:null,visibleContactsCount:null};var lt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};i.a.render(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(q.a,{store:P,children:Object(E.jsx)(bt,{})})}),document.getElementById("root")),lt()}},[[93,1,2]]]);
//# sourceMappingURL=main.28849fea.chunk.js.map