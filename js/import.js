import posts from 'https://jsonplaceholder.typicode.com/posts' assert { type: 'json' };
import comments from 'https://jsonplaceholder.typicode.com/comments' assert { type: 'json' };

const newElement = document.createElement('div');
const container = document.getElementById('post');

var text = ``
for (var i = 0; i < posts.length; ++i) {
    text = `
    <div class="container">
        <div class="posts">
            <ul class="post">
                <li class="posts_id">Post #${posts[i].id}</li>
                <li class="posts_title">${posts[i].title}</li>
                <li><br /></li>
                <li class="posts_body">${posts[i].body}</li>
            </ul>
        </div>
        <p class="comments_border">Comments
            <button class="btn" id="${posts[i].id}" onClick="reply_click(this.id)">Show</button>
        </p>
        <div class="comments hidden" id="${`comment-` + posts[i].id}">`;
    for (var j = 0; j < comments.length; j++) {
        if (comments[j].postId == posts[i].id) {
            text += `
                    <ul class="horizontalLine"></ul>
                    <ul class="comment">
                        <li class="comments_id">Id: ${comments[j].id}</li>
                        <li class="comments_name">Name: ${comments[j].name}</li>
                        <li class="comments_email">Email: ${comments[j].email}</li>
                        <li class="comments_body">${comments[j].body}</li>
                    </ul>`;
        }
    }
    
    newElement.innerHTML = text + `                
        </div>
    </div>`;

    let box = newElement
    box.classList.add("box");
    box.dataset.id = i;
    container.appendChild(box.cloneNode(true));
}