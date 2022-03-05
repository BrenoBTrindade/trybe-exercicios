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
  
  // return size;


console.log(lengthObject(lesson1));
