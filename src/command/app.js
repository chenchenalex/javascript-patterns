// The application class sets up object relations. It acts as a
// sender: when something needs to be done, it creates a command
// object and executes it.
const App = {
  clipboard: "",
  state: "",
  history: {
    queue: [],
    push() {},
    remove() {},
  },
  undo() {
    const command = history.pop();
    if (command !== null) {
      command.undo();
    }
  },
  executeCommand(command) {
    if (command.execute) this.history.push(command);
  },
};

export default App;
