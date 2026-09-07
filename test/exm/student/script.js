// addd
const student = {
    id:"",
    name:"",
    course: ""
}



// view

// edit

// delete


// display students table format

// use localstoarge

function displayStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let tbody = document.querySelector("tbody");

    tbody.innerHTML = "";

    students.forEach((student) => {
        tbody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
            <td>${student.course}</td>
                <td>
            <button      class="btn btn-sm btn-warning"
                        onclick="editStudent(${student.id})"
                    >
                        Edit
                    </button>
                </td>
                <td>
                    <button 
                        class="btn btn-sm btn-danger"
                        onclick="deleteStudent(${student.id})" >
                        Delete
                    </button>      </td>
            </tr>
        `;
    });
}

function addStudent() {
 let name = document.getElementById('studentName').value;
 let course = document.getElementById('course').value;
 console.log(name);
 console.log(course);
 
 
  if (name === "" || course === "Choose a Course" ){
    showAlert("please fill the form","danger")
 return
  } 
  const students = JSON.parse(localStorage.getItem('students'));
  const id = students.length ? Math.max(...students.map(s => s.id)) + 1 : 1;
  students.push({ id, name, course });
  localStorage.setItem('students', JSON.stringify(students));
  showAlert("Student created successfully!","success")
  displayStudents()
  return students;
}

function editStudent(id) {
    let students = JSON.parse(localStorage.getItem("students"));
    let student = students.find((student) => student.id == id);

    console.log(student);
    
      document.getElementById("editStudentId").value = student.id;
    document.getElementById("editStudentName").value = student.name;
    document.getElementById("editCourse").value = student.course;

    let modal = new bootstrap.Modal(
        document.getElementById("editModal")
    );

    modal.show();
}


function updateStudent() {

    let id = document.getElementById("editStudentId").value;
    let name = document.getElementById("editStudentName").value;
    let course = document.getElementById("editCourse").value;
    if (!name || !course) {
        showAlert("please fill the form","danger")
        return;
    }
    let students = JSON.parse(localStorage.getItem("students"));
    let student = students.find((student) => student.id == id);
    console.log(student);
    
    student.name = name;
    student.course = course;
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
    let modal = bootstrap.Modal.getInstance(
        document.getElementById("editModal")
    );

    modal.hide();
}


function deleteStudent(id) {
    console.log(id);
    
    let students = JSON.parse(localStorage.getItem("students"));
    students = students.filter((student) => student.id != id);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function showAlert(message, color) {
    const alertBox = document.getElementById("alertBox");

    alertBox.innerHTML = `
        <div class="alert alert-${color}" role="alert">
            ${message}
        </div>
    `;

    setTimeout(()=>{
alertBox.innerHTML = ""
    },3000)
}

displayStudents()