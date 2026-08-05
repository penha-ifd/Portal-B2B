import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "sonner";
import { DesignSystemProvider } from "./components/DesignSystemProvider";
import { AppShell } from "./components/app-shell";
import { HomePage } from "./components/home/home-page";
import { PlaceholderPage } from "./components/placeholder-page";
import { PlanoProvider } from "./state/plano-context";
import { NotFoundPage } from "./pages/not-found";
import { ReservasPage } from "./pages/reservas";
import { ClientesPage } from "./pages/clientes";
import { ModulosPage } from "./pages/modulos";
import { PromocoesPage } from "./pages/promocoes";
import { ConciliacaoPage } from "./pages/conciliacao";
import { PdvPage } from "./pages/pdv";
import { PerfilPage } from "./pages/perfil";
import AvaliacoesPage from "./pages/avaliacoes";
import { AgregadorPage } from "./pages/agregador";
import { ConfiguracoesPage } from "./pages/configuracoes";
import { FidelidadePage } from "./pages/fidelidade";
import DesignSystemPage from "./pages/design-system";
import { Navigate } from "react-router";

export default function App() {
  return (
    <DesignSystemProvider locale="pt-br" theme="light">
      <PlanoProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppShell />}>
              <Route index element={<HomePage />} />
              <Route
                path="jornada"
                element={<Navigate to="/perfil" replace />}
              />
              <Route
                path="reservas"
                element={<ReservasPage />}
              />
              <Route
                path="promocoes"
                element={<PromocoesPage />}
              />
              <Route
                path="cardapio"
                element={<PlaceholderPage title="Cardápio" icon="store" />}
              />
              <Route path="modulos" element={<ModulosPage />} />
              <Route
                path="conciliacao"
                element={<ConciliacaoPage />}
              />
              <Route
                path="pdv"
                element={<PdvPage />}
              />
              <Route
                path="pagamento-mesa"
                element={
                  <PlaceholderPage
                    title="Pagamento na mesa"
                    icon="credit-card"
                  />
                }
              />
              <Route
                path="avaliacoes"
                element={<AvaliacoesPage />}
              />
              <Route
                path="agregador"
                element={<AgregadorPage />}
              />
              <Route
                path="crm"
                element={<Navigate to="/clientes" replace />}
              />
                            <Route
                path="clientes"
                element={<ClientesPage />}
              />
              <Route
                path="fidelidade"
                element={<FidelidadePage />}
              />
              <Route
                path="configuracoes"
                element={<ConfiguracoesPage />}
              />
              <Route
                path="perfil"
                element={<PerfilPage />}
              />
              <Route
                path="design-system"
                element={<DesignSystemPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" richColors />
      </PlanoProvider>
    </DesignSystemProvider>
  );
}