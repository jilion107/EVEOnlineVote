/**
 * Created by jilion.chen on 2016/7/7.
 */
import React from 'react';
import { Router ,Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddCharacter from './components/AddCharacter';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import Stats from './components/Stats';

let routes =
	<Router>
		<Route path="/" component={App}>
			<Route path="/" component={Home}/>
			<Route path='/add' component={AddCharacter} />
			<Route path='/characters/:id' component={Character} />
			<Route path='/stats' component={Stats} />
			<Route path=':category' component={CharacterList}>
				<Route path=':race' component={CharacterList}>
					<Route path=':bloodline' component={CharacterList} />
				</Route>
			</Route>
		</Route>
	</Router>

export default routes;
