//var remote = require('remote'); // Load remote compnent that contains the dialog dependency
//var dialog = remote.require('dialog'); // Load the dialogs component of the OS
var fs = require('fs'); // Load the File System to execute our common tasks (CRUD)
const { remote } = require('electron');
const { dialog } = remote;

document.getElementById("btn-readfile").addEventListener("click", ()=>{
    dialog.showOpenDialog({properties: ['openFile']}).then((data) => {
        console.log(data.filePaths);
        fs.readFile(data.filePaths[0], 'utf-8',(err, data)=>{
            if (err) {
                console.log("File open errror");
                return;
            }

            console.log(JSON.parse(data));
            var myStyle = {
                "color": "#98a7e4",
                "weight": 3,
                "opacity": 0.65
            };
            L.geoJSON(JSON.parse(data), {
                style: myStyle
            }).addTo(map);
        })
     });
   
}, false);