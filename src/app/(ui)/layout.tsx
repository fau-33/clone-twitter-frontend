import { ReactNode } from "react";


type Props = {
  children: ReactNode,
}


export default function Layout({ children }: Props){
  return(
    <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
      <section>
        ESQUERDA
      </section>
      <section className="flex-1 max-w-lg">
        {children}
      </section>
      <aside>
        DIREITA
      </aside>
    </main>
  );
}