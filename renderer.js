const {ipcRenderer,remote} = require('electron');

const renderer = {
  counter: 0,
  registerSave: function(func) {
    console.log('Registering the save event...');
    ipcRenderer.on('save', _ => {
      let toSave = func();
      console.log('Would have saved the text: ' + toSave);
    });
  },
  registerSaveObject: function(state) {
    console.log('Registering the save objet event');
    ipcRenderer.on('saveObj', _ => {
      console.log('Would have saved the text: ' + state.text);
    });
  },
  unregisterSave: function() {
    ipcRenderer.removeAllListeners('save');
  },
  unregisterSaveObject: function() {
    ipcRenderer.removeAllListeners('saveObj');
  },
  sendSave: function() {
    this.counter++;
    console.log('Counter: ' + this.counter);
    remote.getCurrentWebContents().send('save');
  },
  sendSaveObj: function() {
    this.counter++;
    console.log('Counter: ' + this.counter);
    remote.getCurrentWebContents().send('saveObj');
  }
};

module.exports = renderer;