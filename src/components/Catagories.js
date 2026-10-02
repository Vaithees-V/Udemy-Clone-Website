import Sale from "../assets/images/sale.jpg";

function Catagories() {
    return (
        <div>
            <div className="catagories">
                <p>Business</p>
                <p>Development</p>
                <p>IT & Softwere</p>
                <p>Personal Dvelopment</p>
                <p>Marketing</p>
                <p>Design</p>
            </div>

            <div className="sale-image">
                <img src={Sale} alt="Sale" />
                    <div className="sale-image__offer">
                        <h1>Flash Sale! 24 Hours Only</h1>
                        <p>Get the top courses at just 999.Just one day to save!</p>
                    </div>
            </div>
        </div>
    )
}

export default Catagories;