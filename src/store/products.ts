import { OneProduct } from "../dataType";
import * as image from "../assets/data";

// const addNEW = (arr: OneProduct[], data: string, type: string, offtype:string, category:string, title:string, text:string, price:number, discount:boolean | number, ishot:boolean, isnew: boolean, ishave:boolean, images:number ) => {
//     let obj = { // это единица продукта
//         id: arr.length,
//         //ниже указываем папки к картинкам после assets/data/
//         data: data, // указываем папку (категории на англ)
//         type: type, // указываем внутреннюю папку (подкатегории или же сама папка товара)
//         offtype: offtype, // пустая строка, или же папка товара
//         //ниже уже о товаре
//         category: category, // категории товаров "Открытка", "Брелок" и тд
//         title: title, // название товара
//         text: text, // все описание товара (разделять точкой (.))
//         price: price, // цена, без Р
//         discount: discount, // цена по скидке, на будущее если нужно =)
//         ishot: ishot, // популярный товар, да или нет
//         isnew: isnew, // новинка, да или нет
//         ishave: ishave, // в наличии ли товар
//         images: images, // тут уже картинки, пусть будет 1 -ая картинка основная, а остальные листать можно
//         // в функции по созданию нужно указать количество картинок в папке
//     };
//     arr.push(obj);
// };
export const dataProducts:OneProduct[] = [
    {
        id: 1,
        data: "bookmark",
        type: "black",
        offtype: "",
        category: "закладка",
        title: "черная закладка",
        text: "пластиковая односторонняя закладка для книг",
        price: 300,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.black,
    },
    {
        id: 2,
        data: "bookmark",
        type: "blue",
        offtype: "",
        category: "закладки",
        title: "синяя закладка",
        text: "пластиковая односторонняя закладка для книг",
        price: 300,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.blue,
    },
    {
        id: 3,
        data: "pin",
        type: "pin1",
        offtype: "",
        category: "значки",
        title: "пин",
        text: "пин из эпоксидной смолы с жёлтой застёжкой-сердечком",
        price: 250,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.pin,
    },
    {
        id: 4,
        data: "postcard",
        type: "date",
        offtype: "",
        category: "открытки",
        title: "свидание",
        text: "односторонняя печать. текстурная бумага плотностю 250 гр. формат А6",
        price: 100,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.date,
    },
    {
        id: 5,
        data: "postcard",
        type: "dont",
        offtype: "",
        category: "открытки",
        title: "не потеряй себя",
        text: "односторонняя печать. текстурная бумага плотностю 250 гр. формат А6",
        price: 100,
        discount: false,
        ishot: true,
        isnew: false,
        ishave: true,
        images: image.dont,
    },
    {
        id: 6,
        data: "postcard",
        type: "flowers",
        offtype: "",
        category: "открытки",
        title: "цветы",
        text: "двусторонняя печать, на обороте место для тёплых слов. текстурная бумага плотностю 250 гр. формат А6",
        price: 100,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.flowers,
    },
    {
        id: 7,
        data: "postcard",
        type: "june",
        offtype: "",
        category: "открытки",
        title: "июнь",
        text: "односторонняя печать. текстурная бумага плотностю 250 гр. формат А6",
        price: 100,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.june,
    },
    {
        id: 8,
        data: "postcard",
        type: "mind",
        offtype: "",
        category: "открытки",
        title: "мысли",
        text: "односторонняя печать. текстурная бумага плотностю 250 гр. формат А6",
        price: 100,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.mind,
    },
    {
        id: 9,
        data: "postcard",
        type: "ticket",
        offtype: "",
        category: "открытки",
        title: "билет в один конец",
        text: "односторонняя печать. текстурная бумага плотностю 250 гр. формат А6",
        price: 100,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.ticket,
    },
    {
        id: 10,
        data: "stickers",
        type: "a6",
        offtype: "flowersStick",
        category: "стикеры А6",
        title: "цветы",
        text: "материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. формат А6",
        price: 130,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.flowersStick,
    },
    {
        id: 11,
        data: "stickers",
        type: "a6",
        offtype: "near",
        category: "стикеры А6",
        title: "я всегда буду рядом",
        text: "материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. формат А6",
        price: 130,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.near,
    },
    {
        id: 12,
        data: "stickers",
        type: "a6",
        offtype: "ocean",
        category: "стикеры А6",
        title: "океан",
        text: "материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. формат А6",
        price: 130,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.ocean,
    },
    {
        id: 13,
        data: "stickers",
        type: "a6",
        offtype: "sleep",
        category: "стикеры А6",
        title: "лавандовый сон",
        text: "материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. формат А6",
        price: 130,
        discount: false,
        ishot: true,
        isnew: false,
        ishave: true,
        images: image.sleep,
    },
    {
        id: 14,
        data: "stickers",
        type: "a6",
        offtype: "summer",
        category: "стикеры А6",
        title: "лето",
        text: "материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. формат А6",
        price: 130,
        discount: false,
        ishot: true,
        isnew: false,
        ishave: true,
        images: image.summer,
    },
    {
        id: 15,
        data: "stickers",
        type: "little",
        offtype: "copybook",
        category: "стикеры поменьше",
        title: "тетрадь в клеточку",
        text: "стикеры по книге Микиты Франко 'тетрадь в клеточку'. материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. размер 10*10см",
        price: 110,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.copybook,
    },
    {
        id: 16,
        data: "stickers",
        type: "little",
        offtype: "life",
        category: "стикеры поменьше",
        title: "дни нашей жизни",
        text: "стикеры по книге Микиты Франко 'дни нашей жизни'. материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. размер 10*10см",
        price: 110,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.life,
    },
    {
        id: 17,
        data: "stickers",
        type: "little",
        offtype: "mini",
        category: "стикеры поменьше",
        title: "стикеры малыши",
        text: "материал: виниловая плёнка с матовой ламинацией. размер 5*5см",
        price: 30,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.mini,
    },
    {
        id: 18,
        data: "stickers",
        type: "little",
        offtype: "soul",
        category: "стикеры поменьше",
        title: "нежность души",
        text: "материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. размер 7*7см",
        price: 50,
        discount: false,
        ishot: false,
        isnew: false,
        ishave: true,
        images: image.soul,
    },
    {
        id: 19,
        data: "trinket",
        type: "trinket1",
        offtype: "",
        category: "брелки",
        title: "брелок",
        text: "акриловый брелок с карабином-звёздочкой",
        price: 350,
        discount: false,
        ishot: true,
        isnew: false,
        ishave: true,
        images: image.trinket1,
    },
];