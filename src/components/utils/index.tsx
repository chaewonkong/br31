import React from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

const StyledSpin = styled(Spin)`
    margin-top: 10rem;
`

export const Spinner: React.FC = () => <StyledSpin size="large" />