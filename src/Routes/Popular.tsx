import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import {
    getPopular,
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

function Popular() {
    const popularData = useQuery<IGetMovieResult>({
        queryKey: ["popular"],
        queryFn: getPopular,
    });

    return (
        <Container>
            {popularData.isLoading ? <Loader>is Loading </Loader> : null}

            {popularData.data ? (
                <Movies key="popular" {...popularData.data} />
            ) : null}
        </Container>
    );
}

export default Popular;
