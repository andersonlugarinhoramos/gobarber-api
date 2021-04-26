import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import IAppointmentsServicesRepository from '@modules/appointmentsServices/repositories/IAppointmentsServicesRepository';
import IDateProvider from '@shared/container/providers/DateProvider/models/IDateProvider';
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  user_id: string;
  date: Date;
  service_id: string;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('AppointmentsServicesRepository')
    private appointmentsServicesRepository: IAppointmentsServicesRepository,

    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,

    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  public async execute({
    date,
    provider_id,
    user_id,
    service_id,
  }: IRequest): Promise<Appointment> {
    if (this.dateProvider.isBefore(date)) {
      throw new AppError("You can't create an appointment on a past date");
    }

    if (user_id === provider_id) {
      throw new AppError("You can't create an appointment with yourself");
    }

    const appointmentService = await this.appointmentsServicesRepository.findByIdAndProvider(
      {
        provider_id,
        id: service_id,
      },
    );

    if (!appointmentService) {
      throw new AppError("You can't create an appointment on zero price");
    }

    const duration = this.dateProvider.addDuration(
      date,
      appointmentService.duration,
    );

    if (appointmentService.price === 0) {
      throw new AppError("You can't create an appointment on zero price");
    }

    if (
      this.dateProvider.getHours(date) < 8 ||
      this.dateProvider.getHours(date) > 17
    ) {
      throw new AppError(
        "You can't only create apointments between 8am and 5pm.",
      );
    }

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      date,
      provider_id,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      user_id,
      date,
      price: appointmentService.price,
      service_id,
      duration,
    });

    const dateFormatted = this.dateProvider.format(
      date,
      "dd/MM/yyyy 'às' HH:mm'h",
    );

    await this.notificationsRepository.create({
      recipient_id: provider_id,
      content: `Novo agendamento para dia ${dateFormatted}`,
    });

    await this.cacheProvider.invalidate(
      `provider-appointments:${provider_id}:${this.dateProvider.format(
        date,
        'yyyy-M-d',
      )}`,
    );

    return appointment;
  }
}

export default CreateAppointmentService;
