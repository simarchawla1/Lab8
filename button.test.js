import React from 'react';
import {render,screen} from '@testing-library/react';
import Button from './button';
TextDecoderStream('renders the correct label', () =>{
    render(<Button Lebel="CLick Me!"/>);
    const buttonElement=screen.getByText(/Click Me!/i);
    expect(buttonElement).toBeInTheDocument();
});

