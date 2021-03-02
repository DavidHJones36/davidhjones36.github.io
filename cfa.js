class FoodItem {
  constructor(foodName, price, rewardCost, category){
    this.name = foodName;
    this.price = price;
    this.rewardCost = rewardCost;
    this.rewardsPerDollar = rewardCost/price;
    this.category = category;
  }
}

const cfaItems = [
  new FoodItem('chicken sandwich',2.00,200),
  new FoodItem('chicken nuggets',1.50,150),
  new FoodItem('chicken salad', 3.00, 500)
];

console.log(cfaItems);

cfaItems.forEach(createTable);

function createTable(item, index){
  document.querySelector('.container.table>table').innerHTML += `<tr>
        <th>${item.name}</th>
        <th>${item.price}</th>
        <th>${item.rewardCost}</th>
        <th>Rank</th>
        <th>${item.rewardsPerDollar}</th>
      </tr>`
}
