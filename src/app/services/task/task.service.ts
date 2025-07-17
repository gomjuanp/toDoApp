import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


// Array to store the tasks
UserTasks: Task[] = [];

  constructor() {}

  // Method to get the tasks
  getTasks(){
    return this.UserTasks;
  }

  // Method to add a new task
  addNewtask(NewTask: Task){
    this.UserTasks.push(NewTask);
  }

  // Method to delete a task
  deleteTask(id: number){

    let index: number;

    // Find the index of the task with the given id
    this.UserTasks.forEach(task => {

      if(task.id === id){
        index = this.UserTasks.indexOf(task);
        this.UserTasks.splice(index, 1);
      }

    });
    
  }

}
