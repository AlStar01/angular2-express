export class Category {

    constructor(
        public category_id: number,
        public name: string,
        public description?: string,
        public created_on?: Date,
        public modified_on?: Date
    ) {}
}