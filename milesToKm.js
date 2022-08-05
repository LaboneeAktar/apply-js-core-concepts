function milesToKilo(miles) {
    const kilo = miles * 1.609;
    return kilo;
}
const homeToSchool = 2;
const homeToSchoolKm = milesToKilo(homeToSchool);
console.log("School Distance From Home:", homeToSchoolKm);

const homeToCollege = 50;
const homeToCollegeKm = milesToKilo(homeToCollege);
console.log("College Distance From Home:", homeToCollegeKm);