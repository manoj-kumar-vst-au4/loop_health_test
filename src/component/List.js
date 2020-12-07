import React from 'react'
export default function List(props) {
    const { data } = props;
    const [id, setId] = React.useState('');
    const focus = React.useRef(null)
    const playVid = (id) => {
        setId(id);
        var el = document.getElementById(id);
        // vid.play();
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        }
    }
    React.useEffect(()=>{
        focus.current.focus();
    })
    const onHover = (id, task) => {
        var vid = document.getElementById(id);

        if(task==="play"){
            vid.play();
        }else{
            vid.pause();
        }

    }

    const maxStr=(str)=>{
        let newStr = str.slice(0, 80);
        return newStr+'...';
    }
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '38px', backgroundColor:'whitesmoke' }} ref={focus}>
            {data.map(obj => {
                return (
                    <div style={{ marginRight: '20px', backgroundColor:'white', marginBottom:'20px', boxShadow:'0 0 0 1px rgba(138, 135, 135, 0.15), 0 2px 3px rgba(112, 109, 109, 0.2)' }}>
                        <video id={obj.id} width="700" height='300' style={{borderBottom:'1px solid rgba(112, 109, 109, 0.2)'}}>
                            <source src={obj.assets.thumb_mp4.url} />
                            <h1>hgj</h1>
                        </video>
                        <div onClick={() => playVid(obj.id)} style={{display:'flex'}} >
                            <img src={obj.assets.thumb_jpg.url} onMouseEnter={() => onHover(obj.id, "play")} onMouseLeave={() => onHover(obj.id,"pause")}alt="thumbnail" style={{ borderRadius: '50%', height: '30px', width: '30px', cursor: 'pointer', boxShadow:'0 0 0 1px rgba(138, 135, 135, 0.15), 0 2px 3px rgba(112, 109, 109, 0.2)', margin:'5px 0px 5px 5px' }} />
                            <p style={{width:'600px', marginTop:'10px', marginLeft:'10px'}}>{maxStr(obj.description)}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
