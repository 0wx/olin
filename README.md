# Olin PWA

## Question 1

Create a function to count the number of times a number appears in the input
parameter. For example, if the number entered in the parameter is 776265327, then
the result is:
The number 0 appears 0 times
The number 1 appears 0 times
The number 2 appears 2 times
The number 3 appears 1 time
The number 4 appears 0 times
The number 5 appears 1 time
The number 6 appears 2 times
The number 7 appears 3 times
The number 8 appears 0 times
The number 9 appears 0 times

Answer:

```ts
function numberAppearances(number: number): void {
  const numberArray = number.toString().split('')
  const numberCount: { [key: string]: number } = {}

  numberArray.forEach((number) => {
    if (!numberCount[number]) numberCount[number] = 0
    
    numberCount[number]++
  })

  for (let i = 0; i < 10; i++) {
    console.log(`The number ${i} appears ${numberCount[i] || 0} times`)
  }
}
```

## Question 2

There is a class called OrderItem which has properties ID, OrderID, ProductID, Price,
Qty. Create a function to calculate the total price of the order with the parameter in
the function in the form of an array of OrderItems.

Answer:

```ts
class OrderItem {
  id: number
  orderId: number
  productId: number
  price: number
  qty: number

  constructor(
    id: number,
    orderId: number,
    productId: number,
    price: number,
    qty: number
  ) {
    this.id = id
    this.orderId = orderId
    this.productId = productId
    this.price = price
    this.qty = qty
  }
}

function totalPrice(orderItems: OrderItem[]): number {
  return orderItems.reduce(
    (total, orderItem) => total + orderItem.price * orderItem.qty,
    0
  )
}
```
