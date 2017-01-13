///<reference path="../../output/gravity.d.ts"/>

import { Services }         from "./Services";

//Controllers
import { ModuleController } from "../Controllers/ModuleController";
import { ModuleView  }       from "../Views/Module/ModuleView";

export class AppConfig
{
    /**
     * Get and configure project dependences
     */
    public static getConfig() : Environment.Config
    {
        var config = new Environment.Config();

        config.setConfig(
            this.getLocalConfig(),
            Environment.Scope.LOCAL
        );

        config.setConfig(
            this.getDevelopmentConfig(),
            Environment.Scope.DEV
        );

        return config;
    }

    /**
     * Configuration project to LOCAL environment
     */
    public static getLocalConfig() : Object
    {
        return {
            "urls" : {
                "baseUrl"   : "http://localhost/testgravity/",
                "urlSample" : "http://urls/jsjs/"
            },
            "controllers" : [
                {
                    "name"  : ModuleController,
                    "views" : [
                        ModuleView
                    ]
                },
            ],
            "services" : Services
        };
    }

    /**
     * Configuration project to DEVELOPMENT environment
     */
    public static getDevelopmentConfig() : Object
    {
        var config = this.getLocalConfig();
        config["urls"] = {
            "baseUrl"   : "http://your-dev-server/api/",
            "urlSample" : "http://other-url/api/"
        };
        return config;
    }
}
