import { MigrationInterface, QueryRunner } from 'typeorm';

export class AppMigration1628990543391 implements MigrationInterface {
  name = 'AppMigration1628990543391';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`soaring\`.\`tab_users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`googleId\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, UNIQUE INDEX \`IDX_e3eb35f91a5ba590b045784d25\` (\`googleId\`), UNIQUE INDEX \`IDX_bb98fe217c97f2975a8280ba69\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`soaring\`.\`tab_grammar_words\` (\`id\` varchar(255) NOT NULL, \`word\` varchar(255) NOT NULL, \`stem\` varchar(255) NOT NULL, \`userId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`soaring\`.\`tab_grammar_phrases\` (\`id\` varchar(255) NOT NULL, \`phrase\` text NOT NULL, \`translatedPhrase\` text NULL, \`grammarWordId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`soaring\`.\`WORDS\` (\`id\` varchar(255) NOT NULL, \`word\` varchar(255) NOT NULL, \`stem\` varchar(255) NOT NULL, \`lang\` varchar(255) NOT NULL, \`category\` int NOT NULL, \`timestamp\` int NOT NULL, \`profileid\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`soaring\`.\`LOOKUPS\` (\`id\` varchar(255) NOT NULL, \`word_key\` varchar(255) NOT NULL, \`book_key\` varchar(255) NOT NULL, \`dict_key\` varchar(255) NOT NULL, \`pos\` varchar(255) NOT NULL, \`usage\` varchar(255) NOT NULL, \`timestamp\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`soaring\`.\`BOOK_INFO\` (\`id\` varchar(255) NOT NULL, \`asin\` varchar(255) NOT NULL, \`guid\` varchar(255) NOT NULL, \`lang\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`authors\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`soaring\`.\`tab_grammar_words\` ADD CONSTRAINT \`FK_cac7b0712247e30a40ed2ef4077\` FOREIGN KEY (\`userId\`) REFERENCES \`soaring\`.\`tab_users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`soaring\`.\`tab_grammar_phrases\` ADD CONSTRAINT \`FK_d04c29a00d7098c00f5559dcd08\` FOREIGN KEY (\`grammarWordId\`) REFERENCES \`soaring\`.\`tab_grammar_words\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`soaring\`.\`LOOKUPS\` ADD CONSTRAINT \`FK_bd34b087f0e9cff723d9e3650b1\` FOREIGN KEY (\`book_key\`) REFERENCES \`soaring\`.\`BOOK_INFO\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`soaring\`.\`LOOKUPS\` ADD CONSTRAINT \`FK_ed933b7b2f71d2e44ba6b493efb\` FOREIGN KEY (\`word_key\`) REFERENCES \`soaring\`.\`WORDS\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`soaring\`.\`LOOKUPS\` DROP FOREIGN KEY \`FK_ed933b7b2f71d2e44ba6b493efb\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`soaring\`.\`LOOKUPS\` DROP FOREIGN KEY \`FK_bd34b087f0e9cff723d9e3650b1\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`soaring\`.\`tab_grammar_phrases\` DROP FOREIGN KEY \`FK_d04c29a00d7098c00f5559dcd08\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`soaring\`.\`tab_grammar_words\` DROP FOREIGN KEY \`FK_cac7b0712247e30a40ed2ef4077\``,
    );
    await queryRunner.query(`DROP TABLE \`soaring\`.\`BOOK_INFO\``);
    await queryRunner.query(`DROP TABLE \`soaring\`.\`LOOKUPS\``);
    await queryRunner.query(`DROP TABLE \`soaring\`.\`WORDS\``);
    await queryRunner.query(`DROP TABLE \`soaring\`.\`tab_grammar_phrases\``);
    await queryRunner.query(`DROP TABLE \`soaring\`.\`tab_grammar_words\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_bb98fe217c97f2975a8280ba69\` ON \`soaring\`.\`tab_users\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_e3eb35f91a5ba590b045784d25\` ON \`soaring\`.\`tab_users\``,
    );
    await queryRunner.query(`DROP TABLE \`soaring\`.\`tab_users\``);
  }
}
