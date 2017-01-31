import { Student } from './student.model';

export class Group {
  constructor(public name: string, public students: Student[]) { }
};
