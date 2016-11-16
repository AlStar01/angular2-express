export class Product {
    constructor(
        public name: string,
        public description: string,
        public model: string,
        public price: number,
        public featuredImage: string,
        public categoryId: number,
        public productId?: number,
        public categoryName?: string,
        public categoryDescription?: string,
        public quantity?: number,
        public createdOn?: Date,
        public modifiedOn?: Date
    ) { }
}