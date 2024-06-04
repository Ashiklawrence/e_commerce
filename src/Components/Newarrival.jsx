import React from 'react'

function Newarrival() {
  return (
    <>
     <div className="container-fluid">
                {/* <div className="orangebox"></div> */}
                <p className="section2head">Featured</p>
                <div className="row">
                    <div className="col-4">
                        <h1 className="flashsalestime">New Arrival</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="container newcontainer">
                        <div className="container item1">
                            <h1>Play Station 5</h1>
                            <p>Black and White version of the PS5 <br />coming out on sale.</p>
                            <p><b><u>Shop Now</u></b></p>
                        </div>
                        <div className="container item2">
                        <h1>Women’s Collections</h1>
                            <p>Featured woman collections that <br /> give you another vibe.</p>
                            <p><b><u>Shop Now</u></b></p>
                        </div>
                        <div className="container item3">
                        <h1>Speakers</h1>
                            <p>Amazon wireless speakers</p>
                            <p><b><u>Shop Now</u></b></p>
                        </div>
                        <div className="container item4">
                        <h1>Perfumes</h1>
                            <p>Gucci intense oud edp</p>
                            <p><b><u>Shop Now</u></b></p>
                        </div>
                    </div>
                </div>

            </div>
    </>
  )
}

export default Newarrival