const createFormHandler = async (event) => {
  event.preventDefault();

  const heroName = document.querySelector('#heroName');
  const heroStory = document.querySelector('#heroStory');

  if (heroName && heroStory) {
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({
        title: heroName.value,
        content: heroStory.value
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector('#hero-form')
  .addEventListener('submit', createFormHandler);