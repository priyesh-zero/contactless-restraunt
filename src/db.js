import { uuid } from 'uuidv4'

export default {
    restraunts: [
        {
            id: '9ce2bfea-37de-437c-9714-7e87f1690a51',
            name: 'Unique Name One',
            tables: [
                {
                    id: 'be41475b-d3a2-490d-9d04-52afd6e53af7',
                    tableNo: 'One'
                },
                {
                    id: 'a43f7ec9-fafd-4382-a579-90e5558c578b',
                    tableNo: 'Two'
                },
            ],
            menu: [
                {
                    id: 'b52bfdba-fddb-40d9-8b79-8eb085c482c6',
                    name: 'Butter Chicken Half',
                    price: 100
                },
                {
                    id: '2b0dd8e9-deb2-4584-8d68-469a754f8cab',
                    name: 'Butter Chicken Full',
                    price: 200
                },
                {
                    id: '16f8de88-ab82-436d-a952-aa5e606007d7',
                    name: 'Cold Drinks',
                    price: 20
                },
            ]
        },
        {
            id: 'b5fe78c5-3509-47a8-ad19-7ba1e1b12d68',
            name: 'Unique Name Two',
            tables: [
                {
                    id: 'e61e09d4-3c62-45bc-9921-35d0feb7f4f5',
                    tableNo: 'One'
                },
                {
                    id: '205b5409-cfe6-45f4-ab11-68f9574666e9',
                    tableNo: 'Two'
                },
            ],
            menu: [
                {
                    id: 'b2e79846-c89d-4818-ab5d-606ba686f288',
                    name: 'Butter Chicken Half',
                    price: 100
                },
                {
                    id: 'fb92e947-a332-473d-abfa-3216b885331a',
                    name: 'Butter Chicken Full',
                    price: 200
                },
                {
                    id: '490ba1a4-ddc0-4987-b7d4-cc00de459d69',
                    name: 'Cold Drinks',
                    price: 20
                },
            ]
        }
    ]
}