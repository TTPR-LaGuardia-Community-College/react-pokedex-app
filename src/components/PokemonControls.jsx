import './PokemonControls.css'
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function PokemonControls(){
    const {increment, decrement } = useContext(CounterContext);

    return(
        <div className='pokemon-controls'>
            <button onClick={decrement}>Previous</button>
            <button onClick={increment}>Next</button>
        </div>
    )
}

export default PokemonControls;