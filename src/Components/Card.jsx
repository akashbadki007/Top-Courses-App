import React, { useState } from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify'

function Card({course,LikedCourses,setLikedCourses}) {
  const [readMore, setReadMore] = useState(false);
  const des = readMore ? course.description : `${course.description.substring(0,150)}....`;

  function readMoreHandler() {
    setReadMore(!readMore)
  }

  function likedClickHandler() {
    // already like tha usko unlike kiya
    if(LikedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("like remove");
    }
    else {
      // already unlike tha unso like kiya
      if(LikedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      // nonempty pahle sai or likedCourses ki length !==0 hai to....
      else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Like Successfully");
    }
  }

  return (

    <div className='w-[300px] bg-gray-800 bg-opacity-80 rounded-md overflow-hidden'>

      <div className='relative'>
        <img src={course.image.url} alt="" />
        <div className='w-[32px] h-[32px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center cursor-pointer'>
          <button onClick={likedClickHandler}>
            {
              LikedCourses.includes(course.id) ? 
              <FcLike className='text-[1.5rem]'/> :
              <FcLikePlaceholder className='text-[1.5rem]'/>
            }
          </button>
        </div>
      </div>

      <div className='p-4 '>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-sm mt-2 text-white'> 
          {des} 
          <span 
          className='text-green-400  ml-[3px] font-semibold cursor-pointer '
           onClick={readMoreHandler}> 
           {readMore ? "show less" : "read more"} 
          </span> 
        </p>
      </div>
    </div>
  )
}

export default Card