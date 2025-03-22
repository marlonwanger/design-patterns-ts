import { Inject } from "./decorators";
import { DatabaseService } from "./services/database.service";
import { LoggerService } from "./services/logger.service";

export class UserService {
  @Inject("LoggerService")
  private logger!: LoggerService;

  @Inject("DatabaseService")
  private database!: DatabaseService;

  createUser(name: string) {
    this.logger.log(`Criando usuário ${name}`);
    this.database.query(`INSERT INTO users (name) VALUES ('${name}')`);
  }
}
