document.addEventListener('DOMContentLoaded', () => {
  const postEntries = document.querySelector('.post-entries-list')
  const dynamicImage = document.getElementById('dynamic-image')

  postEntries.addEventListener('mouseover', (event) => {
    const postEntry = event.target.closest('.post-entry');
    if (postEntry) {
      const imageSrc = postEntry.getAttribute('data-image');
      if (imageSrc) {
        dynamicImage.style.backgroundImage = `url(${imageSrc})`;
      }
    }
  });

  postEntries.addEventListener('mouseout', (event) => {
    const postEntry = event.target.closest('.post-entry');
    if (postEntry) {
      dynamicImage.style.backgroundImage = 'unset';
    }
  });
});