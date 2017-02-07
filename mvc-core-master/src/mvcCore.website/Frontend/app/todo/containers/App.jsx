import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import HeaderActionBar from './HeaderActionBar';
import Loader from './Loader';
import { loadAllTodosServer } from '../actions/todos';
require('../../../style/main');

class App extends React.Component {
  constructor(props) {
    super(props);
        
    this.props.dispatch(loadAllTodosServer());
  }
    
  render() {
    return (
            <div> 
                <Loader />
                <AddTodo />
                <HeaderActionBar />
                <VisibleTodoList />       
            </div>
    );    
  }
}
    
App = connect()(App);

export default App;