import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
UserTasks: Task[] = [];

  constructor() {}

  getTasks(){
    return this.UserTasks;
  }

  addNewtask(NewTask: Task){
    this.UserTasks.push(NewTask);
  }

  deleteTask(id: number){

    let index: number;

    this.UserTasks.forEach(task => {

      if(task.id === id){
        index = this.UserTasks.indexOf(task);
        this.UserTasks.splice(index, 1);
      }

    });
    
  }

}
