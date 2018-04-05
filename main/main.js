const electron = require('electron');
const {BrowserWindow, ipcMain, Menu, app, dialog} = require('electron');
const url = require('url');
const path = require('path');
const template = require('./menus/file');
const {spawn, exec} = require('child_process');
const localShortcut = require('electron-localshortcut');
// require('electron-reload')(path.join(__dirname, '../'));
app.on('ready', () => {
  let win = new BrowserWindow({
    width: 1000,
    height: 800
  });
  win.loadURL('file://' + path.join(__dirname, '../renderer/index.html'));
  let menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  localShortcut.register(win, 'CommandOrControl+Alt+I', () => {
    win.toggleDevTools();
  });
  localShortcut.register(win, 'CommandOrControl+S', () => {
    console.log('hello');
    win.webContents.send('saveFile');
  })
});
function simulator(root) {
  let spawn = exec('webpack', {
    cwd: path.join(__dirname, '../lib/temp/new-project')
  }, (err, stdout, stderr) => {
    let child = new BrowserWindow({
      width: 800,
      height: 600
    });
    child.loadURL('file://' + path.join(__dirname, '../lib/temp/new-project/client/public/index.html'));
    child.toggleDevTools();
    //set up hot loading or live reloading
    //use fs.watch to have our own version of live reload?
    //just fs.watch and on emit, do exec again
    //and loadURl?
  })
}

ipcMain.on('openSimulator', (event, root) => {
  simulator(root);
})


