import { AppDataSource } from "../../data-source.ts";
import { NewsPosts } from "../entity/newsposts.entity.ts";
import { CreateNewsPost, EditNewsPost } from "../dto/newsposts.dto.ts";

const getPosts = async (query) => {
  const allPosts = await AppDataSource.getRepository(NewsPosts).find();

  const page = query.page;
  const size = query.size;

  if (page && size) {
    const startIndex = (parseInt(page) - 1) * parseInt(size);
    const lastIndex = parseInt(page) * parseInt(size);

    const dataForSend = allPosts.slice(startIndex, lastIndex);
    return dataForSend;
  }
  return allPosts;
};

const getPostById = async (id: number) => {
  const student = await AppDataSource.getRepository(NewsPosts).findOneBy({
    id,
  });
  return student;
};

const createNewPost = async (body: CreateNewsPost) => {
  const newStudent = await AppDataSource.getRepository(NewsPosts).create(body);
  const result = await AppDataSource.getRepository(NewsPosts).save(newStudent);
  console.log("new user created -- ", result);
  return result;
};

const editPostById = async (id: number, body: EditNewsPost) => {
  const updatedStudent = await AppDataSource.getRepository(NewsPosts).findOneBy(
    {
      id,
    }
  );
  if (!updatedStudent) {
    return { msg: "there is no such post" };
  }
  AppDataSource.getRepository(NewsPosts).merge(updatedStudent, body);
  const result = await AppDataSource.getRepository(NewsPosts).save(
    updatedStudent
  );
  return result;
};

const deletePost = async (id: number) => {
  const results = await AppDataSource.getRepository(NewsPosts).delete(id);

  return results;
};

export default {
  getPosts,
  getPostById,
  createNewPost,
  editPostById,
  deletePost,
};
