var name = prompt("Ismingizni kiriting: ")
alert("Sizning Ismingiz: " + name )


var age = prompt("Yoshingizni kiriting: ")
if(isNaN(age)){
    alert("Siz son kiritmadingiz!")
}
else {
    alert("Sizning yoshingiz "+age+"da")
}



var ex1 = prompt("Birinchi misolni yeching: 12133442 + 213232 = ?")
if(ex1==11920210){
    alert("Sizning javobingiz tog'ri: " +ex1)
}

else {
    alert("Afsuski, javobingiz noto'g'ri. To'g'ri javob: "+ 11920210)
}


var ex2 = prompt("Ikkinchi misolni yeching: 97678776 - 87364821 = ?")
if(ex2==10313955 ){
    alert("Sizning javobingiz tog'ri: " +ex2)
}

else {
    alert("Afsuski, javobingiz noto'g'ri. To'g'ri javob: "+10313955)
}

var ex3 = prompt("Uchinchi misolni yeching: 32 * 32 = ?")
if(ex3==1024){
    alert("Sizning javobingiz tog'ri: " +ex3)
}

else {
    alert("Afsuski, javobingiz noto'g'ri. To'g'ri javob: "+ 1024)
}

var ex4 = prompt("T'ortinchi misolni yeching: 1000 / 8 = ?")
if(ex4==125){
    alert("Sizning javobingiz tog'ri: " +ex4)
}

else {
    alert("Afsuski, javobingiz noto'g'ri. To'g'ri javob: "+ 125)
}