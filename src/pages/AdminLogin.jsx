import React from 'react'


const AdminLogin = () => {
  return (
        <div className='flex justify-center items-center'>
            <div className=' shadow-2xl mt-40 p-10 gap-10 rounded-2xl text-2xl font-bold flex justify-center items-center flex-col '>
                <div>
                    Admin Login 
                </div>
                <div className='flex flex-col w-full gap-2 text-neutral-700 text-sm' > 
                    <label htmlFor="">Email</label>
                    <input className='bg-neutral-100 px-4 py-2 rounded-xl' type="text" placeholder='Admin@gmail.com'/>
                </div>
                <div className='flex flex-col w-full gap-2 text-neutral-700 text-sm ' >
                    <label htmlFor="">Password</label>
                    <input className='bg-neutral-100 px-4 py-2 rounded-xl' type="password" placeholder='*****'/>
                </div>
                <div>
                    <button className='bg-blue-700 text-white w-full font-bold px-20 rounded-3xl hover:bg-blue-800 text-xl py-2'>Admin Login</button>
                </div>
            </div>
        </div>
  )
}

export default AdminLogin
