// The base command class defines the common interface for all
// concrete commands.
class BaseCommand {
  backup: "";

  constructor(editor, app) {
    this.editor = editor;
    this.app = app;
  }

  init(){
    document.onKeyPress("Ctrl+C",  () => App.executeCommand(paste););
  }
  undo() {
    this.editor.state = history.pop();
  }
  saveBackup() {
    this.backup = this.editor.state;
  }
  execute() {}
}

class copyCommand extends BaseCommand {
  execute = () => {
    App.clipboard = this.editor.getSelection();
    this.editor.deleteSelection();
  };
}

class pasteCommand extends BaseCommand {
  execute = () => {
    this.saveBackup();
    const selection = editor.getSelection();
    editor.replaceSelection(App.clipboard);
  };
}

class undoCommand extends BaseCommand {
  execute(){
    this.app.undo();
  }
}

class CutCommand extends Command {
    // The cut command does change the editor's state, therefore
    // it must be saved to the history. And it'll be saved as
    // long as the method returns true.
    execute() {
      this.saveBackup()
      this.app.clipboard = this.editor.getSelection()
      this.editor.deleteSelection()
    }
}
    

export const copy = new copyCommand(editor, App);
export const paste = new pasteCommand(editor, App);
export const undo = new undoCommand(editor, App);
export const undo = new undoCommand(editor, App);
