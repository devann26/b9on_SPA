import './style.css';

let app = document.getElementById('app');
let page = document.location.pathname;
// app.innerHTML = `
// <div class="container">
// <h1>Hello SPA</h1>

// <h3> ${page.replace('/', '?=')}</h3>
// </div>`;

switch (page) {
  case '/':
    app.innerHTML = `
    <div class="container">
    <h1>Home Page</h1>
    </div>
    `;
    break;

  case '/about':
    app.innerHTML = `
    <div class="container">
    <h1>About Page</h1>
    </div>
    `;
    break;
  case '/gallery':
    app.innerHTML = `
    <div class="container">
    <h1>Gallery Page</h1>
    </div>
    `;
    break;

  default:
    app.innerHTML = `
    <div class="container">
    <h1>404 Page Not Found...!!</h1>
    </div>
    `;
}
