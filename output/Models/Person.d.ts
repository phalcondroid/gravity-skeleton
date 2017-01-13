/// <reference path="../../app/Definitions/gravity.d.ts" />
/**
 * Person ajax model
 */
export declare class Person extends Data.ModelAjax {
    /**
     * the attributes must be initialized with any value, its mandatory
     */
    private id;
    /**
     * Person name
     */
    private name;
    /**
     * Last name
     */
    private last;
    /**
     * if you want initialize anything data
     */
    initialize(): void;
    /**
     * Setter to id attribute
     * @param Number id
     * @return void
     */
    setId(id: number): void;
    /**
     * Getter to id attribute
     * @return Number id
     */
    getId(): number;
    /**
     * Setter to name attribute
     * @param String name
     * @return Void
     */
    setName(name: string): string;
    /**
     * Getter to id attribute
     * @return String name
     */
    getName(): string;
    /**
     * Setter to name attribute
     * @param String last
     * @return Void
     */
    setLast(last: string): void;
    /**
     * Getter to id attribute
     * @return String id
     */
    getLast(): string;
}
