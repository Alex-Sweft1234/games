import React from 'react'
import { Box, Container, Grid, Button } from '@mui/material'
import { MyLink } from '../../components'

export const NotFoundPage: React.FC = (): JSX.Element => {
  return (
    <Box width="100vw" height="100vh">
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="center" height="100vh">
          <Grid item xs={12}>
            <Box p={6} textAlign="center" fontSize={30} fontWeight={500}>
              Страница не найдена
            </Box>
            <Grid container justifyContent="center">
              <Grid item>
                <Box display="flex" justifyContent="center" maxWidth={300}>
                  <Button component={MyLink} fullWidth variant="contained" color="primary" to="/">
                    Вернуться на главную
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
