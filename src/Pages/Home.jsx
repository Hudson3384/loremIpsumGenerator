import { useState } from 'react';
import './style.css';


function Home() {

 const range = document.getElementById('rangeInput')
  let value = range.addEventListener('input', e => e.target.value)

  return (
    <div className="Home">
      <h1>Lorem Ipsum Generator</h1>
      <form>
        <label for="rangeInput">Informe a quantidade de parágrafos: </label>
        <input type="range" max="10" min="1" vol="5"id="rangeInput" name="value"/>
        <span class="rangeValue">{value}</span>
        <input type="button" value="Gerar" onclick="newLoremIpsum()"/>
      </form>
      <p className="loremIpsumContent"> oi </p>
    </div>
  )
}

export default Home;
