const {emptyCart} = require("../modules/shoppingCartFunctions")


describe(`Testing If the shoppin cart is empty. `, function () {

    let productsInShoppingCart;
    let messageEmpty;
    let messageNoEmpty;
 

    beforeEach(function () {
        messageNoEmpty = 'No Empty';
        messageEmpty = 'The shopping cart its empty.';

        productsInShoppingCart = [{ "productID": 1, "productName": "Product TEST", "productPrice": "1500.90", "imageProduct": "imgtesting.png" }, { "productID": 2, "productName": "Product TEST 2", "productPrice": "3000.90", "imageProduct": "imgtesting.png" }];

    })
    it("Cheking if the Shopping Cart it's no empty ", function () {
        
       let testing = emptyCart(productsInShoppingCart)

        expect(testing).toBe(messageNoEmpty);
    })

    it("Cheking if the Shopping Cart it's Empty ", function () {
        productsInShoppingCart = [];

        let testing = emptyCart(productsInShoppingCart)
 
         expect(testing).toBe(messageEmpty);
     })




   


});