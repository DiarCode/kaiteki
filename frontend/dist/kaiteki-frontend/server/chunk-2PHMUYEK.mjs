import './polyfills.server.mjs';
import{a as wt,c as ue}from"./chunk-A4VIVBBO.mjs";import{a as fe}from"./chunk-CKIO23JR.mjs";import{a as de}from"./chunk-7XOCG3NU.mjs";import{b as ft}from"./chunk-FVR5UBZY.mjs";import{a as k}from"./chunk-25DJJPSL.mjs";import{Aa as ne,Ba as re,E as Z,G as te,I as j,K as O,L as z,La as ae,M as L,Ma as se,N as V,Na as pe,O as P,Oa as le,Q as N,T as q,U as A,aa as ut,b as F,ba as _t,ca as gt,cb as ce,da as ht,db as kt,ea as Ct,eb as me,f as ct,fa as vt,h as Zt,ha as $,i as w,ia as ee,ka as R,la as B,n as Nt,na as ie,pa as xt,qa as Pt,ra as bt,sa as yt,t as mt,ta as St,ua as Mt,wa as oe,x as dt}from"./chunk-UGHUVQZH.mjs";import{b as Kt,n as Xt}from"./chunk-IWV7G257.mjs";import{Aa as Q,Bb as m,D as $t,F as y,Hb as _,I as Rt,Ib as jt,K as T,Ka as Gt,Kb as Y,Lb as J,Mb as r,N as Bt,Nb as a,O as It,Ob as d,Rc as st,Sb as zt,Vb as h,X as Ft,Xb as C,Y as v,_ as it,_b as K,aa as Ut,cb as Ht,db as Wt,ea as ot,eb as Qt,ec as p,f as D,fa as nt,fc as X,gc as I,hb as s,ib as c,ja as H,jd as Yt,k as G,o as g,oc as Lt,pa as u,pc as Vt,qa as rt,rd as pt,s as Dt,sd as lt,wd as Jt,xc as M,yc as E,za as W,zb as x,zc as at}from"./chunk-JAB3SG4D.mjs";import"./chunk-6VT7JIM2.mjs";import{a as et,b as Et}from"./chunk-FME56UVT.mjs";var ve=(()=>{let i=class i{constructor(e,t,n){this.dialogRef=e,this.data=t,this.toastService=n,this.form=new V({title:new P("",[O.required]),content:new P("",[O.required]),description:new P("",[O.required]),image:new P(null,[Pt.filesLimit(1)])}),this.quillConfig={history:!0,toolbar:{container:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}],["link"],["clean"]]}}}onSubmit(){let e=this.form.value,t=e.image?.[0]??void 0;if(!e.title||!e.description||!e.content){this.toastService.error("Missing required fields");return}let n={title:e.title,description:e.description,content:e.content,image:t};this.dialogRef.close(n)}onBackClick(){this.dialogRef.close()}};i.\u0275fac=function(t){return new(t||i)(c(ut),c(_t),c(k))},i.\u0275cmp=u({type:i,selectors:[["app-create-post-dialog"]],decls:22,vars:5,consts:[["mat-dialog-title","",1,"cpost__title"],["mat-dialog-content","",1,"cpost"],[1,"cpost__form",3,"formGroup"],["appearance","outline"],["formControlName","title","matInput",""],["formControlName","description","matInput",""],["formControlName","content","theme","snow","placeholder","Write your amazing post",1,"quill__editor",3,"modules"],[1,"cpost__upload-image"],["formControlName","image","fileslimit","1","accept","image/*",3,"multiple","maxsize"],["align","end"],["mat-stroked-button","",3,"click"],["type","submit","mat-flat-button","","color","primary",3,"click","disabled"]],template:function(t,n){t&1&&(r(0,"h4",0),p(1,` Write a new post
`),a(),r(2,"section",1)(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),p(6,"Title"),a(),d(7,"input",4),a(),r(8,"mat-form-field",3)(9,"mat-label"),p(10,"Description"),a(),d(11,"input",5),a(),d(12,"quill-editor",6),r(13,"div",7)(14,"p"),p(15,"Upload your hero image"),a(),d(16,"file-upload",8),a()()(),r(17,"mat-dialog-actions",9)(18,"button",10),h("click",function(){return n.onBackClick()}),p(19," Back "),a(),r(20,"button",11),h("click",function(){return n.onSubmit()}),p(21," Post "),a()()),t&2&&(s(3),m("formGroup",n.form),s(9),m("modules",n.quillConfig),s(4),m("multiple",!1)("maxsize",1048576),s(4),m("disabled",n.form.invalid))},dependencies:[F,B,R,$,ht,vt,Ct,N,j,z,L,q,A,xt,bt,yt,St,Mt,wt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .ql-toolbar.ql-snow{border-radius:6px 6px 0 0;background:#fff;padding:16px;border:1px solid #8e8e94}[_nghost-%COMP%]     .ql-editor{padding:16px;min-height:400px}[_nghost-%COMP%]     .ql-editor p{color:#242424}[_nghost-%COMP%]     .ql-editor.ql-blank:before{font-style:normal}[_nghost-%COMP%]     .ql-container.ql-snow{background:#fff;border-radius:0 0 6px 6px;border:1px solid #8e8e94}[_nghost-%COMP%]     file-upload{background:transparent;outline:1px dashed #cacccb;outline-offset:-5px;border-radius:6px}.cpost__title[_ngcontent-%COMP%]{font-size:20px;font-weight:500}.cpost__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:22px}.cpost__form-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.cpost__upload-image[_ngcontent-%COMP%]{border-radius:6px;background:#fff;padding:16px;border:1px solid #8e8e94}.cpost__upload-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;margin-bottom:12px!important;color:#242424}.quill__editor[_ngcontent-%COMP%]{width:100%;margin-bottom:1.6rem}"],changeDetection:0});let o=i;return o})();var xe=(()=>{let i=class i{constructor(e,t,n,f){this.dialogRef=e,this.data=t,this.filesService=n,this.toastService=f,this.form=new V({title:new P("",[O.required]),content:new P("",[O.required]),description:new P("",[O.required]),image:new P(null,[Pt.filesLimit(1)])}),this.quillConfig={history:!0,toolbar:{container:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}],["link"],["clean"]]}}}ngOnInit(){this.fillExistingPost(this.data.post)}fillExistingPost(e){if(!e.heroImageId)return this.form.patchValue({title:e.title,description:e.description,content:e.content,image:void 0});this.filesService.getFileBlob(e.heroImageId).pipe(T(1)).subscribe(t=>{let n=new File([t],"Hero Image");return this.form.patchValue({title:e.title,description:e.description,content:e.content,image:[n]})})}onSubmit(){let e=this.form.value,t=e.image?.[0]??void 0;if(!e.title||!e.description||!e.content){this.toastService.error("Missing required fields");return}let n={title:e.title,description:e.description,content:e.content,image:t};this.dialogRef.close(n)}onBackClick(){this.dialogRef.close()}};i.\u0275fac=function(t){return new(t||i)(c(ut),c(_t),c(fe),c(k))},i.\u0275cmp=u({type:i,selectors:[["app-update-post-dialog"]],decls:22,vars:5,consts:[["mat-dialog-title","",1,"cpost__title"],["mat-dialog-content","",1,"cpost"],[1,"cpost__form",3,"formGroup"],["appearance","outline"],["formControlName","title","matInput",""],["formControlName","description","matInput",""],["formControlName","content","theme","snow","placeholder","Write your amazing post",1,"quill__editor",3,"modules"],[1,"cpost__upload-image"],["formControlName","image","fileslimit","1","accept","image/*",3,"multiple","maxsize"],["align","end"],["mat-stroked-button","",3,"click"],["type","submit","mat-flat-button","","color","primary",3,"click","disabled"]],template:function(t,n){t&1&&(r(0,"h4",0),p(1,` Update post
`),a(),r(2,"section",1)(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),p(6,"Title"),a(),d(7,"input",4),a(),r(8,"mat-form-field",3)(9,"mat-label"),p(10,"Description"),a(),d(11,"input",5),a(),d(12,"quill-editor",6),r(13,"div",7)(14,"p"),p(15,"Upload your hero image"),a(),d(16,"file-upload",8),a()()(),r(17,"mat-dialog-actions",9)(18,"button",10),h("click",function(){return n.onBackClick()}),p(19," Back "),a(),r(20,"button",11),h("click",function(){return n.onSubmit()}),p(21," Post "),a()()),t&2&&(s(3),m("formGroup",n.form),s(9),m("modules",n.quillConfig),s(4),m("multiple",!1)("maxsize",1048576),s(4),m("disabled",n.form.invalid))},dependencies:[F,B,R,$,ht,vt,Ct,N,j,z,L,q,A,xt,bt,yt,St,Mt,wt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .ql-toolbar.ql-snow{border-radius:6px 6px 0 0;background:#fff;padding:16px;border:1px solid #8e8e94}[_nghost-%COMP%]     .ql-editor{padding:16px;min-height:400px}[_nghost-%COMP%]     .ql-editor p{color:#242424}[_nghost-%COMP%]     .ql-editor.ql-blank:before{font-style:normal}[_nghost-%COMP%]     .ql-container.ql-snow{background:#fff;border-radius:0 0 6px 6px;border:1px solid #8e8e94}[_nghost-%COMP%]     file-upload{background:transparent;outline:1px dashed #cacccb;outline-offset:-5px;border-radius:6px}.cpost__title[_ngcontent-%COMP%]{font-size:20px;font-weight:500}.cpost__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:22px}.cpost__form-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.cpost__upload-image[_ngcontent-%COMP%]{border-radius:6px;background:#fff;padding:16px;border:1px solid #8e8e94}.cpost__upload-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;margin-bottom:12px!important;color:#242424}.quill__editor[_ngcontent-%COMP%]{width:100%;margin-bottom:1.6rem}"],changeDetection:0});let o=i;return o})();var Pe=(()=>{let i=class i{constructor(e,t,n){this.router=e,this.route=t,this.cd=n,this.filter=new Gt,this.destroy$=new D,this.form=new V({searchValue:new P("")})}ngOnInit(){this.patchInitialFormValues(),this.trackFormValueChanges()}ngOnDestroy(){this.destroy$.complete()}patchInitialFormValues(){let e=this.getQueryParameters();this.form.patchValue({searchValue:e.searchValue}),this.filter.emit(e),this.cd.detectChanges()}trackFormValueChanges(){this.form.valueChanges.pipe(Rt(800),Bt(),it(this.destroy$)).subscribe(e=>{let t={searchValue:e.searchValue??void 0};this.saveQueryParameters(t),this.filter.emit(t)})}saveQueryParameters(e){this.router.navigate([],{queryParams:e,queryParamsHandling:"merge"})}getQueryParameters(){let e={searchValue:""},t=this.route.snapshot.queryParams;return te(t,e)}};i.\u0275fac=function(t){return new(t||i)(c(Zt),c(ct),c(st))},i.\u0275cmp=u({type:i,selectors:[["app-posts-filter"]],outputs:{filter:"filter"},decls:13,vars:1,consts:[[1,"filter"],[1,"filter__fields",3,"formGroup"],["appearance","outline"],["matPrefix",""],["matInput","","type","text","formControlName","searchValue"]],template:function(t,n){t&1&&(r(0,"section",0)(1,"mat-accordion")(2,"mat-expansion-panel")(3,"mat-expansion-panel-header")(4,"mat-panel-title"),p(5,"Filters"),a()(),r(6,"form",1)(7,"mat-form-field",2)(8,"mat-label"),p(9,"Search"),a(),r(10,"mat-icon",3),p(11,"search"),a(),d(12,"input",4),a()()()()()),t&2&&(s(6),m("formGroup",n.form))},dependencies:[mt,le,ae,se,pe,B,R,$,ee,N,j,z,L,q,A],styles:["[_nghost-%COMP%]     mat-form-field{width:100%}[_nghost-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.filter[_ngcontent-%COMP%]{margin-top:22px}.filter__fields[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem;align-items:start}"],changeDetection:0});let o=i;return o})();var be=(()=>{let i=class i{constructor(e){this.httpClient=e,this.baseUrl="/api/v1/posts"}getPosts(e,t,n){let f=Et(et(et({},t),n),{teamId:e});return this.httpClient.get(`${this.baseUrl}`,{params:Z(f)})}getLikedPosts(e,t){let n=Et(et({},t),{teamId:e});return this.httpClient.get(`${this.baseUrl}/liked`,{params:Z(n)})}getPost(e,t){return this.httpClient.get(`${this.baseUrl}/${t}`,{params:Z({teamId:e})})}toggleLikePost(e,t){return this.httpClient.post(`${this.baseUrl}/${t}/liked`,{},{params:Z({teamId:e})})}createPost(e,t){let n=new FormData;return t.image&&n.append("image",t.image),n.append("title",t.title),n.append("description",t.description),n.append("content",t.content),this.httpClient.post(`${this.baseUrl}?teamId=${e}`,n)}deletePost(e){return this.httpClient.delete(`${this.baseUrl}/${e}`)}updatePost(e,t){let n=new FormData;return t.image&&n.append("image",t.image),n.append("title",t.title),n.append("description",t.description),n.append("content",t.content),this.httpClient.put(`${this.baseUrl}/${e}`,n)}};i.\u0275fac=function(t){return new(t||i)(H(Kt))},i.\u0275prov=ot({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();var U=(()=>{let i=class i{constructor(e,t){this.postsApiService=e,this.teamsService=t,this.refreshPostsSubject=new D,this.refreshPosts$=this.refreshPostsSubject.asObservable()}getPosts(e,t){return this.teamsService.currentTeam$.pipe(v(n=>n?this.postsApiService.getPosts(n.id,e,t):g(()=>Error("No current team"))))}getLikedPosts(e){return this.teamsService.currentTeam$.pipe(v(t=>t?this.postsApiService.getLikedPosts(t.id,e):g(()=>Error("No current team"))))}createPost(e){return this.teamsService.currentTeam$.pipe(v(t=>t?this.postsApiService.createPost(t.id,e):g(()=>Error("No current team"))))}getPost(e){return this.teamsService.currentTeam$.pipe(v(t=>t?this.postsApiService.getPost(t.id,e):g(()=>Error("No current team"))))}toggleLikePost(e){return this.teamsService.currentTeam$.pipe(v(t=>t?this.postsApiService.toggleLikePost(t.id,e):g(()=>Error("No current team"))))}deletePost(e){return this.postsApiService.deletePost(e)}updatePost(e,t){return this.postsApiService.updatePost(e,t)}triggerRefreshPosts(){this.refreshPostsSubject.next()}};i.\u0275fac=function(t){return new(t||i)(H(be),H(ft))},i.\u0275prov=ot({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();var ye=(()=>{let i=class i{constructor(e,t,n){this.dialog=e,this.postsService=t,this.toastService=n,this.destroy$=new D}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onWriteClick(e){e.preventDefault(),this.dialog.open(ve,{minWidth:"70%",minHeight:"80%"}).afterClosed().pipe(v(n=>n?this.postsService.createPost(n):G),y(n=>(this.toastService.error("Failed to create a post"),g(()=>n))),it(this.destroy$)).subscribe(()=>{this.toastService.open("Successfully created a post"),this.postsService.triggerRefreshPosts()})}};i.\u0275fac=function(t){return new(t||i)(c(gt),c(U),c(k))},i.\u0275cmp=u({type:i,selectors:[["app-posts-toolbar"]],decls:11,vars:0,consts:[[1,"posts__toolbar"],[1,"posts__toolbar-left"],[1,"posts__toolbar-title"],[1,"posts__toolbar-right"],["variant","outline","icon","favorite_border","routerLink","favourites",1,"posts__toolbar-item","favourites"],["icon","edit",1,"posts__toolbar-item",3,"click"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),p(3,"Recent Posts"),a()(),r(4,"div",3)(5,"app-button",4)(6,"p"),p(7,"Favourites"),a()(),r(8,"app-button",5),h("click",function(S){return n.onWriteClick(S)}),r(9,"p"),p(10,"Write"),a()()()())},dependencies:[kt,w],styles:[".posts__toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem;overflow-x:auto;overflow-y:hidden}.posts__toolbar-title[_ngcontent-%COMP%]{font-size:22px;font-weight:500}.posts__toolbar-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}@media (max-width: 40em){.posts__toolbar-left[_ngcontent-%COMP%]{display:none}}.posts__toolbar-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.posts__toolbar-item[_ngcontent-%COMP%]{text-overflow:ellipsis;text-wrap:nowrap}.favourites[_ngcontent-%COMP%]{display:none}@media (max-width: 48em){.favourites[_ngcontent-%COMP%]{display:block}}"],changeDetection:0});let o=i;return o})();var He=["post",""],Se=o=>[o],ke=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["app-post-item","post",""]],inputs:{post:"post"},attrs:He,decls:12,vars:16,consts:[[1,"post"],[1,"post__header"],["size","26","bgColor","#64748B",3,"src","name"],[1,"post__header-author"],[1,"post__header-date"],[1,"post__title",3,"routerLink"],[1,"post__description",3,"routerLink"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1),d(2,"ngx-avatars",2),r(3,"p",3),p(4),a(),r(5,"p",4),p(6),M(7,"date"),a()(),r(8,"h4",5),p(9),a(),r(10,"p",6),p(11),a()()),t&2&&(s(2),K("src","api/v1/files/",n.post.authorTeamMember.avatarId,""),m("name",n.post.authorTeamMember.fullName),s(2),X(n.post.authorTeamMember.fullName),s(2),I(" ",at(7,9,n.post.createdDate,"mediumDate")," "),s(2),m("routerLink",Vt(12,Se,n.post.id)),s(),I(" ",n.post.title," "),s(),m("routerLink",Vt(14,Se,n.post.id)),s(),I(" ",n.post.description," "))},dependencies:[w,dt,lt],styles:[".post[_ngcontent-%COMP%]{padding:16px;border-radius:8px;transition:all .3s ease;background:#fff;border:1px solid #e9e9e9}.post__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:#242424;font-size:14px}.post__title[_ngcontent-%COMP%]{cursor:pointer;margin-top:12px;margin-bottom:8px;font-weight:700;font-size:16px;color:#242424}.post__description[_ngcontent-%COMP%]{cursor:pointer;font-size:14px;color:#242424}"],changeDetection:0});let o=i;return o})();var Qe=(o,i)=>i.id;function Ye(o,i){if(o&1&&d(0,"app-post-item",1),o&2){let l=i.$implicit;m("post",l)}}var Tt=(()=>{let i=class i{constructor(){this.posts=[]}postsTrackBy(e,t){return t.id}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["app-posts-list-view"]],inputs:{posts:"posts"},decls:3,vars:0,consts:[[1,"posts__list"],[3,"post"]],template:function(t,n){t&1&&(r(0,"div",0),Y(1,Ye,1,1,"app-post-item",1,Qe),a()),t&2&&(s(),J(n.posts))},dependencies:[ke],styles:[".posts__list[_ngcontent-%COMP%]{height:100%;overflow-y:auto;display:flex;flex-direction:column;gap:12px}"],changeDetection:0});let o=i;return o})();function Je(o,i){if(o&1){let l=zt();r(0,"button",16),h("click",function(){W(l);let t=C(3);return Q(t.onDeleteClick())}),r(1,"mat-icon"),p(2,"delete_outline"),a()(),r(3,"button",17),h("click",function(){W(l);let t=C(3);return Q(t.onEditClick())}),r(4,"mat-icon"),p(5,"edit_note"),a()()}}function Ke(o,i){o&1&&(r(0,"mat-icon",12),p(1,"favorite"),a())}function Xe(o,i){o&1&&(r(0,"mat-icon"),p(1,"favorite_border"),a())}function Ze(o,i){if(o&1&&d(0,"img",13),o&2){let l=C(3);K("src","/api/v1/files/",l.post.heroImageId,"",Qt)}}function ti(o,i){if(o&1){let l=zt();r(0,"div",1)(1,"h1",2),p(2),a(),r(3,"div",3)(4,"div",4),d(5,"ngx-avatars",5),r(6,"div",6)(7,"p",7),p(8),a(),r(9,"p",8),p(10),M(11,"date"),a()()(),r(12,"div",9),x(13,Je,6,0),r(14,"button",10),h("click",function(){W(l);let t=C(2);return Q(t.onShareClick())}),r(15,"mat-icon"),p(16,"ios_share"),a()(),r(17,"button",11),h("click",function(){W(l);let t=C(2);return Q(t.onLikeClick())}),x(18,Ke,2,0,"mat-icon",12)(19,Xe,2,0,"mat-icon"),a()()(),x(20,Ze,1,2,"img",13),r(21,"div",14),d(22,"p",15),a()()}if(o&2){let l=C(),e=C();s(2),X(e.post.title),s(3),K("src","api/v1/files/",e.post.authorTeamMember.avatarId,""),m("name",e.post.authorTeamMember.fullName),s(3),X(e.post.authorTeamMember.fullName),s(2),I(" ",at(11,11,e.post.createdDate,"mediumDate")," "),s(3),_(13,l.id===e.post.authorTeamMember.id?13:-1),s(5),_(18,e.post.liked?18:-1),s(),_(19,e.post.liked?-1:19),s(),_(20,e.post.heroImageId?20:-1),s(2),m("innerHTML",e.safeHtmlContent,Wt)}}function ei(o,i){o&1&&(r(0,"div")(1,"p"),p(2,"Post not found"),a()())}function ii(o,i){if(o&1&&(r(0,"section",0),x(1,ti,23,14,"div",1)(2,ei,3,0,"div"),a()),o&2){let l=C();s(),_(1,l.post&&!l.loading?1:-1),s(),_(2,!l.post&&!l.loading?2:-1)}}var Oe=(()=>{let i=class i{constructor(e,t,n,f,S,Fe,je,ze,Le){this.route=e,this.location=t,this.postsService=n,this.toastService=f,this.cd=S,this.sanitizer=Fe,this.clipboard=je,this.teamsService=ze,this.dialog=Le,this.post=null,this.loading=!0,this.currentTeamMember$=this.teamsService.currentTeamMember$}ngOnInit(){this.loadPostByUrl()}loadPostByUrl(){let e=this.route.snapshot.paramMap.get("postId"),t=Number(e);if(isNaN(t)){this.toastService.error("The post id is invalid");return}this.postsService.getPost(t).pipe(y(n=>(this.toastService.error("Failed to load post"),g(()=>n))),It(()=>{this.loading=!1,this.cd.markForCheck()}),T(1)).subscribe(n=>{this.post=n})}onLikeClick(){this.post&&this.postsService.toggleLikePost(this.post.id).pipe(y(e=>(this.toastService.error("Failed to toggle like post"),g(()=>e))),T(1)).subscribe(()=>{this.post&&(this.post.liked=!this.post.liked,this.cd.markForCheck())})}onShareClick(){let e=window.location.href;this.clipboard.copy(e),this.toastService.open("Link saved to clipboard")}onDeleteClick(){this.post&&this.postsService.deletePost(this.post.id).pipe(y(e=>(this.toastService.error("Failed to delete post"),g(()=>e))),T(1)).subscribe(()=>{this.toastService.open("Successfully deleted post"),this.location.back()})}onEditClick(){if(!this.post)return;this.dialog.open(xe,{data:{post:this.post},minWidth:"90%",minHeight:"90%"}).afterClosed().pipe($t(t=>!!t),v(t=>this.post?this.postsService.updatePost(this.post.id,t).pipe(y(n=>(this.toastService.error("Failed to update post"),g(()=>n)))):G),v(()=>this.post?this.postsService.getPost(this.post.id).pipe(y(t=>(this.toastService.error("Failed to load post"),g(()=>t))),It(()=>{this.loading=!1,this.cd.markForCheck()})):G),T(1)).subscribe(t=>{t&&(this.post=t,this.toastService.open("Successfully updated post"))})}get safeHtmlContent(){return this.post?this.sanitizer.sanitize(Ht.HTML,this.post.content):""}};i.\u0275fac=function(t){return new(t||i)(c(ct),c(Yt),c(U),c(k),c(st),c(Xt),c(de),c(ft),c(gt))},i.\u0275cmp=u({type:i,selectors:[["app-post"]],decls:2,vars:3,consts:[[1,"page","post__wrapper"],[1,"post__main"],[1,"post__title"],[1,"post__details"],[1,"post__user"],["size","40","bgColor","#64748B",3,"src","name"],[1,"post__user-right"],[1,"post__user-name"],[1,"post__user-published"],[1,"post__toolbar"],["matTooltip","Share",3,"click"],["matTooltip","Like",3,"click"],[1,"liked"],["loading","eager","alt","Hero Image",1,"post__hero-image",3,"src"],[1,"post__content"],[3,"innerHTML"],["matTooltip","Delete",3,"click"],["matTooltip","Edit",3,"click"]],template:function(t,n){if(t&1&&(x(0,ii,3,2,"section",0),M(1,"async")),t&2){let f;_(0,(f=E(1,1,n.currentTeamMember$))?0:-1,f)}},dependencies:[mt,ie,dt,pt,lt],styles:['[_nghost-%COMP%]     mark{background-color:#e8f3e8;color:currentcolor}.post__wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}.post__main[_ngcontent-%COMP%]{max-width:740px;background:#fff;border-radius:12px;padding:34px;border:1px solid #ebeaea}@media (max-width: 48em){.post__main[_ngcontent-%COMP%]{padding:22px}}.post__title[_ngcontent-%COMP%]{font-size:36px;font-weight:700;color:#242424;line-height:46px}@media (max-width: 48em){.post__title[_ngcontent-%COMP%]{font-size:32px;line-height:38px}}@media (max-width: 40em){.post__title[_ngcontent-%COMP%]{font-size:26px;line-height:34px}}.post__details[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:26px}.post__toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.post__toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px;width:22px;height:22px}.post__user[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px}.post__user-name[_ngcontent-%COMP%]{font-weight:500}.post__user-published[_ngcontent-%COMP%]{color:#797979;margin-top:-2px!important;font-size:12px}.post__hero-image[_ngcontent-%COMP%]{margin-top:26px;width:100%;height:auto;object-fit:contain;background:#fff}.post__content[_ngcontent-%COMP%]{font-size:18px;line-height:28px;margin-top:26px;color:#242424;font-family:"Source Serif 4",serif}.liked[_ngcontent-%COMP%]{color:red!important}'],changeDetection:0});let o=i;return o})();var Te=(()=>{let i=class i{constructor(){this.posts=Array(10).fill("posts")}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u({type:i,selectors:[["app-posts-favorite"]],decls:8,vars:1,consts:[[1,"page","posts__wrapper"],[1,"fav-posts__header"],[1,"fav-posts__title"],["variant","outline","routerLink","../"],[1,"fav-posts__content"],[3,"posts"]],template:function(t,n){t&1&&(r(0,"section",0)(1,"div",1)(2,"h1",2),p(3,"Favorite Posts"),a(),r(4,"app-button",3),p(5,"Return Back"),a()(),r(6,"div",4),d(7,"app-posts-list-view",5),a()()),t&2&&(s(7),m("posts",n.posts))},dependencies:[kt,w,Tt],styles:["h1[_ngcontent-%COMP%]{font-size:22px;font-weight:500}.fav-posts__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:22px}.fav-posts__title[_ngcontent-%COMP%]{font-size:22px;font-weight:500}.fav-posts__content[_ngcontent-%COMP%]{margin-top:22px}"],changeDetection:0});let o=i;return o})();var Ee=()=>({height:"120px","border-radius":"8px"});function oi(o,i){if(o&1&&d(0,"app-posts-list-view",10),o&2){let l=C(2);m("posts",l.data)}}function ni(o,i){o&1&&(r(0,"div",11),p(1,"Not posts found"),a())}function ri(o,i){if(o&1&&x(0,oi,1,1,"app-posts-list-view",10)(1,ni,2,0),o&2){let l=C();_(0,l.data.length>0?0:1)}}function ai(o,i){o&1&&(r(0,"div",12),d(1,"ngx-skeleton-loader",13),a()),o&2&&(s(),m("theme",Lt(1,Ee)))}function si(o,i){if(o&1&&(r(0,"div",8),Y(1,ai,2,2,"div",12,jt),a()),o&2){let l=C(2);s(),J(l.skeletonArray)}}function pi(o,i){o&1&&(r(0,"div",9)(1,"h1",14),p(2,"404"),a(),r(3,"div",15)(4,"h2",16),p(5," Oops.. "),d(6,"br"),p(7," We couldn't find a posts you are looking for. "),a(),r(8,"button",17)(9,"a",18),p(10,"Return Back"),a()()()())}function li(o,i){if(o&1&&x(0,ri,2,1)(1,si,3,0,"div",8)(2,pi,11,0,"div",9),o&2){let l=i;_(0,l.data?0:-1),s(),_(1,l.loading?1:-1),s(),_(2,l.error?2:-1)}}function ci(o,i){if(o&1&&d(0,"app-posts-list-view",10),o&2){let l=C(2);m("posts",l.data)}}function mi(o,i){o&1&&(r(0,"div",11),p(1,"Not posts found"),a())}function di(o,i){if(o&1&&(r(0,"div",3),x(1,ci,1,1,"app-posts-list-view",10)(2,mi,2,0),a()),o&2){let l=C();s(),_(1,l.data.length>0?1:2)}}function fi(o,i){o&1&&(r(0,"div",20),d(1,"ngx-skeleton-loader",13),a()),o&2&&(s(),m("theme",Lt(1,Ee)))}function ui(o,i){if(o&1&&(r(0,"div",19),Y(1,fi,2,2,"div",20,jt),a()),o&2){let l=C(2);s(),J(l.skeletonArray)}}function _i(o,i){if(o&1&&x(0,di,3,1,"div",3)(1,ui,3,0,"div",19),o&2){let l=i;_(0,l.data?0:-1),s(),_(1,l.loading?1:-1)}}var De=(()=>{let i=class i{constructor(e,t){this.postsService=e,this.toastService=t,this.skeletonArray=new Array(10).fill(0),this.filter={},this.pagination=ne,this.posts$=this.postsService.refreshPosts$.pipe(Ft([]),v(()=>this.loadPosts())),this.likedPosts$=this.postsService.refreshPosts$.pipe(Ft([]),v(()=>this.loadLikedPosts()))}ngOnInit(){this.postsService.triggerRefreshPosts()}loadPosts(){let e={size:this.pagination.size,page:this.pagination.page};return this.postsService.getPosts(this.filter,e).pipe(Ut(t=>{this.pagination.page=t.number,this.pagination.size=t.size,this.pagination.totalElements=t.totalElements,this.pagination.totalPages=t.totalPages}),Dt(t=>t.content),y(t=>(this.toastService.open("Failed to get posts"),g(()=>t))))}loadLikedPosts(){let e={size:25,page:0};return this.postsService.getLikedPosts(e).pipe(Dt(t=>t.content),y(t=>(this.toastService.open("Failed to get favourite posts"),g(()=>t))))}onPage(e){this.pagination.size=e.size,this.pagination.page=e.page,this.postsService.triggerRefreshPosts()}onFilter(e){this.filter=e,this.postsService.triggerRefreshPosts()}};i.\u0275fac=function(t){return new(t||i)(c(U),c(k))},i.\u0275cmp=u({type:i,selectors:[["app-posts"]],decls:16,vars:11,consts:[[1,"page","posts__wrapper"],[1,"posts__main"],[3,"filter"],[1,"posts__content"],[3,"page","pagination"],[1,"posts__sidebar"],[1,"posts__content-header"],[1,"posts__content-header-title"],[1,"posts__loading-page"],[1,"posts__error","page"],[3,"posts"],[1,"posts__empty"],[1,"posts__loading-element"],["count","1","appearance","line",3,"theme"],[1,"posts__error-title"],[1,"posts__error-content"],[1,"posts__error-subtitle"],["mat-flat-button","","color","primary","routerLink","/hub/overview"],["routerLink","/hub/overview"],[1,"likedPosts__loading-page"],[1,"likedPosts__loading-column"]],template:function(t,n){if(t&1&&(r(0,"section",0)(1,"div",1),d(2,"app-posts-toolbar"),r(3,"app-posts-filter",2),h("filter",function(S){return n.onFilter(S)}),a(),r(4,"div",3),x(5,li,3,3),M(6,"withLoading"),M(7,"async"),a(),r(8,"app-paginator",4),h("page",function(S){return n.onPage(S)}),a()(),r(9,"div",5)(10,"div",6)(11,"h1",7),p(12,"Favorites"),a()(),x(13,_i,2,2),M(14,"withLoading"),M(15,"async"),a()()),t&2){let f,S;s(5),_(5,(f=E(7,5,E(6,3,n.posts$)))?5:-1,f),s(3),m("pagination",n.pagination),s(5),_(13,(S=E(15,9,E(14,7,n.likedPosts$)))?13:-1,S)}},dependencies:[F,w,re,oe,Tt,ye,Pe,pt,ce],styles:[".posts[_ngcontent-%COMP%]   app-paginator[_ngcontent-%COMP%]{margin-bottom:20px}.posts__wrapper[_ngcontent-%COMP%]{height:100%;display:flex}@media (max-width: 48em){.posts__wrapper[_ngcontent-%COMP%]{display:inline-block}}.posts__empty[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;font-size:14px;font-weight:400;color:#bdbdbd;text-transform:capitalize}.posts__main[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;flex:1;padding-right:22px}@media (max-width: 48em){.posts__main[_ngcontent-%COMP%]{border-right:none;padding-right:unset}}.posts__content[_ngcontent-%COMP%]{margin-top:22px;flex:1}.posts__content-header-title[_ngcontent-%COMP%]{font-size:22px;font-weight:500}.posts__sidebar[_ngcontent-%COMP%]{height:100%;min-width:300px;max-width:500px;display:none;padding-left:22px;border-left:1px solid #e2e1e1}@media (min-width: 48em){.posts__sidebar[_ngcontent-%COMP%]{display:block}}.posts__loading-page[_ngcontent-%COMP%]{display:grid;grid-template-rows:none;overflow-x:auto}.posts__error[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;height:100%}.posts__error-content[_ngcontent-%COMP%]{z-index:10;display:flex;flex-direction:column;align-items:center}.posts__error-title[_ngcontent-%COMP%]{color:#d8d7d7;font-size:280px;font-weight:600;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:5;opacity:.25}@media screen and (max-width: 48em){.posts__error-title[_ngcontent-%COMP%]{font-size:180px}}.posts__error-subtitle[_ngcontent-%COMP%]{color:#000;font-size:26px;margin-bottom:26px;text-align:center;line-height:1.4}@media screen and (max-width: 48em){.posts__error-subtitle[_ngcontent-%COMP%]{font-size:20px}}.likedPosts__loading-element[_ngcontent-%COMP%]{z-index:10;display:flex;flex-direction:column}"],changeDetection:0});let o=i;return o})();var gi=[{path:"",component:De},{path:":postId",component:Oe},{path:"favourites",component:Te}],Ie=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=rt({type:i}),i.\u0275inj=nt({imports:[Nt.forChild(gi),Nt]});let o=i;return o})();var Do=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=rt({type:i}),i.\u0275inj=nt({imports:[Jt,me,Ie,ue.forRoot()]});let o=i;return o})();export{Do as PostsModule};
