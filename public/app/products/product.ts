export class Product {
    constructor(
        public product_id: number,
        public name: string,
        public description: string,
        public price: number,
        public category: string,
        public created_on: Date,
        public modified_on: Date
    ) { }
}