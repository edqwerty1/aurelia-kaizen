System.register(['aurelia-event-aggregator', './todo-list-updated-message', 'aurelia-framework', './todo-store', 'aurelia-validation'], function(exports_1, context_1) {
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
    var aurelia_event_aggregator_1, todo_list_updated_message_1, aurelia_framework_1, todo_store_1, aurelia_validation_1;
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
            },
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(_eventAggregator, _todoStore, valiation) {
                    var _this = this;
                    this._eventAggregator = _eventAggregator;
                    this._todoStore = _todoStore;
                    this.message = 'To Do List Implemented with Aurelia';
                    this.currentTask = "";
                    this.hasFocus = true;
                    this.todos = [];
                    _eventAggregator.subscribe(todo_list_updated_message_1.TodoListUpdatedMessage, function (todos) {
                        _this.todos = todos.todos;
                    });
                    this._todoStore.loadTodos();
                    this.validation = valiation.on(this).ensure('currentTask').isNotEmpty().hasMaxLength(20);
                }
                App.prototype.AddTask = function () {
                    var _this = this;
                    this.validation.validate()
                        .then(function () {
                        _this._todoStore.addTodo(_this.currentTask);
                        _this.currentTask = "";
                        _this.hasFocus = true;
                    })
                        .catch(function () {
                        console.log("Validation error!");
                    });
                };
                App.prototype.RemoveTask = function (id) {
                    this._todoStore.removeToDos(id);
                };
                App = __decorate([
                    aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, todo_store_1.TodoStore, aurelia_validation_1.Validation), 
                    __metadata('design:paramtypes', [Object, todo_store_1.TodoStore, (typeof (_a = typeof aurelia_validation_1.Validation !== 'undefined' && aurelia_validation_1.Validation) === 'function' && _a) || Object])
                ], App);
                return App;
                var _a;
            }());
            exports_1("App", App);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQU9JLGFBQW9CLGdCQUFnQixFQUFVLFVBQXFCLEVBQUUsU0FBcUI7b0JBUDlGLGlCQThCQztvQkF2QnVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBQTtvQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFXO29CQU5uRSxZQUFPLEdBQVcscUNBQXFDLENBQUM7b0JBQ3hELGdCQUFXLEdBQVcsRUFBRSxDQUFDO29CQUN6QixhQUFRLEdBQVksSUFBSSxDQUFDO29CQUN6QixVQUFLLEdBQVksRUFBRSxDQUFDO29CQUloQixnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsa0RBQXNCLEVBQUUsVUFBQSxLQUFLO3dCQUNwRCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQzdCLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RixDQUFDO2dCQUVNLHFCQUFPLEdBQWQ7b0JBQUEsaUJBVUM7b0JBVEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7eUJBQ3JCLElBQUksQ0FBQzt3QkFDRixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQzFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO3dCQUN0QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDekIsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQzt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7b0JBQ3BDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBRU0sd0JBQVUsR0FBakIsVUFBa0IsRUFBUztvQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBOUJMO29CQUFDLDBCQUFNLENBQUMsMENBQWUsRUFBRSxzQkFBUyxFQUFFLCtCQUFVLENBQUM7O3VCQUFBO2dCQStCL0MsVUFBQzs7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELHFCQThCQyxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvYXBwL3RzIn0=
