import { Component } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../services/task/task'

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {

  constructor( public taskService: TaskService){}

  UserTasks!: Task[];

  TaskEdit: boolean = false;

  

  ngOnInit(){
    this.UserTasks = this.taskService.getTasks();
    console.log(this.UserTasks[0])
  }

}
