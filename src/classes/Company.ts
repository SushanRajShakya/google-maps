import faker from '@faker-js/faker';

import { Mappable } from '../models';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: Mappable['location'];

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getMarkerContent(): string {
    return `<h4>Company Name: </h4>${this.name}<h4>Catchphrase: </h4>${this.catchPhrase}`;
  }
}
