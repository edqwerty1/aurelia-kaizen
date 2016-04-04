import {bindable} from 'aurelia-framework';

export class TodoDetail {
    @bindable task;
    constructor(){
        console.log(this.task);
    }
}