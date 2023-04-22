let content = '';

function sendMessage() {

    let text = document.querySelector('textarea').value;

    text == text.trim();

    if (text == '') {
        return;
    }

    let postman = new XMLHttpRequest();

    postman.open('GET','https://itchycrisplinuxpc.timondecathlon.repl.co/?text=' + text );

    postman.send();

    document.querySelector('textarea').value = '';

}

function showMessages() {

    let postman = new XMLHttpRequest();
    postman.open('GET','https://itchycrisplinuxpc.timondecathlon.repl.co/',false);
    postman.send();

    let data = JSON.parse(postman.responseText);

    if (postman.responseText == content) {
        return;
    }

    content == postman.responseText

    document.querySelector('.messages').innerHTML = '';

    for (let i = 0 ; i < data.length ; i++) {
        document.querySelector('.messages').innerHTML += `
                                                        <div>
                                                            <div class="message">${data[i]}</div>
                                                        </div>
                                                        `;
    }

    document.querySelector('.messages').scrollTo(0, document.querySelector('.messages').scrollHeight);
}



setInterval(function(){

    showMessages();

},1000);

document.onkeydown = function() {

    if (event.keyCode == 13) {
        sendMessage();
    }

}


