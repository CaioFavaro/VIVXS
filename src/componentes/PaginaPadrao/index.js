import Banner from "componentes/Banner";
import BotaoComQRCode from "componentes/QrCode";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return (
        <main>
                        
            <Banner />
            <Outlet />
            <BotaoComQRCode />
        </main>
        
    )
}