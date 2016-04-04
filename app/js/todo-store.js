System.register(['aurelia-event-aggregator', './todo-list-updated-message', 'aurelia-framework', 'aurelia-fetch-client'], function(exports_1, context_1) {
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
    var aurelia_event_aggregator_1, todo_list_updated_message_1, aurelia_framework_1, aurelia_fetch_client_1;
    var TodoStore;
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
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            }],
        execute: function() {
            TodoStore = (function () {
                function TodoStore(_http, _eventAggregator) {
                    this._http = _http;
                    this._eventAggregator = _eventAggregator;
                    _http.configure(function (config) {
                        config
                            .useStandardConfiguration()
                            .withBaseUrl('http://localhost:8080/api/');
                    });
                }
                ;
                TodoStore.prototype.loadTodos = function () {
                    var _this = this;
                    this._http.fetch('todos/', { method: 'get' })
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                        _this._eventAggregator.publish(new todo_list_updated_message_1.TodoListUpdatedMessage(data.todos));
                    })
                        .catch(function (e) {
                        console.log(e);
                    });
                };
                TodoStore.prototype.removeToDos = function (id) {
                    var _this = this;
                    this._http.fetch("todos/" + id, { method: 'delete' })
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                        _this.loadTodos();
                    })
                        .catch(function (e) {
                        console.log(e);
                    });
                };
                ;
                TodoStore.prototype.addTodo = function (message) {
                    var _this = this;
                    console.log(message);
                    this._http.fetch("todos/", {
                        method: 'post',
                        body: aurelia_fetch_client_1.json({ "message": message })
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                        _this.loadTodos();
                    })
                        .catch(function (e) {
                        console.log(e);
                    });
                };
                ;
                TodoStore = __decorate([
                    aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient, aurelia_event_aggregator_1.EventAggregator), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_fetch_client_1.HttpClient !== 'undefined' && aurelia_fetch_client_1.HttpClient) === 'function' && _a) || Object, (typeof (_b = typeof aurelia_event_aggregator_1.EventAggregator !== 'undefined' && aurelia_event_aggregator_1.EventAggregator) === 'function' && _b) || Object])
                ], TodoStore);
                return TodoStore;
                var _a, _b;
            }());
            exports_1("TodoStore", TodoStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8tc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFSSxtQkFBb0IsS0FBaUIsRUFBVSxnQkFBaUM7b0JBQTVELFVBQUssR0FBTCxLQUFLLENBQVk7b0JBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFDNUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07d0JBQ2xCLE1BQU07NkJBQ0Qsd0JBQXdCLEVBQUU7NkJBQzFCLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO29CQUNuRCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDOztnQkFFRCw2QkFBUyxHQUFUO29CQUFBLGlCQVVDO29CQVRHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDckIsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7eUJBQ2pCLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7eUJBQ2pDLElBQUksQ0FBQyxVQUFDLElBQUk7d0JBQ1AsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLGtEQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUMxRSxDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLFVBQUEsQ0FBQzt3QkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELCtCQUFXLEdBQVgsVUFBWSxFQUFVO29CQUF0QixpQkFTQztvQkFSRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFTLEVBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQzt5QkFDaEQsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDakMsSUFBSSxDQUFDLFVBQUMsSUFBWTt3QkFDZixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3JCLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUMsVUFBQSxDQUFDO3dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7O2dCQUVELDJCQUFPLEdBQVAsVUFBUSxPQUFlO29CQUF2QixpQkFhQztvQkFaRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7d0JBQ25CLE1BQU0sRUFBRSxNQUFNO3dCQUNkLElBQUksRUFBRSwyQkFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLE9BQU8sRUFBQyxDQUFDO3FCQUNuQyxDQUFDO3lCQUNELElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7eUJBQ2pDLElBQUksQ0FBQyxVQUFDLElBQVk7d0JBQ2YsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNyQixDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLFVBQUEsQ0FBQzt3QkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDOztnQkEvQ0w7b0JBQUMsMEJBQU0sQ0FBQyxpQ0FBVSxFQUFFLDBDQUFlLENBQUM7OzZCQUFBO2dCQWlEcEMsZ0JBQUM7O1lBQUQsQ0FoREEsQUFnREMsSUFBQTtZQWhERCxpQ0FnREMsQ0FBQSIsImZpbGUiOiJ0b2RvLXN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAvdHMifQ==
