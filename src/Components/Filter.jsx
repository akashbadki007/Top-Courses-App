import React from 'react'

function Filter({filterData,category,setCategory}) {

  function categoryHandler(title) {
    setCategory(title)
  }
  
    let filterDataBtn = filterData.map(ele => 
    <button 
     key={ele.id}
     onClick={() => categoryHandler(ele.title)}
     className={`text-[15px] px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-75 border-2 transition-all duration-200  
     ${category === ele.title ? 
      "bg-opacity-60 border-white" : 
      "bg-opacity-40 border-transparent"} `}  > 
     {ele.title} 
    </button> )

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {filterDataBtn}
    </div>
  )
}

export default Filter