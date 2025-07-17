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

  // Array to store the tasks
  UserTasks!: Task[];

  // When the component is initialized, the UserTasks array is updated
  ngOnInit(){
    this.UserTasks = this.taskService.getTasks();
  }

}
