const form = document.querySelector('#loginForm');
form.addEventListener('submit', e => {

  e.preventDefault();


  let NoLoop = document.getElementById('NoNu');   // read the loop number
  let NoBish = document.getElementById('BishNu'); // read the Bish number
  let NoBosh = document.getElementById('BoshNu'); // read the Bosh number
  /*   console.log('validerar formuläret');
   console.log('validering klar! skickar till databasen')
   form.reset();*/
  console.log("NoLoop =" + NoLoop.value);
  console.log("NoBish =" + NoBish.value.toString());
  console.log("NoBosh =" + NoBosh.value.toString());


  let NLoop = +NoLoop.value;
  let NBish = +NoBish.value;
  let NBosh = +NoBosh.value;

  let fSuccess = true;

  if (NLoop < 0 || NBish < 0 || NBosh < 0) {
    console.error('De angivna talen ska vara positiva heltal försök igen');
    fSuccess = false;
  }
  else if (NBish > NLoop || NBosh > NLoop) {
    console.error('Bish eller Bosh bör inte vara större än looptalet, försök igen');
    fSuccess = false;
  }
  else if (NLoop > 500) {
    console.error('Väl stort lopptal - försök igen');
    fSuccess = false
  }
  if (!fSuccess) {
    form.reset();
  }
  else {
    let str = '';
    for (let i = 1; i <= NLoop; i++) {
      let lBish = false;
      if (i % NBish === 0) {
        lBish = true;
        str = str + 'Bish';
      }

      if (i % NBosh === 0) {
        if (lBish)
          str = str + '-'; // Bish-Bosh: skriv ut strecket emellan
        str = str + 'Bosh';
      }
      else {         // Inte Bosh
        if (!lBish) { // Varken Bish eller Bosh
          str = str + i.toString();
        }
      }

      str = str + ', '

    }
    console.log(str);


}})

