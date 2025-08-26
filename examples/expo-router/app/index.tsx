import { getScaleRatio } from "@/utils/screen";
import { View, Text } from "react-native";

export default function Index() {
  return <View>
    <Text>Hello World</Text>
    <View>
      <View className="w-4 h-4 bg-red-500" />
      <View className="w-[16] h-[16] bg-green-500" />
      <View className="w-[1rem] h-[1rem] bg-blue-500" />
      <View className="w-80 h-4 bg-red-500" />
      <View className="w-[320] h-[16] bg-green-500" />
      <View className="w-[20rem] h-[1rem] bg-blue-500" />

      <View className="w-4 h-4 bg-red-500 translate-x-80" />
      <View className="w-[16] h-[16] bg-green-500" style={{
        transform: [{
          translateX: getScaleRatio() * 320
        }]
      }} />

      <Text className="text-[16px] color-black">Hello World</Text>
      <Text className="text-base">Hello World</Text>
      <Text style={{ fontSize: 16 * getScaleRatio() }}>Hello World</Text>
      <Text style={{ fontSize: 16 }}>Hello World</Text>

      <View className="w-[100vw] h-4 bg-red-500" />
    </View>
  </View>;
} 