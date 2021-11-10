//  You need a command to have a life span independent of the original request

var carManager = {
  // request information
  requestInfo: function (model, id) {
    return "The information for " + model + " with ID " + id + " is foobar";
  },

  // purchase the car
  buyVehicle: function (model, id) {
    return "You have successfully purchased Item " + id + ", a " + model;
  },

  // arrange a viewing
  arrangeViewing: function (model, id) {
    return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
  },
};

/* usually we like to directly call the method, but if the shape of requestInfo changed
  everywhere needs to be updated
*/
// there an alternative way...
carManager.execute = function (name) {
  // adds the command to history for undo / redo
  carManager.history.push(name);
  return carManager[name] && carManager[name].apply(carManager, [].slice.call(arguments, 1));
};

carManager.execute("buyVehicle", "Ford Escort", "453543");
carManager.execute("requestInfo", "Ford Mondeo", "54323");
carManager.execute("arrangeViewing", "Ford Escort", "34232");
carManager.execute("unknownCommand", "xxx", "yyy"); // it does not break,
