import{a as dt}from"./chunk-6I47TYUI.js";import{b as Ie}from"./chunk-WOXQDGN3.js";import{a as D}from"./chunk-6HX3H25K.js";import{$a as Ze,A as De,Aa as Be,B,Ca as Ge,D as G,E as H,F as q,G as Q,Ga as He,Ja as qe,Ka as Qe,La as We,O as ke,Q as Oe,S as W,U as Ve,V as K,Va as Ke,W as Y,Wa as Ye,X as J,Xa as Je,Y as S,Ya as Xe,_ as X,a as Te,ab as et,ba as Z,bb as tt,ca as ee,cb as it,db as nt,eb as ot,fb as rt,gb as at,hb as lt,ib as st,ka as ze,m as Se,ma as Le,mb as mt,na as je,nb as pt,o as Pe,oa as $e,ob as ct,p as Ee,pa as Re,qa as Ne,ra as te,u as me,ua as ie,va as ne,xa as Ue,za as Ae}from"./chunk-XIB24JUK.js";import{Aa as V,F as L,Fb as C,Gb as Ce,Hb as le,I as de,Ib as M,Jb as b,Ka as ge,Kb as r,Lb as o,Mb as c,N as fe,Nb as y,Ob as T,Oc as we,Qb as U,Tb as g,Vb as h,X as ue,Y as w,Yb as xe,_ as j,aa as _e,bc as A,cb as he,cc as s,dc as E,ea as $,ec as x,f as P,fa as R,fb as m,gb as d,ja as O,k as pe,ld as Me,mc as ve,md as be,o as F,pa as _,qa as N,qd as ye,s as ce,vc as z,wc as se,xb as f,xc as Fe,za as I,zb as p}from"./chunk-TYBYM3PM.js";import"./chunk-REV7FFDQ.js";import{a as ae}from"./chunk-MON7YFGF.js";var ut=(()=>{let t=class t{constructor(n,i){this.dialogRef=n,this.toastService=i,this.form=new J({description:new S("",[Ve.required]),files:new S([],[Be.filesLimit(1)])})}onBackClick(){this.dialogRef.close()}onSubmit(){let{description:n,files:i}=this.form.getRawValue(),l=i?.[0]??void 0;if(!l||!n){this.toastService.error("Missing required fields");return}let u={description:n,file:l};this.dialogRef.close(u)}};t.\u0275fac=function(i){return new(i||t)(d(ze),d(D))},t.\u0275cmp=_({type:t,selectors:[["app-upload-file-dialog"]],decls:14,vars:3,consts:[["mat-dialog-title","",1,"upload-file__title"],["mat-dialog-content","",1,"upload-file"],[1,"upload-file__form",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","description","placeholder","Enter File Description","cdkTextareaAutosize","","cdkAutosizeMinRows","1"],["formControlName","files","fileslimit","1",3,"multiple"],["align","end"],["mat-stroked-button","",3,"click"],["type","submit","mat-flat-button","","color","primary",3,"click","disabled"]],template:function(i,l){i&1&&(r(0,"h4",0),s(1,` Upload File
`),o(),r(2,"section",1)(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),s(6,"Description"),o(),c(7,"textarea",4),o(),c(8,"file-upload",5),o()(),r(9,"mat-dialog-actions",6)(10,"button",7),g("click",function(){return l.onBackClick()}),s(11," Back "),o(),r(12,"button",8),g("click",function(){return l.onSubmit()}),s(13," Upload "),o()()),i&2&&(m(3),p("formGroup",l.form),m(5),p("multiple",!1),m(4),p("disabled",l.form.invalid))},dependencies:[B,ne,ie,te,Ne,je,Re,$e,X,W,K,Y,Z,ee,Ae,Ge],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.upload-file__title[_ngcontent-%COMP%]{font-size:20px;font-weight:500}.upload-file__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:16px}.upload-file__form-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.row[_ngcontent-%COMP%]{display:flex;gap:22px}.quill__editor[_ngcontent-%COMP%]{width:100%;margin-bottom:1.6rem}"],changeDetection:0});let e=t;return e})();function Dt(e,t){if(e&1&&(r(0,"mat-option",5),s(1),o()),e&2){let a=t.$implicit;p("matTooltip",a.name)("value",a.id),m(),x(" ",a.name," ")}}function kt(e,t){if(e&1&&(r(0,"mat-option",5),s(1),o()),e&2){let a=t.$implicit;p("matTooltip",a.name)("value",a.id),m(),x(" ",a.name," ")}}var _t=(()=>{let t=class t{constructor(n,i,l){this.cd=n,this.router=i,this.route=l,this.filter=new ge,this.destroy$=new P,this.views=[{id:"list",name:"List"},{id:"table",name:"Table"}],this.sorting=[{id:"createdAt,asc",name:"Date \u2197"},{id:"createdAt,desc",name:"Date \u2198"}],this.form=new J({searchValue:new S(""),view:new S(""),sort:new S("")})}ngOnInit(){this.patchInitialFormValues(),this.trackFormValueChanges()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}patchInitialFormValues(){let n=this.getQueryParameters();this.form.patchValue({searchValue:n.searchValue,view:n.view,sort:n.sort}),this.filter.emit(n),this.cd.markForCheck()}trackFormValueChanges(){this.form.valueChanges.pipe(de(800),fe(),j(this.destroy$)).subscribe(n=>{let i={searchValue:n.searchValue??void 0,view:n.view??void 0,sort:n.sort??void 0};this.saveQueryParameters(i),this.filter.emit(i)})}saveQueryParameters(n){this.router.navigate([],{queryParams:n,queryParamsHandling:"merge"})}getQueryParameters(){let n={searchValue:"",view:this.views[0].id,sort:this.sorting[1].id},i=this.route.snapshot.queryParams;return Oe(i,n)}};t.\u0275fac=function(i){return new(i||t)(d(we),d(Pe),d(Se))},t.\u0275cmp=_({type:t,selectors:[["app-files-filter"]],outputs:{filter:"filter"},decls:23,vars:1,consts:[[1,"filter"],[1,"filter__fields",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","searchValue","type","text","placeholder","Filename"],["formControlName","view"],[3,"matTooltip","value"],["formControlName","sort"]],template:function(i,l){i&1&&(r(0,"section",0)(1,"mat-accordion")(2,"mat-expansion-panel")(3,"mat-expansion-panel-header")(4,"mat-panel-title"),s(5,"Filters"),o()(),r(6,"form",1)(7,"mat-form-field",2)(8,"mat-label"),s(9,"Search"),o(),c(10,"input",3),o(),r(11,"mat-form-field",2)(12,"mat-label"),s(13,"View"),o(),r(14,"mat-select",4),M(15,Dt,2,3,"mat-option",5,le),o()(),r(17,"mat-form-field",2)(18,"mat-label"),s(19,"Sorting"),o(),r(20,"mat-select",6),M(21,kt,2,3,"mat-option",5,le),o()()()()()()),i&2&&(m(6),p("formGroup",l.form),m(9),b(l.views),m(6),b(l.sorting))},dependencies:[Xe,Ke,Ye,Je,ne,ie,te,qe,De,Ue,X,W,K,Y,Z,ee],styles:["[_nghost-%COMP%]     mat-form-field{width:100%}[_nghost-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.filter[_ngcontent-%COMP%]{margin-top:22px}.filter__fields[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem;align-items:start}"],changeDetection:0});let e=t;return e})();var gt=(()=>{let t=class t{constructor(n){this.httpClient=n,this.baseUrl="/api/v1/team-files"}uploadTeamFile(n,i){let l=new FormData;return l.append("file",i.file),l.append("description",i.description),this.httpClient.post(`${this.baseUrl}`,l,{params:{teamId:n}})}getTeamFiles(n,i,l){let u=ae(ae({teamId:n},l),i);return this.httpClient.get(`${this.baseUrl}`,{params:ke(u)})}deleteTeamFile(n,i){return this.httpClient.delete(`${this.baseUrl}/${i}`,{params:{teamId:n}})}updateTeamFile(n,i,l){return this.httpClient.put(`${this.baseUrl}/${i}`,l,{params:{teamId:n}})}};t.\u0275fac=function(i){return new(i||t)(O(Te))},t.\u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var oe=(()=>{let t=class t{constructor(n,i){this.teamFilesApiService=n,this.teamsService=i,this.refreshTeamFilesSubject=new P,this.refreshTeamFiles$=this.refreshTeamFilesSubject.asObservable()}triggerRefreshTeamFiles(){this.refreshTeamFilesSubject.next()}uploadTeamFile(n){return this.teamsService.currentTeam$.pipe(w(i=>i?this.teamFilesApiService.uploadTeamFile(i.id,n):F(()=>Error("No current team"))))}getTeamFiles(n,i){return this.teamsService.currentTeam$.pipe(w(l=>l?this.teamFilesApiService.getTeamFiles(l.id,n,i):F(()=>Error("No current team"))))}deleteTeamFile(n){return this.teamsService.currentTeam$.pipe(w(i=>i?this.teamFilesApiService.deleteTeamFile(i.id,n):F(()=>Error("No current team"))))}updateTeamFile(n,i){return this.teamsService.currentTeam$.pipe(w(l=>l?this.teamFilesApiService.updateTeamFile(l.id,n,i):F(()=>Error("No current team"))))}};t.\u0275fac=function(i){return new(i||t)(O(gt),O(Ie))},t.\u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ct=(()=>{let t=class t{constructor(n,i,l){this.dialog=n,this.teamFilesService=i,this.toastrService=l,this.unsubscribe$=new P}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}onUploadButtonClick(){this.dialog.open(ut,{minWidth:"30%"}).afterClosed().pipe(w(i=>i?this.teamFilesService.uploadTeamFile(i):pe),L(i=>(this.toastrService.error("Failed to upload a team file"),F(()=>i))),j(this.unsubscribe$)).subscribe(()=>{this.toastrService.open("Successfully uploaded team file"),this.teamFilesService.triggerRefreshTeamFiles()})}};t.\u0275fac=function(i){return new(i||t)(d(Le),d(oe),d(D))},t.\u0275cmp=_({type:t,selectors:[["app-files-toolbar"]],decls:8,vars:0,consts:[[1,"files__toolbar"],[1,"files__toolbar-left"],[1,"files__toolbar-right"],["icon","upload",1,"files__toolbar-item",3,"click"]],template:function(i,l){i&1&&(r(0,"div",0)(1,"div",1)(2,"h1"),s(3,"Files Manager"),o()(),r(4,"div",2)(5,"app-button",3),g("click",function(){return l.onUploadButtonClick()}),r(6,"p"),s(7,"Upload"),o()()()())},dependencies:[pt],styles:["h1[_ngcontent-%COMP%]{font-size:22px;font-weight:500}.files__toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;justify-content:space-between;overflow-x:auto;overflow-y:hidden}.files__toolbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}@media (max-width: 40em){.files__toolbar-left[_ngcontent-%COMP%]{display:none}}.files__toolbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}"],changeDetection:0});let e=t;return e})();var zt=["Bytes","KB","MB","GB","TB"];function re(e){let t=Math.floor(Math.log(e)/Math.log(1024));return`${(e/Math.pow(1024,t)).toFixed(2)} ${zt[t]}`}function $t(e,t){if(e&1&&c(0,"img",4),e&2){let a=h(2);xe("src","api/v1/files/",a.file.fileId,"",he)}}function Rt(e,t){e&1&&(r(0,"mat-icon",10),s(1,"insert_drive_file"),o())}function Nt(e,t){if(e&1&&(r(0,"div",1)(1,"div",3),f(2,$t,1,2,"img",4)(3,Rt,2,0),o(),r(4,"h5",5),s(5),o(),r(6,"p",6),s(7),o(),r(8,"div",7)(9,"p",8),s(10),o(),r(11,"p",9),s(12),o()()()),e&2){let a=h(),n=A(2);m(),p("matMenuTriggerFor",n),m(),C(2,a.isImage?2:3),m(2),p("matMenuTriggerFor",n),m(),x(" ",a.file.filename," "),m(2),E(a.file.description),m(3),E(a.file.contentType),m(2),x(" ",a.getFormattedFileSize(a.file.size)," ")}}var xt=(()=>{let t=class t{constructor(n){this.filesService=n,this.file=null}getFormattedFileSize(n){return re(n)}onUpdateClick(){throw new Error("Method not implemented.")}onDownloadClick(){this.file&&this.filesService.downloadFile(this.file.fileId)}get isImage(){return this.file?this.file.contentType.includes("image/"):!1}};t.\u0275fac=function(i){return new(i||t)(d(dt))},t.\u0275cmp=_({type:t,selectors:[["app-files-list-item"]],inputs:{file:"file"},decls:11,vars:1,consts:[["menu","matMenu"],[1,"files__item"],["mat-menu-item","",3,"click"],[1,"files__item-preview-wrapper",3,"matMenuTriggerFor"],["loading","lazy","alt","Preview",1,"files__item-preview-img",3,"src"],[1,"files__item-title",3,"matMenuTriggerFor"],[1,"files__item-desc"],[1,"files__item-bottom"],[1,"files__item-type"],[1,"files__item-size"],[1,"files__item-preview-icon"]],template:function(i,l){if(i&1){let u=U();f(0,Nt,13,7,"div",1),r(1,"mat-menu",null,0)(3,"button",2),g("click",function(){return I(u),V(l.onDownloadClick())}),r(4,"mat-icon"),s(5,"download"),o(),s(6," Download "),o(),r(7,"button",2),g("click",function(){return I(u),V(l.onUpdateClick())}),r(8,"mat-icon"),s(9,"edit"),o(),s(10," Update "),o()()}i&2&&C(0,l.file?0:-1)},dependencies:[G,q,H,Q],styles:[".files__item[_ngcontent-%COMP%]{padding:12px 16px;border-radius:10px;background:#fff;border:1px solid #e9e9e9}.files__item-bottom[_ngcontent-%COMP%]{margin-top:16px;display:flex;align-items:center;flex-wrap:wrap;gap:8px}.files__item-type[_ngcontent-%COMP%]{font-size:12px;padding:4px 16px;border-radius:8px;background:#f1f5fa}.files__item-title[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:6px;font-size:14px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer}.files__item-size[_ngcontent-%COMP%]{font-size:12px;padding:4px 16px;border-radius:8px;background:#f1f5fa}.files__item-desc[_ngcontent-%COMP%]{font-size:12px;color:#575757;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.files__item-preview-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:240px;background:#f2f4f7;padding:20px;overflow:hidden;border-radius:8px;cursor:pointer}.files__item-preview-img[_ngcontent-%COMP%]{width:100%;max-height:100%;object-fit:contain}.files__item-preview-icon[_ngcontent-%COMP%]{font-size:36px;width:36px;height:36px;color:#8c9094}"],changeDetection:0});let e=t;return e})();var At=(e,t)=>t.id;function Bt(e,t){if(e&1&&c(0,"app-files-list-item",1),e&2){let a=t.$implicit;p("file",a)}}var vt=(()=>{let t=class t{constructor(){this.files=[]}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=_({type:t,selectors:[["app-files-list-view"]],inputs:{files:"files"},decls:3,vars:0,consts:[[1,"files__list"],[3,"file"]],template:function(i,l){i&1&&(r(0,"div",0),M(1,Bt,1,1,"app-files-list-item",1,At),o()),i&2&&(m(),b(l.files))},dependencies:[xt],styles:[".files__list[_ngcontent-%COMP%]{width:100%;height:100%;display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-template-rows:none}"],changeDetection:0});let e=t;return e})();function qt(e,t){e&1&&(r(0,"th",13),s(1," Filename "),o())}function Qt(e,t){if(e&1&&(r(0,"td",14)(1,"p"),s(2),o()()),e&2){let a=t.$implicit;m(2),E(a.filename)}}function Wt(e,t){e&1&&(r(0,"th",13),s(1," Created Date "),o())}function Kt(e,t){if(e&1&&(r(0,"td",14),s(1),z(2,"date"),o()),e&2){let a=t.$implicit;m(),x(" ",Fe(2,1,a.createdDate,"EEEE, MMMM d")," ")}}function Yt(e,t){e&1&&(r(0,"th",13),s(1," Type "),o())}function Jt(e,t){if(e&1&&(r(0,"td",14),s(1),o()),e&2){let a=t.$implicit;m(),x(" ",a.contentType," ")}}function Xt(e,t){e&1&&(r(0,"th",13),s(1," Size "),o())}function Zt(e,t){if(e&1&&(r(0,"td",14),s(1),o()),e&2){let a=t.$implicit,n=h();m(),x(" ",n.getFormattedFileSize(a.size)," ")}}function ei(e,t){e&1&&(r(0,"th",13),s(1," Description "),o())}function ti(e,t){if(e&1&&(r(0,"td",14)(1,"p"),s(2),o()()),e&2){let a=t.$implicit;m(2),E(a.description)}}function ii(e,t){e&1&&c(0,"th",13)}function ni(e,t){if(e&1){let a=U();r(0,"td",14)(1,"button",15),g("click",function(i){I(a);let l=h();return V(l.onMoreClick(i))}),r(2,"mat-icon"),s(3,"more_horizont"),o()(),r(4,"mat-menu",null,0)(6,"button",16)(7,"mat-icon"),s(8,"download"),o(),s(9," Download "),o()()()}if(e&2){let a=A(5);m(),p("matMenuTriggerFor",a)}}function oi(e,t){e&1&&c(0,"tr",17)}function ri(e,t){e&1&&c(0,"tr",18)}var Ft=(()=>{let t=class t{constructor(){this.files=[],this.displayedColumns=["filename","createdDate","type","size","description","actions"]}onMoreClick(n){n.stopPropagation()}getFormattedFileSize(n){return re(n)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=_({type:t,selectors:[["app-files-table-view"]],inputs:{files:"files"},decls:23,vars:3,consts:[["taskMoreMenu","matMenu"],[1,"files-table__wrapper"],["mat-table","",3,"dataSource"],["matColumnDef","filename"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","createdDate"],["matColumnDef","type"],["matColumnDef","size"],["matColumnDef","description"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"click","matMenuTriggerFor"],["mat-menu-item",""],["mat-header-row",""],["mat-row",""]],template:function(i,l){i&1&&(r(0,"div",1)(1,"table",2),c(2,"caption"),y(3,3),f(4,qt,2,0,"th",4)(5,Qt,3,1,"td",5),T(),y(6,6),f(7,Wt,2,0,"th",4)(8,Kt,3,4,"td",5),T(),y(9,7),f(10,Yt,2,0,"th",4)(11,Jt,2,1,"td",5),T(),y(12,8),f(13,Xt,2,0,"th",4)(14,Zt,2,1,"td",5),T(),y(15,9),f(16,ei,2,0,"th",4)(17,ti,3,1,"td",5),T(),y(18,10),f(19,ii,1,0,"th",4)(20,ni,10,1,"td",5),T(),f(21,oi,1,0,"tr",11)(22,ri,1,0,"tr",12),o()()),i&2&&(m(),p("dataSource",l.files),m(20),p("matHeaderRowDef",l.displayedColumns),m(),p("matRowDefColumns",l.displayedColumns))},dependencies:[G,q,H,Q,Ze,tt,rt,it,et,at,nt,ot,lt,st,be],styles:["[_nghost-%COMP%]     .mat-mdc-table{border:1px solid #e9e9e9;background:none}[_nghost-%COMP%]     .mat-mdc-row .mat-mdc-cell{border-bottom:1px solid transparent;border-top:1px solid transparent;cursor:pointer}[_nghost-%COMP%]     .mat-mdc-header-cell{font-size:12px;text-transform:uppercase;color:#afafaf}[_nghost-%COMP%]     .mdc-data-table__cell, [_nghost-%COMP%]     .mdc-data-table__header-cell{border-bottom:none}[_nghost-%COMP%]     .mat-mdc-row:hover .mat-mdc-cell{background:#f3f3f3}[_nghost-%COMP%]     .mat-mdc-table tbody, [_nghost-%COMP%]     .mat-mdc-table tfoot, [_nghost-%COMP%]     .mat-mdc-table thead, [_nghost-%COMP%]     .mat-mdc-cell, [_nghost-%COMP%]     .mat-mdc-footer-cell, [_nghost-%COMP%]     .mat-mdc-header-row, [_nghost-%COMP%]     .mat-mdc-row, [_nghost-%COMP%]     .mat-mdc-footer-row, [_nghost-%COMP%]     .mat-mdc-table .mat-mdc-header-cell{background:none}.files-table__wrapper[_ngcontent-%COMP%]{display:block;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;border-radius:6px;background:#fff!important;padding:0 12px 12px}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f8f8f8}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{max-width:160px;padding:14px}th[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"],changeDetection:0});let e=t;return e})();var li=()=>({height:"260px","border-radius":"8px"});function si(e,t){if(e&1&&c(0,"app-files-list-view",6),e&2){let a=h(3);p("files",a.data)}}function mi(e,t){if(e&1&&c(0,"app-files-table-view",6),e&2){let a=h(3);p("files",a.data)}}function pi(e,t){if(e&1&&f(0,si,1,1)(1,mi,1,1),e&2){let a,n=h(3);C(0,(a=n.filter.view)==="list"?0:a==="table"?1:-1)}}function ci(e,t){e&1&&(r(0,"div",7)(1,"p"),s(2,"No files found"),o()())}function di(e,t){if(e&1&&f(0,pi,2,1)(1,ci,3,0),e&2){let a=h();C(0,a.data.length>0?0:1)}}function fi(e,t){e&1&&(r(0,"div",8),c(1,"ngx-skeleton-loader",9),o()),e&2&&(m(),p("theme",ve(1,li)))}function ui(e,t){if(e&1&&(r(0,"div",4),M(1,fi,2,2,"div",8,Ce),o()),e&2){let a=h(2);m(),b(a.skeletonArray)}}function _i(e,t){e&1&&(r(0,"div",5)(1,"h1",10),s(2,"404"),o(),r(3,"div",11)(4,"h2",12),s(5," Oops.. "),c(6,"br"),s(7," We couldn't find a files you are looking for. "),o(),r(8,"button",13)(9,"a",14),s(10,"Return Back"),o()()()())}function gi(e,t){if(e&1&&f(0,di,2,1)(1,ui,3,0,"div",4)(2,_i,11,0,"div",5),e&2){let a=t;C(0,a.data?0:-1),m(),C(1,a.loading?1:-1),m(),C(2,a.error?2:-1)}}var wt=(()=>{let t=class t{constructor(n,i){this.teamFilesService=n,this.toastService=i,this.skeletonArray=new Array(10).fill(0),this.filter={},this.pagination=Qe,this.files$=this.teamFilesService.refreshTeamFiles$.pipe(ue(null),w(()=>this.loadTeamFiles()))}ngOnInit(){this.teamFilesService.triggerRefreshTeamFiles()}onFilter(n){this.filter=n,this.teamFilesService.triggerRefreshTeamFiles()}onPage(n){this.pagination.size=n.size,this.pagination.page=n.page,this.teamFilesService.triggerRefreshTeamFiles()}loadTeamFiles(){let n={size:this.pagination.size,page:this.pagination.page};return this.teamFilesService.getTeamFiles(n,this.filter).pipe(_e(i=>{this.pagination.page=i.number,this.pagination.size=i.size,this.pagination.totalElements=i.totalElements,this.pagination.totalPages=i.totalPages}),ce(i=>i.content),L(i=>(this.toastService.open("Failed to get team files"),F(()=>i))))}};t.\u0275fac=function(i){return new(i||t)(d(oe),d(D))},t.\u0275cmp=_({type:t,selectors:[["app-files-list"]],decls:8,vars:6,consts:[[1,"page","files"],[3,"filter"],[1,"files__content"],[3,"page","pagination"],[1,"files__loading"],[1,"files__error","page"],[3,"files"],[1,"files__empty"],[1,"files__loading-element"],["count","1","appearance","line",3,"theme"],[1,"files__error-title"],[1,"files__error-content"],[1,"files__error-subtitle"],["mat-flat-button","","color","primary","routerLink","/hub/overview"],["routerLink","/hub/overview"]],template:function(i,l){if(i&1&&(r(0,"section",0),c(1,"app-files-toolbar"),r(2,"app-files-filter",1),g("filter",function(k){return l.onFilter(k)}),o(),r(3,"div",2),f(4,gi,3,3),z(5,"withLoading"),z(6,"async"),o(),r(7,"app-paginator",3),g("page",function(k){return l.onPage(k)}),o()()),i&2){let u;m(4),C(4,(u=se(6,4,se(5,2,l.files$)))?4:-1,u),m(3),p("pagination",l.pagination)}},dependencies:[B,Ee,We,He,Ct,_t,vt,Ft,Me,mt],styles:[".files[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.files__content[_ngcontent-%COMP%]{flex:1;margin-top:22px}.files__empty[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;font-size:14px;font-weight:400;color:#bdbdbd;text-transform:capitalize}.files__loading[_ngcontent-%COMP%]{gap:20px;overflow-x:auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));grid-template-rows:none}.files__error[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;height:100%}.files__error-content[_ngcontent-%COMP%]{z-index:10;display:flex;flex-direction:column;align-items:center}.files__error-title[_ngcontent-%COMP%]{color:#d8d7d7;font-size:280px;font-weight:600;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:5;opacity:.25}@media screen and (max-width: 48em){.files__error-title[_ngcontent-%COMP%]{font-size:180px}}.files__error-subtitle[_ngcontent-%COMP%]{color:#000;font-size:26px;margin-bottom:26px;text-align:center;line-height:1.4}@media screen and (max-width: 48em){.files__error-subtitle[_ngcontent-%COMP%]{font-size:20px}}"],changeDetection:0});let e=t;return e})();var hi=[{path:"",component:wt}],Mt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=N({type:t}),t.\u0275inj=R({imports:[me.forChild(hi),me]});let e=t;return e})();var vn=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=N({type:t}),t.\u0275inj=R({imports:[ye,ct,Mt]});let e=t;return e})();export{vn as FilesModule};
