import { motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const Head = styled.header`
    width: 100%;
    padding: 30px 0;
`;
const Nav = styled.ul`
    display: flex;
    padding: 10px 0;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
`;
const Menu = styled.li`
    position: relative;
    a {
        display: block;
        font-size: 18px;
        font-weight: bold;
    }
`;
const Circle = styled(motion.span)`
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: red;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
`;
function Header() {
    const pop = useMatch("/");
    const coming = useMatch("/comming-soon");
    const now = useMatch("/now-playing");
    return (
        <Head>
            <Nav>
                <Menu>
                    <Link to="/">POPULAR</Link>
                    {pop && <Circle layoutId="circle"></Circle>}
                </Menu>
                <Menu>
                    <Link to="/comming-soon">COMING SOON</Link>
                    {coming && <Circle layoutId="circle"></Circle>}
                </Menu>
                <Menu>
                    <Link to="/now-playing">NOW PLAYING</Link>
                    {now && <Circle layoutId="circle"></Circle>}
                </Menu>
            </Nav>
        </Head>
    );
}

export default Header;
