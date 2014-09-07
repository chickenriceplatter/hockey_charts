$(function() {

var svgWidth = 1200;
var svgHeight = 600;
var padding = 60;

var svg = d3.select(".bar-chart")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

var dataset = [{"name":"Elmer Lach","age":30,"season":"1947-1948","dob":"January 22, 1918"},{"name":"Roy Conacher","age":33,"season":"1948-1949","dob":"October  5, 1916"},{"name":"Ted Lindsay","age":25,"season":"1949-1950","dob":"July 29, 1925"},{"name":"Gordie Howe","age":23,"season":"1950-1951","dob":"March 31, 1928"},{"name":"Gordie Howe","age":24,"season":"1951-1952","dob":"March 31, 1928"},{"name":"Gordie Howe","age":25,"season":"1952-1953","dob":"March 31, 1928"},{"name":"Gordie Howe","age":26,"season":"1953-1954","dob":"March 31, 1928"},{"name":"Bernie Geoffrion","age":24,"season":"1954-1955","dob":"February 16, 1931"},{"name":"Jean Beliveau","age":25,"season":"1955-1956","dob":"August 31, 1931"},{"name":"Gordie Howe","age":29,"season":"1956-1957","dob":"March 31, 1928"},{"name":"Dickie Moore","age":27,"season":"1957-1958","dob":"January  6, 1931"},{"name":"Dickie Moore","age":28,"season":"1958-1959","dob":"January  6, 1931"},{"name":"Bobby Hull","age":21,"season":"1959-1960","dob":"January  3, 1939"},{"name":"Bernie Geoffrion","age":30,"season":"1960-1961","dob":"February 16, 1931"},{"name":"Bobby Hull","age":23,"season":"1961-1962","dob":"January  3, 1939"},{"name":"Gordie Howe","age":35,"season":"1962-1963","dob":"March 31, 1928"},{"name":"Stan Mikita","age":24,"season":"1963-1964","dob":"May 20, 1940"},{"name":"Stan Mikita","age":25,"season":"1964-1965","dob":"May 20, 1940"},{"name":"Bobby Hull","age":27,"season":"1965-1966","dob":"January  3, 1939"},{"name":"Stan Mikita","age":27,"season":"1966-1967","dob":"May 20, 1940"},{"name":"Stan Mikita","age":28,"season":"1967-1968","dob":"May 20, 1940"},{"name":"Phil Esposito","age":27,"season":"1968-1969","dob":"February 20, 1942"},{"name":"Bobby Orr","age":22,"season":"1969-1970","dob":"March 20, 1948"},{"name":"Phil Esposito","age":29,"season":"1970-1971","dob":"February 20, 1942"},{"name":"Phil Esposito","age":30,"season":"1971-1972","dob":"February 20, 1942"},{"name":"Phil Esposito","age":31,"season":"1972-1973","dob":"February 20, 1942"},{"name":"Phil Esposito","age":32,"season":"1973-1974","dob":"February 20, 1942"},{"name":"Bobby Orr","age":27,"season":"1974-1975","dob":"March 20, 1948"},{"name":"Guy Lafleur","age":25,"season":"1975-1976","dob":"September 20, 1951"},{"name":"Guy Lafleur","age":26,"season":"1976-1977","dob":"September 20, 1951"},{"name":"Guy Lafleur","age":27,"season":"1977-1978","dob":"September 20, 1951"},{"name":"Bryan Trottier","age":23,"season":"1978-1979","dob":"July 17, 1956"},{"name":"Marcel Dionne","age":29,"season":"1979-1980","dob":"August  3, 1951"},{"name":"Wayne Gretzky","age":20,"season":"1980-1981","dob":"January 26, 1961"},{"name":"Wayne Gretzky","age":21,"season":"1981-1982","dob":"January 26, 1961"},{"name":"Wayne Gretzky","age":22,"season":"1982-1983","dob":"January 26, 1961"},{"name":"Wayne Gretzky","age":23,"season":"1983-1984","dob":"January 26, 1961"},{"name":"Wayne Gretzky","age":24,"season":"1984-1985","dob":"January 26, 1961"},{"name":"Wayne Gretzky","age":25,"season":"1985-1986","dob":"January 26, 1961"},{"name":"Wayne Gretzky","age":26,"season":"1986-1987","dob":"January 26, 1961"},{"name":"Mario Lemieux","age":23,"season":"1987-1988","dob":"October  5, 1965"},{"name":"Mario Lemieux","age":24,"season":"1988-1989","dob":"October  5, 1965"},{"name":"Wayne Gretzky","age":29,"season":"1989-1990","dob":"January 26, 1961"},{"name":"Wayne Gretzky","age":30,"season":"1990-1991","dob":"January 26, 1961"},{"name":"Mario Lemieux","age":27,"season":"1991-1992","dob":"October  5, 1965"},{"name":"Mario Lemieux","age":28,"season":"1992-1993","dob":"October  5, 1965"},{"name":"Wayne Gretzky","age":33,"season":"1993-1994","dob":"January 26, 1961"},{"name":"Jaromír Jagr","age":23,"season":"1994-1995","dob":"February 15, 1972"},{"name":"Mario Lemieux","age":31,"season":"1995-1996","dob":"October  5, 1965"},{"name":"Mario Lemieux","age":32,"season":"1996-1997","dob":"October  5, 1965"},{"name":"Jaromír Jagr","age":26,"season":"1997-1998","dob":"February 15, 1972"},{"name":"Jaromír Jagr","age":27,"season":"1998-1999","dob":"February 15, 1972"},{"name":"Jaromír Jagr","age":28,"season":"1999-2000","dob":"February 15, 1972"},{"name":"Jaromír Jagr","age":29,"season":"2000-2001","dob":"February 15, 1972"},{"name":"Jarome Iginla","age":25,"season":"2001-2002","dob":"July  1, 1977"},{"name":"Peter Forsberg","age":30,"season":"2002-2003","dob":"July 20, 1973"},{"name":"Martin St Louis","age":29,"season":"2003-2004","dob":"June 18, 1975"},{"name":"Joe Thornton","age":27,"season":"2005-2006","dob":"July  2, 1979"},{"name":"Sidney Crosby","age":20,"season":"2006-2007","dob":"August  7, 1987"},{"name":"Alexander Ovechkin","age":23,"season":"2007-2008","dob":"September 17, 1985"},{"name":"Evgeni Malkin","age":23,"season":"2008-2009","dob":"July 31, 1986"},{"name":"Henrik Sedin","age":30,"season":"2009-2010","dob":"September 26, 1980"},{"name":"Daniel Sedin","age":31,"season":"2010-2011","dob":"September 26, 1980"},{"name":"Evgeni Malkin","age":26,"season":"2011-2012","dob":"July 31, 1986"},{"name":"Martin St Louis","age":38,"season":"2012-2013","dob":"June 18, 1975"},{"name":"Sidney Crosby","age":27,"season":"2013-2014","dob":"August  7, 1987"}];

var ordered_hash = {}

for (var i=0; i<dataset.length; i++) {
  var player = dataset[i];

  if (!ordered_hash[player.age]) {
    ordered_hash[player.age] = [];
  }

  ordered_hash[player.age].push(player)
}

///////// CREATE BOTTOM X AXIS

var xScale = d3.scale.linear().domain([19,39]).range([0, (svgWidth - 2*padding)]);

var xAxis = d3.svg.axis()
              .scale(xScale)
              .orient("bottom")
              .ticks(20);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + "," + (svgHeight - padding) + ")")
    .call(xAxis);

////////// CREATE LEFT Y AXIS

var yScale = d3.scale.linear().domain([10,0]).range([0, (svgHeight - 2*padding)]);

var yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(11);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + "," + padding + ")")
    .call(yAxis);


