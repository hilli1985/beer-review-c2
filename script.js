const beers = [];

function addBeer(name, category) {
    let beer = { name: name, category: category };
    beers.push(beer);
    console.log(beers);
}

$('.post-beer').on('click', function() {
    addBeer($(".beer-input").val(), $(".category-input").val());
    renderBeers();
});

function renderBeers() {
    // alert('render');
    $(".beers-list").find('li').remove();
    for (let beer of beers) {
        $(".beers-list").append($("<li>").text(beer.name));
    }
}