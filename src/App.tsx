import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import { styled } from 'styled-components';
import Popular from './Routes/Popular';
import ComingSoon from './Routes/CommingSoon';
import NowPlaying from './Routes/NowPlaying';

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
				<Route path='/' element={<Popular/>}></Route>
				<Route path='/comming-soon' element={<ComingSoon/>}></Route>
				<Route path='/now-playing' element={<NowPlaying/>}></Route>
			</Routes>
		</Router>
	</Wrapper>
  );
}

export default App;
