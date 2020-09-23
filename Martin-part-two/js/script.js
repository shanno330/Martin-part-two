var rain = prompt("How many inches of rain fell?");
if (rain >=1){
    var stars="*";
    for (let i = 1; i<rain ; i++){
    stars=stars+"*";
} console.log(stars);
}
var bushels=50;
if (rain>=20){bushels=bushels*.9;
} 
else if (rain<10){bushels=bushels*.8;
} 
var fertilizer = prompt("Did you use fertilizer?");
if (fertilizer === "yes"){
var kind = prompt("Did you use premium or regular fertilizer?");
if (kind === "premium"){bushels=bushels*1.15;
}
else if (kind === "regular"){bushels=bushels*1.10;
}
} console.log ("The yield should be "+ bushels+ " bushels per acre")








