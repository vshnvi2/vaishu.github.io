var myImage = document.querySelector('img');
myImage.onclick = function (){
    var mysrc = myImage.getAttribute('src');
    if(mysrc === 'images/indian-flag-waving-gif-animation-9.gif'){
        myImage.setAttribute('src','images/india.gif');
    }
else
{
    myImages.setAttribute('src','images/indian-flag-waving-gif-animation-9.gif');
}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3')
function setUserName()
{
    var myName = prompt('Please enter your name...');
    localStorage.setItem('name',myName);
    myHeading.innerHTML='Proud To Be an Indian,' +myName;
}
if(!localStorage.getItem('name'))
    {
        setUserName();
    }
else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Proud to to be an Indian,' +storedName
}
myButton.onclick = function()
{
    setUserName();
}