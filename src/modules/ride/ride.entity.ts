import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RideEntity {
  @PrimaryGeneratedColumn()
  rideID: number;

  @Column({ type: 'decimal', nullable: false })
  startLat: number;

  @Column({ type: 'decimal', nullable: false })
  startLong: number;

  @Column({ type: 'decimal', nullable: false })
  endLat: number;

  @Column({ type: 'decimal', nullable: false })
  endLong: string;

  @Column({ type: 'text', nullable: false })
  riderName: string;

  @Column({ type: 'text', nullable: false })
  driverName: string;

  @Column({ type: 'text', nullable: false })
  driverVehicle: string;

  @Column('timestamp with time zone', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created: Date;
}
