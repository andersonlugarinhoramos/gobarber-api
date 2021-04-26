export default interface IDateProvider {
  addDuration(startDate: Date, duration: string): Date;
  isBefore(date: Date): boolean;
  getHours(date: Date): number;
  format(date: Date, settings: string): string;
}
