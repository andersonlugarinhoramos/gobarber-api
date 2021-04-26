import { getRepository, Repository } from 'typeorm';

import IAppointmentsServicesRepository from '@modules/appointmentsServices/repositories/IAppointmentsServicesRepository';
import ICreateAppointmentServiceDTO from '@modules/appointmentsServices/dtos/ICreateAppointmentServiceDTO';

import IFindAppointmentsServicesDTO from '@modules/appointmentsServices/dtos/IFindAppointmentsServicesDTO';
import AppointmentService from '../entities/AppointmentService';

class AppointmentsServicesRepository
  implements IAppointmentsServicesRepository {
  private ormRepository: Repository<AppointmentService>;

  constructor() {
    this.ormRepository = getRepository(AppointmentService);
  }

  public async create({
    provider_id,
    description,
    duration,
    price,
  }: ICreateAppointmentServiceDTO): Promise<AppointmentService> {
    const appointmentService = this.ormRepository.create({
      provider_id,
      description,
      duration,
      price,
    });

    await this.ormRepository.save(appointmentService);

    return appointmentService;
  }

  public async findAllByProvider({
    provider_id,
  }: IFindAppointmentsServicesDTO): Promise<AppointmentService[]> {
    const findAppointmentService = await this.ormRepository.find({
      provider_id,
    });

    return findAppointmentService;
  }

  public async findByDescription({
    provider_id,
    description,
  }: IFindAppointmentsServicesDTO): Promise<AppointmentService | undefined> {
    const appointmentService = await this.ormRepository.findOne({
      provider_id,
      description,
    });

    return appointmentService;
  }

  public async findByIdAndProvider({
    provider_id,
    id,
  }: IFindAppointmentsServicesDTO): Promise<AppointmentService | undefined> {
    const appointmentService = await this.ormRepository.findOne({
      provider_id,
      id,
    });

    return appointmentService;
  }
}

export default AppointmentsServicesRepository;
