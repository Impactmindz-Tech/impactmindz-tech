import React from 'react'

const EmailSubscribe = () => {
    return (
        <>
            <div className='p-4 flex gap-3'>
                <input className='bg-blue-300 outline-none border border-[#3a4153] px-8 py-4 rounded-xl placeholder:text-white' placeholder='Enter Your Email' type="text" />
                <input className='text-white px-10 py-3 bg-blue-500 rounded-xl' type="submit" name="" id="" />
            </div>
        </>
    )
}

export default EmailSubscribe