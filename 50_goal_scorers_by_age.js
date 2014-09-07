$(function() {

var svgWidth = 1200;
var svgHeight = 600;
var padding = 60;

var svg = d3.select(".bar-chart")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

  var dataset = [{"name":"Maurice Richard","age":24,"season":"1944-1945","dob":"August  4, 1921"},{"name":"Bernie Geoffrion","age":30,"season":"1960-1961","dob":"February 16, 1931"},{"name":"Bobby Hull","age":23,"season":"1961-1962","dob":"January  3, 1939"},{"name":"Bobby Hull","age":27,"season":"1965-1966","dob":"January  3, 1939"},{"name":"Bobby Hull","age":28,"season":"1966-1967","dob":"January  3, 1939"},{"name":"Bobby Hull","age":30,"season":"1968-1969","dob":"January  3, 1939"},{"name":"Phil Esposito","age":29,"season":"1970-1971","dob":"February 20, 1942"},{"name":"Johnny Bucyk","age":36,"season":"1970-1971","dob":"May 12, 1935"},{"name":"Phil Esposito","age":30,"season":"1971-1972","dob":"February 20, 1942"},{"name":"Vic Hadfield","age":32,"season":"1971-1972","dob":"October  4, 1940"},{"name":"Bobby Hull","age":33,"season":"1971-1972","dob":"January  3, 1939"},{"name":"Phil Esposito","age":31,"season":"1972-1973","dob":"February 20, 1942"},{"name":"Mickey Redmond","age":26,"season":"1972-1973","dob":"December 27, 1947"},{"name":"Rick MacLeish","age":23,"season":"1972-1973","dob":"January  3, 1950"},{"name":"Phil Esposito","age":32,"season":"1973-1974","dob":"February 20, 1942"},{"name":"Rick Martin","age":23,"season":"1973-1974","dob":"July 26, 1951"},{"name":"Mickey Redmond","age":27,"season":"1973-1974","dob":"December 27, 1947"},{"name":"Ken Hodge","age":30,"season":"1973-1974","dob":"June 25, 1944"},{"name":"Phil Esposito","age":33,"season":"1974-1975","dob":"February 20, 1942"},{"name":"Guy Lafleur","age":24,"season":"1974-1975","dob":"September 20, 1951"},{"name":"Rick Martin","age":24,"season":"1974-1975","dob":"July 26, 1951"},{"name":"Danny Grant","age":29,"season":"1974-1975","dob":"February 21, 1946"},{"name":"Reggie Leach","age":26,"season":"1975-1976","dob":"April 23, 1950"},{"name":"Guy Lafleur","age":25,"season":"1975-1976","dob":"September 20, 1951"},{"name":"Pierre Larouche","age":21,"season":"1975-1976","dob":"November 16, 1955"},{"name":"Jean Pronovost","age":31,"season":"1975-1976","dob":"December 18, 1945"},{"name":"Danny Gare","age":22,"season":"1975-1976","dob":"May 14, 1954"},{"name":"Bill Barber","age":24,"season":"1975-1976","dob":"July 11, 1952"},{"name":"Steve Shutt","age":25,"season":"1976-1977","dob":"July  1, 1952"},{"name":"Guy Lafleur","age":26,"season":"1976-1977","dob":"September 20, 1951"},{"name":"Marcel Dionne","age":26,"season":"1976-1977","dob":"August  3, 1951"},{"name":"Guy Lafleur","age":27,"season":"1977-1978","dob":"September 20, 1951"},{"name":"Mike Bossy","age":21,"season":"1977-1978","dob":"January 22, 1957"},{"name":"Mike Bossy","age":22,"season":"1978-1979","dob":"January 22, 1957"},{"name":"Marcel Dionne","age":28,"season":"1978-1979","dob":"August  3, 1951"},{"name":"Guy Lafleur","age":28,"season":"1978-1979","dob":"September 20, 1951"},{"name":"Guy Chouinard","age":23,"season":"1978-1979","dob":"October 20, 1956"},{"name":"Charlie Simmer","age":26,"season":"1979-1980","dob":"March 20, 1954"},{"name":"Danny Gare","age":26,"season":"1979-1980","dob":"May 14, 1954"},{"name":"Blaine Stoughton","age":27,"season":"1979-1980","dob":"March 13, 1953"},{"name":"Marcel Dionne","age":29,"season":"1979-1980","dob":"August  3, 1951"},{"name":"Mike Bossy","age":23,"season":"1979-1980","dob":"January 22, 1957"},{"name":"Wayne Gretzky","age":19,"season":"1979-1980","dob":"January 26, 1961"},{"name":"Pierre Larouche","age":25,"season":"1979-1980","dob":"November 16, 1955"},{"name":"Guy Lafleur","age":29,"season":"1979-1980","dob":"September 20, 1951"},{"name":"Reggie Leach","age":30,"season":"1979-1980","dob":"April 23, 1950"},{"name":"Mike Bossy","age":24,"season":"1980-1981","dob":"January 22, 1957"},{"name":"Marcel Dionne","age":30,"season":"1980-1981","dob":"August  3, 1951"},{"name":"Charlie Simmer","age":27,"season":"1980-1981","dob":"March 20, 1954"},{"name":"Wayne Gretzky","age":20,"season":"1980-1981","dob":"January 26, 1961"},{"name":"Rick Kehoe","age":30,"season":"1980-1981","dob":"July 15, 1951"},{"name":"Wayne Babych","age":23,"season":"1980-1981","dob":"June  6, 1958"},{"name":"Jacques Richard","age":29,"season":"1980-1981","dob":"October  7, 1952"},{"name":"Dennis Maruk","age":26,"season":"1980-1981","dob":"November 17, 1955"},{"name":"Wayne Gretzky","age":21,"season":"1981-1982","dob":"January 26, 1961"},{"name":"Mike Bossy","age":25,"season":"1981-1982","dob":"January 22, 1957"},{"name":"Dennis Maruk","age":27,"season":"1981-1982","dob":"November 17, 1955"},{"name":"Dino Ciccarelli","age":22,"season":"1981-1982","dob":"February  8, 1960"},{"name":"Rick Vaive","age":23,"season":"1981-1982","dob":"May 14, 1959"},{"name":"Blaine Stoughton","age":29,"season":"1981-1982","dob":"March 13, 1953"},{"name":"Rick Middleton","age":29,"season":"1981-1982","dob":"December  4, 1953"},{"name":"Marcel Dionne","age":31,"season":"1981-1982","dob":"August  3, 1951"},{"name":"Mark Messier","age":21,"season":"1981-1982","dob":"January 18, 1961"},{"name":"Bryan Trottier","age":26,"season":"1981-1982","dob":"July 17, 1956"},{"name":"Wayne Gretzky","age":22,"season":"1982-1983","dob":"January 26, 1961"},{"name":"Lanny McDonald","age":30,"season":"1982-1983","dob":"February 16, 1953"},{"name":"Mike Bossy","age":26,"season":"1982-1983","dob":"January 22, 1957"},{"name":"Michel Goulet","age":23,"season":"1982-1983","dob":"April 21, 1960"},{"name":"Marcel Dionne","age":32,"season":"1982-1983","dob":"August  3, 1951"},{"name":"Al Secord","age":25,"season":"1982-1983","dob":"March  3, 1958"},{"name":"Rick Vaive","age":24,"season":"1982-1983","dob":"May 14, 1959"},{"name":"Wayne Gretzky","age":23,"season":"1983-1984","dob":"January 26, 1961"},{"name":"Michel Goulet","age":24,"season":"1983-1984","dob":"April 21, 1960"},{"name":"Tim Kerr","age":24,"season":"1983-1984","dob":"January  5, 1960"},{"name":"Glenn Anderson","age":24,"season":"1983-1984","dob":"October  2, 1960"},{"name":"Jari Kurri","age":24,"season":"1983-1984","dob":"May 18, 1960"},{"name":"Rick Vaive","age":25,"season":"1983-1984","dob":"May 14, 1959"},{"name":"Mike Bossy","age":27,"season":"1983-1984","dob":"January 22, 1957"},{"name":"Mike Bullard","age":23,"season":"1983-1984","dob":"March 10, 1961"},{"name":"Wayne Gretzky","age":24,"season":"1984-1985","dob":"January 26, 1961"},{"name":"Jari Kurri","age":25,"season":"1984-1985","dob":"May 18, 1960"},{"name":"Mike Bossy","age":28,"season":"1984-1985","dob":"January 22, 1957"},{"name":"Michel Goulet","age":25,"season":"1984-1985","dob":"April 21, 1960"},{"name":"John Ogrodnick","age":26,"season":"1984-1985","dob":"June 20, 1959"},{"name":"Tim Kerr","age":25,"season":"1984-1985","dob":"January  5, 1960"},{"name":"Bobby Carpenter","age":22,"season":"1984-1985","dob":"July 13, 1963"},{"name":"Dale Hawerchuk","age":22,"season":"1984-1985","dob":"April  4, 1963"},{"name":"Mike Gartner","age":26,"season":"1984-1985","dob":"October 29, 1959"},{"name":"Jari Kurri","age":26,"season":"1985-1986","dob":"May 18, 1960"},{"name":"Mike Bossy","age":29,"season":"1985-1986","dob":"January 22, 1957"},{"name":"Tim Kerr","age":26,"season":"1985-1986","dob":"January  5, 1960"},{"name":"Glenn Anderson","age":26,"season":"1985-1986","dob":"October  2, 1960"},{"name":"Michel Goulet","age":26,"season":"1985-1986","dob":"April 21, 1960"},{"name":"Wayne Gretzky","age":25,"season":"1985-1986","dob":"January 26, 1961"},{"name":"Wayne Gretzky","age":26,"season":"1986-1987","dob":"January 26, 1961"},{"name":"Tim Kerr","age":27,"season":"1986-1987","dob":"January  5, 1960"},{"name":"Mario Lemieux","age":22,"season":"1986-1987","dob":"October  5, 1965"},{"name":"Jari Kurri","age":27,"season":"1986-1987","dob":"May 18, 1960"},{"name":"Dino Ciccarelli","age":27,"season":"1986-1987","dob":"February  8, 1960"},{"name":"Mario Lemieux","age":23,"season":"1987-1988","dob":"October  5, 1965"},{"name":"Craig Simpson","age":21,"season":"1987-1988","dob":"February 15, 1967"},{"name":"Jimmy Carson","age":20,"season":"1987-1988","dob":"July 20, 1968"},{"name":"Luc Robitaille","age":22,"season":"1987-1988","dob":"February 17, 1966"},{"name":"Joe Nieuwendyk","age":22,"season":"1987-1988","dob":"September 10, 1966"},{"name":"Steve Yzerman","age":23,"season":"1987-1988","dob":"May  9, 1965"},{"name":"Stephane Richer","age":22,"season":"1987-1988","dob":"June  7, 1966"},{"name":"Hakan Loob","age":28,"season":"1987-1988","dob":"July  3, 1960"},{"name":"Mario Lemieux","age":24,"season":"1988-1989","dob":"October  5, 1965"},{"name":"Bernie Nicholls","age":28,"season":"1988-1989","dob":"June 24, 1961"},{"name":"Steve Yzerman","age":24,"season":"1988-1989","dob":"May  9, 1965"},{"name":"Wayne Gretzky","age":28,"season":"1988-1989","dob":"January 26, 1961"},{"name":"Joe Nieuwendyk","age":23,"season":"1988-1989","dob":"September 10, 1966"},{"name":"Joe Mullen","age":32,"season":"1988-1989","dob":"February 26, 1957"},{"name":"Brett Hull","age":26,"season":"1989-1990","dob":"August  9, 1964"},{"name":"Steve Yzerman","age":25,"season":"1989-1990","dob":"May  9, 1965"},{"name":"Cam Neely","age":25,"season":"1989-1990","dob":"June  6, 1965"},{"name":"Brian Bellows","age":26,"season":"1989-1990","dob":"September  1, 1964"},{"name":"Pat LaFontaine","age":25,"season":"1989-1990","dob":"February 22, 1965"},{"name":"Luc Robitaille","age":24,"season":"1989-1990","dob":"February 17, 1966"},{"name":"Stephane Richer","age":24,"season":"1989-1990","dob":"June  7, 1966"},{"name":"Gary Leeman","age":26,"season":"1989-1990","dob":"February 19, 1964"},{"name":"Brett Hull","age":27,"season":"1990-1991","dob":"August  9, 1964"},{"name":"Cam Neely","age":26,"season":"1990-1991","dob":"June  6, 1965"},{"name":"Theoren Fleury","age":23,"season":"1990-1991","dob":"June 29, 1968"},{"name":"Steve Yzerman","age":26,"season":"1990-1991","dob":"May  9, 1965"},{"name":"Brett Hull","age":28,"season":"1991-1992","dob":"August  9, 1964"},{"name":"Kevin Stevens","age":27,"season":"1991-1992","dob":"April 15, 1965"},{"name":"Gary Roberts","age":26,"season":"1991-1992","dob":"May 23, 1966"},{"name":"Jeremy Roenick","age":22,"season":"1991-1992","dob":"January 17, 1970"},{"name":"Alexander Mogilny","age":24,"season":"1992-1993","dob":"February 18, 1969"},{"name":"Teemu Selanne","age":23,"season":"1992-1993","dob":"July  3, 1970"},{"name":"Mario Lemieux","age":28,"season":"1992-1993","dob":"October  5, 1965"},{"name":"Luc Robitaille","age":27,"season":"1992-1993","dob":"February 17, 1966"},{"name":"Pavel Bure","age":22,"season":"1992-1993","dob":"March 31, 1971"},{"name":"Pierre Turgeon","age":24,"season":"1992-1993","dob":"August 28, 1969"},{"name":"Steve Yzerman","age":28,"season":"1992-1993","dob":"May  9, 1965"},{"name":"Kevin Stevens","age":28,"season":"1992-1993","dob":"April 15, 1965"},{"name":"Brett Hull","age":29,"season":"1992-1993","dob":"August  9, 1964"},{"name":"Dave Andreychuk","age":30,"season":"1992-1993","dob":"September 29, 1963"},{"name":"Pat LaFontaine","age":28,"season":"1992-1993","dob":"February 22, 1965"},{"name":"Mark Recchi","age":25,"season":"1992-1993","dob":"February  1, 1968"},{"name":"Brendan Shanahan","age":24,"season":"1992-1993","dob":"January 23, 1969"},{"name":"Jeremy Roenick","age":23,"season":"1992-1993","dob":"January 17, 1970"},{"name":"Pavel Bure","age":23,"season":"1993-1994","dob":"March 31, 1971"},{"name":"Brett Hull","age":30,"season":"1993-1994","dob":"August  9, 1964"},{"name":"Sergei Fedorov","age":25,"season":"1993-1994","dob":"December 13, 1969"},{"name":"Dave Andreychuk","age":31,"season":"1993-1994","dob":"September 29, 1963"},{"name":"Brendan Shanahan","age":25,"season":"1993-1994","dob":"January 23, 1969"},{"name":"Ray Sheppard","age":28,"season":"1993-1994","dob":"May 27, 1966"},{"name":"Adam Graves","age":26,"season":"1993-1994","dob":"April 12, 1968"},{"name":"Cam Neely","age":29,"season":"1993-1994","dob":"June  6, 1965"},{"name":"Mike Modano","age":24,"season":"1993-1994","dob":"June  7, 1970"},{"name":"Mario Lemieux","age":31,"season":"1995-1996","dob":"October  5, 1965"},{"name":"Jaromir Jagr","age":24,"season":"1995-1996","dob":"February 15, 1972"},{"name":"Alexander Mogilny","age":27,"season":"1995-1996","dob":"February 18, 1969"},{"name":"Peter Bondra","age":28,"season":"1995-1996","dob":"February  7, 1968"},{"name":"John LeClair","age":27,"season":"1995-1996","dob":"July  5, 1969"},{"name":"Joe Sakic","age":27,"season":"1995-1996","dob":"July  7, 1969"},{"name":"Keith Tkachuk","age":24,"season":"1995-1996","dob":"March 28, 1972"},{"name":"Paul Kariya","age":22,"season":"1995-1996","dob":"October 16, 1974"},{"name":"Keith Tkachuk","age":25,"season":"1996-1997","dob":"March 28, 1972"},{"name":"Teemu Selanne","age":27,"season":"1996-1997","dob":"July  3, 1970"},{"name":"Mario Lemieux","age":32,"season":"1996-1997","dob":"October  5, 1965"},{"name":"John LeClair","age":28,"season":"1996-1997","dob":"July  5, 1969"},{"name":"Teemu Selanne","age":28,"season":"1997-1998","dob":"July  3, 1970"},{"name":"Peter Bondra","age":30,"season":"1997-1998","dob":"February  7, 1968"},{"name":"Pavel Bure","age":27,"season":"1997-1998","dob":"March 31, 1971"},{"name":"John LeClair","age":29,"season":"1997-1998","dob":"July  5, 1969"},{"name":"Pavel Bure","age":29,"season":"1999-2000","dob":"March 31, 1971"},{"name":"Pavel Bure","age":30,"season":"2000-2001","dob":"March 31, 1971"},{"name":"Joe Sakic","age":32,"season":"2000-2001","dob":"July  7, 1969"},{"name":"Jaromir Jagr","age":29,"season":"2000-2001","dob":"February 15, 1972"},{"name":"Jarome Iginla","age":25,"season":"2001-2002","dob":"July  1, 1977"},{"name":"Milan Hejduk","age":27,"season":"2002-2003","dob":"February 14, 1976"},{"name":"Jonathan Cheechoo","age":26,"season":"2005-2006","dob":"July 15, 1980"},{"name":"Jaromir Jagr","age":34,"season":"2005-2006","dob":"February 15, 1972"},{"name":"Ilya Kovalchuk","age":23,"season":"2005-2006","dob":"April 15, 1983"},{"name":"Alexander Ovechkin","age":21,"season":"2005-2006","dob":"September 17, 1985"},{"name":"Dany Heatley","age":25,"season":"2005-2006","dob":"January 21, 1981"},{"name":"Vincent Lecavalier","age":27,"season":"2006-2007","dob":"April 21, 1980"},{"name":"Dany Heatley","age":26,"season":"2006-2007","dob":"January 21, 1981"},{"name":"Alexander Ovechkin","age":23,"season":"2007-2008","dob":"September 17, 1985"},{"name":"Ilya Kovalchuk","age":25,"season":"2007-2008","dob":"April 15, 1983"},{"name":"Jarome Iginla","age":31,"season":"2007-2008","dob":"July  1, 1977"},{"name":"Alexander Ovechkin","age":24,"season":"2008-2009","dob":"September 17, 1985"},{"name":"Sidney Crosby","age":23,"season":"2009-2010","dob":"August  7, 1987"},{"name":"Steven Stamkos","age":20,"season":"2009-2010","dob":"February  7, 1990"},{"name":"Alexander Ovechkin","age":25,"season":"2009-2010","dob":"September 17, 1985"},{"name":"Corey Perry","age":26,"season":"2010-2011","dob":"May 16, 1985"},{"name":"Steven Stamkos","age":22,"season":"2011-2012","dob":"February  7, 1990"},{"name":"Evgeni Malkin","age":26,"season":"2011-2012","dob":"July 31, 1986"},{"name":"Alexander Ovechkin","age":29,"season":"2013-2014","dob":"September 17, 1985"}];

var ordered_hash = {}

for (var i=0; i<dataset.length; i++) {
  var player = dataset[i];

  if (!ordered_hash[player.age]) {
    ordered_hash[player.age] = [];
  }

  ordered_hash[player.age].push(player)
}

///////// CREATE BOTTOM X AXIS

var xScale = d3.scale.ordinal().domain([18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]).rangePoints([0, (svgWidth - 2*padding)]);

var xAxis = d3.svg.axis()
              .scale(xScale)
              .orient("bottom");

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + "," + (svgHeight - padding) + ")")
    .call(xAxis);

////////// CREATE LEFT Y AXIS

var yScale = d3.scale.linear().domain([27,0]).range([0, (svgHeight - 2*padding)]);

var yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(28);

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

var rect_width = (svgWidth - 2*padding)/(37-18);
var rect_height = (svgHeight - 2*padding)/28;

for (var age in ordered_hash) {
  var array = ordered_hash[age]

  var x_coordinate = (age - 18.5)*rect_width + padding;

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
