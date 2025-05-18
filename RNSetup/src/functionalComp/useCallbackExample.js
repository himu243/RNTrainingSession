import React, {useCallback, useState} from 'react';
import {Button} from 'react-native';
import Title from '../components/Title';
import CountComponent from '../components/Count';

const UseCallbackExample = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Count 0 (xx11)
  // Count 1 (xx22)
  const handleClickCounter1 = useCallback(() => {
    // setCount1(prevCount => prevCount + 1);
    setCount1(count1 + 1);
  }, [count1]);

  const handleClickCounter2 = useCallback(() => {
    // setCount2(prevCount => prevCount + 1);
    setCount2(count2 + 1);
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
    </>
  );
};

export default UseCallbackExample;
