import { Company, Map, User } from './classes';

const user = new User();
const company = new Company();

const map = new Map('maps');
map.addMarker(user);
map.addMarker(company);
