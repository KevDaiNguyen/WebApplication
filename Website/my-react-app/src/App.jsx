import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import Employement from './Employement.jsx'
import Counter from './Counter.jsx'
import InputExample from './InputExample.jsx'
import ColorPicker from './ColorPicker.jsx'
import Car from './Car.jsx'
import ToDoList from './ToDoList.jsx'
import UseStateExample from './UseStateExample.jsx'
import WindowSize from './WindowSize.jsx'
import DigitalClock from './DigitalClock.jsx'
import ComponentA from './ComponentA.jsx'
import UseRefExample from './UseRefExample.jsx'
import Stopwatch from './Stopwatch.jsx'
import RandomTool from './RandomTool.jsx'

function App() {
  
  const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}]

  /*
  const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
                      {id: 7, name: "celery", calories: 15}, 
                      {id: 8, name: "carrots", calories: 25}, 
                      {id: 9, name: "corn", calories: 63}, 
                      {id: 10, name: "broccoli", calories: 50}]
  */

  const vegetables = [];

  /* For example pieces
  return(
    <>
      <DigitalClock />
      <Header/>
      <Stopwatch/>
      <ComponentA />
      <WindowSize />
      <UseStateExample />
      <ToDoList />
      <ColorPicker/>
      <InputExample/>
      <Car/>
      <Counter/>
      <Card/><br/>
      <ProfilePicture/>
      {fruits.length > 0 && <List items={fruits} category = "Fruits"/>}
      {vegetables.length > 0 ? <List items={vegetables} category = "Fruits"></List>: null} <br/>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Employement/> <br/>
      <UserGreeting isLoggedIn={true} username="Random"/>
      <Food/> <br/>
      <UseRefExample/> <br/>
      <Button/>
      <Footer/>
    </>
  )
  */

  return(
    <>
    <Header/>
    <RandomTool/>
    <Footer/>
    </>
  );}

export default App
