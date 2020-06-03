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
this._calcNumberConvictions();
};


_storeData = async () => {

	const storeGeorgeFloyd = { 'name': 'George Floyd',
							   'date' : 'May 25, 2020',
							   'location':'Minneapolis, Minnesota, U.S', 
							   'conviction':'n/a',
							   'participants': {
							   	'suspectOne':'Derek Chauvin',
							   	'suspectTwo': 'Tou Thao',
							   	'suspectThree':'J. Alexander Kueng',
							   }

	}

	const storeLaquanMcDonald = { 'name': 'Laquan McDonald',
							   	  'date' : 'October 20, 2014',
							      'location':'Chicago, Illinois, U.S',
							      'conviction':'true',
							      'settlementmoney':0,
							      'sentence':81,
							      'participants': {
							   	 	'suspectOne':'Jason Van Dyke',
							   }

	}

		const storeTamirRice = { 'name': 'Tamir Rice',
							   	  'date' : 'November 22, 2014',
							      'location':'Cleveland, Ohio, U.S',
							      'conviction':'false',
							      'settlementmoney':6000000,
							      'participants': {
							   	 	'suspectOne':'Timothy Loehmann',
							   	 	'suspectTwo': 'Frank Garmback',
							   }

	}

	const storeKendraJames = { 'name': 'Kendra James',
							   	  'date' : 'May 5, 2003',
							      'location':'Portland, Oregon, U.S',
							      'conviction':'false',
							      'settlementmoney':0, 
							      'participants': {
							   	 	'suspectOne':'Scott McCollister',
							   	 	'suspectTwo': 'Kenneth Reynolds',
							   	 	'suspectThree':'Rick Bean',
							   }

	}

	const storeJamesPerez = {'name': 'James Perez',
							   	  'date' : ' March 28, 2004',
							      'location':'Portland, Oregon, U.S',
							      'conviction':'false',
							      'settlementmoney':350000, 
							      'participants': {
							   	 	'suspectOne':'Jason Sery',
							   	 	'suspectTwo': 'Sean Macomber',
							   }
	}

	const storeFreddieGray = {'name': 'Freddie Gray',
							   	  'date' : ' April 12, 2015 ',
							      'location':'Baltimore, Maryland, U.S',
							      'conviction':'false',
							      'settlementmoney':6400000,
							      'participants': {
							   	 	'suspectOne':'Caesar R. Goodson Jr.',
							   	 	'suspectTwo': 'William G. Porter',
							   	 	'suspectThree': 'Brian W. Rice',
							   	 	'suspectFour': 'Edward M. Nero',
							   	 	'suspectFive': 'Garrett Miller',
							   	 	'suspectSix': 'Alicia D. White',
							   }
	}


	const storeSandraBland = {'name': 'Sandra Bland',
							   	  'date' : 'July 13, 2015',
							      'location':'Waller County Jail, Hempstead, Texas, U.S',
							      'conviction':'false',
							      'settlementmoney':0, 
							      'participants': {
							   	 	'suspectOne':'Waller County Jail',
							   	 }
							   
	}

	const storeOscarGrant = {'name': 'Oscar Grant',
							   	  'date' : 'January 1, 2009',
							      'location':'Oakland, California, U.S',
							      'conviction':'true',
							      'settlementmoney':50000000, 
							      'participants': {
							   	 	'suspectOne':'Johannes Mehserle',
							   	 }
							   
	}

	const storeEricGarner = {'name': 'Eric Garner',
							   	  'date' : 'July 17, 2014',
							      'location':'Staten Island, New York, U.S.',
							      'conviction':'false',
							      'settlementmoney':5900000,
							      'participants': {
							   	 	'suspectOne':'Daniel Pantaleo',
							   	 	'suspectTwo': 'Justin Damico',
							   }
	}

	const storeWalterScott = {'name': 'Walter Scott',
							   	  'date' : 'April 4, 2015',
							      'location':'North Charleston, South Carolina, U.S.',
							      'conviction':'true',
							      'sentence':240,
							      'settlementmoney':6500000,
							      'participants': {
							   	 	'suspectOne':'Michael Slager',
							   	 	
							   }
	}

	const storeSeanBell = {'name': 'Sean Bell',
							   	  'date' : 'November 25, 2006',
							      'location':'Jamaica, Queens, New York City U.S.', 
							      'conviction':'false',
							      'settlementmoney':3350000,
							   	  'participants': {
							   	 	'suspectOne':'Michael Carey',
							   	 	'suspectTwo': 'William G. Porter',
							   	 	'suspectThree': 'Marc Cooper',
							   	 	'suspectFour': 'Gescard Isnora',
							   	 	'suspectFive': 'Michael Oliver',
							   }
	}

	const storeTerenceCrutcher = {'name': 'Terence Crutcher',
							   	  'date' : 'September 16, 2016',
							      'location':'Tulsa, Oklahoma, U.S',
							       'conviction':'false',
							   	  'participants': {
							   	 	'suspectOne':'Betty Jo Shelby',
							   	 	'suspectTwo': 'Tyler Turnbough',
		
							   }
	}

	const storeSamuelDuBose = {'name': 'Samuel DuBose',
							   	  'date' : 'July 19, 2015',
							      'location':'Cincinnati, Ohio, U.S', 
							      'conviction':'false',
							   	  'participants': {
							   	 	'suspectOne':'Raymond Tensing',
		
							   }
	}


	try {
    const GeorgeFloyd = JSON.stringify(storeGeorgeFloyd)
    const LaquanMcDonald = JSON.stringify(storeLaquanMcDonald)
    const TamirRice = JSON.stringify(storeTamirRice) 
    const KendraJames = JSON.stringify(storeKendraJames)
    const JamesPerez = JSON.stringify(storeJamesPerez)
    const FreddieGray = JSON.stringify(storeFreddieGray)
    const SandraBland = JSON.stringify(storeSandraBland)
    const OscarGrant = JSON.stringify(storeOscarGrant)
    const EricGarner = JSON.stringify(storeEricGarner)
    const WalterScott = JSON.stringify(storeWalterScott)
    const TerenceCrutcher  = JSON.stringify(storeTerenceCrutcher)
    const SamuelDuBose  = JSON.stringify(storeSamuelDuBose)
    

    await AsyncStorage.setItem('Case 0', GeorgeFloyd)
    await AsyncStorage.setItem('Case 1', LaquanMcDonald)
    await AsyncStorage.setItem('Case 2', TamirRice)
    await AsyncStorage.setItem('Case 3', KendraJames)
    await AsyncStorage.setItem('Case 4', JamesPerez)
    await AsyncStorage.setItem('Case 5', FreddieGray)
    await AsyncStorage.setItem('Case 6', SandraBland)
    await AsyncStorage.setItem('Case 7', OscarGrant)
    await AsyncStorage.setItem('Case 8', EricGarner)
    await AsyncStorage.setItem('Case 9', WalterScott)
    await AsyncStorage.setItem('Case 10', TerenceCrutcher)
    await AsyncStorage.setItem('Case 11', SamuelDuBose)
  	//Alert.alert(jsonValue);
  } catch (e) {
    console.log(e);
  }

}


