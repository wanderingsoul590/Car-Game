$(function () {

  localStorage.setItem("fuel", 0);

  localStorage.setItem("start", 100);
  localStorage.setItem("end", 0);



  //function to get postion of the car 0 to 100
  let position = 0;
  function positions() {

    position = $(".car").css("background-position-x");
    position = parseInt(position);;
  }

  function startP() {
    positions();
    localStorage.setItem("start", position);
  }

  function endP() {
    positions();
    localStorage.setItem("end", position);
  }

  let interval = 0;
  function fuelcount() {
    const fuelconst = localStorage.getItem("fuel");
    interval = setInterval(function () {
      positions();
      localStorage.setItem("end", position);
      let endPosition = position;
      let startPosition = localStorage.getItem("start");

      fuel = (fuelconst - (Math.abs(startPosition - endPosition)) / 100).toFixed(2);
      localStorage.setItem("fuel", fuel);
      // console.log(localStorage.getItem("fuel"))
      if (localStorage.getItem("fuel") <= 0) {
        $(".car").stop();
        $(".container").stop();
        $(".road").stop();
        clearInterval(interval);
      }


      fuelL();
    }, 0);
  }

  function fuelL() {
    let fuel = localStorage.getItem("fuel");
    let level = fuel * 10 / 2;
    $('.innerfuel').css('width', level + '%');
    if (level > 40) {
      $('.innerfuel').css('background-color', 'green');
    } else {
      if (level > 15) {
        $('.innerfuel').css('background-color', '#ff9900');
      } else {
        $('.innerfuel').css('background-color', 'red');
      }

    }
  }

  fuelL();

  // 
  // car start at heare
  // 
  $('.start').click(function () {
    clearInterval(interval);
    startP();

    $(".car").stop();
    $(".container").stop();
    $(".road").stop();
    positions();
    fuelcount();

    if (localStorage.getItem("fuel") > 0) {

      $(".car").animate({
        backgroundPositionX: '0%'
      }, position * 40, //duration(speed) will be depend on car position
        function () {
          clearInterval(interval);
        });

      // k = 100;
      // while ( k > 0) {

      //   $(".car").animate({
      //     backgroundPositionX: '-17.7%'
      //   }, position * 10,'linear', //duration(speed) will be depend on car position
      //     function () {
      //       $(".car").css('background-position-x', '116.9%');
      //       // clearInterval(interval);
      //     });

      //   $(".container").animate({
      //     backgroundPositionX: '893%'
      //   }, (200 - position) * 30,'linear', //duration(speed) will be depend on car position
      //     function () {
      //       $(".container").css('background-position-x', '0');
      //       // clearInterval(interval);
      //     });

      //   $(".road").animate({
      //     backgroundPositionX: '-52.9%'
      //   }, (200 - position) * 30,'linear',  //duration(speed) will be depend on car position
      //     function () {
      //       $(".road").css('background-position-x', '100%');
      //       clearInterval(interval);
      //     });
      //     startP();
      //     fuelcount();
      //     k--;
      // }


      $(".container").animate({
        backgroundPositionX: '100%'
      }, (200 - position) * 40, //duration(speed) will be depend on car position
        function () {
          clearInterval(interval);
        });

      $(".road").animate({
        backgroundPositionX: '0%'
      }, (200 - position) * 40, //duration(speed) will be depend on car position
        function () {
          clearInterval(interval);
        });

    } else {
      alert('Please Enject Fuel')
    }
  });

  // 
  // car goes reverce at heare
  // 
  $('.reverce').click(function () {
    clearInterval(interval);
    startP();

    $(".car").stop();
    $(".container").stop();
    $(".road").stop();
    positions();
    fuelcount();

    if (localStorage.getItem("fuel") > 0) {

      $(".car").animate({
        backgroundPositionX: '100%'
      }, (100 - position) * 40,
        function () {
          clearInterval(interval);
        });

      $(".container").animate({
        backgroundPositionX: '0%'
      }, (100 - position) * 40, //duration(speed) will be depend on car position
        function () {
          clearInterval(interval);
        });

      $(".road").animate({
        backgroundPositionX: '100%'
      }, (100 - position) * 40, //duration(speed) will be depend on car position
        function () {
          clearInterval(interval);
        });

    } else {
      alert('Please Enject Fuel')
    }


  });

  // 
  // car stops here
  // 
  $('.stop').click(function () {
    $(".car").stop();
    $(".container").stop();
    $(".road").stop();
    clearInterval(interval);
  });


  $('.inject').click(function () {
    $('.injectform').css('display', 'flex');
  })

  $('.close').click(function () {
    $('.injectform').css('display', 'none');
  })

  $('#dollers').on('keyup', function () {

    let val = $('#dollers').val();
    let putfuel = (val * 100 / 55).toFixed(2);
    let isfuel = localStorage.getItem("fuel", putfuel);
    if (parseInt(isfuel) + parseInt(putfuel) > 20) {
      $('.error').css('display', 'block');
      $('.submitamount').attr('disabled', 'disabled');
    } else {
      $('.submitamount').removeAttr('disabled');
    }
    $('.showlbox').css('display', 'block');

    $('.showliter').text(putfuel + ' ');
  })

  $('.submitamount').click(function () {
    let val = $('#dollers').val();
    let putfuel = (val * 100 / 55).toFixed(2);
    let isfuel = localStorage.getItem("fuel", putfuel);
    putfuel = parseInt(isfuel) + parseInt(putfuel);
    localStorage.setItem("fuel", putfuel);
    $('.injectform').css('display', 'none');
    fuelL();
  })


});