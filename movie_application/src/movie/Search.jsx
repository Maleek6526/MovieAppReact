import React from 'react';
import Card from "../Resueable/Card";
import {useGetSearchMoviesQuery} from "../service/movie_API";
import { useParams } from 'react-router-dom';

const Search = () => {
    const {query} = useParams();
    const {data, isLoading, isError} = useGetSearchMoviesQuery(query);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error :(</p>;

    return (
        <div>
            <Card data={data}/>
        </div>
    );
}

export default Search;