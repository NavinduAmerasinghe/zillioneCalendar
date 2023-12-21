const meetings = [
    {
      id: 1,
      name: 'Christmas Day',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2Fcristmas.jfif?alt=media&token=8af8cd9c-e4be-42ea-bfb1-f07c1aed5d6b',
        startDatetime: '2023-12-25T00:00',
        endDatetime: '2023-12-25T23:59',

    },
    {
      id: 2,
      name: 'Unduvap Full Moon Poya',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FUnduvapPoya.jfif?alt=media&token=8f84abbc-273c-4b3a-bf70-6a98c3ddf567',
      startDatetime: '2023-12-21T09:00',
      endDatetime: '2023-12-21T11:30',
      color:"yellow",
      holidayType:'PoyaHoliday'
    },
    {
      id: 3,
      name: 'St. Nicholas Day',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FSt.%20Nicholas%20Day.jfif?alt=media&token=64783848-e532-4e77-b1e2-ebf86c6994cd',
        startDatetime: '2023-12-14T09:00',
        endDatetime: '2023-12-14T11:30',
        holidayType:'MercantileHoliday'
    },
    {
      id: 4,
      name: 'Feast Day of Our Lady',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FFeast%20Day%20of%20Our%20Lady%20Guadalupe.jfif?alt=media&token=e39b9bd9-294f-49d0-b380-2dd4170aaaeb',
      startDatetime: '2023-12-18T13:00',
      endDatetime: '2023-12-18T14:30',
    },
    {
      id: 5,
      name: 'Yule Festival',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FYule%20festival.jfif?alt=media&token=ead0cad6-6396-4917-9056-d1b26cecab33',
      startDatetime: '2023-12-19T14:00',
      endDatetime: '2023-12-19T14:30',
    },
    {
        id: 6,
        name: 'Unduvap Full Moon Poya',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FUnduvapPoya.jfif?alt=media&token=8f84abbc-273c-4b3a-bf70-6a98c3ddf567',
        startDatetime: '2023-12-19T14:00',
        endDatetime: '2023-12-19T14:30',
      },
      {
        id: 7,
        name: 'Tamil Thai Pongal',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FUnduvapPoya.jfif?alt=media&token=8f84abbc-273c-4b3a-bf70-6a98c3ddf567',
        startDatetime: '2024-01-15T14:00',
        endDatetime: '2024-01-15T14:30',
        holidayType:['PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id: 8,
        name: 'Duruthu Full Moon Poya',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FUnduvapPoya.jfif?alt=media&token=8f84abbc-273c-4b3a-bf70-6a98c3ddf567',
        startDatetime: '2024-01-25T14:00',
        endDatetime: '2024-01-25T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id: 9,
        name: 'Independance Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FUnduvapPoya.jfif?alt=media&token=8f84abbc-273c-4b3a-bf70-6a98c3ddf567',
        startDatetime: '2024-02-04T14:00',
        endDatetime: '2024-02-04T14:30',
        holidayType:['PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id: 10,
        name: 'Valentines Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FUnduvapPoya.jfif?alt=media&token=8f84abbc-273c-4b3a-bf70-6a98c3ddf567',
        startDatetime: '2024-02-14T14:00',
        endDatetime: '2024-02-14T14:30',
  
      },
      {
        id: 11,
        name: 'Navam Full Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FUnduvapPoya.jfif?alt=media&token=8f84abbc-273c-4b3a-bf70-6a98c3ddf567',
        startDatetime: '2024-02-23T14:00',
        endDatetime: '2024-02-23T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
  ];

export default meetings;