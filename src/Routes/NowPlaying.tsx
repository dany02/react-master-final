import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import {
	getNowPlaying,
    IGetMovieResult,
} from "../api";
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

function NowPlaying() {
	const nowPlayingData = useQuery<IGetMovieResult>({
		queryKey: ["nowPlaying"],
		queryFn: getNowPlaying,
	});


    return (
        <Container>
            {nowPlayingData.isLoading ? <Loader>is Loading </Loader> : null}

            {nowPlayingData.data ? (
                <Movies key="nowPlaying" {...nowPlayingData.data} />
            ) : null}
        </Container>
    );
}

export default NowPlaying;
