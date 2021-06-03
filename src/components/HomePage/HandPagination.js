const HandPagination = ({ pokemonsPerPage, totalPokemons, paginate }) => {
    const pageNumbers = [];
    const ceil = Math.ceil(totalPokemons / pokemonsPerPage) 
    const pageCount = ceil >= 10 ? 10 : ceil;
    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }
    console.log(ceil)

    return (
        <nav className="page-wrapper">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <p onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HandPagination;
