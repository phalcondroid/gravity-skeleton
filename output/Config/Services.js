///<reference path="../Definitions/gravity.d.ts"/>
System.register(["../Library/MyCustomComponent"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MyCustomComponent_1, Services;
    return {
        setters: [
            function (MyCustomComponent_1_1) {
                MyCustomComponent_1 = MyCustomComponent_1_1;
            }
        ],
        execute: function () {///<reference path="../Definitions/gravity.d.ts"/>
            Services = (function () {
                function Services() {
                }
                Services.prototype.initialize = function (di) {
                    //add your ts or js components
                    di.set("sampleComponent", new MyCustomComponent_1.MyCustomComponent);
                };
                return Services;
            }());
            exports_1("Services", Services);
        }
    };
});
