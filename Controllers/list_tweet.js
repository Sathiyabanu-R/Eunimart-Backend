import { uploadModel } from "../Schema/UploadSchema.js"

export const listTweet = async (req, res) => {
       uploadModel.find({}, (err, result) => {
          if (err) {
            res.json(err);
          } else {
            res.json(result);
          }
        });
  }
