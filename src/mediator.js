// mediator has most of the bussiness logics in one place, other component calls it, like a
// air traffic control center


const messenger = {
  subscribe: () => {}
  publish: () => {}
  unsubscribe: () => {}
}

const selectPizza = () => {
  // pick your favourate 
  messenger.trigger('nextStep', payload)
};

const address = () => {};
const Payment = () => {};
const confirm = () => {};

const pizza_shop_mediator = {
  steps: [selectPizza, address, Payment, confirm],
  currentStepIndex: 0;

  init() {
    messenger.subscribe('nextStep', (data) => {
      this.moveToNext(data)
      // mediator will do some other  things that is related
      const food = await this.sendOrderToKitchen()
      this.packaging(food);
      this.cleanUp();
    })
    messenger.subscribe('xxx', ()=> {})
  }

  moveToNext: function (data) {
    this.currentStepIndex += 1;
    steps[this.currentStepIndex](data);
  },
  sendOrderToKitchen: async(){}
  packaging: (){}
  cleanUp: (){}
};
