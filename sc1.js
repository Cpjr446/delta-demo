function trackHealth() {
    document.getElementById('healthStatus').innerText = 'Health tracked successfully!';
}

function showDosageInstructions() {
    document.getElementById('dosageInfo').innerText = 'Take one pill daily with water.';
}

function setReminder() {
    document.getElementById('reminderMessage').innerText = 'Reminder set for tomorrow at 8:00 AM.';
}

function showEducationalContent() {
    document.getElementById('educationInfo').innerText = 'Learn more about the importance of medication adherence.';
}

const response = await openai.createImage({
    model: "dall-e-3",
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
  });
  image_url = response.data.data[0].url;