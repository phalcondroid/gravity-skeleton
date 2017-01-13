/// <reference path="../../../output/gravity.d.ts"/>
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
        execute: function () {/// <reference path="../../../output/gravity.d.ts"/>
            ModuleView = (function (_super) {
                __extends(ModuleView, _super);
                function ModuleView() {
                    return _super.apply(this, arguments) || this;
                }
                /**
                 * Create and render all html objects
                 */
                ModuleView.prototype.initialize = function () {
                    var body = this.getByTag("body");
                    var div = new Html.Div();
                    var text = this.getVar("hello");
                    var button = new Html.Button();
                    button.click(function () {
                        div.append(text);
                    });
                    body.append([
                        button,
                        "<br/>",
                        div
                    ]);
                };
                return ModuleView;
            }(View.Component));
            exports_1("ModuleView", ModuleView);
        }
    };
});
