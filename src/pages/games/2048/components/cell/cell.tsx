import React from 'react'
import { Grid, Theme, useMediaQuery } from '@mui/material'
import { ICell } from '../../../../../types'

export const Cell: React.FC<ICell> = ({ score = 0 }): JSX.Element => {
  const sm = useMediaQuery(({ breakpoints: { down } }: Theme) => down(600))

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      width={sm ? 85 : 120}
      height={sm ? 85 : 120}
      fontSize={sm ? 38 : 50}
      fontWeight={500}
      color="#FFFFFF"
      bgcolor={
        score === 2
          ? '#27AE60'
          : score === 4
          ? '#138D75'
          : score === 8
          ? '#2980B9'
          : score === 16
          ? '#8E44AD'
          : score === 32
          ? '#034F84'
          : score === 64
          ? '#34495E'
          : score === 128
          ? '#F1C40F'
          : score === 256
          ? '#E67E22'
          : score === 512
          ? '#D35400'
          : score === 1024
          ? '#E74C3C'
          : score === 2048
          ? '#C0392B'
          : ''
      }
      borderRadius={2}
      style={{ transition: '.2s' }}
    >
      <Grid item>{score}</Grid>
    </Grid>
  )
}
