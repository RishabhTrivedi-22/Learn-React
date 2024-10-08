import config from "../config_var/config.js";
import { Client, ID, Databases, Storage, Query, ImageGravity } from "appwrite";

export class dbService {
  client = new Client;
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //? Post CRUD services :- 

  async createPost({ title, slug, content, featuredImg, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImg,
          status,
          userId
        }
      );
    } catch (error) {
      console.log('Appwrite :: createPost :: error', error);
    }
  };

  async updatePost(slug, { title, content, featuredImg, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImg,
          status
        }
      );
    } catch (error) {
      console.log('Appwrite :: updatePost :: error', error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log('Appwrite :: deletePost :: error', error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log('Appwrite :: getPost :: error', error);
      return false;
    }
  }

  async listPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries

      );
    } catch (error) {
      console.log('Appwrite :: listPosts :: error', error);
    }
  }

  //? File upload/delete services :-

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log('Appwrite :: uploadFile :: error', error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        config.appwriteBucketId,
        fileId
      );
      return true;
    } catch (error) {
      console.log('Appwrite :: deleteFile :: error', error);
      return false;
    }
  }

  previewFile(fileId) {
    return this.bucket.getFilePreview(
      config.appwriteBucketId,
      fileId,
      ImageGravity.Center
    )
  }


}

const dbservice = new dbService();

export default dbservice;