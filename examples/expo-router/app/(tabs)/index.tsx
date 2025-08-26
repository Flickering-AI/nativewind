import { Text, View } from "react-native";

import { vars } from "nativewind";

const theme = vars({
  "--theme-fg": "green",
});

const App = () => {
  return (
    <View className="flex-1 justify-center items-center gap-10" style={theme}>
      <View>
        <View className="w-4 h-4 bg-red-500" />
        <View className="w-[16] h-[16] bg-green-500" />
        <View className="w-[1rem] h-[1rem] bg-blue-500" />
      </View>
      <Text className="text-[--theme-fg]">Variables!!!</Text>
      <Text
        suppressHighlighting
        className="active:scale-150 text-red-500 active:text-[--theme-fg] transition"
      >
        Transitions
      </Text>
      <Text className="animate-bounce">Animations!!!</Text>
    </View>
  );
};

export default App;
