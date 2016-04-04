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
    var Todolist;
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
            Todolist = (function () {
                function Todolist(_eventAggregator, _todoStore) {
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
                Todolist = __decorate([
                    aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, todo_store_1.TodoStore), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_event_aggregator_1.EventAggregator !== 'undefined' && aurelia_event_aggregator_1.EventAggregator) === 'function' && _a) || Object, todo_store_1.TodoStore])
                ], Todolist);
                return Todolist;
                var _a;
            }());
            exports_1("Todolist", Todolist);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBR0ksa0JBQW9CLGdCQUFrQyxFQUFVLFVBQXFCO29CQUh6RixpQkFVQztvQkFQdUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtvQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFXO29CQUZyRixVQUFLLEdBQVksRUFBRSxDQUFDO29CQUdoQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwQixnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsa0RBQXNCLEVBQUUsVUFBQSxLQUFLO3dCQUNwRCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQzdCLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2hDLENBQUM7Z0JBVkw7b0JBQUMsMEJBQU0sQ0FBQywwQ0FBZSxFQUFFLHNCQUFTLENBQUM7OzRCQUFBO2dCQVduQyxlQUFDOztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsK0JBVUMsQ0FBQSIsImZpbGUiOiJ0b2RvbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvYXBwL3RzIn0=
