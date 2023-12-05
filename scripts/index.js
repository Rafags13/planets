document.addEventListener('DOMContentLoaded', (event) => {
  const currentRoute = window.location.pathname.replace('/pages/', '').replace('.html', '');
  console.log(currentRoute)
})