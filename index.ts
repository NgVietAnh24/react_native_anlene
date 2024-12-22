import { registerRootComponent } from 'expo';

// import App from './app/App';
import Welcome from './app/screens/welcome';
import ExerciseScreen from './app/screens/check';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ExerciseScreen);
