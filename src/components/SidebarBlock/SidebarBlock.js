import { useEffect, useState } from "react";
import * as S from "./styles";

import SidebarItem from "../SidebarItem/SidebarItem";

export default function SidebarBlock(props) {
    const { initSeconds = 10 } = props;
    const [seconds, setSeconds] = useState(initSeconds);

    useEffect(() => {
        const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                clearInterval(myInterval);
            }
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <S.SidebarBlock>
            <S.SidebarList>
                {seconds === 0 ? (
                    <>
                        <SidebarItem
                            sidebarItemUrl="/collection/1"
                            sidebarItemImageUrl="img/playlist01.png"
                            sidebarItemImageAlt="day's playlist"
                        />
                        <SidebarItem
                            sidebarItemUrl="/collection/2"
                            sidebarItemImageUrl="img/playlist02.png"
                            sidebarItemImageAlt="day's playlist"
                        />
                        <SidebarItem
                            sidebarItemUrl="/collection/3"
                            sidebarItemImageUrl="img/playlist03.png"
                            sidebarItemImageAlt="day's playlist"
                        />
                    </>
                ) : (
                    <>
                        <SidebarItem
                            sidebarItemImageUrl="../img/Skeleton-sidebar-item.png"
                            sidebarItemImageAlt="Загрузка плейлиста"
                        />
                        <SidebarItem
                            sidebarItemImageUrl="../img/Skeleton-sidebar-item.png"
                            sidebarItemImageAlt="Загрузка плейлиста"
                        />
                        <SidebarItem
                            sidebarItemImageUrl="../img/Skeleton-sidebar-item.png"
                            sidebarItemImageAlt="Загрузка плейлиста"
                        />
                    </>
                )}
            </S.SidebarList>
        </S.SidebarBlock>
    );
}
