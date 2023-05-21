// Use the api keys by providing the strings directly 
const pinataSDK = require('@pinata/sdk');
const dotenv = require('dotenv');
dotenv.config();
const pinata = new pinataSDK(process.env.API_KEY, process.env.API_SECRET);

module.exports.uploadFile = async function (fileName, filePath, UseUrl = false) {
  const { IpfsHash } = await pinata.pinFromFS(
    filePath,
    {
      pinataMetadata: {
        name: fileName,
      },
      pinataOptions: {
        cidVersion: 0,
      },
    },
  );
  console.log(`'${fileName}' upload complete; CID: ${IpfsHash}`);
  let body;
  if (UseUrl) {
    body =
    {
      "description": "Description of your NFT",
      "image": `https://gateway.pinata.cloud/ipfs/${IpfsHash}`,
      "name": fileName
    }
  }
  else {
    body =
    {
      "description": "Description of your NFT",
      "image": `ipfs://${IpfsHash}`,
      "name": fileName
    };
  }
  const Metadata = await pinata.pinJSONToIPFS(body, {
    pinataMetadata: {
      name: `${fileName} json Metadata`,
    },
    pinataOptions: {
      cidVersion: 0,
    },
  },
  );
  console.log(`'${fileName} json Metadata' upload complete; CID: ${Metadata.IpfsHash}`);
  let metadata;
  if (UseUrl) {
    metadata = `https://gateway.pinata.cloud/ipfs/${Metadata.IpfsHash}`;
  }
  else {
    metadata = `ipfs://${Metadata.IpfsHash}`;
  }
  return metadata;
};