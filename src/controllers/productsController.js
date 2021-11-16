let products = require('../dataBase/products.json');

const productsController = {

    list: (req, res) => {
        res.render('products/productsList', {'products': products});
    },
    mostrar : ( req , res )  => {
        let  autos  =  require('../dataBase/products.json');
        let  miAuto ;
        autos.forEach ( auto  =>  {
            if ( auto.id  ==  req.params.id ) {
                miAuto  =  auto ;
            }
        } ) ;
        res.render('products/productDetail', {miAuto: miAuto});

    } ,
   
    carrito: (req, res) =>{
        res.render('products/productCart')
    },
    detalles: (req, res) =>{
        res.render('products/productDetail')
    },
    store: (req, res) =>{
        res.render('products/productStore')
    },
    crear: (req, res) =>{
        res.render('products/productCreate')
    },
    modificar: (req, res)=>{
        res.render('products/productModify')
    },
    eliminar: (req, res)=>{
        res.render('products/productDelete')
    },
}

module.exports = productsController;