import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-bord',
  template: `
  <app-task-form></app-task-form>

  <div>
    <h3>Board</h3>
    <ul>
      <li *ngFor="let item of tasksList"> Task {{item._taskName}} assigned to {{item._assignTo}}</li>
    </ul>
  </div>
  `,
  styleUrls: ['./bord.component.css']
})
export class BordComponent implements OnInit {


  tasksList:Array<Task> = new Array<Task>();

  constructor(private _taskService: TaskService) {

    _taskService._tasksListSource.subscribe({
      next: (task)=>{
        this.tasksList.push(task);
      }
    });

  }

  ngOnInit(): void {
  }



}
