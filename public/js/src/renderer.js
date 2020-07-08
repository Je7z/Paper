const electron = require('electron');
const ipc = electron.ipcRenderer;
const save = document.querySelector('#save');
const open = document.querySelector('#open');

const editors = document.querySelector('#editor');

save.addEventListener('click', function() {
    ipc.send('save',{data:editors.innerHTML});
    //console.log(editors.innerHTML())
    console.log(editors.textContent);
    console.log(editors.innerHTML)
});

open.addEventListener('click',function() {
    ipc.send('open');
})

ipc.on('open',function(event,data) {
    editors.innerHTML = data.data
});