!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i=[{id:"1553293253068",level:5,text:"What types of values do variables have in javascript?",answers:[{id:1,text:"Number"},{id:2,text:"Null"},{id:3,text:"String"},{id:4,text:"Object"},{id:5,text:"Array"},{id:6,text:"Function"}]},{id:"1558970574586",level:5,text:"In JavaScript variable type depends on its value?",answers:[{id:1,text:"True"},{id:2,text:"False"}]},{id:"1553293262031",level:5,text:"If a variable is declared but no value is assigned to it, what is the value of that variable?",q:()=>{console.log(void 0)},answers:[{id:1,text:"null",type:"js"},{id:2,text:"undefined",type:"js"},{id:3,text:'""',type:"js"},{id:4,text:"0",type:"js"}]},{id:"1553293492162",level:5,text:"Will this print 'yes'?",q:'function name(){if("yes" == \'yes\'){console.log("yes");}}name();',answers:[{id:1,text:"Yes"},{id:2,text:"No"}]},{id:"1558970753787",level:5,text:"Can we use any variable as conditions to an if statement?",q:()=>{},answers:[{id:1,text:"True"},{id:2,text:"False"}]},{id:"1553297506471",level:5,text:"Can we use numbers as conditions for 'if' statements?",q:"/*eg: */\n if (10) { /*doSomething*/ }",answers:[{id:1,text:"True"},{id:2,text:"False"}]},{id:"1553297760651",level:5,text:'The ! operator checks whether its operand is "falsy". Which of the following conditions are TRUE?',answers:[{id:1,text:"!false",type:"js"},{id:2,text:"!0",type:"js"},{id:3,text:"!true",type:"js"},{id:4,text:"!!false",type:"js"},{id:5,text:'!""',type:"js"}]},{id:"1553297760658",level:5,text:'The ! operator checks whether its operand is "falsy". Which of the following conditions are TRUE?',answers:[{id:1,text:"!false",type:"js"},{id:2,text:"!0",type:"js"},{id:3,text:"!null",type:"js"},{id:4,text:"!undefined",type:"js"},{id:5,text:'!""',type:"js"}]},{id:"1558971016645",level:5,text:"Inside which HTML element do we put the JavaScript?",answers:[{id:1,text:"<script>",type:"html"},{id:2,text:"<scripting>",type:"html"},{id:3,text:"<js/>",type:"html"},{id:4,text:"<javascript>",type:"html"}]},{id:"1553496912724",level:5,text:"What is the correct way of creating a button?",answers:[{id:1,text:"<batton>Save</batton>",type:"html"},{id:2,text:"<button>Save</button>",type:"html"},{id:3,text:'<input type="button" value="Save"/>',type:"html"},{id:4,text:'<submit type="button">Save</submit>',type:"html"}]},{id:"1553501520620",level:5,text:"What is the correct JavaScript syntax to change the text of the HTML element below?",type:"html",q:'<p id="demo">This is a demonstration.</p>',answers:[{id:1,text:'document.getElementById("demo").innerHTML = "Hello World!";',type:"js"},{id:2,text:'#demo.innerHTML = "Hello World!";',type:"js"},{id:3,text:'document.getElementById("demo").innerText = "Hello World!";',type:"js"}]},{id:"1558972282428",level:5,text:"What is the correct JavaScript syntax to change the content of the HTML element below?",type:"html",q:'<p id="demo">This is a demonstration.</p>',answers:[{id:1,text:'#demo.innerHTML = "Hello World!";',type:"js"},{id:2,text:'document.getElementByName("p").innerHTML = "Hello World!";',type:"js"},{id:3,text:'document.getElementById("demo").innerHTML = "Hello World!";',type:"js"}]},{id:"1553502185936",level:5,text:'Which CSS selector will change the background color of the HTML element below? <p><code>&lt;p id="demo"&gt;This is a demonstration.&lt;/p&gt;</code><p>',answers:[{id:1,text:"p .demo {background-color: red}",type:"css"},{id:2,text:"#demo {background-color: red}",type:"css"},{id:3,text:".demo p {background-color: red}",type:"css"}]},{id:"1558972456149",level:5,text:'Which CSS selector will change the color of the HTML element below? <p><code>&lt;p id="demo"&gt;This is a demonstration.&lt;/p&gt;</code><p>',answers:[{id:1,text:".demo {color: red}",type:"css"},{id:2,text:"#demo {color: red}",type:"css"},{id:3,text:"demo {color: red}",type:"css"}]},{id:"1553502315935",level:5,text:"What is the correct syntax to create a function in JavaScript?",answers:[{id:1,text:"function:myFunction() { }",type:"js"},{id:2,text:"function = myFunction() { return false; }",type:"js"},{id:3,text:"function myFunction() { }",type:"js"}]},{id:"1553502545441",level:5,text:"Which statements will output \"yes\" to the console, given the following function? <p><code>function myFunction(){ console.info('yes'); }</code></p>",answers:[{id:1,text:"myFunction()",type:"js"},{id:2,text:"call function myFunction()",type:"js"},{id:3,text:'console.log("yes");',type:"js"},{id:4,text:"myFunction.apply(window)",type:"js"}]},{id:"1558973160287",level:5,text:"Which statements will output \"yes\" to the console, given the following function? <p><code>function myFunction(){ console.info('yes'); }</code></p>",answers:[{id:1,text:"myFunction()",type:"js"},{id:2,text:"call function myFunction()",type:"js"},{id:3,text:"myFunction.call(window)",type:"js"},{id:4,text:"myFunction.apply(window)",type:"js"}]},{id:"1553502764235",level:5,text:"Which of the following statements are a valid JSON object declared in JavaScript?",answers:[{id:1,text:'{name: "Vasilica", "age": "20"}',type:"js"},{id:2,text:'[{"name": "Vasilica", "age": "20"}]',type:"js"},{id:3,text:'{"name": "Vasilica", "age": "20"}',type:"js"}]},{id:"1553503056044",level:5,text:"Which of the following statements are a valid JSON object declared in data.json file?",answers:[{id:1,text:'{name: "Vasilica", "age": "20"}',type:"js"},{id:2,text:'[{"name": "Vasilica", "age": "20"}]',type:"js"},{id:3,text:'{"name": "Vasilica", "age": "20"}',type:"js"}]},{id:"1553293328629",level:5,text:"What does the console print?",q:()=>{var e;console.info("the value is: "+e),e||console.info("you did not provide the value")},answers:[{id:1,text:"Runtime exception"},{id:2,text:"the value is: undefined"},{id:3,text:"the value is: null"},{id:4,text:"the value is: "},{id:5,text:"you did not provide the value"}]},{id:"1553530811248",level:10,text:"What does the console print?",q:()=>{var e;console.info("type of value is: "+typeof e),void 0===typeof e&&console.info("you did not provide the value")},answers:[{id:1,text:"Runtime exception"},{id:2,text:"type of value is: undefined"},{id:3,text:"you did not provide the value"}]},{id:"1553293368389",level:10,text:"What does the console print?",q:()=>{var e,t,n,i;e=2,t=6,n=3,i=4,console.info("sum is: "+e+(t+n)+i++),console.info("last number is:"+i)},answers:[{id:1,text:"sum is: 15"},{id:2,text:"sum is: 16"},{id:3,text:"sum is: 294"},{id:4,text:"last number is:4"},{id:5,text:"last number is:5"}]},{id:"1553530574397",level:10,text:"What does the console print?",q:()=>{var e,t,n,i;e=1,t=5,n=8,i=3,console.info("sum is: "+(e+t)+n+i++),console.info("last number is:"+i)},answers:[{id:1,text:"sum is: 683"},{id:2,text:"sum is: 684"},{id:3,text:"last number is:4"},{id:4,text:"last number is:3"}]},{id:"1553293379660",level:5,text:"What is the output of the following code?",q:()=>{console.info("Equals")},answers:[{id:1,text:"Equals"},{id:2,text:"Not Equals"},{id:3,text:"nu va afisa nimic"}]},{id:"1553530744244",level:5,text:"What is the output of the following code?",q:()=>{console.info("Not Equals")},answers:[{id:1,text:"Triple Equals"},{id:2,text:"Not Equals"},{id:3,text:"nu va afisa nimic"}]},{id:"1558975244658",level:5,text:"Which of the following statements are true about JSON object",answers:[{id:1,text:"a valid json object can begin with curly braces (eg. var obj = { }; )"},{id:2,text:"an array can contain json objects (eg. var list = [ { }, { } ]; )"},{id:3,text:'json object can omit double quotes for keys inside js code. Eg following lines are the same: \n            <p><code>var json = {"a": "hello"}</code></p>\n            <p><code>var json = {a: "hello"}</code></p>',type:"mixed"}]},{id:"1553293388034",level:5,text:"What is the output of the following code?",q:()=>{console.info("Not Equals")},answers:[{id:1,text:"Equals"},{id:2,text:"Not Equals"}]},{id:"1553293397312",level:5,text:"What is the output of the following code?",q:()=>{"String"!=" String".trim()?console.info("case1"):console.info("case2")},answers:[{id:1,text:"case1"},{id:2,text:"case2"}]},{id:"1553530419763",level:5,text:"What is the output of the following code?",q:()=>{"String"!=" string".trim()?console.info("case1"):console.info("case2")},answers:[{id:1,text:"case1"},{id:2,text:"case2"}]},{id:"1553293409116",level:10,text:"What is the output of the following code?",q:()=>{try{({firstName:"Andrei",lastName:"Vasilica",call:function(){console.log("My name is: "+firstName+lastName)}}).call()}catch(e){console.error(e)}},answers:[{id:1,text:'"My name is: Andrei Vasilica"'},{id:2,text:"Uncaught ReferenceError: firstName is not defined"},{id:3,text:'"My name is: Tibi Vasilica"'},{id:4,text:"Uncaught ReferenceError: lastName is not defined"},{id:5,text:"Runtime exception"}]},{id:"1553531045086",text:"What is the output of the following code?",q:()=>{({make:"BMW",model:"118",call:function(){console.log("My car is a: "+this.make+" 320")}}).call()}},{id:"1553293416921",level:6,text:"What is the output of the following code?",q:()=>{console.info(function(e){return{age:e,friends:3*e}}(5).friends)},answers:[{id:1,text:"25"},{id:2,text:"Runtime exception"},{id:3,text:"15"}]},{id:"1553531075837",level:6,text:"What is the output of the following code?",q:()=>{console.info(function(e){return{age:e,friends:2*e}}(3).friends)},answers:[{id:1,text:"3"},{id:2,text:"6"},{id:3,text:"10"},{id:4,text:"15"},{id:5,text:"Runtime exception"}]},{id:"1553293434722",level:15,text:"What is the output of the following code?",q:()=>{var e=new class{constructor(e){this.nume=e.nume,this.laturi=e.laturi}info(){return this.nume+" - "+this.laturi}}({nume:"Patrat",laturi:4});console.info(e.info()),console.info(e.info()==e.nume+" - "+e.laturi),console.info((void 0).nume+" - "+(void 0).laturi)},answers:[{id:1,text:"Patrat - 4"},{id:2,text:"undefined - undefined"},{id:3,text:"Cannot read property 'nume' of undefined"},{id:4,text:"Cannot read property 'laturi' of undefined"},{id:5,text:"true"},{id:6,text:"false"}]},{id:"1553531127393",level:15,text:"What is the output of the following code?",q:()=>{var e=new class{constructor(e){this.nume=e.nume,this.laturi=e.laturi}info(){return this.nume+" - "+this.laturi}}({nume:"Patrat",laturi:4});console.info(e.info()),console.info(e.info()==(void 0).nume+" - "+(void 0).laturi),console.info((void 0).nume+" - "+(void 0).laturi)},answers:[{id:1,text:"Patrat - 4"},{id:2,text:"undefined - undefined"},{id:3,text:"Cannot read property 'nume' of undefined"},{id:4,text:"Cannot read property 'laturi' of undefined"},{id:5,text:"true"},{id:6,text:"false"}]},{id:"1553530916576",level:15,text:"What is the output of the following code?",q:()=>{new class{constructor(e){this.name=e}woof(){console.log(this.name+" said woof!")}}("Rex").woof.call({name:"Laika"})}},{id:"1553293442831",level:15,text:"What is the output of the following code?",q:()=>{new class{constructor(e){this.firstName=e}sayHello(){console.log("Hello: "+this.firstName)}}("Tibi").sayHello.call({firstName:"Ionica"})},answers:[{id:1,text:"Hello Ionica"},{id:2,text:"Cannot read property 'call' of undefined"},{id:3,text:"Hello Tibi"},{id:4,text:"Runtime exception"}]},{id:"1553293450435",level:10,text:"What is the output of the following code?",q:()=>{var e=[8,2,3,7,5,1];e[1]=6,e.sort(),e.push(4),e.forEach((function(e){e%2==0&&console.info(e)}))},answers:[{id:1,text:"0 0 0 4"},{id:2,text:"1 3 5 7"},{id:3,text:"4 6 8"},{id:4,text:"6 8 4"},{id:5,text:"Runtime exception"}]},{id:"1553531168262",level:10,text:"What is the output of the following code?",q:()=>{var e=[7,5,1,8,2,3];e[2]=0,e.sort(),e.push(2),e.forEach((function(e){e%2==0&&console.info(e)}))},answers:[{id:1,text:"0 2 2 8"},{id:2,text:"0 2 8 2"},{id:3,text:"2 3 7"},{id:4,text:"1 3 7"},{id:5,text:"Runtime exception"}]},{id:"1553293458940",level:10,text:"What is the output of the following code?",q:()=>{document.body.innerHTML+=['<article id="q11result">','<div id="x">X</div>','<div name="y">Y</div>',"</article>"].join(""),document.getElementById("x").innerHTML="A",document.getElementsByName("y").innerHTML="B",console.info(document.getElementById("q11result").innerText)},answers:[{id:1,text:"A B"},{id:2,text:"X Y"},{id:3,text:"A Y"},{id:4,text:"X B"},{id:5,text:"Runtime exception"}]},{id:"1553531217891",level:10,text:"What is the output of the following code?",q:()=>{document.body.innerHTML+=['<article id="q11result">','<div name="x">X</div>','<div id="y">Y</div>',"</article>"].join(""),document.getElementsByName("x").innerHTML="A",document.getElementById("y").innerHTML="B",console.info(document.getElementById("q11result").innerText)},answers:[{id:1,text:"A B"},{id:2,text:"X Y"},{id:3,text:"A Y"},{id:4,text:"X B"},{id:5,text:"Runtime exception"}]},{id:"1553293466889",level:10,text:"Which of the following names will turn red?",q:()=>{document.body.innerHTML+=['<article class="html">','  <div class="cls1">Adrian</div>','  <p id="any">Bogdan</p>','  <span class="blue">Cristi</span>','  <ul id="all">',"    <li>David</li>",'    <li class="favorite">Elena</li>',"    <li>Florin</li>","  </ul>","</article>","<style>","  #cls1, #any, #all li {","    color: red;","  }","  #all .favorite {","    color: blue;","  }","</style>"].join("\n")},answers:[{id:1,text:"Adrian"},{id:2,text:"Bogdan"},{id:3,text:"Cristi"},{id:4,text:"David"},{id:5,text:"Elena"},{id:6,text:"Florin"}]},{id:"1553531259659",level:10,text:"Which of the following names will turn red?",q:()=>{document.body.innerHTML+=['<article class="html">','  <div class="cls1">Adrian</div>','  <p id="any">Bichir</p>','  <span class="blue favorite">Cristi</span>','  <ul id="all">',"    <li>David</li>","    <li>Florin</li>","  </ul>","</article>","<style>","  #cls1, #any, #all li {","    color: red;","  }","  #all .favorite {","    color: blue;","  }","</style>"].join("\n")},answers:[{id:1,text:"Adrian"},{id:2,text:"Bichir"},{id:3,text:"Cristi"},{id:4,text:"David"},{id:5,text:"Elena"},{id:6,text:"Florin"}]},{id:"1562944954320",level:10,type:"html",text:"Which of the following names will turn red?",q:'\n      <article class="html">\n        <div class="cls1">Adrian</div>\n        <p id="any">Bichir</p>\n        <span class="blue favorite">Cristi</span>\n        <ul id="all">\n          <li>David</li>\n          <li>Florin</li>\n        </ul>\n      </article>\n      <style>\n        #cls1, #any, #all li {\n          color: red;\n        }\n        #all .favorite {\n          color: blue;\n        }\n      </style>\n    ',answers:[{id:1,text:"Adrian"},{id:2,text:"Bichir"},{id:3,text:"Cristi"},{id:4,text:"David"},{id:5,text:"Elena"},{id:6,text:"Florin"}]},{id:"1553293478562",level:15,text:"What is the output of the following code?",q:()=>{new class extends class{add(e,t){return e+t}}{constructor(){super();console.info(this.add(9,6))}}},answers:[{id:1,text:"Compile error because on line where method 'add' is seen for the first time"},{id:2,text:"Compile error because on line where method 'add' is called"},{id:3,text:"Runtime exception"},{id:4,text:"15"}]},{id:"1553530483089",level:15,text:"What is the output of the following code?",q:()=>{new class extends class{average(e,t){return(e+t)/arguments.length}}{constructor(){super();console.info(this.average(9,6))}}},answers:[{id:1,text:"Compile error because on line where method 'average' is seen for the first time"},{id:2,text:"Compile error because on line where method 'average' is called"},{id:3,text:"Runtime exception"},{id:4,text:"7.5"}]},{id:"1564127231883",level:5,text:"What is the output of the following code?",q:()=>{for(var e=0;e<5;e++)console.info(e)},answers:[{id:1,text:"1 2 3 4"},{id:2,text:"1 2 3 4 5"},{id:3,text:"0 1 2 3 4"},{id:4,text:"0 1 2 3 4 5"},{id:5,text:"4 4 4 4 4"},{id:6,text:"5 5 5 5 5"}]},{id:"1564127928101",level:20,text:"What is the output of the following code?",q:()=>{for(var e=0;e<5;e++)setTimeout((function(){console.info(e)}),100)},answers:[{id:1,text:"1 2 3 4"},{id:2,text:"1 2 3 4 5"},{id:3,text:"0 1 2 3 4"},{id:4,text:"0 1 2 3 4 5"},{id:5,text:"4 4 4 4 4"},{id:6,text:"5 5 5 5 5"}]},{id:"1564128025513",level:20,text:"What is the output of the following code?",q:()=>{for(var e=0;e<5;e++)setTimeout(()=>{console.info(e)},100)},answers:[{id:1,text:"1 2 3 4"},{id:2,text:"1 2 3 4 5"},{id:3,text:"0 1 2 3 4"},{id:4,text:"0 1 2 3 4 5"},{id:5,text:"4 4 4 4 4"},{id:6,text:"5 5 5 5 5"}]},{id:"1564128069003",level:20,text:"What is the output of the following code?",q:()=>{for(let e=0;e<5;e++)setTimeout(()=>{console.info(e)},100)},answers:[{id:1,text:"1 2 3 4"},{id:2,text:"1 2 3 4 5"},{id:3,text:"0 1 2 3 4"},{id:4,text:"0 1 2 3 4 5"},{id:5,text:"4 4 4 4 4"},{id:6,text:"5 5 5 5 5"}]},{id:"1564128249812",level:20,text:"What is the output of the following code?",q:()=>{for(var e=0;e<5;e++)setTimeout(function(e){console.info(e)}(e),100)},answers:[{id:1,text:"1 2 3 4"},{id:2,text:"1 2 3 4 5"},{id:3,text:"0 1 2 3 4"},{id:4,text:"0 1 2 3 4 5"},{id:5,text:"4 4 4 4 4"},{id:6,text:"5 5 5 5 5"}]}],o="data/answers.json";function s(e){return(location.search.split(e+"=")[1]||"").split("&")[0]}function l(){const e="abcdefghijklmnopqrstuvwxyz";return e[Math.floor(Math.random()*e.length)]}const r=function(){const e={"&amp;":"&","&gt;":">","&lt;":"<","&quot;":'"',"&#39;":"'"},t={},n=function(){const n=[];for(let i in e){const o=e[i];t[o]=i,n.push(o)}return new RegExp("("+n.join("|")+")","g")}(),i=function(e,n){return t[n]};return{reset:e=>{Array.from(document.querySelectorAll("#questions article")).forEach(e=>{e.parentNode.removeChild(e)}),r.render(e),document.querySelector("#result .q-point").innerHTML="&nbsp;",document.querySelector("#test-result .q-point").innerHTML="&nbsp;",document.querySelector("#submit-test").style.display=""},render:e=>{!function e(t,n){if(Array.isArray(t))return void t.forEach((function(t,n){e(t,n+1)}));if(void 0===t)return void console.warn("no function");let i=t.q;const o=t.type||"js";"html"===o?i=(e=>e=e.replace(/</g,"&lt;"))(i):"function"==typeof i?i=(e=>{let t=e.trim();return t=t.replace(/\s*\(\s*\)\s*=>\s*{/,""),t=t.replace(/function\s+q\d+\(\)\s*\{/,""),t=t.substring(0,t.length-1),a(t)})(i.toString()):i&&(i=a(i));const s=t.answerType||"checkbox",l=t.answers?c(t.id,t.answers,s):"",r=d(t.text,i,l,n,t.id,o,t);$("#questions").append(r)}(e),p(),r.correctAnswers(e)},isText:e=>"text"===e||"number"===e,correctAnswers:e=>{window.questions=e,window.correctAnswers=e.reduce((e,t)=>{let n;if(r.isText(t.answerType))n=t.answers[0].correct;else{const e=t.answers.find(e=>!0===e.correct);e&&(n=e.id)}return void 0!==n&&(e[t.id]=[n]),e},{})},htmlEncode:e=>e?String(e).replace(n,i):e,sanitizeAnswer:e=>{const t=e.type;let n=r.htmlEncode(e.text);switch(t){case"mixed":n=e.text;break;case"js":case"html":case"css":case"code":n=`<code>${n}</code>`}return n},checkPoints:(e,t)=>(t||(console.warn("no correctAnswers for ",e,e[0].id),console.warn("question",document.querySelector(`input[name="${e[0].id}"]`).parentNode.parentNode.parentNode),t=[]),e.map(e=>{let n,i;return r.isText(e.type)?(n=!0,i=e.value==t[0]?1:0):(n=t.indexOf(e.value)>=0,i=e.checked&&n?1:e.checked?-1:0),{...e,point:i,required:n}})),markResults:e=>{e.forEach(e=>{let t;const n=r.isText(e.type);t=n?document.querySelector(`input[name="${e.id}"]`):document.querySelector(`input[name="${e.id}"][value="${e.value}"]`);const i=t.parentNode;i.classList.remove("correct-answer"),i.classList.remove("required-answer"),i.classList.remove("incorrect-answer"),e.required&&e.checked?!n||e.point?i.classList.add("correct-answer"):i.classList.add("incorrect-answer"):e.required&&!e.checked?i.classList.add("required-answer"):!e.required&&e.checked&&i.classList.add("incorrect-answer")})}}}();Array.prototype.shuffle=function(){var e,t,n=this.length;if(0==n)return this;for(;--n;)e=Math.floor(Math.random()*(n+1)),t=this[n],this[n]=this[e],this[e]=t;return this};const a=e=>e=(e=(e=e.replace(/</g,"&lt;")).replace(/\}\}/g,"} } ")).replace(/\n\s*\n/g,"\n");const d=(e,t,n,i,o,s,l)=>`<article id="q-${o}">\n    <h2><span class="q-point"></span><span class="q-nr">${i=i?i+") ":""}</span>${e}</h2>\n    ${t?`<pre class="code" data-type="${s}">${t}</pre>`:""}\n    ${n?`<ol type="A" class="${l.answerDisplay||""}">\n         ${n}\n       </ol>`:""}\n    </article>`,c=(e,t,n)=>(shuffle&&t.shuffle(),"<li>"+(t||[]).map(t=>`<label><input class="answer" type="${n}" name="${e}" value="${r.isText(n)?"":t.id}">${r.sanitizeAnswer(t)}</label>`).join("</li><li>")+"</li>"),u=(e,t)=>{const n=r.checkPoints(e,t);r.markResults(n);const i=n.reduce((e,t)=>e+t.point,0);let o=t.length;return 0===o&&(o=1),(i>0?i:0)/o},x=(e,t)=>{const n=Object.keys(e).length;let i=0;for(let n in e)if(e.hasOwnProperty(n)){const o=u(e[n],t[n]),s=Math.round(100*o)/100;document.querySelector(`#q-${n} .q-point`).innerHTML=`${s}`,1===s&&document.querySelector(`#q-${n}`).classList.add("correct"),i+=o}i=i.toFixed(2),document.querySelector("#result .q-point").innerHTML=`${i}/${n}`,document.querySelector("#test-result .q-point").innerHTML=`${i}/${n}`,document.querySelector("#submit-test").style.display="none",f(!0),s("test")&&window.print()},f=e=>{Array.from(document.querySelectorAll("input.answer")).forEach(t=>{"radio"===t.type||"checkbox"===t.type?t.disabled=e:t.readOnly=e})};window.submitTest=()=>{const e=Array.from(document.querySelectorAll("input.answer")).map(e=>{const t=e.type,n=r.isText(t);return{id:e.name,value:n?e.value:1*e.value,checked:n?""!==e.value:e.checked,type:t}}).reduce((e,t)=>(e[t.id]=e[t.id]||[],e[t.id].push(t),e),{});"{}"!==JSON.stringify(window.correctAnswers)?x(e,window.correctAnswers):$.ajax(o).done(t=>{x(e,t)})};const p=()=>{const e={js:"ace/mode/javascript",html:"ace/mode/html"};$("article .code").each((function(t,n){const i=n.getAttribute("data-type"),o=ace.edit(n),s=ace.require("ace/ext/beautify"),l=o.getSession();o.setReadOnly(!0),o.getSession().selection.on("changeSelection",(function(e){o.getSession().selection.clearSelection()})),o.setTheme("ace/theme/monokai"),l.setMode(e[i]),s.beautify(l),o.setOptions({maxLines:1/0})}))},h=function(){const e=(e,n,i="radio")=>{const o=[];for(let s=0;s<10;s++){const r=e||(Math.random()<.5?"+":"-");let a,d,c,u;"+"===r?(c=parseInt(79*Math.random())+20,u=c%10+1,a=parseInt(Math.random()*(c-u))+u,d=c-a):(a=parseInt(79*Math.random())+20,u=a%10+1,d=parseInt(Math.random()*(a-u))+u,c=a-d);const x=n||1+parseInt(2*Math.random());let f;const p=l();1===x?(f=a,a=p):2===x?(f=d,d=p):(f=c,c="?");const h=t(f,i);o.push({id:s,level:10,text:`${a} ${r} ${d} = ${c}`,answerType:i,answerDisplay:"inline-block",answers:h})}return o},t=(e,t)=>{const n=[];if("radio"===t){const t=4;let i=Math.min(parseInt(Math.random()*t),e);for(let o=0;o<t;o++,i--)n.push({id:o,text:e-i,correct:0===i})}else n.push({id:0,text:"",correct:e});return n},n=[{value:10,text:"Clasa I. Adunare cu trecere peste ordin - &#128288;",generator:()=>e("+",3,"radio")},{value:11,text:"Clasa I. Adunare cu trecere peste ordin - &#9997;",generator:()=>e("+",3,"number")},{value:15,text:"Clasa I. Adunare - afla numarul necunoscut - &#128288;",generator:()=>e("+","","radio")},{value:16,text:"Clasa I. Adunare - afla numarul necunoscut - &#9997;",generator:()=>e("+","","number")},{value:20,text:"Clasa I. Scaderea cu trecere peste ordin - &#128288;",generator:()=>e("-",3,"radio")},{value:21,text:"Clasa I. Scaderea cu trecere peste ordin - &#9997;",generator:()=>e("-",3,"number")},{value:25,text:"Clasa I. Scaderea - afla numarul necunoscut - &#128288;",generator:()=>e("-","","radio")},{value:26,text:"Clasa I. Scaderea - afla numarul necunoscut - &#9997;",generator:()=>e("-","","number")},{value:27,text:"Clasa I. Adunare si Scaderea - &#9997;",generator:()=>e("","","number")}];return{getLevelSelector:(e,t)=>`\n        <label>\n          Nivel\n          <select name="levelSelector">\n            ${n.map(t=>`<option value="${t.value}" ${t.value===e?'selected="selected"':""}>${t.text}</option>`).join("")}\n          </select>\n        </label>\n      `,generateQuestions:e=>{let t=n.find(t=>t.value===e);return t||(console.warn("TODO find closest generator"),t=n[0]),t.generator()}}}();window.filterLevel=100,window.shuffle=!0;(()=>{const e=document.querySelector("#slider-distance");let t;const n=function(){const e=s("test");if(!e)return null;const t=new Date,n=t.getMonth()+t.getDate()+t.getHours();return e.split(/[a-z]+/).map(e=>parseInt(e)-n).sort((e,t)=>e-t)}();if(n){e.style.display="none",shuffle=!1;const o=prompt("Enter you full name (firstname & lastname)"),s=new Date,l=`${s.getUTCFullYear()}-${s.getUTCMonth()+1}-${s.getUTCDate()}`,r=`${s.getHours()}:${s.getMinutes()}`;document.title=`test-${l}-${o}`,document.querySelector("#reset").style.display="none",document.querySelector("#student-name").innerHTML=o,document.querySelector("#test-date").innerHTML=`${l} ${r}`,t=function(e){return e.map(e=>i[e])}(n)}else{const n=s("domain")||"js";let o=s("level");if(o=o?parseInt(o):10,"js"===n)e.style.display="none",t=function(e){let t=e.filter(e=>e.level<=filterLevel&&e.answers&&e.answers.length);return shuffle&&t.shuffle(),t=t.slice(0,10),t.sort((e,t)=>e.level-t.level),t}(i);else if("math"===n){document.querySelector("#test-result").style.display="none",e.style.display="none",shuffle=!1;const n=h.getLevelSelector(o),i=document.querySelector("#questions");i.innerHTML+=n,i.querySelector("[name=levelSelector]").addEventListener("change",e=>{const n=parseInt(e.target.value),i=window.location.search.replace(`&level=${o}`,"");history.pushState(null,"",`${i}&level=${n}`),o=n,t=h.generateQuestions(o),r.reset(t)}),t=h.generateQuestions(o)}}r.render(t)})()}]);