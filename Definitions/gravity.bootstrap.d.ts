
declare namespace Gravity {
    /**
     *
     * @type
     */
    class Modal extends View.Div {
        /**
         *
         */
        private modalDialog;
        /**
         *
         */
        private content;
        /**
         *
         */
        private body;
        /**
         *
         */
        private header;
        /**
         *
         */
        private footer;
        /**
         *
         */
        initialize(): void;
        /**
         *
         */
        private setDefault();
        /**
         *
         */
        setLarge(): this;
        /**
         *
         */
        setSmall(): this;
        /**
         *
         */
        setHeader(title: any): this;
        /**
         *
         */
        setBody(body: any): this;
        /**
         *
         */
        setFooter(footer: any): this;
        /**
         *
         */
        launch(): this;
        hide(): this;
    }
}
declare namespace Gravity {
    class Paginator extends View.Nav {
        ul: View.Ul;
        params: string;
        model: ObjectConstructor;
        initialize(): void;
        private setCountPages();
        private ctrlException(data);
        /**
         *
         */
        createPages(): void;
        /**
         *
         */
        setPrevious(): void;
        /**
         *
         */
        setNext(): void;
        /**
         *
         */
        verifyIndex(large: any, actualPage: any, newPage: any): any[];
        /**
         *
         */
        iteratePages(total: any, large?: boolean): void;
        /**
         *
         */
        clickPage(element: any): void;
    }
}
declare namespace Gravity {
    /**
     * [Tabs description]
     * @type {[type]}
     */
    class Tabs extends View.Div {
        private idStr;
        /**
         *
         */
        initialize(): void;
        /**
         *
         */
        setHeader(header: any[]): void;
        /**
         *
         */
        setContent(content: any): void;
    }
}
