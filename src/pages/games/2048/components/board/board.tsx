import React, { Fragment } from 'react'
import { Box, Grid, Theme, useMediaQuery } from '@mui/material'
import { IBoard } from '../../../../../types'
import { Cell } from '../cell'
import { defaultBoard } from '../../game-2048'

export const Board: React.FC<IBoard> = ({ board = defaultBoard }) => {
  const sm = useMediaQuery(({ breakpoints: { down } }: Theme) => down(600))

  return (
    <Box width={sm ? 340 : 500} height={sm ? 340 : 500} bgcolor="#DEDEDE" px={1} pb="20px" borderRadius={2}>
      <Grid container spacing={1}>
        {board.map((row: number[], i: number) => {
          return (
            <Fragment key={`row-${i}`}>
              {row.map((score: number, k: number) => {
                return (
                  <Grid key={`${(i + 1) * (k + 1)}`} item xs={3}>
                    <Box width={sm ? 80 : 120} height={sm ? 80 : 120} bgcolor="#303030" borderRadius={2}>
                      {score > 0 ? <Cell score={score} /> : null}
                    </Box>
                  </Grid>
                )
              })}
            </Fragment>
          )
        })}
      </Grid>
    </Box>
  )
}
