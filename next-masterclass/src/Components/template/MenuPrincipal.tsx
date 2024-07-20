import { Icon12Hours, IconApps, IconHexagonNumber1, IconLayout2 } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function MenuPrincipal(){

    return (
        <aside className="w-80 bg-zinc-900">
            <nav className="flex flex-col p-5">
                <MenuItem link="/primeiro">
                    <IconHexagonNumber1/>
                    <span>Link</span>
                </MenuItem>

                <MenuItem link="/segundo">
                    <IconLayout2/>
                    <span>Link</span>
                </MenuItem>

                <MenuItem link="/pagina">
                    <IconApps/>
                    <span>Link</span>
                </MenuItem>

                <MenuItem link="/estado">
                    <Icon12Hours/>
                    <span>Link</span>
                </MenuItem>

            </nav>
        </aside>
    )
}