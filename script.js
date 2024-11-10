var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    //type asssertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experianceElement = document.getElementById('experiance');
    var skillsElement = document.getElementById('skills');
    var diplomaorcertificatesElement = document.getElementById('diplomaorcertificates');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement && diplomaorcertificatesElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experiance = experianceElement.value;
        var skills = skillsElement.value;
        var diplomaorcertificates = diplomaorcertificatesElement.value;
        //Picture Element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //Create Resume Output
        var resumeOutput = "\n   <h2>Resume</h2>\n    ".concat(profilePictureFile ? "<img src= ".concat(profilePictureURL, " alt= \"Profile Picture\" class= \"profilePicture style=width: 300px; height: 300px >\"") : "", "\n\n   <p><strong>Name:</strong> ").concat(name_1, " </p>\n   <p><strong>Email:</strong> ").concat(email, " </p>\n   <p><strong>Contact Number:</strong> ").concat(phone, " </p>\n   \n\n   <h3>Education</h3>\n   <p>").concat(education, "</p>\n\n   <h3>Experiacne</h3>\n   <p>").concat(experiance, "</p>\n\n   <h3>Skills</h3>\n   <p>").concat(skills, "</p>\n\n   <h3>Diploma Or Certificates</h3>\n   <p>").concat(diplomaorcertificates, "</p>\n\n   \n\n   ");
        var resumeOutputElemnent = document.getElementById('resumeOutput');
        if (resumeOutputElemnent) {
            resumeOutputElemnent.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output are missing');
    }
});
