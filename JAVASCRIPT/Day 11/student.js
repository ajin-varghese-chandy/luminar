class Student {

    setStudent(name, rollno, mark, grade) {
        this.name = name;
        this.rollno = rollno;
        this.mark = mark;
        this.grade = grade;
        console.log("Student created!!");
        
    }

    view() {
        console.log(this);

    }

    changeMark(newMark) {
        this.mark = newMark;
    }
}

st1 = new Student();
st1.setStudent('amal', 5, 453, "A")
st1.view();
st1.changeMark(300)
st1.view();

