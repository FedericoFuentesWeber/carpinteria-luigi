const products = [
    { id: 1, name: "Comoda", price: 75000, img: "../img/dresser.jpg", idCat: "1"},
    { id: 2, name: "Mesa de luz", price: 30000, img: "../img/bedside.jpg", idCat: "1"},
    { id: 3, name: "Juego de tablas", price: 50000, img: "../img/wood-board.jpg", idCat: "2"},
    { id: 4, name: "Tabla para cortar", price: 10000, img: "../img/wood-board2.jpg", idCat: "2"}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 100)
    })
}

export const getProductsByCateogry = (idCategory) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productsCategory = products.filter(item => item.idCat === idCategory);
            resolve(productsCategory);
        }, 100)
    })
}

export const getProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = products.find(item => item.id === id);
            resolve(product);
        }, 100)
    })
}