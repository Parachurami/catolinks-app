import TabBarIndicator from '@/app/components/TabBarIndicator';
import TabBarLabel from '@/app/components/TabBarLabel';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFonts } from 'expo-font';
import { ActivityIndicator, Pressable, View } from 'react-native';
import Index from '.';
import Advanced from './advanced';

const Tab = createMaterialTopTabNavigator();

const TabsLayout = () =>{
    const [fontsLoaded] = useFonts(
        {
            'Inter': require('../../../assets/fonts/Inter (1)/static/Inter_18pt-Regular.ttf'),
            'Inter-bold': require('../../../assets/fonts/Inter (1)/static/Inter_18pt-Bold.ttf'),
        }
    );

    if(!fontsLoaded){
        return <View className='bg-black flex flex-1 items-center justify-center'>
            <ActivityIndicator/>
        </View>
    }
    
    return(
        <View className='flex-1 flex'>
            <View className='flex-[1] flex bg-black'>
                <Pressable className='mt-10 ml-16'>
                    <AntDesign name="close" size={24} color="white" />
                </Pressable>
            </View>
            <View className='flex-[7] flex'>
                <Tab.Navigator
                    screenOptions={{
                        tabBarLabel:({focused, children}) => <TabBarLabel focused={focused}>{children}</TabBarLabel>,
                        
                        tabBarIndicator:({state, width}) => <TabBarIndicator width={width} state={state} />,
                        swipeEnabled:false
                    }}
                    
                >
                    <Tab.Screen
                    options={{
                        // tabBarIcon:(({color, focused}) =><View></View>)
                    }}
                     name='Smart Script' component={Index}/>
                    <Tab.Screen name='Advanced Script' component={Advanced}/>
                </Tab.Navigator>
            </View>
        </View>
    )
}

export default TabsLayout;