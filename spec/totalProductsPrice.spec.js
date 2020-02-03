const { totalPrice } = require("../modules/shoppingCartFunctions")


//DESCRIBE: Se utiliza para describir la funcion que se esta llamando. "FirstParameter": Message, "SecondParameter": function(){}
describe(`Testing For All The Products Total `, function () {

    let arrayProducts;
    let productTotalPrice;

    beforeEach(function () {


        arrayProducts = [{ "productID": 1, "productName": "Product TEST", "productPrice": "1500.90", "imageProduct": "imgtesting.png" }, { "productID": 2, "productName": "Product TEST 2", "productPrice": "3000.90", "imageProduct": "imgtesting.png" }];

    })
    it("Getting all the total product prices ", function () {

        productTotalPrice = totalPrice(arrayProducts,"productPrice");

        expect(productTotalPrice).toBe(4501.8);
    })

   


});



