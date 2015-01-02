$(document).ready(function(){

    $("#submitButton").on("click", function() {
    event.preventDefault();
    console.log("Submit Button Clicked");
    $(".directions").fadeOut();
    getPhotos();
    $("#photos").show();

    });

});


var getPhotos = function() {

  var result = $.ajax({
    url: "https://api.instagram.com/v1/tags/parisfrance/media/recent?access_token=493860900.1fb234f.b7fe5dee22b542ca80c8c740db3b038d&callback=callbackFunction",  dataType: "jsonp",
    cache: false,
    type: "GET",
  })
  
  .done(function(result){

    console.log("success!");

      for(var x = 0; x < 20; x++) {

        console.log(result.data[x].images.thumbnail.url);

     var showPhoto = function() {

          var photo = $("#parisfrance").clone();

          photo.attr('src', result.data[x].images.thumbnail.url);
          photo.attr('id', result.data[x].images.thumbnail.url);

          return photo;
        }


      $("#photos").append(showPhoto);
    }
  }

)

}