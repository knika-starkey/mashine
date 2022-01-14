window.onload = function () {
  function Machine(info) {
    this.state = "stopped";
    this.time = 2000;
    this.info = info;
    let timer;
    let interval;

    let self = this;
    function onReady() {
      clearInterval(interval);
      clearTimeout(timer);
      document.write("Готово!");
      self.state = "stopped";
      document.write(self.state);
    }

    this.run = function () {
      self.state = "started ";
      document.write("Начинаю работу... ");
      document.write(`Время приготовдения - ${self.time} `);
      interval = setInterval(() => document.write(" | "), 1000);
      timer = setTimeout(onReady, self.time);
      document.write(self.state);
    };

    this.stop = function () {
      clearInterval(interval);
      clearTimeout(timer);
      self.state = "stopped";
      document.write(`принудительное выключение! ${self.state} `);
    };
  }
  // let machine = new Machine();
  // machine.run();

  function CoffeeMachine(info) {
    Machine.apply(this, info);
    this.drink = "вода";
    let parentRun = this.run;

    this.run = function (drink = "вода") {
      try {
        if (this.state == "started") throw new Error("Машина занята");
        else {
          this.drink = drink;
          switch (this.drink) {
            case "латте":
              this.time = 5000;
              break;
            case "эспрессо":
              this.time = 3000;
              break;
            case "американо":
              this.time = 3500;
              break;
            default:
              document.write("Такого напитка нет!");
              CoffeeMachine.stop();
          }
          document.write(`Приготовление: ${this.drink} `);
          parentRun();
        }
      } catch (ex) {
        document.write(ex.messange);
      }
    };
  }
  // let coffeeMachine = new CoffeeMachine();
  // coffeeMachine.run("латте");

  function Multivariate(info) {
    Machine.apply(this, info);
    this.cook = "";
    let parentRun = this.run;

    this.run = function (cook) {
      try {
        if (this.state == "started") throw new Error("Машина занята");
        else {
          this.cook = cook;
          switch (this.cook) {
            case "суп":
              this.time = 10000;
              break;
            case "тушение":
              this.time = 13000;
              break;
            case "выпечка":
              this.time = 15000;
              break;
            default:
              document.write("Такого нет!");
              CoffeeMachine.stop();
          }
          document.write(`Приготовление: ${this.cook} `);
          parentRun();
        }
      } catch (ex) {
        document.write(ex.messange);
      }
    };
  }

  // кнопки
  let info = document.getElementById("info");
  let latte = document.getElementById("latte");
  let espresso = document.getElementById("espresso");
  let americano = document.getElementById("americano");
  let stopCoffee = document.getElementById("stopCoffee");

  let machine = new Machine(info);
  let coffeeMachine = new CoffeeMachine(info);

  latte.addEventListener("click", function () {
    coffeeMachine.run("латте");
  });

  espresso.addEventListener("click", function () {
    coffeeMachine.run("эспрессо");
  });

  americano.addEventListener("click", function () {
    coffeeMachine.run("американо");
  });

  stopCoffee.addEventListener("click", function () {
    coffeeMachine.stop();
  });
};
