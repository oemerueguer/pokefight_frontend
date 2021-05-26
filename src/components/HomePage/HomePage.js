import HomeTypeIcons from './HomeTypeIcons';
import PokeList from './PokeList';
import SearchBar from './SearchBar';
import './HomePage.css';

export default function HomePage({data, query, setQuery}) {
  return (
    <div className="home">
      <SearchBar query={query} setQuery={setQuery}/>
      <HomeTypeIcons />
      <PokeList data={data}/>
    </div>
  );
}