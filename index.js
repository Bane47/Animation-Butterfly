// var images = ["./Assets/ButterFly-1.png", "./Assets/ButterFly-2.png", "./Assets/ButterFly-3.png", "./Assets/ButterFly-4.png", "./Assets/ButterFly-5.png"];
// var cowImages = ["./Assets/Cow-eating.png", "./Assets/Cow-looking.png"];
// var amplitude = 50; // Adjust the amplitude of the sine wave
// var frequency = 0.61; // Adjust the frequency of the sine wave
// var position = { x: 0, y: 0 };
// var flyIndex = 0;
// var cowIndex = 0;
// var count = 0;

// function moveClouds() {
//     var initialLeft = 0;
//     var initialTop = 100;
//     $('#clouds').css({ left: initialLeft, top: initialTop });

//     var finalLeft = 1500;
//     $('#clouds').animate({ left: finalLeft }, 6000, function() {
//         console.log("Clouds moved");
//         $('#clouds').hide();
//     });
// }

// function sceneOne() {
//     $(document).ready(function() {
//         $("body").css('backgroundImage', 'url("./Assets/Background-cartoon-1.PNG")');
//         $("body").css('backgroundRepeat', 'no-repeat');
//         $("body").css('backgroundSize', 'cover');
//     });
// }

// function fly() {
//     if (count < 70) {
//         $("#myImage").attr('src', images[flyIndex]);
//         flyIndex = (flyIndex + 1) % images.length;
//         count++;

//         var screenWidth = $(window).width();
//         var screenHeight = $(window).height();
//         var centerX = screenWidth / 2;
//         var centerY = screenHeight / 2;

//         // To move the image
//         position.x += 20;
//         position.y = centerY + amplitude * Math.sin(frequency * position.x);
//         $("#myImage").css('left', position.x + 'px');
//         $("#myImage").css('top', position.y + 'px');

//         setTimeout(fly, 100);
//     } else {
//         changeBackground();
//     }
// }

// function changeBackground() {
//     $(document).ready(function() {
//         $("body").css('backgroundImage', 'url("./Assets/Background-cartoon-4.png")');
//         $("body").css('backgroundSize', 'cover');
//         $("#cow").show(); // Show the cow image after the butterfly completes flying
//     });
// }

// function sceneTwo() {
//     $(document).ready(function() {
//         $("body").css('backgroundImage', 'url("./Assets/Background-cartoon-2.PNG")');
//         $("body").css('backgroundRepeat', 'no-repeat');
//         $("body").css('backgroundSize', 'cover');

//         if (count < 2) {
//             $("#cow").attr('src', cowImages[cowIndex]);
//             cowIndex = (cowIndex + 1) % cowImages.length;
//             count+1;
//         }
//     });
// }

// $(document).ready(function() {
//     // Set initial position
//     $("#myImage").css('position', 'absolute');

//     // Move clouds
//     moveClouds();

//     // Start scene one
//     sceneOne();

//     // Start flying butterflies
//     setTimeout(fly, 4500);

//     // Start scene two
//     setTimeout(sceneTwo, 1000);
// });

var images = ["./Assets/ButterFly-1.png", "./Assets/ButterFly-2.png", "./Assets/ButterFly-3.png", "./Assets/ButterFly-4.png", "./Assets/ButterFly-5.png"];
var flag = 0
var amplitude = 50; // Adjust the amplitude of the sine wave
var frequency = 0.61; // Adjust the frequency of the sine wave
var position = { x: 0, y: 0 };

$(document).ready(function() {
    var initialLeft = 0;
    var initialTop = 100;
    $('#clouds').css({ left: initialLeft, top: initialTop });

    function moveClouds() {
        var finalLeft = 1500;
        $('#clouds').animate({ left: finalLeft }, 6000, function() {
            console.log("Clouds moved");
            $('#clouds').hide();
            
        });
    }

    moveClouds();
});



// var currentIndex = 0;
// var count = 0;

// function sceneTwo() {
//     $(document).ready(function() {
//         $("body").css('backgroundImage', 'url("./Assets/Background-cartoon-2.PNG")');
//         $("body").css('backgroundRepeat', 'no-repeat');
//         $("body").css('backgroundSize', 'cover');

