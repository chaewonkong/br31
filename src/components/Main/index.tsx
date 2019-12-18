import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Modal, Button, Spin } from 'antd'
import { brApi } from "../../api"
import { fontSize, media } from "../../styles/_mixin"
import axios from 'axios'



const menuNameList = ["아이스 초코파이情", "마법사의 할로윈", "오레오 쿠키 앤 카라멜", "슈퍼 버스데이", "잘될거예엿", "엄마는 외계인", "쌀떡궁합", "쫀떡궁합", "바람과 함께 사라지다", "이상한 나라의 솜사탕", "아포가토", "쿠키 앤 크림", "초코나무 숲", "프랄린 앤 크림", "31요거트", "알폰소 망고", "피스타치오 아몬드", "아몬드 봉봉", "사랑에 빠진 딸기", "베리베리 스트로베리", "민트 초콜릿 칩", "슈팅스타", "레인보우 샤베트", "바닐라", "초콜릿", "초콜릿 칩", "뉴욕 치즈케이크", "그린티", "자모카 아몬드 훠지", "체리쥬빌레", "초콜릿 무스"]

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
font-size: ${fontSize.largeFontSize};
margin: 3rem;
`

const RandomImage = styled.img`
margin: 3rem;
margin-bottom: 0;
width: 500px;
  ${media.tablet} {
    width: 400px;
  }
  ${media.phone} {
    width: 100%;
  }
`

const MenuText = styled.p`
margin-bottom: 3rem;
 font-size: ${fontSize.largeFontSize}
`

const ModalInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface IMenu {
  idx: number;
  name: string;
  url: string;
}

const Main: React.FC = () => {
  const [visible, toggleVisible] = useState(false);
  const [menuList, setMenuList] = useState<IMenu[]>([])
  const [target, setTarget] = useState(0)
  const [interval, handleInterval] = useState()
  const [intervalValue, setIntervalValue] = useState(false)

  const getData = async () => {
    const menuList = await brApi.getRandomOne()
    setMenuList(menuList)

    menuList.map(menu => axios.get(menu.url))
  }

  const changeImage = () => {

    if (menuList[target])
      return menuList[target].url
    else return "https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"

  }

  const startInterval = () => {
    let interval = setInterval(() => {
      let idx = Math.floor(Math.random() * 31)
      setTarget(idx)
    }, 2000)
    handleInterval(interval)
  }

  // const toggleInterval = () => {
  //   if (intervalValue) {
  //     clearInterval(interval)
  //     setIntervalValue(false)
  //   } else {
  //     let interval = setInterval(() => {
  //       let idx = Math.floor(Math.random() * 31)
  //       setTarget(idx)
  //     }, 50)
  //     handleInterval(interval)
  //     setIntervalValue(true)
  //   }
  // }

  const [randVal, setRandVal] = useState(0)


  useEffect(() => {
    startInterval()

    getData()
    changeImage()
  }, [])



  const showModal = () => {
    // clearInterval(interval)
    let randVal = Math.floor(Math.random() * 31)
    setRandVal(randVal)
    toggleVisible(true)
  }

  const handleOk = () => {
    // clearInterval(interval)
    toggleVisible(false)
  }

  const handleCancel = () => {
    // startInterval()
    toggleVisible(false)
  }

  if (menuList[target]) return (
    <Wrapper>
      <Title>베스킨 라빈스 31</Title>
      <RandomImage src="assets/rotate.png" />
      {/* {intervalValue ? null : <MenuText>{menuList[target].name}</MenuText>} */}
      <Button type="default" size="large" onClick={showModal}>메뉴 랜덤 선택!</Button>
      <Modal
        title="선택완료!"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="확인"
        cancelText="취소"
      >
        <ModalInner>
          <RandomImage src={menuList[randVal].url} style={{ width: "80%", marginTop: 0 }}></RandomImage>
          <MenuText>{menuList[randVal].name}</MenuText>
        </ModalInner>
      </Modal>
    </Wrapper >
  );
  else return (
    <Wrapper>
      <Title>베스킨 라빈스 31</Title>
      <Spin />
    </Wrapper>

  )
}

export default Main;