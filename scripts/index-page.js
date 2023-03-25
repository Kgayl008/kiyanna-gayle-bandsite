const comments = [
    {
        name: 'Connor Walton',
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    }, {
        name: 'Emilie Beach',
        date: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    }, {
        name: 'Miles Acosta',
        date: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
];

const sectionComments = document.querySelector("#section__comments");
sectionComments.classList.add("section__comments");

for (let i = 0; i < comments.length; i++) {
//container for the the names and dates
const nameDateContainer = document.createElement("div");
sectionComments.appendChild(nameDateContainer);
nameDateContainer.classList.add("container__name-date")

const commentCard = document.createElement("div");
commentCard.classList.add("comment__card");
sectionComments.appendChild(commentCard);

const commentName = document.createElement("p");
commentName.innerHTML = comments[i].name;
nameDateContainer.appendChild(commentName);

const commentDate = document.createElement("p");
commentDate.innerHTML = comments[i].date;
nameDateContainer.appendChild(commentDate);

const avatarContainer = document.createElement("div");
avatarContainer.classList.add("avatar__container");
sectionComments.appendChild(avatarContainer);
//mercury image

// const commentContainer = document.createElement("div");
// sectionComments.appendChild(commentContainer)


const commentSection = document.createElement("p");
commentSection.innerHTML = comments[i].comment;
sectionComments.appendChild(commentSection);

const divider = document.createElement("hr");
sectionComments.appendChild(divider);

}