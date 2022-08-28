//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken ="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYwNjQ0NTk3LCJleHAiOjE2NjA2NDgxOTcsIm5iZiI6MTY2MDY0NDU5NywianRpIjoiWlhEbzZRaURRZ0ZjZkZiWCIsInN1YiI6MjMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.3xVfVGFTyW8Mr4bcXPWp60NZx9FrU5KI9QQVSE8W-b8"; // put access token
const student = {
  student_id: 63367148,
  name: 'Sureewan', // replace with your full name.
  age: 20, // put your age.
  gender: 'female', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer ${accessToken} `
                

            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}