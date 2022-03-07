import { useState } from "react";
import AnswersList from "./AnswersList";

const initialFormData = {
  review: "",
  username: "",
  email: "",
  color: {
    '1': false,
    '2': false,
    '3': false,
    '4': false
  },
  "timeSpent": {
    swimming: false,
    chatting: false,
    bathing: false,
    noTime: false,
  }
}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData,setForm] = useState(initialFormData)
  const [formSubmissions,setFormSubmission] = useState([])

  function handleInput(event){
    setForm(prev => ({...prev, [event.target.name]: event.target.value}))
  }

  function handleCheck(event){
    const {name,value,checked} = event.target
    setForm(prev => ({...prev, [name]: {...[name], [value]: checked}}))
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
    setFormSubmission(prev => [...prev, {...formData}])
    console.log(formSubmissions)
    setForm(initialFormData)
  }

  function Checkboxes({handleCheck}) {
    return <ul>
    <li>
      <label
        ><input
          name="timeSpent"
          type="checkbox"
          value="swimming"
          onChange={handleCheck}
          checked= {formData["timeSpent"].swimming}
        />Swimming
        </label>
    </li>
    <li>
      <label
        ><input name="timeSpent" type="checkbox" value="bathing" onChange={handleCheck} checked= {formData["timeSpent"].bathing} />Bathing
      </label>
    </li>
    <li>
      <label
        ><input
          name="timeSpent"
          type="checkbox"
          value="chatting"
          onChange={handleCheck}
          checked= {formData["timeSpent"].chatting}
        />Chatting
      </label>
    </li>
    <li>
      <label
        ><input name="timeSpent" type="checkbox" value="noTime" onChange={handleCheck} checked= {formData["timeSpent"].noTime} />I don't like to
        spend time with it
      </label>
    </li>
  </ul>
  }

  function RadioButtons({handleCheck}){
    return <ul>
  <li>
    <input id="color-one" type="radio" name="color" value="1" onChange={handleCheck} checked={formData.color["1"]}/>
      <label
      htmlFor="color-one"
      >1
      </label>
  </li>
  <li>
    <input id="color-two" type="radio" name="color" value="2" onChange={handleCheck} checked={formData.color["2"]} /><label
      htmlFor="color-two"
      >2
      </label>
  </li>
  <li>
    <input id="color-three" type="radio" name="color" value="3"  onChange={handleCheck} checked={formData.color["3"]}/><label
      htmlFor="color-three"
      >3
      </label>
  </li>
  <li>
    <input id="color-four" type="radio" name="color" value="4"  onChange={handleCheck} checked={formData.color["4"]}/><label
      htmlFor="color-four"
      >4
      </label>
  </li>
</ul>
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={formSubmissions}/>
      </section>
      <section className="main__form">
        <form onSubmit={handleSubmit} className="form">
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <RadioButtons handleCheck={handleCheck}/>
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <Checkboxes handleCheck={handleCheck}/>
        </div>
        <label
          >What else have you got to say about your rubber duck?<textarea
            onChange={handleInput}
            name="review"
            cols="30"
            rows="10"
            value={formData.review}
          ></textarea>
        </label>
        <label
          >Put your name here (if you feel like it):<input
            onChange={handleInput}
            type="text"
            name="username"
            value={formData.username} />
        </label>
        <label
          >Leave us your email pretty please??<input
            onChange={handleInput}
            type="email"
            name="email"
            value={formData.email} />
        </label>
        <input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
      </section>
    </main>
  );
}

export default Main;
