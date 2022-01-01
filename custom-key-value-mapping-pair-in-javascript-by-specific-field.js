const students = [
  {name: "kazi Babu", roll: 45, group: "Science"},
  {name: "Rahamatullah", roll: 20, group: "Commerce"},
  {name: "John Doe", roll: 66, group: "Science"},
  {name: "MD. Alamin", roll: 1, group: "Arts"},
  {name: "Abeer Mahmud", roll: 22, group: "Science"},
  {name: "Mahmudul Karim", roll: 33, group: "Arts"},
  {name: "Joy prokash", roll: 44, group: "Commerce"},
]


let groupStudents = {};
students.map((student) => {
  if (!(student.group in groupStudents)) {
    groupStudents[student.group] = [];
  }
  groupStudents[student.group].push(student);
});


console.log('groupStudents', groupStudents);




/*
========================== Ouput =========================
groupStudents {
  Arts: (2) [{…}, {…}]
  Commerce: (2) [{…}, {…}]
  Science: (3) [{…}, {…}, {…}]
}
==========================        =============================
*/