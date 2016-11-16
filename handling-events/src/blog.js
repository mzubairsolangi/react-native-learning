import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Blog extends Component {
   
   constructor(props) { 
       super(props); 
       this.state = {posts:props}
    }

   render() {
    return (
     <div>
      <Content posts={this.state.posts} />
    </div>
    );
  }
}

// function Sidebar(props) {
//   const posts = props.posts.posts;
//   return (
//     <ul>
//       {posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
// }

function Content(props) {
  const posts = props.posts.posts;
  const postsList = posts.map((post, index) =>
  
    <div key={post.id}>
      <Panel header={post.title}>
        <p>{post.content}</p>
      </Panel>
    </div>
  );
      
  return (
     <div>
        {postsList}
     </div>

  );
}

export default Blog;

// Keys help React identify which items have changed, are added, or are removed.
// React don't recommend using indexes for keys if the items can reorder.
// A good rule of thumb is that elements inside the map() call need keys.