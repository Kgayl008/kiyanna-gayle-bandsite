const showsArray = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]
const shows = document.querySelector("#shows__section");
shows.classList.add("shows__section");
const showsTitle = document.createElement('h1');
showsTitle.innerText = "Shows";
shows.appendChild(showsTitle);
showsTitle.classList.add("shows__title");



for (let i = 0; i < showsArray.length; i++){
    const shows = document.querySelector("#shows__section");
    shows.classList.add("shows__section");

    //parent container to each containers
    const container = document.createElement("div");
    container.classList.add("container");
    shows.appendChild(container);

    //heading date
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("container__dates");
    container.appendChild(dateContainer);

    const dateTitle = document.createElement('p');
    dateTitle.innerHTML = "DATE";
    dateContainer.appendChild(dateTitle);
    dateTitle.classList.add("shows__date-title");

    const dateContent = document.createElement("p");
    dateContent.innerHTML = showsArray[i].date;
    dateContainer.appendChild(dateContent);
    dateContent.classList.add("shows__dates");
    
    //heading venue

    const venueContainer = document.createElement("div");
    venueContainer.classList.add("container__venue");
    container.appendChild(venueContainer);

    const venueTitle = document.createElement("p");
    venueTitle.innerHTML = "VENUE";
    venueContainer.appendChild(venueTitle);
    venueTitle.classList.add("shows__venue-title");

    const venueContent = document.createElement("p");
    venueContent.innerHTML = showsArray[i].venue;
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

    const buyTicketButton = document.createElement("button");
    buyTicketButton.innerHTML = "BUY TICKETS";
    container.appendChild(buyTicketButton);
    buyTicketButton.classList.add("shows__button")

    const divider = document.createElement("hr");
    shows.appendChild(divider);
    divider.classList.add("divider");
}







