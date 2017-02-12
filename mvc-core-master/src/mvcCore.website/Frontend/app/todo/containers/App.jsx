import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import FilterContainer from './FilterContainer';
import Loader from './Loader';
require('../../../style/main');


const App = () => (
	<div>	
		<Loader />
		<Panel header='Task Management' bsStyle="primary">
			<Grid>
				<FilterContainer />
				<hr/>
				<AddTodo />
				<hr/>           
                <VisibleTodoList />   
			</Grid>
		</Panel>
	</div>
);

export default App;