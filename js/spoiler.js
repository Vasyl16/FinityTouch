document.addEventListener('DOMContentLoaded', function () {
  const spoilers = document.querySelectorAll('.question-questions-spoiler');

  spoilers.forEach((spoiler) => {
    const title = spoiler.querySelector('.question-questions__name');
    const content = spoiler.querySelector('.question-questions__text');

    if (content.classList.contains('question-questions__text_a')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }

    title.addEventListener('click', function () {
      // Hide all other spoilers
      spoilers.forEach((otherSpoiler) => {
        if (otherSpoiler !== spoiler) {
          const otherContent = otherSpoiler.querySelector(
            '.question-questions__text'
          );

          otherContent.style.maxHeight = '0';
          otherContent.style.opacity = '0';
          otherContent.classList.remove('question-questions__text_a');
          otherSpoiler
            .querySelector('.question-questions__name')
            .classList.remove('question-questions__name_a');
        }
      });

      // Toggle the clicked spoiler
      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        console.log(3);
        content.style.maxHeight = '0';
        content.style.opacity = '0';
        content.classList.remove('question-questions__text_a');
        title.classList.remove('question-questions__name_a');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        content.classList.add('question-questions__text_a');
        title.classList.add('question-questions__name_a');
      }
    });
  });
});
