$(function(){
  $("form#formy").submit(function(event){
    event.preventDefault();
    var input = $("input#sentence").val(); // "so why word"
    var splits = input.split(" "); // ["so", "why", "word"]
    splits = splits.filter(function(word){
      return word.length > 2; // ["why", "word"]<--- >2 letters

    });
    splits = splits.reverse(); // ["word", "why"]
    var output = splits.join(" "); // "word why"
    $("#result").text(output); // displays it!!!
  });
});
