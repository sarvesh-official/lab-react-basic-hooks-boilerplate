import  { useContext, useEffect, useState } from 'react';
import { ToggleTheme } from '../App';

export default function UseContext() {
    const theme = useContext(ToggleTheme);
    const [like, setLike] = useState(0);
    const [content, setContent] = useState(false)
      const [firstRender, setFirstRender] = useState(true);

    const themeStyle = {
        backgroundColor: theme ? "black" : "grey",
        color: theme ? "grey" : "black",
        padding: "2rem",
        margin: "2rem"
    };

    const increase = () => {
        setLike((prev) => prev + 1);
    };

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
        } else {
                alert("Content Button is Clicked")
                document.getElementById("content")?.classList.toggle("hidden")
            }
        
       
    },[content])
    return (
        <div style={themeStyle}>
            
            <button onClick={()=> setContent(!content) }>Content</button>
            <h3 id='content' className='hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias at et labore eos. Molestias consequatur eum atque deleniti beatae, placeat nesciunt distinctio eius laudantium ut tempora minus unde officia!</h3>
            <h2>{like}</h2>
            <button onClick={increase}>Like</button>
        </div>
    );
}
