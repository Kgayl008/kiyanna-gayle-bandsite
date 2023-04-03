// const commentsURL = "https://project-1-api.herokuapp.com";
// const apiKey = "?api_key=0aaf8967-4617-4546-9578-25b998b99ff0";

let comments = [];

axios.get('https://project-1-api.herokuapp.com/comments/?api_key=0aaf8967-4617-4546-9578-25b998b99ff0')
    .then(potato => {
        console.log(potato);
        comments = potato.data;
        renderCommentSection(comments);
        
    })
    .catch(error => {
        console.error(error);
    });



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
    commentDate.innerHTML = convertDate(comment.timestamp);
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



function renderCommentSection(comments){
    sectionComments.innerHTML = "";//reset to get more info
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

// function convertDate(dates){
//     const date = new Date(dates)
// }
function convertDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
}





// axios.post('https://project-1-api.herokuapp.com/comments/?api_key=0aaf8967-4617-4546-9578-25b998b99ff0', {
//         data: {
//         name: 'John Doe',
//         comment: 'john.doe@example.com',
//         timestamp: new Date(1648906200000).toLocaleDateString()
//         }
//     })
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error(error);
//     });