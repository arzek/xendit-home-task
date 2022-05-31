import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { RideService } from '../src/modules/ride/ride.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let rideService: RideService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    rideService = await app.get(RideService);
    await app.init();
  });

  it('/rides (POST)', () => {
    return request(app.getHttpServer())
      .post('/rides')
      .send({
        startLat: 70,
        startLong: 160,
        endLat: 90,
        endLong: 160,
        riderName: 'riderName',
        driverName: 'driverName',
        driverVehicle: 'driverVehicle',
      })
      .expect(201);
  });

  it('/rides (GET)', () => {
    return request(app.getHttpServer()).get('/rides').expect(200);
  });

  it('/rides (GET)', async () => {
    const id = await request(app.getHttpServer())
      .post('/rides')
      .send({
        startLat: 70,
        startLong: 160,
        endLat: 90,
        endLong: 160,
        riderName: 'riderName',
        driverName: 'driverName',
        driverVehicle: 'driverVehicle',
      })
      .expect(201)
      .then((data) => {
        return data.body.rideID;
      });

    return request(app.getHttpServer()).get(`/rides/${id}`).expect(200);
  });

  it('/rides/:id (GET 404)', () => {
    return request(app.getHttpServer()).get('/rides/999999').expect(404);
  });

  it('/rides/:id (GET 404)', () => {
    return request(app.getHttpServer()).get('/rides/999999').expect(404);
  });

  it('/rides (GET 404)', async () => {
    await rideService.removeAll();
    return request(app.getHttpServer()).get('/rides').expect(404);
  });
});
