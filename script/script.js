var userid = 1000;
var courseid = 100;
var currentuser;
var User = /** @class */ (function () {
    function User(name, age, mobileno) {
        userid++;
        this.UserName = name;
        this.Age = age;
        this.MobileNo = mobileno;
        this.UserId = "C" + userid.toString();
    }
    return User;
}());
var CourseHistory = /** @class */ (function () {
    function CourseHistory(userid, coursename, days) {
        this.UserId = userid;
        this.CourseName = coursename;
        this.Days = days;
    }
    return CourseHistory;
}());
var userlist = [];
var courselist = [];
var user1 = new User("Udhay", 23, 9876543210);
var course1 = new CourseHistory("C1001", "C-sharp", "10");
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
    var name = document.getElementById("Username").value;
    var age = document.getElementById("Age").value;
    var mobile = document.getElementById("PhoneNo").value;
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
        var age1 = parseInt(age);
        var mobile1 = parseInt(mobile);
        var userobj = new User(name, age1, mobile1);
        userlist.push(userobj);
        alert("UserId : " + userobj.UserId);
        document.getElementById("Main").style.display = "none";
        document.getElementById("NewUser").style.display = "none";
        document.getElementById("Login").style.display = "block";
        document.getElementById("Option").style.display = "none";
        document.getElementById("AvailableCourse").style.display = "none";
        document.getElementById("EnrolledCourse").style.display = "none";
    }
}
function LogIn2() {
    var count = 0;
    var userid1 = document.getElementById("UserId").value;
    if (userid1 != "") {
        for (var i = 0; i < userlist.length; i++) {
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
            alert("Wrong password!");
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
    var show = document.getElementById("Days");
    var total = document.getElementById("totalday");
    var totalday = 0;
    var cour = "";
    for (var i = 0; i < courselist.length; i++) {
        if (currentuser == courselist[i].UserId) {
            var coursename = "Course name : " + courselist[i].CourseName + "<br>";
            cour += coursename;
            totalday += parseInt(courselist[i].Days);
        }
    }
    show.innerHTML = cour;
    total.innerHTML = totalday.toString();
}
function Enroll() {
    var enr = document.getElementById("ACourse").value;
    var day = document.getElementById("days1").value;
    var courseobj = new CourseHistory(currentuser, enr, day);
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
