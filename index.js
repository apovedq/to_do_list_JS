const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

const taskContainer = document.getElementById('taskContainer');


const addNewTask = event => { 
    event.preventDefault();

    //Sacamos el valor del elemnto del input tasktext y le decimos que si el valor es falso, es decir, si no hay nigun valor
    //que no haga nada.
    const { value } = event.target.taskText;
    if (!value) return;

    //Creamos una divisiion para cada una de las nuevas taread
    const task = document.createElement('div');

    //Añadimos la clase task, se y se le dice que al darle click ejecute la funcion changeTaskState y por ultimo asigna el valor
    //entrado en el input

    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;

    //Prepend para agregar cada elemento al principio de la lista
    taskContainer.prepend(task);

    event.target.reset();
}


//Cuando se hace click se recibe un evento, se accede a la lista de clase del elemento, toggle quiere decir que si no tiene la clase se le agrega
//y si la tiene se la quita.
const changeTaskState = event => { 
    event.target.classList.toggle('done');

}

const order = () => {
    const done = [];
    const toDo = [];

    //Se accede a cada uno de los hijos de "taskContainer" es decir, las tareas, si el elemento contine el string "done", agregar a "done" el elemento
    //es decir la tarea y si no tiene la clase done entonces se agrega a "toDo"

    taskContainer.childNodes.forEach(element => {
        if (element.classList.contains('done')) { done.push(element) } else { toDo.push(element) };
    })
    return [...toDo, ...done]
}

const renderOrderedTask = () => {
    order().forEach(element => taskContainer.appendChild(element))
}

/*
function completedTask(event){ 
    duties[0].completed = !duties[0].completed;
    console.log(duties[0].completed);

    console.log(event);

    removeElement();
}


function removeElement() {

    let newCompletedTask = document.createElement("label");
    newCompletedTask.className = "duty_container";
    newCompletedTask.innerHTML = duties[0].text;
    newCompletedTask.style.backgroundColor = "#a4ffa1";
    
    let completedTaskParent = document.getElementById("completed_task");
    completedTaskParent.appendChild(newCompletedTask);

    if (duties[0].completed === true) {
        document.getElementById("cbox1").parentElement.remove();
    }

    
}
*/