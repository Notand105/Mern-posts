import { Router } from "express";
import {
  getPosts,
  createPost,
  editPost,
  deletePost,
  getAPost,
} from "../controllers/posts.controller.js";

const router = Router();

router.get("/posts", getPosts);

router.post("/posts", createPost);

router.put("/posts/:id", editPost);

router.delete("/posts/:id", deletePost);

router.get("/posts/:id", getAPost);

export default router;
