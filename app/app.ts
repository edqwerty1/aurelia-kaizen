/// <reference path="../typings/main.d.ts" />

export class App {
  message: string = 'To Do List Implemented with Aurelia'; 
  currentTask:string = "";
  hasFocus: boolean = true;
  tasks:string[] = [];
  colour:string = "black";
  private colours: string[] = [
      "red","yellow","pink","green","purple", "black"
  ]
  public GetMessage() {
      return this.message;
  }
  
  public AddTask()  {
     this.tasks.push(this.currentTask);
     this.currentTask = "";
     this.hasFocus = true;
     this.colour = this.colours[Math.floor((Math.random()*6))];
  }
  
  public RemoveTask(index)  {
     this.tasks.splice(index, 1);
  }
}