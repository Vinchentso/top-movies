(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(n,e,t){n.exports=t.p+"static/media/no_image.31f5bb1d.jpg"},19:function(n,e,t){n.exports=t.p+"static/media/react-movie-logo.5de5919a.svg"},20:function(n,e,t){n.exports=t.p+"static/media/tmdb_logo.30cd724b.svg"},24:function(n,e,t){n.exports=t.p+"static/media/search-icon.80e9d8a2.svg"},25:function(n,e,t){n.exports=t(36)},36:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),c=t(18),i=t.n(c),o=t(8),u=t(0),l=t(19),s=t.n(l),m=t(20),d=t.n(m),p=t(2),f=t(3);function h(){var n=Object(p.a)(["\n  width: 100px;\n  @media screen and (max-width: 500px) {\n    width: 80px;\n  }\n"]);return h=function(){return n},n}function v(){var n=Object(p.a)(["\n  width: 200px;\n  @media screen and (max-width: 500px) {\n    width: 150px;\n  }\n"]);return v=function(){return n},n}function b(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: var(--maxWidth);\n  padding: 20px 0;\n  margin: 0 auto;\n"]);return b=function(){return n},n}function g(){var n=Object(p.a)(["\n  background: var(--darkGrey);\n  padding: 0 20px;\n"]);return g=function(){return n},n}var x=f.b.div(g()),w=f.b.div(b()),E=f.b.img(v()),j=f.b.img(h()),y=function(){return r.a.createElement(x,null,r.a.createElement(w,null,r.a.createElement(o.b,{to:"/"},r.a.createElement(E,{src:s.a,alt:"rmdb-logo"})),r.a.createElement(j,{src:d.a,alt:"tmdb-logo"})))};function O(){var n=Object(p.a)(["\n  :root {\n    --maxWidth: 1280px; \n    --white: #fff;\n    --lightGrey: #eee;\n    --medGrey: #353535; \n    --darkGrey: #1c1c1c;\n    --fontSuperBig: 2.5rem;\n    --fontBig: 1.5rem;\n    --fontMed: 1.2rem;\n    --fontSmall: 1rem;\n  }\n  * {\n    box-sizing: border-box;\n    font-family: 'Abel', sans-serif;  \n  }\n  body {  \n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    h1 {\n      font-size: 2rem;\n      font-weight: 600;\n      color: var(--white);\n    }\n    h3 {\n      font-size: 1.1rem;\n      font-weight: 600;\n    }\n    p {\n      font-size: 1rem;\n      color: var(--white);\n    }\n  }\n"]);return O=function(){return n},n}var k=Object(f.a)(O()),S="https://api.themoviedb.org/3/",_="ad8bfa175d8e35974f55c4d4ce67aff2",T="".concat(S,"search/movie?api_key=").concat(_,"&language=en-US&query="),z="".concat(S,"movie/popular?api_key=").concat(_,"&language=en-US"),G="".concat(S,"authentication/token/new?api_key=").concat(_),I="".concat(S,"authentication/token/validate_with_login?api_key=").concat(_),M="".concat(S,"authentication/session/new?api_key=").concat(_),N="http://image.tmdb.org/t/p/";function B(){var n=Object(p.a)(["\n    z-index: 100;\n    max-width:700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right:20px;\n    min-height:100px;\n    color: var(--white);\n    \n    h1{\n        font-size: var(--fontSuperBig);\n    \n    @media screen and (max-width: 720px){\n        font-size: var(--fontBig);\n        }\n    }\n    \n    p{\n        font-size: var(--fontMed);\n        \n        @media screen and (max-width: 720px){\n            font-size: var(--fontSmall);\n        }\n    }\n    \n    @media screen and (max-width:720px){\n        max-width: 100%;\n    }\n\n"]);return B=function(){return n},n}function J(){var n=Object(p.a)(["\n    padding: 20px;\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n\n"]);return J=function(){return n},n}function R(){var n=Object(p.a)(["\n    background: linear-gradient(\n        to bottom, rgba(0,0,0,0) 41%, \n        rgba(0,0,0,0.65) 100%\n    ),\n    url(","), var(--darkGrey);\n    background-size: 100%, cover;\n    background-position: center;\n    height: 600px;\n    position: relative;\n    animation: animationHeroImage 1s;\n    \n    @keyframes animationHeroImage{\n        from{\n            opacity:0;\n    \n        }\n        to{\n            opacity:1;\n        }\n    }\n    \n\n"]);return R=function(){return n},n}var W=f.b.div(R(),function(n){return n.image}),C=f.b.div(J()),F=f.b.div(B()),U=function(n){var e=n.image,t=n.title,a=n.text;return r.a.createElement(W,{image:e},r.a.createElement(C,null,r.a.createElement(F,null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))))};function q(){var n=Object(p.a)(["\n    display:grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 2rem;\n\n\n"]);return q=function(){return n},n}function A(){var n=Object(p.a)(["\n    max-width: var(--maxwidth);\n    margin: 0 auto;\n    padding: 0 20px;\n    \n    h1{\n        color: var(--medGrey);\n        \n        @media screen and (max-width:768px){\n            font-size: var(--fontBig);\n        }\n    }\n\n"]);return A=function(){return n},n}var D=f.b.div(A()),L=f.b.div(q()),P=function(n){var e=n.header,t=n.children;return r.a.createElement(D,null,r.a.createElement("h1",null,e),r.a.createElement(L,null,t))};function H(){var n=Object(p.a)(["\n\n    width:100%;\n    max-width: 720px;\n    transition: all 0.3s;\n    object-fit: cover;\n    border-radius: 20px;\n    animation: animateThumb 0.5s;\n    \n    :hover{\n        opacity: 0.8;\n    }\n    \n    @keyframes animateThumb{\n        from{\n            opacity: 0;\n    \n        }\n        to{\n            opacity: 1;\n        }\n    }\n    \n\n"]);return H=function(){return n},n}var K=f.b.img(H()),Q=function(n){var e=n.image,t=n.movieId,a=n.clickable;return r.a.createElement("div",null,a?r.a.createElement(o.b,{to:"/".concat(t)},r.a.createElement(K,{src:e,alt:"movie-thumb"})):r.a.createElement(K,{src:e,alt:"movie-thumb"}))};function V(){var n=Object(p.a)(["\n\n    border: 5px solid var(--lightGrey);\n    border-top: 5px solid var(--medGrey);\n    border-radius: 50%;\n    width:50px;\n    height: 50px;\n    animation: spin 0.8s linear infinite;\n    margin: 20px auto;\n    \n    @keyframes spin{\n        0%{\n            transform:rotate(0deg);\n         }\n        100%{\n            transform: rotate(360deg);\n         }\n    }\n\n\n"]);return V=function(){return n},n}var X=f.b.div(V()),Y=t(5),Z=t(24),$=t.n(Z);function nn(){var n=Object(p.a)(["\n    position:relative;\n    max-width: var(--maxWidth);\n    width: 100%;\n    height: 55px;\n    background: var(--medGrey);\n    border-radius: 40px;\n    color: var(--white);\n    \n    img{\n    position: absolute;\n    left:15px;\n    top: 14px;\n    width: 30px;\n    }\n    \n    input{\n    font-size: var(--fontBig);\n    position:absolute;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height:40px;\n    color: var(--white);\n    \n    :focus{\n     outline: none;\n    }\n    \n    }\n"]);return nn=function(){return n},n}function en(){var n=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    height:100px;\n    background: var(--darkGrey);\n    padding: 0 20px;\n\n"]);return en=function(){return n},n}var tn=f.b.div(en()),an=f.b.div(nn()),rn=function(n){var e=n.setSearchTerm,t=Object(a.useState)(""),c=Object(Y.a)(t,2),i=c[0],o=c[1],u=Object(a.useRef)(!0);return Object(a.useEffect)(function(){if(!u.current){var n=setTimeout(function(){e(i)},500);return function(){return clearTimeout(n)}}u.current=!1},[e,i]),r.a.createElement(tn,null,r.a.createElement(an,null,r.a.createElement("img",{src:$.a,alt:"search-icon"}),r.a.createElement("input",{type:"text",placeholder:"Search Movie",onChange:function(n){return o(n.currentTarget.value)},value:i})))};function cn(){var n=Object(p.a)(["\n\n    display: block;\n    background: var(--darkGrey);\n    width: 25%;\n    min-width:200px;\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border:0;\n    font-size: var(--fontBig);\n    margin: 20px auto;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n    \n    :hover{\n    opacity: 0.8;\n    }\n\n"]);return cn=function(){return n},n}var on,un,ln,sn,mn,dn,pn=f.b.button(cn()),fn=function(n){var e=n.text,t=n.callback;return r.a.createElement(pn,{type:"button",onClick:t},e)},hn=t(4),vn=t.n(hn),bn=t(14),gn=t(9),xn=t(6),wn={method:"POST",headers:{"Content-Type":"application/json"}},En={fetchMovies:(dn=Object(xn.a)(vn.a.mark(function n(e,t){var a;return vn.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=e?"".concat(T).concat(e,"&page=").concat(t):"".concat(z,"&page=").concat(t),n.next=3,fetch(a);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}},n,this)})),function(n,e){return dn.apply(this,arguments)}),fetchMovie:(mn=Object(xn.a)(vn.a.mark(function n(e){var t;return vn.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(S,"movie/").concat(e,"?api_key=").concat(_),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}},n,this)})),function(n){return mn.apply(this,arguments)}),fetchCredits:(sn=Object(xn.a)(vn.a.mark(function n(e){var t;return vn.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(S,"movie/").concat(e,"/credits?api_key=").concat(_),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}},n,this)})),function(n){return sn.apply(this,arguments)}),getRequestToken:(ln=Object(xn.a)(vn.a.mark(function n(){var e;return vn.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(G);case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,n.abrupt("return",e.request_token);case 6:case"end":return n.stop()}},n,this)})),function(){return ln.apply(this,arguments)}),authenticate:(un=Object(xn.a)(vn.a.mark(function n(e,t,a){var r,c;return vn.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r={username:t,password:a,request_token:e},n.next=3,fetch(I,Object(gn.a)({},wn,{body:JSON.stringify(r)}));case 3:return n.next=5,n.sent.json();case 5:if(!n.sent.success){n.next=13;break}return n.next=9,fetch(M,Object(gn.a)({},wn,{body:JSON.stringify({request_token:e})}));case 9:return n.next=11,n.sent.json();case 11:return c=n.sent,n.abrupt("return",c);case 13:case"end":return n.stop()}},n,this)})),function(n,e,t){return un.apply(this,arguments)}),rateMovie:(on=Object(xn.a)(vn.a.mark(function n(e,t,a){var r,c;return vn.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(S,"movie/").concat(t,"/rating?api_key=").concat(_,"&session_id=").concat(e),n.next=3,fetch(r,Object(gn.a)({},wn,{body:JSON.stringify({value:a})}));case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c);case 7:case"end":return n.stop()}},n,this)})),function(n,e,t){return on.apply(this,arguments)})},jn=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n)},yn=function(n){var e=sessionStorage.getItem(n);return e&&JSON.parse(e)},On={page:0,results:[],total_pages:0,total_results:0},kn=t(11),Sn=t.n(kn),_n=function(){var n=function(){var n,e=Object(a.useState)(""),t=Object(Y.a)(e,2),r=t[0],c=t[1],i=Object(a.useState)(On),o=Object(Y.a)(i,2),u=o[0],l=o[1],s=Object(a.useState)(!1),m=Object(Y.a)(s,2),d=m[0],p=m[1],f=Object(a.useState)(!1),h=Object(Y.a)(f,2),v=h[0],b=h[1],g=Object(a.useState)(!1),x=Object(Y.a)(g,2),w=x[0],E=x[1],j=(n=Object(xn.a)(vn.a.mark(function n(e){var t,a,r=arguments;return vn.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:"",n.prev=1,b(!1),p(!0),n.next=6,En.fetchMovies(t,e);case 6:a=n.sent,l(function(n){return Object(gn.a)({},a,{results:e>1?Object(bn.a)(n.results).concat(Object(bn.a)(a.results)):Object(bn.a)(a.results)})}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),b(!0);case 13:p(!1);case 14:case"end":return n.stop()}},n,this,[[1,10]])})),function(e){return n.apply(this,arguments)});return Object(a.useEffect)(function(){if(!r){var n=yn("homeState");if(n)return console.log("Grabbing from sessionStorage"),void l(n)}console.log("Grabbing from API"),l(On),j(1,r)},[r]),Object(a.useEffect)(function(){w&&(j(u.page+1,r),E(!1))},[w,r,u.page]),Object(a.useEffect)(function(){r||sessionStorage.setItem("homeState",JSON.stringify(u))},[r,u]),{state:u,loading:d,error:v,searchTerm:r,setSearchTerm:c,setIsLoadingMore:E}}(),e=n.state,t=n.loading,c=n.error,i=n.searchTerm,o=n.setSearchTerm,u=n.setIsLoadingMore;return console.log(e),c?r.a.createElement("div",null,"Something went wrong..."):r.a.createElement(r.a.Fragment,null,!i&&e.results[0]?r.a.createElement(U,{image:"".concat(N).concat("w1280").concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}):null,r.a.createElement(rn,{setSearchTerm:o}),r.a.createElement(P,{header:i?"Search Result":"Popular Movies"},e.results.map(function(n){return r.a.createElement(Q,{key:n.id,clickable:!0,image:n.poster_path?N+"w780"+n.poster_path:Sn.a,movieId:n.id})})),t&&r.a.createElement(X,null),e.page<e.total_pages&&!t&&r.a.createElement(fn,{text:"Load More",callback:function(){return u(!0)}}))};function Tn(){var n=Object(p.a)(["\n\n    display: flex;\n    width:100%;\n    max-width: var(--maxWidth);\n    padding: 0 20px;\n    \n    \n    span{\n    font-size: var(--fontMed);\n    color: var(--white);\n    padding-right:10px;\n    \n    \n    @media screen and (max-width:768px){\n        font-size: var(--fontSmall);\n    }\n    \n    }\n\n"]);return Tn=function(){return n},n}function zn(){var n=Object(p.a)(["\n\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    width:100%;\n    height:70px;\n    background: var(--medGrey);\n    color: var(--white);\n\n\n"]);return zn=function(){return n},n}var Gn=f.b.div(zn()),In=f.b.div(Tn()),Mn=function(n){var e=n.movieTitle;return r.a.createElement(Gn,null,r.a.createElement(In,null,r.a.createElement(o.b,{to:"/"},r.a.createElement("span",null,"Home")),r.a.createElement("span",null,"|"),r.a.createElement("span",null,e)))};function Nn(){var n=Object(p.a)(["\n    width: 100%;\n    padding: 20px 40px;\n    color:var(--white);\n    overflow: hidden;\n    \n    .rating-dicertors{\n        display:flex;\n        justify-content: flex-start;\n    }\n    \n    .score{\n        display:flex;\n        align-items: center;\n        justify-content: center;\n        width: 35px;\n        height: 35px;\n        background: #fff;\n        color: #000;\n        font-weight:800;\n        border-radius: 50%;\n        margin: 0;\n    }\n    \n    .director{\n        margin: 0 0 0  40px;\n    \n    p{\n        margin: 0;\n    }\n    \n    h1{\n        @media screen and (max-width: 768px){\n            font-size: var(--fontBig);\n        }\n    }\n        \n    }\n\n"]);return Nn=function(){return n},n}function Bn(){var n=Object(p.a)(["\n   display: flex;\n   max-width: var(--maxWidth);\n   margin:0;\n   background: rgba(0,0,0,0.7);\n   border-radius: 20px;\n   \n   @media screen and (max-width: 768px){\n       display: block;\n       max-height: none;\n   }\n\n"]);return Bn=function(){return n},n}function Jn(){var n=Object(p.a)(["\n    background: ",";  \n  background-size: cover;\n  background-position: center;\n  padding: 40px 20px;\n  animation: animateMovieInfo 1s;\n  \n  @keyframes animateMovieInfo{\n      from{\n          opacity:0;\n      }\n      to{\n      opacity: 1;\n      }\n  }\n\n"]);return Jn=function(){return n},n}var Rn=f.b.div(Jn(),function(n){var e=n.backdrop;return e?"url(".concat(N).concat("w1280").concat(e,")"):"#000"}),Wn=f.b.div(Bn()),Cn=f.b.div(Nn()),Fn=function(n){var e=n.movie;return r.a.createElement(Rn,{backdrop:e.backdrop_path},r.a.createElement(Wn,null,r.a.createElement(Q,{image:e.poster_path?"".concat(N).concat("w780").concat(e.poster_path):Sn.a,clickable:!1}),r.a.createElement(Cn,null,r.a.createElement("h1",null,e.title),r.a.createElement("h3",null,"PLOT"),r.a.createElement("p",null,e.overview),r.a.createElement("div",{className:"rating-directors"},r.a.createElement("div",null,r.a.createElement("h3",null,"RATING"),r.a.createElement("div",{className:"score"},e.vote_average)),r.a.createElement("div",{className:"director"},r.a.createElement("h3",null,"DIRECTOR",e.directors.length>1?"S":"","                         "),e.directors.map(function(n){return r.a.createElement("p",{key:n.credit_id},n.name)}))))))};function Un(){var n=Object(p.a)(["\n\n    display: flex;\n    max-width: var(--maxWidth);\n    width: 100%;\n    margin: 0 auto;\n    \n    .column{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: var(--medGrey);\n        border-radius: 20px;\n        margin: 0 20px;\n        flex: 1;\n        \n        :first-child{\n            margin-left:0;\n        }\n        \n        :last-child{\n        margin-right:0;\n        }\n        \n        @media screen and (max-width:768px){\n            display:block;\n            \n            .column{\n            margin: 20px 0;\n            }\n        }\n    }\n\n"]);return Un=function(){return n},n}function qn(){var n=Object(p.a)(["\n\n    display:flex;\n    align-items: center;\n    min-height: 100px;\n    background: var(--darkGrey);\n    padding: 0 20px;\n\n"]);return qn=function(){return n},n}var An=f.b.div(qn()),Dn=f.b.div(Un()),Ln=function(n){var e=n.time,t=n.budget,a=n.revenue;return r.a.createElement(An,null,r.a.createElement(Dn,null,r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"Running time: ",function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")}(e))),r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"Budget: ",jn(t))),r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"Revenue: ",jn(a)))))};function Pn(){var n=Object(p.a)(["\n\n    display: block;\n    width:100%;\n    height:220px;\n    objectfit: cover;\n    border-radius:15px;\n\n"]);return Pn=function(){return n},n}function Hn(){var n=Object(p.a)(["\n    color: var(--white);\n    background: var(--darkGrey);\n    border-radius: 20px;\n    padding: 5px;\n    text-align: center;\n    \n    h3{\n        margin: 10px 0 0 0;\n    }\n    \n    p{\n        margin: 5px 0;\n    }\n\n"]);return Hn=function(){return n},n}var Kn=f.b.div(Hn()),Qn=f.b.img(Pn()),Vn=function(n){var e=n.name,t=n.character,a=n.imageUrl;return r.a.createElement(Kn,null,r.a.createElement(Qn,{src:a,alt:"actor-thumb"}),r.a.createElement("h3",null,e),r.a.createElement("p",null,t))},Xn=function(){var n=function(n){var e=Object(a.useState)({}),t=Object(Y.a)(e,2),r=t[0],c=t[1],i=Object(a.useState)(!0),o=Object(Y.a)(i,2),u=o[0],l=o[1],s=Object(a.useState)(!1),m=Object(Y.a)(s,2),d=m[0],p=m[1];return Object(a.useEffect)(function(){var e,t=(e=Object(xn.a)(vn.a.mark(function e(){var t,a,r;return vn.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),p(!1),e.next=5,En.fetchMovie(n);case 5:return t=e.sent,e.next=8,En.fetchCredits(n);case 8:a=e.sent,r=a.crew.filter(function(n){return"Director"===n.job}),c(Object(gn.a)({},t,{actors:a.cast,directors:r})),l(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),p(!0);case 17:case"end":return e.stop()}},e,this,[[0,14]])})),function(){return e.apply(this,arguments)}),a=yn(n);if(a)return c(a),void l(!1);t()},[n]),Object(a.useEffect)(function(){sessionStorage.setItem(n,JSON.stringify(r))},[n,r]),{state:r,loading:u,error:d}}(Object(u.h)().movieId),e=n.state,t=n.loading,c=n.error;return t?r.a.createElement(X,null):c?r.a.createElement("div",null,"Something goes wrong..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(Mn,{movieTitle:e.original_title}),r.a.createElement(Fn,{movie:e}),r.a.createElement(Ln,{time:e.runtime,budget:e.budget,revenue:e.revenue}),r.a.createElement(P,{header:"Actor"},e.actors.map(function(n){return r.a.createElement(Vn,{key:n.credit_id,name:n.name,character:n.character,imageUrl:n.profile_path?"".concat(N).concat("w780").concat(n.profile_path):Sn.a})})))},Yn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"NotFound"))},Zn=function(){return r.a.createElement(o.a,null,r.a.createElement(y,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement(_n,null)}),r.a.createElement(u.a,{path:"/:movieId",element:r.a.createElement(Xn,null)}),r.a.createElement(u.a,{path:"/*",element:r.a.createElement(Yn,null)})),r.a.createElement(k,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Zn,null)),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.bba9d8b1.chunk.js.map