window.onload = main;

function main() {

  var houses = [
    'Stark', 'Arryn', 'Baratheon', 'Tully', 'Greyjoy', 'Lannister', 'Tyrell',
    'Martell ', 'Targaryen'
  ];

  var body = d3.select('body');

  body.append('h1').html('Houses of Westeros');

  var ul = body.append('ul');

  ul.select("li").data(houses).enter().append('li').html(function(d) {
    return d;
  });
}

