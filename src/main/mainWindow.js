import { BrowserWindow } from 'electron'

import BrowserWinHandler from './BrowserWinHandler'
import { default as tray } from './tray'

export let manager

export let windowsMap = new Map()

export const createManager = async () => {
   /// #if env == 'DEBUG'
   console.debug("create manager ...")
   /// #endif
  manager = BrowserWinHandler.newInstance({
    height: 300,
    width: 500
  });

  manager.onCreated(_browserWindow => {
    manager.loadPage('/')
    // Or load custom url
    // _browserWindow.loadURL('https://google.com')
    // manager.showHide();
    tray.create();

  })
}

export const createWindow = async (idx) => {

  let w = BrowserWinHandler.newInstance({
    height: 300,
    width: 500
  })

  w.onCreated(_browserWindow => {
    w.loadPage('/')
    // Or load custom url
    // _browserWindow.loadURL('https://google.com')
    windowsMap.set(w.id(), w)
    /// #if env == 'DEBUG'
    console.debug("create ...")
    /// #endif
  })

}

export const currentWindow = () => BrowserWindow.getFocusedWindow()

