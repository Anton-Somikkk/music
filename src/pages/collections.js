import { useParams } from "react-router-dom";
import { NotFound } from "./not-found";

// eslint-disable-next-line import/prefer-default-export
export function Collections() {
    const { id } = useParams();

    if (id !== "1" && id !== "2" && id !== "3") {
        return <NotFound />;
    }
    return <h1>плей лист {id}</h1>;
}
