import React from 'react'
import Navbar from './Navbar'
import Footers from './Footer'

export default function Blogdetail() {
  return (
    <div className="page-wraper">
      <Navbar />
       <div className="page-content">
            {/* <!-- INNER PAGE BANNER --> */}
            <div className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"  data-stellar-background-ratio="0.5"  style={{backgroundImage:"url(assets/pic/blogdetail.jpg)"}}>
            	<div className="overlay-main bg-black opacity-07"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                    	<div className="banner-title-outer">
                        	<div className="banner-title-name">
                        		<h2 className="text-white">Blog Detail</h2>
                            </div>
                        </div>
                        {/* <!-- BREADCRUMB ROW --> */}
                        
                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li><a href="/">Home</a></li>
                                    <li>Blog Detail</li>
                                </ul>
                            </div>
                        
                        {/* <!-- BREADCRUMB ROW END -->                         */}
                    </div>
                </div>
            </div>
            {/* <!-- INNER PAGE BANNER END --> */}
            
			{/* <!-- SECTION CONTENT START --> */}
            <div className="section-full p-t80 p-b50 bg-gray">
            
                {/* <!-- GALLERY CONTENT START --> */}
                	<div className="container">
                    	<div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12">                    	
                                <div className="news-listing ">
                                    {/* <!-- COLUMNS 1 --> */}
                                     <div className="blog-post blog-md date-style-1 clearfix  m-b60 bg-white" >
                                        <div className="wt-post-media wt-img-effect zoom-slow">
                                            <a href="/"><img src="/assets/pic/blogdetail1.jpg" alt="" /></a>
                                        </div>
                                        <div className="wt-post-info p-a30">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>25 </strong> <span>Aug 2019</span> </li>
                                                    <li className="post-author"><i className="fa fa-user"></i><a href="">By <span>Admin</span></a> </li>
                                                    <li className="post-comment"><i className="fa fa fa-comments"></i><a href="">10 <span>Comment</span></a> </li>                                                
                                                </ul>
                                            </div>                                        
                                            <div className="wt-post-title ">
                                                <h3 className="post-title"><a href="" className=" m-t0">Being a famous designer is like being a famous.</a></h3>
                                            </div>
                                            <div className="wt-post-text">
                                                <p>The longer I live, the more beautiful life becomes. If you foolishly ignore beauty, you will soon find yourself without it. Your life will be impoverished. But if you invest in beauty, it will remain with you all the days of your life.</p> 
                                            </div>
                                            {/* <a href="" className="site-button-link">Read More</a> */}
                                        </div>
                                    </div>                             
        
                                    {/* <!-- COLUMNS 2 --> */}
                                     <div className="blog-post blog-md date-style-1 clearfix  m-b60 bg-white" >
                                        <div className="wt-post-media wt-img-effect zoom-slow">
                                            <a href=""><img src="/assets/pic/Best-Furniture-Brands-In-India (1).jpg" alt="" /></a>
                                        </div>
                                        <div className="wt-post-info p-a30">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>25 </strong> <span>Aug 2019</span> </li>
                                                    <li className="post-author"><i className="fa fa-user"></i><a href="">By <span>Admin</span></a> </li>
                                                    <li className="post-comment"><i className="fa fa fa-comments"></i><a href="">10 <span>Comment</span></a> </li>                                                
                                                </ul>
                                            </div>                                        
                                            <div className="wt-post-title ">
                                                <h3 className="post-title"><a href="" className=" m-t0">Architecture is not based on concrete and steel.</a></h3>
                                            </div>
                                            <div className="wt-post-text">
                                                <p>The longer I live, the more beautiful life becomes. If you foolishly ignore beauty, you will soon find yourself without it. Your life will be impoverished. But if you invest in beauty, it will remain with you all the days of your life.</p> 
                                            </div>
                                            {/* <a href="" className="site-button-link">Read More</a> */}
                                        </div>
                                    </div> 
                                    
                                    {/* <!-- COLUMNS 3 --> */}
                                     <div className="blog-post blog-md date-style-1 clearfix  m-b60 bg-white" >
                                        <div className="wt-post-media wt-img-effect zoom-slow">
                                            <a href=""><img src="/assets/pic/Kitchenhome (1).jpg" alt="" /></a>
                                        </div>
                                        <div className="wt-post-info p-a30">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>25 </strong> <span>Aug 2019</span> </li>
                                                    <li className="post-author"><i className="fa fa-user"></i><a href="">By <span>Admin</span></a> </li>
                                                    <li className="post-comment"><i className="fa fa fa-comments"></i><a href="">10 <span>Comment</span></a> </li>                                                
                                                </ul>
                                            </div>                                        
                                            <div className="wt-post-title ">
                                                <h3 className="post-title"><a href="" className=" m-t0">An object should be judged by whether.</a></h3>
                                            </div>
                                            <div className="wt-post-text">
                                                <p>The longer I live, the more beautiful life becomes. If you foolishly ignore beauty, you will soon find yourself without it. Your life will be impoverished. But if you invest in beauty, it will remain with you all the days of your life.</p> 
                                            </div>
                                            {/* <a href="" className="site-button-link">Read More</a> */}
                                        </div>
                                    </div> 
                                    
                                    {/* <!-- COLUMNS 4 --> */}
                                     <div className="blog-post blog-md date-style-1 clearfix  m-b60 bg-white" >
                                        <div className="wt-post-media wt-img-effect zoom-slow">
                                            <a href=""><img src="/assets/pic/blogdetail4.jpg" alt="" /></a>
                                        </div>
                                        <div className="wt-post-info p-a30">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>25 </strong> <span>Aug 2019</span> </li>
                                                    <li className="post-author"><i className="fa fa-user"></i><a href="">By <span>Admin</span></a> </li>
                                                    <li className="post-comment"><i className="fa fa fa-comments"></i><a href="">10 <span>Comment</span></a> </li>                                                
                                                </ul>
                                            </div>                                        
                                            <div className="wt-post-title ">
                                                <h3 className="post-title"><a href="" className=" m-t0">Very often the opinion of the clients must be.</a></h3>
                                            </div>
                                            <div className="wt-post-text">
                                                <p>The longer I live, the more beautiful life becomes. If you foolishly ignore beauty, you will soon find yourself without it. Your life will be impoverished. But if you invest in beauty, it will remain with you all the days of your life.</p> 
                                            </div>
                                            {/* <a href="" className="site-button-link">Read More</a> */}
                                        </div>
                                    </div> 
                                    
                                    {/* <!-- COLUMNS 5 --> */}
                                     <div className="blog-post blog-md date-style-1 clearfix  m-b60 bg-white" >
                                        <div className="wt-post-media wt-img-effect zoom-slow">
                                            <a href=""><img src="/assets/pic/blogdetail5.webp" alt="" /></a>
                                        </div>
                                        <div className="wt-post-info p-a30">
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>25</strong> <span>Aug 2019</span> </li>
                                                    <li className="post-author"><i className="fa fa-user"></i><a href="">By <span>Admin</span></a> </li>
                                                    <li className="post-comment"><i className="fa fa fa-comments"></i><a href="">10 <span>Comment</span></a> </li>                                                
                                                </ul>
                                            </div>                                        
                                            <div className="wt-post-title ">
                                                <h3 className="post-title"><a href="" className=" m-t0">Architects spend an entire life with this.</a></h3>
                                            </div>
                                            <div className="wt-post-text">
                                                <p>The longer I live, the more beautiful life becomes. If you foolishly ignore beauty, you will soon find yourself without it. Your life will be impoverished. But if you invest in beauty, it will remain with you all the days of your life.</p> 
                                            </div>
                                            {/* <a href="" className="site-button-link">Read More</a> */}
                                        </div>
                                    </div>                             
                                                                                            
                                </div>
                                
                            </div>   
                            {/* <!-- SIDE BAR START --> */}
                            <div className="col-lg-4 col-md-12 col-sm-12 rightSidebar">
                            
                                <aside  className="side-bar">
                                    
                                        {/* <!-- SEARCH --> */}
                                        <div className="widget p-a30 bg-white">
                                            <h4 className="widget-title">Search</h4>
                                            <div className="search-bx">
                                                <form role="search" method="post">
                                                    <div className="input-group">
                                                        <input name="news-letter" type="text" className="form-control" placeholder="Write your text" />
                                                        <span className="input-group-btn">
                                                            <button type="submit" className="site-button"><i className="fa fa-search"></i></button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        
                                    {/* <!-- Categories -->                                         */}
									<div className="widget bg-white  widget_services p-a30 bg-white">
                                    	<h4 className="widget-title">Categories</h4>
                                        <ul>
                                            <li><a href="">Architecture</a><span> (28)</span></li>
                                            <li><a href="">Awards</a><span> (05)</span></li>
                                            <li><a href="">Reseller</a><span> (24)</span></li>
                                            <li><a href="">Uncategorized</a><span> (15)</span></li>
                                            <li><a href="">Interviews</a><span> (20)</span></li>
                                            <li><a href="">Event</a><span> (90)</span></li>
                                        </ul>
                                    </div>                                        
                                        
                                        {/* <!-- OUR GALLERY  --> */}
                                        <div className="widget widget_gallery mfp-gallery p-a30 bg-white">
                                            <h4 className="widget-title">Our Gallery</h4>
                                            <div className="row no-gutters justify-content-center">
                                                <div className="col-6 col-sm-4 ">
                                                    <div className="wt-post-thum m-1">
                                                        <a href="/assets/pic/kl (2).jpg" className="mfp-link" ><img src="/assets/pic/kl (1).jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-6 col-sm-4 ">
                                                    <div className="wt-post-thum m-1">
                                                        <a href="/assets/pic/kp (2).jpg" className="mfp-link"><img src="/assets/pic/kp (1).jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-6 col-sm-4 ">
                                                    <div className="wt-post-thum  m-1">
                                                        <a href="/assets/pic/kblog (4).webp" className="mfp-link"><img src="/assets/pic/kblog (1).webp" alt="" /></a>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-6 col-sm-4 ">
                                                    <div className="wt-post-thum m-1">
                                                        <a href="/assets/pic/childrensblog (2).jpg" className="mfp-link"><img src="/assets/pic/childrensblog (1).jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-6 col-sm-4 ">
                                                    <div className="wt-post-thum m-1">
                                                        <a href="/assets/pic/underblog (2).webp" className="mfp-link"><img src="/assets/pic/underblog (1).webp" alt="" /></a>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-6 col-sm-4 ">
                                                    <div className="wt-post-thum m-1">
                                                        <a href="/assets/pic/dainingblog (2).jpg" className="mfp-link"><img src="/assets/pic/dainingblog (1).jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                                
                                               
    
                                                
                                            </div>
                                        </div> 
                                        
                                                                              
                                        
                                        {/* <!-- RECENT POSTS --> */}
                                        <div className="widget  recent-posts-entry p-a30 bg-white">
                                            <h4 className="widget-title">Recent Posts</h4>
                                            <div className="section-content">
                                                <div className="widget-post-bx">
                                                    <div className="widget-post clearfix">
                                                        <div className="wt-post-media">
                                                            <img src="/assets/pic/table (2).jpg" alt="" />
                                                        </div>
                                                        <div className="wt-post-info">
                                                            <div className="wt-post-meta">
                                                                <ul>
                                                                    <li className="post-author">Aug 14, 2019</li>
                                                                </ul>
                                                            </div>                                            
                                                            <div className="wt-post-header">
                                                                <h5 className="post-title">Years behold fourth tree creeping god</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-post clearfix">
                                                        <div className="wt-post-media">
                                                            <img src="/assets/pic/bedblog (1).jpg" alt="" />
                                                        </div>
                                                        <div className="wt-post-info">
                                                            <div className="wt-post-meta">
                                                                <ul>
                                                                    <li className="post-author">Aug 19, 2019</li>
                                                                </ul>
                                                            </div>                                            
                                                            <div className="wt-post-header">
                                                                <h5 className="post-title">Tips for Self-Made Home Interiors Layout</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-post clearfix">
                                                        <div className="wt-post-media">
                                                            <img src="/assets/pic/livingblog (1).jpg" alt="" />
                                                        </div>
                                                        <div className="wt-post-info">
                                                            <div className="wt-post-meta">
                                                                <ul>
                                                                    <li className="post-author">Aug 28, 2019</li>
                                                                </ul>
                                                            </div>                                            
                                                            <div className="wt-post-header">
                                                                <h5 className="post-title">Design of Building: From Planning to Peforming</h5>
                                                            </div>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>                                    

                                                                          
    
                                        {/* <!-- TAGS --> */}
                                        <div className="widget widget_tag_cloud p-a30 bg-white">
                                            <h4 className="widget-title">Tags</h4>
                                            <div className="tagcloud">
                                                <a href="">Trouble </a>
                                                <a href="">Programmers</a>
                                                <a href="">Never</a>
                                                <a href="">Tell</a>
                                                <a href="">Doing</a>
                                                <a href="">Person</a>
                                                <a href="">Inventors Tag</a>
                                                <a href="">Between </a>
                                                <a href="">Abilities</a>
                                                <a href="">Fault </a>
                                                <a href="">Gets </a>
                                                <a href="">Macho</a>
                                            </div>
                                        </div> 
                                    
                                   </aside>
        
                            </div>
                            {/* <!-- SIDE BAR END --> */}
                         </div>                          
            		</div>
                {/* <!-- GALLERY CONTENT END --> */}
            
            </div>
            {/* <!-- SECTION CONTENT END  --> */}

        </div>
        <Footers />
       {/* <!-- BUTTON TOP START --> */}
       <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
    </div>
  )
}
