import React from "react";
import { Link } from "react-router-dom";


function Home () {
    return(
        <section>
           <div className="nav">
           <Link to="/" className='nav1'>Home</Link>
            <Link to="searchpage" className='nav1'>Search</Link>
           </div>
           <div className="home">
            <h1>ALT SCHOOL EXAMINATION</h1>
            <p>frontend of the school of Enginnering</p>
           </div>
        </section>
    )
};

export default Home;