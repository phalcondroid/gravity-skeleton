///<reference path="../Definitions/gravity.d.ts"/>
System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters: [],
        execute: function () {///<reference path="../Definitions/gravity.d.ts"/>
            /**
             * Person ajax model
             */
            Person = (function (_super) {
                __extends(Person, _super);
                function Person() {
                    var _this = _super.apply(this, arguments) || this;
                    /**
                     * the attributes must be initialized with any value, its mandatory
                     */
                    _this.id = 0;
                    /**
                     * Person name
                     */
                    _this.name = "";
                    /**
                     * Last name
                     */
                    _this.last = "";
                    return _this;
                }
                /**
                 * if you want initialize anything data
                 */
                Person.prototype.initialize = function () {
                };
                /**
                 * Setter to id attribute
                 * @param Number id
                 * @return void
                 */
                Person.prototype.setId = function (id) {
                    this.id = id;
                };
                /**
                 * Getter to id attribute
                 * @return Number id
                 */
                Person.prototype.getId = function () {
                    return this.id;
                };
                /**
                 * Setter to name attribute
                 * @param String name
                 * @return Void
                 */
                Person.prototype.setName = function (name) {
                    return this.name = name;
                };
                /**
                 * Getter to id attribute
                 * @return String name
                 */
                Person.prototype.getName = function () {
                    return this.name;
                };
                /**
                 * Setter to name attribute
                 * @param String last
                 * @return Void
                 */
                Person.prototype.setLast = function (last) {
                    this.last = last;
                };
                /**
                 * Getter to id attribute
                 * @return String id
                 */
                Person.prototype.getLast = function () {
                    return this.last;
                };
                return Person;
            }(Data.ModelAjax));
            exports_1("Person", Person);
        }
    };
});
