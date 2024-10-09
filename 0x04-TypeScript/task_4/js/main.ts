import Teacher from './subjects/Teacher';
import Cpp from './subjects/Cpp';
import Java from './subjects/Java';
import React from './subjects/React';

const cpp = new Cpp({ firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 });
const java = new Java({ firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 });
const react = new React({ firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 });

console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
