import React, { useState } from 'react'
import PostList from '../components/PostList'
import SideMenu from '../components/SideMenu'
const PostListPage = () => {
  const [Open,setOpen] = useState(false)
  return (
    <div className=''>
      <h1 className='mb-8 text-2xl text-white'>Development Blog</h1>
      <button onClick={()=>setOpen((prev)=>!prev)} className='bg-black md:hidden text-white px-4 py-2 rounded-xl mb-4'>{Open?"Close": "Filter or Search"}</button>
      <div className='flex gap-8 flex-col-reverse md:flex-row'>
        <div className=''>
          <PostList/>
        </div>
        <div className={`${Open ? "block" : "hidden"} md:block`}>
          <SideMenu/>
        </div>
      </div>
    </div>
  )
}

export default PostListPage