import { app, BrowserWindow } from 'electron';

import { ipcMain } from 'electron' // eslint-disable-line

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
/*
全局path变量，global.__static 指向static文件夹下
*/
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\') // eslint-disable-line
}

let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:9080'
  : `file://${__dirname}/index.html`;
function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 800,
    useContentSize: true,
    width: 1300,
    frame: false,
    webPreferences: {
      webSecurity: false,
    },
  });

  mainWindow.loadURL(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  ipcMain.on('close', (e) => {
    mainWindow.close();
    mainWindow = null;
    app.quit();
  });
  ipcMain.on('hide-window', (e) => {
    mainWindow.minimize();
  });
  ipcMain.on('max-window', (e) => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  });
}

app.on('ready', createWindow);

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

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'
autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})
app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
