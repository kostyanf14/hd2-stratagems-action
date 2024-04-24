import { createContext } from 'react';

export const ClientConnectionContext = createContext({ client: null, setClient: () => {} });
