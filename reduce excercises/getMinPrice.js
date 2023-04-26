// find minimum price using reduce

let prices = [
    { id: 1, productName: 'Table', price: 3260 },
    { id: 2, productName: 'Chair', price: 1060 },
    { id: 3, productName: 'Sofa', price: 4800 },    
    { id: 4, productName: 'TV Unit', price: 8078 },
    { id: 5, productName: 'Wardrobe', price: 13260 },
    { id: 6, productName: 'Wardrobe', price: 132 }
];

let minimumPrice = prices.reduce((a, b) => {
    // console.log(a, 'accumultor')
    if (b.price < a.price) {
        a = b
    }
    return a
})

console.log(minimumPrice)