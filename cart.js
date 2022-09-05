///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]
let reduceArray = cart.reduce(function (acc, obj) { return acc + obj.price; }, 0);
console.log(reduceArray)




//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax){
return (cartTotal + (cartTotal*(tax/100))) - couponValue

} console.log(calcFinalPrice())


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/


    class cartObject {
        constructor(dishName, dishPrice, orderNumber, tax, quantity){
            this.dishName = dishName
            this.dishPrice = dishPrice
            this.orderNumber = orderNumber
            this.tax = tax
            this.quantity = quantity
        }
    }

// datatypes = (str, int, int, int, int)
// str- the first datatype would be an integer as to identity name of a dish, as per like a menu or something
// int- this should be a integer as to facilitate processes such as adding/subtracting/ calculating taxes ect. 
// int- an integer would help identify the time and order was placed, in relation to other orders
// int- an integer as taxes are calculated from the integer indentified 
// int-
// /*
    Now, create a customer object following your own
    guidelines.
*/

let customerObject = new cartObject('pasta', 9, 110, 8, 1)
console.log(customerObject)