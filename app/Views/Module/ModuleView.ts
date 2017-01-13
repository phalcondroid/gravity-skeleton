///<reference path="../../Definitions/gravity.d.ts"/>

export class ModuleView extends View.Component
{
    /**
     * Create and render all html objects
     */
    public initialize()
    {
        var div   = this.getByTag("div");
        var text   = this.getVar("hello");

        for (var k in div) {
            div[k].append([
                new Html.H1().append(text)
            ]);
        }
    }
}
