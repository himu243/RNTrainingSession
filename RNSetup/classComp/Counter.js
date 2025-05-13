import React, {Component} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  increaseCounter = () => {
    // this.setState(prevState => ({count: prevState.count + 1}));
    this.setState({count: this.state.count + 1});
  };
  decreaseCounter = () => {
    if (this.state.count > 0) {
      //   this.setState(prevState => ({count: prevState.count - 1}));
      this.setState({count: this.state.count - 1});
    }
  };
  increaseByFive = () => {
    for (let i = 0; i < 5; i++) {
      // i=0, count: 0 + 1 = 1
      // i=1, count: 1 + 1 = 2
      // i=2, count: 2+1 = 3
      // i=3, count: 3+1 = 4
      // i=4, count: 4+1 = 5
      //   const setCallback = prevState => {
      //     return {count: prevState.count + 1};
      //   };
      //   this.setState(setCallback);
      this.setState(prevState => ({count: prevState.count + 1}));
      //   this.setState({count: this.state.count + 1});
    }
  };

  myFunc = (object, cb) => {};
  myFunc = (fxn, cb) => {};

  render() {
    return (
      <>
        <Text>Counter:{this.state.count}</Text>
        <Button title="Increase" onPress={this.increaseCounter} />
        <Button title="Decrease" onPress={this.decreaseCounter} />
        <Button title="Increase by 5" onPress={this.increaseByFive} />
      </>
    );
  }
}

export default Counter;
