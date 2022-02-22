import React, { useState , useEffect, Component} from "react";
import * as Bi from "react-icons/bi";
import blogs from './blogs.json'
import './Blogsmain.css';
import SearchBar from './search';
import Fuse from "fuse.js";
import AOS from 'aos';
import axios from "axios";

const Blogs=({image,title,desc,link,date, author})=>{
    return (
        <div className="blogs" data-aos="fade-up" data-aos-once="true">
          <div className="img-hover-blogs">
           <img className="blogs_img" src={image}   height="220px" width="300px" alt=""></img>
          <div className="hover-box-blogs">
            <p className="hover-desc-blogs">{desc}</p>
            <a href={link} className="blog-link-btn" style={{textDecoration: 'none'}} target="_blank">READ MORE</a>
          </div>
          </div>
          <div className="blogs_desc">
            <div className="title_date">
             <h3>{title}</h3>
             <p>By {author}</p>
             <p><Bi.BiCalendar style={{ fontSize:"20px", paddingBottom:"4px" }}/> {date}</p>
            </div> 
              <p>&#9650;</p>
          </div>
        </div>
    )
}


function App2(){
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  //let blogs=[];
  const [data, setData] = useState(blogs);
  //axios.get("https://saenitk.herokuapp.com/blogs/").then((res)=>{ setData(res.data)}).catch((err)=>console.log(err));

  const searchData = (pattern) => {
    if (!pattern) {
      setData(blogs);
      return;
    }
  
  
    const fuse = new Fuse(data, {
      keys: ["author","date","title"],
      tokenize: false,
      matchAllTokens: true,
      threshold: 0.5,
      location: 0,
      distance: 0,
    });
  
    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setData(matches);
    }
  };

  return (
    <div className="blogmain">
      <h1 className="heading_blog">Blogs</h1>
      <SearchBar
        placeholder="Search by title/author/date..."
        onChange={(e) => searchData(e.target.value)}
       />
      <div className="blog_info">
        {data.map((item) => (
          <Blogs {...item} key={item.id}/>
        ))}
      </div>
    </div>
  );
}


export default App2
