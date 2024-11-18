//Task 4
/**
 * define interface with Product name
 * that contain name and price properties
 * each property is own type
 */
interface Product {
  name: string;
  price: number;
}

/**
 * define function that tack array of products and return number
 * that represent total price
 * each product have price
 * use reduce and take callbak funtion and initial value
 * acc is accumulator and cur is current
 * return acc + cur
 * 0 is initial value
 * return total
 */
function totalPrice(arr: Product[]): number {
  const total = arr.reduce((acc, cur) => acc + cur.price, 0);
  return total;
}

/**
 * define function that take email and return boolean
 * that represent if email is valid
 * /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ pattern for valid email
 * ^ start with any word character
 * \w+ one or more word character
 * ([\.-]?\w+)* any word character
 * \w+ one or more word character
 * @ any word character
 * (\.\w{2,3})+ one or more word character
 * $ end with any word character
 * \w{2,3} one or more word character
 * $ end with any word character
 */
//Task 5
function validEmail(email: string): boolean {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}
