import { render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from '../components/navbar/navbar';

describe('Navbar', () => {


    it('se renderiza el componente mostrando el input y el boton de buscar', async () => {

        // Usamos renderHook para mockear el useNavigate
        await act (async () => {
            renderHook(() => {
                useNavigate();
            }, {
                wrapper: MemoryRouter
            });
        });

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const inputElement = screen.getByTestId('search-input');
        const buttonElement = screen.getByTestId('search')

        expect(inputElement)
        expect(buttonElement)

    });
    
    it("el usuario escribe algo en el input", async () => {


        await act (async () => { 
            renderHook(() => {
                useNavigate();
            }, {
                wrapper: MemoryRouter
            });
        });

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const inputElement = screen.getByTestId('search-input');
        const buttonElement = screen.getByTestId('search')
        await userEvent.type(inputElement, 'apple');

        expect(inputElement.value).toBe('apple');

        expect(inputElement)
        expect(buttonElement)

    });
    
});