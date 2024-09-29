
//Allow to select start date after today only
const today = new Date().toISOString().split('T')[0];  
document.getElementById('startDate').setAttribute('min', today);


// Handle form submission and store application data in localStorage
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collecting form data
    const application = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        resume: document.getElementById('resume').files[0]?.name || 'Not provided',
        coverLetter: document.getElementById('coverLetter').value,
        educationLevel: document.getElementById('educationLevel').value,
        schoolName: document.getElementById('schoolName').value,
        major: document.getElementById('major').value,
        graduationYear: document.getElementById('graduationYear').value,
        jobTitle: document.getElementById('jobTitle').value,
        companyName: document.getElementById('companyName').value,
        employmentDates: document.getElementById('employmentDates').value,
        jobResponsibilities: document.getElementById('jobResponsibilities').value,
        skills: document.getElementById('skills').value,
        startDate: document.getElementById('startDate').value,
        relocate: document.getElementById('relocate').value,
        workSchedule: document.getElementById('workSchedule').value,
        referenceName: document.getElementById('referenceName').value,
        referenceContact: document.getElementById('referenceContact').value,
        referenceRelationship: document.getElementById('referenceRelationship').value,
        whyCompany: document.getElementById('whyCompany').value
    };

    // Store application data in localStorage
    localStorage.setItem('applicationData', JSON.stringify(application));

     // Reset the form after submission
     document.getElementById('applicationForm').reset();
});

// Handle the "View Applications as Table" button click
document.getElementById('viewApplicationsButton').addEventListener('click', function(event) {
    event.preventDefault();
    // Redirect to the second HTML page (where the table will be displayed)
    window.location.href = 'SubmittedApplication.html'; 
});
