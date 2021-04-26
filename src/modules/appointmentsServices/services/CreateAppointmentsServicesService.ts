import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import AppointmentService from '../infra/typeorm/entities/AppointmentService';
import IAppointmentsServicesRepository from '../repositories/IAppointmentsServicesRepository';

interface IRequest {
  provider_id: string;
  description: string;
  duration: string;
  price: number;
}

@injectable()
class CreateAppointmentServiceService {
  constructor(
    @inject('AppointmentsServicesRepository')
    private appointmentsServicesRepository: IAppointmentsServicesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    provider_id,
    description,
    duration,
    price,
  }: IRequest): Promise<AppointmentService> {
    const findAppointmentServiceByDescription = await this.appointmentsServicesRepository.findByDescription(
      provider_id,
      description,
    );

    if (findAppointmentServiceByDescription) {
      throw new AppError('This appointment service is already exists');
    }

    const appointmentservice = await this.appointmentsServicesRepository.create(
      {
        provider_id,
        description,
        duration,
        price,
      },
    );

    await this.cacheProvider.invalidate('appointments-services');

    return appointmentservice;
  }
}

export default CreateAppointmentServiceService;
