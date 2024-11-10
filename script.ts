//listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
   event.preventDefault();

   const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;




   //type asssertion
   const nameElement = document.getElementById('name') as HTMLInputElement;
   const emailElement = document.getElementById('email') as HTMLInputElement;
   const phoneElement = document.getElementById('phone') as HTMLInputElement;
   const educationElement = document.getElementById('education') as HTMLInputElement;
   const experianceElement = document.getElementById('experiance') as HTMLInputElement;
   const skillsElement = document.getElementById('skills') as HTMLInputElement;
   const diplomaorcertificatesElement = document.getElementById('diplomaorcertificates') as HTMLInputElement;


  
   if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement && diplomaorcertificatesElement){
     
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experiance = experianceElement.value;
    const skills = skillsElement.value;
    const diplomaorcertificates = diplomaorcertificatesElement.value;
 
    


//Picture Element
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : ''






   //Create Resume Output
   const resumeOutput = `
   <h2>Resume</h2>
    ${profilePictureFile ?  `<img src= ${profilePictureURL} alt= "Profile Picture" class= "profilePicture style="width: 300px; height: 300px />"` : ""}

   <p><strong>Name:</strong> ${name} </p>
   <p><strong>Email:</strong> ${email} </p>
   <p><strong>Contact Number:</strong> ${phone} </p>
   

   <h3>Education</h3>
   <p>${education}</p>

   <h3>Experiacne</h3>
   <p>${experiance}</p>

   <h3>Skills</h3>
   <p>${skills}</p>

   <h3>Diploma Or Certificates</h3>
   <p>${diplomaorcertificates}</p>

   

   `;

  const resumeOutputElemnent = document.getElementById('resumeOutput')
  if (resumeOutputElemnent){
    resumeOutputElemnent.innerHTML = resumeOutput
  } else {
    console.error('the resume output elements are missing')

  } 

   } else{
    console.error('one or more output are missing');
    
   }

})
