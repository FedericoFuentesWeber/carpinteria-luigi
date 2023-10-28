const products = [
    { id: 1, name: "Comoda", price: 75000, img: "./img/dresser.jpg"},
    { id: 2, name: "Mesa de luz", price: 30000, img: "./img/bedside.jpg"},
    { id: 3, name: "Juego de tablas", price: 50000, img: "./img/wood-board.jpg"},
    { id: 4, name: "Tabla para cortar", price: 10000, img: "./img/wood-board2.jpg"}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 100)
    })
}