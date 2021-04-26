import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddSericeTypeInAppointment1619202670077
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'service_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'AppointmentService',
        columnNames: ['service_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'appointments_services',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('appointments', 'AppointmentService');

    await queryRunner.dropColumn('appointments', 'service_id');
  }
}
