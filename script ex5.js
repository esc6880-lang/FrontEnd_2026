const textInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(){
  const textInput = taskInput.value.trim();
  if(textInput !== ''){
    const newItem = document.createElement('li');
    newItem.innerHTML = 
    `<span>${textInput}</span>
    <button onclick="editar()">Editar</button>
    <button onclick="remover(this)">Remover</button>
    <button onclick="concluir(this)">Concluir</button>`
    
  taskList.appendChild(newItem); 
  }
}


function remover(button){
  const itemToRemove = button.parentElement;
  taskList.removeChild(itemToRemove)
}

function concluir(button){
  const itemToMark = button.parentElement;
  itemToMark.classList = 'completed';
}

function editar(button){
  const itemToEdit = button.parentElement;
  itemToEdit.classList = 'completed';
}
vip.trim()
function limparResultado(){
  taskList.innerHTML = '';
}