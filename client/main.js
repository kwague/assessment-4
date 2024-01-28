const complimentBtn = document.querySelector("#complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

// handle client side of Fortune button click 

//selecting fortune button
const fortuneBtn = document.querySelector('#fortuneButton')

// defining function execution when button clicked
const getFortune = () => {
    // request is made to the server
    axios.get("http://localhost:4000/api/fortune/")
    // reponse is handled
    .then(res => {
        const data = res.data;
        alert(data);
});
};

// event listener

fortuneBtn.addEventListener('click', getFortune)

//handle client side of newLook button click

const newLookBtn = document.querySelector("#newLookButton")

const getNewLook = () => {
    axios.get("http://localhost:4000/api/newlook/")
    .then(res => {
        const data = res.data; 
        alert(data); 
    })
}

newLookBtn.addEventListener('click', getNewLook)

// processing request for travel ideas

const travelBtn= document.querySelector('#travelButton')

const getTravelling = () => {
    axios.get("http://localhost:4000/api/travel")
    .then(res => {
        const data = res.data; 
        alert(data);   
    })
}

travelBtn.addEventListener('click', getTravelling)

// event listener for email submit buttom

const form = document.querySelector('form')

form.addEventListener('submit', (evt) =>{ 
    evt.preventDefault(); 
    alert('Thank you for subscribing')
}) 



