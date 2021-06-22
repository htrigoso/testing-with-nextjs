import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";
import { HelloMessage } from '../components/HelloMessage';
import { Button } from '../components/Button'

test.skip("Render de la página", () => {
    render(<Home />);
    expect(
        screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
});

test.skip('Buscar texto en el componente', async () => {
    const { getByText } = render(<HelloMessage name="Hugos" />);
    await waitFor(() => getByText(/Hugo/i));
});

test.skip('Evento click', async () => {

    const onClick = jest.fn();
    const { getByText } = render(<Button title="Evento click" onClick={onClick} />);

    fireEvent.click(getByText(/Evento click/i));
    expect(onClick).toHaveBeenCalled();
});