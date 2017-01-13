System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MyCustomComponent;
    return {
        setters: [],
        execute: function () {
            MyCustomComponent = (function () {
                function MyCustomComponent() {
                    console.log("My custom component");
                }
                return MyCustomComponent;
            }());
            exports_1("MyCustomComponent", MyCustomComponent);
        }
    };
});
