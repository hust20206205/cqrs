import { Logger } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateProductCommand } from "./create-product.command";
import { CreateProductPort } from "./create-product.port";

@CommandHandler(CreateProductCommand)
export class CreateProductCommandHandler implements ICommandHandler<CreateProductCommand> {
  constructor(private readonly createProductPort: CreateProductPort) {}

  private readonly logger = new Logger(CreateProductCommandHandler.name);

  public async execute({ name }: CreateProductCommand): Promise<void> {
    this.logger.log(`> CreateProductCommand: called`);
  }
}
