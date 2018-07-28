function loadjson(file,callback) {
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function()  {
         if(xhr.readyState ===4 && xhr.status =="200")  {
              callback(xhr.responseText);
      }
    }
    xhr.send();
}
loadjson("data.json",function(text) {
	let data=JSON.parse(text);
	console.log(data);
	first(data.details);
	edu(data.education);
	skill(data.skills);
})
var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function first(SUSHMA) {
var image=document.createElement("img");
image.src=SUSHMA.image;
left.appendChild(image);
var study=document.createElement("h1");
study.textContent=SUSHMA.study;
left.appendChild(study);
var name=document.createElement("h1");
name.textContent=SUSHMA.name;
left.appendChild(name);
var email=document.createElement("h1");
email.textContent=SUSHMA.email;
left.appendChild(email);
var phone=document.createElement("h1");
phone.textContent=SUSHMA.phone;
left.appendChild(phone);
var age=document.createElement("h1");
age.textContent=SUSHMA.age;
left.appendChild(age);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function edu(education){
	var e=document.createElement("h1");
	e.textContent="educational details"; 
	right.appendChild(e);
	e.appendChild(document.createElement("HR"));
var un=document.createElement("ul");
e.appendChild(un);
for (var i =0;i<education.length; i++) { 

var l=document.createElement("h2");
l.textContent=education[i].course;
un.appendChild(l);
var l2=document.createElement("li");
l2.textContent=education[i].college;
un.appendChild(l2);
var l3=document.createElement("li");
l3.textContent=education[i].branch;
un.appendChild(l3);
var l4=document.createElement("li");
l4.textContent=education[i].percentage;
un.appendChild(l4);
}
}
function skill(skills){
var r=document.createElement("div");
r.classList.add("sset");
right.appendChild(r); 
var head=document.createElement("h2");
head.textContent="Skills Set";
right.appendChild(head);
r.appendChild(head);
r.appendChild(document.createElement("HR"));
var t=document.createElement("table");
var tabledata="";
for ( i = 0;i <skills.length; i++){
	tabledata+="<tr><td>"+skills[i].title+"</td><td>"+skills[i].output+"</td></tr>";
	t.innerHTML=tabledata;
     }
      head.appendChild(t);
  }
