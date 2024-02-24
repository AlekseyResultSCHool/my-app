import { Comments, PostContent } from './components'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../hooks'
import styled from 'styled-components';

const PostContainer = ({ className }) => {

    const post = useSelector();
    const dispatch = useDispatch();
    const params = useParams();
    const requestServer = useServerRequest();

    useEffect(() => {
        dispatch(loadPost(requestServer, params.id))
    }, []);

    return (
        <div className={className}>
            <PostContent />
            <Comments />
        </div>
    );
};

export const Post = styled(PostContainer)`

`;