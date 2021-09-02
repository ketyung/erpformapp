export interface ItemCategory {

    id : number;

    name : string;

    lastUpdated? : Date;
}

export interface Item {

    code : string;

    name : string;

    category? : ItemCategory;

    price : number;

    qoh : number;

    lastUpdate? : Date; 
}