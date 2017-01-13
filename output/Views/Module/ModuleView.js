///<reference path="../../Definitions/gravity.d.ts"/>
System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var ModuleView;
    return {
        setters: [],
        execute: function () {///<reference path="../../Definitions/gravity.d.ts"/>
            ModuleView = (function (_super) {
                __extends(ModuleView, _super);
                function ModuleView() {
                    return _super.apply(this, arguments) || this;
                }
                /**
                 * Create and render all html objects
                 */
                ModuleView.prototype.initialize = function () {
                    var div = this.getByTag("div");
                    var text = this.getVar("hello");
                    for (var k in div) {
                        div[k].append([
                            new Html.H1().append(text)
                        ]);
                    }
                };
                return ModuleView;
            }(View.Component));
            exports_1("ModuleView", ModuleView);
        }
    };
});
