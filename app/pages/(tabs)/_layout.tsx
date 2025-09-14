import TabBarIndicator from '@/app/components/TabBarIndicator';
import TabBarLabel from '@/app/components/TabBarLabel';
import { useSystemTheme } from '@/app/hooks/useSystemTheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFonts } from 'expo-font';
import { ActivityIndicator, Pressable, View } from 'react-native';
import Index from '.';
import Advanced from './advanced';

const Tab = createMaterialTopTabNavigator();

const TabsLayout = () =>{
    const {themeData} = useSystemTheme()
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
        <View style={{backgroundColor:themeData.backgroundColor}} className='flex-1 flex bg-black'>
            <View style={{backgroundColor:themeData.backgroundColor}} className='flex-[1] w-full flex bg-black'>
                <Pressable className='mt-20 flex' style={{position:'absolute', left:20}}>
                    <AntDesign name="close" size={24} color={themeData.textColor} />
                </Pressable>
            </View>
            <View className='flex-[7] flex px-6'>
                <Tab.Navigator
                    screenOptions={{
                        tabBarLabel:({focused, children}) => <TabBarLabel focused={focused}>{children}</TabBarLabel>,
                        tabBarStyle:{
                            backgroundColor:themeData.backgroundColor,
                            shadowColor:'transparent',
                            elevation:0,
                            shadowOffset:{
                                height:0,
                                width:0
                            }
                        },
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