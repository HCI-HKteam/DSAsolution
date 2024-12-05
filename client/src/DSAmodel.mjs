function group(id, name, level, university, SLD, description, picture, numberOfPartecipants, joined) {
    this.id = id;
    this.name =  name;
    this.level = level;
    this.university = university;
    this.SLD = SLD;
    this.description = description;
    this.picture = picture;
    this.numberOfPartecipants = numberOfPartecipants;
    this.joined = joined;
}

function user(id){
    this.id = id;
    this.name = "";
    this.surname = "";
    this.university = "";
    this.SLD = [];
}

function Challenge(id) {
    this.id = id;
    this.question = "";
    this.answer1 = {
        correct: false,
        text: "",
        feedback: ""
    };
    this.answer2 = {
        correct: false,
        text: "",
        feedback: ""
    };
    this.answer3 = {
        correct: false,
        text: "",
        feedback: ""
    };
    this.answer4 = {
        correct: false,
        text: "",
        feedback: ""
    };
}

export { group, user, Challenge };