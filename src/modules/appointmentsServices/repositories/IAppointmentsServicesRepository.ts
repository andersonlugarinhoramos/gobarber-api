import AppointmentService from '../infra/typeorm/entities/AppointmentService';
import ICreateAppointmentService from '../dtos/ICreateAppointmentServiceDTO';
import IFindAppointmentsServicesDTO from '../dtos/IFindAppointmentsServicesDTO';

export default interface IAppointmentsServicesRepository {
  create(data: ICreateAppointmentService): Promise<AppointmentService>;
  findByDescription(
    data: IFindAppointmentsServicesDTO,
  ): Promise<AppointmentService | undefined>;
  findAllByProvider(
    data: IFindAppointmentsServicesDTO,
  ): Promise<AppointmentService[]>;
  findByIdAndProvider(
    data: IFindAppointmentsServicesDTO,
  ): Promise<AppointmentService | undefined>;
}
