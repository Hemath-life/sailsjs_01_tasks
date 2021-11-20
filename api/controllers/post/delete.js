module.exports = {


  friendlyName: 'Delete',


  description: 'Delete post.',


  inputs: {
    postId: {
      type: "string",
      required: true
    }
  },


  exits: {
    invalid: {
      description: "This was an invalid post to Delete"
    }
  },


  fn: async function (inputs) {

    console.log("deleting the record by id")
    // throw ('invalid')
    // fetch allow to return the deleted records
    const record = await Post.destroy({ id: inputs.postId }).fetch()
    if (record.length === 0) {
      throw ({ invalid: { error: 'Record does not exits' } })
    }
    return record;

  }

};
