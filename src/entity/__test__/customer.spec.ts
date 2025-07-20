import Address from "../address"
import Customer from "../customer"

describe('Customer unit tests', () => {
  it('should throw error when Id is Empty', () => {
    expect(() => {
      new Customer('', 'Davidson Pacifico')
    }).toThrow('ID is required')
  })

  it('should throw error when Name is Empty', () => {
    expect(() => {
      new Customer('1', '')
    }).toThrow('Name is required')
  })

  it('should change name', () => {
    const customer = new Customer('1', 'Davidson Pacifico');
    customer.changeName('Pacifico Davidson');
    expect(customer.name).toBe('Pacifico Davidson');
  })

  it('should activate customer', () => {
    const customer = new Customer('1', 'Davidson Pacifico');
    const address = new Address('Rua A', 123, 'São Paulo', '01234-567');
    customer.address = address;
    customer.activate();
    expect(customer.isActive()).toBe(true);
  })

  it('should deactivate customer', () => {
    const customer = new Customer('1', 'Davidson Pacifico');
    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  })

  it('should throw error when address is undefined', () => {

    expect(() => {
      const customer = new Customer('1', 'Davidson Pacifico');
      customer.activate();
    }).toThrow('Address is required to activate a customer');
  })
})