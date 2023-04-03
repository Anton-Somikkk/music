import { Outlet } from "react-router-dom";
import PlayerBlock from "../../PlayerBlock/PlayerBlock";
// import refreshToken from '../../../utils/refreshToken'

export default function PlayerLayout() {
    // refreshToken()

    return (
        <main>
            <Outlet />
            <PlayerBlock />
        </main>
    );
}
