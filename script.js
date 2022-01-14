window.onload = function () {
  function Machine(info) {
    this.state = "stopped";
    this.time = 2000;
    info = document.getElementById("info");
    let timer;
    let interval;

    let self = this;
    function onReady() {
      clearInterval(interval);
      clearTimeout(timer);
      self.state = "stopped";
      info.innerHTML += `Готово! ${self.state}`;
    }

    this.run = function () {
      self.state = "started ";
      info.innerHTML += "Начинаю работу... ";
      info.innerHTML += `Время приготовдения - ${self.time} `;
      interval = setInterval(function () {
        this.info.innerHTML += " | ";
      }, 1000);
      timer = setTimeout(onReady, self.time);
      info.innerHTML += self.state;
    };

    this.stop = function () {
      clearInterval(interval);
      clearTimeout(timer);
      self.state = "stopped";
      info.innerHTML += `принудительное выключение! ${self.state} `;
    };
  }
  // let machine = new Machine();
  // machine.run();

  function CoffeeMachine(info) {
    Machine.apply(this, info);
    this.drink = "вода";
    let parentRun = this.run;

    this.run = function (drink = "вода") {
      // try {
      //   if (this.state == "started") {
      //     throw new Error("Машина занята");
      //   } else {

      this.drink = drink;
      info.innerHTML += `Приготовление: ${this.drink} `;
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
          info.innerHTML = "Такого напитка нет!";
          CoffeeMachine.stop();
      }
      parentRun();
      //   }
      // } catch (ex) {
      //   info.innerHTML += ex.messange;
      // }
    };
  }
  // let coffeeMachine = new CoffeeMachine();
  // coffeeMachine.run("латте");

  function Multivariate(info) {
    Machine.apply(this, info);
    this.cook = "";
    let parentRun = this.run;

    this.run = function (cook) {
      // try {
      //   if (this.state == "started") {
      //     throw new Error("Машина занята");
      //   } else {

      this.cook = cook;
      info.innerHTML += `Приготовление: ${this.cook} `;
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
          info.innerHTML = "Такого нет!";
          Multivariate.stop();
      }
      parentRun();
      //   }
      // } catch (ex) {
      //   info.innerHTML += ex.messange;
      // }
    };
  }

  // кнопки Кофе
  let info = document.getElementById("info");
  let latte = document.getElementById("latte");
  let espresso = document.getElementById("espresso");
  let americano = document.getElementById("americano");
  let stopCoffee = document.getElementById("stopCoffee");

  let machine = new Machine(info);
  let coffeeMachine = new CoffeeMachine(info);
  let multivariate = new Multivariate(info);

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
  //кнопки Мультиварки
  let soup = document.getElementById("soup");
  let stewing = document.getElementById("stewing");
  let baking = document.getElementById("baking");
  let stopMultivariate = document.getElementById("stopMultivariate");

  soup.addEventListener("click", function () {
    multivariate.run("суп");
  });

  stewing.addEventListener("click", function () {
    multivariate.run("тушение");
  });

  baking.addEventListener("click", function () {
    multivariate.run("выпечка");
  });

  stopMultivariate.addEventListener("click", function () {
    multivariate.stop();
  });
};
