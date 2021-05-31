import HomeTypeIcons from './HomeTypeIcons';
import HomeTypeDropdown from './HomeTypeDropdown';
import PokeList from './PokeList';
import SearchBar from './SearchBar';
import './HomePage.css';
import useBreakpoint from '../../customHooks/useBreakpoint'

export default function HomePage({ data, filter, selection, setFilter }) {
  const point = useBreakpoint();
  
  return (
    <div className="home">
      <SearchBar filter={filter} setFilter={setFilter} />
      {point !== "xs" && point !== "xxs"
        ? <HomeTypeIcons setFilter={setFilter} />
        : <HomeTypeDropdown setFilter={setFilter}/>
      }
      <PokeList data={data} selection={selection} filter={filter} />
    </div>
  );
}