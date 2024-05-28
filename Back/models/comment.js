const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    author: { type: String, required: true  },
    content: { type: String, required: true  },
    note: { type: Number, required: true  },
    creationDate: { type: Date, default: Date.now  },
    idRecipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true  }
});


module.exports = mongoose.model('Comment', commentSchema);