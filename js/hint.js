let showHint = function () {
    document.getElementById('share-hint').style.visibility='visible'
}

let closeHint = function () {
    let hint = document.getElementById('share-hint');
    hint.classList.toggle('share-hint-close');
}

document.getElementById('hint-close').addEventListener('click', function () {
    localStorage.setItem("closeHint", closeHint)
})

if (localStorage.getItem('closeHint') !== null) {
    null
} else {
    setTimeout(showHint,1000)
}