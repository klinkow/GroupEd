import { Student } from './student.model';
import { Group } from './group.model';

export class Class {
  constructor(public name: string, public students: Student[], public groups: Group[], public subject: string, public NumberOfGroups: number, public period: number) { }
}
