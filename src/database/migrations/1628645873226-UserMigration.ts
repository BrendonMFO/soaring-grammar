import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1628645873226 implements MigrationInterface {
  name = 'UserMigration1628645873226';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`soaring\`.\`tab_users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`googleId\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, UNIQUE INDEX \`IDX_e3eb35f91a5ba590b045784d25\` (\`googleId\`), UNIQUE INDEX \`IDX_bb98fe217c97f2975a8280ba69\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_bb98fe217c97f2975a8280ba69\` ON \`soaring\`.\`tab_users\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_e3eb35f91a5ba590b045784d25\` ON \`soaring\`.\`tab_users\``,
    );
    await queryRunner.query(`DROP TABLE \`soaring\`.\`tab_users\``);
  }
}
