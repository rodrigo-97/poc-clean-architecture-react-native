import { TodoPage } from './src/presentation/screens/todos/Todo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/presentation/screens/home/Home';
import { Todos } from './src/presentation/screens/todos/Todos';
import { CreateTodo } from './src/presentation/screens/todos/CreateTodo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle: { padding: 16}, headerShown: false }}>
        <Stack.Screen name="home" options={{ headerTitle: "Fodase" }} component={Home} />
        <Stack.Screen name="list" component={Todos} />
        <Stack.Screen name="create" component={CreateTodo} />
        <Stack.Screen name="id" component={TodoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
