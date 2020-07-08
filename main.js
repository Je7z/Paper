const {
    app,
    BrowserWindow
} = require('electron');
const electron = require('electron');
const ipc = electron.ipcMain;
const dialog = electron.dialog
const fs = require('fs');
let win;

app.on('ready', () => {

    win = new BrowserWindow({
        width: 1100,
        height: 700,
        minHeight: 700,
        minWidth: 1100, 
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.removeMenu();
    //win.webContents.openDevTools()

    ipc.on('save', async function (event, data) {

        const save = await dialog.showSaveDialog(win, {
            title: "self",
            filters: [{
                name: 'html',
                extensions: 'html'
            }],
            message: 'self.html',
            nameFieldLabel: 'self',
            showsTagField: true
        })
        fs.writeFile(`${save.filePath}.html`, data.data, (error) => {

        })

    });

    ipc.on('open', async function (event) {
        const open = await dialog.showOpenDialog(win);

        fs.readFile(open.filePaths[0], function (err, data) {
            event.sender.send('open', {
                data: data.toString()
            });
        })

    })

    win.loadFile('public/index.html')

})