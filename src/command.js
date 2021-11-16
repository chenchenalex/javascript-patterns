// file A, editor and app are the actual business logic underlying, but we don't want to interact with them directly
const editor = {
  getSelection() {},
  deleteSelection() {},
  replaceSelection() {},
};

const App = {
  clipboard: "",
  history: {
    queue: [],
    push() {},
    remove() {},
  },
};

class BaseCommand {
  constructor(editor, app) {
    this.editor = editor;
  }
  undo() {
    history.pop();
  }
  execute(command) {
    App.history.push(command);
  }
}

class copyCommand extends BaseCommand {
  execute = () => {
    super.execute();
    App.clipboard = this.editor.getSelection();
    this.editor.deleteSelection();
  };
}

class pasteCommand extends BaseCommand {
  execute = () => {
    super.execute();
    const selection = editor.getSelection();
    editor.replaceSelection(App.clipboard);
  };
}

export const copy = new copyCommand();
export const paste = new pasteCommand();

// in a different file B
import { copy } from "clipboard";
// scenario 1
copyButton.onClick((e) => {
  copy.execute();
});

// scenario 2
contextMenu.onClick((e) => {
  copy.execute();
});

document.onKeyPress("Ctrl+C", copy);
