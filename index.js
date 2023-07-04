let s1 = 0;

function slideR() {
    s1 += 1;
    console.log('slide', s1);

   switch (s1) {
    case s1 = 1:
        document.getElementById('carousselPosition').style.marginLeft = "-0";
        break;
    
    case s1 = 2:
        document.getElementById('carousselPosition').style.marginLeft = "-2000px";
        break;

    case s1 = 3:
        document.getElementById('carousselPosition').style.marginLeft = "-4000px";
    break;

    case s1 = 4:
        document.getElementById('carousselPosition').style.marginLeft = "-6000px";
    break;

    default:
        break;
   }
}

function slideL() {
    s1 -= 1;
    console.log('slide', s1);

    switch (s1) {
        case s1 = 1:
            document.getElementById('carousselPosition').style.marginLeft = "-0";
            break;
    
        case s1 = 2:
            document.getElementById('carousselPosition').style.marginLeft = "-2000px";
            break;
    
        case s1 = 3:
            document.getElementById('carousselPosition').style.marginLeft = "-4000px";
        break;
       
        default:
            break;
       }

}