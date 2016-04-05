import {EventAggregator} from 'aurelia-event-aggregator';
import {TodoListUpdatedMessage} from './todo-list-updated-message';
import {inject} from 'aurelia-framework';
import {HttpClient, json } from 'aurelia-fetch-client';
import {ITodos} from './models/todos';

@inject(HttpClient, EventAggregator)
export class TodoStore {

    constructor(private _http: HttpClient, private _eventAggregator: EventAggregator) {
        _http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:8080/api/');
        });
    };

    loadTodos() {
        this._http.fetch('todos/',
            { method: 'get' })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this._eventAggregator.publish(new TodoListUpdatedMessage(data.todos));
            })
            .catch(e => {
                console.log(e);
            });
    }

    removeToDos(id: number) {
        this._http.fetch(`todos/${id}`, { method: 'delete' })
            .then(response => response.json())
            .then((data: ITodos) => {
                this.loadTodos();
            })
            .catch(e => {
                console.log(e);
            });
    };

    addTodo(message: string) {
        console.log(message);
        this._http.fetch(`todos/`, {
            method: 'post',
            body: json({ "message": message })
        })
            .then(response => response.json())
            .then((data: ITodos) => {
                this.loadTodos();
            })
            .catch(e => {
                console.log(e);
            });
    };

}