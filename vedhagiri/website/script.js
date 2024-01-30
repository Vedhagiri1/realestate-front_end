function handleSubmit(event) {
    event.preventDefault();
document.getElementById('preloader').style.display='block';
setTimeout (function(){
window.location.href ="index.html";
},2000);
}

