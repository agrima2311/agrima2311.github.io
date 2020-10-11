

function blink_text() {
    $('.blink').fadeOut(400);
    $('.blink').fadeIn(400);
}
setInterval(blink_text, 1000);