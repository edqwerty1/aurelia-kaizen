System.register(['aurelia-framework', './todo-store', 'aurelia-validation'], function(exports_1, context_1) {
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
    var aurelia_framework_1, todo_store_1, aurelia_validation_1;
    var AddTodo;
    return {
        setters:[
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
            AddTodo = (function () {
                function AddTodo(_todoStore, valiation) {
                    this._todoStore = _todoStore;
                    this.currentTask = "";
                    this.hasFocus = true;
                    this.validation = valiation.on(this).ensure('currentTask').isNotEmpty().hasMaxLength(20);
                }
                AddTodo.prototype.AddTask = function () {
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
                AddTodo = __decorate([
                    aurelia_framework_1.inject(todo_store_1.TodoStore, aurelia_validation_1.Validation), 
                    __metadata('design:paramtypes', [todo_store_1.TodoStore, (typeof (_a = typeof aurelia_validation_1.Validation !== 'undefined' && aurelia_validation_1.Validation) === 'function' && _a) || Object])
                ], AddTodo);
                return AddTodo;
                var _a;
            }());
            exports_1("AddTodo", AddTodo);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10b2RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBS0ksaUJBQW9CLFVBQXFCLEVBQUUsU0FBcUI7b0JBQTVDLGVBQVUsR0FBVixVQUFVLENBQVc7b0JBSnpDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO29CQUN6QixhQUFRLEdBQVksSUFBSSxDQUFDO29CQUtyQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0YsQ0FBQztnQkFFTSx5QkFBTyxHQUFkO29CQUFBLGlCQVVDO29CQVRHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO3lCQUNyQixJQUFJLENBQUM7d0JBQ0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUMxQyxLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzt3QkFDdEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUM7d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO29CQUNwQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQXJCTDtvQkFBQywwQkFBTSxDQUFDLHNCQUFTLEVBQUUsK0JBQVUsQ0FBQzs7MkJBQUE7Z0JBc0I5QixjQUFDOztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQsNkJBcUJDLENBQUEiLCJmaWxlIjoiYWRkLXRvZG8uanMiLCJzb3VyY2VSb290IjoiL2FwcC90cyJ9
