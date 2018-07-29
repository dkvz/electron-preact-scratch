const {ipcRenderer,remote} = require('electron');

const renderer = {
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
  sendSave: function() {
    remote.getCurrentWebContents().send('save');
  },
  sendSaveObj: function() {
    remote.getCurrentWebContents().send('saveObj');
  }
};

module.exports = renderer;