import React, {useState} from 'react'


const Button = () => {
  const [clickMes, setClickMes] = useState([
    "Click me!", "Loser", "Loser", "Loser", "Loser",
  ]);

  
  const toggleClick = (event) => {
    
    if (event.target.textContent !== "Click me!") return;
    clickMes.sort( (a, b) => {return 0.5 - Math.random()});
     const newArray = [...clickMes]
    setClickMes(newArray)
    
    console.log(event.target);
  } 
  console.log(clickMes);

return (
  <div>
    {clickMes.map((click, index) => {
      return (
        <div key={index}>
          <button onClick={toggleClick}>{click}</button>
        </div>
      )
    })  
    }
    </div>
      )

}

export default Button;

