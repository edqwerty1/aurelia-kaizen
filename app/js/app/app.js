/// <reference path="../typings/main.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var App;
    return {
        setters:[],
        execute: function() {
            App = (function () {
                function App() {
                    this.message = 'To Do List Implemented with Aurelia';
                    this.currentTask = "";
                    this.hasFocus = true;
                    this.tasks = [];
                    this.colour = "black";
                    this.colours = [
                        "red", "yellow", "pink", "green", "purple", "black"
                    ];
                }
                App.prototype.GetMessage = function () {
                    return this.message;
                };
                App.prototype.AddTask = function () {
                    this.tasks.push(this.currentTask);
                    this.currentTask = "";
                    this.hasFocus = true;
                    this.colour = this.colours[Math.floor((Math.random() * 6))];
                };
                App.prototype.RemoveTask = function (index) {
                    this.tasks.splice(index, 1);
                };
                return App;
            }());
            exports_1("App", App);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDOzs7Ozs7OztZQUU3QztnQkFBQTtvQkFDRSxZQUFPLEdBQVcscUNBQXFDLENBQUM7b0JBQ3hELGdCQUFXLEdBQVUsRUFBRSxDQUFDO29CQUN4QixhQUFRLEdBQVksSUFBSSxDQUFDO29CQUN6QixVQUFLLEdBQVksRUFBRSxDQUFDO29CQUNwQixXQUFNLEdBQVUsT0FBTyxDQUFDO29CQUNoQixZQUFPLEdBQWE7d0JBQ3hCLEtBQUssRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUUsT0FBTztxQkFDbEQsQ0FBQTtnQkFlSCxDQUFDO2dCQWRRLHdCQUFVLEdBQWpCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN4QixDQUFDO2dCQUVNLHFCQUFPLEdBQWQ7b0JBQ0csSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFFTSx3QkFBVSxHQUFqQixVQUFrQixLQUFLO29CQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0gsVUFBQztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQscUJBdUJDLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5qcyIsInNvdXJjZVJvb3QiOiIvYXBwL3RzIn0=
