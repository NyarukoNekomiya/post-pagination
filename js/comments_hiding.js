function reply_click(clicked_id)
{
    var button = document.getElementById(clicked_id);
    var content = document.getElementById(`comment-`+ clicked_id);

    if (content.classList.contains("hidden")) {
        button.textContent = "Hide";
    } else {
        button.textContent = "Show";
    }

    content.classList.toggle("hidden");
}