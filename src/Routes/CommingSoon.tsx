import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import {
	getComing,
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

function ComingSoon() {
	const comingSoonData = useQuery<IGetMovieResult>({
		queryKey: ["coming"],
		queryFn: getComing,
	});


	return (
		<Container>
			{comingSoonData.isLoading ? <Loader>is Loading </Loader> : null}

			{comingSoonData.data ? (
				<Movies key="comingSoon" {...comingSoonData.data} />
			) : null}
		</Container>
	);
}

export default ComingSoon;
