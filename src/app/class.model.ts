import { Student } from './student.model';
import { Group } from './group.model';

export class Class {
  public NumberOfGroups: number
  public groups: Group[];
  public students: Student[];
  constructor(public name: string, public subject: string) { }
}
