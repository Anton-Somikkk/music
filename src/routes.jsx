import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Wrapper } from "./components/Wrapper/Wrapper";
import { Authorization } from "./pages/Authorization/Authorization";
import { ProtectedRoute, PermittedRoute } from "./components/protected-route";
import Registration from "./pages/Registration/Registration";
import { Collections } from "./pages/Collections/Collections";
import LeftBarLayout from "./components/Layout/LeftBarLayout/LeftBarLayout";
import PlayerLayout from "./components/Layout/PlayerLayout/PlayerLayout";
import { MyTracks } from "./pages/my-tracks";
import { NotFound } from "./pages/not-found";

export function AppRoutes() {
    function checkCookies() {
        // const tokenCookie = document.cookie.split(';')[1].split('=')[1];
        // const isLogin = useSelector((state) => state.authorization.isLogin);
        // const token = useSelector((state) => state.authorization.token);

        // console.log(isLogin, token);

        if (document.cookie) {
            return true;
        }
        return null;
    }

    return (
        <Routes>
            <Route element={<PermittedRoute isAllowed={checkCookies()} />}>
                <Route path="/authorization" element={<Authorization />} />
                <Route path="/registration" element={<Registration />} />
            </Route>

            <Route
                path="/"
                element={<ProtectedRoute isAllowed={checkCookies()} />}
            >
                <Route element={<LeftBarLayout />}>
                    <Route element={<PlayerLayout />}>
                        <Route index element={<MyTracks />} />
                        <Route path="/collection/:id" element={<Collections />} />
                        <Route path="/my-tracks" element={<MyTracks />} />
                    </Route>
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
