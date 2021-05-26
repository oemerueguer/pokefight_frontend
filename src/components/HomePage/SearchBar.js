import './HomePage.css';

export default function SearchBar({filter, setFilter}) {
    
    const handleChange = (e) => {
        setFilter(e.target.value);
    }
    
    return (
        <div className="searchbar">
            <input type="text" value={filter} onChange={handleChange} placeholder="enter name/type" className="user-input"/>
        </div>
    );
}