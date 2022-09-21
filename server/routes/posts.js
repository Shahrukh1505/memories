import express from "express";
import { getPosts, getPostsBySearch, getPostsByCreator, getPost, createPost, updatePost, likePost, commentPost, deletePost } from '../controllers/posts.js';
import Auth from '../middleware/auth.js';

const Router = express.Router();


Router.get('/creator', getPostsByCreator);
Router.get('/search', getPostsBySearch);
Router.get('/', getPosts);
Router.get('/:id', getPost);

Router.post('/', Auth,  createPost);
Router.patch('/:id', Auth, updatePost);
Router.delete('/:id', Auth, deletePost);
Router.patch('/:id/likePost', Auth, likePost);
Router.post('/:id/commentPost', commentPost);

export default Router;