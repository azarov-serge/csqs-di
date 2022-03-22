import "reflect-metadata";
import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";

import {CallsService} from "../services/CallsService";
import {ChatsService} from "../services/ChatsService";
import {EmailsService} from "../services/EmailsService";

const container = new Container();

container.bind<CallsService>(CallsService).to(CallsService).inSingletonScope();
container.bind<ChatsService>(ChatsService).to(ChatsService).inSingletonScope();
container.bind<EmailsService>(EmailsService).to(EmailsService).inSingletonScope();

container.load(buildProviderModule());

export default container;
