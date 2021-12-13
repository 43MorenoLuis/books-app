import React, { useEffect, useState } from 'react';
import { getBooks, getLastBooks } from '../../api/book';
import { useForm } from '../../hooks/useForm';
import ListBooks from '../../components/ListBooks';
import { size } from 'lodash';
import { Loader } from 'semantic-ui-react';

export default function SearchBooks() {
    const [data, setData] = useState(null);
    const [active, setActive] = useState(false);

    const [ formValues, handleInputChange ] = useForm({
        searchText: ''
    });

    const { searchText } = formValues;

    useEffect(() => {       
        (async () => {

        setActive(true);
            
        const response = await getLastBooks();
        setData( response );

        setActive(false);
        
        })()
      }, []);

    const handleSearch = async(e) => {
        e.preventDefault();

        setActive(true);

        const response = await getBooks(searchText);
        setData(response);

        setActive(false);
    }

    return (
        <div>
            <div className='row'>
                <div className='col-8'>
                    <form onSubmit={ handleSearch }>
                        <input 
                            type='text'
                            placeholder='Busque su libro'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button 
                            className='btn m-1 btn-outline-primary'
                            type='submit'
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                {/* <div className='col-7'>
                    <h1>Results</h1>
                        {
                            (q === '')&&
                            <div className='alert alert-info'>
                                Search a Hero.
                            </div>
                        }
                        {
                            (q !== '' && heroesFiltered.length === 0)&&
                            <div className='alert alert-danger'>
                                There is no a hero with {q}
                            </div>
                        }
                        {
                            heroesFiltered.map(hero=>(
                                <HeroCard 
                                    key={hero.id}
                                    {...hero}
                                />
                            ))
                        }
                    <hr/>
                </div> */}
            </div>
                {!data && <Loader active={active}>Buscando Libros</Loader>}
                {data && size(data) === 0 &&(
                  <div>
                      <h3>No se han encontrado libros</h3>
                  </div>
                )}
                {size(data) > 0 && <ListBooks data={data}/>}
        </div>
    )
}
