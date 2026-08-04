import { useNavigate } from "react-router";
import { Button, PageHeader } from "../components/ifds";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader
        icon="info"
        title="Página não encontrada"
        description="O endereço que você acessou não existe ou foi movido."
      />

      <div className="flex items-center justify-center min-h-[480px] p-6">
        <div className="flex flex-col items-center justify-center text-center p-8 max-w-sm">
          <div className="size-16 rounded-full bg-bg-secondary flex items-center justify-center mb-4">
            <svg className="size-8 text-text-disabled" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <h3 className="heading-h3-18-medium text-text-primary mb-2">Não encontramos essa página</h3>
          <p className="paragraph-p2-14-regular text-text-secondary mb-6">Confira se o endereço está correto ou volte para o início.</p>
          <Button type="button" variant="primary" onClick={() => navigate("/")}>
            Voltar para o início
          </Button>
        </div>
      </div>
    </div>
  );
}
