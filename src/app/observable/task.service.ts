import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public _tasksListSource = new Subject<Task>();

  //taskAssiged$ = this._tasksListSource.asObservable();
  //taskConfirmed$ = this._tasksListSource.asObservable();

  constructor() { }

  assignTask(taskName : string, assignTo : string){
    
    this._tasksListSource.next(new Task(taskName, assignTo));

  }

  confirmTask(taskName : string){
    //this._tasksListSource.next()
  }

}