//////////// ADD Y AXIS LABEL

svg.append("text")
    .attr("class", "label")
    .attr("text-anchor", "end")
    .attr("y", padding)
    .attr("x", -padding)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("number of players by age");

/////////// ADD BARS

var rect_width = (svgWidth - 2*padding)/(39-19);
var rect_height = (svgHeight - 2*padding)/10;

for (var age in ordered_hash) {
  var array = ordered_hash[age]

  var x_coordinate = (age - 19.5)*rect_width + padding;

  for (var i=0; i<array.length; i++) {
    var y_coordinate = svgHeight - padding - (i+1)*rect_height
    var rectangle = svg.append("rect")
        .attr("x", x_coordinate)
        .attr("y", y_coordinate)
        .attr("width", rect_width)
        .attr("height", rect_height)
        .attr("name", array[i].name)
        .attr("season", array[i].season)
        .attr("age", array[i].age)
        .attr("dob", array[i].dob);
  }
}

// $("rect")[0].getAttribute("width")

//////////////// ADD DATA BOX

svg.selectAll("rect")
    .on("mouseover", function(d) {
    //Get this bar's x/y values, then augment for the data-box
      var xPosition = parseFloat(d3.select(this).attr("x"));
      var yPosition = parseFloat(d3.select(this).attr("y"));
    //Update the data-box position and value
    d3.select(".data-box")
      .style("left", (xPosition + svgWidth/13) + "px")
      .style("top", (yPosition + svgHeight/15) + "px");

    d3.select(".line-one").text(d3.select(this).attr("name"));
    d3.select(".line-two").text("season: " + d3.select(this).attr("season"));
    d3.select(".line-three").text("age: " + d3.select(this).attr("age"));
    d3.select(".line-four").text("DOB: " + d3.select(this).attr("dob"));

    $(".data-box").toggleClass("hidden");
  })
    .on("mouseout", function() {
      $(".data-box").toggleClass("hidden");
});


});
