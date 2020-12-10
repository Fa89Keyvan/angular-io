import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  template: `
    <form [formGroup]="_checkOutForm" (ngSubmit)="assignTask()">
      <div>
        <label>Task title</label>
        <input type="text" formControlName="taskTitle" />
      </div>
      <div>
        <label>Assign to</label>
        <input type="text" formControlName="assignTo" />
      </div>
      <div>
        <button type="submit">Assign</button>
      </div>  
    </form>
  `,
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  _checkOutForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private taskService : TaskService) {
    this._checkOutForm = formBuilder.group({
      taskTitle:"",
      assignTo:""
    });
  }

  ngOnInit(): void {
  }


  assignTask(){

    let taskTitle = this._checkOutForm.get("taskTitle")?.value;
    let assignTo = this._checkOutForm.get("assignTo")?.value;

    this.taskService.assignTask(taskTitle, assignTo);

  }

}
