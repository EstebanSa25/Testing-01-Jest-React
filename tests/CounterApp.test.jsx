import { CounterApp } from '../src/CounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas del archivo <CounterApp/>', () => {
    const initialCounter = 10;
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialCounter} />);
        expect(container).toMatchSnapshot();
    });
    test('Debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={initialCounter} />);
        expect(screen.getByText(10)).toBeTruthy();
    });
    // Pruebas de los eventos
    test('Debe de incrementar con el boton +1', () => {
        render(<CounterApp value={initialCounter} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(initialCounter + 1)).toBeTruthy();
    });
    test('Debe de decrementar con el boton -1', () => {
        render(<CounterApp value={initialCounter} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(initialCounter - 1)).toBeTruthy();
    });
    test('Debe de funcionar el boton de reset', () => {
        render(<CounterApp value={initialCounter} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText(initialCounter)).toBeTruthy();
    });
});
