/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const result = [];
  transactions.forEach((item) => {
    // Check if the category already exists in the result array
    const categoryIndex = result.findIndex((el) => el.category === item.category);

    if (categoryIndex !== -1) {
        // If the category exists, add the price to the totalSpent
        result[categoryIndex].totalSpent += item.price;
    } else {
        // If the category doesn't exist, create a new entry
        result.push({ category: item.category, totalSpent: item.price });
    }
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
