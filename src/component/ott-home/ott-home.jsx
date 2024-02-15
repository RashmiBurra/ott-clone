

import Banner from '../banner/banner'
import Popular from '../popular/popular'
import Trending from '../trending/trending'
import Toprated from '../topRated/toprated'

function Otthome() {
  return (
    <div style={{backgroundColor:"black"}}>
        <Banner/>
         <Trending/>
        <Popular/>
        <Toprated/>
    </div>
  )
}

export default Otthome
