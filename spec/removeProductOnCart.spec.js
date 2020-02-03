const { removeProduct } = require("../modules/shoppingCartFunctions")


//DESCRIBE: Se utiliza para describir la funcion que se esta llamando. "FirstParameter": Message, "SecondParameter": function(){}
describe(`Removing Products from Cart `, function() {

    let arrayProducts;
    let productID;
    let totalProduct;
    let objectProduct


    beforeEach(function() {


        arrayProducts = [{ "productID": 1, "productName": "Product TEST", "productPrice": "1500.90", "imageProduct": "imgtesting.png" }, { "productID": 2, "productName": "Product TEST 2", "productPrice": "3000.90", "imageProduct": "imgtesting.png" }];
        productID = 1;
        objectProduct = "productID";
    })
    it("Getting all the total product prices ", function() {
        removedProduct = removeProduct(arrayProducts, productID, objectProduct)

        totalProductinArray = removedProduct.length;

        arrayProducts = removedProduct;

        expect(arrayProducts.length === 1).toBe(totalProductinArray === 1);
    })





});