import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title1, slug, content1, featuredimage1, status1, userId1 }) {

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title1,
                    content1,
                    featuredimage1,
                    status1,
                    userId1,
                }
            )

        } catch (error) {
            console.log("Appwrite services :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title1, content1, featuredimage1, status1 }) {

        try {

            conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            {
                title1,
                content1,
                featuredimage1,
                status1,
            }

        } catch (error) {
            console.log("Appwrite services :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {

            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;

        } catch (error) {
            console.log("Appwrite services :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {

            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )


        } catch (error) {
            console.log("Appwrite services :: getPost :: error", error);
            return false;
        }
    }

    async getPostS(queries = [Query.equal("status1", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
        } catch (error) {
            console.log("Appwrite services :: getPostS :: error", error);
            return false;
        }
    }

    // file upload service

    async uploadFile(file) {
        try {

            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("Appwrite service :: uploadFile :: Error ", error);
            return false;
        }
    }

    async deleteFile(fileId) {

        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;

        } catch (error) {
            console.log("Appwrite service :: deleteFile :: Error ", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

};

const service = new Service();
export default service;