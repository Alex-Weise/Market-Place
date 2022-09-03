import { OneProduct } from "../dataType";

const addNEW = (arr: OneProduct[], data: string, type: string, offtype:string, category:string, title:string, text:string, price:number, discount:boolean | number, ishot:boolean, isnew: boolean, images:number ) => {
    let imageArr = [];
    for (let i = 1; i <= images; i++) {
        if (offtype) {
           imageArr.push(`../../assets/data/${data}/${type}/${offtype}/${i}.jpg`);
        } else {imageArr.push(`../../assets/data/${data}/${type}/${i}.jpg`)}
    };
    let obj = { // это единица продукта
        //ниже указываем папки к картинкам после assets/data/
        data: data, // указываем папку (категории на англ)
        type: type, // указываем внутреннюю папку (подкатегории или же сама папка товара)
        offtype: offtype, // пустая строка, или же папка товара
        //ниже уже о товаре
        category: category, // категории товаров "Открытка", "Брелок" и тд
        title: title, // название товара
        text: text, // все описание товара (разделять точкой (.))
        price: price, // цена, без Р
        discount: discount, // цена по скидке, на будущее если нужно =)
        ishot: ishot, // популярный товар, да или нет
        isnew: isnew, // новинка, да или нет
        images: imageArr, // тут уже картинки, пусть будет 1 -ая картинка основная, а остальные листать можно
        // в функции по созданию нужно указать количество картинок в папке
    };
    arr.push(obj);
};

export const bookmark:OneProduct[] = [
    {
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
        images: ["../../assets/data/bookmark/black/1.jpg"],
    },
    {
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
        images: ["../../assets/data/bookmark/blue/1.jpg"],
    },
];
export const pin:OneProduct[] = [
    {
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
        images: ["../../assets/data/pin/pin1/1.jpg","../../assets/data/pin/pin1/2.jpg"],
    },
];
export const postcard:OneProduct[] = [
    {
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
        images: ["../../assets/data/postcard/date/1.jpg"],
    },
    {
        data: "postcard",
        type: "dont",
        offtype: "",
        category: "открытки",
        title: "не потеряй себя",
        text: "односторонняя печать. текстурная бумага плотностю 250 гр. формат А6",
        price: 100,
        discount: false,
        ishot: false,
        isnew: false,
        images: ["../../assets/data/postcard/dont/1.jpg"],
    },
    {
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
        images: ["../../assets/data/postcard/flowers/1.jpg"],
    },
    {
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
        images: ["../../assets/data/postcard/june/1.jpg"],
    },
    {
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
        images: ["../../assets/data/postcard/mind/1.jpg"],
    },
    {
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
        images: ["../../assets/data/postcard/ticket/1.jpg"],
    },
];
export const stickers:OneProduct[] = [
    {
        data: "stickers",
        type: "a6",
        offtype: "flowers",
        category: "стикеры А6",
        title: "цветы",
        text: "материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. формат А6",
        price: 130,
        discount: false,
        ishot: false,
        isnew: false,
        images: ["../../assets/data/stickers/a6/flowers/1.jpg"],
    },
    {
        data: "stickers",
        type: "a6",
        offtype: "neer",
        category: "стикеры А6",
        title: "я всегда буду рядом",
        text: "материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. формат А6",
        price: 130,
        discount: false,
        ishot: false,
        isnew: false,
        images: ["../../assets/data/stickers/a6/neer/1.jpg"],
    },
    {
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
        images: ["../../assets/data/stickers/a6/ocean/1.jpg"],
    },
    {
        data: "stickers",
        type: "a6",
        offtype: "sleep",
        category: "стикеры А6",
        title: "лавандовый сон",
        text: "материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. формат А6",
        price: 130,
        discount: false,
        ishot: false,
        isnew: false,
        images: ["../../assets/data/stickers/a6/sleep/1.jpg", "../../assets/data/stickers/a6/sleep/2.jpg"],
    },
    {
        data: "stickers",
        type: "a6",
        offtype: "summer",
        category: "стикеры А6",
        title: "лето",
        text: "материал: виниловая плёнка с матовой ламинацией. вырубка по форме каждого стикера. формат А6",
        price: 130,
        discount: false,
        ishot: false,
        isnew: false,
        images: ["../../assets/data/stickers/a6/summer/1.jpg", "../../assets/data/stickers/a6/summer/2.jpg", "../../assets/data/stickers/a6/summer/3.jpg"],
    },
    {
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
        images: ["../../assets/data/stickers/little/copybook/1.jpg"],
    },
    {
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
        images: ["../../assets/data/stickers/little/life/1.jpg"],
    },
    {
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
        images: ["../../assets/data/stickers/little/mini/1.jpg"],
    },
    {
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
        images: ["../../assets/data/stickers/little/soul/1.jpg"],
    },
];
export const trinket:OneProduct[] = [
    {
        data: "trinket",
        type: "trinket1",
        offtype: "",
        category: "брелки",
        title: "брелок",
        text: "акриловый брелок с карабином-звёздочкой",
        price: 350,
        discount: false,
        ishot: false,
        isnew: false,
        images: ["../../assets/data/trinket/trinket1/1.jpg"],
    },
];

export const allProd:OneProduct[] = [...bookmark, ...pin, ...postcard, ...stickers, ...trinket];