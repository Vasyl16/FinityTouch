// Function to copy text to clipboard
function copyTextToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      // Successfully copied
      console.log('Text copied to clipboard');
      const popup = document.querySelector('.copy-token-address__copy-popup');
      popup.classList.add('copy-token-address__copy-popup_a');

      // Remove active class after 3 seconds
      setTimeout(() => {
        popup.classList.remove('copy-token-address__copy-popup_a');
      }, 3000);
    })
    .catch(function (err) {
      console.error('Failed to copy text', err);
    });
}

// Add event listener to the copy button
document
  .querySelector('.copy-token-address__copy-button-wrapper')
  .addEventListener('click', function () {
    const textToCopy = document.querySelector(
      '.copy-token-address__copy-text'
    ).innerText;
    copyTextToClipboard(textToCopy);
  });
