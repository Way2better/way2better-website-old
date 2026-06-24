window.CONFIG = {
  MARKETING_URL: 'https://way2better.com',
  APP_URL: '#',
  LOGIN_URL: '#',
  REGISTER_URL: '#'
};

document.addEventListener('DOMContentLoaded', () => {
  // Remove and replace any login/signup entry points in the DOM
  document.querySelectorAll('a[href*="login.html"], a[href*="signup.html"]').forEach(el => {
    el.removeAttribute('href');
    el.style.pointerEvents = 'none';
    el.style.opacity = '0.6';
    el.style.cursor = 'default';
    
    if (el.textContent.toLowerCase().includes('log')) {
      el.style.display = 'none';
    } else {
      el.textContent = 'Coming Soon';
    }
  });
});
