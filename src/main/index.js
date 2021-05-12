import { app } from 'electron'

import BrowserWinHandler  from './BrowserWinHandler'
import { default as manager } from './manager'


// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q

  
  if (process.platform !== 'darwin') app.quit()

  /// #if env == 'DEBUG'
  console.log('All of the window was closed.')
  /// #endif
})

app.whenReady()
  .then(() => {
    manager.createManager()
  })


/// #if env == 'DEBUG'
app.on('quit', () => {
  console.log('Application is quit')
})
/// #endif


