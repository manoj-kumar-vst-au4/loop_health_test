import React from 'react'

export default function List(props) {
    const { data } = props;
    const [id, setId] = React.useState('');
    const [isVideo, setIsVideo] = React.useState('');
    const focus = React.useRef(null);
    // focus.current.focus();
    const playVid = (id) => {
        setIsVideo(id);
        
    }

    const onHover = (id, task) => {
        setIsVideo('');
        var vid = document.getElementById(id);
        if (task === "play") {
            setId(id)
            
            // vid.play();
        } else if(task === "pause") {
            if(isVideo===id){
                console.log();
            }else{
                setId('');
            }
            console.log('hello')
            // vid = document.getElementById(id);
            // vid.pause();
        }

    }
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'whitesmoke', justifyContent: 'center' }} >
            {data.map(obj => {
                return (
                    <div style={{ marginRight: '20px', backgroundColor: 'white', marginBottom: '20px', boxShadow: '0 0 0 1px rgba(138, 135, 135, 0.15), 0 2px 3px rgba(112, 109, 109, 0.2)' }}>
                        {id !== obj.id ? <img src={obj.assets.thumb_jpg.url} style={{ width: '250px' }}  onMouseEnter={() => onHover(obj.id, "play")} id={obj.id} /> : 
                        <video id={obj.id} ref={focus} width="250" controls={isVideo===obj.id?true:false} onClick={()=>playVid(obj.id)} style={{ borderBottom: '1px solid rgba(112, 109, 109, 0.2)' }} onMouseLeave={() => onHover(obj.id,"pause")} autoPlay>
                            <source src={obj.assets.thumb_mp4.url} />
                            <h1>hgj</h1>
                        </video>}

                        {/* <div onClick={() => playVid(obj.id)} style={{display:'flex'}} >
                            <img src={obj.assets.thumb_jpg.url} onMouseEnter={() => onHover(obj.id, "play")} onMouseLeave={() => onHover(obj.id,"pause")}alt="thumbnail" style={{ borderRadius: '50%', height: '30px', width: '30px', cursor: 'pointer', boxShadow:'0 0 0 1px rgba(138, 135, 135, 0.15), 0 2px 3px rgba(112, 109, 109, 0.2)', margin:'5px 0px 5px 5px' }} />
                            <p style={{width:'600px', marginTop:'10px', marginLeft:'10px'}}>{maxStr(obj.description)}</p>
                        </div> */}
                    </div>
                )
            })}
        </div>
    )
}
