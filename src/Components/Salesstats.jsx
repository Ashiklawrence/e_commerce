import React from 'react'

function Salesstats() {
    return (
        <>
            <section>
                <div className="container-fluid categoriescontainer">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="container statcontain">
                                <div className="abtgrey">
                                    <div className="abtblack">
                                        <i class="lni lni-home"></i>
                                    </div>
                                </div>
                                <h2>10.5k</h2>
                                <p>Sales active our site</p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="container statcontain selectedstatcontain">
                                <div className="abtgrey selectedabtgrey">
                                    <div className="abtblack selectedabtblack">
                                        <i class="lni lni-dollar"></i>
                                    </div>
                                </div>
                                <h2>33k</h2>
                                <p>Monthly product sale</p>

                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="container statcontain">
                                <div className="abtgrey">
                                    <div className="abtblack">
                                    <i class="lni lni-shopping-basket"></i>
                                    </div>
                                </div>
                                <h2>45.5k</h2>
                                <p>Customer active in our site</p>

                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="container statcontain">
                            <div className="abtgrey">
                                    <div className="abtblack">
                                    <i class="lni lni-target-revenue"></i>
                                    </div>
                                </div>
                                <h2>25k</h2>
                                <p>Anual gross sale in our site</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Salesstats