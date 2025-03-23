import DependencyContainer from "./DependencyContainer";
import { DatabaseService } from "./services/database.service";
import { LoggerService } from "./services/logger.service";
import { UserService } from "./user.service";

DependencyContainer.getInstance().register(
  "LoggerService",
  new LoggerService()
);
DependencyContainer.getInstance().register(
  "DatabaseService",
  new DatabaseService()
);

const userService = new UserService();
userService.createUser("Alice");
