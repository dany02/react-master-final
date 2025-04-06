import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Routes/Home';
import { styled } from 'styled-components';

const Wrapper = styled.div`
	display:flex;
	padding: 20px 0 50px;
	flex-direction: column;
	justify-content: center;
`;

function App() {
  return (
	<Wrapper>
		<Router>
			<Header/>
			<Routes>
				<Route path='/' element={<Home/>}></Route>
				<Route path='/comming-soon' element={<Home/>}></Route>
				<Route path='/now-playing' element={<Home/>}></Route>
			</Routes>
		</Router>
	</Wrapper>
  );
}

export default App;
