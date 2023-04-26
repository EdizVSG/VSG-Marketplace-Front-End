export interface IProduct {
    id: number;
    code: IProduct["id"];
    title: string;
    price: number;
    quantity: 12;
    quantityForSale: 10;
    description?: string;
    categoryId: number;
    category: string;
    image?: string;
}

export interface IOrder {
    id: number;
    quantity: number;
    date: string;
    status: "Pending";
    title: string;
    email: string;
    code: IOrder["id"];
    price: number;
}

export interface IErrorResponse {
    Code: number;
    ErrorMessage: string;
}

export interface IResponse<T> {
    Product: T;
    Error: IErrorResponse;
}

export interface ICategory {
    type: string;
    id: number;
}

export type Route = () => void;
export type Routes = {
    [key: string]: Route;
};
