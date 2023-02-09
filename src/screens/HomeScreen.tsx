import * as React from 'react'
import Swiper from 'react-native-swiper'

import BudgetAtGlanceScreen from './BudgetAtGlanceScreen'
import SpendingTrackingScreen from './SpendingTrackingScreen'
import FreeCreditReportScreen from './FreeCreditReportScreen'
import {useRef, useState} from 'react'

const Home = () => {
  const swiperRef = useRef(null)
  const [keyNumber, setKeyNumber] = useState(0)

  const handleIndexChange = (index: number) => {
    setKeyNumber(index)
  }
  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      showsPagination={false}
      index={0}
      onIndexChanged={handleIndexChange}>
      <BudgetAtGlanceScreen swiperRef={swiperRef} keyNumber={keyNumber} />
      <SpendingTrackingScreen swiperRef={swiperRef} keyNumber={keyNumber} />
      <FreeCreditReportScreen swiperRef={swiperRef} keyNumber={keyNumber} />
    </Swiper>
  )
}

export default Home
