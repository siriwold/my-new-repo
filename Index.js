let underliggende = false; //Let lager en lokal variabel og den har verdien false
let helsepersonell = false;

let selectedColor = "#7575f9" //Let lager en lokal variabel og den har verdien fargen som vises når knappen er valgt 
let unselectedColor = "#b5b5e5" //Let lager en lokal variabel og den har verdien fargen som vises når knappen ikke er valgt 

function underliggendePå(){ //funksjon om hva som skjer når underliggendePå blir kalt 
    underliggende = true;
    document.getElementById("Underliggende").style.backgroundColor = selectedColor;
    document.getElementById("Underliggende1").style.backgroundColor = unselectedColor;
}
function underliggendeAv(){ ////funksjon om hva som skjer når underliggendeAv blir kalt 
    underliggende = false;
    document.getElementById("Underliggende1").style.backgroundColor = selectedColor;
    document.getElementById("Underliggende").style.backgroundColor = unselectedColor;
}

function helsepersonellPå(){ //funksjon om hva som skjer når helsepersonellPå blir kalt 
    helsepersonell = true;
    document.getElementById("helsepersonell").style.backgroundColor = selectedColor;
    document.getElementById("helsepersonell1").style.backgroundColor = unselectedColor;
}
function helsepersonellAv(){ //funksjon om hva som skjer når helsepersonellAv blir kalt 
    helsepersonell = false;
    document.getElementById("helsepersonell1").style.backgroundColor = selectedColor;
    document.getElementById("helsepersonell").style.backgroundColor = unselectedColor;
}

function check() { //funksjon om hva som skjer når check blir kalt 
    let age = document.getElementById("alder").value
    if (helsepersonell) { //Hvis du velger at du er helsepersonell så vil du få denne outputen 
        output = "Du vil få et tilbud i mellom Januar og August" 
    }
    else if (underliggende) { //Hvis du har en underliggende sykdom og du er mellom 18-44 så vil du få denne outputen.
        if(age >= 18 && age <= 44) {
            output = "Du vil få et tilbud mellom Mai og Juni "
        }
        else if(age >= 45 && age <= 54) { //Hvis du har en underliggende sykdom og du er mellom 45-54 så vil du få denne outputen
            output = "Du vil få et tilbud mellom April og Juni"
        }
        else if(age >= 55 && age <= 64) {//Hvis du har en underliggende sykdom og du er mellom 55-64 så vil du få denne outputen
            output = "Du vil få et tilbud mellom April og Juni"
        }
    else if(age<=18) { //Hvis du har en underliggende sykdom og du er under 18 så vil du få denne outputen
        output = "Det finnes ikke en vaksine for de under 18 enda"
    }
    }
    else if(!underliggende) {
        if(age >= 18 && age <= 44) { //Hvis du har en ikke underliggende sykdom og du er mellom 18-44 så vil du få denne outputen
            output = "Du vil få et tilbud mellom Juni og September"
        }
        else if(age >= 45 && age <= 54) { //Hvis du har en ikke underliggende sykdom og du er mellom 45-54 så vil du få denne outputen
            output = "Du vil få et tilbud mellom juni og August"
        }
        else if(age >= 55 && age <= 64) { //Hvis du har en ikke underliggende sykdom og du er mellom 55-64 så vil du få denne outputen
            output = "Du vil få et tilbud i mellom Mai og August "
        }
        else if(age >= 65 && age <= 74) { //Hvis du har en ikke underliggende sykdom og du er mellom 65-74 så vil du få denne outputen
            output = "Du vil få et tilbud mellom Mars og Mai"
        }
        else if(age >= 75 && age <= 84) { //Hvis du har en ikke underliggende sykdom og du er mellom 75-84 så vil du få denne outputen
            output = "Du vil få et tilbud mellom Februar og Mai "
        }
        else if(age >=85) { //Hvis du har en ikke underliggende sykdom og du er 85 eller eldre så vil du få denne outputen
            output = "Du vil få et tilbud mellom Januar og Februar "
        }  else if(age<=18) {
            output = "Det er ikke et tilbud for deg enda " //Hvis du har en ikke underliggende sykdom og du er under 18 så vil du få denne outputen
            console.log(age)
        }
        
    }
    else { 
        output = "error"
    }
    console.log(output)
    document.getElementById("answer").innerHTML = output; 
}