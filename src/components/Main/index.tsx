import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Modal, Button } from 'antd'
import { brApi } from "../../api"
import { fontSize, media } from "../../styles/_mixin"


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
width: 500px;
  ${media.tablet} {
    width: 400px;
  }
  ${media.phone} {
    width: 100%;
  }
`

const Main: React.FC = () => {
  const getRandomOne = async () => await brApi.getRandomOne()

  useEffect(() => {
    getRandomOne()
  }, [])

  const [visible, toggleVisible] = useState(false);

  const showModal = () => {
    toggleVisible(true)
  }

  const handleOk = () => {

    toggleVisible(false)
  }

  const handleCancel = () => {
    toggleVisible(false)
  }

  return (
    <Wrapper>
      <Title>타이틀</Title>
      <RandomImage src="https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1106&q=80" />
      <Button type="default" size="large" onClick={showModal}>골라 주세요!</Button>
      <Modal
        title="선택완료!"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="확인"
        cancelText="취소"
      >
        <p>엄마는 외계인</p>
        <p>레인보우 샤베트</p>
        <p>슈팅스타</p>
        <p>뉴욕 치즈 케익</p>
      </Modal>
    </Wrapper>
  );
}

export default Main;