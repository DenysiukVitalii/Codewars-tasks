class Specialty {
    private name: string;
    dean: Office;
    groups: Group[];    
}

class Office {
    specialties: Specialty[];
}

class Discipline {
    private name: string;
    plan: Course[];
}

class Course {
    private control: number;
    private term: number;
    listeners: Group[];
    disciplines: Discipline[];
}

class Mark {
    private result: number;
    owner: Student;
}

class Student {
    private name: string;
    group: Group;
    course: Course;
}

class Group extends Specialty {
    private year: number;
    members: Student[];
} 


