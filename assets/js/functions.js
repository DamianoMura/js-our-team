//preliminar operations
//i get the row so i can concatenate the profiles 
const content = document.querySelector('.row.gy-4');
console.log(content.children.item(0).innerHTML)

// i define the function to spawn all the profiles in the page as instructed
const spawn = () => {
  //the first child is the paragraph so we reset the page to have only that
  content.innerHTML  =  content.children.item(0).innerHTML
  // for each of the profiles i spawn them in the page 
  for (let i=0 ; i<teamMembers.length ; i++){
    let{ name, role, email, img }=teamMembers[i];
    content.innerHTML+=`
    <div class="col-12 col-lg-4">
    <div class="bg-body-black d-flex">
    <div class="profile-img">
    <img src="assets/${img}" alt>
    </div>
    <div>
    <p class="text-coiny">${name}</p>
    <p>${role}</p>
    <p class="text-primary">${email}</p>
    </div>
    </div>`;
  }
}

//main 
spawn();