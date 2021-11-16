// In file B
// import {App, copy, paste} from 'fileA';
import App from "./app";
import { copy, paste } from "./commands";

copyButton.onClick((e) => {
  App.executeCommand(copy);
});

contextMenu.onClick((e) => {
  App.executeCommand(paste);
});
