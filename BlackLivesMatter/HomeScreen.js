import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Image, Text, FlatList, Alert} from 'react-native';
import { useState } from 'react';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}







export default class HomeScreen extends React.Component{

state = {
data: [],
};


async componentDidMount() {

this._storeData();
this._retrieveData();
};


_storeData = async () => {

	const storeGeorgeFloyd = { 'name': 'George Floyd',
							   'date' : 'May 25, 2020',
							   'location':'Minneapolis, Minnesota, U.S', 
							   'participants': {
							   	'suspectOne':'Derek Chauvin',
							   	'suspectTwo': 'Tou Thao',
							   	'suspectThree':'J. Alexander Kueng',
							   }

	}

	const storeLaquanMcDonald = { 'name': 'Laquan McDonald',
							   	  'date' : 'October 20, 2014',
							      'location':'Chicago, Illinois, U.S', 
							      'participants': {
							   	 	'suspectOne':'Jason Van Dyke',
							   }

	}

		const storeTamirRice = { 'name': 'Tamir Rice',
							   	  'date' : 'November 22, 2014',
							      'location':'Cleveland, Ohio, U.S', 
							      'participants': {
							   	 	'suspectOne':'Timothy Loehmann',
							   	 	'suspectTwo': 'Frank Garmback',
							   }

	}

	const storeKendraJames = { 'name': 'Kendra James',
							   	  'date' : 'May 5, 2003',
							      'location':'Portland, Oregon, U.S', 
							      'participants': {
							   	 	'suspectOne':'Scott McCollister',
							   	 	'suspectTwo': 'Kenneth Reynolds',
							   	 	'suspectThree':'Rick Bean',
							   }

	}

	const storeJamesPerez = {'name': 'James Perez',
							   	  'date' : ' March 28, 2004',
							      'location':'Portland, Oregon, U.S', 
							      'participants': {
							   	 	'suspectOne':'Jason Sery',
							   	 	'suspectTwo': 'Sean Macomber',
							   }
	}

	const storeFreddieGray = {'name': 'Freddie Gray',
							   	  'date' : ' April 12, 2015 ',
							      'location':'Baltimore, Maryland, U.S', 
							      'participants': {
							   	 	'suspectOne':'Caesar R. Goodson Jr.',
							   	 	'suspectTwo': 'William G. Porter',
							   	 	'suspectThree': 'Brian W. Rice',
							   	 	'suspectFour': 'Edward M. Nero',
							   	 	'suspectFive': 'Garrett Miller',
							   	 	'suspectSix': 'Alicia D. White'
							   }
	}


	try {
    const GeorgeFloyd = JSON.stringify(storeGeorgeFloyd)
    const LaquanMcDonald = JSON.stringify(storeLaquanMcDonald)
    const TamirRice = JSON.stringify(storeTamirRice) 
    const KendraJames = JSON.stringify(storeKendraJames)
    const JamesPerez = JSON.stringify(storeJamesPerez)
    const FreddieGray = JSON.stringify(storeFreddieGray)

    await AsyncStorage.setItem('Case 0', GeorgeFloyd)
    await AsyncStorage.setItem('Case 1', LaquanMcDonald)
    await AsyncStorage.setItem('Case 2', TamirRice)
    await AsyncStorage.setItem('Case 3', KendraJames)
    await AsyncStorage.setItem('Case 4', JamesPerez)
    await AsyncStorage.setItem('Case 5', FreddieGray)
  	//Alert.alert(jsonValue);
  } catch (e) {
    console.log(e);
  }

}


_retrieveData = async () => {

	try {
	let names = []

	for(var i = 0; i <= 7; i++)
	{
		const jsonValue =  await AsyncStorage.getItem('Case '+i);
   		const obj = JSON.parse(jsonValue)
   		names.push(obj.name)
   		this.setState({data:names})
	}
  
  } catch(e) {
    // read error
  }

  Alert.alert('done')

}

render(){
 let pic = {uri:"https://www.gannett-cdn.com/presto/2020/05/28/USAT/52d95d1f-31e5-4d4e-8d3d-2f7c98461721-Floyd3.JPG?width=660&height=647&fit=crop&format=pjpg&auto=webp"};

return(

<View style={styles.container}>
<Image source={pic} style={styles.memoir} imageStyle={{borderBottomRightRadius:65}}/>
<View style={styles.DarkOverlayOne}></View>
<Text style={styles.nameText}>GeorgeFloyd</Text>
<Text style={styles.dateText}>May 25, 2020</Text>
<Text style={styles.placeText}>Minneapolis, Minnesota, U.S</Text>
<View style={styles.list}>
<FlatList
        data={this.state.data}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={item => item.id}
      />
</View>
</View>

 );}

}




_getVictimsNames = async() =>{

const jsonValue =  await AsyncStorage.getItem('George Floyd').then((data) => {
  if(data)
  {
        return data;
  }
})

 names.push(jsonValue)
return names;

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
  },

  DarkOverlayOne:{
  position:'absolute',
  height:'40%',
  width:'100%',
  backgroundColor:'black',
  opacity:0.4,
  borderBottomRightRadius:65,
  },
  memoir:{
  	width:'100%',
  	height:'40%',
  	margin:0,
  	padding:0,
  	borderBottomRightRadius:65,

  },
  nameText:{
  	color:'white',
  	fontSize:35,
  	fontWeight:'bold',
   	alignSelf:'center',
   	position:'relative',
   	bottom:'10%',
  },

  dateText:{
	color:'red',
  	fontSize:15,
  	fontWeight:'normal',
   	alignSelf:'center',
   	position:'relative',
   	bottom:'10%',
   
  },

  placeText:{
  	color:'red',
  	fontSize:15,
  	fontWeight:'normal',
   	position:'absolute',
 	transform: [{ rotate: '90deg'}],

 	

  },
 item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 32,
  },

  list:{
  	position:'absolute',
  	top:'40%',
  	width:'100%',
  },

});



