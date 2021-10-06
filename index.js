//1
console.log("pirma: ");
function pirmas(){
    const mas1 = [12, 5, 9, 7, 5, 4];
    console.log(mas1.length);
}
 
pirmas();
//2
console.log("antra: ");
function antras() {
    const mas2 = [13, '785', 92, 'labas', 522, 6984];
    for(let i=0; i<mas2.length;i++){
        console.log("index: "+i+" reiksme:" + mas2[i]);
    }
}
antras();
//3
console.log("trecia: ");
function trecias() {
    const mas3 = [889, 52, 698, 752, 9333, 7];
    for(let i=0; i<mas3.length;i++){
        if(mas3[i]%2==0){
            console.log("index: "+i+" reiksme:" + mas3[i]);
        }
        
    }
}
trecias();
//4
console.log("ketvirta: ");
function ketvirtas() {
    const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];
    mas4.forEach(printIf)
    function printIf(str){
        let arr = str.split("")
        if(arr[0]=="A" || arr[0]=="a") {
            console.log(str);
        }
    }
}
ketvirtas();
//5
console.log("penkta: ");
function penktas() {
    const str1 = 'Storas zebras, bėga nuo zuulu genties nedžiotojų.';
    let remText = str1.replace(/ /g, "");
    console.log(remText.length);

}
penktas();
//6
console.log("sesta: ");
function sestas() {
    const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio']);
    set2 = set1.add("Labas");
    set2.add("Ate");
    
    //console.log(set2.size);
    //neveikia sitas

}
sestas();
//7
console.log("septinta: ");
String.prototype.lastCharIs = function() {
    return this.split("")[this.length-1];
}
const str2 = 'Ku ku';
console.log(str2.lastCharIs());
//
console.log("astunta: ");
function astuntas() {
    const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };
    for (const key in obj1) {
        console.log(key, obj1[key]);
    }
}
astuntas();

//9
console.log("devinta: ");
class grybas {
    constructor(tipas) {
        this.tipas=tipas;
    }
}
let gr1 = new grybas("Baravykas");
let gr2 = new grybas("Ūmedė");
let gr3 = new grybas("Lepšis");
