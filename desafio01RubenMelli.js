class ProductManager {

    constructor(){
        this.products = [];
    }

    getProducts = () =>{ return this.products };

    getId = () =>{
        const nexId = this.products.length + 1;
        return nexId; 
    }

    addProduct = (code, title, description, price, thumbnail, stock) =>{
        const prod = {
            id: this.getId(),
            code: code,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            stock: stock
        };
        const codes = this.products.filter(c => c.code === prod.code)
        if(codes.length === 0){
            this.products.push(prod);
        } else { return 'Codigo repetido'}
    };

    getProductById = (id) =>{
        const producto = this.products.filter(p => p.id === id)
        if(producto.length === 0){return ('Not fund')}
        else{ return producto };
    }
};


// PRUEBAS PARA TESTEAR EL ALGORITMO

const almacen = new ProductManager();

console.log(almacen.getProducts());

almacen.addProduct('0001', 'Arroz Gallo', 'Arroz parboid 00000', 300, './www.image.jpg', 100);
almacen.addProduct('0002', 'Harina Pureza', 'Harina de trigo 0000', 200, './www.image.jpg', 100);
almacen.addProduct('0003', 'Vino Maravilla', 'Vino tinto de mesa', 500, './www.image.jpg', 50);
console.log( almacen.addProduct('0002', 'Harina Pureza', 'Harina de trigo 0000', 200, './www.image.jpg', 100));

console.log(almacen.getProducts());
console.log('--------------------------------------------------------');
console.log(almacen.getProductById(1));
console.log(almacen.getProductById(3));
console.log(almacen.getProductById(4));

