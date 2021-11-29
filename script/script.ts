let userid = 1000;
let courseid = 100;
let currentuser;
class User {
    UserName: string;
    Age: number;
    MobileNo: number;
    UserId: string;

    constructor(name: string, age: number, mobileno: number) {
        userid++;
        this.UserName = name;
        this.Age = age;
        this.MobileNo = mobileno;
        this.UserId = "C" + userid.toString();


    }
}

class CourseHistory {
    UserId: string;
    CourseName: string;
    Days: string;

    constructor(userid: string, coursename: string, days: string) {
        this.UserId = userid;
        this.CourseName = coursename;
        this.Days = days;
    }
}

let userlist: Array<User> = []
let courselist: Array<CourseHistory> = []

let user1 = new User("Udhay", 23, 9876543210);
let course1 = new CourseHistory("C1001", "C-sharp", "10");
userlist.push(user1);
courselist.push(course1);

function NewUser() {
    document.getElementById("Main").style.display = "none";
    document.getElementById("NewUser").style.display = "block";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Option").style.display = "none";
    document.getElementById("AvailableCourse").style.display = "none";
    document.getElementById("EnrolledCourse").style.display = "none";

}

function LogIn1() {
    document.getElementById("Main").style.display = "none";
    document.getElementById("NewUser").style.display = "none";
    document.getElementById("Login").style.display = "block";
    document.getElementById("Option").style.display = "none";
    document.getElementById("AvailableCourse").style.display = "none";
    document.getElementById("EnrolledCourse").style.display = "none";
}

function Register() {

    let name = (document.getElementById("Username") as HTMLInputElement).value;
    let age = (document.getElementById("Age") as HTMLInputElement).value;
    let mobile = (document.getElementById("PhoneNo") as HTMLInputElement).value;
    if (name == "") {
        alert("Enetr User Name");
        return false;
    }

    else if (age == "") {
        alert("Enter Age");
        return false;
    }

    else if (mobile == "") {
        alert("Enter Phone Number");
        return false;
    }
    else {

        let age1 = parseInt(age);
        let mobile1 = parseInt(mobile);
        let userobj = new User(name, age1, mobile1);
        userlist.push(userobj);

        alert("UserId : "+userobj.UserId);

        document.getElementById("Main").style.display = "none";
        document.getElementById("NewUser").style.display = "none";
        document.getElementById("Login").style.display = "block";
        document.getElementById("Option").style.display = "none";
        document.getElementById("AvailableCourse").style.display = "none";
        document.getElementById("EnrolledCourse").style.display = "none";
    }
}

function LogIn2() {
    let count = 0;
    let userid1 = (document.getElementById("UserId") as HTMLInputElement).value;
    if (userid1 != "") {
        for (let i = 0; i < userlist.length; i++) {
            if (userid1 == userlist[i].UserId) {
                currentuser = userlist[i].UserId;
                document.getElementById("Main").style.display = "none";
                document.getElementById("NewUser").style.display = "none";
                document.getElementById("Option").style.display = "block";
                document.getElementById("AvailableCourse").style.display = "none";
                document.getElementById("EnrolledCourse").style.display = "none";
                document.getElementById("Login").style.display = "none";
                count = 0;
                break;
            }
            else {
                count += 1;
            }
        }
        if (count > 0) {
            alert("Wrong UserId");
        }

    }
    else {
        alert("Enter UserId");
    }

}

function AvailCourse() {
    document.getElementById("Main").style.display = "none";
    document.getElementById("NewUser").style.display = "none";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Option").style.display = "none";
    document.getElementById("AvailableCourse").style.display = "block";
    document.getElementById("EnrolledCourse").style.display = "none";
}

function EnrolledCourse() {
    document.getElementById("Main").style.display = "none";
    document.getElementById("NewUser").style.display = "none";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Option").style.display = "none";
    document.getElementById("AvailableCourse").style.display = "none";
    document.getElementById("EnrolledCourse").style.display = "block";
    let show = document.getElementById("Days");
    let total = document.getElementById("totalday");
    let totalday=0;
    let cour="";
    for (let i = 0; i < courselist.length; i++) {
        if (currentuser == courselist[i].UserId) 
        {
            let coursename = "Course name : "+courselist[i].CourseName+"<br>";
            cour+=coursename;
            totalday+=parseInt(courselist[i].Days);
        }
    }
    show.innerHTML=cour;
    total.innerHTML=totalday.toString();
}

function Enroll() {
    let enr = (document.getElementById("ACourse") as HTMLSelectElement).value;
    let day = (document.getElementById("days1") as HTMLInputElement).value;


    let courseobj = new CourseHistory(currentuser, enr, day);
    courselist.push(courseobj);
    alert("Course enrolled!");

    document.getElementById("Option").style.display = "block";
    document.getElementById("AvailableCourse").style.display = "none";
}

function MainMenu() {
    document.getElementById("Main").style.display = "none";
    document.getElementById("NewUser").style.display = "none";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Option").style.display = "block";
    document.getElementById("AvailableCourse").style.display = "none";
    document.getElementById("EnrolledCourse").style.display = "none";
}

function Exit() {
    document.getElementById("Main").style.display = "block";
    document.getElementById("NewUser").style.display = "none";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Option").style.display = "none";
    document.getElementById("AvailableCourse").style.display = "none";
    document.getElementById("EnrolledCourse").style.display = "none";
}