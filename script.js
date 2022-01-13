function Machine() {
  this.state = "stopped";
  this.time = 2000;
  this.timer;
  this.interval;
}

Machine.prototype.run = function () {
  this.state = "started ";
  document.write("Начинаю работу... ");
  document.write(`Время приготовдения - ${this.time} `);
  this.interval = setInterval(() => document.write(" | "), 1000);
  this.timer = setTimeout(this.onReady.bind(this), this.time);
  document.write(this.state);
};

Machine.prototype.onReady = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  this.state = "stopped ";
  document.write(`Готово! ${this.state} `);
};
Machine.prototype.stop = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  this.state = "stopped ";
  document.write(`принудительное выключение! ${this.state} `);
};
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
