const studentInfo = {
    id: 101,
    name: "A big boss from immigration",
    gpa: 5.00,
    language: {
        native: "Bangla",
        beginners: "English"
    }
};

const {
    id,
    gpa,
    name,
    language
} = studentInfo;

console.log(name, language);
console.log(name, language.native);