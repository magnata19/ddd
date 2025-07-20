import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

// esse aqui é um agregado de exemplo
let customer = new Customer('123', 'Davidson Pacifico');
const address = new Address('Rua A', 123, 'São Paulo', '01234-567');
customer.address = address;
customer.activate();

// esse aqui é outro agregado de exemplo
const item1 = new OrderItem('1', 'Item 1', 100);
const item2 = new OrderItem('2', 'Item 2', 200);
const order = new Order('1', customer['_id'], [item1, item2]);