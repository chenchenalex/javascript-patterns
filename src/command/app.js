// The application class sets up object relations. It acts as a
// sender: when something needs to be done, it creates a command
// object and executes it.
import { copy } from './commands';

const App = {
  clipboard: "",
  state: {},
  history: [],
  undo() {
    const command = history.pop();

    if (command !== null) {
      command.undo();
    }
    // alternatively this part can be swapped out by a momento pattern which is
    // a snapshot of the state, this.state.restore(momento) will recover its state
    /* 
      const momento = history.pop();

      if (momento !== null) {
        this.state.restore(momento)
      }
    */
  },
  init(){
    document.onKeyPress("Ctrl+C",  () => this.executeCommand(copy););
  },
  executeCommand(command) {
    // pushes the command into history for redo;
    if (command.execute) this.history.push(command);
  },
};

export default App;
