///<reference path="../../output/gravity.d.ts"/>

import { MyCustomComponent } from "../Library/MyCustomComponent";

export class Services implements Loader.DiConstructorInjection
{
    public initialize(di : Service.Container)
    {
        //add your ts or js components
        di.set(
            "sampleComponent",
            new MyCustomComponent
        );
    }
}
