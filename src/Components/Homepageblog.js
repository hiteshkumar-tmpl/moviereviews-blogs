import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/CSS/Homepageblog.css'
const Homepageblog = () => {
const posts = [


    {
    id:1,
    title : 'My Top 5 Movies of All Times',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!',
    img: "https://static.wixstatic.com/media/e1bade_ce97cc8b91254a1aa617ba9433b5e142~mv2.jpg/v1/fill/w_838,h_838,fp_0.50_0.50,q_90,enc_auto/e1bade_ce97cc8b91254a1aa617ba9433b5e142~mv2.jpg",
    },

    {
        id:2,
        title : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!',
        img:"https://static.wixstatic.com/media/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg/v1/fill/w_836,h_1096,fp_0.50_0.50,q_90,enc_auto/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg"
        },

        {
            id:3,
            title : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!',
            img: "https://static.wixstatic.com/media/e1bade_c5de88e8444a4076be164755c9cedd13~mv2.jpg/v1/fill/w_838,h_838,fp_0.50_0.50,q_90,enc_auto/e1bade_c5de88e8444a4076be164755c9cedd13~mv2.jpg",
        },
        {
        id:4,
        title : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!',
        img: "https://static.wixstatic.com/media/e1bade_ef74ed321b774b59a762aa7b9edf4432~mv2.png/v1/fill/w_836,h_1115,fp_0.50_0.50,q_95,enc_auto/e1bade_ef74ed321b774b59a762aa7b9edf4432~mv2.png",
        },
        {
        id:5,
        title : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!',
        img: "https://static.wixstatic.com/media/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg/v1/fill/w_500,h_500,fp_0.50_0.50,q_90,enc_auto/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg ",
        },

        {
            id:6,
            title : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!',
            img: "https://static.wixstatic.com/media/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg/v1/fill/w_838,h_1098,fp_0.50_0.50,q_90,enc_auto/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg",
        },
        {
        id:7,
        title : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!',
        img: "https://static.wixstatic.com/media/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg/v1/fill/w_500,h_500,fp_0.50_0.50,q_90,enc_auto/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg ",
        },
        {
        id:8,
        title : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem velit quaerat numquam architecto autem minima quos dolor deleniti dicta!',
        img: "https://static.wixstatic.com/media/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg/v1/fill/w_500,h_500,fp_0.50_0.50,q_90,enc_auto/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg ",
        },
];

  return (

     <div class="mainbody">
     <div class="containerblog">
     {posts.map((post) =>(
        <div className="post" key={post.id}>
        <div className="home_page_blog_image">
        <img src={post.img} alt="" />
        </div>
        <div className="Titlebox">
        <div className="blogtitle">
        <h2>
        <Link>  {post.title}</Link>
         </h2>
         <p>
      <Link>{post.desc}</Link>
         </p>
        </div>
        </div>
        </div>
        ))}
       </div>

    
</div>
    
    
    
    
    
    
  
  )
}

export default Homepageblog