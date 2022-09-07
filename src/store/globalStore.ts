// eslint-disable-next-line
import { makeObservable, action, observable, computed } from "mobx";
import { OneProduct } from "../dataType";
import { dataProducts } from "./products";

class SomeProducts {

    constructor () {
        makeObservable(this);
        this.getHot();
        this.getNew();
        this.setCategory('');
    };
    @observable private category:OneProduct[] = [];

    @observable public hotProduct:OneProduct[] = [];

    @observable public newProduct:OneProduct[] = [];

    @action private getHot = () => {
        this.hotProduct = dataProducts.reduce( (arr, item) => {
            if (item.ishot) return [...arr, item];
            return arr;
        }, [] as OneProduct[])
    };

    @action private getNew = () => {
        this.newProduct = dataProducts.reduce( (arr, item) => {
            if (item.isnew) return [...arr, item];
            return arr;
        }, [] as OneProduct[])
    };

    @action public setCategory = (str:string) => {
        let newArr = dataProducts.filter( (item => item.data === str));
        newArr.length > 0 ? this.category = newArr : this.category = dataProducts;
    }
    
    @computed public get Category() {
        return this.category;
    }
}
const Product = new SomeProducts();
export { Product };