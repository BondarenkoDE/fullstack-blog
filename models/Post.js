import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        text: {
            type: String,
            required: true,
            unique: true,
        },
        tags: {
            type: Array,
            default: [],
        },
        viewsCount: {
            type: Number,
            default: 0,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, //специальный тип для id
            ref: 'User', //ссылается на модель User (сделали связь между двумя таблицами)
            required: true,
        },
        imageUrl: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Post', PostSchema);