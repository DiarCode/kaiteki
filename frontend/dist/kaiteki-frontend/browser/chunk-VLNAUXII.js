import{a as ne}from"./chunk-DKTZB5LW.js";import{a as ie}from"./chunk-CSQ2JU2G.js";import{c as A}from"./chunk-LZVTTR4F.js";import"./chunk-SSMAG4H5.js";import{D as $,Ha as X,Ma as Z,Za as ee,b as V,da as z,ea as F,ob as u,qb as te,u as U,x as I}from"./chunk-XOZLSJZG.js";import"./chunk-4N6BO7AP.js";import{B as Y,Eb as m,Fb as J,Hb as M,Ib as T,Jb as i,Kb as n,Lb as g,Ub as w,X as K,bc as a,cc as P,dc as C,ea as q,eb as s,fa as L,fb as h,fc as j,id as x,ja as G,jd as S,nd as Q,pa as _,qa as B,s as O,uc as d,vc as c,wb as v,wc as b,yb as E}from"./chunk-IF3PND7Q.js";import"./chunk-REV7FFDQ.js";import{a as H,b as R}from"./chunk-MON7YFGF.js";var N=(()=>{let e=class e{constructor(p){this.httpClient=p,this.baseUrl="/api/v1/users/analytics"}getStatistics(){return this.httpClient.get(`${this.baseUrl}/statistics`)}getPerformanceByPeriod(){return this.httpClient.get(`${this.baseUrl}/performance-by-period`)}getTasksCountByTeams(){return this.httpClient.get(`${this.baseUrl}/tasks-by-teams`)}};e.\u0275fac=function(r){return new(r||e)(G(V))},e.\u0275prov=q({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function _e(t,e){if(t&1&&(i(0,"div",1)(1,"div",3),g(2,"mat-progress-spinner",4),i(3,"p",5),a(4),n()(),i(5,"p",6),a(6,"Overall Performance"),n()()),t&2){let o=w();s(2),E("value",o.data.performance),s(2),C("",o.data.performance,"%")}}function ge(t,e){t&1&&(i(0,"div",2),a(1,"Loading"),n())}function we(t,e){if(t&1&&v(0,_e,7,2,"div",1)(1,ge,2,0,"div",2),t&2){let o=e;m(0,o.data?0:-1),s(),m(1,o.loading?1:-1)}}function xe(t,e){if(t&1&&(i(0,"div",7)(1,"div",9)(2,"p",10),a(3,"Performance(%) by period"),n(),i(4,"select",11)(5,"option",12),a(6,"Day"),n(),i(7,"option",13),a(8,"Week"),n(),i(9,"option",14),a(10,"Month"),n(),i(11,"option",15),a(12,"Year"),n()()(),i(13,"div"),g(14,"canvas",16),n()()),t&2){let o=w(),p=w();s(14),E("data",o.data)("options",p.performanceChartOptions)}}function he(t,e){t&1&&(i(0,"div",8),a(1,"Loading"),n())}function Ce(t,e){if(t&1&&v(0,xe,15,2,"div",7)(1,he,2,0,"div",8),t&2){let o=e;m(0,o.data?0:-1),s(),m(1,o.loading||o.error?1:-1)}}var ae=(()=>{let e=class e{constructor(p,r){this.performanceService=p,this.usersAnalyticsService=r,this.userPerformance$=this.performanceService.getLatestUserPerformance().pipe(O(l=>R(H({},l),{performance:l.performance*100}))),this.performanceChartData$=this.usersAnalyticsService.getPerformanceByPeriod().pipe(O(l=>({labels:l.labels,datasets:[{data:l.data,label:"Performance by period",borderColor:"rgba(6, 142, 68, 0.8)",backgroundColor:"rgba(6, 142, 68, 0.4)",fill:!0,tension:.5}]}))),this.performanceChartOptions={responsive:!0,maintainAspectRatio:!1,font:{family:"Poppins, sans-serif",size:14}}}};e.\u0275fac=function(r){return new(r||e)(h(ie),h(N))},e.\u0275cmp=_({type:e,selectors:[["app-overview-performance-section"]],decls:7,vars:10,consts:[[1,"overview-section"],[1,"overview-section-statistics","performance"],[1,"overview-performance-stats-loading"],[1,"overview-performance-wrapper"],["diameter","150",3,"value"],[1,"overview-performance-value"],[1,"overview-performance-label"],[1,"overview-section-graph"],[1,"overview-performance-graph-loading"],[1,"overview-section-graph-toolbar"],[1,"overview-section-graph-title"],[1,"overview-section-graph-select"],["value","day"],["value","week"],["value","month"],["value","year"],["baseChart","","height","250","type","line",3,"data","options"]],template:function(r,l){if(r&1&&(i(0,"div",0),v(1,we,2,2),d(2,"withLoading"),d(3,"async"),v(4,Ce,2,2),d(5,"withLoading"),d(6,"async"),n()),r&2){let f,k;s(),m(1,(f=c(3,4,c(2,2,l.userPerformance$)))?1:-1,f),s(3),m(4,(k=c(6,8,c(5,6,l.performanceChartData$)))?4:-1,k)}},dependencies:[ee,z,F,I,x,u],changeDetection:0});let t=e;return t})();var be=(t,e)=>e.id;function Se(t,e){if(t&1&&(i(0,"div",4)(1,"p",5),a(2),n(),i(3,"p",6),a(4),d(5,"date"),n()()),t&2){let o=e.$implicit;s(2),P(o.name),s(2),j(" Created at ",b(5,5,o.createdDate,"MMM d, y")," by ",o.owner.firstname," ",o.owner.lastname,". ",o.description,". ")}}function Oe(t,e){if(t&1&&M(0,Se,6,8,"div",4,be),t&2){let o=w();T(o.data)}}function Pe(t,e){t&1&&(i(0,"div"),a(1,"Loading"),n())}function Me(t,e){if(t&1&&v(0,Oe,2,0)(1,Pe,2,0,"div"),t&2){let o=e;m(0,o.data?0:-1),s(),m(1,o.loading?1:-1)}}var re=(()=>{let e=class e{constructor(p){this.teamsService=p,this.teams$=this.teamsService.teams$}};e.\u0275fac=function(r){return new(r||e)(h(A))},e.\u0275cmp=_({type:e,selectors:[["app-overview-projects-list"]],decls:8,vars:5,consts:[[1,"overview__teams"],[1,"overview__teams-header"],[1,"overview__teams-title"],[1,"overview__teams-list"],[1,"overview__teams-item"],[1,"overview__teams-item-title"],[1,"overview__teams-item-description"]],template:function(r,l){if(r&1&&(i(0,"div",0)(1,"div",1)(2,"h5",2),a(3,"My projects"),n()(),i(4,"div",3),v(5,Me,2,2),d(6,"withLoading"),d(7,"async"),n()()),r&2){let f;s(5),m(5,(f=c(7,3,c(6,1,l.teams$)))?5:-1,f)}},dependencies:[x,S,u],styles:[".overview__teams[_ngcontent-%COMP%]{padding:22px;border:1px solid #e6eeea;background:#fff;border-radius:6px}.overview__teams-title[_ngcontent-%COMP%]{color:#242424;font-size:16px;font-weight:600}.overview__teams-list[_ngcontent-%COMP%]{margin-top:20px;display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));grid-template-rows:none}.overview__teams-add[_ngcontent-%COMP%]{min-height:90px;padding:22px;display:flex;align-items:center;gap:8px;justify-content:center;border:1px dashed #afafaf;border-radius:6px;cursor:pointer;color:#424242;font-weight:500}.overview__teams-add[_ngcontent-%COMP%]:hover{background:#ebebeb}.overview__teams-item[_ngcontent-%COMP%]{padding:14px;background:#fff;border:1px solid #e9e9e9;border-radius:6px;cursor:pointer}.overview__teams-item-title[_ngcontent-%COMP%]{color:#242424;font-size:16px;font-weight:600}.overview__teams-item-description[_ngcontent-%COMP%]{margin-top:2px!important;font-size:14px;color:#525766;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}"],changeDetection:0});let t=e;return t})();var se=(()=>{let e=class e{constructor(){this.timeSource=Y(6e4),this.formattedTime=this.timeSource.pipe(K(new Date),O(()=>new Date))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-overview-sidebar-calendar"]],decls:9,vars:6,consts:[[1,"overview-sidebar"],[1,"overview-sidebar-title"],[1,"overview-sidebar-list"],[1,"overview-calendar-current"]],template:function(r,l){r&1&&(i(0,"div",0)(1,"p",1),a(2,"Datetime calendar"),n(),i(3,"div",2),g(4,"mat-calendar"),n(),i(5,"p",3),a(6),d(7,"async"),d(8,"date"),n()()),r&2&&(s(6),C(" ",b(8,3,c(7,1,l.formattedTime),"EEEE, MMMM, d, h:mm a")," "))},dependencies:[Z,x,S],styles:["[_nghost-%COMP%]     .mat-calendar-header{padding:0}[_nghost-%COMP%]     .mat-calendar{margin-top:-20px}.overview-calendar-current[_ngcontent-%COMP%]{text-align:center;font-size:16px;margin:22px 0!important;color:#494d55}"],changeDetection:0});let t=e;return t})();function Ee(t,e){t&1&&g(0,"span",9)}function De(t,e){if(t&1&&(i(0,"div",4)(1,"div",5)(2,"p",6),a(3),n(),i(4,"p",7),a(5),n()(),i(6,"p",8),a(7),d(8,"date"),n()(),v(9,Ee,1,0,"span",9)),t&2){let o=e.$implicit,p=e.$index,r=e.$count;s(3),P(o.title),s(2),P(o.type),s(2),C(" ",b(8,4,o.start,"MMM d, h:mm a")," "),s(2),m(9,p!==r-1?9:-1)}}function Le(t,e){if(t&1&&M(0,De,10,7,null,null,J),t&2){let o=w();T(o.data)}}function Be(t,e){t&1&&(i(0,"div",3),a(1,"Loading..."),n())}function je(t,e){if(t&1&&v(0,Le,2,0)(1,Be,2,0,"div",3),t&2){let o=e;m(0,o.data?0:-1),s(),m(1,o.loading?1:-1)}}var pe=(()=>{let e=class e{constructor(p){this.eventsService=p,this.events$=this.eventsService.getEvents()}};e.\u0275fac=function(r){return new(r||e)(h(ne))},e.\u0275cmp=_({type:e,selectors:[["app-overview-sidebar-events"]],decls:7,vars:5,consts:[[1,"overview-sidebar"],[1,"overview-sidebar-title"],[1,"overview-sidebar-list"],[1,"overview-sidebar-loading"],[1,"overview-events-item"],[1,"overview-events-item-header"],[1,"overview-events-item-title"],[1,"overview-events-item-description"],[1,"overview-events-item-time"],[1,"overview-sidebar-list-divider"]],template:function(r,l){if(r&1&&(i(0,"div",0)(1,"p",1),a(2,"Upcoming events"),n(),i(3,"div",2),v(4,je,2,2),d(5,"withLoading"),d(6,"async"),n()()),r&2){let f;s(4),m(4,(f=c(6,3,c(5,1,l.events$)))?4:-1,f)}},dependencies:[x,S,u],changeDetection:0});let t=e;return t})();function Ae(t,e){if(t&1&&(i(0,"div",1)(1,"div",2)(2,"div",3)(3,"mat-icon"),a(4,"apps"),n()(),i(5,"div",4)(6,"p",5),a(7,"Total"),n(),i(8,"p",6),a(9),n()()(),i(10,"div",2)(11,"div",3)(12,"mat-icon"),a(13,"task_alt"),n()(),i(14,"div",4)(15,"p",5),a(16,"Completed"),n(),i(17,"p",6),a(18),n()()(),i(19,"div",2)(20,"div",3)(21,"mat-icon"),a(22,"downloading"),n()(),i(23,"div",4)(24,"p",5),a(25,"In progress"),n(),i(26,"p",6),a(27),n()()(),i(28,"div",2)(29,"div",3)(30,"mat-icon"),a(31,"apps"),n()(),i(32,"div",4)(33,"p",5),a(34,"On Hold"),n(),i(35,"p",6),a(36),n()()()()),t&2){let o=e;s(9),C("",o.totalTasksCount," Tasks"),s(9),C("",o.completedTasksCount," Tasks"),s(9),C("",o.inProgressTasksCount," Tasks"),s(9),C("",o.openTasksCount," Tasks")}}function ze(t,e){if(t&1&&v(0,Ae,37,4,"div",1),t&2){let o;m(0,(o=e.data)?0:-1,o)}}function Fe(t,e){if(t&1&&(i(0,"div",7)(1,"div",9)(2,"p",10),a(3,"Tasks by teams"),n(),i(4,"select",11)(5,"option",12),a(6,"Day"),n(),i(7,"option",13),a(8,"Week"),n(),i(9,"option",14),a(10,"Month"),n(),i(11,"option",15),a(12,"Year"),n()()(),i(13,"div"),g(14,"canvas",16),n()()),t&2){let o=w(),p=w();s(14),E("data",o.data)("options",p.barChartOptions)}}function Ne(t,e){t&1&&(i(0,"div",8),a(1,"Loading"),n())}function We(t,e){if(t&1&&v(0,Fe,15,2,"div",7)(1,Ne,2,0,"div",8),t&2){let o=e;m(0,o.data?0:-1),s(),m(1,o.loading||o.error?1:-1)}}var me=(()=>{let e=class e{constructor(p){this.usersAnalyticsService=p,this.tasksAnalytics$=this.usersAnalyticsService.getStatistics(),this.completedTasksByTeams$=this.usersAnalyticsService.getTasksCountByTeams().pipe(O(r=>({labels:r.labels,datasets:[{data:r.data,label:"Active tasks by teams",borderRadius:8,backgroundColor:"rgba(6, 142, 68, 0.8)"}]}))),this.barChartOptions={responsive:!0,maintainAspectRatio:!1,font:{family:"Poppins, sans-serif",size:14}}}};e.\u0275fac=function(r){return new(r||e)(h(N))},e.\u0275cmp=_({type:e,selectors:[["app-overview-tasks-section"]],decls:7,vars:10,consts:[[1,"overview-section"],[1,"overview__tasks"],[1,"overview__tasks-item"],[1,"overview__tasks-item-icon"],[1,"overview__tasks-item-body"],[1,"overview__tasks-item-title"],[1,"overview__tasks-item-number"],[1,"overview-section-graph"],[1,"overview-performance-graph-loading"],[1,"overview-section-graph-toolbar"],[1,"overview-section-graph-title"],[1,"overview-section-graph-select"],["value","day"],["value","week"],["value","month"],["value","year"],["baseChart","","height","250",3,"data","options"]],template:function(r,l){if(r&1&&(i(0,"div",0),v(1,ze,1,1),d(2,"withLoading"),d(3,"async"),v(4,We,2,2),d(5,"withLoading"),d(6,"async"),n()),r&2){let f,k;s(),m(1,(f=c(3,4,c(2,2,l.tasksAnalytics$)))?1:-1,f),s(3),m(4,(k=c(6,8,c(5,6,l.completedTasksByTeams$)))?4:-1,k)}},dependencies:[$,z,F,I,x,u],styles:[".overview__tasks[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);gap:12px;grid-column:span 2/span 2}@media screen and (max-width: 48em){.overview__tasks[_ngcontent-%COMP%]{grid-column:span 5/span 5}}.overview__tasks-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:8px;background:#fff;padding:12px;color:#242424;border:1px solid #e6eeea}.overview__tasks-item-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.overview__tasks-item-title[_ngcontent-%COMP%]{font-weight:600}.overview__tasks-item-body[_ngcontent-%COMP%]{text-align:center;margin-top:12px}.overview__tasks-item-number[_ngcontent-%COMP%]{margin-top:4px;font-size:12px;color:#707070}"],changeDetection:0});let t=e;return t})();var He=(t,e)=>e.id;function Re(t,e){if(t&1&&(i(0,"div",5)(1,"p",6),a(2),n(),i(3,"p",7),a(4),d(5,"date"),n()()),t&2){let o=e.$implicit;s(2),P(o.name),s(2),j(" Created at ",b(5,5,o.createdDate,"MMM d, y")," by ",o.owner.firstname," ",o.owner.lastname,". ",o.description,". ")}}function Ye(t,e){if(t&1&&M(0,Re,6,8,"div",5,He),t&2){let o=w();T(o.data)}}function Ke(t,e){t&1&&(i(0,"div"),a(1,"Loading"),n())}function qe(t,e){if(t&1&&v(0,Ye,2,0)(1,Ke,2,0,"div"),t&2){let o=e;m(0,o.data?0:-1),s(),m(1,o.loading?1:-1)}}var de=(()=>{let e=class e{constructor(p){this.teamsService=p,this.teams$=this.teamsService.teams$}};e.\u0275fac=function(r){return new(r||e)(h(A))},e.\u0275cmp=_({type:e,selectors:[["app-overview-teams-list"]],decls:13,vars:5,consts:[[1,"overview__teams"],[1,"overview__teams-header"],[1,"overview__teams-title"],[1,"overview__teams-list"],[1,"overview__teams-add"],[1,"overview__teams-item"],[1,"overview__teams-item-title"],[1,"overview__teams-item-description"]],template:function(r,l){if(r&1&&(i(0,"div",0)(1,"div",1)(2,"h5",2),a(3,"My teams"),n()(),i(4,"div",3)(5,"div",4)(6,"mat-icon"),a(7,"add"),n(),i(8,"p"),a(9,"Create team"),n()(),v(10,qe,2,2),d(11,"withLoading"),d(12,"async"),n()()),r&2){let f;s(10),m(10,(f=c(12,3,c(11,1,l.teams$)))?10:-1,f)}},dependencies:[$,x,S,u],styles:[".overview__teams[_ngcontent-%COMP%]{padding:22px;border:1px solid #e6eeea;background:#fff;border-radius:6px}.overview__teams-title[_ngcontent-%COMP%]{color:#242424;font-size:16px;font-weight:600}.overview__teams-list[_ngcontent-%COMP%]{margin-top:20px;display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));grid-template-rows:none}.overview__teams-add[_ngcontent-%COMP%]{min-height:90px;padding:22px;display:flex;align-items:center;gap:8px;justify-content:center;border:1px dashed #afafaf;border-radius:6px;cursor:pointer;color:#424242;font-weight:500}.overview__teams-add[_ngcontent-%COMP%]:hover{background:#ebebeb}.overview__teams-item[_ngcontent-%COMP%]{padding:14px;background:#fff;border:1px solid #e6eeea;border-radius:6px;cursor:pointer}.overview__teams-item-title[_ngcontent-%COMP%]{color:#242424;font-size:16px;font-weight:600}.overview__teams-item-description[_ngcontent-%COMP%]{margin-top:2px!important;font-size:14px;color:#525766;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}"],changeDetection:0});let t=e;return t})();var ce=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-overview-home"]],decls:11,vars:0,consts:[["value","Overview"],[1,"page","overview-wrapper"],[1,"overview-sections"],[1,"overview-left"],[1,"overview-right"]],template:function(r,l){r&1&&(g(0,"app-page-header",0),i(1,"section",1)(2,"div",2)(3,"div",3),g(4,"app-overview-tasks-section")(5,"app-overview-performance-section")(6,"app-overview-teams-list")(7,"app-overview-projects-list"),n(),i(8,"div",4),g(9,"app-overview-sidebar-calendar")(10,"app-overview-sidebar-events"),n()()())},dependencies:[X,de,ae,me,pe,se,re],styles:["[_nghost-%COMP%]     .overview-sections{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}@media screen and (max-width: 48em){[_nghost-%COMP%]     .overview-sections{gap:16px;margin-top:16px}}[_nghost-%COMP%]     .overview-left{display:flex;flex-direction:column;gap:20px;grid-column:span 3/span 3}@media screen and (max-width: 64em){[_nghost-%COMP%]     .overview-left{grid-column:span 4/span 4}}[_nghost-%COMP%]     .overview-section{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:20px}@media screen and (max-width: 48em){[_nghost-%COMP%]     .overview-section{gap:16px}}[_nghost-%COMP%]     .overview-section-graph{grid-column:span 3/span 3;padding:24px;border:1px solid #e6eeea;border-radius:8px;background:#fff}@media screen and (max-width: 48em){[_nghost-%COMP%]     .overview-section-graph{grid-column:span 5/span 5}}[_nghost-%COMP%]     .overview-section-graph-title{font-size:16px;font-weight:500}[_nghost-%COMP%]     .overview-section-graph-toolbar{display:flex;justify-content:space-between;gap:12px;margin-bottom:24px}[_nghost-%COMP%]     .overview-section-graph-select{padding:6px;border:1px solid #e6eeea;border-radius:6px}[_nghost-%COMP%]     .overview-section-statistics{grid-column:span 2/span 2;padding:20px;border:1px solid #e6eeea;border-radius:8px;background:#fff}@media screen and (max-width: 48em){[_nghost-%COMP%]     .overview-section-statistics{grid-column:span 5/span 5}}[_nghost-%COMP%]     .overview-section-statistics.performance{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:32px}[_nghost-%COMP%]     .overview-performance-wrapper{position:relative}[_nghost-%COMP%]     .overview-performance-label{font-size:16px;font-weight:500}[_nghost-%COMP%]     .overview-performance-value{width:100%;position:absolute;text-align:center;top:42%;font-size:20px;font-weight:600}[_nghost-%COMP%]     .overview-right{display:flex;flex-direction:column;gap:20px;grid-column:span 1/span 1}@media screen and (max-width: 48em){[_nghost-%COMP%]     .overview-right{gap:16px}}@media screen and (max-width: 64em){[_nghost-%COMP%]     .overview-right{grid-column:span 4/span 4}}[_nghost-%COMP%]     .overview-sidebar{padding:18px;border:1px solid #e6eeea;border-radius:8px;background:#fff}[_nghost-%COMP%]     .overview-sidebar-title{font-size:16px;font-weight:600}[_nghost-%COMP%]     .overview-sidebar-list{margin-top:16px;display:flex;flex-direction:column;gap:12px}[_nghost-%COMP%]     .overview-sidebar-list-divider{width:100%;height:1px;background:#ecf3f0}[_nghost-%COMP%]     .overview-events-item{display:flex;align-items:center;gap:12px;justify-content:space-between}[_nghost-%COMP%]     .overview-events-item-description{font-size:12px;color:#a1a4aa}[_nghost-%COMP%]     .overview-events-item-time{color:#a1a4aa}"],changeDetection:0});let t=e;return t})();var Je=[{path:"",component:ce,title:"Overview | Kaiteki"}],le=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=L({imports:[U.forChild(Je),U]});let t=e;return t})();var Mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=L({imports:[Q,te,le]});let t=e;return t})();export{Mt as OverviewModule};
