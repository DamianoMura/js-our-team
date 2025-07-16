//preliminar operations
//i get the row so i can concatenate the profiles 
const content = document.getElementById("profiles");
//i get the tag i wanna use as a button
const clicker=document.getElementById("add-member");
console.log(content.innerHTML)


// i define the function to spawn all the profiles in the page as instructed
const spawn = () => {
  //the first child is the paragraph so we reset the page to have only that
  content.innerHTML  =  ``;
  // for each of the profiles i spawn them in the page 
  for (let i=0 ; i<teamMembers.length ; i++){
    let{ name, role, email, img }=teamMembers[i];
    content.innerHTML+=`
    <div class="col-12 col-md-6 col-lg-4 ">
      <div class="bg-body-black d-flex align-items-center">
    
        <img class="profile-img" src="assets/${img}" alt>
    
        <div class="ps-3">
          <p class="text-coiny my-0 py-0 fs-4">${name}</p>
          <p class="my-0 py-0" >${role}</p>
          <p class="text-primary my-0 py-0">${email}</p>
        </div>
      </div>
    </div>`;
  }
}

//main 
spawn();
// console.log(content.innerHTML)
const e = clicker.addEventListener('click', function(e){
  e.preventDefault();
  // i take all the inputs to be added 
  const inputs = document.getElementsByTagName('input');
  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const email = document.getElementById('email').value;
  const img = document.getElementById('img').value;
  let invalid=false;

  //reset input placeholders
  inputs[0].placeholder="Insert full name";
  inputs[1].placeholder="Insert role";
  inputs[2].placeholder="Insert email";
  inputs[3].placeholder="Insert path eg: img/image.jpg";
  //reset input colors
  for (let i=0 ;i<inputs.length ; i++){
    inputs[i].className="bg-body-black";
  }

  for (let i=0 ; i<inputs.length ; i++){
    
    if(inputs[i].value==""){
      inputs[i].className='bg-dark text-danger border-danger';
      inputs[i].placeholder=inputs[i].placeholder.replace("Insert", "Insert a valid");
      invalid=true;
    }
  }
  let emailCheck=inputs[2].value;
  console.log(emailCheck)
  if (emailCheck.indexOf('@')<0){
    inputs[2].placeholder=inputs[2].placeholder.replace("Insert", "Insert a valid");
    inputs[2].value="";
    inputs[2].className='bg-dark text-danger border-danger';
    invalid=true;
  }
  if (invalid===true){
    alert("tutti i campi sono obbligatori");
    return;
  }

  for (let i=0 ;i<inputs.length ; i++){
    inputs[i].value="";
  }
  spawn();
}) 