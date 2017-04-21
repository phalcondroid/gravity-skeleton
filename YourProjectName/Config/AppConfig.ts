///<reference path="../../Definitions/gravity.d.ts"/>

namespace Config
{
    export class AppConfig
    {
        public static baseUrl = "";
        
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
            
            return config;
        }

        /**
         * Configuration project to LOCAL environment
         */
        public static getLocalConfig() : Object
        {
            return {
                "urls" : {
                    "baseUrl"   : AppConfig.baseUrl + "your_project/",
                    "base"      : AppConfig.baseUrl
                },
                "controllers" : [
                    {
                        "name"  : Controllers.IndexController
                    },
                ],
                "services" : Services
            };
        }
    }
}
