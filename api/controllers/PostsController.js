/**
 * PostsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
          posts: async function (req, res) {
                    Post.find().exec((err, result) => {
                              if (err) {
                                        return res.serverError(err.toString())
                              }
                              console.log(" finds")
                              res.send(result);

                    })

          },
          // create: async function (req, res) {
          //           const body = req.allParams()
          //           sails.log.debug(body)
          //           Post.create(body).exec((err, result) => {
          //                     console.log("object created")
          //                     if (err) return res.badRequest(err.toString())
          //                     res.redirect('./home')

          //           })
          // },

          findById: async function (req, res) {
                    const postId = req.param('postId')
                    sails.log.debug(postId)
                    Post.findOne({ id: postId }).exec((err, result) => {
                              if (err) {
                                        return res.badRequest(err.toString())
                              }
                              console.log("object created")
                              res.send(result);

                    })

          },

          // destroy: async function (req, res) {
          //           const postId = req.param('postId')
          //           sails.log.debug(postId)
          //           Post.destroy({ id: postId }).exec((err, result) => {
          //                     if (err) {
          //                               return res.badRequest(err)
          //                     }
          //                     console.log("object destroyed")
          //                     res.send(result);
          //           })
          // }
};

