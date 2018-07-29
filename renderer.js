const {ipcRenderer,remote} = require('electron');

const renderer = {
  registerSave: function(func) {
    console.log('Registering the save event...');
    ipcRenderer.on('save', _ => {
      let toSave = func();
      console.log('Would have saved the text: ' + toSave);
    });
  },
  sendSave: function() {
    remote.getCurrentWebContents().send('save');
  }
};

module.exports = renderer;