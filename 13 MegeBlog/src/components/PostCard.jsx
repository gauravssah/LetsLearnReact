import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title1, featuredimage1 }) {
    return (
        <Link to={`/post${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredimage1)} alt={title1}
                        className='rounded-xl' />

                </div>
                <h2
                    className='text-xl font-bold'
                >{title1}</h2>
            </div>

        </Link>
    )
}

export default PostCard
