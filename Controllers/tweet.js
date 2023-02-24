import { uploadModel } from "../Schema/UploadSchema.js"

export const tweet = async (req, res) => {

    const user = new uploadModel(req.body);
    
    user.save((err, data) => {
      if (err) {
        return res.send(err);
      }
      return res.status(200).send({
        message: "User's data have been added successfully!!",
        response: 'success'
      });
    });
  }

  