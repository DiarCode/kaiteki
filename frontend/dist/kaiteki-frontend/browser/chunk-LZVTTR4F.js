import{a as T}from"./chunk-SSMAG4H5.js";import{N as j,b as f,o as A}from"./chunk-XOZLSJZG.js";import{F as u,K as g,O as E,X as $,Y as a,aa as o,ea as c,f as v,g as m,ja as h,k as l,o as s,s as d}from"./chunk-IF3PND7Q.js";import{a as b}from"./chunk-MON7YFGF.js";var p=function(i){return i.ACCESS_TOKEN="ACCESS_TOKEN",i.REFRESH_TOKEN="REFRESH_TOKEN",i}(p||{}),C=(()=>{let r=class r{saveTokens(e){localStorage.setItem(p.ACCESS_TOKEN,e.accessToken),localStorage.setItem(p.REFRESH_TOKEN,e.accessToken)}getTokens(){let e=localStorage.getItem(p.ACCESS_TOKEN),t=localStorage.getItem(p.REFRESH_TOKEN);return!e||!t?null:{accessToken:e,refreshToken:t}}};r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=c({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var I=(()=>{let r=class r{constructor(e,t,n,k){this.httpClient=e,this.toastService=t,this.tokensService=n,this.router=k,this.baseURL="api/v1/auth",this.user=new m(null),this.isAuthLoading=new m(!0),this.user$=this.user.asObservable(),this.isAuthLoading$=this.isAuthLoading.asObservable()}ngOnDestroy(){this.user.next(null),this.user.complete(),this.isAuthLoading.next(!1),this.isAuthLoading.complete()}login(e){return this.httpClient.post(`${this.baseURL}/login`,e).pipe(u(()=>this.handleErrorAndReturnEmpty("Failed to login")),d(t=>this.handleTokens(t)),a(()=>this.autoLogin()),o(t=>t&&this.router.navigate(["/hub"])))}signup(e){return this.httpClient.post(`${this.baseURL}/register`,e).pipe(u(()=>this.handleErrorAndReturnEmpty("Failed to signup")),o(()=>this.router.navigate(["/auth/verification"])))}autoLogin(){return this.httpClient.get("/api/v1/users/current").pipe(o(()=>this.isAuthLoading.next(!0)),d(e=>this.handleAutoLogin(e)),u(e=>e.status!==401?this.handleAutoLoginError(e):s(()=>e)),E(()=>this.isAuthLoading.next(!1)))}logout(){return this.httpClient.post(`${this.baseURL}/logout`,{}).pipe(u(()=>this.handleErrorAndReturnEmpty("Failed to logout")),o(()=>{localStorage.clear(),window.location.href="/"}))}refreshToken(e){return this.httpClient.post(`${this.baseURL}/refresh-token`,{refreshToken:e})}changeAuthLoading(e){this.isAuthLoading.next(e)}checkEmailVerification(e){return this.httpClient.post(`${this.baseURL}/verification/${e}`,{})}handleTokens(e){return e?(this.tokensService.saveTokens(e),!0):(this.toastService.open("Failed to login/signup"),!1)}handleAutoLogin(e){return e?(this.user.next(e),!0):!1}handleAutoLoginError(e){return this.isAuthLoading.next(!1),this.toastService.open("Failed to get current user"),s(()=>e)}handleErrorAndReturnEmpty(e){return this.toastService.open(e),s(()=>e)}};r.\u0275fac=function(t){return new(t||r)(h(f),h(T),h(C),h(A))},r.\u0275prov=c({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var L=(()=>{let r=class r{constructor(e){this.httpClient=e,this.baseUrl="/api/v1/teams"}getTeams(){return this.httpClient.get(this.baseUrl)}getTeamById(e){return this.httpClient.get(`${this.baseUrl}/${e}`)}createTeam(e){return this.httpClient.post(this.baseUrl,e)}updateTeam(e,t){let n=new FormData;return t.logo?n.append("logo",t.logo):t.description?n.append("description",t.description):t.name&&n.append("name",t.name),this.httpClient.put(`${this.baseUrl}/${e}`,t)}deleteTeam(e){return this.httpClient.delete(`${this.baseUrl}/${e}`)}deleteTeamMember(e,t){return this.httpClient.delete(`${this.baseUrl}/${e}/members/${t}`)}getTeamInvitation(e){return this.httpClient.get(`${this.baseUrl}/invitations/${e}`)}searchTeamMembers(e,t,n){return this.httpClient.get(`${this.baseUrl}/${e}/members`,{params:j(b(b({},t),n))})}getAllTeamMembers(e,t){return this.httpClient.get(`${this.baseUrl}/${e}/members/all`,{params:{excludeCurrentMember:t}})}getTeamMemberByUserId(e,t){return this.httpClient.get(`${this.baseUrl}/${e}/members/user/${t}`)}joinTeamByLink(e){return this.httpClient.post(`${this.baseUrl}/invitations/join/${e}`,{})}};r.\u0275fac=function(t){return new(t||r)(h(f))},r.\u0275prov=c({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var K=(()=>{let r=class r{constructor(e,t,n){this.teamsApiService=e,this.toastService=t,this.authService=n,this.refetchTeamsSubject=new v,this.currentTeamSubject=new m(null),this.currentTeamMemberSubject=new m(null),this.refetchTeams$=this.refetchTeamsSubject.asObservable(),this.currentTeam$=this.currentTeamSubject.asObservable(),this.currentTeamMember$=this.currentTeamMemberSubject.asObservable(),this.teams$=this.refetchTeams$.pipe($([]),a(()=>this.getTeams()))}refetchTeams(){this.refetchTeamsSubject.next()}refetchCurrentTeam(){this.currentTeam$.pipe(a(e=>e?this.teamsApiService.getTeamById(e.id):s(()=>Error("No current team"))),g(1),u(e=>(this.toastService.error("Failed to refetch current team"),s(()=>e)))).subscribe(e=>{this.setCurrentTeam(e)})}getTeams(){return this.teamsApiService.getTeams()}updateTeam(e){return this.currentTeam$.pipe(a(t=>t?this.teamsApiService.updateTeam(t.id,e):s(()=>Error("No current team"))))}createTeam(e){return this.teamsApiService.createTeam(e)}getTeamById(e){return this.teamsApiService.getTeamById(e)}deleteTeamMember(e){return this.currentTeam$.pipe(o(t=>{t||s(()=>Error("No current team"))}),a(t=>t?this.teamsApiService.deleteTeamMember(t.id,e):l))}deleteTeam(){return this.currentTeam$.pipe(o(e=>{e||s(()=>Error("No current team"))}),a(e=>e?this.teamsApiService.deleteTeam(e.id):l))}searchTeamMembers(e,t){return this.currentTeam$.pipe(o(n=>{n||s(()=>Error("No current team"))}),a(n=>n?this.teamsApiService.searchTeamMembers(n.id,e,t):l))}getAllTeamMembers(){return this.currentTeam$.pipe(o(e=>{e||s(()=>Error("No current team"))}),a(e=>e?this.teamsApiService.getAllTeamMembers(e.id,!1):l))}getAllTeamMembersExceptCurrent(){return this.currentTeam$.pipe(o(e=>{e||s(()=>Error("No current team"))}),a(e=>e?this.teamsApiService.getAllTeamMembers(e.id,!0):l))}getTeamInvitation(){return this.currentTeam$.pipe(a(e=>e?this.teamsApiService.getTeamInvitation(e.id):s(()=>Error("No current team"))),u(()=>(this.toastService.open("Failed to get team link"),s(()=>Error("No current team")))))}joinTeamByLink(e){return this.teamsApiService.joinTeamByLink(e)}setCurrentTeam(e){e?(this.currentTeamSubject.next(e),this.authService.user$.pipe(a(t=>t&&e?this.teamsApiService.getTeamMemberByUserId(e.id,t.id):s(()=>Error("No current user"))),g(1)).subscribe(t=>{this.currentTeamMemberSubject.next(t)})):(this.currentTeamSubject.next(null),this.currentTeamMemberSubject.next(null))}};r.\u0275fac=function(t){return new(t||r)(h(L),h(T),h(I))},r.\u0275prov=c({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();export{C as a,I as b,K as c};
