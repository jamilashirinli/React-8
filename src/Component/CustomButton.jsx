import React, { useState , useEffect} from 'react';
import './CustomButton.css'
const CustomButton = () => {
    useEffect(() => {
        const handleMouseOver = () => {
            showPopup();
        };
        document.querySelector('.thisClick').addEventListener('mouseover', handleMouseOver);
        return () => {
            document.querySelector('.thisClick').removeEventListener('mouseover', handleMouseOver);
        };
      }, []);
      useEffect(() => {
        const handleMouseOut = () => {
            hidePopup();
        };
        document.querySelector('.thisClick').addEventListener('mouseout', handleMouseOut);
        return () => {
            document.querySelector('.thisClick').removeEventListener('mouseout', handleMouseOut);
        };
      }, []);
    
    function showPopup() {
        document.getElementById('popup').style.display = 'block';
    }

    function hidePopup() {
        document.getElementById('popup').style.display = 'none';
    }

  const [text1, setText1] = useState('');
  const [button2Color, setButton2Color] = useState('');
  const [text2, setText2] = useState('');

  const handleClick1 = () => {
    setText1((prevText) => (prevText === '' ? 'Hello World!' : ''));
  };

  const handleClick2 = () => {
    if (text2 === '') {
      setText2('Warning message');
    } else {
      setButton2Color('white');
      setText2('');
    }
  };
  return (
    <div className="Button">
      <button className='text1' onClick={handleClick1}> Text </button>
      <button
        className="warning"
        onClick={handleClick2}
      >
        Warning
      </button>
      <button className='thisClick' >Hint</button>
      <div id="popup">
    <p>Jamila Shirinli</p>
</div>
      
        <p >{text1}</p>
        <p>{text2}</p>
      
    </div>
  );
};

export default CustomButton;