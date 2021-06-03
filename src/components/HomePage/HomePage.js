import HomeTypeIcons from './HomeTypeIcons';
import HomeTypeDropdown from './HomeTypeDropdown';
import PokeList from './PokeList';
import SearchBar from './SearchBar';
import './HomePage.css';
import useBreakpoint from '../../customHooks/useBreakpoint';
// for alternate pagination
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

  // if data is available filter and paginate data (if filter available) or just paginate
  useEffect(() => {
    if (data) {
      if (filter) filterData() 
      else setFilteredPokemons(data);
      setCurrentPage(1)
    }
  }, [data, filter])
  // whenever page or filter changes paginate
  useEffect(() => {
    if (filteredPokemons) {
      paginateData();
    }
  }, [filteredPokemons, currentPage])

  const filterData = () => {
    let filteredList = data.filter(
      (pokemon) =>
        pokemon.type.some((type) =>
          type.toLowerCase().includes(filter.toLowerCase())
        ) || pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPokemons(filteredList);
  }

  const paginateData = () => {
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    console.log(`currentPage: ${currentPage} indexoffirst: ${indexOfFirstPokemon} indexoflast: ${indexOfLastPokemon}`)
    console.log(filteredPokemons)
    setSelection(filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon))
  }
  // for  pagination
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <SearchBar filter={filter} setFilter={setFilter} />
      {point !== "xs" && point !== "xxs"
        ? <HomeTypeIcons setFilter={setFilter} />
        : <HomeTypeDropdown setFilter={setFilter} />
      }
      {/* <Pagination 
        totalPages={filteredPokemons? filteredPokemons.length <= 10 ? filteredPokemons/pokemonsPerPage : 10 : 0}
        ActivePage={currentPage}
        onPageChange={(event, pageInfo) => setCurrentPage(pageInfo.activePage)}
      /> */}
      {/* alternate ready-made nicer but buggy pagination  */}
      <HandPagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={filteredPokemons ? filteredPokemons.length : 0}
        paginate={paginate}
      />
      <PokeList selection={selection ? selection : null} />
    </div>
  );
}