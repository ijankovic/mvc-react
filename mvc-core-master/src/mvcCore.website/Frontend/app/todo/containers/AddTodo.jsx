import React from 'react';
import { connect } from 'react-redux';
import { addTodoServer } from '../actions/todos';
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
        
    this.state = {
      value: ''
    };
  }
    
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
    
  submit() {        
    this.props.dispatch(addTodoServer(this.state.value));
    this.setState({ value: '' });
  }
    
  render() {     
    return (
            <FormGroup>
                <InputGroup>
                    <InputGroup.Addon>Add todo item:</InputGroup.Addon>
                    <FormControl 
                        value={this.state.value}
                        type='text' 
                        onChange={this.handleChange}/>
                    <InputGroup.Button>
                        <Button onClick={this.submit}>Submit</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
    );
  }
}

AddTodo = connect()(AddTodo);

export default AddTodo;