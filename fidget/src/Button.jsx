import React, {useState} from 'react'


const Button = () => {
  const [clickMes, setClickMes] = useState([
    "Click me!", "Loser", "Loser", "Loser", "Loser",
  ]);
  const [scale, setScale] = useState(true);

  
  const toggleClick = (event) => {
    if (event.target.textContent !== "Click me!") return;
    clickMes.sort( (a, b) => {return 0.5 - Math.random()});
     const newArray = [...clickMes]
    setClickMes(newArray)
    
    console.log(event.target);
  } 

  const toggleScale = (event) => {
    if (event.target.textContent === "Click me!") setScale(false);
    else {
      setScale(true)
    }
  }
  console.log(clickMes);

return (
  <div className="toggle">
    {clickMes.map((click, index) => {
      return (
        <div key={index} className="button">
          <button className={!scale ? "" : "toggle"} onMouseOver={toggleScale} onClick={toggleClick}>{click}</button>
        </div>
      )
    })  
    }
    </div>
      )

}

export default Button;

