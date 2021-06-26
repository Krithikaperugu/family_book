var name1=["Cover page", "My Father" , "My Mother" , "Myself" , "My Brother" ,  "My Whole Family"];
var images=["cover.page.jpg","father.jpg","mother.jpg","myself.jpg","lucky.jpg","last cover page.jpg"];
var i=0;
function nextslide() {
document.getElementById("next_name").innerHTML=name1[i];
document.getElementById("image1").src=images[i];
i++;
}