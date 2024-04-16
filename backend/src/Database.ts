//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { RidesEntity } from './db/Rides.entity';
import { UsersEntity } from './db/Users.entity';
import { PaymentsEntity } from './db/Payments.entity';
import { ReviewsAndRatingsEntity } from './db/ReviewsAndRatings.entity';
import { TripHistoryEntity } from './db/TripHistory.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      RidesEntity,
      UsersEntity,
      PaymentsEntity,
      ReviewsAndRatingsEntity,
      TripHistoryEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Rides: [
        {
          destination: 'destination 1',
          date: '2025-04-13T08:05:58.900Z',
          time: '2024-12-19T06:20:58.775Z',
          carType: 'carType 1',
          driverRating: 0.25,
          estimatedFare: 0.6,
          id: 18,
        },
        {
          destination: 'destination 2',
          date: '2025-04-13T09:37:22.388Z',
          time: '2023-10-28T08:19:15.386Z',
          carType: 'carType 2',
          driverRating: 0.14,
          estimatedFare: 0.02,
          id: 58,
        },
        {
          destination: 'destination 3',
          date: '2025-01-10T14:54:39.182Z',
          time: '2025-02-15T15:02:35.003Z',
          carType: 'carType 3',
          driverRating: 0.56,
          estimatedFare: 0.7,
          id: 25,
        },
        {
          destination: 'destination 4',
          date: '2023-11-30T21:49:28.778Z',
          time: '2023-10-22T14:30:29.929Z',
          carType: 'carType 4',
          driverRating: 0.5,
          estimatedFare: 0.76,
          id: 98,
        },
        {
          destination: 'destination 5',
          date: '2023-06-15T13:06:29.121Z',
          time: '2024-08-11T04:12:42.283Z',
          carType: 'carType 5',
          driverRating: 0.19,
          estimatedFare: 0.93,
          id: 61,
        },
      ],
      Users: [
        {
          name: 'name 1',
          contactDetails: 'contactDetails 1',
          paymentMethods: 'paymentMethods 1',
          id: 65,
        },
        {
          name: 'name 2',
          contactDetails: 'contactDetails 2',
          paymentMethods: 'paymentMethods 2',
          id: 66,
        },
        {
          name: 'name 3',
          contactDetails: 'contactDetails 3',
          paymentMethods: 'paymentMethods 3',
          id: 30,
        },
        {
          name: 'name 4',
          contactDetails: 'contactDetails 4',
          paymentMethods: 'paymentMethods 4',
          id: 96,
        },
        {
          name: 'name 5',
          contactDetails: 'contactDetails 5',
          paymentMethods: 'paymentMethods 5',
          id: 89,
        },
      ],
      Payments: [
        {
          transactionId: 'transactionId 1',
          amount: 0.34,
          paymentMethods: 'paymentMethods 1',
          payerIds: 1,
          paymentStatus: 'paymentStatus 1',
          id: 93,
        },
        {
          transactionId: 'transactionId 2',
          amount: 0.75,
          paymentMethods: 'paymentMethods 2',
          payerIds: 2,
          paymentStatus: 'paymentStatus 2',
          id: 77,
        },
        {
          transactionId: 'transactionId 3',
          amount: 0.08,
          paymentMethods: 'paymentMethods 3',
          payerIds: 3,
          paymentStatus: 'paymentStatus 3',
          id: 44,
        },
        {
          transactionId: 'transactionId 4',
          amount: 0.97,
          paymentMethods: 'paymentMethods 4',
          payerIds: 4,
          paymentStatus: 'paymentStatus 4',
          id: 20,
        },
        {
          transactionId: 'transactionId 5',
          amount: 0.4,
          paymentMethods: 'paymentMethods 5',
          payerIds: 5,
          paymentStatus: 'paymentStatus 5',
          id: 62,
        },
      ],
      ReviewsAndRatings: [
        {
          reviewerId: 1,
          rating: 0.05,
          comments: 'comments 1',
          date: '2024-08-25T10:11:42.029Z',
          time: '2023-12-06T14:34:42.278Z',
          id: 52,
        },
        {
          reviewerId: 2,
          rating: 0.71,
          comments: 'comments 2',
          date: '2023-08-15T19:41:19.681Z',
          time: '2023-07-28T22:58:58.074Z',
          id: 42,
        },
        {
          reviewerId: 3,
          rating: 0.09,
          comments: 'comments 3',
          date: '2023-05-31T02:00:40.035Z',
          time: '2024-02-29T10:26:00.919Z',
          id: 73,
        },
        {
          reviewerId: 4,
          rating: 0.91,
          comments: 'comments 4',
          date: '2024-05-01T09:39:23.874Z',
          time: '2024-11-13T07:57:18.804Z',
          id: 32,
        },
        {
          reviewerId: 5,
          rating: 0.01,
          comments: 'comments 5',
          date: '2023-09-14T16:03:05.844Z',
          time: '2024-07-19T08:24:26.129Z',
          id: 69,
        },
      ],
      TripHistory: [
        {
          tripId: 1,
          userId: 1,
          tripDate: '2024-09-02T09:14:17.365Z',
          destination: 'destination 1',
          status: 'status 1',
          id: 79,
        },
        {
          tripId: 2,
          userId: 2,
          tripDate: '2023-06-10T04:56:31.151Z',
          destination: 'destination 2',
          status: 'status 2',
          id: 59,
        },
        {
          tripId: 3,
          userId: 3,
          tripDate: '2025-01-13T20:07:15.637Z',
          destination: 'destination 3',
          status: 'status 3',
          id: 100,
        },
        {
          tripId: 4,
          userId: 4,
          tripDate: '2024-09-30T06:06:14.284Z',
          destination: 'destination 4',
          status: 'status 4',
          id: 62,
        },
        {
          tripId: 5,
          userId: 5,
          tripDate: '2023-11-25T05:28:23.492Z',
          destination: 'destination 5',
          status: 'status 5',
          id: 59,
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('RidesEntity', data.Rides);
      await this.SeedResource('UsersEntity', data.Users);
      await this.SeedResource('PaymentsEntity', data.Payments);
      await this.SeedResource(
        'ReviewsAndRatingsEntity',
        data.ReviewsAndRatings,
      );
      await this.SeedResource('TripHistoryEntity', data.TripHistory);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}