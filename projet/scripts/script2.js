

function showCode()
// Generate Javascript code and display it
{
      
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null ; 
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    document.querySelector('#textarea').value=code;

}

function runCode()
{
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var myInterpreter = new Interpreter(code);
    myInterpreter.run();
}
// inject XML to div
var workspace = Blockly.inject('blocklyDiv', {toolbox: document.getElementById('toolbox'),
});

