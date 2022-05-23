let x = Math.floor(Math.random()*6) +1
let image1= "dice" + x + ".png"
document.querySelectorAll("img")[0].setAttribute("src", "image/"+image1)

let y = Math.floor(Math.random()*6) +1
let image2= "dice" + y + ".png"
document.querySelectorAll("img")[1].setAttribute("src", "image/"+image2)

if (x>y){
    document.querySelector("h1").innerHTML = "Player 1 win";
}
else if (x<y)
{
    document.querySelector("h1").innerHTML = "Player 2 win";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}