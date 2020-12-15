const selector = {
  contLink : document.querySelector('.judul')
};

var typed = new Typed('.target', { // Typed JS
  strings: ["Dimas Andhika", "@DIMAS.NGODING"],
  typeSpeed: 50,
  loop: true,
  backDelay: 1000,
  backSpeed: 30
});

const link = document.querySelector('.input form') // Tombol
  .addEventListener('click', function() {
    let valNomor = document.getElementById('nomor').value;
    let valTeks = document.getElementById('teks').value;
    let hasil = ``;
    let spasi = valTeks.split(' ').join('%20');

    if (valTeks !== '') {
      hasil = `https://api.whatsapp.com/send?phone=${valNomor}&text=${spasi}`;
    } else if (valTeks == '') {
      hasil =  `https://api.whatsapp.com/send?phone=${valNomor}`;
    }

    selector.contLink.innerHTML = ``;
    selector.contLink.innerHTML += /*html*/`
    <h1><img src="img/img.png" alt="Whatsapp"> Direct-WA</h1>
    <h3><span>Send Whatsapp</span> Message without saving the number</h3>
    <a href="${hasil}" target="_blank">${hasil}</a>
    `;
    
    setTimeout(() => {
      window.open(hasil, '_blank');
    }, 1500);

    setTimeout(() => {
      selector.contLink.innerHTML = /*html*/`
      <h1><img src="img/img.png" alt="Whatsapp"> Direct-WA</h1>
      <h3><span>Send Whatsapp</span> Message without saving the number, by <span class="target"></span></h3>
      `
    }, 3000);
  });
