import './App.css';
import useDarkMode from './Components/Hook/useDarkMode/usedarkMode';

function App() {
  const {islight,changeThemeMode} = useDarkMode()
  return (
    <>   
    <section>
          <i className={`fa-solid ${islight ? 'fa-sun' : 'fa-moon'} `} onClick={changeThemeMode}></i>
     <div>
  
      <h1>dark and light modeeeeeeeee</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum quia velit quibusdam est consequuntur fuga, necessitatibus inventore a unde!</p>
      <hr />
      <div className="card">
        <ul>
          <li>ESLInin</li>
          <li>ilk dark light mode si</li>
        </ul>
      </div>
     </div>
    </section>
    </>
  )
}

export default App
