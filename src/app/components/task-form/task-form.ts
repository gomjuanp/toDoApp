import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../services/task/task';


@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {

// Improting TaskService to use it in the component
  constructor(private taskService: TaskService) {}

  // Creating a form group for the task form
  taskForm !: FormGroup;
  UserTasks!: Task[];

  //When the component is initialized, the validator for the task form are created
  ngOnInit() {
    this.taskForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'startDate': new FormControl(null, Validators.required),
      'deadline': new FormControl(null, Validators.required),
      'description': new FormControl(''),
    });
  }
  
  // Span to display the success message
  successMessage: boolean = false;

  //When submitting the form, the task is created and added to the task service
  onSubmit() {
  this.UserTasks = this.taskService.getTasks()

  // Create a new Task object
  const NewTask: Task = {
    id: this.UserTasks.length === 0 ? 1 : this.UserTasks[this.UserTasks.length - 1].id + 1,
    name: this.taskForm.value.name,
    startDate: this.taskForm.value.startDate,
    deadline: this.taskForm.value.deadline,
    description: this.taskForm.value.description
  };

  // Try to add the task to the task service
  try {
    this.taskService.addNewtask(NewTask);
  } catch (error) {
    console.error('Error adding the task with name: ' + NewTask.id);
    console.log('Status 500: internal server error.');
    this.taskForm.reset();
  } finally {
    // Update the UserTask list
    this.UserTasks = this.taskService.getTasks();
    console.log('Status 200: OK');
    this.taskForm.reset();
    
    // Display the success message for 1 second
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 1000);

  }
}

}
