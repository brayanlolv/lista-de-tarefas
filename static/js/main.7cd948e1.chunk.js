(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwklEQVR4nO3VwQ0BQRSH8Ulog22ECrDuVMCZhAaogAqogApsBVRAB3skEp+MCsz/PRzWd543v8xcXgj/3gzoA3n4dsANuH7q8jxeTnpxpqeABX4Vv4IPyS+vVkDp8M2lAp8c4KMC7x3gnQKvHeCVAs8d4JkCDx3ggQK3HeCWAjcd4IYC14C7AY2z9WQ4BlwM8DmoYVsW+nIAtgZ4Y4GXBnhhgccGeGSBuwa4Y4Ez4CGgcSaT4RgwTdzN8ezkNfyv0j0BNVpVqTyHFRkAAAAASUVORK5CYII="},22:function(e,t,a){e.exports=a(35)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=(a(31),a(3)),i=(a(32),a(1)),u=a(6);var s=function(e){var t=Object(i.m)(),a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],s=r[1],m=Object(n.useState)(""),d=Object(o.a)(m,2),A=d[0],E=d[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),v=f[0],g=f[1];return l.a.createElement("form",{id:"criar-task"},l.a.createElement(u.a,{to:"/lista-de-tarefas-react"},l.a.createElement("a",null,l.a.createElement("div",{id:"fundo"}))),l.a.createElement("div",{id:"form-criando"},"criar tarefa",l.a.createElement("input",{type:"text",placeholder:"prazo",name:"prazo",value:c,onChange:function(e){s(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"titulo",name:"titulo",onChange:function(e){E(e.target.value)}}),l.a.createElement("input",{type:"textarea",placeholder:"descri\xe7\xe3o",name:"descricao",onChange:function(e){g(e.target.value)}}),l.a.createElement("input",{type:"button",value:"enviar",onClick:function(){var e=JSON.parse(localStorage.getItem("tarefas"));if(null==e&&(e={tasks:[]}),![c,A,v].includes("",null,void 0)){var a={prazo:c,titulo:A,descricao:v};e.tasks.push(a),localStorage.setItem("tarefas",JSON.stringify(e)),console.log([c,A,v]),t("/lista-de-tarefas-react")}}})))},m=(a(33),a(34),a(21)),d=a.n(m);var A=function(e,t,a){return l.a.createElement("div",{class:"taskGeneral"},l.a.createElement("div",{class:"taskelements"},l.a.createElement("div",{class:"deadline"},e),l.a.createElement("div",{class:"title"},l.a.createElement("div",null,t)),l.a.createElement("div",{class:"buttons",onClick:function(){var e=E();console.log(e);var a,n=-1;e.map(function(e){n++,e.titulo===t&&(a=n)}),e.splice(a,1);var l={tasks:e};localStorage.setItem("tarefas",JSON.stringify(l)),window.location.reload(!1)}},l.a.createElement("div",null,l.a.createElement("img",{src:d.a,alt:""})))),l.a.createElement(function(){return l.a.createElement("div",{class:"descricao"},l.a.createElement("div",null," ",a))},null))};function E(){var e=JSON.parse(localStorage.getItem("tarefas"));return null===e?[]:e.tasks}var p=function(){return l.a.createElement("div",{id:"container"},l.a.createElement("header",null,l.a.createElement("h1",null,"Lista de tarefas")),l.a.createElement("div",{id:"content"},l.a.createElement(function(){var e=E(),t=[];return e.map(function(e){t.push(A(e.prazo,e.titulo,e.descricao))}),t},null),l.a.createElement(u.a,{to:"/form"},l.a.createElement("a",null,l.a.createElement("button",{id:"addTaskbtn"},"+")))),l.a.createElement("div",{id:"footer"},l.a.createElement("input",{type:"button",value:"Limpar Tudo",onClick:function(){localStorage.removeItem("tarefas"),window.location.reload(!1)}})))},f="/lista-de-tarefas",v=Object(u.c)([{path:f+"/",element:l.a.createElement(p,null)},{path:f+"/form",element:l.a.createElement("div",null," ",l.a.createElement(p,null)," ",l.a.createElement(s,null))},{path:"/lista-de-tarefas/teste",element:l.a.createElement("div",null,"teste")}]);c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u.b,{router:v})))}},[[22,1,2]]]);
//# sourceMappingURL=main.7cd948e1.chunk.js.map