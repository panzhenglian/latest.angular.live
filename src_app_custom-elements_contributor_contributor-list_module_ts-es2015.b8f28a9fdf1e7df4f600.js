(self.webpackChunkangular_cn=self.webpackChunkangular_cn||[]).push([["src_app_custom-elements_contributor_contributor-list_module_ts"],{9211:function(t,n,o){"use strict";o.r(n),o.d(n,{ContributorListModule:function(){return A}});var e=o(1116),r=o(4431),i=o(5366),c=o(9996),s=o(7296),u=o(1374),p=o(2693);const a=u.bL+"contributors.json",l=["Angular","Collaborators","GDE"];let f=(()=>{class t{constructor(t){this.http=t,this.contributors=this.getContributors()}getContributors(){const t=this.http.get(a).pipe((0,c.U)(t=>{const n={};return Object.keys(t).forEach(o=>{const e=t[o];e.groups.forEach(t=>{(n[t]||(n[t]=[])).push(e)})}),n}),(0,c.U)(t=>Object.keys(t).map(n=>{const o=l.indexOf(n);return{name:n,order:-1===o?l.length:o,contributors:t[n].sort(g)}}).sort(d)),(0,s.C)());return t.connect(),t}}return t.\u0275fac=function(n){return new(n||t)(i.LFG(p.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac}),t})();function g(t,n){return t.name.toUpperCase()>n.name.toUpperCase()?1:-1}function d(t,n){return t.order===n.order?t.name>n.name?1:-1:t.order>n.order?1:-1}var b=o(2981);function m(t,n){1&t&&(i.TgZ(0,"a",7),i._uU(1," View Bio "),i.qZA())}function h(t,n){if(1&t&&(i.TgZ(0,"a",8),i.NdJ("click",function(t){return t.stopPropagation()}),i._UZ(1,"mat-icon",9),i.qZA()),2&t){const t=i.oxw();i.MGl("href","https://twitter.com/",t.person.twitter,"",i.LSH)}}function k(t,n){if(1&t&&(i.TgZ(0,"a",8),i.NdJ("click",function(t){return t.stopPropagation()}),i.TgZ(1,"mat-icon",10),i._uU(2,"link"),i.qZA(),i.qZA()),2&t){const t=i.oxw();i.s9C("href",t.person.website,i.LSH)}}function Z(t,n){if(1&t){const t=i.EpF();i.TgZ(0,"div",11),i.NdJ("click",function(){i.CHM(t);const n=i.oxw();return n.flipCard(n.person)})("keyup.enter",function(){i.CHM(t);const n=i.oxw();return n.flipCard(n.person)}),i.TgZ(1,"h3"),i._uU(2),i.qZA(),i.TgZ(3,"p",12),i._uU(4),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(2),i.Oqu(t.person.name),i.xp6(2),i.Oqu(t.person.bio)}}const w=function(t){return{flipped:t}};let C=(()=>{class t{constructor(){this.noPicture="_no-one.png",this.pictureBase=u.bL+"images/bios/"}flipCard(t){t.isFlipped=!t.isFlipped}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["aio-contributor"]],inputs:{person:"person"},decls:10,vars:10,consts:[[1,"contributor-card",3,"ngClass"],[1,"card-front",3,"click","keyup.enter"],[1,"contributor-image"],[1,"contributor-info"],["mat-button","","class","info-item",4,"ngIf"],["mat-icon-button","","class","info-item icon","target","_blank",3,"href","click",4,"ngIf"],["class","card-back",3,"click","keyup.enter",4,"ngIf"],["mat-button","",1,"info-item"],["mat-icon-button","","target","_blank",1,"info-item","icon",3,"href","click"],["svgIcon","logos:twitter"],[1,"link-icon"],[1,"card-back",3,"click","keyup.enter"],[1,"contributor-bio"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.NdJ("click",function(){return n.flipCard(n.person)})("keyup.enter",function(){return n.flipCard(n.person)}),i.TgZ(2,"h3"),i._uU(3),i.qZA(),i.TgZ(4,"div",2),i.TgZ(5,"div",3),i.YNc(6,m,2,0,"a",4),i.YNc(7,h,2,1,"a",5),i.YNc(8,k,3,1,"a",5),i.qZA(),i.qZA(),i.qZA(),i.YNc(9,Z,5,2,"div",6),i.qZA()),2&t&&(i.Q6J("ngClass",i.VKq(8,w,n.person.isFlipped)),i.xp6(3),i.Oqu(n.person.name),i.xp6(1),i.Udp("background-image","url("+n.pictureBase+(n.person.picture||n.noPicture)+")"),i.xp6(2),i.Q6J("ngIf",n.person.bio),i.xp6(1),i.Q6J("ngIf",n.person.twitter),i.xp6(1),i.Q6J("ngIf",n.person.website),i.xp6(1),i.Q6J("ngIf",n.person.isFlipped))},directives:[e.mk,e.O5,r.Hw],encapsulation:2}),t})();function x(t,n){if(1&t){const t=i.EpF();i.TgZ(0,"a",3),i.NdJ("click",function(){const n=i.CHM(t).$implicit;return i.oxw().selectGroup(n)})("keyup.enter",function(){const n=i.CHM(t).$implicit;return i.oxw().selectGroup(n)}),i._uU(1),i.qZA()}if(2&t){const t=n.$implicit,o=i.oxw();i.ekj("selected",t==o.selectedGroup.name),i.xp6(1),i.Oqu(t)}}function v(t,n){1&t&&i._UZ(0,"aio-contributor",7),2&t&&i.Q6J("person",n.$implicit)}function q(t,n){if(1&t&&(i.TgZ(0,"section",4),i.TgZ(1,"div",5),i.YNc(2,v,1,1,"aio-contributor",6),i.qZA(),i.qZA()),2&t){const t=i.oxw();i.xp6(2),i.Q6J("ngForOf",t.selectedGroup.contributors)}}let _=(()=>{class t{constructor(t,n){this.contributorService=t,this.locationService=n}ngOnInit(){const t=this.locationService.search().group||"";this.contributorService.contributors.subscribe(n=>{this.groups=n,this.groupNames=n.map(t=>t.name),this.selectGroup(t)})}selectGroup(t){t=t.toLowerCase(),this.selectedGroup=this.groups.find(n=>n.name.toLowerCase()===t)||this.groups[0],this.locationService.setSearch("",{group:this.selectedGroup.name})}}return t.\u0275fac=function(n){return new(n||t)(i.Y36(f),i.Y36(b.a))},t.\u0275cmp=i.Xpm({type:t,selectors:[["aio-contributor-list"]],decls:3,vars:2,consts:[[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click","keyup.enter",4,"ngFor","ngForOf"],["class","grid-fluid",4,"ngIf"],[1,"button","mat-button","filter-button",3,"click","keyup.enter"],[1,"grid-fluid"],[1,"contributor-group"],[3,"person",4,"ngFor","ngForOf"],[3,"person"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.YNc(1,x,2,3,"a",1),i.qZA(),i.YNc(2,q,3,1,"section",2)),2&t&&(i.xp6(1),i.Q6J("ngForOf",n.groupNames),i.xp6(1),i.Q6J("ngIf",n.selectedGroup))},directives:[e.sg,e.O5,C],encapsulation:2}),t})(),A=(()=>{class t{constructor(){this.customElementComponent=_}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({providers:[f],imports:[[e.ez,r.Ps]]}),t})()}}]);
//# sourceMappingURL=src_app_custom-elements_contributor_contributor-list_module_ts-es2015.b8f28a9fdf1e7df4f600.js.map