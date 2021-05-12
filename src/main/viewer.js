import { BrowserWindow } from 'electron'
import { EventEmitter } from 'events'

import BrowserWinHandler from './BrowserWinHandler'

let windowsMap = new Map()

export default {

  windowsMap: windowsMap,

  createWindow: function () {

    let w = BrowserWinHandler.newInstance({
      height: 300,
      width: 500
    })

    w.onCreated(_browserWindow => {

      // Or load custom url
      // _browserWindow.loadURL('https://google.com')
      let id = w.id();
      windowsMap.set(id, w)
      w.loadPage('/viewer/' + windowsMap.size)
      /// #if env == 'DEBUG'
      console.debug("create viewer " + windowsMap.size + "...")
      /// #endif

      w.browserWindow.on("closed", () => {
        /// #if env == 'DEBUG'
        console.debug("remove viewer " + id + "...")
        /// #endif
        windowsMap.delete(id);
        /// #if env == 'DEBUG'
        console.debug("windowsMap.size " + windowsMap.size + "...")
        /// #endif
      })


    })

  },

  currentWindow: BrowserWindow.getFocusedWindow()

}

