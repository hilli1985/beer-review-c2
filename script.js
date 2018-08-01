const beers = [];
let sortLogic = true;

function addBeer(name, category, rate) {
    let beer = { name: name, category: category, rate: rate };
    beers.push(beer);
    console.log(beers);
}

$('.post-beer').on('click', function() {
    addBeer($(".beer-input").val(), $(".category-input").val(), $(".rate-input option:selected").text());
    renderBeers();
});
$('.sort-beer').on('click', function() {
    if (sortLogic) {
        beers.sort(function(a, b) { return (a.rate - b.rate) });
        sortLogic = false;
    } else {
        beers.sort(function(a, b) { return (b.rate - a.rate) });
        sortLogic = true;
    }
    renderBeers();
});

function renderBeers() {
    let rate = "";
    $(".beers-list").find('li').remove();
    for (let beer of beers) {
        if (parseInt(beer.rate) >= 0) {
            rate = " , " + beer.rate + "-stars";
        }
        $(".beers-list").append($("<li>").text(beer.name + " , " + beer.category + rate));
    }
}