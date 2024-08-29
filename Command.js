
var commands = [];

function cmd(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    if(!info.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    cmd,
    AddCommand:cmd,
    Function:cmd,
    Module:cmd,
    commands,
};
command.js
Pasindu Madushan 
(pasindupasindu2024@gmail.com)
General Info
TypeJavascript
Size486 bytes
Modified11:43 PM Aug 8
Created11:40 PM Aug 8
Sharing
Anyone with the link
Can View

prabathmdofficial
Owner
Description
No description
Download Permission
Viewers can download
Displaying command.js.
