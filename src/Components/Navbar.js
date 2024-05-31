import React, { useState } from "react";
import Logo from "../Assets/435762163_2822109891280408_7450111231118052636_n-removebg-preview.png";
import { useNavigate, Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import "../Styles/Navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/results?q=${search}`);
    setSearch("");
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" />
        <div className="searchContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="O que você deseja?"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit" className="psq">
              <Link to="/results"><BiSearchAlt2 /></Link>
            </button>
          </form>
        </div>
  
      </div>
    </div>
  );
}

export default Navbar;
