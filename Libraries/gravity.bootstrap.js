var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="./definitions/jquery.d.ts"/>
/// <reference path="./definitions/gravity.d.ts"/>
var Gravity;
/// <reference path="./definitions/jquery.d.ts"/>
/// <reference path="./definitions/gravity.d.ts"/>
(function (Gravity) {
    /**
     *
     * @type
     */
    var Modal = (function (_super) {
        __extends(Modal, _super);
        function Modal() {
            return _super.apply(this, arguments) || this;
        }
        /**
         *
         */
        Modal.prototype.initialize = function () {
            this.attr({
                "class": "modal fade",
                "tabindex": "-1",
                "role": "dialog",
                "aria-labelledby": "myModalLabel"
            });
            this.setDefault();
        };
        /**
         *
         */
        Modal.prototype.setDefault = function () {
            this.modalDialog = new View.Div(this.context);
            this.modalDialog.attr({
                "class": "modal-dialog",
                "role": "document"
            });
            this.content = new View.Div(this.context);
            this.content.attr({
                "class": "modal-content"
            });
            this.header = new View.Div(this.context);
            this.header.class("modal-header");
            this.body = new View.Div(this.context);
            this.body.class("modal-body");
            this.footer = new View.Div(this.context);
            this.footer.class("modal-footer");
            this.content.append([
                this.header,
                this.body,
                this.footer
            ]);
            this.modalDialog.append(this.content);
            this.append(this.modalDialog);
        };
        /**
         *
         */
        Modal.prototype.setLarge = function () {
            this.modalDialog.class("modal-dialog modal-lg");
            return this;
        };
        /**
         *
         */
        Modal.prototype.setSmall = function () {
            this.modalDialog.class("modal-dialog modal-sm");
            return this;
        };
        /**
         *
         */
        Modal.prototype.setHeader = function (title) {
            var closeButton = new View.Div(this.context);
            closeButton.attr({
                "class": "close",
                "type": "button",
                "data-dismiss": "modal",
                "aria-label": "Close"
            });
            var span = new View.Span(this.context);
            span.attr("aria-hidden", "true");
            span.setInnerHtml("&times");
            closeButton.append(span);
            this.header.append([
                closeButton
            ]);
            if (title != "") {
                var titleHeader = new View.H4(this.context);
                titleHeader.class("modal-title");
                titleHeader.append(title);
                this.header.append(titleHeader);
            }
            return this;
        };
        /**
         *
         */
        Modal.prototype.setBody = function (body) {
            this.body.append(body);
            return this;
        };
        /**
         *
         */
        Modal.prototype.setFooter = function (footer) {
            this.footer.append(footer);
            return this;
        };
        /**
         *
         */
        Modal.prototype.launch = function () {
            $(this.element).modal("show");
            return this;
        };
        Modal.prototype.hide = function () {
            $(this.element).modal("hide");
            return this;
        };
        return Modal;
    }(View.Div));
    Gravity.Modal = Modal;
})(Gravity || (Gravity = {}));
/// <reference path="./definitions/jquery.d.ts"/>
/// <reference path="./definitions/gravity.d.ts"/>
var Gravity;
/// <reference path="./definitions/jquery.d.ts"/>
/// <reference path="./definitions/gravity.d.ts"/>
(function (Gravity) {
    var Paginator = (function (_super) {
        __extends(Paginator, _super);
        function Paginator() {
            var _this = _super.apply(this, arguments) || this;
            _this.params = "";
            _this.model = Object;
            return _this;
        }
        Paginator.prototype.initialize = function () {
            this.getDi().setPersistent("actualPage", 1);
            this.ctrlException(this.getArgs()[0]);
            this.setCountPages();
        };
        Paginator.prototype.setCountPages = function () {
            var model = this.getArgs()[0].model;
            var params = this.getArgs()[0].params;
            this.em.count(model, params).response(function (count) {
                this.setCountCallback(count);
                this.ul = new View.Ul(this.context);
                this.ul.class("pagination");
                this.attr({
                    "aria-label": "Page navigation",
                    "style": "margin: 0 auto; text-align : center;"
                });
                this.getDi().setPersistent("countPages", count.getCount());
                var pages = Math.ceil(this.getDi().getPersistent("countPages") / 10);
                this.getDi().setPersistent("numberPages", pages);
                this.getDi().setPersistent("lastPage", this.getDi().getPersistent("actualPage"));
                this.createPages();
                this.append(this.ul);
            }.bind(this));
        };
        Paginator.prototype.setCountCallback = function (count) {
            if (typeof this.getArgs()[0].callback == "function") {
                this.getArgs()[0].callback.bind(this.context)(count.getCount());
            }
        };
        Paginator.prototype.ctrlException = function (data) {
            for (var key in data) {
                switch (key) {
                    case "model":
                    case "clickPage":
                        return true;
                    default:
                        throw "Required paginator arguments are missing";
                }
            }
        };
        /**
         *
         */
        Paginator.prototype.createPages = function () {
            var pages = this.getDi().getPersistent("numberPages");
            this.iteratePages(pages, true);
        };
        /**
         *
         */
        Paginator.prototype.setPrevious = function () {
            this.ul.append(new View.Li(this.context).append(new View.A(this.context)
                .attr({
                "aria-label": "Previous"
            })
                .append("<")));
        };
        /**
         *
         */
        Paginator.prototype.setNext = function () {
            this.ul.append(new View.Li(this.context).append(new View.A(this.context)
                .attr({
                "aria-label": "Next"
            })
                .append(">")));
        };
        /**
         *
         */
        Paginator.prototype.verifyIndex = function (large, actualPage, newPage) {
            var index = this.getDi().getPersistent("index") ? parseInt(this.getDi().getPersistent("index")) : 0;
            if (large) {
                if (actualPage > 8) {
                    newPage = parseInt(actualPage) + 1;
                    var partialIndex = newPage - 9;
                    this.getDi().setPersistent("index", index);
                }
                if (newPage <= 9) {
                    partialIndex = 0;
                }
            }
            return [partialIndex, newPage];
        };
        /**
         *
         */
        Paginator.prototype.iteratePages = function (total, large) {
            if (large === void 0) { large = false; }
            var actualPage = this.getDi().getPersistent("actualPage");
            this.ul.empty();
            var pages = total;
            var partial = 9;
            var verfy = this.verifyIndex(large, actualPage, partial);
            var index = verfy[0];
            partial = verfy[1];
            this.setPrevious();
            var bullets = true;
            if (partial > pages) {
                var result = (partial - pages);
                partial = partial - result - 1;
            }
            else {
                if (partial == 0) {
                    partial = 1;
                    index = 0;
                }
            }
            var fn = this.clickPage.bind(this);
            if (pages == 1 || pages == 0) {
                fn = function () { };
            }
            for (var i = index; i < partial; i++) {
                var li = new View.Li(this.context);
                if (i + 1 == actualPage) {
                    li.class("active");
                }
                this.ul.append(li.attr("id", "paginator-page-" + (i + 1))
                    .append(new View.A(this.context)
                    .append(i + 1)).click(fn));
            }
            if (large) {
                if (pages > 8) {
                    this.ul.append(new View.Li(this.context)
                        .append(new View.A(this.context)
                        .append("...")).attr("disabled", "disabled"));
                }
                this.ul.append(new View.Li(this.context)
                    .attr("id", "paginator-page-" + total)
                    .append(new View.A(this.context)
                    .append(pages)).click(fn));
            }
            this.setNext();
            var actualLi = this.getById("paginator-page-" + parseInt(actualPage));
            if (actualLi) {
                actualLi.class("active");
            }
            this.getDi().setPersistent("lastPage", this.getDi().getPersistent("actualPage"));
        };
        /**
         *
         */
        Paginator.prototype.clickPage = function (element) {
            var obj = new View.ViewElement(element);
            obj.attr("class", "active");
            this.getDi().setPersistent("actualPage", parseInt(obj.html()));
            this.getArgs()[0].clickPage.bind(this.context)(parseInt(obj.html()));
            this.createPages();
        };
        return Paginator;
    }(View.Nav));
    Gravity.Paginator = Paginator;
})(Gravity || (Gravity = {}));
/// <reference path="./definitions/jquery.d.ts"/>
/// <reference path="./definitions/gravity.d.ts"/>
var Gravity;
/// <reference path="./definitions/jquery.d.ts"/>
/// <reference path="./definitions/gravity.d.ts"/>
(function (Gravity) {
    /**
     * [Tabs description]
     * @type {[type]}
     */
    var Tabs = (function (_super) {
        __extends(Tabs, _super);
        function Tabs() {
            return _super.apply(this, arguments) || this;
        }
        /**
         *
         */
        Tabs.prototype.initialize = function () {
            this.idStr = this.getRandomString();
        };
        /**
         *
         */
        Tabs.prototype.setHeader = function (header) {
            if (!Array.isArray(header)) {
                throw "Header must be array";
            }
            var ul = new View.Ul(this.getContext());
            ul.attr("role", "tablist");
            ul.class("nav nav-tabs");
            var i = 0;
            for (var key in header) {
                var li = new View.Li(this.getContext());
                var cls = "";
                if (i == 0) {
                    cls = "active";
                }
                li.attr({
                    "class": cls,
                    "role": "presentation",
                });
                var a = new View.A(this.getContext());
                a.attr({
                    "aria-controls": "home",
                    "role": "tab",
                    "data-toggle": "tab",
                    "href": "#tab" + i + this.idStr
                });
                a.append(header[key]);
                li.append(a);
                ul.append(li);
                this.append(ul);
                i++;
            }
        };
        /**
         *
         */
        Tabs.prototype.setContent = function (content) {
            if (!Array.isArray(content)) {
                throw "Header must be array";
            }
            var divContent = new View.Div(this.getContext());
            divContent.class("tab-content");
            var i = 0;
            for (var key in content) {
                var divRow = new View.Div(this.getContext());
                var cls = "";
                if (i == 0) {
                    cls = " active";
                }
                divRow.attr({
                    "role": "tabpanel",
                    "class": "tab-pane" + cls,
                    "id": "tab" + i + this.idStr
                });
                divRow.append(content[key]);
                divContent.append(divRow);
                i++;
            }
            this.append(divContent);
        };
        return Tabs;
    }(View.Div));
    Gravity.Tabs = Tabs;
})(Gravity || (Gravity = {}));
