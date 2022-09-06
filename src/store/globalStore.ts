// eslint-disable-next-line
import { makeObservable, action, observable, computed } from "mobx";
import { OneProduct } from "../dataType";
import { allProd } from "./products";

class SomeProducts {

    constructor () {
        makeObservable(this);
        this.getHot();
        this.getNew();
    };

    @observable public hotProduct:OneProduct[] = [];

    @observable public newProduct:OneProduct[] = [];

    @action private getHot = () => {
        allProd.map( (item) => item.ishot === true && this.hotProduct.push(item));
    };

    @action private getNew = () => {
        allProd.map( (item) => item.isnew === true && this.newProduct.push(item));
    }
}
const NewHotProduct = new SomeProducts();
export { NewHotProduct };