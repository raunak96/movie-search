const { createContext } = require("react");

const MoviesContext= createContext({
    movies:[],
    setMoviesData:()=>{}
});
export default MoviesContext;