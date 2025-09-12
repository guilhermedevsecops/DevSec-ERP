import React from 'react'
import { Box, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/pt-br'

type CustomCalendarProps = {
  label?: string
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ label = 'Selecione uma data' }) => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs())

  const handleDateChange = (newDate: Dayjs | null) => {
    setDate(newDate)

  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start', p: 2, textAlign:"center" }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            {label}
          </Typography>
          <DateCalendar value={date} onChange={handleDateChange} />
        </Box>
      </Box>
    </LocalizationProvider>
  )
}

export default CustomCalendar
