namespace Subjects {
  export class Subject {
    teacher: Teacher | null = null;

    // Setter method to assign a teacher
    setTeacher(teacher:Teacher)
      this.teacher = teacher;
    }
  }
}

