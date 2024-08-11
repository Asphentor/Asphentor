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

    // Send data to Discord webhook
    try {
        await fetch('https://discord.com/api/webhooks/1272138466599112715/AcQRJWUJdRpfQ6YT03tltfFNS3EWftB_zRe4JKSuY7Y8H6y0iFRqBaUmNAsiLSAOakuw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });
        alert('Bug report submitted successfully!');
        event.target.reset(); // Reset the form
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
