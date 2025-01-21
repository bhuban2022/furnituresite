import React from 'react'
import logo from "../Image/logo.png"
import blogimage from "../Image/Blogimage.png"
import subblog from "../Image/Subblog.png"
function Cart() {
  return (
    <div>

      {/ Hero Title Section Start /}
      <div className='main-cart-container'>
        <div className='inner-connent'>
          <img src={logo} alt='logo-image' className='hero-logo' />
          <div className='textfor'>Blog</div>
          <div className='directio'>Home <i class="fa-solid fa-greater-than"></i> Blog</div>
        </div>
      </div>
      {/ Hero Title Section End /}

      {/ Blogs Section Starts /}
      <div className='container d-flex gap-5 blog-cover'>
        {/ Blog List start here /}
        <div className='left-blog-side'>
          {/ Single Blog start /}
          <div className='main-blog mt-3'>

            <img src={blogimage} alt='blog image' className='blog-image' />
            <div className='blog-details'>
              <div className='date'>
                <i class="fa-solid fa-user-tie"></i> Admin
              </div>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> 14 Oct 2022
              </div>
              <div className='date'>
                <i class="fa-solid fa-tag"></i> Wood
              </div>
            </div>
            <div className='blog-title'>
              Going all-in with millennial design
            </div>
            <p className='detail-blog'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
          </div>
          <div className='main-blog mt-3'>
            <img src={blogimage} alt='blog image' className='blog-image' />
            <div className='blog-details'>
              <div className='date'>
                <i class="fa-solid fa-user-tie"></i> Admin
              </div>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> 14 Oct 2022
              </div>
              <div className='date'>
                <i class="fa-solid fa-tag"></i> Wood
              </div>
            </div>
            <div className='blog-title'>
              Going all-in with millennial design
            </div>
            <p className='detail-blog'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
          </div>
          <div className='main-blog mt-3'>
            <img src={blogimage} alt='blog image' className='blog-image' />
            <div className='blog-details'>
              <div className='date'>
                <i class="fa-solid fa-user-tie"></i> Admin
              </div>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> 14 Oct 2022
              </div>
              <div className='date'>
                <i class="fa-solid fa-tag"></i> Wood
              </div>
            </div>
            <div className='blog-title'>
              Going all-in with millennial design
            </div>
            <p className='detail-blog'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
          </div>
          <div className='main-blog mt-3'>
            <img src={blogimage} alt='blog image' className='blog-image' />
            <div className='blog-details'>
              <div className='date'>
                <i class="fa-solid fa-user-tie"></i> Admin
              </div>
              <div className='date'>
                <i class="fa-regular fa-calendar"></i> 14 Oct 2022
              </div>
              <div className='date'>
                <i class="fa-solid fa-tag"></i> Wood
              </div>
            </div>
            <div className='blog-title'>
              Going all-in with millennial design
            </div>
            <p className='detail-blog'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
          </div>
        </div>
        <div className='right-blog-side'>
          <div className='inputfield mt-3'>
            <input /> <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='category-cover' >
          <div className='categories'>
           <div className='cate-title'>
           Category </div> 
           <div className='detail-category'>
          <div>Crafts</div> <div>100</div>
           </div>
           <div className='detail-category'>
          <div>Design</div> <div>50</div>
           </div> <div className='detail-category'>
          <div>Handmade</div> <div>90</div>
           </div> <div className='detail-category'>
          <div>Interior</div> <div>70</div>
           </div> <div className='detail-category'>
          <div>Crafts</div> <div>100</div>
           </div> <div className='detail-category'>
          <div>Crafts</div> <div>100</div>
           </div>
          </div>
          </div>
           <div className='category-cover ' style={{marginTop:"100px"}}>
          <div className='categories'>
           <div className='cate-title'>
           Recent Posts </div> 
     <div className='subblog d-flex gap-2 mt-3'>

      <img src={subblog} className='subb' alt='sub-blog'/>
      <div className='blogsec'>
        <div className='ttitle'>Going all-in with millennial design</div>
        <div className='fordate'>
        03 Aug 2022
        </div>
      </div>
     </div>
     <div className='subblog d-flex gap-2 mt-3'>
      <img src={subblog} className='subb' alt='sub-blog'/>
      <div className='blogsec'>
        <div className='ttitle'>Going all-in with millennial design</div>
        <div className='fordate'>
        03 Aug 2022
        </div>
      </div>
     </div>
     <div className='subblog d-flex gap-2 mt-3'>
      <img src={subblog} className='subb' alt='sub-blog'/>
      <div className='blogsec'>
        <div className='ttitle'>Going all-in with millennial design</div>
        <div className='fordate'>
        03 Aug 2022
        </div>
      </div>
     </div>
     <div className='subblog d-flex gap-2 mt-3'>
      <img src={subblog} className='subb' alt='sub-blog'/>
      <div className='blogsec'>
        <div className='ttitle'>Going all-in with millennial design</div>
        <div className='fordate'>
        03 Aug 2022
        </div>
      </div>
     </div>
     <div className='subblog d-flex gap-2 mt-3'>
      <img src={subblog} className='subb' alt='sub-blog'/>
      <div className='blogsec'>
        <div className='ttitle'>Going all-in with millennial design</div>
        <div className='fordate'>
        03 Aug 2022
        </div>
      </div>
     </div>
     <div className='subblog d-flex gap-2 mt-3'>
      <img src={subblog} className='subb' alt='sub-blog'/>
      <div className='blogsec'>
        <div className='ttitle'>Going all-in with millennial design</div>
        <div className='fordate'>
        03 Aug 2022
        </div>
      </div>
     </div>
          </div>
          </div>
       
        </div>
      </div>
{/ Blogs Section End /}
{/ Pagination Section Starts /}

<div className='container d-flex  gap-3 align-items-center justify-content-center'>
  <div className='first'>1</div>
  <div className='first'>2</div>
  <div className='first'>3</div>
  <div className='first'>Next</div>
</div>
<div className='covercontainer'>
  
</div>
    </div>
  )
}

export default Cart