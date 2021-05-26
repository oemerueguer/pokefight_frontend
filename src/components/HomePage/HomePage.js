import HomeTypeIcons from './HomeTypeIcons';
import PokeList from './PokeList';
import SearchBar from './SearchBar';
import './HomePage.css';

export default function HomePage({data, filter, selection, setFilter}) {
  return (
    <div className="home">
      <SearchBar filter={filter} setFilter={setFilter}/>
      <HomeTypeIcons setFilter={setFilter}/>
      <PokeList data={data} selection={selection} filter={filter}/>
    </div>
  );
}