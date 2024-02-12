// import { ICommand } from "@nestjs/cqrs";

// export class CreateProductCommand implements ICommand {
export class CreateProductCommand {
  constructor(public readonly name: string) {}
}
