import HomeTypeIcons from './HomeTypeIcons';
import HomeTypeDropdown from './HomeTypeDropdown';
import PokeList from './PokeList';
import SearchBar from './SearchBar';
import './HomePage.css';
import useBreakpoint from '../../customHooks/useBreakpoint';
import HandPagination from './HandPagination';
import { Pagination } from 'semantic-ui-react';
import { useEffect, useState } from 'react'

export default function HomePage({ data }) {

  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
  const [selection, setSelection] = useState(null)
  const [filteredPokemons, setFilteredPokemons] = useState(null)
  const point = useBreakpoint();

  useEffect(() => {
    if (data) {
      console.log("got data")
      if (filter) filterData()
      else {
        console.log(data);
        setFilteredPokemons(data);
        setTimeout(()=> {
          console.log(filteredPokemons);
          paginateData();
        },10000)
      }
      console.log("filter changed")
    } else console.log("awaiting data")
  }, [data, filter])

  const filterData = () => {
    let filteredList = data.filter(
      (pokemon) =>
        pokemon.type.some((type) =>
          type.toLowerCase().includes(filter.toLowerCase())
        ) || pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPokemons(filteredList);
    paginateData();
  }

  const paginateData = () => {
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    setSelection(filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon))
    console.log(selection)
  }
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <SearchBar filter={filter} setFilter={setFilter} />
      {point !== "xs" && point !== "xxs"
        ? <HomeTypeIcons setFilter={setFilter} />
        : <HomeTypeDropdown setFilter={setFilter} />
      }
      <PokeList selection={selection} />
      <HandPagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={filteredPokemons ? filteredPokemons.length : 0}
        paginate={paginate}
      />
      {/* <Pagination 
        totalPages={10}
        ActivePage={currentPage}
        onPageChange={(event, pageInfo) => setCurrentPage(pageInfo.activePage)}
      /> */}
    </div>
  );
}