import React, {useCallback, useMemo, useState} from 'react';
import {Button, Text} from 'react-native';
import Title from '../components/Title';
import CountComponent from '../components/Count';

const UseMemoExample = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Count 0 (xx11)
  // Count 1 (xx22)
  const handleClickCounter1 = () => {
    // setCount1(prevCount => prevCount + 1);
    setCount1(count1 + 1);
  };

  const handleClickCounter2 = () => {
    // setCount2(prevCount => prevCount + 1);
    setCount2(count2 + 1);
  };

  const isCounter2Even = useMemo(() => {
    let i = 0;

    while (i < 200000000) {
      i++;
    }
    const isEven = count2 % 2 === 0;
    return isEven;
  }, [count2]);

  return (
    <>
      <Title title={'Use Callback Example'} />
      {/* Counter 1 */}
      <CountComponent
        name={'Counter 1'}
        count={count1}
        onHandleClick={handleClickCounter1}
      />

      {/* Counter 1 */}
      <CountComponent
        name={'Counter 2'}
        count={count2}
        onHandleClick={handleClickCounter2}
      />
      <Text>{`Is Counter 2 Even? : ${isCounter2Even}`}</Text>
    </>
  );
};

export default UseMemoExample;
