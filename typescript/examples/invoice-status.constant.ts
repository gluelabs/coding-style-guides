
/**
 * Invoice Status Basic Enum
 */
export const enum InvoiceStatus{
    /**
     * The invoice is in Draft State,
     * User can Edit and Delete it
     */
    'DRAFT',
    /**
     * The invoice is Sent to the customer
     * The incoice could not change, except for 
     * its status that could began Payed
     */
    'SENT',
    /**
     * The invoice is Payed,
     * unless set payed by error it must not
     * be changed anymore
     */
    'PAYED'
}

/**
 * Invoice Status Enum, with valued index
 * 
 */
export const enum InvoiceStatus2{
    /**
     * The invoice is in Draft State,
     * User can Edit and Delete it
     */
    'DRAFT'= 'draft',
    /**
     * The invoice is Sent to the customer
     * The incoice could not change, except for 
     * its status that could began Payed
     */
    'SENT' = 'sent',
    /**
     * The invoice is Payed,
     * unless set payed by error it must not
     * be changed anymore
     */
    'PAYED' = 'payed'
}


/**
 * Another Invoice Status Enum, with valued index
 */
export const enum InvoiceStatus3{
    /**
     * The invoice is in Draft State,
     * User can Edit and Delete it
     */
    'DRAFT'= 1,
    /**
     * The invoice is Sent to the customer
     * The incoice could not change, except for 
     * its status that could began Payed
     */
    'SENT' = 2,
    /**
     * The invoice is Payed,
     * unless set payed by error it must not
     * be changed anymore
     */
    'PAYED' = 3
}