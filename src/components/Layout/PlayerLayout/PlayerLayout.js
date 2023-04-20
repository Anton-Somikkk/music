import { Outlet } from "react-router-dom";
import PlayerBlock from "../../Player/PlayerBlock/PlayerBlock";
import refreshToken from "../../../scripts/refreshToken";

export default function PlayerLayout() {
    refreshToken();

    return (
        <main>
            <Outlet />
            <PlayerBlock />
        </main>
    );
}
