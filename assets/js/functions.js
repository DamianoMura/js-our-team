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
    <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
    <div class="bg-body-black d-flex align-items-center">
    
    <img class="profile-img" src="assets/${img}" alt>
    
    <div class="info ps-3">
    <p class="text-coiny my-0 py-0 fs-3">${name}</p>
    <p class="my-0 py-0" >${role}</p>
    <p class="text-primary my-0 py-0">${email}</p>
    </div>
    </div>`;
  }
}

//main 
spawn();