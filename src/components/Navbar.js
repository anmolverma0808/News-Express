import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){

    const [searchInput,setSearchInput] = React.useState("");

    function handleOnChange(e){
        setSearchInput(e.target.value);
        console.log(searchInput);
    }

    function createDate(){
        const date = new Date();
        const d = date.toDateString();
        const dt = d.split(" ").join(",")
        return dt;
    }

    function changeInput(){
        setSearchInput('')
    }

    return (
        <header>
            <div className="top-content">
                <div className="date">
                    {createDate()}
                </div>
                <div className="logo-title">
                    <Link to="/home"><img src="favicon-96x96.png" alt="."></img></Link>
                    <h1 className="title"><Link active to="/home">News Express</Link></h1>
                </div>
                <div>
                    {/* <input type="text" placeholder="search a news" value={searchInput} onChange={(e) => handleOnChange(e)} id="search-bar"></input>
                    <Link to="/search">
                        <button 
                            onClick={()=> {props.query(searchInput)
                                            changeInput();
                                            }
                                    } 
                            className="search-btn">search
                        </button>
                    </Link> */}
                </div>
            </div>
            <nav>
                <li className="nav-item"><Link to="/home">Home</Link></li>
                <li className="nav-item categories"><Link to="/home">Categories</Link>
                    <div className="sub-menu">
                        <ul>
                            <li><Link to="/science">Science</Link></li>
                            <li><Link to="/sports">Sports</Link></li>
                            <li><Link to="/entertainment">Entertainment</Link></li>
                            <li><Link to="/health">Health</Link></li>
                            <li><Link to="/technology">Technology</Link></li>
                            <li><Link to="/business">Business</Link></li>
                        </ul>
                    </div>
                </li>
            </nav>
        </header>
    )
}