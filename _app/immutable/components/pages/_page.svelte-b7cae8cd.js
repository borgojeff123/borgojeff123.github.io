import{S as pe,i as ke,s as be,k as f,a as N,q as O,l as h,m as v,h as i,c as P,r as R,n as _,b as K,E as r,J as me,u as Q,B as ue,K as fe}from"../../chunks/index-efcbbb00.js";function he(o,e,s){const a=o.slice();return a[7]=e[s],a}function ve(o,e,s){const a=o.slice();return a[10]=e[s],a}function de(o){let e,s,a=o[10].name+"",c,n,u,b=o[10].cost*o[3]+"",E,I,k,D;function G(){return o[6](o[10])}return{c(){e=f("button"),s=f("span"),c=O(a),n=N(),u=f("span"),E=O(b),I=N(),this.h()},l(g){e=h(g,"BUTTON",{class:!0});var y=v(e);s=h(y,"SPAN",{class:!0});var F=v(s);c=R(F,a),F.forEach(i),n=P(y),u=h(y,"SPAN",{class:!0});var w=v(u);E=R(w,b),w.forEach(i),I=P(y),y.forEach(i),this.h()},h(){_(s,"class","svelte-1u5dy2f"),_(u,"class","svelte-1u5dy2f"),_(e,"class","upgrade svelte-1u5dy2f")},m(g,y){K(g,e,y),r(e,s),r(s,c),r(e,n),r(e,u),r(u,E),r(e,I),k||(D=me(e,"click",G),k=!0)},p(g,y){o=g,y&8&&b!==(b=o[10].cost*o[3]+"")&&Q(E,b)},d(g){g&&i(e),k=!1,D()}}}function _e(o){let e,s=o[7]+"",a;return{c(){e=f("div"),a=O(s),this.h()},l(c){e=h(c,"DIV",{class:!0});var n=v(e);a=R(n,s),n.forEach(i),this.h()},h(){_(e,"class","worker svelte-1u5dy2f")},m(c,n){K(c,e,n),r(e,a)},p(c,n){n&4&&s!==(s=c[7]+"")&&Q(a,s)},d(c){c&&i(e)}}}function ye(o){let e,s,a,c,n,u,b,E=z(o[0],3)+"",I,k,D,G,g=z(o[1])+"",y,F,w,S,A,H,W,X,Z,$,B,x,ee,L,V,J,le,se,q=o[4],m=[];for(let l=0;l<q.length;l+=1)m[l]=de(ve(o,q,l));let M=o[2],p=[];for(let l=0;l<M.length;l+=1)p[l]=_e(he(o,M,l));return{c(){e=f("article"),s=f("header"),a=f("div");for(let l=0;l<m.length;l+=1)m[l].c();c=N(),n=f("div"),u=f("button"),b=f("span"),I=O(E),k=N(),D=f("span"),G=O("cpc: "),y=O(g),F=N(),w=f("footer"),S=f("div"),A=f("div"),H=f("span"),W=O("Barn"),X=N(),Z=f("hr"),$=N(),B=f("div");for(let l=0;l<p.length;l+=1)p[l].c();x=N(),ee=f("hr"),L=N(),V=f("main"),J=f("body"),this.h()},l(l){e=h(l,"ARTICLE",{class:!0});var d=v(e);s=h(d,"HEADER",{class:!0});var t=v(s);a=h(t,"DIV",{class:!0});var T=v(a);for(let C=0;C<m.length;C+=1)m[C].l(T);T.forEach(i),t.forEach(i),c=P(d),n=h(d,"DIV",{class:!0});var ae=v(n);u=h(ae,"BUTTON",{class:!0});var Y=v(u);b=h(Y,"SPAN",{class:!0});var re=v(b);I=R(re,E),re.forEach(i),k=P(Y),D=h(Y,"SPAN",{class:!0});var te=v(D);G=R(te,"cpc: "),y=R(te,g),te.forEach(i),Y.forEach(i),ae.forEach(i),F=P(d),w=h(d,"FOOTER",{class:!0});var oe=v(w);S=h(oe,"DIV",{class:!0});var j=v(S);A=h(j,"DIV",{});var U=v(A);H=h(U,"SPAN",{class:!0});var ce=v(H);W=R(ce,"Barn"),ce.forEach(i),X=P(U),Z=h(U,"HR",{}),$=P(U),B=h(U,"DIV",{class:!0});var ne=v(B);for(let C=0;C<p.length;C+=1)p[C].l(ne);ne.forEach(i),U.forEach(i),x=P(j),ee=h(j,"HR",{}),j.forEach(i),oe.forEach(i),d.forEach(i),L=P(l),V=h(l,"MAIN",{class:!0});var ie=v(V);J=h(ie,"BODY",{bgcolor:!0}),v(J).forEach(i),ie.forEach(i),this.h()},h(){_(a,"class","grid"),_(s,"class","svelte-1u5dy2f"),_(b,"class","clicks svelte-1u5dy2f"),_(D,"class","pointtext svelte-1u5dy2f"),_(u,"class","clicker svelte-1u5dy2f"),_(n,"class","game svelte-1u5dy2f"),_(H,"class","svelte-1u5dy2f"),_(B,"class","shop svelte-1u5dy2f"),_(S,"class","panelright svelte-1u5dy2f"),_(w,"class","svelte-1u5dy2f"),_(e,"class","svelte-1u5dy2f"),_(J,"bgcolor","#371894"),_(V,"class","container_fluid")},m(l,d){K(l,e,d),r(e,s),r(s,a);for(let t=0;t<m.length;t+=1)m[t].m(a,null);r(e,c),r(e,n),r(n,u),r(u,b),r(b,I),r(u,k),r(u,D),r(D,G),r(D,y),r(e,F),r(e,w),r(w,S),r(S,A),r(A,H),r(H,W),r(A,X),r(A,Z),r(A,$),r(A,B);for(let t=0;t<p.length;t+=1)p[t].m(B,null);r(S,x),r(S,ee),K(l,L,d),K(l,V,d),r(V,J),le||(se=me(u,"click",o[5]),le=!0)},p(l,[d]){if(d&63){q=l[4];let t;for(t=0;t<q.length;t+=1){const T=ve(l,q,t);m[t]?m[t].p(T,d):(m[t]=de(T),m[t].c(),m[t].m(a,null))}for(;t<m.length;t+=1)m[t].d(1);m.length=q.length}if(d&1&&E!==(E=z(l[0],3)+"")&&Q(I,E),d&2&&g!==(g=z(l[1])+"")&&Q(y,g),d&4){M=l[2];let t;for(t=0;t<M.length;t+=1){const T=he(l,M,t);p[t]?p[t].p(T,d):(p[t]=_e(T),p[t].c(),p[t].m(B,null))}for(;t<p.length;t+=1)p[t].d(1);p.length=M.length}},i:ue,o:ue,d(l){l&&i(e),fe(m,l),fe(p,l),l&&i(L),l&&i(V),le=!1,se()}}}function z(o,e){const s=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}],a=/.0+$|(.[0-9]*[1-9])0+$/;var c=s.slice().reverse().find(function(n){return o>=n.value});return c?(o/c.value).toFixed(e).replace(a,"$1")+c.symbol:"0"}function Ee(o,e,s){let a=100,c=1,n=[],u=1,b=[{cost:15,name:"Doubler",multiplier:2,worker:0},{cost:5,name:"Chicken",multiplier:0,worker:1},{cost:60,name:"Cow",multiplier:0,worker:10}];function E(){s(0,a=a+c),console.log("click"+a)}return[a,c,n,u,b,E,k=>{a>=k.cost?(k.multiplier&&(s(1,c=c*k.multiplier),s(0,a-=k.cost)),k.worker&&a&&(s(3,u=u*2),s(2,n=[k.name,...n]),setInterval(E,1e3),s(0,a-=k.cost))):alert("Click some more first!")}]}class De extends pe{constructor(e){super(),ke(this,e,Ee,ye,be,{})}}export{De as default};
