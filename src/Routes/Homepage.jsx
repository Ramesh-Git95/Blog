import React from 'react'
import { Link } from 'react-router-dom'
import MainCategories from '../components/MainCategories'
import FeaturedPost from '../components/FeaturedPost'
import PostList from '../components/PostList'

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
         {/* BREADCRUMB */}
         <div className='flex gap-4'>
          <Link to="/" className='text-white'>Home</Link>
          <span className='text-white'>.</span>
          <span className='text-white'>Blogs And Articles</span>
         </div>
      {/* INTRO */}
      <div className='flex items-center justify-between'>
        {/* TITLE */}
        <div className=''>
          <h1 className='text-yellow-500 text-2xl md:text-5xl lg:text-6xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
          <p className='mt-8 text-md md:text-xl text-yellow-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eos cumque temporibus fugiat consequatur accusamus. </p>
        </div>
        {/* ANIMATED BUTTON */}
        <Link to="/write"  className='hidden md:block relative'>
          <svg
          viewBox='0 0 200 200'
          width="200"
          height="200"
           className='text-lg tracking-widest animate-spin animatedButton'
          // className='text-lg tracking-widest'
          >
            <path
              id='circlePath'
              fill='none'
              d='M 100, 100 m -75, 0 a 75,75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150,0'
            />
            <text>
              <textPath className='font-thin' fill='white' href='#circlePath' startOffset="0%">Write Here.</textPath>
              <textPath className='font-thin' fill='white' href='#circlePath' startOffset="50%">Share your idea.</textPath>
            </text>
            
          </svg>
          <button className='bg-white rounded-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 m-auto size-20'>
            <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width="50"
            height="50"
            fill='none'
            stroke='#00AB66'
            strokeWidth="3"
          
            >
              <line x1="6" y1="18" x2="18" y2="6"/>
              <polyline points='9 6 18 6 18 15'/>
            </svg>
          </button>
        </Link>
      </div>  
      {/* CATEGORY */}
      <MainCategories/>
      {/* FEATURED */}
      <FeaturedPost/>
      {/* POSTLIST */}
      <div className=''>
          <h1 className='my-8 text-2xl text-yellow-400'>Recent Posts</h1>
            <PostList/>
      </div>
    </div>
  )
}

export default Homepage