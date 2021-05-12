import { app, Tray, Menu } from 'electron'
import BrowserWinHandler from './BrowserWinHandler'
import { default as viewer } from './viewer'


let manager = null;
let tray = null;

export default {

  manager: manager,

  createManager: async () => {
    /// #if env == 'DEBUG'
    console.debug("create manager ...")
    /// #endif
    manager = BrowserWinHandler.newInstance({
      height: 300,
      width: 500
    });

    manager.onCreated(_browserWindow => {
      manager.loadPage('/manager')
      // Or load custom url
      // _browserWindow.loadURL('https://google.com')
      // manager.showHide();
      tray = new Tray('build/icons/win-icon.ico');
      tray.setToolTip("EN PLayer");
      tray.setContextMenu(
        Menu.buildFromTemplate([
          { label: "New Viewer", type: "normal", click: viewer.createWindow },
          { type: 'separator' },
          { label: "Exit", type: "normal", click: app.exit }
        ])
      );

    })

  }

}


