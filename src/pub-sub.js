const subscribers = {};

function publishEvent(eventName, payload, metadata = {}) {
  if (!subscribers[eventName]) return;

  subscribers[eventName].forEach((callback) => callback(payload, metadata));
}

function subscribeToEvent(eventName, callback) {
  if (!subscribers[eventName]) {
    subscribers[eventName] = [];
  }

  const index = subscribers[eventName].push(callback) - 1;

  // unsubscribe event
  return () => {
    subscribers[eventName].splice(index, 1);
  };
}

const subscriber1 = subscribeToEvent("eventA", (payload) => {
  // ... handle response
});

const subscriber2 = subscribeToEvent("eventA", (payload) => {
  // ... handle response
});

const publisher = publishEvent("eventA", {
  name: "Nanjie",
  location: "sydney",
});
