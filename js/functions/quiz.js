const ALL_QUESTIONS = [
  {
    id: "1553293253068",
    text: "What types of values do variables have in javascript?",
    answers: [
      { id: 1, text: "Number" },
      { id: 2, text: "Null" },
      { id: 3, text: "String" },
      { id: 4, text: "Object" },
      { id: 5, text: "Array" },
      { id: 6, text: "Function" }
    ]
  },
  {
    id: "1553293262031",
    text:
      "If a variable is declared but no value is assigned to it, what is the value of that variable? (eg. var x; )",
    answers: [
      { id: 1, text: `""`, type: "js" },
      { id: 2, text: "0", type: "js" },
      { id: 3, text: "undefined", type: "js" },
      { id: 4, text: "null", type: "js" }
    ]
  },
  {
    id: "1553293492162",
    text: "Will this print 'yes'?",
    // TODO find why name() is not in new line
    q: `function name(){if("yes" == 'yes'){console.log("yes");}}name();`,
    answers: [{ id: 1, text: "Yes" }, { id: 2, text: "No" }]
  },
  {
    id: "1553297506471",
    text: "Can we use numbers as conditions for 'if' statements?",
    q: "/*eg: */\n if (10) { /*doSomething*/ }",
    answers: [{ id: 1, text: "True" }, { id: 2, text: "False" }]
  },
  {
    id: "1553297760658",
    text: `The ! operator checks whether its operand is "falsy". Which of the following conditions are TRUE?`,
    answers: [
      { id: 1, text: "!false", type: "js" },
      { id: 2, text: "!0", type: "js" },
      { id: 3, text: "!true", type: "js" },
      { id: 4, text: "!!false", type: "js" },
      { id: 5, text: `!""`, type: "js" }
    ]
  },
  {
    id: "1553496912724",
    text: "What is the correct way of creating a button?",
    answers: [
      { id: 1, text: "<batton>Save</batton>", type: "html" },
      { id: 2, text: "<button>Save</button>", type: "html" },
      { id: 3, text: '<input type="button" value="Save"/>', type: "html" },
      { id: 4, text: '<submit type="button">Save</submit>', type: "html" }
    ]
  },
  {
    id: "1553501520620",
    text: `What is the correct JavaScript syntax to change the text of the HTML element below? <p><code>&lt;p id="demo"&gt;This is a demonstration.&lt;/p&gt;&lt;/code&gt;<p>`,
    answers: [
      {
        id: 1,
        text: `document.getElementById("demo").innerHTML = "Hello World!";`,
        type: "js"
      },
      { id: 2, text: `#demo.innerHTML = "Hello World!";`, type: "js" },
      {
        id: 3,
        text: `document.getElementById("demo").innerText = "Hello World!";`,
        type: "js"
      }
    ]
  },
  {
    id: "1553502185936",
    text: `Which CSS selector will change the background color of the HTML element below? <p><code>&lt;p id="demo"&gt;This is a demonstration.&lt;/p&gt;</code><p>`,
    answers: [
      {
        id: 1,
        text: `p .demo {background-color: red}`,
        type: "css"
      },
      { id: 2, text: `#demo {background-color: red}`, type: "css" },
      {
        id: 3,
        text: `.demo p {background-color: red}`,
        type: "css"
      }
    ]
  },
  {
    id: "1553502315935",
    text: `What is the correct syntax to create a func􀆟on in JavaScript?`,
    answers: [
      { id: 1, text: `function:myFunction() { }`, type: "js" },
      { id: 2, text: `function = myFunction() { return false; }`, type: "js" },
      { id: 3, text: `function myFunction() { }`, type: "js" }
    ]
  },
  {
    id: "1553502545441",
    text: `Which statements will output "yes" to the console, given the following function? <p><code>function myFunction(){ console.info('yes'); }</code></p>`,
    answers: [
      { id: 1, text: `myFunction()`, type: "js" },
      { id: 2, text: `call function myFunction()`, type: "js" },
      { id: 3, text: `console.log("yes");`, type: "js" },
      { id: 4, text: `myFunction.apply(window)`, type: "js" }
    ]
  },
  {
    id: "1553502764235",
    text:
      "Which of the following statements are a valid JSON object declared in JavaScript?",
    answers: [
      { id: 1, text: `{name: "Vasilica", "age": "20"}`, type: "js" },
      { id: 2, text: `[{"name": "Vasilica", "age": "20"}]`, type: "js" },
      { id: 3, text: `{"name": "Vasilica", "age": "20"}`, type: "js" }
    ]
  },
  {
    id: "1553503056044",
    text:
      "Which of the following statements are a valid JSON object declared in data.json file?",
    answers: [
      { id: 1, text: `{name: "Vasilica", "age": "20"}`, type: "js" },
      { id: 2, text: `[{"name": "Vasilica", "age": "20"}]`, type: "js" },
      { id: 3, text: `{"name": "Vasilica", "age": "20"}`, type: "js" }
    ]
  },

  {
    id: "1553293328629",
    text: "Care rezultate vor fi afisate in consola?",
    q: () => {
      function doSomething(value) {
        console.info("the value is: " + value);
        if (!value) {
          console.info("you did not provide the value");
        }
      }

      doSomething();
    },
    answers: [
      { id: 1, text: "Exceptie la runtime" },
      { id: 2, text: "the value is: undefined" },
      { id: 3, text: "you did not provide the value" }
    ]
  },
  {
    id: "1553293368389",
    text: "Care rezultate vor fi afisate in consola?",
    q: () => {
      function add(q1, q2, q3, q4) {
        console.info("sum is: " + q1 + (q2 + q3) + q4++);
        console.info("last number is:" + q4);
      }

      add(2, 6, 3, 4);
    },
    answers: [
      { id: 1, text: "sum is: 295" },
      { id: 2, text: "sum is: 294" },
      { id: 3, text: "last number is:5" },
      { id: 4, text: "last number is:6" }
    ]
  },
  {
    id: "1553293379660",
    text: "Care este rezultatul codului de mai jos?",
    q: () => {
      var nr = 4;
      var str = "4";
      if (nr == str) console.info("Equals");
      else console.info("Not Equals");
    },
    answers: [
      { id: 1, text: "Equals" },
      { id: 2, text: "Not Equals" },
      { id: 3, text: "nu va afisa nimic" }
    ]
  },

  {
    id: "1553293388034",
    text: "?",
    q: () => {
      var nr = 4;
      var str = "4";
      if (nr === str) console.info("Equals");
      else console.info("Not Equals");
    }
  },
  {
    id: "1553293397312",
    text: "?",
    q: () => {
      // notice a space in the beginning of the string
      var string = " String";
      if ("String" != string.trim()) console.info("case1");
      else console.info("case2");
    }
  },
  {
    id: "1553293409116",
    text: "?",
    q: () => {
      try {
        var firstname = "Tibi";

        var person = {
          firstName: "Andrei",
          lastName: "Vasilica",
          call: function() {
            console.log("My name is: " + firstName + lastName);
          }
        };

        person.call();
      } catch (e) {
        console.error(e);
      }
    }
  },
  {
    id: "1553293416921",
    text: "?",
    q: () => {
      function getPerson(age) {
        return {
          age: age,
          friends: age * 3
        };
      }

      var age = 5;
      var friends = 25;
      console.info(getPerson(age).friends);
    }
  },
  {
    id: "1553293434722",
    text: "?",
    q: () => {
      class Figura {
        constructor(options) {
          this.nume = options.nume;
          this.laturi = options.laturi;
        }

        info() {
          return this.nume + " - " + this.laturi;
        }
      }

      var p = new Figura({
        nume: "Patrat",
        laturi: 4
      });
      console.info(p.info());
      console.info(p.info() == this.nume + " - " + this.laturi);
      console.info(this.nume + " - " + this.laturi);
    }
  },
  {
    id: "1553293442831",
    text: "?",
    q: () => {
      class Person {
        constructor(name) {
          this.firstName = name;
        }

        sayHello() {
          console.log("Hello: " + this.firstName);
        }
      }

      var Tibi = new Person("Tibi");

      var person = {
        firstName: "Ionica"
      };

      Tibi.sayHello.call(person);
    }
  },
  {
    id: "1553293450435",
    text: "?",
    q: () => {
      var numbers = [8, 2, 3, 7, 5, 1];
      numbers[1] = 6;
      numbers.sort();
      numbers.push(4);
      numbers.forEach(function(number) {
        if (number % 2 == 0) {
          console.info(number);
        }
      });
    }
  },
  {
    id: "1553293458940",
    text: "?",
    q: () => {
      document.body.innerHTML += [
        '<article id="q11result">',
        '<div id="x">X</div><div name="y">Y</div>',
        "</article>"
      ].join("");

      var e1 = document.getElementById("x");
      e1.innerHTML = "A";
      var e2 = document.getElementsByName("y");
      e2.innerHTML = "B";

      console.info(document.getElementById("q11result").innerText);
    }
  },
  {
    id: "1553293466889",
    text: "?",
    // TODO fix format in question after render
    q: () => {
      document.body.innerHTML += [
        '<article class="html">',
        '   <div class="cls1">Adrian</div>',
        '   <p id="any">Bogdan</p>',
        '   <span class="blue">Cristi</span>',
        '   <ul id="all">',
        "       <li>David</li>",
        '       <li class="favorite">Elena</li>',
        "       <li>Florin</li>",
        "   </ul>",
        "</article>",
        "<style>",
        "   #cls1, #any, #all li {",
        "      color: red;",
        "   }",
        "   #all .favorite {",
        "      color: blue;",
        "   }",
        "</style>"
      ].join("\n");
    }
  },
  {
    id: "1553293478562",
    text: "?",
    q: () => {
      class Ar {
        add(i, j) {
          return i + j;
        }
      }

      class AQuestion extends Ar {
        constructor() {
          super();
          var s = 9;
          console.info(this.add(s, 6));
        }
      }

      new AQuestion();
    }
  }
];