_retrieveData = async () => {

	try {
	let names = []

	for(var i = 0; i < 12; i++)
	{
		const victimsNames =  await AsyncStorage.getItem('Case '+i)
   		const obj = JSON.parse(victimsNames)

   		names.push(obj)
   		this.setState({data:names})

	}
  
  } catch(e) {
    // read error
  }

  Alert.alert('done')

}


_calcNumberConvictions = async () =>{

let convictionsResults = []


try {

for(var i = 0; i < 12; i++)
{


	const victimsNames =  await AsyncStorage.getItem('Case '+i)
	const obj =  JSON.parse(victimsNames)
	
	Alert.alert(obj.conviction)
	convictionsResults.push(obj.conviction)


	var resultsFalse;
	//Alert.alert('j')
	if(convictionsResults[i] == false)
	{
		Alert.alert('here!')
		resultsFalse++;
	}

	// Alert.alert(resultsFalse)

}
this.setState({numNonConviction:resultsFalse})
 } catch(e) {
    // read error
  }


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
<View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{position:'absolute', right:0, backgroundColor: 'powderblue', }}>
         <Text style={{color:'white', alignSelf:'center', backgroundColor:'black'}}> Total #</Text>
 		<Text style={{color:'white', alignSelf:'center', backgroundColor:'black'}}> 100</Text>
 		<Text style={{color:'white', alignSelf:'center', backgroundColor:'black'}}> No Convictions</Text>
        </View>
        <View style={{position:'absolute', right:'37%', backgroundColor: 'skyblue', }}>
        <Text style={{color:'white', alignSelf:'center', backgroundColor:'black'}}> Total #</Text>
 		<Text style={{color:'white', alignSelf:'center', backgroundColor:'black'}}> 100</Text>
		<Text style={{color:'white', alignSelf:'center', backgroundColor:'black'}}> No Convictions</Text>
    	 </View>
        <View style={{position:'absolute', left:0, backgroundColor: 'steelblue'}}>
         <Text style={{color:'white', alignSelf:'center', backgroundColor:'black'}}> Total #</Text>
 		 <Text style={{color:'white', alignSelf:'center', backgroundColor:'black'}}> 100</Text>
 		 <Text style={{color:'white', alignSelf:'center', backgroundColor:'black'}}> No Convictions</Text>
        </View>
      </View>
</View>
<View style={styles.list}>
<ScrollView>
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
    fontSize: 25,
     marginRight:15,
     fontWeight:'bold',
  },

  list:{
  	position:'absolute',
  	top:'50%',
  	width:'100%',
  	padding:10,
  	marginBottom:50,
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



