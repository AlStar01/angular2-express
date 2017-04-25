export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    color: string;
    material: string;
    origin: string;
    manufacturer: string;
    featured_image: string;
    created_on: Date;
    modified_on: Date;
    category_id: number;
    category_name?: string;
    total?: number;
}