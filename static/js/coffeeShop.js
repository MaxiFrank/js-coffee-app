"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//

// const button = $('.add-to-order');
// const itemName = 'coffee';
// button.on('click', () => {
//   addItemToCart(itemName);
// });

$('.add-to-order').on('click', () => {
  addItemToCart('coffee');
  incrementCartTotal(1.50)
});

// this doesn't work, make sure I understand why
// $('.add-to-order').on('click', addItemToCart('coffee'));

// what if I do this?
// $('.add-to-order').on('click', ('coffee') => {
//   addItemToCart();
// });

// const button = $('.add-to-order');
// const itemName = 'coffee';
// button.on('click', () => {
//   addItemToCart(itemName)
// })

// let coffeeAmountSold = $('#cart-items').children().length

$('#place-order').on('click', () => {
  // This is the body of your callback function! Add more code here!
  let coffeeAmountSold = $('#cart-items').children().length
  $('#coffee-sold-counter').html(coffeeAmountSold)
  // why does it work when I don't have a semicolon below??
  resetCart();
  });
// incrementCoffeeSold(coffeeAmountSold);