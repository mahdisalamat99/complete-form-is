function send(e) {
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    let loc = document.getElementById("loc").value;
    let education = document.getElementById("education").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let about = document.getElementById("about").value;
    let right = document.querySelector(".right");
    let res = document.querySelector(".info-res");

    let formArr = {name,position,loc,education,phone,email,about};
    // console.log(formArr)
    // console.log(Object.keys(formArr))
    // formArr.push(name,position,loc,education,phone,email,about)

    res.classList.add("active");

      Object.keys(formArr).forEach((elem) =>{
      let p = document.createElement("p");
      const newContent = document.createTextNode(elem + " : " +formArr[elem]);
      p.appendChild(newContent);
      res.appendChild(p);
  })
}
function closeInfo (e) {
  let canselBtn = document.querySelector(".cancel-btn");
  let res = document.querySelector(".info-res");
  res.classList.remove("active");
}

///////////////////////////////////

let addBtn = document.querySelector(".add-btn");
let closeButton = document.querySelector(".close-btn");
let backDrop = document.querySelector(".backdrop");

// new code 
addBtn.addEventListener('click', ()=>{
  console.log(backDrop.addEventListener)
  callModal();
});

closeButton.addEventListener('click', ()=>{
  backDrop.classList.remove("active");
});

backDrop.addEventListener('click', ()=>{
  backDrop.classList.remove("active");
});

let socialArr = [];

function callModal(id){
  document.getElementById("url").value = "";
  document.getElementById("icon").value = "";
  document.getElementById("description").value = "";

  backDrop.classList.add("active");

  document.querySelector(".save-btn").setAttribute("onclick", "saveInfo("+id+")");
}

function saveInfo(id){
  
  let urlInput = document.getElementById("url").value;
  let iconInput = document.getElementById("icon").value;
  let descInput = document.getElementById("description").value;

  if(id==undefined){
    let socialObj = {urlInput,iconInput,descInput, id:socialArr.length}
    socialArr.push(socialObj);
  } else {
    let data = socialArr.filter(elem => elem.id == id)[0];
    data.urlInput = urlInput;
    data.iconInput = iconInput;
    data.descInput = descInput;
  }

  backDrop.classList.remove("active");

  printSoc();
}


function printSoc() {
  let myLi = socialArr.sort((a,b) => a.sort-b.sort).reduce((total,elem) =>{
   return total += `<li data-id="${elem.id}" > `+ elem.descInput +`<button onclick="editSoc(${elem.id})" >Edit</button><button onclick="deleteSoc(${elem.id})" >Delete</button> </li>`
  },'');

  document.querySelector(".info-div").innerHTML = '<ul id="list" > ' + myLi  +  ' </ul>';
  $("#list").sortable({
    stop: (event,ui)=>{
      console.log("12");
      console.log(event,ui);
      [...document.querySelectorAll("#list li")].forEach((row,index) =>{
        for(let i = 0 ; i <socialArr.length ; i++){
          if (socialArr[i].id == row.dataset.id){
            socialArr[i].sort = index;
        } 
        }
      })
    }
  });

}

function deleteSoc(id){
  socialArr = socialArr.filter(elem=>elem.id!==id);
  printSoc();
}


function editSoc(id){
  callModal(id)
  let data = socialArr.filter(elem=>elem.id == id)[0]
  // input value set
  document.getElementById("url").value = data.urlInput;
  document.getElementById("icon").value = data.iconInput;
  document.getElementById("description").value = data.descInput;
}




// old code 
// addBtn.addEventListener('click' , () => {
//   callModal();
// })

// closeButton.addEventListener('click' , () =>{
//   backDrop.classList.remove("active");
// });

// backDrop.addEventListener('click' , ()=>{
//   backDrop.classList.remove("active");
// });

// // let cancelButton = document.querySelector(".cancel-btn");
// // cancelButton.addEventListener('click', ()=>{
// //   let backDrop = document.querySelector(".backdrop");
// //   backDrop.classList.remove("active");
// // })

// function cancelModal(e) {
//   backDrop.classList.remove("active");
// }

// let socialArr = [];

// function callModal(id){
//   // set all inputs empty when open modal
//   document.getElementById("url").value = '';
//   document.getElementById("icon").value = '';
//   document.getElementById("description").value = '';

//   backDrop.classList.add("active");

  // document.querySelector(".save-btn").setAttribute("onclick", "saveInfo("+id+")")
// }


// function saveInfo(id) {
  
//   console.log(id)
  
//   let urlInput = document.getElementById("url").value;
//   let iconInput = document.getElementById("icon").value;
//   let descInput = document.getElementById("description").value;

//   if(id===undefined){
    
//     let socialObj = {urlInput,iconInput,descInput, id: socialArr.length}
//     socialArr.push(socialObj);
//   }else{
//     let data = socialArr.filter(elem=>elem.id == id)[0];
//     data.urlInput = urlInput
//     data.iconInput = iconInput
//     data.descInput = descInput
//   }
  
//   backDrop.classList.remove("active");

//   printSoc();

// }

// function printSoc(){
//   let myLi = socialArr.reduce((total, elem)=>{
//     return total+= `<li>` + elem.descInput + `<button onclick="editSoc(${elem.id})">Edit</button><button onclick="deleteSoc(${elem.id})">Delete</button></li>`
//   }, '');
//   document.querySelector('.info-div').innerHTML = '<ul>' + myLi + '</ul>';
// }

// function deleteSoc(id){
//   socialArr = socialArr.filter(elem=>elem.id!==id);
//   printSoc();
// }

// function editSoc(id){
//   //open modal
//   callModal(id)
//   let data = socialArr.filter(elem=>elem.id == id)[0]
//   //input value set
//   document.getElementById("url").value = data.urlInput;
//   document.getElementById("icon").value = data.iconInput;
//   document.getElementById("description").value = data.descInput;

// }







// function editObj(id){
//   let urlInput = document.getElementById("url").value;
//   let iconInput = document.getElementById("icon").value;
//   let descInput = document.getElementById("description").value;

//   let data = socialArr.filter(elem=>elem.id == id)[0];
//   data.urlInput = urlInput
//   data.iconInput = iconInput
//   data.descInput = descInput
// }