$( document ).ready(function() {
	

  var mario = $(".weapons");
  	//$("#AK").hide();
  	//$("#Bownarrow").hide();
  	//$("#Shotgun").hide();
  $("#EndScreen").hide();
  $("#AK").hide();
  $("#TopBullet").hide();
  $("BottomBullet").hide();
  $("LeftBullet").hide();
  $("RightBullet").hide();
  $('#OnePoint').hide();
  $(document).keydown(function(e) {
  $(mario).keydown;
  switch(e.which) {
  
  //move left
  case 37:
    $(mario).animate({left: "-=20px"}, 'fast');
    $(".bullest").animate({left: "-=20px"}, 'fast');
    break;
      
  //move up
  case 38:
    $(mario).animate({top: "-=20px"}, 'fast');
    $(".bullets").animate({top: "-=20px"}, 'fast');

    break;
 
  //move right
  case 39:
    $(mario).animate({left: "+=20px"}, 'fast');
    $(".bullets").animate({left: "+=20px"}, 'fast');
    break;
  
  //move down
  case 40:
    $(mario).animate({top: "+=20px"}, 'fast');
    $(".bullets").animate({top: "+=20px"}, 'fast');
    break;
  //switchtoAK 
   case 87:
    $("#AK").show();
    $("#AKStill").hide();
    $("#BulletTop").show();
    break;
    case 65:
    $("#AK").show();
    $("#AKStill").hide();
    $("#BulletLeft").show();
    break;
    case 83:
    $("#AK").show();
    $("#AKStill").hide();
    $("#BulletRight").show();
    break;
    case 68:
    $("#AK").show();
    $("#AKStill").hide(); 
    $("#BulletBottom").show();
    break;
    case 69:
    $("#AKStill").show();
    $("#AK").hide();
    $("#BulletTop").hide();
    $("BulletBottom").hide();
    $("BulletLeft").hide();
    $("BulletRight").hide();
    break;
  } 
}); //key function end

    animateDiv();

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() ;
    var w = $(window).width() ;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
  //James change .a to .othercar
    $('#badone').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    
};
  //this is where the JavaScript collision starts. First we define all the variables of how the collision will happen
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    $('#result').text('False');
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('#main'), function() {
      if (collision($('.bad'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        $('#EndScreen').show();
        
        //all the actions that happen during a collision go here

      }
    });
  }, 200); //this is how often it checks for a collision
    //this is where the JavaScript collision starts. First we define all the variables of how the collision will happen
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    $('#result').text('False');
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.bullets'), function() {
      if (collision($('.bad'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
        $('#OnePoint').show();
        
        //all the actions that happen during a collision go here

      }
    });
  }, 200); //this is how often it checks for a collision


 
});//document