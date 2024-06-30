import { BlogItem, Button, Gap } from "../../components"
import './home.scss'

export default function Home() {
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title={'Create Blog ➕'} />
            </div>
            <Gap height={'20px'} />
            <div className="content-wrapper">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
            <div className="pagination">
                <Button title={'Previous'} />
                <Gap width={'20px'} />
                <Button title={'Next'} />
            </div>
            <Gap height={'20px'} />
        </div>
    )
}