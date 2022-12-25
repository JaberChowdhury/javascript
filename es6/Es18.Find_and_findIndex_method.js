const array = [18, 5, 55, 655, 6, 55, 88, 566, 87, 677, 556, 6556, 66, 6, 68, 8, 7, 7, 6, 67, 8, 8, 7, 7, 77, 8];

const result = (value, index, array) => {
    if (value > 100) {
        return value;
    }
};
const findvalue = array.find(result);
const findindex = array.findIndex(result);
console.log(findvalue, findindex);


// lets apple this on Object
const student = [{
    id: 101,
    gpa: 3.55
}, {
    id: 102,
    gpa: 3.15
}, {
    id: 103,
    gpa: 3.55
}, {
    id: 104,
    gpa: 3.1
}, {
    id: 105,
    gpa: 3.55
}, {
    id: 106,
    gpa: 1.55
}, {
    id: 107,
    gpa: 4.55
}, ];

const getResult =(value,index,array)=>{
  if(value.gpa >2){
    return value;
  }
};

const getGpa = student.find(getResult);
console.log (getGpa);