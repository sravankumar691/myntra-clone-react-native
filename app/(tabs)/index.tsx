import EditScreenInfo from "../../components/EditScreenInfo";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { MainContext } from "../../context";
import LoginScreen from "../../components/LoginScreen";
import HomeScreen from "../../components/HomeScreen";



export default function TabOneScreen() {
  const contextValue = {
    user: {
      userName: "sravan",
      isLoggedIn: false,
      phoneNumber: "9876543219",
    },
    cart: [],
    whishlist: [],
  };
  return (
    <GluestackUIProvider config={config}>
      <MainContext.Provider value={contextValue}>
        <Box width="100%" flex={1} justifyContent="center" alignItems="center">
          {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
          {/* <LoginScreen /> */}
          <HomeScreen/>
        </Box>
      </MainContext.Provider>
    </GluestackUIProvider>
  );
}
