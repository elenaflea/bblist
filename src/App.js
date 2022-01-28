import './App.css';
import logo from './logo2.png';
import mylogo from './mylogo.png'
import bear from './bear.png'
import { useState } from 'react';
import { data } from './data';



function App() {

  const [gifts, setGifts] = useState(data);

  const removeItem = (id) => {
    let newGifts = gifts.filter(element => element.id !== id);
    setGifts(newGifts);
  };

  const [t, setT] = useState(0);
  const [datas, setDatas] = useState(data);
  let newArr = [...datas];
  
  const [count, setCount] = useState([0,0,0,0,0,0,0,0,0,0]);
  
  const nextPhoto = (e, index) => {
    setDatas(newArr);

     // if ( e.currentTarget.id - 1 === index ) {
        const slide = document.querySelectorAll("#slide");
       // console.log(slide[index]);

      //let newArr = [...datas];
     // newArr[index] = gifts[index];
    
      // setDatas(newArr);
     // console.log(newArr[index]);
      setT ((t => {
        t ++ ;
        if (t > 2 ) {
        t = 0;
        }
        return t;
        
      }));
      slide[index].setAttribute('src', newArr[index].image[t] );
      return slide;
      //}
      
    };

    const prevPhoto = (e, index) => {
     // if ( e.currentTarget.id - 1 === index ) {
        const slide = document.querySelectorAll("#slide");
       // let newArr = [...datas];
       // newArr[index] = gifts[index];
    
        setDatas(newArr);
        setT ((t => {
        t -- ;
        if (t <0 ) {
        t = 2;
        }
        return t;
      }));

      slide[index].setAttribute('src', newArr[index].image[t] );
      return slide;
     // }
    };

  const likeUpdate = (e, index) => {
  const likeHolder = document.querySelectorAll("#likeHolder");
    setCount ( ( count => {

      count[index] ++ ; 
      return count;
      }) ) 
   // console.log(count);
    likeHolder[index].innerHTML = (gifts[index].like) + count[index] ;
    
    
    
    return likeHolder;
    
  }



  return (
    <div className="App">
      <br />
      <br />
      <img src={ bear } width="50px" alt="icon bear"/>
      <br />
      <h2>La Liste des</h2>
      <h1>{ gifts.length } INDISPENSABLES</h1>
      <h2> à acheter avant la naissance</h2>
      <img src={ logo } className='App-logo' alt='logo'/>

    {gifts.map((element => {
        const {id, gifty, image, like} = element;
        const index = gifts.indexOf(element);

        return (
          <div className='item' key={ id } data-id={data.id}>
            <div className='string'>
              <hr />
                <h3> { id } </h3>
              <hr />
            </div>
          <img id="slide" className='photo' src={ gifts[index].image[3] } alt='photo'/>
          <div> 
            <button className='btnSlide' onClick={ (e)=> prevPhoto(e, index)  } id = { id } > 
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            </button>
            <button className='btnSlide' onClick={ (e)=> nextPhoto(e, index)} id = { id } >  
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16" >
              <path  fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
              </svg> 
            </button>
          </div>

          <p className='giftyName'>
            { gifty }
          </p>
          <div className='string'>

          <p className='numberLike' id="likeHolder" value = ""> 
            { like }
          </p>

          <button className='btnLike' id = { id }
          onClick={ (e)=> likeUpdate(e, index)}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          </button>

            <button className='btnRemove' onClick={ ()=> removeItem(id) }>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg>
            </button>
          </div>
          <br/> <br/>
          </div>
          
        )
          
    }))}

<button className='btnDeleteAll' onClick={ () => setGifts([]) }> Delete all </button>

        <a href='https://grondin.glitch.me/' target="_blank" rel="noreferrer">
          <img className='myIcon' src={ mylogo } alt="logo"/>
        </a>


    </div>


   
  );
}

export default App;
