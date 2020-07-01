interface Mountain {
    name: string;
    height: number;
}

const mount1: Mountain = {name: 'Kilimanjaro', height: 19341}
const mount2: Mountain = {name: 'Everest', height: 29029}
const mount3: Mountain = {name: 'Denali', height: 20310}
let mountains = [mount1, mount2, mount3];

function findNameOfTallestMountain(mounts)
{
    let y = 1;
    let FNTM = mounts.forEach(function (Mountain) {
        let x = Mountain.height;
        if (x >= y) {
            y = x
        };
    });

    let FNTM2 = mounts.find(function (Mountain2) {
        return Mountain2.height == y
    });
    console.log(FNTM2);
    return FNTM2;
}

findNameOfTallestMountain(mountains);


interface Product {
    name: string;
    price: number;
}
//ICECREAM SCOOPS
const prod1: Product = {name: 'one', price: 3}
const prod2: Product = {name: 'three', price: 7}
const prod3: Product = {name: 'six', price: 15}
const prod4: Product = {name: 'ten', price: 24}
let scoops = [prod1, prod2, prod3, prod4];

function calcAverageProductPrice(prods) {
    let b = 0;

    let CAPP = prods.forEach(function (Product) {
        b += Product.price;
    });

    let CAPP2 = b / prods.length;
    console.log(CAPP2);
    return CAPP2;
}

calcAverageProductPrice(scoops);




interface InventoryItem {
    product: Product;
    quantity: number;
}



let Inventory :InventoryItem[]= [
    {
        product: {name: 'motor', price: 10},  
        quantity: 10
    },
    {
        product: {name: 'sensor', price: 12.50},  
        quantity: 10
    },
    {
        product: {name: 'LED', price: 1},  
        quantity: 20
    },
];

function calcInventoryValue (inventory :InventoryItem[]) {
    let a = 0;

    let CIV = inventory.forEach(function (Product) {
        a += Product.price;
    });
    console.log(a);
    return a;
}

calcInventoryValue(Inventory);