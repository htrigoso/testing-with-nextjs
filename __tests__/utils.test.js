import { formatUserName } from "../src/utils";


test.skip('formatear el nombre del usuario', () => {
    expect(formatUserName('hugo')).toBe('@hugo');
});
