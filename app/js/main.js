System.register(['bootstrap', 'aurelia-validation'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_validation_1;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-validation', function (config) {
            config.useViewStrategy(aurelia_validation_1.TWBootstrapViewStrategy.AppendToInput);
        }); //Add this line to load the plugin
        aurelia.start().then(function (a) { return a.setRoot('app', document.body); });
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (_1) {},
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUlBLG1CQUEwQixPQUFnQjtRQUN0QyxPQUFPLENBQUMsR0FBRzthQUNOLHFCQUFxQixFQUFFO2FBQ3ZCLGtCQUFrQixFQUFFO2FBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRyxVQUFDLE1BQXdCO1lBQ3BELE1BQU0sQ0FBQyxlQUFlLENBQU8sNENBQXdCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQ0FBa0M7UUFFMUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFURCxpQ0FTQyxDQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL2FwcC90cyJ9
