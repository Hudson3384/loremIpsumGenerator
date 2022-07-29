
import { useState } from 'react';
import copy from "copy-to-clipboard"; 
import './style.css';


function Home() {


  const loremText = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a interdum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eget erat id mauris rutrum vehicula a non neque. Nunc condimentum turpis vel sem vulputate imperdiet. Sed convallis mauris quis ex condimentum, non ultricies nisi molestie. Suspendisse potenti. Donec eget orci tempor, molestie eros eu, interdum sapien. Mauris porttitor imperdiet interdum. Maecenas a dui eu tellus rhoncus pellentesque. Morbi tristique urna eget rhoncus consequat. Curabitur nisl neque, ornare id eleifend et, aliquam eu lectus. Nullam rutrum porttitor iaculis. Aliquam sit amet nunc libero.',
    'Nam dignissim euismod neque, sit amet eleifend erat vestibulum sed. Nulla placerat id lectus ut vestibulum. Morbi dapibus nibh nec elit eleifend lacinia. Maecenas at felis sed dui sodales elementum. Suspendisse sed imperdiet ex, non hendrerit enim. Quisque interdum bibendum tortor, quis interdum magna egestas ut. Donec nec placerat mi. Proin faucibus eget nulla nec maximus. Fusce lacinia quam neque. Cras ullamcorper vitae velit ac iaculis. Fusce eu gravida est. Aliquam mi elit, condimentum sit amet cursus eu, dignissim eget felis.',
    'Proin consequat sit amet nibh sit amet imperdiet. Nunc vitae est semper, bibendum tortor vitae, luctus orci. Duis condimentum laoreet dolor, ac hendrerit urna rhoncus ut. Vivamus rutrum ullamcorper leo convallis maximus. Fusce eu volutpat ex. In risus felis, interdum malesuada condimentum eget, aliquam ac massa. Donec pulvinar feugiat urna vitae condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis semper enim blandit eros varius ultrices.',
    'Mauris in velit nec ante fermentum varius a eu erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque in tincidunt nulla, in venenatis leo. Sed ac hendrerit libero. Duis ut congue nunc. Nullam fermentum viverra sem vitae eleifend. Donec laoreet lectus vulputate, finibus libero eget, consectetur quam. Vivamus metus mauris, convallis ornare nisl ac, venenatis porta lorem. Phasellus ut odio ut felis lobortis pretium. Phasellus venenatis molestie lacus in ultricies. In semper enim id libero finibus finibus. Donec egestas vel nibh non ullamcorper.',
    'Duis consequat commodo tortor vel sagittis. Curabitur ac ex ultrices, aliquet erat a, ultricies elit. Nam eu pellentesque sem. Vivamus et tellus dolor. Nam sed enim sed tortor finibus fermentum. Donec id eros faucibus ante efficitur vestibulum. Ut maximus tristique luctus. Curabitur eget bibendum ante. Maecenas a nunc id mi varius imperdiet. Aenean molestie ornare laoreet. Aliquam vel nisl luctus, fermentum massa feugiat, luctus odio. Praesent id leo at lacus vulputate semper vitae ac metus. Morbi eget convallis lorem. Praesent dolor est, bibendum bibendum faucibus non, rhoncus quis velit.',
    'Praesent et massa molestie, ultricies metus a, tempor lorem. Quisque finibus risus tellus, sit amet fringilla lacus mattis id. Duis at dictum odio. Vestibulum ac ultrices libero, non ornare tortor. Integer vestibulum arcu quis felis luctus accumsan. Nulla et varius tortor. Suspendisse faucibus et dolor iaculis gravida. Cras vel pellentesque mauris. Integer pellentesque nunc nec auctor tincidunt. Fusce consectetur, diam at convallis semper, eros sapien blandit quam, a volutpat tortor ante ut nisl. Suspendisse potenti. Fusce pulvinar in nisi vitae ornare. Donec eget ex nec tellus vehicula consequat. Vivamus laoreet rutrum odio, vel gravida metus tristique at. Proin gravida at purus id tincidunt. Etiam vehicula nibh ut ornare condimentum.',
    'Integer vitae egestas neque, ac rutrum odio. Suspendisse a egestas arcu. Curabitur eu libero at erat dapibus eleifend quis sit amet quam. In et libero tellus. Suspendisse potenti. Nullam libero nisi, pretium ut sem vitae, elementum fringilla nisi. Fusce imperdiet et lorem blandit mollis. Morbi a consectetur sem. Quisque a felis vel nibh consequat sollicitudin. Sed sed magna justo. Nullam id sem aliquet, scelerisque quam facilisis, viverra diam. Aliquam facilisis, massa ac mollis dignissim, purus turpis fringilla odio, ac egestas risus lacus et diam. Praesent viverra nisi id urna gravida, vitae efficitur augue mattis. Curabitur mattis nunc ac orci sagittis sagittis. Duis nibh nibh, tristique a pharetra at, tempus in ligula.',
    'Morbi feugiat at est non fringilla. Morbi a congue quam. Pellentesque vel est vitae ipsum luctus euismod. Donec quis magna ac dui tempus mattis in in nunc. Aliquam faucibus accumsan leo in euismod. Quisque arcu eros, tristique id est eget, luctus ullamcorper elit. Donec at nisl placerat, finibus ex in, viverra elit. Nunc quis lacus nec felis accumsan varius. Aenean iaculis egestas aliquam. Donec non tincidunt ex, ut laoreet dolor. Curabitur rutrum, mi a condimentum semper, lacus risus facilisis ipsum, sit amet auctor urna lorem id libero. Curabitur vitae elit congue, dapibus erat et, tempor mauris. Etiam vestibulum dolor ac quam sagittis condimentum. Suspendisse sagittis urna ut nunc varius, in pretium tellus pellentesque. Cras porttitor leo eget magna rhoncus molestie.',
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque imperdiet lorem nisl, nec accumsan sapien pellentesque ut. Morbi vel porta purus. Duis a ipsum pharetra, congue est sed, blandit lorem. Nam sit amet viverra dui. Donec vel congue augue. Vestibulum interdum rhoncus orci dapibus lacinia.',
    'Donec ac ultrices felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac risus suscipit, iaculis diam vel, cursus turpis. Morbi pretium, ex ut dapibus finibus, turpis nibh iaculis enim, molestie faucibus magna libero a nulla. Donec posuere elit id sollicitudin commodo. Quisque mattis et ex congue aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla pharetra, tortor non scelerisque tristique, orci sem aliquet lacus, sit amet condimentum magna sem eu tellus. Vestibulum a velit et lorem accumsan pellentesque.'
    ]

  const [range, setRange] = useState(10)
  const [loremGenerate, setloremGenerate] = useState([]);
  
  function copyText () {
      let text = []
      for  (let i of loremGenerate) {
        text.push(i.text)
      }

      copy(text.toString())
  }
  function loremHandler() {
       let id = 0;
       let loremArray = []
       for(let i=0; i<range; i++){
        let loremItem = {id: id, text: loremText[i]}
        loremArray.push(loremItem)
        id = id + 1
    }
    setloremGenerate(loremArray) 
  }




  return (
    <div className="Home">
      <h1>Lorem Ipsum Generator</h1>
      <form>
        <label htmlFor="rangeInput">Informe a quantidade de parágrafos: </label>
        <input type="range" max="10" min="1" step="1" id="rangeInput"  onChange={(e)=>setRange(e.target.value)} />
        <span className="rangeValue">{range}</span>
        <input type="button" value="Gerar" id="Button" onClick={loremHandler}/>
      </form>
 
        {loremGenerate.length != 0 && <main onClick={copyText}>
          {loremGenerate.map((e)=>(
          <p className='loremIpsumText'
          key={e.id}
          >{e.text}</p>
        ))}
        </main>}
    </div>
  )
}

export default Home;