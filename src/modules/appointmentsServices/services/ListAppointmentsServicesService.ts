import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { classToClass } from 'class-transformer';
import AppointmentService from '../infra/typeorm/entities/AppointmentService';
import IAppointmentsServicesRepository from '../repositories/IAppointmentsServicesRepository';

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsServicesRepository')
    private appointmentsServicesRepository: IAppointmentsServicesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(provider_id: string): Promise<AppointmentService[]> {
    const cacheKey = 'appointments-services';

    let appointmentsServices = await this.cacheProvider.recover<
      AppointmentService[]
    >(cacheKey);

    if (!appointmentsServices) {
      appointmentsServices = await this.appointmentsServicesRepository.findAllByProvider(
        provider_id,
      );

      await this.cacheProvider.save(
        cacheKey,
        classToClass(appointmentsServices),
      );
    }

    return appointmentsServices;
  }
}

export default ListProviderAppointmentsService;
