/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const getUniqueProducts = (currentItems, id) => currentItems.filter((e, i) => currentItems.findIndex(a => a[id] === e[id]) === i);

const getNumberOfEachProduct = (currentItems) => {
  const result = {};
  for (let i = 0; i < currentItems.length; ++i) {
    if (!result[currentItems[i].id]) result[currentItems[i].id] = 0;
    ++result[currentItems[i].id];
  }
  return result;
};

const getCartTotalPrice = (products) => {
  let totalPrice = 0;
  for (let index = 0; index < products.length; index++) {
    const element = products[index].productPrice;
    totalPrice += element;
  }
  return totalPrice;
};

export { getUniqueProducts, getNumberOfEachProduct, getCartTotalPrice };
