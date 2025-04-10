document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const output = document.getElementById("output");
  
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const courseInput = document.getElementById("courses").value.trim();
    const scoreInput = document.getElementById("scores").value.trim();
  
    const courses = courseInput.split(",").map(course => course.trim());
    const scores = scoreInput.split(",").map(score => parseFloat(score.trim()));
  
    const student = {
      name,
      age,
      enrolled: true,
      courses,
      displayInfo: function () {
        return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
      },
      addCourse: function (newCourse) {
        this.courses.push(newCourse);
      },
      getTotalCourses: function () {
        return this.courses.length;
      }
    };
  
    let result = "";
    result += `Name: ${student.name}\n`;
    result += `Age: ${student.age}\n`;
    result += `Student Info: ${student.displayInfo()}\n\n`;
  
    const studentJSON = JSON.stringify(student);
    result += `JSON String: ${studentJSON}\n`;
  
    const studentObjFromJSON = JSON.parse(studentJSON);
    result += `Parsed Object: ${JSON.stringify(studentObjFromJSON)}\n\n`;
  
    const { name: destructuredName, courses: destructuredCourses } = student;
    result += `Destructured Name: ${destructuredName}\n`;
    result += `Destructured Courses: ${destructuredCourses.join(", ")}\n`;
  
    const [firstScore, secondScore] = scores;
    result += `First Score: ${firstScore}\nSecond Score: ${secondScore}\n\n`;
  
    const clonedStudent = { ...student, graduationYear: 2026 };
    result += `Cloned with Graduation Year: ${JSON.stringify(clonedStudent)}\n`;
  
    const newCourses = ["Chemistry", "Biology"];
    const allCourses = [...student.courses, ...newCourses];
    result += `Merged Courses: ${allCourses.join(", ")}\n\n`;
  
    student.addCourse("History");
    result += `Updated Courses: ${student.courses.join(", ")}\n`;
    result += `Total Courses: ${student.getTotalCourses()}\n\n`;
  
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = (total / scores.length).toFixed(2);
    result += `Average Score: ${average}\n`;
  
    output.textContent = result;
  });