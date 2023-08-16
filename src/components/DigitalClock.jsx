import React,{useState} from 'react'

function DigitalClock()
{
    const date=new Date().toLocaleDateString();

    const [ctime,setCtime] = useState(date);

    const handleClock = () => 
    {
        const date = new Date().toLocaleTimeString();
        setCtime(date);
    }

    setInterval(handleClock,1000);

    return (
        <h1 className='text-center my-3' style={{ fontSize:100 }}>
            <strong>{ctime}</strong>
        </h1>
    )
}

export default DigitalClock;