    const message = document.getElementById('message-text');
    const email = document.getElementById('recipient-name');
    const submitButton = document.getElementById('submitButton');
    const popMessageDiv = document.getElementById('popMessage');

function displayMessage(type, submitMessage) {
    popMessageDiv.textContent = submitMessage;
    popMessageDiv.setAttribute('class', type);
}

    submitButton.addEventListener('click', function (event) {

        event.preventDefault();
        const userInput = {
            email: email.value.trim(),
            message: message.value.trim(),
        };
        if (email.value !== '' && message.value !== '') {
            displayMessage('success', 'Message sent successfully!');
        } else {
            displayMessage('error', 'Input field(s) cannot be blank.');
        }
        localStorage.setItem('userInput', JSON.stringify(userInput));   
    });


function resetForm() {
    document.getElementById('contactUsForm').reset();
    document.getElementById('popMessage').remove();
};