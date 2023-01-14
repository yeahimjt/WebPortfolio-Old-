import React, {Suspense} from 'react'
import './coin.css'
const Spline = React.lazy(() => import('@splinetool/react-spline'));
const Coin = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/XE8Kkak3C6gfUwZp/scene.splinecode" />
        </Suspense>
    </div>
  )
}

export default Coin
