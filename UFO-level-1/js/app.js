// from data.js
var tableData = data;

var dateTime = tableData.map(sighting => sighting.datetime);
var city = tableData.map(sighting => sighting.city)
var state = tableData.map(sighting => sighting.state);
var country = tableData.map(sighting => sighting.country);
var shape = tableData.map(sighting => sighting.shape);
var comments = tableData.map(sighting => sighting.comments);

function buildTable(dateTime, city, state, country, shape, comments) {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < 112; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(dateTime[i]);
      trow.append("td").text(city[i]);
      trow.append("td").text(state[i]);
      trow.append("td").text(country[i]);
      trow.append("td").text(shape[i]);
      trow.append("td").text(comments[i]);
    }
};
buildTable(dateTime, city, state, country, shape, comments);


var button = d3.select("#filter-btn");
var form = d3.select("#filters");

button.on("click", runEnter);
form.on("submit", runEnter);


function runEnter() {

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var results = tableData.filter(tableData => tableData.datetime === inputValue);
  
  var table = d3.select("#ufo-table");
  table.html("");

  function buildResults(results) {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < 112; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(results.dateTime[i]);
      trow.append("td").text(results.city[i]);
      trow.append("td").text(results.state[i]);
      trow.append("td").text(results.country[i]);
      trow.append("td").text(results.shape[i]);
      trow.append("td").text(results.comments[i]);
    };
  };
  buildResults(results);
};