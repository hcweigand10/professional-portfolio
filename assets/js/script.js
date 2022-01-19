var requestUrl = "https://tedlassoquotes.com/v1/quote"
var lassoBtn = $("#lassoBtn")

// fetch request
function textLasso () {
    console.log("click")
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var quote = data.quote;
        console.log(quote);
        var author = data.author
        console.log(author);
        var img = data.profile_img
      });
  }

// lassoBtn.on("click", function () {
//     console.log("click");
// });

lassoBtn.on("click", textLasso);
