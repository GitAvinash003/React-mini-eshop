import React from 'react'

export default function Products() {
    let data = [
        { name: "product1", pic: "/images/pic1.jpg" },
        { name: "product2", pic: "/images/pic2.jpg" },
        { name: "product3", pic: "/images/pic3.jpg" },
        { name: "product4", pic: "/images/pic4.jpg" },
        { name: "product5", pic: "/images/pic5.jpg" },
        { name: "product6", pic: "/images/pic6.jpg" },
        { name: "product7", pic: "/images/pic7.jpg" },
        { name: "product8", pic: "/images/pic8.jpg" },
        { name: "product9", pic: "/images/pic9.jpg" },
        { name: "product10", pic: "/images/pic10.jpg" },
        { name: "product11", pic: "/images/pic11.jpg" },
        { name: "product12", pic: "/images/pic12.jpg" },
        { name: "product13", pic: "/images/pic13.jpg" },
        { name: "product14", pic: "/images/pic14.jpg" },
        { name: "product15", pic: "/images/pic15.jpg" },
        { name: "product16", pic: "/images/pic16.jpg" },
        { name: "product17", pic: "/images/pic17.jpg" },
    ]

    return (
        <>
            <h5 className='background text-light text-center py-2 my-1'>Latest Products</h5>
            <div className="container-fluid">
                <div className="row">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-3">
                                    <div className="card">
                                        <img src={item.pic} height="200px" className="card-img-top" alt={item.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">
                                                <del className='text-danger'>&#8377;6500</del>&#8377;2999
                                            </p>
                                            <a href="#" className="btn background text-light w-100 btn-sm">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        
                    }
                </div>
            </div>
        </>
    )
}
