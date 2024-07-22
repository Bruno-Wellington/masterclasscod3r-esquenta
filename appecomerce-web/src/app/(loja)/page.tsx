'use client'
import CartaoProduto from "@/components/produto/CartaoProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produtos";

export default function Home() {

  return (
    <Pagina>
      <div className="flex flex-wrap justify-center gap-5">
        {produtos.map(produto => (
          <CartaoProduto key={produto.id} produto={produto}/>
        ))}
      </div>
    </Pagina>
  );
}
