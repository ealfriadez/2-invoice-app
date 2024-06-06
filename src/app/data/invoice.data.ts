import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Eleazar',
        lastName: 'Alfriadez',
        address:{
            country: 'Peru',
            city: 'Lima',
            street: 'Calle uno',
            number: 20
        }
    },
    company: {
        name: 'UNFV',
        fiscalNumber: 3123123
    },
    items: [
        {
             id: 1,
             product: 'CPU con case de alumnio',
             price: 800,
             quantity: 5    
        },
        {
            id: 1,
            product: 'Teclado mecanico TRONSMART',
            price: 100,
            quantity: 7
        },
        {
            id: 1,
            product: 'Monitor SAMSUNG',
            price: 1500,
            quantity: 15
        }
    ]
}