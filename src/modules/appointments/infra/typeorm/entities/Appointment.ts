import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import AppointmentService from '@modules/appointmentsServices/infra/typeorm/entities/AppointmentService';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  confirmation: boolean;

  @Column()
  success: boolean;

  @Column()
  stars: number;

  @Column()
  comments: string;

  @Column()
  service_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'service_id' })
  appointment_service: AppointmentService;

  @Column()
  price: number;

  @Column('timestamp with time zone')
  date: Date;

  @Column()
  duration: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
