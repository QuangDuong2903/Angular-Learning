export default interface IPost {
    name: string
    thumbnail: string
    content: string
    user: {
        id: number
    }
    category: {
        id: number
    }
}