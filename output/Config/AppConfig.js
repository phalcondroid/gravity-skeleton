///<reference path="../Definitions/gravity.d.ts"/>
System.register(["./Services", "../Controllers/ModuleController", "../Views/Module/ModuleView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Services_1, ModuleController_1, ModuleView_1, AppConfig;
    return {
        setters: [
            function (Services_1_1) {
                Services_1 = Services_1_1;
            },
            function (ModuleController_1_1) {
                ModuleController_1 = ModuleController_1_1;
            },
            function (ModuleView_1_1) {
                ModuleView_1 = ModuleView_1_1;
            }
        ],
        execute: function () {///<reference path="../Definitions/gravity.d.ts"/>
            AppConfig = (function () {
                function AppConfig() {
                }
                /**
                 * Get and configure project dependences
                 */
                AppConfig.getConfig = function () {
                    var config = new Environment.Config();
                    config.setConfig(this.getLocalConfig(), Environment.Scope.LOCAL);
                    config.setConfig(this.getDevelopmentConfig(), Environment.Scope.DEV);
                    return config;
                };
                /**
                 * Configuration project to LOCAL environment
                 */
                AppConfig.getLocalConfig = function () {
                    return {
                        "urls": {
                            "baseUrl": "http://localhost/testgravity/",
                            "urlSample": "http://urls/jsjs/"
                        },
                        "controllers": [
                            {
                                "name": ModuleController_1.ModuleController,
                                "views": [
                                    ModuleView_1.ModuleView
                                ]
                            },
                        ],
                        "services": Services_1.Services
                    };
                };
                /**
                 * Configuration project to DEVELOPMENT environment
                 */
                AppConfig.getDevelopmentConfig = function () {
                    var config = this.getLocalConfig();
                    config["urls"] = {
                        "baseUrl": "http://your-dev-server/api/",
                        "urlSample": "http://other-url/api/"
                    };
                    return config;
                };
                return AppConfig;
            }());
            exports_1("AppConfig", AppConfig);
        }
    };
});
