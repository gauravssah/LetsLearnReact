import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.slug || '',
            status: post?.status || 'active',
        },
    })

    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData);

    const submit = async (data) => {

    }

    return (
        <div> Postfoerm </div>
    )
}

export default PostForm
