var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var Menu = require('menu');
var ipc = require('ipc');
var dialog = require('dialog');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OSX it is common for applications and their menu bar 
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', createMainWindow);

// when dock icon (OS X) gets clicked let's restore window
app.on('activate', function() {
  if (!mainWindow) {
    createMainWindow();
  }
});


function createMainWindow() {
  console.log('Creating main window...');
  
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024, 
    height: 768,
    center: true,
    resizable: true,
    title: 'Heartnotes',
  });

  // and load the index.html of the app.
  var url = process.env.DEV_MODE 
    ? 'http://localhost:3000'
    : 'file://' + __dirname + '/index.html';

  mainWindow.loadUrl(url);

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  var template = [{
      label: "Application",
      submenu: [
          { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
          { type: "separator" },
          { label: "Dev Tools", accelerator: "Alt+Command+I", click: function() { mainWindow.openDevTools(); }},
          { type: "separator" },
          { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
      ]}, {
      label: "Edit",
      submenu: [
          { label: "Undo", accelerator: "Command+Z", selector: "undo:" },
          { label: "Redo", accelerator: "Shift+Command+Z", selector: "redo:" },
          { type: "separator" },
          { label: "Cut", accelerator: "Command+X", selector: "cut:" },
          { label: "Copy", accelerator: "Command+C", selector: "copy:" },
          { label: "Paste", accelerator: "Command+V", selector: "paste:" },
          { label: "Select All", accelerator: "Command+A", selector: "selectAll:" }
      ]}
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}


// File open/save stuff


ipc.on('synchronous-message', function(event, arg) {
  var title = arg.title,
    action = arg.action,
    filters = arg.filters;

  switch (action) {

    case 'openFile':
      console.log('Open file');

      try {
        event.returnValue = dialog.showOpenDialog(mainWindow, { 
          title: title,
          properties: [ 
            'openFile', 
          ],
          filters: filters,
        });
      } catch (err) {
        console.error(err);

        event.returnValue = null;
      }

      break;

    case 'saveFile':
      console.log('Save file');

      try {
        event.returnValue = dialog.showSaveDialog(mainWindow, { 
          title: title,
          filters: filters,
        });
      } catch (err) {
        console.error(err);

        event.returnValue = null;
      }

      break;
  }
})

