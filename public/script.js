var history = document.getElementById("history");


var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    document.getElementById("editor").style.backgroundColor = '#000000';
    editor.session.setMode("ace/mode/c_cpp");