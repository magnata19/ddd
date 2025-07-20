import OrderItem from "./order_item";

export default class Order {

  private _id: string;
  private _customerId: string;
  private _items: OrderItem[];
  private _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.total();
    this.validate();
  }

  validate() {
    if (this._id === '' || this._id === null || this._id === undefined) {
      throw new Error('ID is required');
    }
    if (this._customerId === '' || this._customerId === null || this._customerId === undefined) {
      throw new Error('Customer ID is required');
    }
    if (this._items.length === 0) {
      throw new Error('Items are required');
    }
  }

  total(): number {
    return this._items.reduce((accumulator, item) => accumulator + item._price, 0); // 0 é o valor inicial do acumulador 
  }
}