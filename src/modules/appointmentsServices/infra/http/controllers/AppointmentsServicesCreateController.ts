import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentServiceService from '@modules/appointmentsServices/services/CreateAppointmentsServicesService';

export default class AppointmentsServicesControllerCreate {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user } = request;

    const { description, duration, price } = request.body;

    const createAppointmentService = container.resolve(
      CreateAppointmentServiceService,
    );

    const appointmentService = await createAppointmentService.execute({
      provider_id: user.id,
      description,
      duration,
      price,
    });

    return response.json(appointmentService);
  }
}
