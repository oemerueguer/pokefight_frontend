import './HomePage.css';
import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

export default function HomeTypeDropdown({ setFilter }) {
    const handleClick = (value) => {
        setFilter(value)
    }

    return (
        <MDBDropdown>
            <MDBDropdownToggle className="drop-down">pick by type</MDBDropdownToggle>
            <MDBDropdownMenu className="drop-down">
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Bug")}>Bug</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Dark")}>Dark</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Dragon")}>Dragon</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Electric")}>Electric</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Fairy")}>Fairy</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Fighting")}>Fighting</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Fire")}>Fire</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Flying")}>Flying</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Ghost")}>Ghost</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Grass")}>Grass</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Ground")}>Ground</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Ice")}>Ice</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Normal")}>Normal</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Poison")}>Poison</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Psychic")}>Psychic</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Rock")}>Rock</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Steel")}>Steel</MDBDropdownLink></MDBDropdownItem>
                <MDBDropdownItem><MDBDropdownLink onClick={() => handleClick("Water")}>Water</MDBDropdownLink></MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
    );
}

/*
    return (
        <div>
            <label for="types">Or choose a type:</label>
            <select name="types" id="types" className="drop-down">
                <option value="Bug" onClick={() => handleClick("Bug")}>Bug</option>
                <option value="Dark" onClick={() => handleClick("Dark")}>Dark</option>
                <option value="Dragon" onClick={() => handleClick("Dragon")}>Dragon</option>
                <option value="Electric" onClick={() => handleClick("Electric")}>Electric</option>
                <option value="Fairy" onClick={() => handleClick("Fairy")}>Fairy</option>
                <option value="Fighting" onClick={() => handleClick("Fighting")}>Fighting</option>
                <option value="Fire" onClick={() => handleClick("Fire")}>Fire</option>
                <option value="Flying" onClick={() => handleClick("Flying")}>Flying</option>
                <option value="Ghost" onClick={() => handleClick("Ghost")}>Ghost</option>
                <option value="Grass" onClick={() => handleClick("Grass")}>Grass</option>
                <option value="Ground" onClick={() => handleClick("Ground")}>Ground</option>
                <option value="Ice" onClick={() => handleClick("Ice")}>Ice</option>
                <option value="Normal" onClick={() => handleClick("Normal")}>Normal</option>
                <option value="Poison" onClick={() => handleClick("Poison")}>Poison</option>
                <option value="Psychic" onClick={() => handleClick("Psychic")}>Psychic</option>
                <option value="Rock" onClick={() => handleClick("Rock")}>Rock</option>
                <option value="Steel" onClick={() => handleClick("Steel")}>Steel</option>
                <option value="Water" onClick={() => handleClick("Water")}>Water</option>
            </select>
        </div>
    ); */