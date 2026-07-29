import { createContext, useContext, useState } from 'react';

export type PlanoAtivo = 'base' | 'essencial' | 'avancado';

interface PlanoContextValue {
  planoAtivo: PlanoAtivo;
  setPlanoAtivo: (p: PlanoAtivo) => void;
  usarVazio: boolean;
  setUsarVazio: (v: boolean) => void;
}

const PlanoContext = createContext<PlanoContextValue>({
  planoAtivo: 'essencial',
  setPlanoAtivo: () => {},
  usarVazio: false,
  setUsarVazio: () => {},
});

export function PlanoProvider({ children }: { children: React.ReactNode }) {
  const [planoAtivo, setPlanoAtivo] = useState<PlanoAtivo>('essencial');
  const [usarVazio, setUsarVazio] = useState(false);
  return (
    <PlanoContext.Provider value={{ planoAtivo, setPlanoAtivo, usarVazio, setUsarVazio }}>
      {children}
    </PlanoContext.Provider>
  );
}

export function usePlano() {
  return useContext(PlanoContext);
}
