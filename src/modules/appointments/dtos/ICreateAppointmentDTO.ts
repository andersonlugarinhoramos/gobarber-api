export default interface ICreateAppointmentDTO {
  provider_id: string;
  user_id: string;
  date: Date;
  price: number;
  service_id: string;
  duration: Date;
}
