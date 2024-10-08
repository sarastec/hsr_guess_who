let charImg;
let buttonYes;
let buttonMaybe;
let buttonNo;

function yes(character) {
   charImg = document.getElementById(character);
   buttonYes = document.getElementById("yes-" + character);
   buttonMaybe = document.getElementById("maybe-" + character);
   buttonNo = document.getElementById("no-" + character);

   charImg.classList.remove('maybeActive');
   buttonMaybe.classList.remove('current');
   charImg.classList.remove('noActive');
   buttonNo.classList.remove('current');

   if (!charImg.classList.contains('yesActive')) {
      charImg.classList.add('yesActive');
      buttonYes.classList.add('current');
   }
   else {
      charImg.classList.remove('yesActive');
      buttonYes.classList.remove('current');
   }
}

function maybe(character) {
   charImg = document.getElementById(character);
   buttonYes = document.getElementById("yes-" + character);
   buttonMaybe = document.getElementById("maybe-" + character);
   buttonNo = document.getElementById("no-" + character);

   charImg.classList.remove('yesActive');
   buttonYes.classList.remove('current');
   charImg.classList.remove('noActive');
   buttonNo.classList.remove('current');

   if (!charImg.classList.contains('maybeActive')) {
      charImg.classList.add('maybeActive')
      buttonMaybe.classList.add('current');
   }
   else {
      charImg.classList.remove('maybeActive')
      buttonMaybe.classList.remove('current');
   }
}

function no(character) {
   charImg = document.getElementById(character);
   buttonYes = document.getElementById("yes-" + character);
   buttonMaybe = document.getElementById("maybe-" + character);
   buttonNo = document.getElementById("no-" + character);

   charImg.classList.remove('yesActive');
   buttonYes.classList.remove('current');
   charImg.classList.remove('maybeActive');
   buttonMaybe.classList.remove('current');

   if (!charImg.classList.contains('noActive')) {
      charImg.classList.add('noActive')
      buttonNo.classList.add('current');
   }
   else {
      charImg.classList.remove('noActive')
      buttonNo.classList.remove('current');
   }
}

function reset() {
   
}