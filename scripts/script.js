"use strict";

elem.onclick = function() {
    alert("Чувак, ты думал что-то здесь будет?");
};

a.onclick = function() {
    alert("Не используются");
};

me.onclick = function() {
    script.style.display = script.style.display === "block" ? "none" : "block";
    video.style.display = script.style.display === "none" ? "block" : "none";
};