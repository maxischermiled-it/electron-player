import { app, Tray, Menu } from "electron";
import { createWindow } from './mainWindow'
let tray = null;

export default {
    create: () => {
        tray = new Tray('build/icons/win-icon.ico');
        tray.setToolTip("EN PLayer");
        tray.setContextMenu(
            Menu.buildFromTemplate([
                { label: "Exit", type: "normal", click: app.exit }
            ])
        );
    }
};