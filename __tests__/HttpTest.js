import axios from 'axios';
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Http from "../pages/Http";

jest.mock('axios');

const fakeUsers = [{
    "id": 1,
    "name": "Test User 1",
    "username": "testuser1",
}, {
    "id": 2,
    "name": "Test User 2",
    "username": "testuser2",
}];

test.skip("Render de la página", () => {
    render(<Http />);
    expect(
        screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
});

test.skip('Validar lista de usuarios(error)', async () => {
    render(<Http />);
    expect(screen.getByTestId('user-list')).toBeInTheDocument();
});

test.skip('Validar lista de usuarios(ok)', async () => {
    const { getByTestId } = render(<Http />)
    const userList = await waitFor(() => getByTestId('user-list'));
    expect(userList).toBeInTheDocument();
});


test('Validar usuario con mock', async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    const { findAllByTestId } = render(<Http />)
    const userList = await waitFor(() => findAllByTestId('user-item'));
    expect(userList).toHaveLength(2);

});


