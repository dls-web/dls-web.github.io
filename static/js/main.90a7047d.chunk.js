(this.webpackJsonpwebportfolio_v03_react=this.webpackJsonpwebportfolio_v03_react||[]).push([[0],Array(23).concat([function(e,a,t){e.exports=t(49)},,,,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(19),r=t.n(l),i=(t(28),t(29),t(16)),m=t(9),s=(t(32),{path:"aboutme",title:"ME",icon_name:"person-sharp"}),o={path:"skills",title:"SKILLS",icon_name:"library-sharp"},d={path:"projects",title:"PROJECTS",icon_name:"folder-sharp"},E={path:"contact",title:"CONTACT",icon_name:"call-sharp"},u={path:"education",title:"EDUCATION",icon_name:"school-sharp"},p=function(){var e=[{path:s.path,iconName:s.icon_name},{path:o.path,iconName:o.icon_name},{path:d.path,iconName:d.icon_name},{path:u.path,iconName:u.icon_name},{path:E.path,iconName:E.icon_name}];return c.a.createElement("div",{className:"LinksContainer"},e.map((function(e){return c.a.createElement("div",{className:"LinkContainer_Inner",key:e.path.toString()},c.a.createElement(m.b,{to:"/"+e.path,className:"NavItem",activeClassName:"NavItemActive"},c.a.createElement("ion-icon",{name:e.iconName})))})))},v=t(3),N=(t(36),t(37),t(21)),_=function(){return c.a.createElement("div",{className:"MeContainer"},c.a.createElement("h1",null,"Dmitrijs Starcenko"),c.a.createElement("div",{className:"WARNING"},c.a.createElement("div",null,"Under Development"),c.a.createElement("a",{"data-tip":!0,"data-for":"devInfo"},c.a.createElement("ion-icon",{name:"information-circle-sharp",id:"devInfoIcon"})),c.a.createElement(N.a,{place:"bottom",id:"devInfo"},c.a.createElement("p",null,"Next:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Gallery Fullscreen View"),c.a.createElement("li",null,"Router Animations"),c.a.createElement("li",null,"Caching")),c.a.createElement("p",null,"Complete:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Desktop Layout"),c.a.createElement("li",null,"Create Gallery Component"),c.a.createElement("li",null,"Add Work Projects Screenshots"),c.a.createElement("li",null,"Mobile Layout"),c.a.createElement("li",null,"Scaling Improvements"),c.a.createElement("li",null,"Create Tabs Component"),c.a.createElement("li",null,"Show Off Workstation"),c.a.createElement("li",null,"Show Off RPI NAS"),c.a.createElement("li",null,"Show Off RPI HASS IO")))),c.a.createElement("span",{style:{flexGrow:1}}),c.a.createElement("div",null,c.a.createElement("h2",null,"Software Developer"),c.a.createElement("h3",null,"[FULL STACK]")),c.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},c.a.createElement("div",{className:"NavItem"},c.a.createElement("a",{href:"CV.pdf",download:"CV.pdf"},c.a.createElement("ion-icon",{name:"document"}),c.a.createElement("div",{className:"Descr"},"CV"))),c.a.createElement("div",{className:"NavItem"},c.a.createElement("a",{href:"https://www.linkedin.com/in/dlstarcenko",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("ion-icon",{name:"logo-linkedin"}))),c.a.createElement("div",{className:"NavItem"},c.a.createElement("a",{href:"./MasterThesis.pdf",download:"./MasterThesis.pdf"},c.a.createElement("ion-icon",{name:"document"}),c.a.createElement("div",{className:"Descr"},"MT")))))},S=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(_,null))},h=(t(38),t(39),function(e){var a=e.children,t=e.header,n=e.iconName;return c.a.createElement("div",{className:"PageHeaderContainer"},c.a.createElement("div",{className:"Header"},c.a.createElement("h1",null,t),c.a.createElement("span",{style:{flexGrow:1}}),c.a.createElement("ion-icon",{name:n})),c.a.createElement("div",null,a))}),g=t(22),f=t(6),I=(t(40),{MOBILE:{frameName:"phoneframe.png"},WEB:{frameName:"webbrowserframe.png"}}),C=function(e){var a=e.projectType,t=(e.orientation,e.projectName),l=e.numOfImages,r=a,i=new Image,m=Object(n.useState)({}),s=Object(f.a)(m,2),o=s[0],d=s[1],E=Object(n.useState)(1),u=Object(f.a)(E,2),p=u[0],v=u[1],N=Object(n.useState)(null),_=Object(f.a)(N,2),S=_[0],h=_[1],C=Object(n.useState)(!0),b=Object(f.a)(C,2),L=b[0],k=b[1],T=Object(n.useState)(1),O=Object(f.a)(T,2),y=O[0],A=O[1];Object(n.useEffect)((function(){for(var e=I[a],t=e.scaleFactor,n=e.frameName,c=Object(g.a)(e,["scaleFactor","frameName"]),l={frameName:n},r=0,i=Object.entries(c);r<i.length;r++){var m=Object(f.a)(i[r],2),s=m[0],o=m[1];l[s]=o*t}d(l),j(p)}),[]);var j=function(e){k(!0),A(.3),v(e),i.src=encodeURI("./Projects/".concat(t,"/").concat(e,".png")),i.onload=function(){setTimeout((function(){h(i.src),k(!1),A(1)}),500)}};return c.a.createElement("div",{className:["ProjectDisplay_Container","ProjectDisplay_Container--"+r].join(" "),style:{backgroundImage:"url(".concat(o.frameName,")")}},c.a.createElement("div",{className:["ProjectHeader","ProjectHeader--"+r].join(" ")},t),c.a.createElement("div",{className:"LoadingText"},L&&"LOADING..."),c.a.createElement("div",{className:["ProjectDisplay_Background","ProjectDisplay_Background--"+r].join(" "),style:{backgroundImage:"url(".concat(S,")"),opacity:y}}),c.a.createElement("div",{className:["Controls","Controls--"+r].join(" ")},c.a.createElement("div",{className:"Controls_Button",onClick:function(){var e=p-1;e<1||j(e)}},c.a.createElement("ion-icon",{name:"arrow-back-circle"})),c.a.createElement("div",{className:"Controls_Progress"},"".concat(p," / ").concat(l)),c.a.createElement("div",{className:"Controls_Button",onClick:function(){var e=p+1;e>l||j(e)}},c.a.createElement("ion-icon",{name:"arrow-forward-circle"}))))},b="LANDSCAPE",L="PORTRAIT",k="WEB",T="MOBILE",O=t(8),y=(t(41),t(15)),A=function(e){var a=e.tabs,t=Object(n.useState)(a.map((function(e){return Object(O.a)({active:e.active||!1},e)}))),l=Object(f.a)(t,2),r=l[0],i=l[1],m=function(e){var a=e.tabId;i(r.map((function(e){return e.title!==a?Object(O.a)(Object(O.a)({},e),{},{active:!1}):Object(O.a)(Object(O.a)({},e),{},{active:!0})})))};return c.a.createElement("div",{className:"TabsEncapsulator_Container"},c.a.createElement("div",{className:"TabsEncapsulator_TabsContainer"},r.map((function(e){return c.a.createElement(j,{key:e.title,title:e.title,isActive:e.active,tabClickEvent:m})}))),r.map((function(e){return c.a.createElement("div",{key:e.title,className:y({TabsEncapsulator_ContentWrapper:!0,"TabsEncapsulator_ContentWrapper--Active":e.active})},e.content?e.content:c.a.createElement("h4",null,"NO CONTENT: "," ".concat(e.title)))})))},j=function(e){var a=e.title,t=e.isActive,n=e.tabClickEvent;return c.a.createElement("div",{className:y({TabElement_Container:!0,"TabElement_Container--Active":t}),onClick:function(){n({tabId:a})}},a)},D=function(){var e=[{title:"MOBILE & WEB",active:!0,content:c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ProjectsContainer"},c.a.createElement(C,{projectType:T,orientation:L,projectName:"Insights Discovery",numOfImages:42}),c.a.createElement(C,{projectType:T,orientation:L,projectName:"Insights Marketing",numOfImages:30})),c.a.createElement("div",{className:"ProjectsContainer"},c.a.createElement(C,{projectType:k,orientation:b,projectName:"Team Wheel",numOfImages:8})))},{title:"WORKSTATION",active:!1,content:c.a.createElement("div",{className:"WorkstationContainer"},c.a.createElement("img",{src:encodeURI("./Projects/Workstation/01.JPG"),className:"WorkstationBackground",alt:"wrks"}),c.a.createElement("div",{className:"SpecList"},c.a.createElement("div",{className:"SpecList_ItemsContainer"},c.a.createElement("div",{className:"SpecList_Item_1"},"MODEL:"),c.a.createElement("div",{className:"SpecList_Item_1"},"OS:"),c.a.createElement("div",{className:"SpecList_Item_1"},"AGE:"),c.a.createElement("div",{className:"SpecList_Item_1"},"CPU:"),c.a.createElement("div",{className:"SpecList_Item_1"},"HDD:"),c.a.createElement("div",{className:"SpecList_Item_1"},"RAM:"),c.a.createElement("div",{className:"SpecList_Item_1"},"EGPU:")),c.a.createElement("div",{className:"SpecList_ItemsContainer"},c.a.createElement("div",{className:"SpecList_Item_2"},"MSI GT70"),c.a.createElement("div",{className:"SpecList_Item_2"},"WIN 10"),c.a.createElement("div",{className:"SpecList_Item_2"},"9 Years"),c.a.createElement("div",{className:"SpecList_Item_2"},"i7-3610QM"),c.a.createElement("div",{className:"SpecList_Item_2"},"RAID0: 2x1TB SSD | 1x500GB SSD"),c.a.createElement("div",{className:"SpecList_Item_2"},"16GB RAM"),c.a.createElement("div",{className:"SpecList_Item_2"},"NVIDIA GTX 1660S"))),c.a.createElement("div",{className:"Divider"}),c.a.createElement("div",{className:"SpecList"},c.a.createElement("div",{className:"SpecList_ItemsContainer"},c.a.createElement("div",{className:"SpecList_Item_1"},"MODEL:"),c.a.createElement("div",{className:"SpecList_Item_1"},"OS:"),c.a.createElement("div",{className:"SpecList_Item_1"},"AGE:"),c.a.createElement("div",{className:"SpecList_Item_1"},"CPU:"),c.a.createElement("div",{className:"SpecList_Item_1"},"HDD:"),c.a.createElement("div",{className:"SpecList_Item_1"},"RAM:")),c.a.createElement("div",{className:"SpecList_ItemsContainer"},c.a.createElement("div",{className:"SpecList_Item_2"},"MAC BOOK PRO (2013)"),c.a.createElement("div",{className:"SpecList_Item_2"},"OSX"),c.a.createElement("div",{className:"SpecList_Item_2"},"6 Years"),c.a.createElement("div",{className:"SpecList_Item_2"},"i7"),c.a.createElement("div",{className:"SpecList_Item_2"},"250GB"),c.a.createElement("div",{className:"SpecList_Item_2"},"8GB"))))},{title:"NAS",active:!1,content:c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"NasPicsContainer"},["01.jpg","02.jpg"].map((function(e){return c.a.createElement("img",{key:e,alt:e,src:encodeURI("./Projects/Nas/".concat(e))})}))),c.a.createElement("div",{className:"SpecList"},c.a.createElement("div",{className:"SpecList_ItemsContainer"},c.a.createElement("div",{className:"SpecList_Item_1"},"HARDWARE:"),c.a.createElement("div",{className:"SpecList_Item_1"},"OS:"),c.a.createElement("div",{className:"SpecList_Item_1"},"RAM:"),c.a.createElement("div",{className:"SpecList_Item_1"},"NAS SOFT:"),c.a.createElement("div",{className:"SpecList_Item_1"},"HDD SETUP:"),c.a.createElement("div",{className:"SpecList_Item_1"},"USES:")),c.a.createElement("div",{className:"SpecList_ItemsContainer"},c.a.createElement("div",{className:"SpecList_Item_2"},"SBC Raspberry Pi 4"),c.a.createElement("div",{className:"SpecList_Item_2"},"Raspbian"),c.a.createElement("div",{className:"SpecList_Item_2"},"4GB"),c.a.createElement("div",{className:"SpecList_Item_2"},"Open Media Vault (OMV)"),c.a.createElement("div",{className:"SpecList_Item_2"},"RAID1: [2x2TB, 2x500GB]"),c.a.createElement("div",{className:"SpecList_Item_2"},c.a.createElement("ul",null,c.a.createElement("li",null,"Data Storage | Backup | Sharing"),c.a.createElement("li",null,"Web Apps Testing & Serving Using Docker Containers"))))))},{title:"HASS IO",active:!1,content:c.a.createElement("div",{className:"HassContainer"},c.a.createElement("div",{className:"HassPicsContainer"},["01.jpg"].map((function(e){return c.a.createElement("img",{key:e,alt:e,src:encodeURI("./Projects/Hass/".concat(e))})}))),c.a.createElement("div",{className:"SpecList"},c.a.createElement("div",{className:"SpecList_ItemsContainer"},c.a.createElement("div",{className:"SpecList_Item_1"},"HARDWARE:"),c.a.createElement("div",{className:"SpecList_Item_1"},"OS:"),c.a.createElement("div",{className:"SpecList_Item_1"},"RAM:"),c.a.createElement("div",{className:"SpecList_Item_1"},"USES:")),c.a.createElement("div",{className:"SpecList_ItemsContainer"},c.a.createElement("div",{className:"SpecList_Item_2"},"SBC Raspberry Pi 3"),c.a.createElement("div",{className:"SpecList_Item_2"},"HASS IO"),c.a.createElement("div",{className:"SpecList_Item_2"},"1GB"),c.a.createElement("div",{className:"SpecList_Item_2"},c.a.createElement("ul",null,c.a.createElement("li",null,"Control Smart Switches"),c.a.createElement("li",null,"Automate Events"),c.a.createElement("li",null,"Switch Off computers using SSH (public,private key authentication)"),c.a.createElement("li",null,"Monitor Appliances Status (diplayed using NAS screen)"))))))}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{header:"PROJECTS",iconName:d.icon_name}),c.a.createElement(A,{tabs:e}))},P=(t(42),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{header:"CONTACT",iconName:E.icon_name}),c.a.createElement("div",{id:"map"},c.a.createElement("div",{id:"maploader"},c.a.createElement("div",null,"MAP LOADING...")),c.a.createElement("iframe",{title:"LocationGoogleMap",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.98632965787!2d-6.385784896089965!3d53.32423806922109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!5e0!3m2!1sen!2sie!4v1564509835552!5m2!1sen!2sie",allowFullScreen:!0})),c.a.createElement("div",{className:"ContactDetails"},c.a.createElement("ion-icon",{name:"compass"}),c.a.createElement("p",null,"Ireland - Dublin")),c.a.createElement("div",{className:"ContactDetails"},c.a.createElement("ion-icon",{name:"mail"}),c.a.createElement("p",null,"dlstarcenko@gmail.com")))}),w=(t(43),t(44),function(e){var a=e.subject,t=e.degree,n=e.year,l=e.modules;return c.a.createElement("div",{className:"EducationListContainer"},c.a.createElement("div",{className:"Education_Headers_Container"},c.a.createElement("div",{className:"Education_Header_Container"},c.a.createElement("div",{className:"Education_Header_1"},"Subject:"),c.a.createElement("div",{className:"Education_Header_1"},"Degree:"),n&&c.a.createElement("div",{className:"Education_Header_1"},"Year:")),c.a.createElement("div",{className:"Education_Header_Container"},c.a.createElement("div",{className:"Education_Header_2"},a),c.a.createElement("div",{className:"Education_Header_2"},t),n&&c.a.createElement("div",{className:"Education_Header_2"},n))),c.a.createElement("ul",{className:"EducationList_Modules"},l.map((function(e){return c.a.createElement("li",{key:e.toString()},e)}))))}),M=(t(45),function(e){var a=e.provider,t=e.year,n=e.subject,l=e.website;return c.a.createElement("div",{className:"TrainingListContainer"},c.a.createElement("div",{className:"Training_Headers_Container"},c.a.createElement("div",{className:"Training_Header_Container"},c.a.createElement("div",{className:"Training_Header_1"},"Provider:"),c.a.createElement("div",{className:"Training_Header_1"},"Year:"),c.a.createElement("div",{className:"Training_Header_1"},"Subject:"),c.a.createElement("div",{className:"Training_Header_1"},"Website:")),c.a.createElement("div",{className:"Training_Header_Container"},c.a.createElement("div",{className:"Training_Header_2"},a),c.a.createElement("div",{className:"Training_Header_2"},t),c.a.createElement("div",{className:"Training_Header_2"},n),c.a.createElement("div",{className:"Training_Header_2"},l))))}),H=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{header:"EDUCATION",iconName:u.icon_name}),c.a.createElement("h4",null,"Training"),c.a.createElement("div",{className:"EducationListsContainer"},c.a.createElement(M,{provider:"QA (UK Training)",year:"2019",subject:"ASP.NET MVC",website:"www.qa.com"}),c.a.createElement(M,{provider:"NCC (UK Training)",year:"2019",subject:"Penetration Testing",website:"www.nccgroup.com"})),c.a.createElement("div",{className:"Divider"}),c.a.createElement("h4",null,"Degree"),c.a.createElement("div",{className:"EducationListsContainer"},[{subject:"Cyber Security",degree:"Masters (2:1)",year:"2017-2020",modules:["Secure Programming for Web","Secure Programming for Apps","Network Security and Pen Testing","Cloud Security","Cryptography","Malware Analysis","IT Law and Ethics","Research in Computing","Security Fundamentals"]},{subject:"Games Development",degree:"Bachelors (1:1)",year:"2009-2013",modules:["Programming Principles","OOP (C++ | Java | C#)","DataBase Systems","Web Programming","Rendering Algorythms","Maths","Calculus","Game Physics","2D Game Engine Development","3D Game Development","A.I.","3D Modeling","3D Animation","Networking","Sound Technology","Games Theory and Practice","GUI Design","Operating Systems"]}].map((function(e){return c.a.createElement(w,{key:e.subject.toString(),subject:e.subject,degree:e.degree,year:e.year,modules:e.modules})}))))},R=(t(46),t(47),function(e){var a=e.header,t=e.skills;return c.a.createElement("div",{className:"SkillListContainer"},c.a.createElement("h3",{className:"SkillListHeader"},a),c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("li",{key:e.toString()},e)}))))}),G=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{header:"SKILLS",iconName:o.icon_name}),c.a.createElement("div",null,c.a.createElement("h4",null,"Primary Technical Skills:"),c.a.createElement("div",{className:"TechincalSkillsContainer"},[{header:"OOP / Scripting",skills:["JavaScript","Python","C#"]},{header:"BackEnd Dev",skills:["Node","Flask","ASP.NET"]},{header:"FrontEnd Dev",skills:["React","Angular 2+","ASP.NET MVC","HTML | S(CSS) | JS"]},{header:"State Management",skills:["Redux","Redux Toolkit","React Query"]},{header:"Databases + ORM",skills:["MSQL + EF","Mongo + Mongoose"]},{header:"Mobile Dev",skills:["React Native / Expo","Appcelerator"]},{header:"Source Control",skills:["Git","GitLab","TFS"]},{header:"Testing",skills:["Jest","Mocha + Chai","NUnit"]},{header:"Contenerization",skills:["Docker"]}].map((function(e){return c.a.createElement(R,{key:e.header.toString(),header:e.header,skills:e.skills})})))),c.a.createElement("div",{className:"Divider"}),c.a.createElement("div",null,c.a.createElement("h4",null,"Secondary Technical Skills:"),c.a.createElement("div",{className:"TechincalSkillsContainer"},[{header:"Image Editing / Design",skills:["GIMP","Adobe Photoshop","Adobe XD"]},{header:"Game Engine",skills:["Unity 3D"]},{header:"3D Modeling",skills:["Blender"]}].map((function(e){return c.a.createElement(R,{key:e.header.toString(),header:e.header,skills:e.skills})})))),c.a.createElement("div",{className:"Divider"}),c.a.createElement("div",null,c.a.createElement("h4",null,"Other Activities:"),c.a.createElement("div",{className:"TechincalSkillsContainer"},[{header:"Sport Activities",skills:["Calisthenics","Weight Lifting"]},{header:"Gaming (PC)",skills:["Path Of Exile","Witcher 3","Wolcen"]},{header:"Home Automation",skills:["Raspberry PI","HASS IO"]}].map((function(e){return c.a.createElement(R,{key:e.header.toString(),header:e.header,skills:e.skills})})))))},B=function(){return c.a.createElement(v.d,null,c.a.createElement(v.b,{path:"/".concat(s.path),component:S}),c.a.createElement(v.b,{path:"/".concat(o.path),component:G}),c.a.createElement(v.b,{path:"/".concat(d.path),component:D}),c.a.createElement(v.b,{path:"/".concat(E.path),component:P}),c.a.createElement(v.b,{path:"/".concat(u.path),component:H}),c.a.createElement(v.b,{path:"*"},c.a.createElement(v.a,{to:"/".concat(o.path)})))},W=(t(48),function(e){var a=e.children;return c.a.createElement("div",{className:"PageWrapperContainer"},c.a.createElement("div",{className:"TopShadow"}),c.a.createElement("div",{className:"PageWrapperContainer_Children_ScrollContainer"},c.a.createElement("div",{className:"PageWrapperContainer_Children"},a)))}),U=function(){return Object(n.useEffect)((function(){i.a.initialize("UA-174996828-1"),i.a.pageview("/")}),[]),c.a.createElement(m.a,null,c.a.createElement("div",{id:"mainContainer"},c.a.createElement("div",{id:"leftNav"},c.a.createElement(p,null)),c.a.createElement("div",{id:"centerPerson"},c.a.createElement(_,null)),c.a.createElement("div",{id:"rightPages"},c.a.createElement(W,null,c.a.createElement(B,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[23,1,2]]]);
//# sourceMappingURL=main.90a7047d.chunk.js.map