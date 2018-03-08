import { InMemoryDbService } from 'angular-in-memory-web-api';

//   "German"    = 0,
//   "English"   = 1,
//   "French"    = 2,
//   "Spanish"   = 3

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 11,
        name: 'Mr. Nice',
        email: 'mr-nice@gmx.de',
        freelancer: true,
        languages: [0, 1, 3]
      },
      {
        id: 12,
        name: 'Narco',
        email: 'info@narco.sp',
        freelancer: true,
        languages: [3, 1]
      },
      {
        id: 13,
        name: 'Bombasto',
        email: 'bombasto-service@bombasto.com',
        freelancer: true,
        languages: [3, 1, 0]
      },
      {
        id: 14,
        name: 'Celeritas',
        email: 'info@celeritas.com',
        freelancer: true,
        languages: [1]
      },
      {
        id: 15,
        name: 'Magneta',
        email: 'magneta@gmail.com',
        freelancer: true,
        languages: [1, 2]
      },
      {
        id: 16,
        name: 'RubberMan',
        email: 'r.man@rubberman.com',
        freelancer: false,
        languages: [1, 3]
      },
      {
        id: 17,
        name: 'Dynama',
        email: 'dynama@dynama.com',
        freelancer: false,
        languages: [0, 1, 2, 3]
      },
      {
        id: 18,
        name: 'Dr IQ',
        email: 'doc-iq@iq.de',
        freelancer: false,
        languages: [1, 0, 2, 3]
      },
      {
        id: 19,
        name: 'Magma',
        email: 'contact@magma.pl',
        freelancer: true,
        languages: [1]
      },
      {
        id: 20,
        name: 'Tornado',
        email: 'info@tornado-germany.de',
        freelancer: false,
        languages: [0, 1]
      },
    ];
    return {heroes};
  }
}