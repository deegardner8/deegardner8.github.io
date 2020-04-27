
//The following of Code if from w3schools https://www.w3schools.com/js/js_date_methods.asp
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


document.getElementById('replace-time').innerHTML =  days[d.getDay()] + " " + months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();
document.getElementById('replace-year').innerHTML =  d.getFullYear()-3;
document.getElementById('replace-lastModified').innerHTML =  document.lastModified;