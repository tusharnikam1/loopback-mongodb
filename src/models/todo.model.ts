import { Entity, model, property } from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  desc?: string;


  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
