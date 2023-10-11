import { Customer, ICustomer } from "./customer";

/**
 * An Interface Implementing a simple Invoice Example
 */
export interface IInvoice {
    id: number;
    customer: ICustomer,
    amount: number
}

/**
 * A Class Implementing a simple Invoice Example
 */
export class Invoice {
    id: number;
    customer: Customer;
    amount: number;

    /**
     * 
     * Invoice Constructor. 
     * It gets the WS result and create an Invoice
     * Object 
     * 
     * @param i IInvoice the Invoice Object as returned from Webservice 
     */
    constructor(i: IInvoice) {
        this.id = i.id;
        this.customer = new Customer(i.customer);
        this.amount = i.amount;
    }

    /**
     * Set a Custumer in the Invoice
     * @param c Customer to be setted in the invoice
     */
    setCustomer(c: Customer): boolean {
        if (c.id !== this.customer.id) {
            this.customer = c;
            return true;
        }
        return false;
    }
}