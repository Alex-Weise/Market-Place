export type OneProduct = {
    data: string,
    type: string,
    offtype: string,
    category: string,
    title: string,
    text: string,
    price: number | string,
    discount: number | boolean,
    ishot: boolean,
    isnew: boolean,
    ishave: boolean,
    images: string | string [],
}