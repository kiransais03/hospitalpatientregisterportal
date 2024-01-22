const { S3Client,ListObjectsCommand, PutObjectCommand,DeleteObjectCommand,GetObjectCommand,CopyObjectCommand} = require('@aws-sdk/client-s3');

// Create an S3 client
const s3 = new S3Client({
  region: 'eu-north-1',
  credentials: {
    accessKeyId: 'AKIAYO2EHKO3ZXFHRJD3',
    secretAccessKey: process.env.AWS_SECRET_ACCESSKEY,
  },
});


module.exports = {s3,ListObjectsCommand, PutObjectCommand,DeleteObjectCommand,GetObjectCommand,CopyObjectCommand}