import { DomainException } from './domain.exception';

export class ProductException extends DomainException {
  constructor(message: string) {
    super(message);
  }
}
