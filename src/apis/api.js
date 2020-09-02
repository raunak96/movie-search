import axios from "axios";

const FetchMovies =async (title,cancelToken) => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${title}&page=1`;
    
        if(title==="")
            return [];
        try {
            const res = await axios.get(URL, {
                cancelToken:cancelToken.token,
            });
            return res.data.results;
        } catch (error) {
            if (axios.isCancel(error)) return;
            console.log(error.response.data);
        }
    }
export default FetchMovies;