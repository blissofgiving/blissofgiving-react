import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { getByDisplayValue,getElementById } from '@testing-library/dom'
import Home from '../Home';



//const history = useHistory();

test('renders learn react link', () => {

const container = (render(<Home />))
const s = document.getElementById('start').innerHTML

if(s == "START A FUNDRISER"){
    console.log('true');
}

});