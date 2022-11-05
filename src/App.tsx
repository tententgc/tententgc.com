
import ThemeContext from './context/ThemeContext';
import AppRouter from './AppRouter';

const App:React.FC<any> = () => { 
  return(
    <ThemeContext>
      <AppRouter />
    </ThemeContext>
  )
}

export default App;