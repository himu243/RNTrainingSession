import React, {useState} from 'react';
import {Text, Button} from 'react-native';

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const increaseByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCounter(prevState => prevState + 1);
    }
  };

  return (
    <>
      <Text>Counter:{counter}</Text>
      <Button title="Increase" onPress={increaseCounter} />
      <Button title="Decrease" onPress={decreaseCounter} />
      <Button title="Increase by 5" onPress={increaseByFive} />
    </>
  );
};

export default CounterComponent;
