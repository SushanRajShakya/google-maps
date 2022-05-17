import { Mappable } from '../models';

import { faker } from '@faker-js/faker';

export class User implements Mappable {
  name: string;
  location: Mappable['location'];

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getMarkerContent(): string {
    return `<h4>User: </h4>${this.name}`;
  }
}
