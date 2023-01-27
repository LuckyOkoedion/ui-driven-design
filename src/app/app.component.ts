import { Component } from '@angular/core';
import { Task } from './task-interface';
import { TodoListAPI } from './todo-list-api';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoListAPI: TodoListAPI;

  newTaskName = '';

  tasks: Task[] = [{taskId: 1, name: "first task"}];

  displayedColumns: string[] = [ 'taskId','name'];

  tasksDataSource = new MatTableDataSource<Task>(this.tasks);


  constructor() {
    this.todoListAPI = new TodoListAPI();

  }

  ngOnInit() {
    this.tasks = this.todoListAPI.getTasks();
  }

  
  addTask() {
    let id = Math.floor(Math.random() * 100000) + 1;
    let theTask = new Task(id, this.newTaskName);
    console.log(theTask);
    console.log(this.tasks);
    this.todoListAPI.addTask(theTask);
    this.tasks = this.todoListAPI.getTasks();
    this.tasksDataSource = new MatTableDataSource<Task>(this.tasks);
    this.newTaskName = '';
  }


}
