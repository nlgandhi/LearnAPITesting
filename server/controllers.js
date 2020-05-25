import { favMovies } from './models';

const getAllMovies = (req, res) => {
    return res.status(200).json({
        status: 'success',
        movies: favMovies
    });
};

export default getAllMovies;



