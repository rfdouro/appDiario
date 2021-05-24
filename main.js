/**
 * https://gauriatiq.medium.com/electron-app-database-with-dexie-js-indexeddb-and-web-worker-570d9a66a47a
 * 
 * 
 */

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const Menu = electron.Menu;
const shell = electron.shell;

var mainWindow = null;

app.commandLine.appendSwitch('lang', 'pt-BR');

/********/

/********/

function createWindow() {
 /*
  * https://coursetro.com/posts/code/119/Working-with-Electron-Menus---Tutorial
  */
 var menu = Menu.buildFromTemplate([
  {
   label: 'Menu',
   submenu: [
    {
     label: 'Informação',
     click() {
      //mainWindow.webContents.executeJavaScript('alert(document.getElementById("campo").value)')
      mainWindow.webContents.executeJavaScript('alert("Controle de monitoração diário")');
      //mainWindow.webContents.executeJavaScript('vapp.appF7.methods.dialogInforma("Controle de monitoração diário")');
     }
    },
    {type: 'separator'}, // Add this
    {
     label: 'Sair',
     click() {
      app.quit();
     }
    }
   ]
  },
  {
   label: 'Zoom',
   submenu: [
    {
     label: '+',
     click() {
      if (contents) {
       zoomF += 0.1;
       contents.setZoomFactor(zoomF);
      } else {
       mainWindow.webContents.executeJavaScript('console.log("não tem contents")');
      }
     },
     accelerator: 'CmdOrCtrl+Up'
    },
    {
     label: '-',
     click() {
      if (contents) {
       zoomF -= 0.1;
       contents.setZoomFactor(zoomF);
      } else {
       mainWindow.webContents.executeJavaScript('console.log("não tem contents")');
      }
     },
     accelerator: 'CmdOrCtrl+Down'
    }
   ]
  },
  /*{
   label: 'Procurar',
   click() {
   //mainWindow.webContents.executeJavaScript('window.find()');
   mainWindow.webContents.findInPage();
   },
   accelerator: 'CmdOrCtrl+F'
   },*/
  {
   label: 'Dados',
   submenu: [
    {
     label: 'Exportar dados',
     click() {
      mainWindow.webContents.executeJavaScript('exportar();');
     }
    },
    {
     label: 'Importar dados',
     click() {
      mainWindow.webContents.executeJavaScript('importar();');
     }
    }
   ]
  },
  {
   label: 'Site do desenvolvedor',
   click() {
    shell.openExternal('http://romulodouro.com');
   },
   accelerator: 'CmdOrCtrl+Shift+S'
  }
 ]);
 Menu.setApplicationMenu(menu);

 const mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
   //preload: path.join(__dirname, 'sources/preload.js')
   contextIsolation: false, //padrão para node 12 + isso é para poder usar o nodeIntegration
   nodeIntegration: true, //enables node.js in renderer processes
   nodeIntegrationInWorker: true //enables node.js in web workers
  },
  icon: __dirname + '/sources/resources/img/appIcon.png',
  //titleBarStyle: 'hidden',
  show: false // don't show the main window
 });

 mainWindow.loadFile(__dirname + '/sources/index.html');

 //mainWindow.loadURL('file://' + __dirname + '/sources/index.html');
 //mainWindow.openDevTools();
 //mainWindow.removeMenu();
 mainWindow.on('closed', function () {
  //mainWindow = null;
 });

 mainWindow.maximize();

 const contents = mainWindow.webContents;
 var zoomF = contents.getZoomFactor();


 var splash = new BrowserWindow({width: 500, height: 300, transparent: false, frame: false, alwaysOnTop: true});
 splash.loadURL(`file://${__dirname}/sources/splash.html`);
 //splash.loadFile(__dirname + '/sources/splash.html');
 splash.removeMenu();

 mainWindow.once('ready-to-show', () => {
  setTimeout(function () {
   //splash.close();
   splash.destroy();
   mainWindow.show();
  }, 2000);
 });

}


app.whenReady().then(() => {
 createWindow();

 /*app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
  createWindow();
  }
  });*/
});

app.on('window-all-closed', function () {
 if (process.platform != 'darwin') {
  app.quit();
 }
});

