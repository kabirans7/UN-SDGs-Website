//JavaScript for the profile page
//Length property of array returns length of array (no. of array elements)
//4 steps implemented (25% incremental progress for each step)
//presentStep=0 means that the current value of progress before starting the user profile is 0%
//Steps logged in browser's console
//variables defined to link with each section and hide them initially

const steps= ["Start Profile", "STEP 2", "STEP 3","STEP 4"];
let size= steps.length;
let presentStep= 0;
console.log(steps);

var x = document.getElementById("personal");
if(x.style.display ==="none") {
    x.style.display= "block";
}
else {
x.style.display= "none";
}

var y= document.getElementById("edit");
if(y.style.display ==="none") {
y.style.display= "block";
}
else {
y.style.display= "none";
}

var z= document.getElementById("next");
if(z.style.display ==="none") {
z.style.display= "block";
}
else {
z.style.display= "none";
}

var b= document.getElementById("edi");
if (b.style.display==="none") {
b.style.display= "block";
}
else {
b.style.display= "none";
}

var a= document.getElementById("personalbox");
if(a.style.display ==="none") {
a.style.display= "block";
}
else {
a.style.display= "none";
}

var c= document.getElementById("volunteeringbox");
if(c.style.display ==="none") {
c.style.display= "block";
}
else {
c.style.display= "none";
}

var ut= document.getElementById("nex");
if (ut.style.display==="none") {
ut.style.display= "block";
}
else {
ut.style.display= "none";
}

var ba= document.getElementById("ed");
if(ba.style.display==="none") {
ba.style.display= "block";
}
else {
ba.style.display= "none"
}

var f= document.getElementById("qualificationsbox");
if(f.style.display ==="none") {
f.style.display= "block";
}
else {
f.style.display= "none";
}

var ht= document.getElementById("e")
if(ht.style.display==="none") {
ht.style.display= "block";
}
else {
ht.style.display= "none";
}

var g= document.getElementById("contactbox");
if(g.style.display ==="none") {
g.style.display= "block";
}
else {
g.style.display= "none";
}

var h= document.getElementById("nt");
if(h.style.display ==="none") {
h.style.display= "block";
}
else {
h.style.display= "none";
}


//Functions startProfile(), nextSection (), nexSection (),ntSection() will be executed when clicking on the Start and 3 other buttons
//After each section is completed, the next section will be displayed
//Condition defined to check if value of presentStep is less than length of array
//Will be executed if condition is correct
//If condition is true, line increments presentStep variable by 1
//Profile will be updated after first step is executed

//JavaScript variable defined to equal a prompt that will display a profile question for the user to fill in
// || "" means that answer will blank if user skips prompts or puts nothing
// //document.getElementById (JavaScript DOM) ensures access to a HTML element with a particular ID
//.innerHTML sets content of selected element
//JavaScript variable linked
//alert message displayed after user completes section of profile

function startProfile() {
if (presentStep < steps.length) {
presentStep++;
updateProfile();
}
let name= prompt("STEP 1: Personal Details | Question 1/4- Please enter your full name:") || "";
document.getElementById("name").innerHTML= name;

let age= prompt("STEP 1: Personal Details | Question 2/4- Please enter your age:") ||"";
document.getElementById("age").innerHTML= age;

let gender= prompt("STEP 1: Personal Details | Question 3/4- What is your gender?") ||"";
document.getElementById("gender").innerHTML= gender;

let privacy= prompt("STEP 1: Personal Details | Question 4/4- Do you agree with our privacy terms?") ||"";
document.getElementById("privacy").innerHTML= privacy;

var x = document.getElementById("personal");
if(x.style.display ==="none") {
x.style.display= "block";
}

var y= document.getElementById("edit");
if(y.style.display ==="none") {
y.style.display= "block";
}

var z= document.getElementById("next");
if(z.style.display ==="none") {
z.style.display= "block";
}

var a= document.getElementById("personalbox")
if(a.style.display ==="none") {
a.style.display= "block";
}

alert("Well Done! You have completed the first step of the profile!")
}


function nextSection () {
if (presentStep < steps.length) {
presentStep++;
updateProfile();
}

let reason= prompt("STEP 2: Volunteering work | Question 1/5- What brings you to our cause?") ||"";
document.getElementById("reason").innerHTML= reason;

let desired= prompt("STEP 2: Volunteering Work | Question 2/5- How would you like to work (Face-to-face, Online or Hybrid)?") ||"";
document.getElementById("desired").innerHTML= desired;

let partake= prompt ("STEP 2: Volunteering Work | Question 3/5- What would you like to participate in?") ||"";
document.getElementById("task").innerHTML= partake;

let place= prompt("STEP 2: Volunteering Work | Question 4/5- Where do you want to volunteer?") || "";
document.getElementById("location").innerHTML= place;

let assignment= prompt("STEP 2: Volunteering Work | Question 5/5- What assignment type do you want?") ||"";
document.getElementById("assignment").innerHTML=
assignment;


alert ("Well Done! You have completed the second step of the profile!")

var b= document.getElementById("edi");
if (b.style.display==="none") {
b.style.display= "block";
}

var c= document.getElementById("volunteeringbox");
if(c.style.display ==="none") {
c.style.display= "block";
}

var ut= document.getElementById("nex");
if (ut.style.display==="none") {
ut.style.display= "block";
}

}

