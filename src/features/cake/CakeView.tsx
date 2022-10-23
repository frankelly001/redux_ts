import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from './cakeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const CakeView = () => {
    // const numOfCakes = useSelector((state)=> state.cake.numOfCakes)
    // const dispatch = useDispatch()
    const numOfCakes = useAppSelector((state)=> state.cake.numOfCakes)
    const dispatch = useAppDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={()=>dispatch(ordered())}>Order cake</button>
            <button onClick={()=>dispatch(restocked(3))}>Restock cakes</button>
        </div>
    );
};

export default CakeView;