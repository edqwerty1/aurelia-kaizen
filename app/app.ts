import {EventAggregator} from 'aurelia-event-aggregator';
import {TodoListUpdatedMessage} from './todo-list-updated-message';
import {inject} from 'aurelia-framework';
import {TodoStore} from './todo-store';

@inject(EventAggregator, TodoStore)
export class App {
    message: string = 'To Do List Implemented with Aurelia';
    currentTask: string = "";
    hasFocus: boolean = true;
    tasks: string[] = [];
    colour: string = "black";
    private colours: string[] = [
        "red", "yellow", "pink", "green", "purple", "black"
    ];

    constructor(private _eventAggregator, private _todoStore: TodoStore) {
        _eventAggregator.subscribe(TodoListUpdatedMessage, todos => {
            this.tasks = todos.todos.map(todo => todo.message);
        });
    }

    public Load() {
        this._todoStore.loadTodos();
    }

    public GetMessage() {
        return this.message;
    }

    public AddTask() {
        this.tasks.push(this.currentTask);
        this.currentTask = "";
        this.hasFocus = true;
        this.colour = this.colours[Math.floor((Math.random() * 6))];
    }

    public RemoveTask(index) {
        this.tasks.splice(index, 1);
    }
}