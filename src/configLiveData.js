// En aquest arxiu es troben les configuracions dels components que mostren les variables en temps real

export const configLiveDataExterior = {
  temperatura: {
    variable: 'temperatura',
    minValue: 0,
    maxValue: 45,
    startColor: 'white',
    endColor: 'red',
    url: import.meta.env.VITE_API_URL + '/getLiveData/temperatura/exterior',
    unit: 'celsius'
  },
  humitat: {
    variable: 'humitat',
    minValue: 0,
    maxValue: 100,
    startColor: 'white',
    endColor: 'red',
    url: import.meta.env.VITE_API_URL + '/getLiveData/humitat/exterior',
    unit: 'percent'
  },
  pressio: {
    variable: 'pressio',
    minValue: 980,
    maxValue: 1050,
    startColor: 'white',
    endColor: 'red',
    url: import.meta.env.VITE_API_URL + '/getLiveData/pressio/exterior'

  }
}

export const configLiveDataInterior = {
  temperatura: {
    variable: 'temperatura',
    minValue: 0,
    maxValue: 45,
    startColor: 'white',
    endColor: 'red',
    url: import.meta.env.VITE_API_URL + '/getLiveData/temperatura/interior',
    unit: 'celsius'
  },
  humitat: {
    variable: 'humitat',
    minValue: 0,
    maxValue: 100,
    startColor: 'white',
    endColor: 'red',
    url: import.meta.env.VITE_API_URL + '/getLiveData/humitat/interior',
    unit: 'percent'
  },
  pressio: {
    variable: 'pressio',
    minValue: 980,
    maxValue: 1050,
    startColor: 'white',
    endColor: 'red',
    url: import.meta.env.VITE_API_URL + '/getLiveData/pressio/interior'

  }
}
