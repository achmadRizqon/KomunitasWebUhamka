// alert('haii')
  // membuat variabel
  var name = "Komunitas"; //string
  var visitorCount = 50322;   //integer
  var isActive = true; //boolean
  var url = "https://www.uhamka.ac.id"; 

  // menampilkan variabel ke jendela dialog (alert)
  var yakin = confirm("Selamat datang di " + name);

  if(yakin){ //membuat kondisi
  document.write("Nama Situs: " + name + "<br>");
  document.write("Jumlah Pengunjung: " + visitorCount + "<br>");
  document.write("Status Aktif: " + isActive + "<br>");
  document.write("Alamat URL: " + url + "<br>");
  } else {
      window.location = url;
  }


     //  kondisi if else
    //  var nilai = prompt("Inputkan nilai akhir:");
    //  var grade = "";

    //  if(nilai >= 90) grade = "A"
    //  else if(nilai >= 80) grade = "B+"
    //  else if(nilai >= 70) grade = "B"
    //  else if(nilai >= 60) grade = "C+"
    //  else if(nilai >= 50) grade = "C"
    //  else if(nilai >= 40) grade = "D"
    //  else if(nilai >= 30) grade = "E"
    //  else grade = "F";

    //  document.write(`<p>Grade anda` +grade+ `</p>`);



    // perulangan
         // perulangan for
    //     for(let i = 0; i < 10; i++  ){
    // document.write("<p>Perulangan ke-" + i + "</p>")
    // }


    // // perulangan forEach
    // var hari = ['senin','selasa','rabu','kamis','jumat','sabtu'];
    // hari.forEach((result)=>{
    //     document.write('<p>',result,'</p>');
    // })



    // perulangan nested while
    // var ulangi = confirm('apakah anda ingin ulangin nested');
    // var count = 0;
    
    // while(ulangi){
    //     count++;
    //     var bintang = "*".repeat(count) + "<br>";
    //     document.write(count + ": " + bintang);
    //     ulangi = confirm("apakah anda ingin mengulang?");
    //     }