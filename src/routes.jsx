import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Authorization } from "./pages/Authorization/Authorization";
import { ProtectedRoute, PermittedRoute } from "./components/protected-route";
import Registration from "./pages/Registration/Registration";
import { Collections } from "./pages/Collections/Collections";
import LeftBarLayout from "./components/Layout/LeftBarLayout/LeftBarLayout";
import PlayerLayout from "./components/Layout/PlayerLayout/PlayerLayout";
import CentralBlock from "./components/MainCenterBlock/CentralBlock/CentralBlock";
import { MyTracks } from "./pages/MyTracks/MyTracks";
import NotFound from "./pages/NotFound/NotFound";

export function AppRoutes() {
    const token = useSelector((state) => state.authorization.token);
    let isLogin = false;

    if (token) {
        isLogin = true;
    }
    console.log(isLogin);
    return (
        <Routes>
            <Route element={<ProtectedRoute isAllowed={isLogin} />}>
                <Route element={<LeftBarLayout />}>
                    <Route element={<PlayerLayout />}>
                        <Route index element={<CentralBlock />} />
                        <Route path="tracks" index element={<CentralBlock />} />

                        <Route
                            path="/collection/:id"
                            element={<Collections />}
                        />
                        <Route path="/my-tracks" element={<MyTracks />} />
                    </Route>
                </Route>
            </Route>

            <Route element={<PermittedRoute isAllowed={isLogin} />}>
                <Route path="/authorization" element={<Authorization />} />
                <Route path="/registration" element={<Registration />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
