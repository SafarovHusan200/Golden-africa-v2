import BannerNFT from "../../components/banner-nft"
import Footer from "../../components/footer"
import SaleNFT from "../../components/sale-nft"

const NFTPage = () => {
  return (
    <>
      <BannerNFT/>
      <div className="py-10 relative">
        <div className="w-full h-full absolute top-0 left-0 main-bg backdrop-brightness-0 opacity-10 -z-10"></div>
        <SaleNFT/>
        <Footer/>
      </div>
    </>
  )
}

export default NFTPage