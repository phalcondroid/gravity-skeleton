///<reference path="../../output/gravity.d.ts"/>

/**
 * Person ajax model 
 */
export class Person extends Data.ModelAjax
{
    /**
     * the attributes must be initialized with any value, its mandatory
     */
    private id   : number = 0;

    /**
     * Person name
     */
    private name : string = "";

    /**
     * Last name
     */
    private last : string = "";

    /**
     * if you want initialize anything data
     */
    public initialize()
    {

    }

    /**
     * Setter to id attribute
     * @param Number id
     * @return void
     */
    public setId(id : number) : void
    {
        this.id = id;
    }

    /**
     * Getter to id attribute
     * @return Number id
     */
    public getId() : number
    {
        return this.id;
    }

    /**
     * Setter to name attribute
     * @param String name
     * @return Void
     */
    public setName(name : string)
    {
        return this.name = name;
    }

    /**
     * Getter to id attribute
     * @return String name
     */
    public getName() : string
    {
        return this.name;
    }

    /**
     * Setter to name attribute
     * @param String last
     * @return Void
     */
    public setLast(last : string) : void
    {
        this.last = last;
    }

    /**
     * Getter to id attribute
     * @return String id
     */
    public getLast() : string
    {
        return this.last;
    }
}
