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

function createCommentCard(comment) {
    const parentContainer = document.createElement("div");
    sectionComments.appendChild(parentContainer);
    parentContainer.classList.add("parent__container");
    
    const nameDateCommentContainer = document.createElement("div");
    parentContainer.appendChild(nameDateCommentContainer);
    nameDateCommentContainer.classList.add("container__right");
    
    const nameDateContainer = document.createElement("div");
    nameDateCommentContainer.appendChild(nameDateContainer);
    nameDateContainer.classList.add("container__name-date");
    
    const commentContainer = document.createElement("div");
    nameDateCommentContainer.appendChild(commentContainer);
    
    const avatarContainer = document.createElement("div");
    parentContainer.appendChild(avatarContainer);
    avatarContainer.classList.add("avatar__container");
    
    const commentName = document.createElement("p");
    commentName.innerHTML = comment.name;
    nameDateContainer.appendChild(commentName);
    commentName.classList.add("comment__name");
    
    const commentDate = document.createElement("p");
    commentDate.innerHTML = comment.date;
    nameDateContainer.appendChild(commentDate);
    commentDate.classList.add("comment__date");
    
    const commentCard = document.createElement("div");
    commentCard.classList.add("comment__card");
    sectionComments.appendChild(commentCard);
    
    const avatarImage = document.createElement("div");
    avatarImage.classList.add("comment__avatar");
    avatarContainer.appendChild(avatarImage);
    
    const commentSection = document.createElement("p");
    commentSection.innerHTML = comment.comment;
    commentContainer.appendChild(commentSection);
    commentSection.classList.add("comment__section");
    }

    function renderCommentSection(comment){
        sectionComments.innerHTML = "";
        comments.forEach(comment => {
            createCommentCard(comment);
        });
    }

    function submitComments(event){
        event.preventDefault();

        const formSubmit = {
            name: event.target.name.value,
            date: new Date().toLocaleDateString("en-US"),
            comment: event.target.comment.value,
        };

        comments.unshift(formSubmit);
        renderCommentSection(comments);
        formEl.reset()
    }

    const inputSubmit = document.querySelector(".comment__form");

    inputSubmit.addEventListener("submit", submitComments);
    renderCommentSection(comments);