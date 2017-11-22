var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
        this.disciplines = [];
        this.topics = [];
    }
    Teacher.prototype.createDiscipline = function (name) {
        var disc = new Discipline(name);
        this.disciplines.push(disc);
        return disc;
    };
    Teacher.prototype.editDiscipline = function (disc, newName) {
        var index = this.disciplines.indexOf(disc);
        if (index !== -1) {
            this.disciplines[index].discipline = newName;
            disc.discipline = newName;
        }
        return disc;
    };
    Teacher.prototype.deleteDiscipline = function (disc) {
        var index = this.disciplines.indexOf(disc);
        if (index !== -1) {
            this.disciplines.splice(index, 1);
        }
    };
    Teacher.prototype.createTopic = function (name, disc) {
        var topic = new Topic(name, disc);
        this.topics.push(topic);
        disc.topics.push(topic);
        return topic;
    };
    return Teacher;
}());
var Discipline = /** @class */ (function () {
    function Discipline(name) {
        this.name = name;
        this.topics = [];
    }
    Object.defineProperty(Discipline.prototype, "discipline", {
        get: function () {
            return this.name;
        },
        set: function (newName) {
            this.name = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Discipline;
}());
var Topic = /** @class */ (function () {
    function Topic(name, discipline) {
        this.name = name;
        this.discipline = discipline;
    }
    Object.defineProperty(Topic.prototype, "topic", {
        get: function () {
            return this.name;
        },
        set: function (newName) {
            this.name = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Topic;
}());
var teacher = new Teacher('Alex');
var math = teacher.createDiscipline("Math");
console.log(teacher.disciplines);
/*math = teacher.editDiscipline(math, "History");
console.log(teacher.disciplines);*/
/*teacher.deleteDiscipline(her);
console.log(teacher.disciplines);*/
var operations = teacher.createTopic("Operations", math);
console.log(teacher.topics);
console.log(math);
console.log(math.topics.map(function (e) { return e.topic; }));
