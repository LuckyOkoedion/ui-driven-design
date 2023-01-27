import { Task } from "./task-interface";

export class TodoListAPI {

    todoList : Task[] = [];

    getTasks() {
        return this.todoList;
    }

 
    addTask(task: Task) {
        this.todoList.push(task);
    }
    editTask(task: Task) {
        let taskIndex = this.todoList.findIndex(val => val.taskId === task.taskId);
        this.todoList[taskIndex].name = task.name;
    }
    deleteTask(taskId: number) {
        let taskIndex = this.todoList.findIndex(val => val.taskId === taskId);
        this.todoList.splice(taskIndex, 1);
    }
      

}