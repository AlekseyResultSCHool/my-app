export const loadPost = (requestServer, postId) => (dispatch) => {
	requestServer('fetchPost', postId).then((postdata) => {
        dispatch(setPostData(postdata));
    });
};
