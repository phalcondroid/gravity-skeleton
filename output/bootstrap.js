///<reference path="./Definitions/gravity.d.ts"/>
System.register(["./Config/AppConfig"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppConfig_1, gravity;
    return {
        setters: [
            function (AppConfig_1_1) {
                AppConfig_1 = AppConfig_1_1;
            }
        ],
        execute: function () {///<reference path="./Definitions/gravity.d.ts"/>
            gravity = new Gravity.Application();
            gravity.setScope(Environment.Scope.LOCAL);
            gravity.setConfig(AppConfig_1.AppConfig.getConfig());
            gravity.start();
        }
    };
});
