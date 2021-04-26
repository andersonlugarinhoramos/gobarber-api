import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsServicesControllerCreate from '../controllers/AppointmentsServicesCreateController';
import AppointmentsServicesControllerList from '../controllers/AppointmentsServicesListController';

const appointmentsServicesRouter = Router();
const appointmentsServicesControllerCreate = new AppointmentsServicesControllerCreate();
const appointmentsServicesControllerList = new AppointmentsServicesControllerList();

appointmentsServicesRouter.use(ensureAuthenticated);

appointmentsServicesRouter.get('/', appointmentsServicesControllerList.find);
appointmentsServicesRouter.post(
  '/',
  appointmentsServicesControllerCreate.create,
);

export default appointmentsServicesRouter;
