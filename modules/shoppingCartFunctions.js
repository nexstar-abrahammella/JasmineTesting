//Type your code here

function addToCart(productDetail, array) {
    array.push(productDetail);
}

function totalPrice(array, productPriceDetail) {
    let sum = 0;

    array.forEach(function(value, index) {
        let product = parseFloat(value[productPriceDetail]);
        sum += product;

    });

    return sum;

}

function removeProduct(array, productID, objectName) {
    let removingProduct = array.filter(function(obj) {
        return obj[objectName] !== productID;
    });

    return removingProduct;
}


function savedPrice(array, productPriceDetail,productRegularPrice) {
  let sumPrice = 0;
  let sumRegularPrice = 0;

  array.forEach(function(value, index) {
    if (value.productOnSale === "true") {
      let product = parseFloat(value[productPriceDetail]);
      sumPrice += product;
    }
  });
  
  array.forEach(function(value, index) {
    if (value.productOnSale === "true") {
      let product2 = parseFloat(value[productRegularPrice]);
      sumRegularPrice += product2;
    }
  });

  return sumRegularPrice - sumPrice;
}


function emptyCart(array) {
  let messageEmpty = "The shopping cart its empty.";
  if (array.length === 0) {
    return messageEmpty;
  } else {
    return "No Empty";
  }
}



//#ifdef bb10

module.exports = { addToCart, totalPrice, removeProduct, emptyCart };


//#endif






