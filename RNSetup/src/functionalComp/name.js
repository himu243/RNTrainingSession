import React, {Component, useEffect, useState} from 'react';
import {Text, Button, TextInput, FlatList, View} from 'react-native';

const NameComponent = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });
  const [currItemName, setCurrItemName] = useState('');

  const [items, setItems] = useState([]);

  const [dateKey, setDateKey] = useState(0);

  const onClickAddItem = () => {
    const newArr = [
      ...items,
      {
        name: currItemName,
      },
    ];
    setItems(newArr);
    // setCurrItemName('');
    // Add Item in the items Array
  };

  const onClickDeleteItem = () => {
    // Before 5
    const newArr = items.filter((item, index) => index !== 1);
    // After 4
    setItems(newArr);
  };

  const onClickAddTop = () => {
    const newArr = [
      {
        name: currItemName,
      },
      ...items,
    ];
    setItems(newArr);
  };

  const updateKey = () => {
    // dateKey -> 0
    // dateKey -> 1
    setDateKey(dateKey + 1);
  };
  const onChangeSetCurrItem = val => {
    setCurrItemName(val);
  };
  // const setFirstName = val => {
  //   // const setStCallback = prevState => {
  //   //   return {...prevState, firstName: val};
  //   // };

  //   // name.firstName = val;
  //   // setName(name);

  //   setName(prevState => ({...prevState, firstName: val}));
  // };

  // const setLastName = val => {
  //   setName(prevState => ({...prevState, lastName: val}));
  // };

  const renderComp = ({item}) => {
    return <TextInput placeholder={item.name} />;
  };
  return (
    <>
      <TextInput
        style={{
          margin: 6,
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 4,
          padding: 8,
          marginTop: 100,
        }}
        value={currItemName}
        placeholder={'Enter Item Name'}
        onChangeText={onChangeSetCurrItem}
      />
      <Button title="Add Item" onPress={onClickAddItem} />
      <Button title="Add Item Top" onPress={onClickAddTop} />
      <Button title="Delete Item" onPress={onClickDeleteItem} />
      <Button title="Update Key of Item" onPress={updateKey} />

      {/* <CustomTextComp key={`${dateKey}`} name={'Milk'} />;
      <CustomTextComp key={`${dateKey + 1}`} name={'Coffee'} />; */}
      {items.map((item, index) => {
        return (
          <CustomTextComp key={item.name} name={item.name} index={index} />
        );
      })}
      {/*
        New Item - 0
        Milk - 1
        Coffee - 2
        Newspaper - 3
        Books - 4
         */}
      {/* <TextInput
        style={{
          margin: 6,
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 4,
          padding: 8,
        }}
        value={name.firstName}
        placeholder={'Enter First Name'}
        onChangeText={setFirstName}
      />
      <TextInput
        style={{
          margin: 6,
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 4,
          padding: 8,
        }}
        value={name.lastName}
        placeholder={'Enter Last Name'}
        onChangeText={setLastName}
      />
      <Text>{JSON.stringify(name)}</Text> */}
    </>
  );
};

export default NameComponent;

const fxn = (nextProps, nextState) => {
  // Write Logic here
  return false;
};

const CustTxtComp = React.memo(() => {
  return <></>;
}, fxn);

class CustomTextComp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(
      `Component Mounted for ${this.props.name} and index ${this.props.index}`,
    );
  }

  shouldComponentUpdate(nextProps) {
    return this.props.name !== nextProps.name;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      console.log('Use Effect called on text change');
    }
    console.log(`Component Updated for ${this.props.name}`);
  }

  componentWillUnmount() {
    console.log(`Component Unmounted for ${this.props.name}`);
  }
  render() {
    return <Text>{this.props.name}</Text>;
  }
}
