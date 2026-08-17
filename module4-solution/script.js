(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 11: Loop over the names array and say either 'Hello' or 'Good Bye'
  for (var i = 0; i < names.length; i++) {

    // STEP 12: Retrieve the first letter of the current name and convert to lowercase
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Compare the 'firstLetter' to 'j'
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();
