let currentYear = new Date().getFullYear();

const getAge = function(birth,death){
    if(!death){
        death = currentYear;
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest,currentPerson) =>{
        let oldestAge = getAge(
            oldest.yearOfBirth,
            oldest.yearOfDeath
        );
        let currentPersonAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );
        return oldestAge < currentPersonAge ? currentPerson : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
