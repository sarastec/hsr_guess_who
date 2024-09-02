function yes(character) {
   let charImg = document.getElementById(character);

   charImg.classList.remove('maybeActive');
   charImg.classList.remove('noActive');

   if (!charImg.classList.contains('yesActive')) {
      charImg.classList.add('yesActive');
   }
   else {
      charImg.classList.remove('yesActive');
   }
}

function maybe(character) {
   let charImg = document.getElementById(character);

   charImg.classList.remove('yesActive');
   charImg.classList.remove('noActive');

   if (!charImg.classList.contains('maybeActive')) {
      charImg.classList.add('maybeActive')
   }
   else {
      charImg.classList.remove('maybeActive')
   }
}

function no(character) {
   let charImg = document.getElementById(character);

   charImg.classList.remove('yesActive');
   charImg.classList.remove('maybeActive');

   if (!charImg.classList.contains('noActive')) {
      charImg.classList.add('noActive')
   }
   else {
      charImg.classList.remove('noActive')
   }
}