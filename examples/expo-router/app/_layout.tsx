import { getScaleRatio } from "@/utils/screen";
import "../global.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { rem, designRatio, vw, vh } from "nativewind";
import { memo, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { INTERNAL_SET } from "react-native-css-interop/dist/shared";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";
rem.set(16 * getScaleRatio());
designRatio.set(getScaleRatio());
vw[INTERNAL_SET](Dimensions.get("window").width);
vh[INTERNAL_SET](Dimensions.get("window").height);
Dimensions.addEventListener("change", ({ window }) => {
  rem.set(16 * getScaleRatio());
  vw[INTERNAL_SET](window.width);
  vh[INTERNAL_SET](window.height);
});

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </View>
  );
}
