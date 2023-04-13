// Retrieving data from local storage
let usrname = localStorage.getItem('D-fname') + ' ' + localStorage.getItem('D-lname');
let email = localStorage.getItem('D-email');
let phoneno = localStorage.getItem('D-phoneno');
let amt = localStorage.getItem('D-amt')

const dt = new Date()

const mlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Updating the DOM
document.getElementById('name').innerHTML = usrname;
document.getElementById('amt').innerHTML = amt;
document.getElementById('dt').innerHTML = dt.getDate() + ' ' + mlist[dt.getMonth()] + ' ' + dt.getFullYear();
document.getElementById('email').innerHTML = email;
document.getElementById('phoneno'). innerHTML = phoneno;

document.getElementById('reset').addEventListener('click', () => {
    localStorage.clear();
})