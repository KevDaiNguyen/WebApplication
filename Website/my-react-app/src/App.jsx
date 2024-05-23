import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {
  return(
    <>
      <Header/>
      <Card/>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student/>
      <Food/>
      <Button/>
      <Footer/>
    </>
  );
}

export default App
