import {initdb, postDb, deleteDb, editDb, saveIndexedDB, getIndexedDb, postIndexedDb} from './database';
//import {fetchCards} from './cards';
import { toggleForm, clearForm } from './form';
// import "./submit";
// import "./user";

// Import CSS files
//import "../css/index.css";

// Import Bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



// On load functionality
window.addEventListener('load', function () {
    saveIndexedDB();
    initdb();
    
  });


































if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  })};
  
  // Install button
  const installBtn = document.getElementById('installBtn');
  
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installBtn.style.visibility = 'visible';
  
    installBtn.addEventListener('click', () => {
      event.prompt();
      installBtn.setAttribute('disabled', true);
      installBtn.textContent = 'Installed!';
    });
  });
  
  window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
  });
  