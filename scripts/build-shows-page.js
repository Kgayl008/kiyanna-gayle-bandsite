
let showsArray = [];

axios.get('https://project-1-api.herokuapp.com/showdates/?api_key=0aaf8967-4617-4546-9578-25b998b99ff0')
    .then(result => {
        console.log(result);
        showsArray = (result.data);
    

const shows = document.querySelector("#shows__section");
shows.classList.add("shows__section");


for (let i = 0; i < showsArray.length; i++){
    const shows = document.querySelector("#shows__section");
    shows.classList.add("shows__section");

    //parent container to each containers
    const container = document.createElement("div");
    container.classList.add("container");
    shows.appendChild(container);
    container.addEventListener("mousedown", () => {
    container.classList.toggle("selected");
});

    //heading date
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("container__dates");
    container.appendChild(dateContainer);

    const dateTitle = document.createElement('p');
    dateTitle.innerHTML = "DATE";
    dateContainer.appendChild(dateTitle);
    dateTitle.classList.add("shows__date-title");

    const dateContent = document.createElement("p");
dateContent.innerHTML = convertDate(showsArray[i].date);
dateContainer.appendChild(dateContent);
dateContent.classList.add("shows__dates");

    // const dateContent = document.createElement("p");
    // dateContent.innerHTML = showsArray[i].date;
    // dateContainer.appendChild(dateContent);
    // dateContent.classList.add("shows__dates");
    
    //heading venue

    const venueContainer = document.createElement("div");
    venueContainer.classList.add("container__venue");
    container.appendChild(venueContainer);

    const venueTitle = document.createElement("p");
    venueTitle.innerHTML = "VENUE";
    venueContainer.appendChild(venueTitle);
    venueTitle.classList.add("shows__venue-title");

    const venueContent = document.createElement("p");
    venueContent.innerHTML = showsArray[i].place;
    venueContainer.appendChild(venueContent);
    venueContent.classList.add("shows__venue-content");

    //heading location

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("container__location");
    container.appendChild(locationContainer); 

    const locationTitle = document.createElement("p");
    locationTitle.innerHTML = "LOCATION";
    locationContainer.appendChild(locationTitle);
    locationTitle.classList.add("shows__location-title");

    const locationContent = document.createElement("p");
    locationContent.innerHTML = showsArray[i].location;
    locationContainer.appendChild(locationContent);
    locationContent.classList.add("shows__location-content");

    //create a div for the button
    const buyButtonContainer = document.createElement("div");
    container.appendChild(buyButtonContainer);

    const buyTicketButton = document.createElement("button");
    buyTicketButton.innerHTML = "BUY TICKETS";
    buyButtonContainer.appendChild(buyTicketButton);
    buyTicketButton.classList.add("shows__button")
}
})
.catch(error => {
    console.error(error);
});


function convertDate(timestamp) {
    const date = new Date(timestamp);
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

