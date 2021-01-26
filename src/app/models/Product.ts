export class Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    added: boolean

    constructor(id: string, name: string, price: number, imageUrl: string, description: string, added: boolean = false) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}