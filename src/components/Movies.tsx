import { AnimatePresence, motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { toMovieId, toShouldFetch } from "../atoms";
import { IGetMovieResult } from "../api";
import { makeImagePath } from "../utils";

const Lists = styled(motion.ul)`
    width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`;
const List = styled(motion.li)`
    height: 400px;
    cursor: pointer;
    transform-origin: top;
`;
const Box = styled(motion.div)<{ $bgPhoto: string }>`
    width: 100%;
    height: 80%;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 20px;
    background-image: url("${(props) => props.$bgPhoto}");
    background-size: cover;
`;
const Title = styled.h2`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;

const WrapVatiants = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            duration: 0.3,
            bounce: 0.2,
            staggerChildren: 0.5,
        },
    },
};

const BoxVariants = {
    start: {
        scale: 0,
        opacity: 0,
    },
    end: {
        scale: 1,
        opacity: 1,
    },
};
function Movies({...data}:IGetMovieResult) {
	const setMovieID = useSetRecoilState(toMovieId);
	const setShouldFetch = useSetRecoilState(toShouldFetch);
	
	const listOnClick = (movieId: number) => {
        setMovieID(movieId);
        setShouldFetch(true);
    };
    return (
        <Lists variants={WrapVatiants} initial="start" animate="end">
            <AnimatePresence>
                {data?.results.map((movie) => (
                    <List
                        key={movie.id}
                        layoutId={String(movie.id)}
                        variants={BoxVariants}
                        onClick={() => listOnClick(movie.id)}
                    >
                        <Box
                            $bgPhoto={makeImagePath(movie.poster_path, "w342")}
                            whileHover={{ y: -30 }}
                        ></Box>
                        <Title>{movie.title}</Title>
                    </List>
                ))}
            </AnimatePresence>
        </Lists>
    );
}

export default Movies;
