import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Image, Text, FlatList, Alert, ScrollView} from 'react-native';
import { useState } from 'react';



function Item({ title, date, location, position}) {
  return (

    <View style={styles.item}>
    <Text style={styles.index}>{position}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text>{date}</Text>
      <Text style={styles.locationItemText}>{location}</Text>
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

	for(var i = 0; i < 6; i++)
	{
		const victimsNames =  await AsyncStorage.getItem('Case '+i);
   		const obj = JSON.parse(victimsNames)
   		names.push(obj)
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
<Image source={pic} style={styles.memoir} imageStyle={{borderBottomRightRadius:35,borderBottomLeftRadius:35}} />
<View style={styles.DarkOverlayOne}></View>
<Text style={styles.nameText}>George Floyd</Text>
<Text style={styles.dateText}>Killed: May 25, 2020</Text>
<Text style={styles.placeText}>Minneapolis, Minnesota, U.S</Text>
<View style={{ backgroundColor:'white', position:'absolute', top:'40%', width:'100%', height:'9%',borderBottomRightRadius:35,borderBottomLeftRadius:35,borderTopLeftRadius:35,borderTopRightRadius:35, marginTop:10,	padding:10, }}>
 <Text style={{color:'white', alignSelf:'center', backgroundColor:'black'}}> BBBBB </Text>
</View>
<View style={styles.list}>
<ScrollView>
<Text style={{color:'white', alignSelf:'center'}}>Deceased</Text>
<FlatList
        data={this.state.data}
        renderItem={({ item, index }) => <Item title={item.name} date={item.date} location={item.location} position={index+1} />}
        keyExtractor={item => item.date}
      />
</ScrollView>
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
  borderBottomRightRadius:35,
  borderBottomLeftRadius:35
  },
  memoir:{
  	width:'100%',
  	height:'40%',
  	margin:0,
  	padding:0,
  	borderBottomRightRadius:35,
  	borderBottomLeftRadius:35
  

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
    backgroundColor: 'red',
    padding:10,
    marginVertical: 4,
    borderRadius:15,

    

  },
  title: {
    fontSize: 32,
     marginRight:15,
     fontWeight:'bold',
  },

  list:{
  	position:'absolute',
  	top:'50%',
  	width:'100%',
  	padding:10,
  },

  locationItemText:{
  	position:'absolute',
  	bottom:0,
  	right:0,
  	margin:5,
  	fontWeight:'normal',
  	color:'white',

  },

  index:{
  	position:'absolute',
  	right:0,
  	top:0,
  	fontSize:25,
  	padding:5,
  	fontWeight:'bold',
  }

});



