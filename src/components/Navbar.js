import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='max-w-[1200px] mx-auto px-4'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-'>
                <div className='navbar_link'>HOME</div>
                <div className='navbar_link'>CATEGORIES</div>
                <div className='navbar_link'>{`MEN'S`}</div>
                <div className='navbar_link'>{`WOMEN'S`}</div>
                <div className='navbar_link'>JEWELLERY</div>
                <div className='navbar_link'>PERFUME</div>
                <div className='navbar_link'>BLOG</div>
                <div className='navbar_link'>HOT OFFERS</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar