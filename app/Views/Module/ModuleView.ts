/// <reference path="../../../output/gravity.d.ts"/>

export class ModuleView extends View.Component
{
    /**
     * Create and render all html objects
     */
    public initialize()
    {
        var body = this.getByTag("body");
        var div  = new Html.Div();
        var text = this.getVar("hello");

        var button = new Html.Button();
        button.click(function () {
            div.append(
                text
            );
        });

        body.append([
            button,
            "<br/>",
            div
        ]);
    }
}
