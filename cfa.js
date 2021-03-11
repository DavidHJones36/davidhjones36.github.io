class FoodItem {
  constructor(foodName, price, rewardCost, category) {
    this.name = foodName;
    this.price = price;
    this.rewardCost = rewardCost;
    this.rewardsPerDollar = rewardCost / price;
    this.category = category;
  }
}

const cfaItems = [
  new FoodItem("chicken sandwich", 2.0, 200),
  new FoodItem("chicken nuggets", 1.5, 150),
  new FoodItem("chicken salad", 3.0, 500),
];

cfaItems.forEach(createTable);

function createTable(item, index) {
  document.querySelector(".cfa.table>table").innerHTML += `<tr>
        <th>${item.name}</th>
        <th>${item.price}</th>
        <th>${item.rewardCost}</th>
        <th>Rank</th>
        <th>${item.rewardsPerDollar.toFixed(2)}</th>
      </tr>`;
}

const delayTable = () => { 
  const table = document.querySelector('.cfa.table');
  console.log(table);

}

delayTable();
