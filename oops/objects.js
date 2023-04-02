let lecture =10;
let section =3;
let title = 'javascript';


const course={
    lecture:10,
    section:3,
    title: "js",
    notes:{
        introduction:"welcome"
    },
    enroll(){
        console.log("you are successfully enrolled");
    } 
}

course.enroll();
console.log(course.notes.introduction);