const { app, BrowserWindow, BrowserView } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true
    }
  })
  const view = new BrowserView({    
    webPreferences: {
      contextIsolation: true
    }
  })
  win.setBrowserView(view) // viewを複数指定した場合は後勝ち
  view.setBounds({x: 300, y: 0, width: 400, height: 400})
  view.webContents.loadURL('https://www.yahoo.co.jp/')
  // win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})