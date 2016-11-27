export class Category {

    constructor(
        public categoryId: number,
        public name: string,
        public description: string,
        public createdOn?: Date,
        public modifiedOn?: Date
    ) {}
}