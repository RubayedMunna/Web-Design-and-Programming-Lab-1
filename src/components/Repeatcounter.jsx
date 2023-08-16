import React,{useState} from 'react'

function Repeat()
{
    const [counter,setCounter]=useState(0);
    const [text,setText]=useState(60);
    const handleText=(e)=>
    {
        setText(e.target.value);
    };
    const handleCounter = () =>
    {
        if(counter===text)
        {
            setCounter(0);
        }
        else 
        {
            setCounter(counter+1);
        }
    };

    setInterval(handleCounter,1000);

    return (
        <>
            <div className="container">
                <div className="row">
                    <p className="form-control">
                        <strong>Set Upper Limit</strong>
                    </p>
                    <input type="text" value={text} className='text my-1 form-control' onChange={handleText} />
                    <h1 className="text-center my-3" style={{ fontSize: 100 }}>
                        {counter}
                    </h1>

                </div>
            </div>
        </>
    )
}

export default Repeat;