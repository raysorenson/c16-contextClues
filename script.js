window.addEventListener("DOMContentLoaded", function () {
  
  var friends = ["Rachael", "Ralph", "Raquel", "Ronald", "Reuel"];
  
  var locations = [
    "basement.",
    "fruit cellar.",
    "wine cellar.",
    "crawl space.",
    "broom closet.",
    "pantry.",
    "attic.",
    "mud room.",
    "sauna.",
    "dungeon.",
  ];
  
  var weapons = [
    "the thimble",
    "the pillow",
    "the bag of popcorn",
    "harsh words",
    "a brow beating",
    "the garbage disposal",
    "the thermonuclear device",
    "tiresome stories",
    "the desktop speaker",
    "boiling sugar water",
    "sharks tooth",
    "the metal lathe",
    "the pencil",
    "the desk",
    "the corn plant",
    "the fire poker",
    "The Beatnik Reader",
    "The Communist Manifesto",
    "microagressions",
    "the tape measure",
  ];

  for (var i = 1; i < 101; i++) {
    //creates a header element w/text including loop iteration
    var header = this.document.createElement("h3");
    var text = this.document.createTextNode("Accusation " + [i]);
    header.append(text);
    document.body.append(header);

    header.addEventListener('click', function(){
        
        var iteration = parseInt(event.target.textContent.split(' ').pop());
        //removes the loop iteration number from the header text
        alert('Accusation ' + iteration + ': I accuse ' + friends[iteration % 5] + ' with the ' + weapons[iteration % 20] + ' in the ' + locations[iteration % 10])
        //modulus enables cycling through the arrays using the loop iteration
        
    })
    
  }

});
