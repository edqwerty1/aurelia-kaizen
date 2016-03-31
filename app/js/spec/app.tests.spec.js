/// <reference path="../typings/main.d.ts" />
System.register(['../src/app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_1;
    return {
        setters:[
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            describe('App Tests', function () {
                var app = new app_1.App();
                it('should get a message', function () {
                    expect(app.GetMessage()).toBe('Welcome to Aurelia');
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvYXBwLnRlc3RzLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDOzs7Ozs7Ozs7OztZQUk3QyxRQUFRLENBQUMsV0FBVyxFQUFFO2dCQUVsQixJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQUcsRUFBRSxDQUFDO2dCQUVwQixFQUFFLENBQUMsc0JBQXNCLEVBQUU7b0JBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQSIsImZpbGUiOiJzcGVjL2FwcC50ZXN0cy5zcGVjLmpzIiwic291cmNlUm9vdCI6Ii9hcHAvdHMifQ==
