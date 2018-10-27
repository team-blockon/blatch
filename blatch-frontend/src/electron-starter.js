const { app, BrowserWindow } = require('electron');
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: '#2f3545',
    frame: false
  });

  const startUrl = process.env.ELECTRON_START_URL;
  win.loadURL(startUrl);

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
