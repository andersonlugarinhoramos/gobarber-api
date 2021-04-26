import { uuid } from 'uuidv4';

import IAppointmentsServicesRepository from '@modules/appointmentsServices/repositories/IAppointmentsServicesRepository';
import ICreateAppointmentServiceDTO from '@modules/appointmentsServices/dtos/ICreateAppointmentServiceDTO';

import AppointmentService from '../../infra/typeorm/entities/AppointmentService';

class AppointmentsServicesRepository
  implements IAppointmentsServicesRepository {
  private appointmentsServices: AppointmentService[] = [];

  public async create({
    provider_id,
    description,
    duration,
    price,
  }: ICreateAppointmentServiceDTO): Promise<AppointmentService> {
    const appointmentService = new AppointmentService();

    Object.assign(appointmentService, {
      id: uuid(),
      provider_id,
      description,
      duration,
      price,
    });

    this.appointmentsServices.push(appointmentService);

    return appointmentService;
  }

  public async findAllByProvider(
    provider_id: string,
  ): Promise<AppointmentService[]> {
    const appointmentByDescription = this.appointmentsServices.filter(
      appointmentService => {
        return appointmentService.provider_id === provider_id;
      },
    );

    return appointmentByDescription;
  }

  async findByDescription(
    provider_id: string,
    description: string,
  ): Promise<AppointmentService | undefined> {
    const appointmentByDescription = this.appointmentsServices.find(
      appointmentService => {
        return (
          appointmentService.description === description &&
          appointmentService.provider_id === provider_id
        );
      },
    );

    return appointmentByDescription;
  }

  async findById(
    provider_id: string,
    id: string,
  ): Promise<AppointmentService | undefined> {
    const appointmentByDescription = this.appointmentsServices.find(
      appointmentService => {
        return (
          appointmentService.id === id &&
          appointmentService.provider_id === provider_id
        );
      },
    );

    return appointmentByDescription;
  }
}

export default AppointmentsServicesRepository;
