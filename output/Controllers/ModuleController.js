///<reference path="../Definitions/gravity.d.ts"/>
System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var ModuleController;
    return {
        setters: [],
        execute: function () {///<reference path="../Definitions/gravity.d.ts"/>
            ModuleController = (function (_super) {
                __extends(ModuleController, _super);
                function ModuleController() {
                    return _super.apply(this, arguments) || this;
                }
                /**
                 * Create your code here
                 */
                ModuleController.prototype.initialize = function () {
                    this.setVar("hello", "Hello World");
                };
                return ModuleController;
            }(Logic.Controller));
            exports_1("ModuleController", ModuleController);
        }
    };
});
