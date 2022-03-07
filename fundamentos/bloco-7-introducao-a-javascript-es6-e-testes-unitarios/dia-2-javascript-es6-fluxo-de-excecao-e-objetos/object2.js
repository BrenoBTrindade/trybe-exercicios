const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const createTurn = (obj, key, value) => obj[key] = value;
 
createTurn(lesson2, 'turno', 'noite')
console.log(lesson2);

const listKey = (obj) => Object.keys(obj);

console.log(listKey(lesson1));

const lengthObject = (obj) => Object.keys(obj).length;
  
console.log(lengthObject(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
 
 console.log(allLessons)

 const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));


const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(lesson1, 0));

function verifyPair(obj, key, value){
  const array = Object.entries(obj);
 

  for(let index in array){
    if(array[index][0] == key &&array[index][1] == value  ) {
      return true ;
  } else {
    return false;
    }
  }
}


console.log(verifyPair(lesson2,'materia','História'));