//         if (count < 4) {
//             $("#cow").attr('src', cowImages[currentIndex]);
//             currentIndex = (currentIndex + 1) % cowImages.length;
//             count++;
//         }
//     });
// }

var flyIndex = 0;

function fly() {
    if (count < 70) {
        $("#myImage").attr('src', images[flyIndex]);
        flyIndex = (flyIndex + 1) % images.length;
        count++;

        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        var centerX = screenWidth / 2;
        var centerY = screenHeight / 2;

        // To move the image
        position.x += 20;
        position.y = centerY + amplitude * Math.sin(frequency * position.x);
        $("#myImage").css('left', position.x + 'px');
        $("#myImage").css('top', position.y + 'px');

        setTimeout(fly, 100);
    } else {
        changeBackground();
    }
}

setTimeout(fly, 4500);

function changeBackground() {
    $(document).ready(function() {
        $("body").css('backgroundImage', 'url("./Assets/Background-cartoon-4.png")');
        $("body").css('backgroundSize', 'cover');
        $("#cow").show(); // Show the cow image after the butterfly completes flying
    });
}

$(document).ready(function() {
    // Set initial position
    $("#myImage").css('position', 'absolute');
});


var images = ["./Assets/ButterFly-1.png","./Assets/ButterFly-2.png","./Assets/ButterFly-3.png","./Assets/ButterFly-4.png","./Assets/ButterFly-5.png"]
var cowImages =["Assets/Cow-eating.png","./Assets/Cow-looking.png"] 
 

   
    
  var amplitude = 50; // Adjust the amplitude of the sine wave
  var frequency = 0.61; // Adjust the frequency of the sine wave
  var position = { x: 0, y: 0 };
  $(document).ready(function() {
            var initialLeft = 0;
            var initialTop = 100;
            $('#clouds').css({ left: initialLeft, top: initialTop });

            function moveClouds() {
                var finalLeft = 1500;
                $('#clouds').animate({ left: finalLeft }, 6000, function() {
                    console.log("Clouds moved");
                    $('#clouds').hide();
                },moveClouds());
            }

            ;
        });

function sceneOne(){
    // $("body").css('backgroundImage','Background-1.avif')
    $(document).ready(function(){

        $("body").css('backgroundImage', 'url("./Assets/Background-cartoon-1.PNG")');
        $("body").css('backgroundRepeat', 'no-repeat');
        $("body").css('backgroundSize', 'cover');

        //  $("body").addClass("background1")
})
   

}

sceneOne()



var currentIndex = 0;
var count = 0;
  function fly(){

    // $("body").css('background-color','blue')
    // setTimeout(changeBackground,5000)

   
    // $("body").css('backgroundImage','url("./Assets/Background-cartoon-4.png")')
    // $("body").css('backgroundSize', 'cover');


  
            if(count<80){

$("#myImage").attr('src',images[currentIndex]);
currentIndex = (currentIndex+1) % images.length;
count++;

var screenWidth = $(window).width();
var screenHeight = $(window).height();
var centerX = screenWidth/2;
var centerY = screenHeight/2;

//to move the image
position.x += 20;
      position.y = centerY +amplitude * Math.sin(frequency * position.x);
      $("#myImage").css('left', position.x + 'px');
      $("#myImage").css('top', position.y + 'px');



      

        }
 
setTimeout(fly,100);
     }
     flag++
setTimeout(fly,4500)
console.log("flag number is")

    
$(document).ready(function() {
            // Set initial position
           $("#myImage").css('position', 'absolute');
           
          
 


        });



 var cowImages = ["./Assets/Cow-eating.png", "./Assets/Cow-looking.png"];

var cowIndex = 0;
var count = 0
function sceneTwo(){

    console.log("Hello")

    $(document).ready(function(){
        $("body").css('backgroundImage', 'url("./Assets/Background-cartoon-2.PNG")');
        $("body").css('backgroundRepeat', 'no-repeat');
        $("body").css('backgroundSize', 'cover');

if(count<4){
    $("#cow").attr('src',cowImages[cowIndex]);
    cowIndex = (cowIndex+1) % cowImages.length;
    count++;
   
    setTimeout(sceneTwo,2000)
}


    })
}


setTimeout(sceneTwo,2000)
