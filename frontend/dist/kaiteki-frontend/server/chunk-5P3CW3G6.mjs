import './polyfills.server.mjs';
import{b as h}from"./chunk-IWV7G257.mjs";import{X as a,Y as c,ea as i,f as o,ja as s}from"./chunk-JAB3SG4D.mjs";var p=(()=>{let t=class t{constructor(r){this.httpClient=r,this.baseUrl="/api/v1/integrations"}getUserIntegrations(){return this.httpClient.get(this.baseUrl)}getUserIntegrationCredentials(){return this.httpClient.get(`${this.baseUrl}/credentials`)}};t.\u0275fac=function(n){return new(n||t)(s(h))},t.\u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var m=(()=>{let t=class t{constructor(r){this.integrationsApiService=r,this.refreshSubject=new o,this.refresh$=this.refreshSubject.asObservable(),this.integrations$=this.refresh$.pipe(a(null),c(()=>this.getUserIntegrations()))}getUserIntegrations(){return this.integrationsApiService.getUserIntegrations()}getUserIntegrationCredentials(){return this.integrationsApiService.getUserIntegrationCredentials()}refreshIntegrations(){this.refreshSubject.next()}};t.\u0275fac=function(n){return new(n||t)(s(p))},t.\u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{m as a};
