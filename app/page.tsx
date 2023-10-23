import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import {postsData} from "@/testdata/data";

export default function Home() {
    return (
        <>
            <CategoriesList/>
            {postsData && postsData.length > 0 ? (
                postsData.map((el, i) => (
                    <Post
                        key={i}
                        id={el.id}
                        author={el.author}
                        authorEmail={'test@example.com'}
                        date={el.datepublished}
                        thumbnail={el.thumbnail}
                        category={el.category}
                        title={el.title}
                        content={el.content}
                        links={el.links || []}
                    />
                ))) : (
                <div>
                    No posts to display
                </div>
            )}
        </>
    )
}
