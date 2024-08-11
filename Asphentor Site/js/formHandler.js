async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);
    const data = {
        username: formData.get('name'),
        discord: formData.get('disname'),
        email: formData.get('email'),
        type: formData.get('type'),
        issue: formData.get('issuefaced')
    };

    // Prepare the message
    const message = {
        content: `**Bug Report**\n\n` +
                 `**Name:** ${data.username}\n` +
                 `**Discord Username:** ${data.discord}\n` +
                 `**Email:** ${data.email}\n` +
                 `**Bug Type:** ${data.type}\n` +
                 `**Issue:** ${data.issue}`
    };

    try {
        // Send data to your backend or proxy server
        const response = await fetch('https://your-backend-url.com/send-report', { // Update this URL to your backend or proxy server
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });

        if (response.ok) {
            alert('Bug report submitted successfully!');
            event.target.reset(); // Reset the form
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.error('Error submitting bug report:', error);
        alert('Failed to submit bug report. Please try again.');
    }
}

// Attach event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bugReportForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});
