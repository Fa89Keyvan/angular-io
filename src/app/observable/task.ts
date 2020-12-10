export class Task {
    _taskName:string;
    _confirmed:boolean;
    _assignTo:string;
    
    constructor(taskName : string, assignTo : string){
      this._taskName = taskName;
      this._assignTo = assignTo;
      this._confirmed = false;
    }

}
