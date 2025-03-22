import { container } from "./DependencyContainer";
import { DatabaseService } from "./services/database.service";
import { LoggerService } from "./services/logger.service";
import { UserService } from "./user.service";

container.register("LoggerService", new LoggerService());
container.register("DatabaseService", new DatabaseService());

const userService = new UserService();
userService.createUser("Alice");
