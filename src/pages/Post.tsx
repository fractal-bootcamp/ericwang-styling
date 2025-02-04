import React from 'react'
import { useState } from 'react'

const Post = () => {
    const [liked, setLiked] = useState(false)
    const [numLikes, setNumLikes] = useState(Math.floor(Math.random() * 100))
    const [numComments, setNumComments] = useState(Math.floor(Math.random() * 25))

    return (
        <div>
            <div className='mb-10'>
                <h1 className='text-4xl font-bold'>Post</h1>
            </div>
            <div className='flex gap-4'>
                <img className='w-12 h-12 rounded-full self-start' src='../../src/assets/avatar-1.png' />
                <div className='flex flex-col gap-4'>
                    <div>
                        <div>
                            Helena <span className='text-gray-400'>in Group Name</span>
                        </div>
                        <div className='text-gray-400'>
                            3 min ago
                        </div>
                    </div>
                    <img className='rounded-md' src='../../src/assets/flowers.jpeg' />
                    <div className='flex flex-col gap-4'>
                        <h2>Post description</h2>
                        <div className='flex gap-4'>
                            <div className='flex gap-2'>
                                <button 
                                    className={`${liked && 'text-red-500'} cursor-pointer`} 
                                    onClick={() => {
                                        setLiked(liked ? false : true)
                                        setNumLikes((prevState) => liked ? prevState - 1 : prevState + 1)
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <span>{numLikes} likes</span>
                            </div>
                            <div className='flex gap-2'>
                                <button>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <span>{numComments} comments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post