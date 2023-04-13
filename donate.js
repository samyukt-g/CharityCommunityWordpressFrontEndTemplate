const sub = document.getElementById('sub'); 
const clear = document.getElementById('clear');
const ebox = document.getElementById('ebox');


// USER INPUT DATASET
let ds = {
    "fname": "",
    "lname": "",
    "email": "",
    "phoneno": "",
    "amt": ""
}


sub.addEventListener('click', () => {
    // Removes the styling of ebox
    ebox.removeAttribute('style'); 
    ebox.innerHTML = "";

    // Assigning Data Set Values
    ds.fname = document.getElementById('fname').value;
    ds.lname = document.getElementById('lname').value;
    
    ds.email = document.getElementById('email').value;
    ds.phoneno = parseInt(document.getElementById('phoneno').value);

    ds.amt = parseInt(document.getElementById('amt').value);

    console.log(ds)


    // VALIDATION
    /* 
1. Validating fname and lname by making sure all the characters are alphabets - nameval()
2. Validating whether a given string is an email or not using Regular Expressions - emailval()
3. Validating whether a given number is a phone number - phonenoval()
4. Validating whether the amount is valid, ie, checking if it is a number and whether or not it is greater than 0 - amtval()
    */
    const nameval = (lab, uin, e) => {
        const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

        for (var i = 0; i < uin.length; i++) {
            if (!alphabet.includes(uin.toUpperCase().charAt(i))) {
                e.innerHTML += `*${lab} must include only alphabets<br>`;
                e.style.opacity = 1;
                e.style.margin = "20px";
                e.style.border = "1px solid red";
                e.style.color = "#FF0000";
                return false;
            }
        }
        // console.log('nameval true');
        return true;   
    }
    const emailval = (uin, e) => {
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

        if (!regexExp.test(uin)) {
            e.innerHTML += `*Enter a valid email address<br>`;
            e.style.opacity = 1;
            e.style.margin = "20px";
            e.style.border = "1px solid red";
            e.style.color = "#FF0000";
            return false;
        } else {
            // console.log('emailval true');
            return true;
        }
    }
    const phonenoval = (uin, e) => {
        if (!Number.isInteger(uin)) {
            e.innerHTML += `*Enter a valid 10 digit phone number<br>`;
            e.style.opacity = 1;
            e.style.margin = "20px";
            e.style.border = "1px solid red";
            e.style.color = "#FF0000";
            console.log('phonenoval false');
            return false;
        } else {
            let c = ('' + uin).length; // Assigns c the string value containing the digits of uin so the length property may be accessed
            if (c != 10) {
                e.innerHTML += `*Enter a valid 10 digit phone number<br>`;
                e.style.opacity = 1;
                e.style.margin = "20px";
                e.style.border = "1px solid red";
                e.style.color = "#FF0000";
                console.log('phonenoval false');
                return false;
            } else {
                // console.log('phonenoval true');
                return true;
            }
        }
    }
    const amtval = (uin, e) => {
        // console.log('amtval initiated')
        if (!Number.isInteger(uin)) {
            e.innerHTML += `*Amount must be a number greater than 0<br>`;
            e.style.opacity = 1;
            e.style.margin = "20px";
            e.style.border = "1px solid red";
            e.style.color = "#FF0000";
            return false;
        }  else {
            if (uin <= 0) {
                e.innerHTML += `*Amount must be a number greater than 0<br>`;
                e.style.opacity = 1;
                e.style.margin = "20px";
                e.style.border = "1px solid red";
                e.style.color = "#FF0000";
                return false;
            } else {
                // console.log('amtval true');
                return true;
            }
        }
    }
    
    // saving to local storage so it can be accessed while displaying result in result.html if the userinput is
    if (nameval('First Name', ds.fname, ebox) && nameval('Last name', ds.lname, ebox) && emailval(ds.email, ebox) && phonenoval(ds.phoneno, ebox) && amtval(ds.amt, ebox)) {
        localStorage.setItem('D-fname', ds.fname);
        localStorage.setItem('D-lname', ds.lname);
        localStorage.setItem('D-email', ds.email);
        localStorage.setItem('D-phoneno', ds.phoneno);
        localStorage.setItem('D-amt', ds.amt);

        window.location.href = './result.html';
    }
})

clear.addEventListener('click', () => {
    localStorage.clear()
    // Removes the styling of ebox
    ebox.removeAttribute('style'); 
    ebox.innerHTML = "";

    // Reloading the page to clear the data
    window.location.reload(false)
})