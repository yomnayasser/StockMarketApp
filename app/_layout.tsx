import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useColorScheme } from "@/src/hooks/useColorScheme";
import { store } from "@/src/store/store";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

  // const [loaded] = useFonts({
  //   SpaceMono: require("../src/assets/fonts/SpaceMono-Regular.ttf"),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(home)" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
