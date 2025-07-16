//object value address
export default class Address {
  _street: string = '';
  _number: number = 0;
  _city: string = '';
  _zip: string = '';

  constructor(street: string, number: number, city: string, zip: string) {
    this._street = street;
    this._number = number;
    this._city = city;
    this._zip = zip;
  }

  validate(): void {
    if (this._street.length === 0) {
      throw new Error('Street is required');
    }
    if (this._city.length === 0) {
      throw new Error('City is required');
    }
    if (this._zip.length === 0) {
      throw new Error('ZIP code is required');
    }
  }
}