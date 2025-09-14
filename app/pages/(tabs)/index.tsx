import GenerateButton from "@/app/components/GenerateButton";
import InputContainer from "@/app/components/InputContainer";
import PosterList from "@/app/components/PosterList";
import SettingsContainer from "@/app/components/SettingsContainer";
import { useSystemTheme } from "@/app/hooks/useSystemTheme";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";

export default function Index() {
  const {themeData} = useSystemTheme()
  return (
    <ScrollView style={{backgroundColor:themeData.backgroundColor}} className="flex flex-1 bg-black" showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView
        className="flex-1 flex"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="flex-1 pb-10">
          <Text  className="text-[24px] text-white mt-6 mb-5" style={{fontFamily:'Inter-bold', color:themeData.textColor}}>What type of posters do you want to create?</Text>
          <View className="w-full mb-5">
            <PosterList/>
          </View>
          <KeyboardAvoidingView className="w-full flex mb-7">
            <InputContainer/>
          </KeyboardAvoidingView>
          <View className="w-full">
            <SettingsContainer/>
          </View>
          <View className=" w-full mt-20">
            <GenerateButton/>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
