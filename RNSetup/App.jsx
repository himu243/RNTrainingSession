import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class AppComponent extends Component {
  constructor(props) {
    // 1
    super(props);
    this.state = {
      isMount: true,
    };
  }

  onPressUnmount = () => {
    this.setState({isMount: !this.state.isMount});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.isMount && <MyOtherComponent color="yellow" />}

        <TouchableOpacity
          style={{marginTop: 100}}
          onPress={this.onPressUnmount}>
          <Text>{'Unmount Me'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AppComponent;

class MyOtherComponent extends Component {
  constructor(props) {
    // 1
    super(props);
    this.state = {
      color: 'red',
    };
  }

  // static getDerivedStateFromProps(props) {
  //   return {color: props.color};
  // }

  componentDidMount() {
    this.timerValue = setTimeout(() => {}, 1000000);
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    clearTimeout(this.timerValue);

    console.log('Unmount called');
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.color !== this.state.color) {
      return true;
    } else {
      return false;
    }
  }

  onClick = () => {
    this.setState({color: 'orange'});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: this.state.color,
        }}>
        <Text>{'Hello World'}</Text>
        <Text>{'Hello World'}</Text>
        <TouchableOpacity onPress={this.onClick}>
          <Text>{'Click me'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   /*
//    * To keep the template simple and small we're adding padding to prevent view
//    * from rendering under the System UI.
//    * For bigger apps the recommendation is to use `react-native-safe-area-context`:
//    * https://github.com/AppAndFlow/react-native-safe-area-context
//    *
//    * You can read more about it here:
//    * https://github.com/react-native-community/discussions-and-proposals/discussions/827
//    */
//   const safePadding = '5%';

//   return (
//     <View style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         style={backgroundStyle}>
//         <View style={{paddingRight: safePadding}}>
//           <Header/>
//         </View>
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//             paddingHorizontal: safePadding,
//             paddingBottom: safePadding,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
