import React from 'react'

const Messages = () => {
  return (
    <div className='w-full'>
        <div className='mb-10'>
            <h1 className='text-4xl font-bold'>Message Thread</h1>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-4 self-end'>
                <div className='flex flex-col gap-3'>
                    <div className='p-4 bg-blue-300 rounded-t-xl rounded-bl-xl max-w-[800px]'>
                        I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!
                    </div>
                    <div className='p-4 bg-blue-300 rounded-b-xl rounded-tl-xl max-w-[800px]'>
                        I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet. 
                    </div>
                </div>
                <img className='w-12 h-12 rounded-full self-start' src='../../src/assets/avatar-1.png' alt='' /> {/* avatar */}
            </div>
            <div className='flex gap-4'>
            <img className='w-12 h-12 rounded-full self-start' src='../../src/assets/avatar-2.png' alt='' /> {/* avatar */}
                <div className='flex flex-col gap-2'>
                    <div className='p-4 bg-gray-200 rounded-xl max-w-[800px]'>
                        I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.
                    </div>
                </div>
            </div>
            <div className='flex gap-4 self-end'>
                <div className='flex flex-col gap-2'>
                    <div className='p-4 bg-blue-300 rounded-xl max-w-[800px]'>
                        I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!
                    </div>
                </div>
                <img className='w-12 h-12 rounded-full self-start' src='../../src/assets/avatar-1.png' alt='' /> {/* avatar */}
            </div>
        </div>
    </div>
  )
}

export default Messages