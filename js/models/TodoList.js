// import { Todo } from "./Todo.js";

export class TodoList {
    arrToDo = [];
    arrComplete = [];

    addTodo(newAct) {
        this.arrToDo.push(newAct);
    }

    addComplete(index) {
        this.arrComplete.push(this.arrToDo[index])
        //  console.log("hihi",this.arrToDo[index]);
        // this.deleteTodo(index)
        this.delete(index, 'todo')
    }

    setStorage() {
        let sArrToDo = JSON.stringify(this.arrToDo);
        localStorage.setItem('arrToDo', sArrToDo);
    }

    getStorage() {
        // console.log(123);
        if (localStorage.getItem('arrToDo')) {
            this.arrToDo = JSON.parse(localStorage.getItem('arrToDo'));
        }
    }

    // deleteTodo(index) {
    //     this.arrToDo.splice(index, 1)
    // }

    // deleteComplete(index) {
    //     this.arrComplete.splice(index, 1)
    // }

    delete(index, status){
        let arr = status === 'todo' ? this.arrToDo : this.arrComplete;
        arr.splice(index, 1)
    }

    moveToComplete(index) {
        this.addComplete(index);
        // console.log(this.arrComplete);
    }

    // renderToDoList(selector) {
    //     let html = this.arrToDo.reduce((content, toDo, index) => {
    //         return content += `<li>${toDo.newTask} <i class="fa-solid fa-trash" onclick="delItem('${index}')"></i><i class="fa-solid fa-check" onclick="completeItem('${index}')"></i></li>`;
    //     }, '');
    //     document.querySelector(selector).innerHTML = html;
    // }

    // renderCompleteList(selector) {
    //     let html = this.arrComplete.reduce((content, complete, index) => {
    //         return content += `<li>${complete.newTask} <i class="fa-solid fa-trash" onclick="delCompleteItem('${index}')"></i></li>`;
    //     }, '');
    //     document.querySelector(selector).innerHTML = html;
    // }

    render(selector){
        let place = selector === '#todo' ? this.arrToDo : this.arrComplete
        let html = place.reduce((content, act, index) => {
            // return content = `<li>${act.newTask}<li/>`;
            if (selector === '#todo') {
                return content += `<li>${act.newTask} <i class="fa-solid fa-trash" onclick="delItem('${index}')"></i><i class="fa-solid fa-check" onclick="completeItem('${index}')"></i></li>`;
            }
            if (selector === '#completed'){
                return content += `<li>${act.newTask} <i class="fa-solid fa-trash" onclick="delCompleteItem('${index}')"></i></li>`;
            } 
        }, '');
        document.querySelector(selector).innerHTML = html;
    }
}