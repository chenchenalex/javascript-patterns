//  You need a command to have a life span independent of the original request

const clipboard = {
  clipboard: '',
  isCtrl: false,
  isShift: true,
  commands: {
    '67': this.copy, // pressed C
    '68': this.duplicate, // pressed D
  },
  history: [],
  duplicate () {},
  copy(text){
    clipboard = text;
    this.history.push({
      command: 'copy',
      payload: text
    })

    if(isSelectedType === 'text'){ textCopy() }
    if(isSelectedType === 'screen'){ screenCopy()}
    if(isSelectedType === 'component'){ componentCopy()}
  },
  undo(){

  },
  redo(){

  }
}

// scenario 1
copyButton.onClick((e) => {
  clipboard.copy(e.target.value);
})

// scenario 2
contextMenu.onClick((e)=> {
  clipboard.copy(this.value);
})

document.on('CUSTOM_COPY_EVENT', (e) => {
  clipboard.copy(e)
})