function nexSection () {
if (presentStep < steps.length) {
presentStep++;
updateProfile();
}

let area= prompt("STEP 3: Qualifications | Question 1/5- What is your main field of study?") || "";
document.getElementById("study").innerHTML= area;

let degree= prompt("STEP 3: Qualifications | Question 2/5- What is the highest degree you obtained?") ||""; 
document.getElementById("degree").innerHTML= degree;

let university= prompt("STEP 3: Qualifications | Question 3/5- What university did you study at?") ||"";
document.getElementById("uni").innerHTML= university;

let completion= prompt("STEP 3: Qualifications | Question 4/5- What year did you finish university?") || "";
document.getElementById("year").innerHTML= completion;

let country= prompt("STEP 3: Qualifications | Question 5/5- What was the country of your university?") ||"";
document.getElementById("country").innerHTML= country;

alert("Well Done! You have completed the third step of the profile!")

var ba= document.getElementById("ed");
if(ba.style.display==="none") {
ba.style.display= "block";
}

var f= document.getElementById("qualificationsbox");
if(f.style.display ==="none") {
f.style.display= "block";
}

var h= document.getElementById("nt");
if(h.style.display ==="none") {
h.style.display= "block";
}

}

function ntSection() {
if (presentStep < steps.length) {
presentStep++;
updateProfile();
}

let availability= prompt ("STEP 4: Availability and Contact | Question 1/3- How many hours minimum per week are you able to volunteer for?") ||"";
document.getElementById("hours").innerHTML= availability;

let telephone= prompt("STEP 4: Availability and Contact | Question 2/3- What is your telephone number?") ||"";
document.getElementById("tel").innerHTML= telephone;

let email= prompt("STEP 4: Availability and Contact | Question 3/3- What is your email address?") || "";
document.getElementById("email").innerHTML= email;

alert ("Well Done! You have completed the final step of the profile!")

var ht= document.getElementById("e")
if(ht.style.display==="none") {
ht.style.display= "block";
}

var g= document.getElementById("contactbox");
if(g.style.display ==="none") {
g.style.display= "block";

}
}

//User can edit profile through prompts
function editSection () {
let name= prompt("STEP 1: Personal Details | Question 1/4- Please enter your full name:") || "";
document.getElementById("name").innerHTML= name;

let age= prompt("STEP 1: Personal Details | Question 2/4- Please enter your age:") ||"";
document.getElementById("age").innerHTML= age;

let gender= prompt("STEP 1: Personal Details | Question 3/4- What is your gender?") ||"";
document.getElementById("gender").innerHTML= gender;

let privacy= prompt("STEP 1: Personal Details | Question 4/4- Do you agree with our privacy terms?") ||"";
document.getElementById("privacy").innerHTML= privacy;

alert("Well Done! You have completed the first step of the profile!")
}

function ediSection () {
let reason= prompt("STEP 2: Volunteering work | Question 1/5- What brings you to our cause?") ||"";
document.getElementById("reason").innerHTML= reason;

let desired= prompt("STEP 2: Volunteering Work | Question 2/5- How would you like to work (Face-to-face, Online or Hybrid)?") ||"";
document.getElementById("desired").innerHTML= desired;

let partake= prompt ("STEP 2: Volunteering Work | Question 3/5- What would you like to participate in?") ||"";
document.getElementById("task").innerHTML= partake;

let place= prompt("STEP 2: Volunteering Work | Question 4/5- Where do you want to volunteer?") || "";
document.getElementById("location").innerHTML= place;

let assignment= prompt("STEP 2: Volunteering Work | Question 5/5- What assignment type do you want?") ||"";
document.getElementById("assignment").innerHTML= assignment;

alert ("Well Done! You have completed the second step of the profile!")

}

function edSection () {
let area= prompt("STEP 3: Qualifications | Question 1/5- What is your main field of study?") || "";
document.getElementById("study").innerHTML= area;

let degree= prompt("STEP 3: Qualifications | Question 2/5- What is the highest degree you obtained?") ||"";
document.getElementById("degree").innerHTML= degree;

let university= prompt("STEP 3: Qualifications | Question 3/5- What university did you study at?") ||"";
document.getElementById("uni").innerHTML= university;

let completion= prompt("STEP 3: Qualifications | Question 4/5- What year did you finish university?") || "";
document.getElementById("year").innerHTML= completion;

let country= prompt("STEP 3: Qualifications | Question 5/5- What was the country of your university?") ||"";
document.getElementById("country").innerHTML= country;

alert("Well Done! You have completed the third step of the profile!")
}

