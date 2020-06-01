import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Image, Text, FlatList} from 'react-native';



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


render(){
 let pic = {uri:"https://www.gannett-cdn.com/presto/2020/05/28/USAT/52d95d1f-31e5-4d4e-8d3d-2f7c98461721-Floyd3.JPG?width=660&height=647&fit=crop&format=pjpg&auto=webp"};

return(

<View style={styles.container}>
<Image source={pic} style={styles.memoir} imageStyle={{borderBottomRightRadius:65}}/>
<View style={styles.DarkOverlayOne}></View>
<Text style={styles.nameText}>George Floyd </Text>
<Text style={styles.dateText}>May 25, 2020</Text>
<Text style={styles.placeText}>Minneapolis, Minnesota, U.S</Text>
<View style={styles.list}>
<FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
</View>
</View>

 );
}
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
