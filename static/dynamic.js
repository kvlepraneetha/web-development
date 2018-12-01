// function loadJSON(file){
//   return new promise((resolve,reject))=>{
//     return fetch(file).then(response=>{
//       if(response.ok){
//         resolve(response.json());
//       }
//       else{
//         reject(new Error("error"));
//
//       }
//       }
//     })
//   }
// }
// var fetchedData=loadJSON("dynamic.json");
// fetchedData.then(data=>{
//   console.log(data);
//
// })
// var child2=document.queryselector("#child2");
// //carrer
// function carrer(car){
//   var h2=document.createElement("h1")
//   h2.textContent="careerobjective";
//   child2.appendchild(h2);
//
//   var heading=document.createElement("hr");
//   child2.appendchild(heading);
//
//   var p=document.createElement("p");
//   p.textContent=car.info;
//   child2.appendchild(p);
// }
function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,truie);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("dynamic.json",function(text){
 Let data=JSON.parse(text);
 console.log(data);
})
var child2=document.querySelector("#child2")
function carrer(c){
  var cheading=document.createElement("h3");
  chead.textContent="carrer objective";
  child2.appendchild(chead);

  var chr=document.createElement("hr")
  child2.appendchild(chr);

  var cp=document.createElement("p")
  cp.textContent=c.info;
  child2.appendchild(cp);
}
function education(edu){
  var ehead=document.createElement("h2")
  ehead.textContent="educational details";
  child2.appendchild(ehead);

  var ehr=document.createElement("table");
  etable.border="1";

  var tr1="<tr><td>s.no</td><td>name of institute</td><td>year of passing</td><td>percentage</td></tr>";
  var tr2="";
  for(i=0;i<edu.length;i++){
   tr2=tr2+"<tr><td>"+edu[i].s.no+"</td>"+edu[i].name of institute+"</td><td>"+edu[i].year of passing+"</td><td>"+edu[i].percentage+"</td></tr>";
   }

   etable.innerHTML=tr1+tr2;
   child2.appendchild(etable);
}
