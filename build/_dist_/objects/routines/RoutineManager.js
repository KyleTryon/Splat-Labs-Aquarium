import r from"./fish/RWander.js";import o from"./fish/RHuntFood.js";import e from"./fish/RDropLoot.js";export default class h{constructor(i){this.routines=[],this.fish=i.fish,this.routines.push(new r({fish:this.fish}),new o({fish:this.fish}),new e({fish:this.fish}))}run(){this.routines.forEach(t=>{t.calcPriority()});let i=this.routines.sort((t,s)=>t.priority<s.priority?1:-1);this.activeRoutine=i[0],this.activeRoutine.execute()}}
