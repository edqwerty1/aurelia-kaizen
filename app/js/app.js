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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7Ozs7Ozs7O1lBRTdDO2dCQUFBO29CQUNFLFlBQU8sR0FBVyxxQ0FBcUMsQ0FBQztvQkFDeEQsZ0JBQVcsR0FBVSxFQUFFLENBQUM7b0JBQ3hCLGFBQVEsR0FBWSxJQUFJLENBQUM7b0JBQ3pCLFVBQUssR0FBWSxFQUFFLENBQUM7b0JBQ3BCLFdBQU0sR0FBVSxPQUFPLENBQUM7b0JBQ2hCLFlBQU8sR0FBYTt3QkFDeEIsS0FBSyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBRSxPQUFPO3FCQUNsRCxDQUFBO2dCQWVILENBQUM7Z0JBZFEsd0JBQVUsR0FBakI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRU0scUJBQU8sR0FBZDtvQkFDRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUVNLHdCQUFVLEdBQWpCLFVBQWtCLEtBQUs7b0JBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFDSCxVQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCxxQkF1QkMsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL2FwcC90cyJ9
