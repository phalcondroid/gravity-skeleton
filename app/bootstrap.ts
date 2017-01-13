///<reference path="./Definitions/gravity.d.ts"/>

import { AppConfig }   from "./Config/AppConfig";

var gravity = new Gravity.Application();

gravity.setScope(
    Environment.Scope.LOCAL
);

gravity.setConfig(
    AppConfig.getConfig()
);

gravity.start();
