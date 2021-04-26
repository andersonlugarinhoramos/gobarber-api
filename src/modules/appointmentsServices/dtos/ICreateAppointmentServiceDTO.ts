export default interface ICreateAppointmentServiceDTO {
  id?: string;
  provider_id: string;
  description: string;
  duration: string;
  price: number;
}
