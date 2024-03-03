let datepicker =document.getElementById('datepicker')
let choosedate =document.getElementById('choosedate')
let ageyear =document.getElementById('ageyear')
let agemonth =document.getElementById('agemonth')
let agedays =document.getElementById('agedays')
let agehour =document.getElementById('agehour')
let agesecond =document.getElementById('agesecond')
let agemilisecond =document.getElementById('agemilisecond')





datepicker.addEventListener('change',function()
{
    let options = {year: 'numeric', month: 'long', day: 'numeric'};
    let selectedate = new Date(this.value)
    let DOB =selectedate.toLocaleDateString('en-US',options)

choosedate.innerHTML = "DOB: "+" "+ DOB;



let miliseconds_Btw_DOB =Date.parse(DOB);
let miliseconds_Btw_Now =Date.now();
let age_in_Milisecond = miliseconds_Btw_Now- miliseconds_Btw_DOB ;



let miliseconds = age_in_Milisecond;
let second =1000;
let minute=second*60;
let hour=minute*60;
let day=hour*24;
let month=day*30;
let year=day*365;

let years = Math.round(miliseconds/year);
let months = years*12;
let days = years*365;
let hours = Math.round(miliseconds/hour)
let seconds = Math.round(miliseconds/second)



ageyear.innerHTML =years
agemonth.innerHTML =months
agedays.innerHTML =days
agehour.innerHTML =hours
agesecond.innerHTML =seconds
agemilisecond.innerHTML =miliseconds



document.querySelector('.age-cal').classList.add('expand');
})