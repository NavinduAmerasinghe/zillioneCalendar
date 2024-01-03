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
      startDatetime: '2023-12-22T09:00',
      endDatetime: '2023-12-22T11:30',
      color:"yellow",
      holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
    },
    {
      id: 3,
      name: 'St. Nicholas Day',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FSt.%20Nicholas%20Day.jfif?alt=media&token=64783848-e532-4e77-b1e2-ebf86c6994cd',
        startDatetime: '2023-12-14T09:00',
        endDatetime: '2023-12-14T11:30',
        holidayType:['PublicHoliday','BankHoliday', 'MercantileHoliday']
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
        startDatetime: '2023-12-26T14:00',
        endDatetime: '2023-12-26T14:30',
      },
      {
        id: 7,
        name: 'Tamil Thai Pongal',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FThaipongal-15-p2.jpg?alt=media&token=0717bba1-36bf-4e43-9ce4-07f8a767932a',
        startDatetime: '2024-01-15T14:00',
        endDatetime: '2024-01-15T14:30',
        holidayType:['PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id: 8,
        name: 'Duruthu Full Moon Poya',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F1.January%2FPoya%20Day%20-%2025-p1.jpg?alt=media&token=587a478c-9770-48af-ac3c-6e815ac307ee',
        startDatetime: '2024-01-25T14:00',
        endDatetime: '2024-01-25T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id: 9,
        name: 'Independance Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F2.February%2FIndependance-4-p2.jpg?alt=media&token=ebaddccb-f259-4404-922c-9f879ffe0c53',
        startDatetime: '2024-02-04T14:00',
        endDatetime: '2024-02-04T14:30',
        holidayType:['PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id: 10,
        name: 'Valentines Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F2.February%2FValentine.jpg?alt=media&token=3b304c5f-a291-467d-95d9-e5e3e7bd1258',
        startDatetime: '2024-02-14T14:00',
        endDatetime: '2024-02-14T14:30',
  
      },
      {
        id: 11,
        name: 'Navam Full Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F2.February%2FPoya%20Day%20-%2023-%20p2.jpg?alt=media&token=90f88dda-a97d-44d4-9a46-ff9b290ba2d4',
        startDatetime: '2024-02-23T14:00',
        endDatetime: '2024-02-23T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id: 12,
        name: 'Maha Shivarathri Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F3.March%2FMahashivarathri-08-p1.jpg?alt=media&token=12857f53-3eb5-441c-afa8-50b0d9ca0620',
        startDatetime: '2024-03-08T14:00',
        endDatetime: '2024-03-08T14:30',
        holidayType:['PublicHoliday','BankHoliday']
      },
      {
        id: 13,
        name: 'International Womens Day',
        imageUrl:
          '',
        startDatetime: '2024-03-08T14:00',
        endDatetime: '2024-03-08T14:30',
        //holidayType:['PublicHoliday','BankHoliday']
      },
      {
        id:14 ,
        name: 'World Water Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F3.March%2FWorld%20Water%20Day%20-22-%20p2.jpg?alt=media&token=efc2d51c-927f-487b-9987-b4e5bc9e3081',
        startDatetime: '2024-03-22T14:00',
        endDatetime: '2024-03-22T14:30',
              },
      {
        id:15 ,
        name: 'Modin Full Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F3.March%2FPoya%20Day-24-p1.jpg?alt=media&token=ef7790fd-247a-4508-9bbc-434bea2742ea',
        startDatetime: '2024-03-24T14:00',
        endDatetime: '2024-03-24T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id:16 ,
        name: 'Good Friday',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F3.March%2FGood%20Friday%20-%2029-p1.jpg?alt=media&token=e4c11b33-2ded-49bd-b676-d5da8d132097',
        startDatetime: '2024-03-29T14:00',
        endDatetime: '2024-03-29T14:30',
        holidayType:['PublicHoliday','BankHoliday']
      },
      {
        id:17 ,
        name: 'Easter Sunday',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F3.March%2FEaster%20Sunday-31-p1.jpg?alt=media&token=7804d2f6-01e9-4788-96f5-df5986f03835',
        startDatetime: '2024-03-31T14:00',
        endDatetime: '2024-03-31T14:30',
      },
      {
        id:18 ,
        name: 'World Health Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F4.April%2FWHD-07-P2.jpg?alt=media&token=adbe7d86-628b-4cf2-a309-7d21f8da7034',
        startDatetime: '2024-04-07T14:00',
        endDatetime: '2024-04-07T14:30',
           },
      {
        id:19 ,
        name: 'Id-Ul-Fitr(Ramazan Festival Day)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F4.April%2FRamazan-11-p1.jpg?alt=media&token=0dcd227d-20d9-4901-9505-4b71bcf6d909',
        startDatetime: '2024-04-11T14:00',
        endDatetime: '2024-04-11T14:30',
        holidayType:['PublicHoliday','BankHoliday']
      },
      {
        id:20 ,
        name: 'Sinahala & Tamil New Year',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F4.April%2FSinhala%20Tamil%20New%20Year%20-%2013-%20p1.jpg?alt=media&token=74b3264f-755b-482d-b4b5-5b521d1d02ff',
        startDatetime: '2024-04-12T14:00',
        endDatetime: '2024-04-12T14:30',
        holidayType:['PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id:21 ,
        name: 'Sinahala & Tamil New Year',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F4.April%2FSinhala%20Tamil%20New%20Year%20-%2013-%20p3.jpg?alt=media&token=153ecc8f-4595-4c01-8802-f9a84fba0733',
        startDatetime: '2024-04-13T14:00',
        endDatetime: '2024-04-13T14:30',
        holidayType:['PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id:22 ,
        name: 'International Monther Earth Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F4.April%2FEarth%20Day-22-p3.jpg?alt=media&token=18fc4447-667f-43c0-bb59-5e5c32ed702b',
        startDatetime: '2024-04-22T14:00',
        endDatetime: '2024-04-22T14:30',
         },
      {
        id:23,
        name: 'Bak Full Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F4.April%2FPoya%20Day-23-p1.jpg?alt=media&token=1d815b67-c4bc-42a8-b8ad-70975af560ce',
        startDatetime: '2024-04-23T14:00',
        endDatetime: '2024-04-23T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id:24 ,
        name: 'May Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F5.May%2FMay_day_1.5%20_p1.jfif?alt=media&token=70f8c18c-8c80-4a36-9007-615b8315c30c',
        startDatetime: '2024-05-01T14:00',
        endDatetime: '2024-05-01T14:30',
        holidayType:['PublicHoliday', 'MercantileHoliday']
      },
      {
        id:25 ,
        name: 'Mothers Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F5.May%2FMothers_day_12.5_p1.jfif?alt=media&token=4aab54fc-6817-475e-bc7f-a7a30abab0da',
        startDatetime: '2024-05-12T14:00',
        endDatetime: '2024-05-12T14:30',
         },
      {
        id:26,
        name: 'International Day of Families',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F5.May%2FFamily_Day%2015.05%20_p1.jfif?alt=media&token=255c3d06-d9c9-427c-b9ad-9e5e4e0b9252',
        startDatetime: '2024-05-15T14:00',
        endDatetime: '2024-05-15T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id:27 ,
        name: 'World Telecommunication Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F5.May%2FWorld_Telecommunication_day%2017.05_p1.jfif?alt=media&token=e9af1754-da1b-4258-9449-8ae20c48c980',
        startDatetime: '2024-05-17T14:00',
        endDatetime: '2024-05-17T14:30',
             },
      {
        id:28 ,
        name: 'Vesak Full Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F5.May%2FVesak%20_Day%2023.05_p1.jfif?alt=media&token=659ccf82-2ed2-46da-b607-7a09f1e5b098',
        startDatetime: '2024-05-23T14:00',
        endDatetime: '2024-05-23T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id:29 ,
        name: 'Day following Vesak Full Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F5.May%2FA%20Day%20following%20Vesak%2024.05_p1.jfif?alt=media&token=a1d755ac-4034-458c-b53b-9e773e1256b7',
        startDatetime: '2024-05-24T14:00',
        endDatetime: '2024-05-24T14:30',
        holidayType:['PublicHoliday','MercantileHoliday']
      },
      {
        id:30 ,
        name: 'World Environment Day(UNEP)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F6.June%2FWorld_Environment%205.06_p2.jfif?alt=media&token=c3b7ca1b-7831-49bf-a12a-a59e46021e71',
        startDatetime: '2024-06-05T14:00',
        endDatetime: '2024-06-05T14:30',
         },
         {
        id:31 ,
        name: 'World Day Against Child labour',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F6.June%2FWorld_day%20against%20child%20labour%2012.06.%20p2jfif.jfif?alt=media&token=6f2f5892-17a1-486e-b680-442e33a15ab7',
        startDatetime: '2024-06-12T14:00',
        endDatetime: '2024-06-12T14:30',
         },
      {
        id: 32,
        name: 'Fathers day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F6.June%2FFathers_Day%2016.06%20_p1.jfif?alt=media&token=50db58a3-f4c4-43e8-a07e-10c95336d1f2',
        startDatetime: '2024-06-16T14:00',
        endDatetime: '2024-06-16T14:30',
       },
      {
        id:33,
        name: 'Hadji Festival Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F6.June%2FHadj_Festival%2017.06_p1.jfif?alt=media&token=2e8281db-67df-4965-85fd-294fb4d16349',
        startDatetime: '2024-06-17T14:00',
        endDatetime: '2024-06-17T14:30',
        holidayType:['PublicHoliday','BankHoliday']
      },
      {
        id: 34,
        name: 'Poson Full Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F6.June%2Fposon_full%20moon%20poya%20day%2021.06_p2.jfif?alt=media&token=9b83b493-13f6-4951-aa01-b9b0735f801f',
        startDatetime: '2024-06-21T14:00',
        endDatetime: '2024-06-21T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id: 35,
        name: 'World Population Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F7.July%2FWorld_populationday%2011.7_p1.jfif?alt=media&token=51f6ab2a-fae5-4f30-959b-e9c568958bdb',
        startDatetime: '2024-07-11T14:00',
        endDatetime: '2024-07-11T14:30',
        },
      {
        id:36 ,
        name: 'Esala Full Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F7.July%2FEsala%20Perhera%2020.7%20p3.jfif?alt=media&token=d0bdbf80-2369-43f2-8914-d76c998fda6c',
        startDatetime: '2024-07-20T14:00',
        endDatetime: '2024-07-20T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id:37,
        name: 'International Youth Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F8.August%2Fyouth_day%2012.08%20New_p1.jfif?alt=media&token=ba316ee6-7d56-472a-b55d-a36f9c09ba84',
        startDatetime: '2024-08-12T14:00',
        endDatetime: '2024-08-12T14:30',
        },
      {
        id:38 ,
        name: 'Nikini Full Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F8.August%2FNikini_Full_Moon_poyaday%2019.08__p1.jfif?alt=media&token=5ce1223c-70b7-477d-aa8a-338f598ba297',
        startDatetime: '2024-08-19T14:00',
        endDatetime: '2024-08-19T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id:39 ,
        name: 'International Literacy Day(UNESCO)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F9.September%2FInternational_Literacy_Day_08_P2.jfif?alt=media&token=16865ed1-24b8-4561-864d-3800ac092c96',
        startDatetime: '2024-09-08T14:00',
        endDatetime: '2024-09-0814:30',
        },
      {
        id:40 ,
        name: 'World First Aid Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F9.September%2FWorld_First_Aid_Day_14_P2.jfif?alt=media&token=196b0ca0-2094-4ee0-b783-aeb06beb4bea',
        startDatetime: '2024-09-14T14:00',
        endDatetime: '2024-09-14T14:30',
        },
      {
        id: 41,
        name: 'Milad-Un-Nabi (Holy Prophets Birthday)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F9.September%2FMilad_Un_Nabi_16_P1.jfif?alt=media&token=79da7aec-5d12-4e22-ae8d-935468bd862d',
        startDatetime: '2024-09-16T14:00',
        endDatetime: '2024-09-16T14:30',
        holidayType:['PublicHoliday','BankHoliday', 'MercantileHoliday']
      },  {
        id: 42,
        name: 'Binara Full Moon Poya',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F9.September%2FBinara_Full_Moon_Poya_17_P2.jfif?alt=media&token=b56fe313-f5a7-4347-80cd-5f2cadab2ed7',
        startDatetime: '2024-09-17T14:00',
        endDatetime: '2024-09-17T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id:43 ,
        name: 'International Day of Peace',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F9.September%2FInternational_Day_of_Peace_21_P1.jfif?alt=media&token=3e6f3bef-89e6-406e-9aed-d19bbf605054',
        startDatetime: '2024-09-21T14:00',
        endDatetime: '2024-09-21T14:30',
        },
      {
        id: 44,
        name: 'Childrens Day and Elders Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F10.October%2FChildren_and_Elders_Day_01_P1.jfif?alt=media&token=08c2bd56-406f-4f62-99aa-a82b35a7c88d',
        startDatetime: '2024-10-01T14:00',
        endDatetime: '2024-10-01T14:30',
       },
      {
        id: 45,
        name: 'World Teachers Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F10.October%2FWorld_Teachers_Day_06_P1.jfif?alt=media&token=7cb263b7-bfc4-486c-ba97-8b178af371f5',
        startDatetime: '2024-10-06T14:00',
        endDatetime: '2024-10-06T14:30',
        },
      {
        id:46 ,
        name: 'World Habitat Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F10.October%2FWorld_Habitat_Day_07_P6.jfif?alt=media&token=0a2a1220-61ee-43c4-b39b-e6ca47f1c37b',
        startDatetime: '2024-10-07T14:00',
        endDatetime: '2024-10-07T14:30',
        },
      {
        id:47 ,
        name: 'World Post Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F10.October%2FWorld_Post_Day_09_P2.jfif?alt=media&token=c08e8561-9a50-4e42-a301-9dba312ee432',
        startDatetime: '2024-10-09T14:00',
        endDatetime: '2024-10-09T14:30',
        },
      {
        id:48 ,
        name: 'International White Cane Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F10.October%2FInternational_White_Cane_Day_15_P2.jfif?alt=media&token=00cdff7e-2d5e-4057-97c0-ec19aaf5d343',
        startDatetime: '2024-10-15T14:00',
        endDatetime: '2024-10-15T14:30',
        },
      {
        id:49 ,
        name: 'World Food Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F10.October%2FWorld_Food_Day_16_P6.jfif?alt=media&token=2558963b-514c-4401-a637-930b7fd7eeb0',
        startDatetime: '2024-10-16T14:00',
        endDatetime: '2024-10-16T14:30',
        },
      {
        id: 50,
        name: 'Vap Full Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F10.October%2FVap_Full_Moon_Poya_17_P2.jfif?alt=media&token=7523cab1-6b8b-4c18-9ada-a72e1ddeaec9',
        startDatetime: '2024-10-17T14:00',
        endDatetime: '2024-10-17T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id: 51,
        name: 'Deepavali Festival Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F10.October%2FDeepavali_Festival%20_Day_31_P3.jfif?alt=media&token=2e79e3b7-e52b-4efd-ab81-7ee77b637301',
        startDatetime: '2024-10-31T14:00',
        endDatetime: '2024-10-31T14:30',
        holidayType:['PublicHoliday','BankHoliday']
      },
      {
        id:52 ,
        name: 'World Thrift Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F10.October%2FWorld_Thrift_Day_31_P3.jfif?alt=media&token=42a516c9-9dfc-4adc-ac01-73d5bc4a1f49',
        startDatetime: '2024-10-31T14:00',
        endDatetime: '2024-10-31T14:30',
        },
      {
        id: 53,
        name: 'World Diabetes Day (WHO)',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F11.November%2FWorld_Diabetes_Day_14_P1.jfif?alt=media&token=1a516d07-a8c7-4b06-bac5-52ad8bc8e140',
        startDatetime: '2024-11-14T14:00',
        endDatetime: '2024-11-14T14:30',
        },
      {
        id:54 ,
        name: 'Ill Full Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F11.November%2FIll_Full_Moon_Poya_15_P3.jfif?alt=media&token=f5682ee7-aa91-4d7b-8f83-f7cfb40d7010',
        startDatetime: '2024-11-15T14:00',
        endDatetime: '2024-11-15T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id: 55,
        name: 'World AIDS Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F12.December%2FWorlds_AIDS_Day_01_P1.jfif?alt=media&token=54dc6f0b-373a-44ff-a45a-011770bdfdc4',
        startDatetime: '2024-12-01T14:00',
        endDatetime: '2024-12-01T14:30',
         },
      {
        id:56,
        name: 'Unduvap Full  Moon Poya Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F12.December%2FUnduvap_Full_Moon_Poya_Day_14_P1.jfif?alt=media&token=f0c60462-b5f4-41a5-a872-aae1c91e44e5',
        startDatetime: '2024-12-14T14:00',
        endDatetime: '2024-12-14T14:30',
        holidayType:['PoyaHoliday','PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
      {
        id:57,
        name: 'Christmas Day',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/portfolioimages-4a133.appspot.com/o/calendar%2FAI%20Calendar%20Images%2F12.December%2FChristmas_Day_25_P2.jfif?alt=media&token=4c6b66c8-2ee6-4888-830b-2d7d47741e4d',
        startDatetime: '2024-12-25T14:00',
        endDatetime: '2024-12-25T14:30',
        holidayType:['PublicHoliday','BankHoliday', 'MercantileHoliday']
      },
  ];

export default meetings;