string file="file:///home/lucky/Documents/websites/experiments/shitwhat";

var reader = new FileReader();

reader.onload = function(e) {
  var text = reader.result;
}

reader.readAsText(file, encoding);

return (text);
