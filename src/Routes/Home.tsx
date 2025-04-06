import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import {
    getDetailMovie,
    getPopular,
    IGetDetailMovie,
    getComing,
    getNowPlaying,
	IGetMovieResult,
} from "../api";
import { AnimatePresence, motion } from "framer-motion";
import Popup from "../components/Popup";
import { useRecoilValue } from "recoil";
import { toMovieId, toShouldFetch } from "../atoms";
import { useMatch } from "react-router-dom";
import Movies from "../components/Movies";

const Loader = styled.div`
    width: 100%;
    text-align: center;
    font-size: 20px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 50px;
    justify-content: center;
`;


function Home() {
    const popular = useMatch("/");
    const comingSoon = useMatch("/comming-soon");
    const nowPlaying = useMatch("/now-playing");

    const popularData = useQuery<IGetMovieResult>({
        queryKey: ["popular"],
        queryFn: getPopular,
        enabled: Boolean(popular),
    });

    const comingData = useQuery<IGetMovieResult>({
        queryKey: ["coming"],
        queryFn: getComing,
        enabled: Boolean(comingSoon),
    });

    const nowPlayingData = useQuery<IGetMovieResult>({
        queryKey: ["nowPlaying"],
        queryFn: getNowPlaying,
        enabled: Boolean(nowPlaying),
    });

    const movieId = useRecoilValue(toMovieId);
    const shouldFetch = useRecoilValue(toShouldFetch);

    const res = useQuery<IGetDetailMovie>({
        queryKey: ["modal"],
        queryFn: () => getDetailMovie(movieId),
        enabled: shouldFetch && Boolean(movieId),
    });

    return (
        <Container>
            {popularData.isLoading ||
            comingData.isLoading ||
            nowPlayingData.isLoading ? (
                <Loader>is Loading </Loader>
            ) : null}

			{Boolean(popular) && popularData.data ? <Movies key="popular" {...popularData.data}/> : null}
			{Boolean(comingSoon) && comingData.data ? <Movies key="coming" {...comingData.data}/> : null}
			{Boolean(nowPlaying) && nowPlayingData.data ? <Movies key="nowPlaying" {...nowPlayingData.data}/> : null}

            <AnimatePresence>
                {shouldFetch && res.data ? (
                    <Popup key={res.data.id} {...res.data} />
                ) : null}
            </AnimatePresence>
        </Container>
    );
}

export default Home;
