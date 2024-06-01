import{a as oe}from"./chunk-LMNN4NVT.js";import{a as ne}from"./chunk-OVIPCU6O.js";import{c as z}from"./chunk-T7QTB5KA.js";import"./chunk-G2MQEQ3S.js";import{$a as te,E as A,Ha as b,Ja as Z,Oa as ee,b as Y,nb as P,pb as ie,v as H,y as F}from"./chunk-EPUQ6IPG.js";import{B as q,Fb as m,Gb as V,Ib as E,Jb as D,Kb as n,Lb as o,Mb as c,Vb as w,X as G,cc as p,dc as T,ea as J,ec as y,fa as j,fb as s,gb as u,gc as $,ja as Q,ld as C,mc as x,md as S,pa as h,qa as I,qd as X,s as k,vc as d,wc as l,xb as f,xc as M,zb as g}from"./chunk-TYBYM3PM.js";import"./chunk-REV7FFDQ.js";import{a as R,b as K}from"./chunk-MON7YFGF.js";var N=(()=>{let t=class t{constructor(r){this.httpClient=r,this.baseUrl="/api/v1/users/analytics"}getStatistics(){return this.httpClient.get(`${this.baseUrl}/statistics`)}getPerformanceByPeriod(){return this.httpClient.get(`${this.baseUrl}/performance-by-period`)}getTasksCountByTeams(){return this.httpClient.get(`${this.baseUrl}/tasks-by-teams`)}};t.\u0275fac=function(a){return new(a||t)(Q(Y))},t.\u0275prov=J({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var re=()=>({height:"100%","min-height":"270px","border-radius":"8px"});function he(e,t){if(e&1&&(n(0,"div",1)(1,"div",3),c(2,"mat-progress-spinner",4),n(3,"p",5),p(4),o()(),n(5,"p",6),p(6,"Overall Performance"),o()()),e&2){let i=w();s(2),g("value",i.data.performance),s(2),y("",i.data.performance,"%")}}function we(e,t){e&1&&c(0,"ngx-skeleton-loader",2),e&2&&g("theme",x(1,re))}function xe(e,t){if(e&1&&f(0,he,7,2,"div",1)(1,we,1,2,"ngx-skeleton-loader",2),e&2){let i=t;m(0,i.data?0:-1),s(),m(1,i.loading?1:-1)}}function Ce(e,t){if(e&1&&(n(0,"div",7)(1,"div",9)(2,"p",10),p(3,"Performance(%) by period"),o()(),n(4,"div"),c(5,"canvas",11),o()()),e&2){let i=w(),r=w();s(5),g("data",i.data)("options",r.performanceChartOptions)}}function ue(e,t){e&1&&c(0,"ngx-skeleton-loader",8),e&2&&g("theme",x(1,re))}function ye(e,t){if(e&1&&f(0,Ce,6,2,"div",7)(1,ue,1,2,"ngx-skeleton-loader",8),e&2){let i=t;m(0,i.data?0:-1),s(),m(1,i.loading||i.error?1:-1)}}var se=(()=>{let t=class t{constructor(r,a){this.performanceService=r,this.usersAnalyticsService=a,this.userPerformance$=this.performanceService.getLatestUserPerformance().pipe(k(v=>K(R({},v),{performance:v.performance*100}))),this.performanceChartData$=this.usersAnalyticsService.getPerformanceByPeriod().pipe(k(v=>({labels:v.labels,datasets:[{data:v.data,label:"Performance by period",borderColor:"rgba(6, 142, 68, 0.8)",backgroundColor:"rgba(6, 142, 68, 0.4)",fill:!0,tension:.5}]}))),this.performanceChartOptions={responsive:!0,maintainAspectRatio:!1,font:{family:"Poppins, sans-serif",size:14}}}};t.\u0275fac=function(a){return new(a||t)(u(ne),u(N))},t.\u0275cmp=h({type:t,selectors:[["app-overview-performance-section"]],decls:7,vars:10,consts:[[1,"overview-section"],[1,"overview-section-statistics","performance"],["count","1","appearance","line",1,"overview-performance-stats-loading",3,"theme"],[1,"overview-performance-wrapper"],["diameter","150",3,"value"],[1,"overview-performance-value"],[1,"overview-performance-label"],[1,"overview-section-graph"],["count","1","appearance","line",1,"overview-performance-graph-loading",3,"theme"],[1,"overview-section-graph-toolbar"],[1,"overview-section-graph-title"],["baseChart","","height","250","type","line",3,"data","options"]],template:function(a,v){if(a&1&&(n(0,"div",0),f(1,xe,2,2),d(2,"withLoading"),d(3,"async"),f(4,ye,2,2),d(5,"withLoading"),d(6,"async"),o()),a&2){let _,B;s(),m(1,(_=l(3,4,l(2,2,v.userPerformance$)))?1:-1,_),s(3),m(4,(B=l(6,8,l(5,6,v.performanceChartData$)))?4:-1,B)}},dependencies:[te,b,F,C,P],styles:["[_nghost-%COMP%]     mat-progress-spinner{box-shadow:0 0 0 15px #e9e9e9 inset;border-radius:50%}.overview-performance-stats-loading[_ngcontent-%COMP%]{grid-column:span 2/span 2}@media screen and (max-width: 48em){.overview-performance-stats-loading[_ngcontent-%COMP%]{grid-column:span 5/span 5}}.overview-performance-graph-loading[_ngcontent-%COMP%]{grid-column:span 3/span 3}@media screen and (max-width: 48em){.overview-performance-graph-loading[_ngcontent-%COMP%]{grid-column:span 5/span 5}}"],changeDetection:0});let e=t;return e})();var Oe=(e,t)=>t.id,Me=()=>({height:"100%","min-height":"180px","border-radius":"8px"});function Se(e,t){if(e&1&&(n(0,"div",5)(1,"p",6),p(2),o(),n(3,"p",7),p(4),d(5,"date"),o()()),e&2){let i=t.$implicit;s(2),T(i.name),s(2),$(" Created at ",M(5,5,i.createdDate,"MMM d, y")," by ",i.owner.firstname," ",i.owner.lastname,". ",i.description,". ")}}function ke(e,t){if(e&1&&(n(0,"div",0)(1,"div",2)(2,"h5",3),p(3,"My projects"),o()(),n(4,"div",4),E(5,Se,6,8,"div",5,Oe),o()()),e&2){let i=w();s(5),D(i.data)}}function Te(e,t){e&1&&c(0,"ngx-skeleton-loader",1),e&2&&g("theme",x(1,Me))}function Ee(e,t){if(e&1&&f(0,ke,7,0,"div",0)(1,Te,1,2,"ngx-skeleton-loader",1),e&2){let i=t;m(0,i.data?0:-1),s(),m(1,i.loading?1:-1)}}var pe=(()=>{let t=class t{constructor(r){this.teamsService=r,this.teams$=this.teamsService.teams$}};t.\u0275fac=function(a){return new(a||t)(u(z))},t.\u0275cmp=h({type:t,selectors:[["app-overview-projects-list"]],decls:3,vars:5,consts:[[1,"overview__teams"],["count","1","appearance","line",1,"overview__teams-loading",3,"theme"],[1,"overview__teams-header"],[1,"overview__teams-title"],[1,"overview__teams-list"],[1,"overview__teams-item"],[1,"overview__teams-item-title"],[1,"overview__teams-item-description"]],template:function(a,v){if(a&1&&(f(0,Ee,2,2),d(1,"withLoading"),d(2,"async")),a&2){let _;m(0,(_=l(2,3,l(1,1,v.teams$)))?0:-1,_)}},dependencies:[b,C,S,P],styles:[".overview__teams[_ngcontent-%COMP%]{padding:22px;border:1px solid #e6eaee;background:#fff;border-radius:6px}.overview__teams-title[_ngcontent-%COMP%]{color:#242424;font-size:16px;font-weight:600}.overview__teams-list[_ngcontent-%COMP%]{margin-top:20px;display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));grid-template-rows:none}.overview__teams-add[_ngcontent-%COMP%]{min-height:90px;padding:22px;display:flex;align-items:center;gap:8px;justify-content:center;border:1px dashed #afafaf;border-radius:6px;cursor:pointer;color:#424242;font-weight:500}.overview__teams-add[_ngcontent-%COMP%]:hover{background:#ebebeb}.overview__teams-item[_ngcontent-%COMP%]{padding:14px;background:#fff;border:1px solid #e9e9e9;border-radius:6px;cursor:pointer}.overview__teams-item-title[_ngcontent-%COMP%]{color:#242424;font-size:16px;font-weight:600}.overview__teams-item-description[_ngcontent-%COMP%]{margin-top:2px!important;font-size:14px;color:#525766;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.overview-section__teams-loading[_ngcontent-%COMP%]{grid-column:span 3/span 3}@media screen and (max-width: 48em){.overview-section__teams-loading[_ngcontent-%COMP%]{grid-column:span 5/span 5}}"],changeDetection:0});let e=t;return e})();var me=(()=>{let t=class t{constructor(){this.timeSource=q(6e4),this.formattedTime=this.timeSource.pipe(G(new Date),k(()=>new Date))}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=h({type:t,selectors:[["app-overview-sidebar-calendar"]],decls:9,vars:6,consts:[[1,"overview-sidebar"],[1,"overview-sidebar-title"],[1,"overview-sidebar-list"],[1,"overview-calendar-current"]],template:function(a,v){a&1&&(n(0,"div",0)(1,"p",1),p(2,"Datetime calendar"),o(),n(3,"div",2),c(4,"mat-calendar"),o(),n(5,"p",3),p(6),d(7,"async"),d(8,"date"),o()()),a&2&&(s(6),y(" ",M(8,3,l(7,1,v.formattedTime),"EEEE, MMMM, d, h:mm a")," "))},dependencies:[ee,C,S],styles:["[_nghost-%COMP%]     .mat-calendar-header{padding:0}[_nghost-%COMP%]     .mat-calendar{margin-top:-20px}.overview-calendar-current[_ngcontent-%COMP%]{text-align:center;font-size:16px;margin:22px 0!important;color:#494d55}"],changeDetection:0});let e=t;return e})();var Le=()=>({height:"100%","min-height":"600px","border-radius":"8px"});function je(e,t){e&1&&c(0,"span",9)}function Ie(e,t){if(e&1&&(n(0,"div",4)(1,"div",5)(2,"p",6),p(3),o(),n(4,"p",7),p(5),o()(),n(6,"p",8),p(7),d(8,"date"),o()(),f(9,je,1,0,"span",9)),e&2){let i=t.$implicit,r=t.$index,a=t.$count;s(3),T(i.title),s(2),T(i.type),s(2),y(" ",M(8,4,i.start,"MMM d, h:mm a")," "),s(2),m(9,r!==a-1?9:-1)}}function $e(e,t){if(e&1&&(n(0,"div",0)(1,"p",2),p(2,"Upcoming events"),o(),n(3,"div",3),E(4,Ie,10,7,null,null,V),o()()),e&2){let i=w();s(4),D(i.data)}}function Fe(e,t){e&1&&c(0,"ngx-skeleton-loader",1),e&2&&g("theme",x(1,Le))}function Ae(e,t){if(e&1&&f(0,$e,6,0,"div",0)(1,Fe,1,2,"ngx-skeleton-loader",1),e&2){let i=t;m(0,i.data?0:-1),s(),m(1,i.loading?1:-1)}}var de=(()=>{let t=class t{constructor(r){this.eventsService=r,this.events$=this.eventsService.getEvents()}};t.\u0275fac=function(a){return new(a||t)(u(oe))},t.\u0275cmp=h({type:t,selectors:[["app-overview-sidebar-events"]],decls:3,vars:5,consts:[[1,"overview-sidebar"],["count","1","appearance","line",3,"theme"],[1,"overview-sidebar-title"],[1,"overview-sidebar-list"],[1,"overview-events-item"],[1,"overview-events-item-header"],[1,"overview-events-item-title"],[1,"overview-events-item-description"],[1,"overview-events-item-time"],[1,"overview-sidebar-list-divider"]],template:function(a,v){if(a&1&&(f(0,Ae,2,2),d(1,"withLoading"),d(2,"async")),a&2){let _;m(0,(_=l(2,3,l(1,1,v.events$)))?0:-1,_)}},dependencies:[b,C,S,P],changeDetection:0});let e=t;return e})();var ce=()=>({height:"100%","min-height":"270px","border-radius":"8px"});function Ue(e,t){if(e&1&&(n(0,"div",1)(1,"div",3)(2,"div",4)(3,"mat-icon"),p(4,"apps"),o()(),n(5,"div",5)(6,"p",6),p(7,"Total"),o(),n(8,"p",7),p(9),o()()(),n(10,"div",3)(11,"div",4)(12,"mat-icon"),p(13,"task_alt"),o()(),n(14,"div",5)(15,"p",6),p(16,"Completed"),o(),n(17,"p",7),p(18),o()()(),n(19,"div",3)(20,"div",4)(21,"mat-icon"),p(22,"downloading"),o()(),n(23,"div",5)(24,"p",6),p(25,"In progress"),o(),n(26,"p",7),p(27),o()()(),n(28,"div",3)(29,"div",4)(30,"mat-icon"),p(31,"apps"),o()(),n(32,"div",5)(33,"p",6),p(34,"On Hold"),o(),n(35,"p",7),p(36),o()()()()),e&2){let i=t;s(9),y("",i.totalTasksCount," Tasks"),s(9),y("",i.completedTasksCount," Tasks"),s(9),y("",i.inProgressTasksCount," Tasks"),s(9),y("",i.openTasksCount," Tasks")}}function We(e,t){e&1&&c(0,"ngx-skeleton-loader",2),e&2&&g("theme",x(1,ce))}function He(e,t){if(e&1&&f(0,Ue,37,4,"div",1)(1,We,1,2,"ngx-skeleton-loader",2),e&2){let i,r=t;m(0,(i=r.data)?0:-1,i),s(),m(1,r.loading||r.error?1:-1)}}function Re(e,t){if(e&1&&(n(0,"div",8)(1,"div",10)(2,"p",11),p(3,"Tasks by teams"),o()(),n(4,"div"),c(5,"canvas",12),o()()),e&2){let i=w(),r=w();s(5),g("data",i.data)("options",r.barChartOptions)}}function Ke(e,t){e&1&&c(0,"ngx-skeleton-loader",9),e&2&&g("theme",x(1,ce))}function qe(e,t){if(e&1&&f(0,Re,6,2,"div",8)(1,Ke,1,2,"ngx-skeleton-loader",9),e&2){let i=t;m(0,i.data?0:-1),s(),m(1,i.loading||i.error?1:-1)}}var le=(()=>{let t=class t{constructor(r){this.usersAnalyticsService=r,this.tasksAnalytics$=this.usersAnalyticsService.getStatistics(),this.completedTasksByTeams$=this.usersAnalyticsService.getTasksCountByTeams().pipe(k(a=>({labels:a.labels,datasets:[{data:a.data,label:"Active tasks by teams",borderRadius:8,backgroundColor:"rgba(6, 142, 68, 0.8)"}]}))),this.barChartOptions={responsive:!0,maintainAspectRatio:!1,font:{family:"Poppins, sans-serif",size:14}}}};t.\u0275fac=function(a){return new(a||t)(u(N))},t.\u0275cmp=h({type:t,selectors:[["app-overview-tasks-section"]],decls:7,vars:10,consts:[[1,"overview-section"],[1,"overview__tasks"],["count","1","appearance","line",1,"overview-section__task-analytics-loading",3,"theme"],[1,"overview__tasks-item"],[1,"overview__tasks-item-icon"],[1,"overview__tasks-item-body"],[1,"overview__tasks-item-title"],[1,"overview__tasks-item-number"],[1,"overview-section-graph"],["count","1","appearance","line",1,"overview-section__tasks-by-teams-loading",3,"theme"],[1,"overview-section-graph-toolbar"],[1,"overview-section-graph-title"],["baseChart","","height","250",3,"data","options"]],template:function(a,v){if(a&1&&(n(0,"div",0),f(1,He,2,2),d(2,"withLoading"),d(3,"async"),f(4,qe,2,2),d(5,"withLoading"),d(6,"async"),o()),a&2){let _,B;s(),m(1,(_=l(3,4,l(2,2,v.tasksAnalytics$)))?1:-1,_),s(3),m(4,(B=l(6,8,l(5,6,v.completedTasksByTeams$)))?4:-1,B)}},dependencies:[A,b,F,C,P],styles:[".overview__tasks[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);gap:12px;grid-column:span 2/span 2}@media screen and (max-width: 48em){.overview__tasks[_ngcontent-%COMP%]{grid-column:span 5/span 5}}.overview__tasks-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:8px;background:#fff;padding:12px;color:#242424;border:1px solid #e6eaee}.overview__tasks-item-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.overview__tasks-item-title[_ngcontent-%COMP%]{font-weight:600}.overview__tasks-item-body[_ngcontent-%COMP%]{text-align:center;margin-top:12px}.overview__tasks-item-number[_ngcontent-%COMP%]{margin-top:4px;font-size:12px;color:#707070}.overview-section__tasks-by-teams-loading[_ngcontent-%COMP%]{grid-column:span 3/span 3}@media screen and (max-width: 48em){.overview-section__tasks-by-teams-loading[_ngcontent-%COMP%]{grid-column:span 5/span 5}}.overview-section__task-analytics-loading[_ngcontent-%COMP%]{grid-column:span 2/span 2}@media screen and (max-width: 48em){.overview-section__task-analytics-loading[_ngcontent-%COMP%]{grid-column:span 5/span 5}}"],changeDetection:0});let e=t;return e})();var Je=(e,t)=>t.id,Qe=()=>({height:"100%","min-height":"180px","border-radius":"8px"});function Ve(e,t){if(e&1&&(n(0,"div",6)(1,"p",7),p(2),o(),n(3,"p",8),p(4),d(5,"date"),o()()),e&2){let i=t.$implicit;s(2),T(i.name),s(2),$(" Created at ",M(5,5,i.createdDate,"MMM d, y")," by ",i.owner.firstname," ",i.owner.lastname,". ",i.description,". ")}}function Xe(e,t){if(e&1&&(n(0,"div",0)(1,"div",2)(2,"h5",3),p(3,"My teams"),o()(),n(4,"div",4)(5,"div",5)(6,"mat-icon"),p(7,"add"),o(),n(8,"p"),p(9,"Create team"),o()(),E(10,Ve,6,8,"div",6,Je),o()()),e&2){let i=w();s(10),D(i.data)}}function Ye(e,t){e&1&&c(0,"ngx-skeleton-loader",1),e&2&&g("theme",x(1,Qe))}function Ze(e,t){if(e&1&&f(0,Xe,12,0,"div",0)(1,Ye,1,2,"ngx-skeleton-loader",1),e&2){let i=t;m(0,i.data?0:-1),s(),m(1,i.loading?1:-1)}}var ve=(()=>{let t=class t{constructor(r){this.teamsService=r,this.teams$=this.teamsService.teams$}};t.\u0275fac=function(a){return new(a||t)(u(z))},t.\u0275cmp=h({type:t,selectors:[["app-overview-teams-list"]],decls:3,vars:5,consts:[[1,"overview__teams"],["count","1","appearance","line",1,"overview__teams-loading",3,"theme"],[1,"overview__teams-header"],[1,"overview__teams-title"],[1,"overview__teams-list"],[1,"overview__teams-add"],[1,"overview__teams-item"],[1,"overview__teams-item-title"],[1,"overview__teams-item-description"]],template:function(a,v){if(a&1&&(f(0,Ze,2,2),d(1,"withLoading"),d(2,"async")),a&2){let _;m(0,(_=l(2,3,l(1,1,v.teams$)))?0:-1,_)}},dependencies:[A,b,C,S,P],styles:[".overview__teams[_ngcontent-%COMP%]{padding:22px;border:1px solid #e6eaee;background:#fff;border-radius:6px}.overview__teams-title[_ngcontent-%COMP%]{color:#242424;font-size:16px;font-weight:600}.overview__teams-list[_ngcontent-%COMP%]{margin-top:20px;display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));grid-template-rows:none}.overview__teams-add[_ngcontent-%COMP%]{min-height:90px;padding:22px;display:flex;align-items:center;gap:8px;justify-content:center;border:1px dashed #afafaf;border-radius:6px;cursor:pointer;color:#424242;font-weight:500}.overview__teams-add[_ngcontent-%COMP%]:hover{background:#ebebeb}.overview__teams-item[_ngcontent-%COMP%]{padding:14px;background:#fff;border:1px solid #e6eaee;border-radius:6px;cursor:pointer}.overview__teams-item-title[_ngcontent-%COMP%]{color:#242424;font-size:16px;font-weight:600}.overview__teams-item-description[_ngcontent-%COMP%]{margin-top:2px!important;font-size:14px;color:#525766;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.overview-section__teams-loading[_ngcontent-%COMP%]{grid-column:span 3/span 3}"],changeDetection:0});let e=t;return e})();var fe=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=h({type:t,selectors:[["app-overview-home"]],decls:11,vars:0,consts:[["value","Overview"],[1,"page","overview-wrapper"],[1,"overview-sections"],[1,"overview-left"],[1,"overview-right"]],template:function(a,v){a&1&&(c(0,"app-page-header",0),n(1,"section",1)(2,"div",2)(3,"div",3),c(4,"app-overview-tasks-section")(5,"app-overview-performance-section")(6,"app-overview-teams-list")(7,"app-overview-projects-list"),o(),n(8,"div",4),c(9,"app-overview-sidebar-calendar")(10,"app-overview-sidebar-events"),o()()())},dependencies:[Z,ve,se,le,de,me,pe],styles:["[_nghost-%COMP%]     .overview-sections{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}@media screen and (max-width: 48em){[_nghost-%COMP%]     .overview-sections{gap:16px;margin-top:16px}}[_nghost-%COMP%]     .overview-left{display:flex;flex-direction:column;gap:20px;grid-column:span 3/span 3}@media screen and (max-width: 64em){[_nghost-%COMP%]     .overview-left{grid-column:span 4/span 4}}[_nghost-%COMP%]     .overview-section{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:20px}@media screen and (max-width: 48em){[_nghost-%COMP%]     .overview-section{gap:16px}}[_nghost-%COMP%]     .overview-section-graph{grid-column:span 3/span 3;padding:24px;border:1px solid #e6eaee;border-radius:8px;background:#fff}@media screen and (max-width: 48em){[_nghost-%COMP%]     .overview-section-graph{grid-column:span 5/span 5}}[_nghost-%COMP%]     .overview-section-graph-title{font-size:16px;font-weight:500}[_nghost-%COMP%]     .overview-section-graph-toolbar{display:flex;justify-content:space-between;gap:12px;margin-bottom:24px}[_nghost-%COMP%]     .overview-section-graph-select{padding:6px;border:1px solid #e6eaee;border-radius:6px}[_nghost-%COMP%]     .overview-section-statistics{grid-column:span 2/span 2;padding:20px;border:1px solid #e6eaee;border-radius:8px;background:#fff}@media screen and (max-width: 48em){[_nghost-%COMP%]     .overview-section-statistics{grid-column:span 5/span 5}}[_nghost-%COMP%]     .overview-section-statistics.performance{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:32px}[_nghost-%COMP%]     .overview-performance-wrapper{position:relative}[_nghost-%COMP%]     .overview-performance-label{font-size:16px;font-weight:600}[_nghost-%COMP%]     .overview-performance-value{width:100%;position:absolute;text-align:center;top:42%;font-size:20px;font-weight:600}[_nghost-%COMP%]     .overview-right{display:flex;flex-direction:column;gap:20px;grid-column:span 1/span 1}@media screen and (max-width: 48em){[_nghost-%COMP%]     .overview-right{gap:16px}}@media screen and (max-width: 64em){[_nghost-%COMP%]     .overview-right{grid-column:span 4/span 4}}[_nghost-%COMP%]     .overview-sidebar{padding:18px;border:1px solid #e6eaee;border-radius:8px;background:#fff}[_nghost-%COMP%]     .overview-sidebar-title{font-size:16px;font-weight:600}[_nghost-%COMP%]     .overview-sidebar-list{margin-top:16px;display:flex;flex-direction:column;gap:12px}[_nghost-%COMP%]     .overview-sidebar-list-divider{width:100%;height:1px;background:#ecf3f0}[_nghost-%COMP%]     .overview-events-item{display:flex;align-items:center;gap:12px;justify-content:space-between}[_nghost-%COMP%]     .overview-events-item-description{font-size:12px;color:#a1a4aa}[_nghost-%COMP%]     .overview-events-item-time{color:#a1a4aa}"],changeDetection:0});let e=t;return e})();var tt=[{path:"",component:fe,title:"Overview | Kaiteki"}],ge=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=I({type:t}),t.\u0275inj=j({imports:[H.forChild(tt),H]});let e=t;return e})();var Lt=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=I({type:t}),t.\u0275inj=j({imports:[X,ie,ge]});let e=t;return e})();export{Lt as OverviewModule};