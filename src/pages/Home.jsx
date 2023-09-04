import ListPosts from "../components/ListPost"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListPosts url={"/posts"}></ListPosts> {/* el URL es el de localhost/posts */}
    </main>
  )
}

export default Home
