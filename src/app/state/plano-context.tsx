import { createContext, useContext, useState, useSyncExternalStore } from 'react';

export type PlanoAtivo = 'novo' | 'base' | 'essencial' | 'avancado';

// Global state for modoNovo — works around React Router context boundary
let _modoNovo = false;
const listeners = new Set<() => void>();

export function getModoNovo() { return _modoNovo; }
export function setModoNovoGlobal(v: boolean) {
  _modoNovo = v;
  listeners.forEach((fn) => fn());
}
export function subscribeModoNovo(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useModoNovo() {
  return useSyncExternalStore(subscribeModoNovo, getModoNovo);
}

interface PlanoContextValue {
  planoAtivo: PlanoAtivo;
  setPlanoAtivo: (p: PlanoAtivo) => void;
}

const PlanoContext = createContext<PlanoContextValue>({
  planoAtivo: 'essencial',
  setPlanoAtivo: () => {},
});

export function PlanoProvider({ children }: { children: React.ReactNode }) {
  const [planoAtivo, setPlanoAtivo] = useState<PlanoAtivo>('essencial');
  return (
    <PlanoContext.Provider value={{ planoAtivo, setPlanoAtivo }}>
      {children}
    </PlanoContext.Provider>
  );
}

export function usePlano() {
  return useContext(PlanoContext);
}
