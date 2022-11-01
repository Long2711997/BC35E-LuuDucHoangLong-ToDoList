import { Todo } from "../models/Todo.js";
import { TodoList } from "../models/TodoList.js";

let actList = new TodoList();
actList.getStorage();
// actList.renderToDoList('#todo');
actList.render('#todo')

let arrToDo = [];
document.querySelector('#addItem').onclick = function () {
    let arrInput = document.querySelectorAll('input');
    let act = new Todo();
    for (let input of arrInput) {
        let { id, value } = input;
        act[id] = value;
    }
    actList.addTodo(act)
    console.log(act);
    // actList.renderToDoList('#todo');
    actList.render('#todo')

    actList.setStorage();
}

window.delItem = (index) => {
    // actList.deleteTodo(index);
    actList.delete(index, 'todo');
    // actList.renderToDoList('#todo');
    // actList.renderCompleteList('#completed');
    actList.render('#todo');
    actList.render('#completed')
    actList.setStorage();
}

window.completeItem = (index) => {
    actList.moveToComplete(index);
    // actList.renderToDoList('#todo');
    // actList.renderCompleteList('#completed');
    actList.render('#todo');
    actList.render('#completed')
    actList.setStorage();
}

window.delCompleteItem = (index) => {
    // actList.deleteComplete(index);
    actList.delete(index, 'complete')
    // actList.renderCompleteList('#completed');
    actList.render('#completed');
    actList.setStorage();
}
console.log(actList);
