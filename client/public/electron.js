const { app, BrowserWindow, ipcMain } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

ipcMain.on('msg', (event, data) => {
  console.log(data);
  event.reply('reply', 'thank you for data');
});

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
    },
  });

  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
