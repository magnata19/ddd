import Order from "../order";

describe('Order unit tests', () => {
  it('should throw error when Id is Empty', () => {
    expect(() => {
      new Order('', 'customer1', [])
    }).toThrow('ID is required');
  })

  it('should throw error when Customer ID is Empty', () => {
    expect(() => {
      new Order('1', '', [])
    }).toThrow('Customer ID is required');
  })

  it('should throw error when Items are Empty', () => {
    expect(() => {
      new Order('1', 'customer1', [])
    }).toThrow('Items are required');
  })

  it('should calculate total correctly', () => {
    const order = new Order('1', 'customer1', [
      { _id: 'item1', _name: 'Item 1', _price: 100 },
      { _id: 'item2', _name: 'Item 2', _price: 200 },
      { _id: 'item3', _name: 'Item 3', _price: 300 },
    ]);
    expect(order.total()).toBe(600);
  })
})