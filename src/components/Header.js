import Search from "./Search";
import Nav from "./Nav";


const Header = ({ setSearchTag }) => {

  return (
    <div>
      <h1 className="title">Flickr Photo Gallery</h1>
      <Search setSearchTag={setSearchTag} />
      <Nav />
      <h2> {setSearchTag} Images Result</h2>
    </div>
  );
}

export default Header;