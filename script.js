document.getElementById("btn").addEventListener("click", courseMarks);

function courseMarks() {
  let course1 = prompt("What was your first course?");
  let grade1 = prompt("What was your grade for this course?");
  let course2 = prompt("What was your second course?");
  let grade2 = prompt("What was your grade for this course?");

  let msg = `Course 1: ${course1} with a grade of ${grade1}.
Course 2: ${course2} with a grade of ${grade2}.`;

  alert(msg);
}
