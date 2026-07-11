function scrollToSection(id){

document
.getElementById(id)
.scrollIntoView({
behavior:"smooth"
});

}




document
.getElementById("bookingForm")
.addEventListener("submit",function(event){

event.preventDefault();


alert(
"Спасибо! Ваш столик успешно забронирован."
);


});





function addReview(){


let name =
document.getElementById("name").value.trim();


let text =
document.getElementById("reviewText").value.trim();



if(name==="" || text===""){

alert("Заполните все поля");

return;

}



let review =
document.createElement("div");


review.className="review";


review.innerHTML=`

<h3>
${name} ⭐⭐⭐⭐⭐
</h3>

<p>
${text}
</p>

`;



document
.getElementById("reviewsList")
.prepend(review);



document.getElementById("name").value="";

document.getElementById("reviewText").value="";


}