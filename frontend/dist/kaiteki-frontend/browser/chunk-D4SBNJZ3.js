import{a as Ae}from"./chunk-CSQ2JU2G.js";import{a as $e}from"./chunk-UYMINATM.js";import{c as w}from"./chunk-LZVTTR4F.js";import{a as I}from"./chunk-SSMAG4H5.js";import{$a as ye,Aa as Te,B as y,Ba as Ce,Ca as Me,D as de,Da as ve,La as be,R as K,T as $,U as O,V as Y,W as L,X as A,Y as pe,Z as j,_ as _e,_a as xe,aa as W,ab as Ie,ba as z,bb as Pe,cb as Ee,db as we,eb as Oe,fa as ge,fb as De,ga as fe,gb as Re,hb as Ve,o as me,qb as Ne,u as B,wa as ue,ya as he,za as Se}from"./chunk-XOZLSJZG.js";import"./chunk-4N6BO7AP.js";import{Aa as x,Ab as ne,Eb as D,F as v,Jb as a,K as S,Ka as ie,Kb as r,Lb as g,Mb as R,Mc as se,Nb as V,Pb as E,Sb as p,Ub as u,aa as te,bc as s,cc as oe,dc as N,eb as l,fa as k,fb as d,gc as F,hc as G,ic as H,jd as ce,nd as le,o as M,pa as _,qa as U,s as ee,uc as re,wb as T,wc as ae,yb as m,za as b}from"./chunk-IF3PND7Q.js";import"./chunk-REV7FFDQ.js";import{f as Be}from"./chunk-MON7YFGF.js";var ke="This indicates the relative importance of that particular metric in calculating the overall performance score.",Ue="This refers to the specific score or achievement on a particular metric being assessed.";function qe(n,i){n&1&&(a(0,"th",14),s(1," Select "),r())}function Je(n,i){if(n&1){let c=E();a(0,"td",15)(1,"mat-checkbox",16),H("ngModelChange",function(t){let o=b(c).$implicit;return G(o.enabled,t)||(o.enabled=t),x(t)}),p("change",function(){b(c);let t=u();return x(t.triggerMetricsChange())}),r()()}if(n&2){let c=i.$implicit;l(),F("ngModel",c.enabled)}}function Qe(n,i){n&1&&(a(0,"th",14),s(1," Metrics "),r())}function Xe(n,i){if(n&1&&(a(0,"td",15)(1,"div",17)(2,"p"),s(3),r(),a(4,"mat-icon",18),s(5,"info_outline"),r()()()),n&2){let c=i.$implicit;l(3),oe(c.name),l(),m("matTooltip",c.description)}}function Ze(n,i){if(n&1&&(a(0,"th",14)(1,"div",19)(2,"p"),s(3,"Normal value"),r(),a(4,"mat-icon",18),s(5,"info_outline"),r()()()),n&2){let c=u();l(4),m("matTooltip",c.normalValueDescription)}}function et(n,i){if(n&1){let c=E();a(0,"td",15)(1,"input",20),H("ngModelChange",function(t){let o=b(c).$implicit;return G(o.normalValue,t)||(o.normalValue=t),x(t)}),p("change",function(){b(c);let t=u();return x(t.triggerMetricsChange())}),r()()}if(n&2){let c=i.$implicit;l(),F("ngModel",c.normalValue)}}function tt(n,i){if(n&1&&(a(0,"th",14)(1,"div",19)(2,"p"),s(3,"Weight (%)"),r(),a(4,"mat-icon",18),s(5,"info_outline"),r()()()),n&2){let c=u();l(4),m("matTooltip",c.weightDescription)}}function it(n,i){if(n&1){let c=E();a(0,"td",15)(1,"input",21),H("ngModelChange",function(t){let o=b(c).$implicit;return G(o.weight,t)||(o.weight=t),x(t)}),p("ngModelChange",function(t){let o=b(c).$implicit,h=u();return x(h.updateValue(o,t))}),r()()}if(n&2){let c=i.$implicit;l(),F("ngModel",c.weight)}}function nt(n,i){n&1&&g(0,"tr",22)}function ot(n,i){n&1&&g(0,"tr",23)}function rt(n,i){if(n&1&&(a(0,"div"),s(1),r()),n&2){let c=u();l(),N("Total value of enabled metrics must be ",c.satisfiedTotalValue,"%")}}var Ge=(()=>{let i=class i{constructor(){this.satisfiedTotalValue=100,this.metricsChange=new ie,this._metrics=[],this.displayedColumns=["enabled","metrics","normal","percentage"],this.weightDescription=ke,this.normalValueDescription=Ue}set metrics(e){this._metrics=Object.entries(e).map(([,t])=>t)}get metrics(){return this._metrics}get totalValue(){return Object.entries(this.metrics).reduce((e,[,t])=>e+(t.enabled?t.weight:0),0)}triggerMetricsChange(){this.metricsChange.emit({totalValue:this.totalValue,metricsItems:this.metrics})}updateValue(e,t){e.enabled=t>0,e.weight=t,this.triggerMetricsChange()}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=_({type:i,selectors:[["app-performance-metrics"]],inputs:{metrics:"metrics",satisfiedTotalValue:"satisfiedTotalValue"},outputs:{metricsChange:"metricsChange"},decls:24,vars:7,consts:[[1,"settings__performance-table"],["mat-table","",3,"dataSource"],["matColumnDef","enabled"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","metrics"],["matColumnDef","normal"],["matColumnDef","percentage"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"settings__performance-footer"],[1,"settings__performance-footer-title"],[1,"settings__performance-footer-value"],[1,"settings__performance-error"],["mat-header-cell",""],["mat-cell",""],["color","primary",3,"ngModelChange","change","ngModel"],[1,"settings__performance-table-metrica"],[3,"matTooltip"],[1,"settings__performance-table-head-description"],["type","number","min","0","step","5",1,"settings__performance-table-normal",3,"ngModelChange","change","ngModel"],["type","number","min","0","max","100","step","5",1,"settings__performance-table-percentage",3,"ngModelChange","ngModel"],["mat-header-row",""],["mat-row",""]],template:function(t,o){t&1&&(a(0,"div",0)(1,"table",1),g(2,"caption"),R(3,2),T(4,qe,2,0,"th",3)(5,Je,2,1,"td",4),V(),R(6,5),T(7,Qe,2,0,"th",3)(8,Xe,6,2,"td",4),V(),R(9,6),T(10,Ze,6,1,"th",3)(11,et,2,1,"td",4),V(),R(12,7),T(13,tt,6,1,"th",3)(14,it,2,1,"td",4),V(),T(15,nt,1,0,"tr",8)(16,ot,1,0,"tr",9),r(),a(17,"div",10)(18,"p",11),s(19,"Total:"),r(),a(20,"p",12),s(21),r()(),a(22,"div",13),T(23,rt,2,1,"div"),r()()),t&2&&(l(),m("dataSource",o.metrics),l(14),m("matHeaderRowDef",o.displayedColumns),l(),m("matRowDefColumns",o.displayedColumns),l(4),ne("lower",o.totalValue!==o.satisfiedTotalValue),l(),N(" ",o.totalValue,"% "),l(2),D(23,o.totalValue!==o.satisfiedTotalValue?23:-1))},dependencies:[de,be,xe,Ie,Oe,Pe,ye,De,Ee,we,Re,Ve,ue,K,_e,O,fe,ge,pe],styles:["[_nghost-%COMP%]     .mat-mdc-table{background:none}[_nghost-%COMP%]     .mat-mdc-row .mat-mdc-cell{border-top:1px solid #f0f0f0;cursor:pointer}[_nghost-%COMP%]     .mat-mdc-header-cell{font-size:14px;color:#afafaf}[_nghost-%COMP%]     .mdc-data-table__cell, [_nghost-%COMP%]     .mdc-data-table__header-cell{border-bottom:none}[_nghost-%COMP%]     .mat-mdc-table tbody, [_nghost-%COMP%]     .mat-mdc-table tfoot, [_nghost-%COMP%]     .mat-mdc-table thead, [_nghost-%COMP%]     .mat-mdc-cell, [_nghost-%COMP%]     .mat-mdc-footer-cell, [_nghost-%COMP%]     .mat-mdc-header-row, [_nghost-%COMP%]     .mat-mdc-row, [_nghost-%COMP%]     .mat-mdc-footer-row, [_nghost-%COMP%]     .mat-mdc-table .mat-mdc-header-cell{background:none}.settings__performance-table[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;background:#fff!important;padding:0 12px 12px;display:block;overflow-x:auto;border:1px solid #e0e0e0;border-radius:6px}.settings__performance-table-metrica[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;gap:10px}.settings__performance-table-metrica[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:16px;height:16px;font-size:16px;color:#979797}.settings__performance-table-head-description[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px}.settings__performance-table-head-description[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:16px;height:16px;font-size:16px;color:#979797}.settings__performance-table-normal[_ngcontent-%COMP%], .settings__performance-table-percentage[_ngcontent-%COMP%]{text-align:center}.settings__performance-footer[_ngcontent-%COMP%]{border-radius:4px;display:flex;align-items:center;justify-content:center;gap:8px;padding:4px 12px;margin-top:14px}.settings__performance-footer-value[_ngcontent-%COMP%]{color:green}.settings__performance-footer-value.lower[_ngcontent-%COMP%]{color:red}.settings__performance-error[_ngcontent-%COMP%]{color:red;display:flex;justify-content:center}table[_ngcontent-%COMP%]{width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:0 12px}th[_ngcontent-%COMP%]:nth-child(1), th[_ngcontent-%COMP%]:nth-child(3), th[_ngcontent-%COMP%]:nth-child(4), td[_ngcontent-%COMP%]:nth-child(1), td[_ngcontent-%COMP%]:nth-child(3), td[_ngcontent-%COMP%]:nth-child(4){text-align:center}th[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"],changeDetection:0});let n=i;return n})();var Ke=(()=>{let i=class i{constructor(e,t,o){this.teamsService=e,this.toastService=t,this.router=o}onTeamDelete(){confirm("Do you really want to delete this team?")&&this.teamsService.deleteTeam().pipe(v(e=>(this.toastService.error("Failed to delete team"),M(()=>e))),S(1)).subscribe(()=>{this.teamsService.setCurrentTeam(null),this.teamsService.refetchTeams(),this.toastService.open("Successfully deleted a team"),this.router.navigate(["/hub/overview"])})}};i.\u0275fac=function(t){return new(t||i)(d(w),d(I),d(me))},i.\u0275cmp=_({type:i,selectors:[["app-settings-danger-section"]],decls:9,vars:0,consts:[[1,"settings__section","settings__danger"],[1,"settings__section-left"],[1,"settings__section-title","danger"],[1,"settings__section-subtitle"],[1,"settings__section-right"],["mat-stroked-button","",3,"click"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),s(3,"Delete this team"),r(),a(4,"div",3),s(5," Once you delete a team, there is no going back. Please be certain. "),r()(),a(6,"div",4)(7,"button",5),p("click",function(){return o.onTeamDelete()}),s(8," Delete "),r()()())},dependencies:[y],changeDetection:0});let n=i;return n})();var Ye=(()=>{let i=class i{constructor(e,t){this.toastService=e,this.teamsService=t,this.form=new L({files:new A([],[Se.filesLimit(1)])}),this.selectedFile=null,this.previewUrl=null}ngOnInit(){this.form.get("files")?.valueChanges.subscribe(e=>{e&&e.length>0?(this.selectedFile=e[0],this.selectedFile&&this.onPreviewLogoChange(this.selectedFile)):(this.selectedFile=null,this.previewUrl=null)})}onSubmit(){let{files:e}=this.form.getRawValue(),t=e?.[0]??void 0;if(!t){this.toastService.error("Missing required fields");return}let o={logo:t};this.teamsService.updateTeam(o).pipe(v(h=>(this.toastService.error("Failed to update team logo"),M(()=>h))),S(1)).subscribe(()=>{this.toastService.open("Successfully updated team logo"),this.teamsService.refetchCurrentTeam()})}onPreviewLogoChange(e){let t=new FileReader;t.readAsDataURL(e),t.onload=()=>{this.previewUrl=t.result}}};i.\u0275fac=function(t){return new(t||i)(d(I),d(w))},i.\u0275cmp=_({type:i,selectors:[["app-settings-logo-section"]],decls:12,vars:3,consts:[[1,"settings__section"],[1,"settings__section-header"],[1,"settings__section-description"],[1,"settings__section-title"],[1,"settings__section-subtitle"],[1,"settings__section-toolbar"],["mat-stroked-button","","type","button","color","primary",3,"click"],[1,"settings__section-content","settings__logo",3,"formGroup"],["formControlName","files","fileslimit","1","accept","image/*",3,"multiple","maxsize"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),s(4,"Logo"),r(),a(5,"div",4),s(6,"Update your team logo"),r()(),a(7,"div",5)(8,"button",6),p("click",function(){return o.onSubmit()}),s(9," Save "),r()()(),a(10,"form",7),g(11,"file-upload",8),r()()),t&2&&(l(10),m("formGroup",o.form),l(),m("multiple",!1)("maxsize",1048576))},dependencies:[y,j,O,Y,W,z,he,Te,Ce,Me,ve],styles:[".settings__logo-preview[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:cover;background:#ebebeb;border-radius:9999px}"],changeDetection:0});let n=i;return n})();var Q=Be($e());var f=function(n){return n.HIGH_PRIORITY_TASKS="HIGH_PRIORITY_TASKS",n.MEDIUM_PRIORITY_TASKS="MEDIUM_PRIORITY_TASKS",n.LOW_PRIORITY_TASKS="LOW_PRIORITY_TASKS",n.ATTENDANT_MEETINGS="ATTENDANT_MEETINGS",n.SCREEN_TIME_MINUTES="SCREEN_TIME_MINUTES",n}(f||{});function lt(n,i){if(n&1&&(a(0,"span"),s(1),re(2,"date"),r()),n&2){let c=u();l(),N("Last updated at ",ae(2,1,c.lastUpdatedDate,"MMMM d, y"),"")}}function mt(n,i){if(n&1){let c=E();a(0,"div",7)(1,"app-performance-metrics",8),p("metricsChange",function(t){b(c);let o=u();return x(o.onPerformanceChange(t))}),r()()}if(n&2){let c=u();l(),m("metrics",c.metrics)("satisfiedTotalValue",c.satisfiedTotalValue)}}var Le=(()=>{let i=class i{constructor(e,t,o){this.performanceService=e,this.toastService=t,this.cd=o,this.metrics=null,this.satisfiedTotalValue=100,this.totalValue=100,this.lastUpdatedDate=null}ngOnInit(){this.loadMetrics()}get isDisabled(){let e=(0,Q.default)().subtract(3,"days"),t=this.lastUpdatedDate!==null&&(0,Q.default)(this.lastUpdatedDate).isAfter(e);return this.totalValue!==this.satisfiedTotalValue||t}loadMetrics(){this.performanceService.getMetrics().pipe(te(e=>{this.lastUpdatedDate=e.updatedDate??null,this.cd.markForCheck()}),ee(e=>({HIGH_PRIORITY_TASKS:{type:f.HIGH_PRIORITY_TASKS,name:"High priority tasks",description:"Team member`s completed high priority tasks amount in one month period",enabled:e.highPriorityTasks.enabled,weight:e.highPriorityTasks.weight*100,normalValue:e.highPriorityTasks.normalValue},MEDIUM_PRIORITY_TASKS:{type:f.MEDIUM_PRIORITY_TASKS,name:"Medium priority tasks",description:"Team member`s completed medium priority tasks amount in one month period",enabled:e.mediumPriorityTasks.enabled,weight:e.mediumPriorityTasks.weight*100,normalValue:e.mediumPriorityTasks.normalValue},LOW_PRIORITY_TASKS:{type:f.LOW_PRIORITY_TASKS,name:"Low priority tasks",description:"Team member`s completed low priority tasks amount in one month period",enabled:e.lowPriorityTasks.enabled,weight:e.lowPriorityTasks.weight*100,normalValue:e.lowPriorityTasks.normalValue},ATTENDANT_MEETINGS:{type:f.ATTENDANT_MEETINGS,name:"Attending meetings",description:"Team member`s attendant meetings amount in one month period",enabled:e.attendantMeetings.enabled,weight:e.attendantMeetings.weight*100,normalValue:e.attendantMeetings.normalValue},SCREEN_TIME_MINUTES:{type:f.SCREEN_TIME_MINUTES,name:"Screen time minutes",description:"Team member`s spending time (minutes) on the platform in one month period",enabled:e.screenTimeMinutes.enabled,weight:e.screenTimeMinutes.weight*100,normalValue:e.screenTimeMinutes.normalValue}})),v(e=>(this.toastService.error("Failed to get metrics"),M(()=>e))),S(1)).subscribe(e=>{this.metrics=e,this.cd.markForCheck()})}onPerformanceChange(e){this.totalValue=e.totalValue,this.metrics=this.convertToTable(e.metricsItems),this.cd.markForCheck()}onSaveClick(){if(this.satisfiedTotalValue!==this.totalValue){this.toastService.error(`Total value of enabled metrics must be ${this.satisfiedTotalValue}%`);return}if(!this.metrics){this.toastService.error("Metrics not available");return}let e=this.convertToUpdateDTO(this.metrics);this.performanceService.updateMetrics(e).pipe(v(t=>(this.toastService.error("Failed to update metrics"),M(()=>t))),S(1)).subscribe(()=>{this.toastService.open("Successfully updated performance metrics")})}convertToTable(e){let t=e.find(C=>C.type===f.HIGH_PRIORITY_TASKS),o=e.find(C=>C.type===f.MEDIUM_PRIORITY_TASKS),h=e.find(C=>C.type===f.LOW_PRIORITY_TASKS),X=e.find(C=>C.type===f.ATTENDANT_MEETINGS),Z=e.find(C=>C.type===f.SCREEN_TIME_MINUTES);return!t||!o||!h||!X||!Z?null:{HIGH_PRIORITY_TASKS:t,MEDIUM_PRIORITY_TASKS:o,LOW_PRIORITY_TASKS:h,ATTENDANT_MEETINGS:X,SCREEN_TIME_MINUTES:Z}}convertToUpdateDTO(e){return{highPriorityTasks:{enabled:e.HIGH_PRIORITY_TASKS.enabled,weight:e.HIGH_PRIORITY_TASKS.weight/100,normalValue:e.HIGH_PRIORITY_TASKS.normalValue,type:e.HIGH_PRIORITY_TASKS.type},mediumPriorityTasks:{enabled:e.MEDIUM_PRIORITY_TASKS.enabled,weight:e.MEDIUM_PRIORITY_TASKS.weight/100,normalValue:e.MEDIUM_PRIORITY_TASKS.normalValue,type:e.MEDIUM_PRIORITY_TASKS.type},lowPriorityTasks:{enabled:e.LOW_PRIORITY_TASKS.enabled,weight:e.LOW_PRIORITY_TASKS.weight/100,normalValue:e.LOW_PRIORITY_TASKS.normalValue,type:e.LOW_PRIORITY_TASKS.type},attendantMeetings:{enabled:e.ATTENDANT_MEETINGS.enabled,weight:e.ATTENDANT_MEETINGS.weight/100,normalValue:e.ATTENDANT_MEETINGS.normalValue,type:e.ATTENDANT_MEETINGS.type},screenTimeMinutes:{enabled:e.SCREEN_TIME_MINUTES.enabled,weight:e.SCREEN_TIME_MINUTES.weight/100,normalValue:e.SCREEN_TIME_MINUTES.normalValue,type:e.SCREEN_TIME_MINUTES.type}}}};i.\u0275fac=function(t){return new(t||i)(d(Ae),d(I),d(se))},i.\u0275cmp=_({type:i,selectors:[["app-settings-performance-section"]],decls:14,vars:3,consts:[[1,"settings__section"],[1,"settings__section-header"],[1,"settings__section-description"],[1,"settings__section-title"],[1,"settings__section-subtitle"],[1,"settings__section-toolbar"],["mat-stroked-button","","type","button","color","primary",3,"click","disabled"],[1,"settings__section-content","settings__performance"],[3,"metricsChange","metrics","satisfiedTotalValue"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),s(4,"Performance Metrics"),r(),a(5,"div",4),s(6," Adjust settings of your team members performance evaluation. The performance is reported each 1 month period. "),g(7,"br"),s(8,"Metrics can be updated each 3 days. "),T(9,lt,3,4,"span"),r()(),a(10,"div",5)(11,"button",6),p("click",function(){return o.onSaveClick()}),s(12," Save "),r()()(),T(13,mt,2,2,"div",7),r()),t&2&&(l(9),D(9,o.lastUpdatedDate?9:-1),l(2),m("disabled",o.isDisabled),l(2),D(13,o.metrics?13:-1))},dependencies:[y,Ge,ce],changeDetection:0});let n=i;return n})();var je=(()=>{let i=class i{constructor(e,t){this.teamsService=e,this.toastService=t,this.form=new L({name:new A("",[$.required]),description:new A("",[$.required])})}ngOnInit(){this.teamsService.currentTeam$.pipe(S(1)).subscribe(e=>{e&&this.form.patchValue({name:e.name,description:e.description})})}onSubmit(){let e=this.form.getRawValue();if(!e.name||!e.description){this.toastService.error("Invalid team name or description");return}let t={name:e.name,description:e.description};this.teamsService.updateTeam(t).pipe(v(o=>(this.toastService.error("Failed to update team"),M(()=>o))),S(1)).subscribe(()=>{this.toastService.open("Successfully updated team"),this.teamsService.refetchCurrentTeam()})}};i.\u0275fac=function(t){return new(t||i)(d(w),d(I))},i.\u0275cmp=_({type:i,selectors:[["app-settings-rename-section"]],decls:13,vars:2,consts:[[1,"settings__section"],[1,"settings__section-header"],[1,"settings__section-description"],[1,"settings__section-title"],[1,"settings__section-subtitle"],[1,"settings__section-toolbar"],["mat-stroked-button","","type","button","color","primary",3,"click","disabled"],[1,"settings__section-content","settings__details",3,"formGroup"],["placeholder","Enter a name","formControlName","name","type","text",1,"settings__details-name"],["placeholder","Enter a description","formControlName","description",1,"settings__details-description"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),s(4,"Name"),r(),a(5,"div",4),s(6,"This will be displayed on your team profile"),r()(),a(7,"div",5)(8,"button",6),p("click",function(){return o.onSubmit()}),s(9," Rename "),r()()(),a(10,"form",7),g(11,"input",8)(12,"textarea",9),r()()),t&2&&(l(8),m("disabled",o.form.invalid),l(2),m("formGroup",o.form))},dependencies:[y,j,K,O,Y,W,z],changeDetection:0});let n=i;return n})();var We=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=_({type:i,selectors:[["app-settings"]],decls:16,vars:0,consts:[[1,"page","settings"],[1,"settings__content"],[1,"settings__header"],[1,"settings__header-left"],[1,"settings__separator"]],template:function(t,o){t&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),s(5,"Teams Settings"),r(),a(6,"p"),s(7,"Update your company photo and details here"),r()()(),g(8,"div",4)(9,"app-settings-rename-section")(10,"div",4)(11,"app-settings-logo-section")(12,"div",4)(13,"app-settings-performance-section")(14,"div",4)(15,"app-settings-danger-section"),r()())},dependencies:[je,Ye,Le,Ke],styles:["[_nghost-%COMP%]     file-upload{background:transparent;outline:1px dashed #cacccb;outline-offset:-5px;border-radius:8px}[_nghost-%COMP%]     .settings{display:flex;justify-content:center}[_nghost-%COMP%]     .settings__content{max-width:100%;background:#fff;border-radius:12px;padding:34px;border:1px solid #ebeaea;display:flex;flex-direction:column;gap:30px}@media (max-width: 48em){[_nghost-%COMP%]     .settings__content{padding:22px;gap:20px}}[_nghost-%COMP%]     .settings__header{display:flex;align-items:center;flex-wrap:wrap;justify-content:space-between;gap:12px}[_nghost-%COMP%]     .settings__header-left h2{font-size:16px;font-weight:600}[_nghost-%COMP%]     .settings__header-left p{font-size:12px;color:#7c7f85;font-weight:500}[_nghost-%COMP%]     .settings__header-right{display:flex;align-items:center;gap:12px}[_nghost-%COMP%]     .settings__section{display:flex;flex-direction:column;column-gap:60px;row-gap:16px}[_nghost-%COMP%]     .settings__section-title{font-weight:500}[_nghost-%COMP%]     .settings__section-title.danger{color:#f85149}[_nghost-%COMP%]     .settings__section-subtitle{font-size:12px;color:#7c7f85;font-weight:400;line-height:1.5}[_nghost-%COMP%]     .settings__section-header{display:flex;align-items:center;justify-content:space-between;gap:22px}[_nghost-%COMP%]     .settings__section-description{display:flex;flex-direction:column}[_nghost-%COMP%]     .settings__details{display:flex;flex-direction:column;gap:12px}[_nghost-%COMP%]     .settings__details input, [_nghost-%COMP%]     .settings__details textarea{border:1px solid #cacccb;padding:8px 14px;border-radius:6px;resize:none}[_nghost-%COMP%]     .settings__danger{display:flex;flex-direction:row;justify-content:space-between}[_nghost-%COMP%]     .settings__danger button{font-weight:500;color:#f85149;border:1px solid #f85149}[_nghost-%COMP%]     .settings__separator{width:100%;height:1px;background:#ebeaea}"],changeDetection:0});let n=i;return n})();var _t=[{path:"",component:We}],ze=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=U({type:i}),i.\u0275inj=k({imports:[B.forChild(_t),B]});let n=i;return n})();var oi=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=U({type:i}),i.\u0275inj=k({imports:[le,Ne,ze]});let n=i;return n})();export{oi as SettingsModule};
