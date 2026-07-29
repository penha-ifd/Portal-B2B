import { BrowserRouter, Routes, Route } from "react-router";
import { DesignSystemProvider } from "./components/DesignSystemProvider";
import { AppShell } from "./components/app-shell";
import { HomePage } from "./components/home/home-page";
import { PlaceholderPage } from "./components/placeholder-page";
import { PlanoProvider } from "./state/plano-context";
import { PlanSwitcher } from "./components/plan-switcher";
import { ReservasPage } from "./pages/reservas";
import { ClientesPage } from "./pages/clientes";
import { ModulosPage } from "./pages/modulos";
import { PromocoesPage } from "./pages/promocoes";
import { ConciliacaoPage } from "./pages/conciliacao";
import { JornadaPage } from "./pages/jornada";
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
                element={<JornadaPage />}
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
                element={
                  <PlaceholderPage title="PDV" icon="store" />
                }
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
                element={
                  <PlaceholderPage
                    title="Avaliações"
                    icon="store"
                  />
                }
              />
              <Route
                path="agregador"
                element={
                  <PlaceholderPage
                    title="Agregador de pedidos"
                    icon="delivery"
                  />
                }
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
                path="configuracoes"
                element={
                  <PlaceholderPage
                    title="Configurações"
                    icon="configuration"
                  />
                }
              />
              <Route
                path="perfil"
                element={
                  <PlaceholderPage
                    title="Perfil"
                    icon="profile"
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
        <PlanSwitcher />
      </PlanoProvider>
    </DesignSystemProvider>
  );
}