function eSection () {
let availability= prompt ("STEP 4: Availability and Contact | Question 1/3- How many hours minimum per week are you able to volunteer for?") ||"";
document.getElementById("hours").innerHTML=
availability;

let telephone= prompt("STEP 4: Availability and Contact | Question 2/3- What is your telephone number?") ||"";
document.getElementById("tel").innerHTML= telephone;

let email= prompt("STEP 4: Availability and Contact | Question 3/3- What is your email address?") || "";
document.getElementById("email").innerHTML= email;

alert ("Well Done! You have completed the final step of the profile!")

}


//modal is JavaScript variable
//document.getElementById (JavaScript DOM) ensures access to a HTML element with a particular ID
let modal= document.getElementById("confirmation")
let modal2= document.getElementById("resetconfirmation")

//Function will be executed when clicking on reset button
//Popup shows
//modal2 is JS variable
function resetProfile() {
modal2.style.display="block";

}

//Function will be executed when clicking on Submit button
//Sets display style as block-level element; popup will appear
function submitProfile () {
modal.style.display= "block";
}

//Function will be executed when clicking on No button in popup
//User will not be shown anything after
function closeConfirmation () {
modal.style.display= "none";
}

//Function executed when clicking on Yes button in popup
//alert message pops up displaying user profile is complete
//Page will be restarted after submission
function continueConfirmation() {
    alert("Your profile has been completed! Thank you for joining our cause!");
location.reload();

}

//Function executed when clicking yes
//Page will restart
function continueReset () {
presentStep=0;
location.reload();


}

//Function executed when clicking no
function closeReset () {
modal2.style.display= "none";
}

//Function executed to update user profile
//JavaScript variable to retrive HTML element with ID
//progress variable (progress completion) calculated by current progress/total steps multipled by 100 to get percentage value for progress bar
//Sets width of progress bar to calculated progress percentage
//Round down progress value to nearest integer beforeconcatenating it with %
function updateProfile() {
let progressbar=
document.getElementById("progressbar");
let progress= (presentStep/ steps.length) * 100;
progressbar.style.width= progress + "%";
progressbar.innerHTML= Math.floor(progress) + "%";
}h1 {
 text-align: center;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
sans-serif;

 }
 h3 {
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
sans-serif;
 }
 p {
 font-family: Arial, Helvetica, sans-serif;
 color: whitesmoke;
 }
 .progression {
 width: 100%; /*Progress bar's width covers entire page width */
 background-color: #f1f1f1;
 }
 .progress-bar {
 width: 0%; /*Progress bar will be empty initially*/
 height: 30px; /*Progress bar's height*/
 background-color: #00003C;
 text-align: center;
 line-height: 40px;/*Height of text in progress bar*/
 color: whitesmoke;
 }
 .Confirmation {
 display: none; /*Initially hidden from the webpage by default */
 position: fixed; /*Stays in place*/
 z-index: 1; /*Controls stacking order of positioned elements
 confirmation will sit on top */
 left: 0;
 top: 0;
 width: 100%; /*Width of black background effect when confirmation
content pops up*/
 height: 100%; /*Height of black background effect when
confirmation content pops up*/
 overflow: auto; /*Enables scrolling if needed*/
 background-color: rgba(0,0,0,0.4); /*Enables black background
effect with opacity
 when confirmation content pops up */


 }

 .confirmation-content {
 background-color: #fefefe;
 margin: 10% auto; /*10% from the top and centered*/
 padding: 10px;
 border: 1px solid #888;
 width: 20%; /*Vary depending on screen size*/
 }
 .reset-content {
 background-color: #fefefe;
 margin: 10% auto; /*10% from the top and centered*/
 padding: 10px;
 border: 1px solid #888;
 width: 20%; /*Vary depending on screen size*/
 }
 .reset-content p {
 color: #000;
 }
 .confirmation-content p {
 color: #000
 }
 .reset-button {
 background-color: #00003C;
 color: white;
 padding: 10px 20px;
 border: none;
 cursor: pointer;
 }
 .reset-button:hover {
 background-color: #000028;
 }
 .confirmation-button {
 background-color: #00003C;
 color: white;
 padding: 10px 20px;
 border: none;
 cursor: pointer;
 }

 .confirmation-button:hover {
 background-color: #000028;
 }
 /*Once hovered, colour alters*/
 body {
 background-color: #2D9C00;

 }
 .buttons:hover {
 cursor: pointer;
 background-color: grey;
 }
 /*Once hovered, colour alters*/
 .buttons {
 font-size: 15px;
 border-radius: 20px;
 display: inline-block;
 margin: 0 auto;
 }

 .editor {
 padding: 10px;
 background-color: #00003C;
 text-align: center;
 width: 100%;
 }
 /*Page Editor Styles*/

a {
 color: whitesmoke;
 font-size: 15px;
 }
/*Color and font size of page editor link*/
.container {
 justify-content: center; /*Content is centered*/
 text-align: center;

 }

 #personalbox, #volunteeringbox, #qualificationsbox,
 #contactbox {
 background-color: grey;
 text-align: center;
 }
 footer {
background-color: #333;
color: white; text-align:
center;
padding: 20px 0;
position: relative;
bottom: 0;
width: 100%;
}
/*For page editor*/