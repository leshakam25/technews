import React from 'react';
import Link from "next/link";
import {getServerSession} from "next-auth";
import {postsData} from "@/testdata/data";
import Post from "@/components/Post";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

const Dashboard = async () => {
    const session = await getServerSession(authOptions)

    if(!session) {redirect('/sign-in')}

    return (
        <div>
            <h1>My posts</h1>
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
                <div className={'py-6'}>
                    No posts to display. &nbsp;
                    <Link
                        className={'underline'}
                        href={'/create-post'}>
                        Create New
                    </Link>
                </div>
            )
            }
        </div>
    )
        ;
};

export default Dashboard;