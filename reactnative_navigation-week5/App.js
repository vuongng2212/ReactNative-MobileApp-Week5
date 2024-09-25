import React, { useState } from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import vs_blue from './assets/vs_blue.png';
import vs_red from './assets/vs_red.png';
import vs_black from './assets/vs_black.png';
import vs_silver from './assets/vs_silver.png';
import star from './assets/star.png';
import group1 from './assets/Group1.png';

const Stack = createNativeStackNavigator();
export default function App() {
  const [selectedImage, setSelectedImage] = useState(vs_blue); 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} selectedImage={selectedImage} />}
        </Stack.Screen>
        <Stack.Screen name="Screen2">
          {props => <Screen2 {...props} setSelectedImage={setSelectedImage} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation, selectedImage }) {
  return (
    <View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image source={selectedImage} style={{ width: 250, height: 300}}/>
      </View>
      <View style={{marginLeft:25}}>
          <Text style={{fontWeight:'Bold'}}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View style={{flexDirection:'row'}}>
          <Image source={star}/>
          <Image source={star}/>
          <Image source={star}/>
          <Image source={star}/>
          <Image source={star}/>
        </View>
        <Text>(Xem 828 đánh giá)</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10}}>
        <View style={{flex:1 ,flexDirection:'row',marginLeft:25}}>
          <Text style={{fontSize: 17,fontWeight:'Bold'}}>
            1.790.000 đ
          </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          <Text style={{textDecorationLine: 'line-through', fontSize: 15}}>
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View style={{flexDirection:'row', marginLeft:25}}>
        <Text style={{fontSize:11, fontWeight:'Bold', marginTop: 15, color:'#FA0000'}}>
        Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image source={group1} style={{marginLeft:5, marginTop:13}}/>
      </View>
       
      <View style={{marginTop:20}}>
        <Button title="4 MÀU-CHỌN MÀU" onPress={() => navigation.navigate('Screen2')}/>
      </View>

      <View style={{marginTop:20}}>
        <Button title="Chọn mua" color='#CA1536'/>
      </View>
    </View>
  );
}

function Screen2({ navigation, setSelectedImage }) {
  return(
    <View>
      <View style={{flexDirection:'Row'}}>
        <Image source={vs_blue} style={{width: 100, height: 130}}/>
        <Text style={{marginTop: 10, marginLeft: 15, fontSize: 15}}>Điện Thoại Vsmart Joy 3
Hàng chính hãng</Text>
      </View>
      <View style={{backgroundColor: '#C4C4C4', flexDirection:'column', flex: 1}}>
        <Text style={{fontSize: 18, marginLeft: 15}}>Chọn một màu bên dưới:
        </Text>
        <View style={{flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
          <TouchableOpacity style={{width:80, height: 80, marginTop: 10, backgroundColor:'#C5F1FB'}} onPress={() => setSelectedImage(vs_silver)} />
          <TouchableOpacity style={{width:80, height: 70, marginTop: 10, backgroundColor:'#F30D0D'}} onPress={() => setSelectedImage(vs_red)} />
          <TouchableOpacity style={{width:80, height: 80, marginTop: 10, backgroundColor:'#000000'}} onPress={() => setSelectedImage(vs_black)} />
          <TouchableOpacity style={{width:80, height: 80, marginTop: 10, backgroundColor:'#234896'}} onPress={() => setSelectedImage(vs_blue)} />
        </View>
        <View style={{marginTop:50}}>
          <Button title="Xong" onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </View>
  );
}