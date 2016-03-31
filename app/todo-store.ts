import {EventAggregator} from 'aurelia-event-aggregator';
import {TodoListUpdatedMessage} from './todo-list-updated-message';
import { inject } from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient, EventAggregator)
export class TodoStore {

    constructor(private _http, private _eventAggregator) {
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
            .then(data => {
                this._eventAggregator.publish(new TodoListUpdatedMessage(data.Todos));
            })
            .catch(e => {
                console.log(e);
                this.postResult = e.status + '-' + e.statusText;
            });
    }

}