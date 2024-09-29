import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from './paginas/Inicio';
import Projeto from "paginas/Projeto";
import Caso1 from "paginas/Caso1";
import Caso2 from "paginas/Caso2";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="projeto" element={<Projeto />} />
          <Route path="/caso1" element={<Caso1 />} />
          <Route path="/caso2" element={<Caso2 />} />
        </Route>
        
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;