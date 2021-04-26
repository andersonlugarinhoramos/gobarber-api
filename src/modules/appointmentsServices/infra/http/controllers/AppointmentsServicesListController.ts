import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAppointmentServiceService from '@modules/appointmentsServices/services/ListAppointmentsServicesService';

export default class AppointmentsServicesControllerCreate {
  public async find(request: Request, response: Response): Promise<Response> {
    const { user } = request;

    const listAppointmentService = container.resolve(
      ListAppointmentServiceService,
    );

    const appointmentsServices = await listAppointmentService.execute(user.id);

    return response.json(appointmentsServices);
  }
}
