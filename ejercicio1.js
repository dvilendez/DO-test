const desserts = [{
  name: 'Frozen Yogurt',
  calories: 159,
  fat: 6.0,
  carbs: 24,
  protein: 4.0,
  iron: '1%',
  price: 3000
},
{
  name: 'Ice cream sandwich',
  calories: 237,
  fat: 9.0,
  carbs: 37,
  protein: 4.3,
  iron: '1%',
  price: 3800
},
{
  name: 'Eclair',
  calories: 262,
  fat: 16.0,
  carbs: 23,
  protein: 6.0,
  iron: '7%',
  price: 1300
},
{
  name: 'Cupcake',
  calories: 305,
  fat: 3.7,
  carbs: 67,
  protein: 4.3,
  iron: '8%',
  price: 3900
},
{
  name: 'Gingerbread',
  calories: 356,
  fat: 16.0,
  carbs: 49,
  protein: 3.9,
  iron: '16%',
  price: 4100
},
{
  name: 'Jelly bean',
  calories: 375,
  fat: 0.0,
  carbs: 94,
  protein: 0.0,
  iron: '0%',
  price: 4800
},
{
  name: 'Lollipop',
  calories: 392,
  fat: 0.2,
  carbs: 98,
  protein: 0,
  iron: '2%',
  price: 2600
},
{
  name: 'Honeycomb',
  calories: 408,
  fat: 3.2,
  carbs: 87,
  protein: 6.5,
  iron: '45%',
  price: 3400
},
{
  name: 'Donut',
  calories: 452,
  fat: 25.0,
  carbs: 51,
  protein: 4.9,
  iron: '22%',
  price: 930
},
{
  name: 'KitKat',
  calories: 518,
  fat: 26.0,
  carbs: 65,
  protein: 7,
  iron: '6%',
  price: 1400
}
]


const exerciseOne = () => {
  return desserts.filter(dessert => dessert.calories < 300).map(dessert => dessert.name)
}

const exerciseTwo = () => {
  return desserts
    .filter(dessert => dessert.fat > 4)
    .reduce(
      (totalPrice, dessert) => totalPrice + dessert.price,
      0
    )
}

const exerciseThree = () => {
  return desserts
    .sort((a,b) => a.fat - b.fat)
    .slice(0,3)
    .map(dessert => dessert.name)
}

const main = () => {
  console.log(exerciseOne())
  console.log(exerciseTwo())
  console.log(exerciseThree())
}

main()