/**
 * The Customer as its  returned from the Webservice
 */
export interface ICustomer{
    id: number;
    name: string;
    surname: string;
}

/**
 * The Customer of our Web Application
 */
export class Customer implements ICustomer{
    id: number;
    name: string;
    surname: string

    /**
     * Initialize customer from an ICustomer Object
     * @param i ICustomer
     */
    constructor(i:ICustomer){
        this.id = i.id;
        this.name = i.name;
        this.surname = i.surname;
    }
}