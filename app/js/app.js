System.register(['aurelia-event-aggregator', './todo-list-updated-message', 'aurelia-framework', './todo-store'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_event_aggregator_1, todo_list_updated_message_1, aurelia_framework_1, todo_store_1;
    var App;
    return {
        setters:[
            function (aurelia_event_aggregator_1_1) {
                aurelia_event_aggregator_1 = aurelia_event_aggregator_1_1;
            },
            function (todo_list_updated_message_1_1) {
                todo_list_updated_message_1 = todo_list_updated_message_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (todo_store_1_1) {
                todo_store_1 = todo_store_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(_eventAggregator, _todoStore) {
                    var _this = this;
                    this._eventAggregator = _eventAggregator;
                    this._todoStore = _todoStore;
                    this.message = 'To Do List Implemented with Aurelia';
                    this.currentTask = "";
                    this.hasFocus = true;
                    this.todos = [];
                    this.colour = "black";
                    this.colours = [
                        "red", "yellow", "pink", "green", "purple", "black"
                    ];
                    _eventAggregator.subscribe(todo_list_updated_message_1.TodoListUpdatedMessage, function (todos) {
                        _this.todos = todos.todos;
                    });
                }
                App.prototype.Load = function () {
                    this._todoStore.loadTodos();
                };
                App.prototype.AddTask = function () {
                    this._todoStore.addTodo(this.currentTask);
                    this.currentTask = "";
                    this.hasFocus = true;
                    this.colour = this.colours[Math.floor((Math.random() * 6))];
                };
                App.prototype.RemoveTask = function (id) {
                    this._todoStore.removeToDos(id);
                };
                App = __decorate([
                    aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, todo_store_1.TodoStore), 
                    __metadata('design:paramtypes', [Object, todo_store_1.TodoStore])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQVVJLGFBQW9CLGdCQUFnQixFQUFVLFVBQXFCO29CQVZ2RSxpQkE4QkM7b0JBcEJ1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQUE7b0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztvQkFUbkUsWUFBTyxHQUFXLHFDQUFxQyxDQUFDO29CQUN4RCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztvQkFDekIsYUFBUSxHQUFZLElBQUksQ0FBQztvQkFDekIsVUFBSyxHQUFZLEVBQUUsQ0FBQztvQkFDcEIsV0FBTSxHQUFXLE9BQU8sQ0FBQztvQkFDakIsWUFBTyxHQUFhO3dCQUN4QixLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU87cUJBQ3RELENBQUM7b0JBR0UsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGtEQUFzQixFQUFFLFVBQUEsS0FBSzt3QkFDcEQsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUM3QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVNLGtCQUFJLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEMsQ0FBQztnQkFFTSxxQkFBTyxHQUFkO29CQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBRU0sd0JBQVUsR0FBakIsVUFBa0IsRUFBUztvQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBOUJMO29CQUFDLDBCQUFNLENBQUMsMENBQWUsRUFBRSxzQkFBUyxDQUFDOzt1QkFBQTtnQkErQm5DLFVBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELHFCQThCQyxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvYXBwL3RzIn0=
