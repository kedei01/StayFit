import { View, Text, StyleSheet } from "react-native";
import StackNavigator from "./NavigateScreen";
import { FitnessContext } from "./fitnesscontext";

const app = () => {
}
export default function App() {
  // const [screen, setScreen] = useState(null);
  // const getScreen = () => {
  //   if (loggedIn) return <LoggedIn />;
  //   if (screen === 'Register') return <RegisterScreen />;
  //   return <Login />;
  // };
  // const getScreen = () => {
  //   if (loggedIn) return <LoggedIn />;
  //   if (screen === 'Login') return <Signup setScreen={setScreen} />;
  //   return <Login setScreen={setScreen} />;
  // };
  
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>


  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
  },
});
