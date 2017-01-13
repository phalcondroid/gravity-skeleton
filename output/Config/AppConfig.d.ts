/// <reference path="../../app/Definitions/gravity.d.ts" />
export declare class AppConfig {
    /**
     * Get and configure project dependences
     */
    static getConfig(): Environment.Config;
    /**
     * Configuration project to LOCAL environment
     */
    static getLocalConfig(): Object;
    /**
     * Configuration project to DEVELOPMENT environment
     */
    static getDevelopmentConfig(): Object;
}
