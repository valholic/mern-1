import { RegisterBg } from "../../../assets";
import './blogItem.scss'

export default function BlogItem() {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post"/>
            <div className="content-detail">
                <h5 className="title">Title Blog</h5>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores necessitatibus sed nulla molestias enim consequuntur, tempore laborum temporibus incidunt iure.</p>
            </div>
        </div>
    )
}
