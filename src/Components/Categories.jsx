import React from 'react';

function Categories() {
    return (
        <>
            <div className="container-fluid">
                {/* <div className="orangebox"></div> */}
                <p className="section2head">Categories</p>

            </div>

            <div className="container-fluid categoriescontainer">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="container categorcontain">
                            <i class="lni lni-mobile cateicons"i/>
                            <h5>Phones</h5>
                        </div>
                    </div>
                    <div className="col-sm-2">
                    <div className="container categorcontain">
                    <i class="lni lni-laptop cateicons"></i>
                            <h5>Computer</h5>
                        </div>
                    </div>
                    <div className="col-sm-2">
                    <div className="container categorcontain">
                         <i class="lni lni-candy cateicons"></i>
                            <h5>Phones</h5>
                        </div>
                    </div>
                    <div className="col-sm-2">
                    <div className="container categorcontain selectedcategory">
                    <i className="lni lni-camera cateicons"></i>
                            <h5>Camera</h5>
                        </div>
                    </div>
                    <div className="col-sm-2">
                    <div className="container categorcontain">
                    <i className="lni lni-headphone cateicons"></i>
                            <h5>Head Phones</h5>
                        </div>
                    </div>
                    <div className="col-sm-2">
                    <div className="container categorcontain">
                    <i className="lni lni-game cateicons"></i>
                            <h5>Gaming</h5>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Categories