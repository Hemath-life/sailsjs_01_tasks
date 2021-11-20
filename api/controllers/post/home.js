module.exports = async function (req, res) {
          console.log("this is route shows home page")
          try {
                    const allPost = await Post.find()
                    res.view('pages/home', { allPost })
                    // res.end()
          } catch (error) {
                    res.serverError(error.toString())
          }


}