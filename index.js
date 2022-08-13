const replyBtnSpan = document.getElementById('dislikeSpan');
const sendButton = document.querySelector('.sendBtn');
let container = document.querySelector('.comment_outer_container');


    // Function for likes

    function likes(e){
        likeBtnSpan = document.getElementById(e);
        likeBtnSpan.innerHTML = parseInt(likeBtnSpan.innerHTML) + 1;
    }


    // Function for dislikes

    function disLikes(e){
        disLikeBtnSpan = document.getElementById(e);
        disLikeBtnSpan.innerHTML = parseInt(disLikeBtnSpan.innerHTML) + 1;
    }

let z = 0;
var numb;
var id;

// To reply for every comment --------------->

function doSomething(d,f,e){
         z = z+1;

        var textContainer = document.getElementById(d);
        let innerContainer = document.createElement("div");
            innerContainer.classList.add("addNewReply");
            let newTextBox = document.createElement("textarea");
            newTextBox.classList.add("replyText");
            let textButton = document.createElement("button");
            textButton.innerText = "Reply";
            textButton.classList.add("replyBtn");
        
            innerContainer.appendChild(newTextBox);
            innerContainer.appendChild(textButton);
            textContainer.append(innerContainer);

            // After clicking reply button --------->

            let replyButton = document.querySelector('.replyBtn');
            let replyContainer = document.getElementById(f);

                // Extracting digits from id
                 numb = d;
                 id = numb.match(/\d/g);
                id = id.join("");
                id = parseInt(id);
                
                
            replyButton.addEventListener('click',()=>{
                id = id+1;

                let innerTextContainer = document.querySelector('.replyText');
                        var x = innerTextContainer.value;

                        innerContainer.innerHTML = `
                        <div class="comment_container" id="containerId${id}">
                        <div class="comment_card" id="cardId${id}">
                        <div class="commentHeader">
                            <div class="commentImg D">S</div>
                                <h3>You</h3>
                                <span>Few seconds ago</span>
                        </div>
                        <p class="text">
                        ${x}
                        </p>
                        <div class="comment_footer">
                            <div class="like btn" onclick="likes('likeSpanId${id}')">Like <span id="likeSpanId${id}">0</span></div>
                            <div class="dislike btn" onclick="disLikes('dislikeSpanId${id}')">Dislike <span id="dislikeSpanId${id}">0</span></div>
                            <div class="reply btn" id="one" onclick="doSomething('containerId${id}','cardId${id}','replySpanId${id}')">Reply <span id="replySpanId${id}">0</span></div>
                            <div class="delete btn" onclick="deleteComment('containerId${id}')">Delete</div>
                        </div>
                        </div>
                        </div>
                   `

                 replyContainer.append(innerContainer);
            });

        // To increase reply count

        let span = document.getElementById(e);
        span.innerHTML = parseInt(span.innerHTML) + 1;
        z = 0;
}

var numb2;
var id2 = 4;

// To delete comment

function deleteComment(e){
    let y = prompt('Do you really want to delete?');
    if(y === 'yes'){
        document.getElementById(e).innerHTML = "";
    }
}

//------------->For Adding New Comment

 sendButton.addEventListener('click',()=>{
    id2 = id2 + 1;
    console.log(parseInt(id2));
    let innerContainer = document.createElement("div");
    innerContainer.classList.add("comment_container");

    let innerTextContainer = document.getElementById("commentText");
     var x = innerTextContainer.value;

    innerContainer.innerHTML = `<div class="comment_container" id="container${id2}">
    <div class="comment_card" id="card${id2}">
    <div class="commentHeader">
        <div class="commentImg D">S</div>
            <h3>You</h3>
            <span>Few seconds ago</span>
    </div>
    <p class="text">
       ${x}
    </p>
    <div class="comment_footer">
    <div class="like btn" onclick="likes('likeSpan${id2}')">Like <span id="likeSpan${id2}">0</span></div>
    <div class="dislike btn" onclick="disLikes('dislikeSpan${id2}')">Dislike <span id="dislikeSpan${id2}">0</span></div>
        <div class="reply btn" id="one" onclick="doSomething('container${id2}','card${id2}','replySpan${id2}')">Reply <span id="replySpan${id2}">2</span></div>
        <div class="delete btn" onclick="deleteComment('container${id2}')">Delete</div>
    </div>
</div>
</div>
`

    container.append(innerContainer);
    innerTextContainer.value = "";

});
    






