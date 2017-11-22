class Teacher {
    private name: string;
    disciplines: Discipline[];
    topics: Topic[];

    constructor(name: string) {
        this.name = name;
        this.disciplines = [];
        this.topics = [];
    }

    createDiscipline(name: string) {
        let disc = new Discipline(name);
        this.disciplines.push(disc);
        return disc;
    }

    editDiscipline(disc: Discipline, newName: string) {
        let index = this.disciplines.indexOf(disc);
        if (index !== -1) {
            this.disciplines[index].discipline = newName;
            disc.discipline = newName;
        }
        return disc;
    }

    deleteDiscipline(disc: Discipline) {
        let index = this.disciplines.indexOf(disc);
        if (index !== -1) {
            this.disciplines.splice(index, 1);
        }
    }

    createTopic(name: string, disc: Discipline) {
        let topic = new Topic(name, disc);
        this.topics.push(topic);
        disc.topics.push(topic);
        return topic;
    }
}

class Discipline {
    private name: string;
    topics: Topic[];

    constructor(name: string) {
        this.name = name;
        this.topics = [];
    }
    get discipline(): string {
        return this.name;
    }

    set discipline(newName: string) {
        this.name = newName;
    }
}

class Topic {
    private name: string;
    private discipline: Discipline;

    constructor(name: string, discipline: Discipline) {
        this.name = name;
        this.discipline = discipline;
    }

    get topic(): string {
        return this.name;
    }

    set topic(newName: string) {
        this.name = newName;
    }
}

class Task {
    private discipline: Discipline;
    private topic: Topic;
    private question: string;
    private answers: Answer[];

    constructor(discipline: Discipline, topic: Topic, question: string, answers: Answer[]) {
        this.topic = topic;
        this.discipline = discipline;
        this.question = question;
        this.answers = answers;
    }

    get task(): string {
        return this.question;
    }

    set task(newName: string) {
        this.question = newName;
    }
}

class Answer {
    answer: string;
    isCorrect: boolean;
}



let teacher = new Teacher('Alex');

let math = teacher.createDiscipline("Math");

console.log(teacher.disciplines);

/*math = teacher.editDiscipline(math, "History");
console.log(teacher.disciplines);*/

/*teacher.deleteDiscipline(her);
console.log(teacher.disciplines);*/

let operations = teacher.createTopic("Operations", math);
console.log(teacher.topics);
console.log(math);
console.log(math.topics.map(e => e.topic));