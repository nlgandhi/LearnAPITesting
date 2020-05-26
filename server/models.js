const favMovies = [
    {
        id: 1,
        title: 'Inception',
        actor: 'Leonardo DiCaprio',
        year: 2010
    },
    {
        id: 2,
        title: 'Mission Impossible: Gost Protocol',
        actor: 'Tom Cruise',
        year: 2011
    },
    {
        id: 3,
        title: 'Dark Knight',
        actor: 'Christian Bale',
        year: 2008
    },
    {
        id: 3,
        title: 'Mission Impossible',
        actor: 'Tom Cruise',
        year: 2003
    }
];

const favFood = [
    {
        id: 1,
        name: 'Oha Soup',
        tribe: "Igbo"
    },
    {
        id: 2,
        name: 'Black soup',
        tribe: 'Edo'
    },
    {
        id: 3,
        name: 'Jollof',
        tribe: 'Heaven'
    }
];

console.log("Inside Models File");
console.log(favMovies);

module.exports = {
    favMovies, favFood
}