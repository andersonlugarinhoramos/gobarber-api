import {
  isBefore,
  getHours,
  format,
  addSeconds,
  addMinutes,
  addHours,
} from 'date-fns';
import IDateProvider from '../models/IDateProvider';

export default class DatefnsDateProvider implements IDateProvider {
  public addDuration(startDate: Date, duration: string): Date {
    const durationParser = duration.split(':');

    const newDateSeconds = addSeconds(startDate, Number(durationParser[2]));
    const newDateMinutes = addMinutes(
      newDateSeconds,
      Number(durationParser[1]),
    );
    const newDateHours = addHours(newDateMinutes, Number(durationParser[0]));

    return newDateHours;
  }

  public isBefore(date: Date): boolean {
    return isBefore(date, Date.now());
  }

  public getHours(date: Date): number {
    return getHours(date);
  }

  public format(date: Date, settings: string): string {
    return format(date, settings);
  }
}
