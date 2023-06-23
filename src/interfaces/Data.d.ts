export interface Product {
    name: string,
    description: string,
    imgUrl: string,
    features: {
        capacity: number,
        storage: number,
        power: number,
        nosie: number
    }
}