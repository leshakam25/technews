interface IPost {
    id: string,
    author: string,
    date: string,
    authorEmail: string,
    thumbnail?: string,
    title: string,
    content: string,
    links?: string[]
    category?: string,
}