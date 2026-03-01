const form = document.querySelector('.from'); //get the form
form.addEventListener('submit', submit_form); //when the send event is triggered, it calls the function

const users = []

function buider_user_object(fname, lname, weight, height){
    return {
        fname:fname,
        lname:lname,
        weight:weight,
        height:height
    };
}

function add_user_data(user){
    users.push(user);
}

function update_text(){
    textArea = document.getElementById('showText');
    textArea.innerHTML = "";
    for (let i= 0; i < users.length;i++){
        textArea.innerHTML += `user name: ${users[i].fname} ${users[i].lname} `;
        textArea.innerHTML += `- weigth: ${users[i].weight} kg and height: ${users[i].height} m`;
        textArea.innerHTML += "<br>";
    }
}


function submit_form(event){
    event.preventDefault(); //It prevents you from refreshing the page and losing everything.
    const fname = form.querySelector('.fname').value; //take a value
    const lname = form.querySelector('.lname').value; 
    const weight = form.querySelector('.weight').value;
    const height = form.querySelector('.height').value;

    const user_temp = buider_user_object(fname,lname,weight,height);
    add_user_data(user_temp);
    update_text();
}













