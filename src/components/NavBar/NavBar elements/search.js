import React from "react";
import "../styles/search.css"

function Search() {
    return(
        <section className="searchbox-wrap">
            <input type="text" placeholder="Search for a movie" className="searchbox"/>
        </section>
    )
}

export default Search