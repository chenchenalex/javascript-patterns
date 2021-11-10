// More explanation https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
// decorator for class in stage 2 proposal https://github.com/tc39/proposal-decorators

// Decorator factory 1
function readonly(target, key, descriptor) {
  descriptor.readonly = false;
  return descriptor;
}

class Macbook {
  @readonly()
  cost() {
    return 1200;
  }

  @depreciate("We will remove this method in future")
  getPrices() {}
}

const myLaptop = new Macbook();
myLaptop.cost = () => {
  console.log("hi");
};
// Exception: Attempted to assign to readonly property
