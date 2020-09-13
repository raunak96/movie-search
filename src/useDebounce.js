import  { useEffect, useState } from 'react';

const useDebounce = (movieName, delay) => {
    const [searchQuery,setSearchQuery] = useState("");

    useEffect(()=>{
        const id = setTimeout(()=>setSearchQuery(movieName),delay);

        return ()=> clearTimeout(id);
    },[movieName,delay])

    return searchQuery;
};

export default useDebounce;