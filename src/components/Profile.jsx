import React from 'react';

	const Profile = () => {

		return             <div className="content item-grid">
      
        <div className=''>
          <img className="img-head" src="https://dbmtgroup.com/wp-content/uploads/2018/04/Digital.jpg" />
        </div>
        <div className='base-info'>
          <div className="avatar">
              <img src="http://picsnews.meta.ua/90x90/517/71/51771970-V-vano-Frankvsku-rozpochalisia-zmagannia-z-klubnogo-avtoslalomu-FOTO.jpeg" alt=""/>
          </div>  
         
          <div className='description'>
            <div>Artem A.</div>
            <div>Date of birth: 31 july</div>
            <div>City: Stavropol</div>
            <div>web-site: contora.xyz</div>
          </div>
      </div>
      
      <div className='new-post item-grid'>
        <div className="new-post-label">
          <h2>My post</h2>
        </div>
        <div className="new-post-text">
          <textarea placeholder="new post..." name="" id="" cols="95" rows="3"></textarea>
        </div>
      </div>
      <div className="posts item-grid">
        <div className="post">
          <div className="mini-avatar">
            <img src="" alt=""/>
          </div>
          <div className="text-post">
            Hello!!!
          </div>
        </div>
      </div>
    </div> 
      
	}

	export default Profile;