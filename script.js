window.onload = function () {
  function Machine(info) {
    this.state = "stopped";
    this.time = 2000;
    this.info = info;
    var timer;
    var interval;

    var self = this;

    this.run = function () {
      self.state = "started ";
      this.info.innerHTML += "Начинаю работу... ";
      this.info.innerHTML += `Время приготовдения - ${self.time} `;
      interval = setInterval(() => (this.info.innerHTML += " | "), 1000);
      timer = setTimeout(onReady, this.time);
      this.info.innerHTML += self.state;
    };

    function onReady() {
      clearInterval(interval);
      clearTimeout(timer);
      this.info.innerHTML += "Готово!";
      self.state = "stopped";
      this.info.innerHTML += self.state;
    }
    this.stop = function () {
      clearInterval(interval);
      clearTimeout(timer);
      self.state = "stopped";
      this.info.innerHTML += `принудительное выключение! ${self.state} `;
    };
  }
  // let machine = new Machine();
  // machine.run();

  function CoffeeMachine() {
    this.drink = "вода";
    Machine.apply(this);
  }
  CoffeeMachine.prototype = Object.create(Machine.prototype);
  CoffeeMachine.prototype.constructor = CoffeeMachine;

  CoffeeMachine.prototype.run = function (drink = "вода") {
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
    Machine.prototype.run.apply(this);
  };
  // let coffeeMachine = new CoffeeMachine();
  // coffeeMachine.run("латте");

  function Multivariate() {
    this.cook = "";
    Machine.apply(this);
  }

  Multivariate.prototype = Object.create(Machine.prototype);
  Multivariate.prototype.constructor = Multivariate;

  Multivariate.prototype.run = function (cook) {
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
        Multivariate.stop();
    }
    document.write(`Приготовление: ${this.cook} `);
    Machine.prototype.run.apply(this);
  };

  let multivariate = new Multivariate();
  multivariate.run("суп");
};
