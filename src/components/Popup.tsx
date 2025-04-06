import { motion } from "framer-motion";
import { styled } from "styled-components";
import { IGetDetailMovie } from "../api";
import { makeImagePath } from "../utils";
import {useSetRecoilState } from "recoil";
import { toMovieId, toShouldFetch } from "../atoms";

const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
`;

const Modal = styled(motion.div)`
    position: fixed;
    width: 750px;
    height: 80vh;
    top: 10vh;
    border-radius: 15px;
    overflow: hidden;
`;

const Inner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
    background-color: black;
`;

const Svg = styled.svg`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

const CoverImg = styled.div`
    width: 100%;
    height: 50%;
    padding: 20px;
    background-size: cover;
    background-position: center;
`;

const Contents = styled.div`
    padding: 20px 20px 50px 20px;
    margin-top: -20px;
`;

const ModalTitle = styled.h3`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Overview = styled.p`
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 40px;
`;

const Options = styled.ul`
    li {
        font-size: 16px;
        line-height: 2;
        span {
            font-weight: bold;
        }
    }
`;

function Popup({...res}:IGetDetailMovie) {
    const setMovie = useSetRecoilState(toMovieId);
	const setFetch = useSetRecoilState(toShouldFetch);

	const modalClick = () => {
        setFetch(false);
        setMovie(undefined);
    };
	
	return (
        <>
            <Overlay animate={{ opacity: 1 }} />
            <Modal layoutId={String(res.id)} key={res.id} transition={{delay: 0.3}}>
                <Inner>
                    <Svg
                        data-slot="icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        onClick={modalClick}
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                        ></path>
                    </Svg>
                    <CoverImg
                        style={{
                            backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                                res.backdrop_path,
                                "w780"
                            )})`,
                        }}
                    />
                    <Contents>
                        <ModalTitle>{res.title}</ModalTitle>
                        <Overview>{res.overview}</Overview>
                        <Options>
                            <li>
                                Budget : <span>{res.budget}</span>
                            </li>
                            <li>
                                Revenue : <span>{res.revenue}</span>
                            </li>
                            <li>
                                Runtime : <span>{res.runtime}</span>
                            </li>
                            <li>
                                Rating : <span>{res.vote_average}</span>
                            </li>
                            <li>
                                Homepage : <span>{res.homepage}</span>
                            </li>
                        </Options>
                    </Contents>
                </Inner>
            </Modal>
        </>
    );
}

export default Popup;
