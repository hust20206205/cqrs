mport { IQuery, IQueryResult } from "@nestjs/cqrs";

export class FindAllProductQuery implements IQuery {
  constructor(public readonly payload: {}) {}
}

export class FindAllProductQueryResult implements IQueryResult {
  constructor() {}
}
