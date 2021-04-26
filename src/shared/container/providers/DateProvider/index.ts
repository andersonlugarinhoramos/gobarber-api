import { container } from 'tsyringe';

import IDateProvider from './models/IDateProvider';

import DatefnsDateProvider from './implementations/DatefnsDateProvider';

container.registerSingleton<IDateProvider>('DateProvider', DatefnsDateProvider);
