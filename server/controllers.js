const { favMovies } = require('./models')

const getAllMovies = (req, res) => {
    return res.status(200).json({
        status: 'success',
        movies: favMovies
    });
};

// console.log("Inside controllers File");
module.exports = getAllMovies;



