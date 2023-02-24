import { uploadModel } from "../Schema/UploadSchema.js"

export const deleteTweet = async (req, res) => {
    const id = req.params.id;
    await uploadModel.findByIdAndRemove(id).exec();
    return res.send("deleted");
  }

    