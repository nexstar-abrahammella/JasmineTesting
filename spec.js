const { addToCart } = require("./modules/shoppingCartFunctions")

//DESCRIBE: Se utiliza para describir la funcion que se esta llamando. "FirstParameter": Message, "SecondParameter": function(){}
describe(`Testing for add to cart function on 'SHOPPING CART FORM' `, function() {
    let objetoProducto;
    let objetoProductoTwo;
    let arrayProducts;

    beforeEach(function() {
        objetoProducto = { "productID": 1, "productName": "Product TEST", "imageProduct": "imgtesting.png" };
        objetoProductoTwo = { "productID": 2, "productName": "Product TEST", "imageProduct": "imgtesting.png" };

        arrayProducts = [];

    })
    it("Adding product to Array", function() {

        addToCart(objetoProducto, arrayProducts)
        expect(arrayProducts[arrayProducts.length - 1]).toBe(objetoProducto);
    })

    it("Testing If A Product Not Exist ", function() {

        addToCart(objetoProductoTwo, arrayProducts)
        expect(arrayProducts[arrayProducts.length - 1]).toBe(objetoProductoTwo);
    })


    it("Testing that the array have two object ", function() {

        addToCart(objetoProductoTwo, arrayProducts)
        expect(arrayProducts.length + 1).toBe(2);
    })


});