import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddSericePriceAppointments1619202897614
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'price',
        type: 'numeric',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn('appointments', 'price');
  }
}
