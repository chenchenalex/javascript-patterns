// The constructor to decorate
function MacBook() {
  this.cost = function () {
    return 997;
  };
  this.screenSize = function () {
    return 11.6;
  };
}

// Decorator factory 1
function memory(macbook) {
  var v = macbook.cost();
  macbook.cost = function () {
    return v + 75;
  };
}

// Decorator factory 2
function engraving(macbook) {
  var v = macbook.cost();
  macbook.cost = function () {
    return v + 200;
  };
}

// Decorator factory 3
function insurance(macbook) {
  var v = macbook.cost();
  macbook.cost = function () {
    return v + 250;
  };
}

var mb = new MacBook();
memory(mb);
engraving(mb);
insurance(mb);

// Outputs: 1522
console.log(mb.cost());

// Outputs: 11.6
console.log(mb.screenSize());
