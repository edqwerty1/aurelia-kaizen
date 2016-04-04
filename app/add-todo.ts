import { inject } from 'aurelia-framework';
import {TodoStore} from './todo-store';
import {Validation, ValidationGroup} from 'aurelia-validation';

@inject(TodoStore, Validation)
export class AddTodo {
    currentTask: string = "";
    hasFocus: boolean = true;
    validation : ValidationGroup ;

    constructor(private _todoStore: TodoStore, valiation: Validation) {

        this.validation = valiation.on(this).ensure('currentTask').isNotEmpty().hasMaxLength(20);
    }

    public AddTask() {
        this.validation.validate()
            .then(() => {
                this._todoStore.addTodo(this.currentTask);
                this.currentTask = "";
                this.hasFocus = true;
            })
            .catch(() => {
                console.log("Validation error!")
            });
    }
}