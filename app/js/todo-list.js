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
    var TodoList;
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
            TodoList = (function () {
                function TodoList(_eventAggregator, _todoStore) {
                    var _this = this;
                    this._eventAggregator = _eventAggregator;
                    this._todoStore = _todoStore;
                    this.todos = [];
                    console.log("hit ");
                    _eventAggregator.subscribe(todo_list_updated_message_1.TodoListUpdatedMessage, function (todos) {
                        _this.todos = todos.todos;
                    });
                    this._todoStore.loadTodos();
                }
                TodoList.prototype.RemoveTask = function (id) {
                    this._todoStore.removeToDos(id);
                };
                TodoList = __decorate([
                    aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, todo_store_1.TodoStore), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_event_aggregator_1.EventAggregator !== 'undefined' && aurelia_event_aggregator_1.EventAggregator) === 'function' && _a) || Object, todo_store_1.TodoStore])
                ], TodoList);
                return TodoList;
                var _a;
            }());
            exports_1("TodoList", TodoList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8tbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUdJLGtCQUFvQixnQkFBa0MsRUFBVSxVQUFxQjtvQkFIekYsaUJBY0M7b0JBWHVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztvQkFGckYsVUFBSyxHQUFZLEVBQUUsQ0FBQztvQkFHaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEIsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGtEQUFzQixFQUFFLFVBQUEsS0FBSzt3QkFDcEQsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUM3QixDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNoQyxDQUFDO2dCQUVNLDZCQUFVLEdBQWpCLFVBQWtCLEVBQVM7b0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQWRMO29CQUFDLDBCQUFNLENBQUMsMENBQWUsRUFBRSxzQkFBUyxDQUFDOzs0QkFBQTtnQkFlbkMsZUFBQzs7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELCtCQWNDLENBQUEiLCJmaWxlIjoidG9kby1saXN0LmpzIiwic291cmNlUm9vdCI6Ii9hcHAvdHMifQ==
