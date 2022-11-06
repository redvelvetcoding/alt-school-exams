import React,{useState} from 'react';
import axios from 'axios';
import Result from './Result';
import { Link } from 'react-router-dom';


const SearchBar = ()=>{
const [searchInput,setSearchInput ] = useState('');
const [repos, setRepos] = useState([])

const handleChange = (e) =>{
    setSearchInput(e.target.value)
}

const handleClick = async () =>{
  console.log(searchInput);

  try{
    const result = await axios(`https://api.github.com/users/${searchInput}/repos`)
    setRepos(result);

  }catch(err){
    console.log(err);
  }

   
};
    return(
        <>
        <div>
          <div className='nav'>
          <Link to="/" className='nav1'>Homepage</Link>
            <Link to="Searchpage" className='nav1'>Searchpage</Link>
          </div>
          <h1>REPO SEARCH</h1>
           <div className='input'>
           <input type='text' placeholder='search' value={searchInput} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
            { repos ?<Result repos={repos}/>:<div>No repos found</div>}
           </div>
        </div>
       
         </>
    )
}

export default SearchBar;