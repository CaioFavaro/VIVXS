import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from './paginas/Inicio';
import Sobre from './paginas/Sobre';
import Projeto from "paginas/Projeto";
import Solucao from "paginas/Solucao";
import Contato from "paginas/Contato";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="projeto" element={<Projeto />} />
          <Route path="solucao" element={<Solucao />} />
          <Route path="contato" element={<Contato />} />
        </Route>
        
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;