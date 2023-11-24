export const getDataHorariFormatted = (arrayData) => {
  const arrayFormatted = arrayData.map(data => {
    const dataToFormat = new Date(data)
    const dia = dataToFormat.getHours()
    return dia
  })

  return arrayFormatted
}

export const getFecha = (arrayData, interval) => {
  const arrayFormatted = arrayData.map(data => {
    const dataToFormat = new Date(data)
    let dateFormatted = ''

    const hora = (dataToFormat.getHours() < 10) ? `0${dataToFormat.getHours()}` : `${dataToFormat.getHours()}`
    const minuts = (dataToFormat.getMinutes() === 0) ? '00' : `${dataToFormat.getMinutes()}`

    switch (interval) {
      case '1_h':

        if (dataToFormat.getHours() === 0) {
          dateFormatted = `${dataToFormat.getMonth() + 1}/${dataToFormat.getDate()} ${dataToFormat.getHours()}h`
        } else {
          dateFormatted = `${dataToFormat.getHours()}h`
        }
        break

      case '1_min':
        if (dataToFormat.getHours() === 0 && dataToFormat.getMinutes() === 0) {
          dateFormatted = `${dataToFormat.getMonth() + 1}/${dataToFormat.getDate()} ${hora}:${minuts}`
        } else {
          dateFormatted = `${hora}:${minuts}`
        }
        break
      case '5_min':
        if (dataToFormat.getHours() === 0 && dataToFormat.getMinutes() === 0) {
          dateFormatted = `${dataToFormat.getMonth() + 1}/${dataToFormat.getDate()} ${hora}:${minuts}`
        } else {
          dateFormatted = `${hora}:${minuts}`
        }
        break
      case '30_min':
        if (dataToFormat.getHours() === 0 && dataToFormat.getMinutes() === 0) {
          dateFormatted = `${dataToFormat.getMonth() + 1}/${dataToFormat.getDate()} ${hora}:${minuts}`
        } else {
          dateFormatted = `${hora}:${minuts}`
        }
        break
      case '1_day':
        if (dataToFormat.getDate() === 0) {
          dateFormatted = `${dataToFormat.getMonth() + 1}/${dataToFormat.getDate()}`
        } else {
          dateFormatted = `${dataToFormat.getDate()}`
        }
        break
      case '1_month':
        if (dataToFormat.getMonth() === 0) {
          dateFormatted = `${dataToFormat.getFullYear()}/${dataToFormat.getMonth() + 1}/${dataToFormat.getMonth()}`
        } else {
          dateFormatted = `${dataToFormat.getMonth() + 1}/${dataToFormat.getMonth()}`
        }
        break
      default:
        break
    }
    return dateFormatted
  })

  return arrayFormatted
}
