import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' , email: 'mr-nice@gmx.de', freelancer: true },
      { id: 12, name: 'Narco', email: 'info@narco.sp', freelancer: true },
      { id: 13, name: 'Bombasto', email: 'bombasto-service@bombasto.com', freelancer: true },
      { id: 14, name: 'Celeritas', email: 'info@celeritas.com', freelancer: true },
      { id: 15, name: 'Magneta', email: 'magneta@gmail.com', freelancer: true },
      { id: 16, name: 'RubberMan', email: 'r.man@rubberman.com', freelancer: false },
      { id: 17, name: 'Dynama', email: 'dynama@dynama.com', freelancer: false },
      { id: 18, name: 'Dr IQ', email: 'doc-iq@iq.de', freelancer: true },
      { id: 19, name: 'Magma', email: 'contact@magma.pl', freelancer: true },
      { id: 20, name: 'Tornado', email: 'info@tornado-germany.de', freelancer: false }
    ];
    return {heroes};
  }
}