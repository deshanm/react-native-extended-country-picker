const countries = [
  {
    code: 'AD',
    name: 'Andorra',
    callingCode: '+376',
    img: require('./assets/flags/AD.png'),
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    callingCode: '+971',
    img: require('./assets/flags/AE.png'),
  },
  {
    code: 'AF',
    name: 'Afghanistan',
    callingCode: '+93',
    img: require('./assets/flags/AF.png'),
  },
  {
    code: 'AG',
    name: 'Antigua & Barbuda',
    callingCode: '+1 268',
    img: require('./assets/flags/AG.png'),
  },
  {
    code: 'AI',
    name: 'Anguilla',
    callingCode: '+1 264',
    img: require('./assets/flags/AI.png'),
  },
  {
    code: 'AL',
    name: 'Albania',
    callingCode: '+355',
    img: require('./assets/flags/AL.png'),
  },
  {
    code: 'AM',
    name: 'Armenia',
    callingCode: '+374',
    img: require('./assets/flags/AM.png'),
  },
  {
    code: 'AO',
    name: 'Angola',
    callingCode: '+244',
    img: require('./assets/flags/AO.png'),
  },
  {
    code: 'AR',
    name: 'Argentina',
    callingCode: '+54',
    img: require('./assets/flags/AR.png'),
  },
  {
    code: 'AS',
    name: 'American Samoa',
    callingCode: '+1 684',
    img: require('./assets/flags/AS.png'),
  },
  {
    code: 'AT',
    name: 'Austria',
    callingCode: '+43',
    img: require('./assets/flags/AT.png'),
  },
  {
    code: 'AU',
    name: 'Australia',
    callingCode: '+61',
    img: require('./assets/flags/AU.png'),
  },
  {
    code: 'AW',
    name: 'Aruba',
    callingCode: '+297',
    img: require('./assets/flags/AW.png'),
  },
  {
    code: 'AX',
    name: 'Åland Islands',
    callingCode: '+358',
    img: require('./assets/flags/AX.png'),
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    callingCode: '+994',
    img: require('./assets/flags/AZ.png'),
  },
  {
    code: 'BA',
    name: 'Bosnia & Herzegovina',
    callingCode: '+387',
    img: require('./assets/flags/BA.png'),
  },
  {
    code: 'BB',
    name: 'Barbados',
    callingCode: '+1 246',
    img: require('./assets/flags/BB.png'),
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    callingCode: '+880',
    img: require('./assets/flags/BD.png'),
  },
  {
    code: 'BE',
    name: 'Belgium',
    callingCode: '+32',
    img: require('./assets/flags/BE.png'),
  },
  {
    code: 'BF',
    name: 'Burkina Faso',
    callingCode: '+226',
    img: require('./assets/flags/BF.png'),
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    callingCode: '+359',
    img: require('./assets/flags/BG.png'),
  },
  {
    code: 'BH',
    name: 'Bahrain',
    callingCode: '+973',
    img: require('./assets/flags/BH.png'),
  },
  {
    code: 'BI',
    name: 'Burundi',
    callingCode: '+257',
    img: require('./assets/flags/BI.png'),
  },
  {
    code: 'BJ',
    name: 'Benin',
    callingCode: '+229',
    img: require('./assets/flags/BJ.png'),
  },
  {
    code: 'BL',
    name: 'St. Barthélemy',
    callingCode: '+590',
    img: require('./assets/flags/BL.png'),
  },
  {
    code: 'BM',
    name: 'Bermuda',
    callingCode: '+1 441',
    img: require('./assets/flags/BM.png'),
  },
  {
    code: 'BN',
    name: 'Brunei',
    callingCode: '+673',
    img: require('./assets/flags/BN.png'),
  },
  {
    code: 'BO',
    name: 'Bolivia',
    callingCode: '+591',
    img: require('./assets/flags/BO.png'),
  },
  {
    code: 'BR',
    name: 'Brazil',
    callingCode: '+55',
    img: require('./assets/flags/BR.png'),
  },
  {
    code: 'BS',
    name: 'Bahamas',
    callingCode: '+1 242',
    img: require('./assets/flags/BS.png'),
  },
  {
    code: 'BT',
    name: 'Bhutan',
    callingCode: '+975',
    img: require('./assets/flags/BT.png'),
  },
  {
    code: 'BV',
    name: 'Bouvet Island',
    callingCode: '+47',
    img: require('./assets/flags/BV.png'),
  },
  {
    code: 'BW',
    name: 'Botswana',
    callingCode: '+267',
    img: require('./assets/flags/BW.png'),
  },
  {
    code: 'BY',
    name: 'Belarus',
    callingCode: '+375',
    img: require('./assets/flags/BY.png'),
  },
  {
    code: 'BZ',
    name: 'Belize',
    callingCode: '+501',
    img: require('./assets/flags/BZ.png'),
  },
  {
    code: 'CA',
    name: 'Canada',
    callingCode: '+1',
    img: require('./assets/flags/CA.png'),
  },
  {
    code: 'CC',
    name: 'Cocos (Keeling) Islands',
    callingCode: '+61',
    img: require('./assets/flags/CC.png'),
  },
  {
    code: 'CD',
    name: 'Congo - Kinshasa',
    callingCode: '+243',
    img: require('./assets/flags/CD.png'),
  },
  {
    code: 'CF',
    name: 'Central African Republic',
    callingCode: '+236',
    img: require('./assets/flags/CF.png'),
  },
  {
    code: 'CG',
    name: 'Congo - Brazzaville',
    callingCode: '+242',
    img: require('./assets/flags/CG.png'),
  },
  {
    code: 'CH',
    name: 'Switzerland',
    callingCode: '+41',
    img: require('./assets/flags/CH.png'),
  },
  {
    code: 'CI',
    name: 'Côte d’Ivoire',
    callingCode: '+225',
    img: require('./assets/flags/CI.png'),
  },
  {
    code: 'CK',
    name: 'Cook Islands',
    callingCode: '+682',
    img: require('./assets/flags/CK.png'),
  },
  {
    code: 'CL',
    name: 'Chile',
    callingCode: '+56',
    img: require('./assets/flags/CL.png'),
  },
  {
    code: 'CM',
    name: 'Cameroon',
    callingCode: '+237',
    img: require('./assets/flags/CM.png'),
  },
  {
    code: 'CN',
    name: 'China',
    callingCode: '+86',
    img: require('./assets/flags/CN.png'),
  },
  {
    code: 'CO',
    name: 'Colombia',
    callingCode: '+57',
    img: require('./assets/flags/CO.png'),
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    callingCode: '+506',
    img: require('./assets/flags/CR.png'),
  },
  {
    code: 'CU',
    name: 'Cuba',
    callingCode: '+53',
    img: require('./assets/flags/CU.png'),
  },
  {
    code: 'CV',
    name: 'Cape Verde',
    callingCode: '+238',
    img: require('./assets/flags/CV.png'),
  },
  {
    code: 'CW',
    name: 'Curaçao',
    callingCode: '+599',
    img: require('./assets/flags/CW.png'),
  },
  {
    code: 'CX',
    name: 'Christmas Island',
    callingCode: '+61',
    img: require('./assets/flags/CX.png'),
  },
  {
    code: 'CY',
    name: 'Cyprus',
    callingCode: '+537',
    img: require('./assets/flags/CY.png'),
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    callingCode: '+420',
    img: require('./assets/flags/CZ.png'),
  },
  {
    code: 'DE',
    name: 'Germany',
    callingCode: '+49',
    img: require('./assets/flags/DE.png'),
  },
  {
    code: 'DJ',
    name: 'Djibouti',
    callingCode: '+253',
    img: require('./assets/flags/DJ.png'),
  },
  {
    code: 'DK',
    name: 'Denmark',
    callingCode: '+45',
    img: require('./assets/flags/DK.png'),
  },
  {
    code: 'DM',
    name: 'Dominica',
    callingCode: '+1 767',
    img: require('./assets/flags/DM.png'),
  },
  {
    code: 'DO',
    name: 'Dominican Republic',
    callingCode: '+1 809',
    img: require('./assets/flags/DO.png'),
  },
  {
    code: 'DZ',
    name: 'Algeria',
    callingCode: '+213',
    img: require('./assets/flags/DZ.png'),
  },
  {
    code: 'EC',
    name: 'Ecuador',
    callingCode: '+593',
    img: require('./assets/flags/EC.png'),
  },
  {
    code: 'EE',
    name: 'Estonia',
    callingCode: '+372',
    img: require('./assets/flags/EE.png'),
  },
  {
    code: 'EG',
    name: 'Egypt',
    callingCode: '+20',
    img: require('./assets/flags/EG.png'),
  },
  {
    code: 'ER',
    name: 'Eritrea',
    callingCode: '+291',
    img: require('./assets/flags/ER.png'),
  },
  {
    code: 'ES',
    name: 'Spain',
    callingCode: '+34',
    img: require('./assets/flags/ES.png'),
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    callingCode: '+251',
    img: require('./assets/flags/ET.png'),
  },
  {
    code: 'EU',
    name: 'European Union',
    callingCode: 'N/A',
    img: require('./assets/flags/EU.png'),
  },
  {
    code: 'FI',
    name: 'Finland',
    callingCode: '+358',
    img: require('./assets/flags/FI.png'),
  },
  {
    code: 'FJ',
    name: 'Fiji',
    callingCode: '+679',
    img: require('./assets/flags/FJ.png'),
  },
  {
    code: 'FK',
    name: 'Falkland Islands',
    callingCode: '+500',
    img: require('./assets/flags/FK.png'),
  },
  {
    code: 'FM',
    name: 'Micronesia',
    callingCode: '+691',
    img: require('./assets/flags/FM.png'),
  },
  {
    code: 'FO',
    name: 'Faroe Islands',
    callingCode: '+298',
    img: require('./assets/flags/FO.png'),
  },
  {
    code: 'FR',
    name: 'France',
    callingCode: '+33',
    img: require('./assets/flags/FR.png'),
  },
  {
    code: 'GA',
    name: 'Gabon',
    callingCode: '+241',
    img: require('./assets/flags/GA.png'),
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    callingCode: '+44',
    img: require('./assets/flags/GB.png'),
  },
  {
    code: 'GB-ENG',
    name: 'United Kingdom',
    callingCode: '+44',
    img: require('./assets/flags/GB-ENG.png'),
  },
  {
    code: 'GB-NIR',
    name: 'United Kingdom',
    callingCode: '+44',
    img: require('./assets/flags/GB-NIR.png'),
  },
  {
    code: 'GB-SCT',
    name: 'United Kingdom',
    callingCode: '+44',
    img: require('./assets/flags/GB-SCT.png'),
  },
  {
    code: 'GB-WLS',
    name: 'United Kingdom',
    callingCode: '+44',
    img: require('./assets/flags/GB-WLS.png'),
  },
  {
    code: 'GB-ZET',
    name: 'United Kingdom',
    callingCode: '+44',
    img: require('./assets/flags/GB-ZET.png'),
  },
  {
    code: 'GD',
    name: 'Grenada',
    callingCode: '+1 473',
    img: require('./assets/flags/GD.png'),
  },
  {
    code: 'GE',
    name: 'Georgia',
    callingCode: '+995',
    img: require('./assets/flags/GE.png'),
  },
  {
    code: 'GF',
    name: 'French Guiana',
    callingCode: '+594',
    img: require('./assets/flags/GF.png'),
  },
  {
    code: 'GG',
    name: 'Guernsey',
    callingCode: '+44',
    img: require('./assets/flags/GG.png'),
  },
  {
    code: 'GH',
    name: 'Ghana',
    callingCode: '+233',
    img: require('./assets/flags/GH.png'),
  },
  {
    code: 'GI',
    name: 'Gibraltar',
    callingCode: '+350',
    img: require('./assets/flags/GI.png'),
  },
  {
    code: 'GL',
    name: 'Greenland',
    callingCode: '+299',
    img: require('./assets/flags/GL.png'),
  },
  {
    code: 'GM',
    name: 'Gambia',
    callingCode: '+220',
    img: require('./assets/flags/GM.png'),
  },
  {
    code: 'GN',
    name: 'Guinea',
    callingCode: '+224',
    img: require('./assets/flags/GN.png'),
  },
  {
    code: 'GP',
    name: 'Guadeloupe',
    callingCode: '+590',
    img: require('./assets/flags/GP.png'),
  },
  {
    code: 'GQ',
    name: 'Equatorial Guinea',
    callingCode: '+240',
    img: require('./assets/flags/GQ.png'),
  },
  {
    code: 'GR',
    name: 'Greece',
    callingCode: '+30',
    img: require('./assets/flags/GR.png'),
  },
  {
    code: 'GS',
    name: 'So. Georgia & So. Sandwich Isl.',
    callingCode: '+500',
    img: require('./assets/flags/GS.png'),
  },
  {
    code: 'GT',
    name: 'Guatemala',
    callingCode: '+502',
    img: require('./assets/flags/GT.png'),
  },
  {
    code: 'GU',
    name: 'Guam',
    callingCode: '+1 671',
    img: require('./assets/flags/GU.png'),
  },
  {
    code: 'GW',
    name: 'Guinea-Bissau',
    callingCode: '+245',
    img: require('./assets/flags/GW.png'),
  },
  {
    code: 'GY',
    name: 'Guyana',
    callingCode: '+595',
    img: require('./assets/flags/GY.png'),
  },
  {
    code: 'HK',
    name: 'Hong Kong',
    callingCode: '+852',
    img: require('./assets/flags/HK.png'),
  },
  {
    code: 'HM',
    name: 'Heard & McDonald Islands',
    callingCode: '+672',
    img: require('./assets/flags/HM.png'),
  },
  {
    code: 'HN',
    name: 'Honduras',
    callingCode: '+504',
    img: require('./assets/flags/HN.png'),
  },
  {
    code: 'HR',
    name: 'Croatia',
    callingCode: '+385',
    img: require('./assets/flags/HR.png'),
  },
  {
    code: 'HT',
    name: 'Haiti',
    callingCode: '+509',
    img: require('./assets/flags/HT.png'),
  },
  {
    code: 'HU',
    name: 'Hungary',
    callingCode: '+36',
    img: require('./assets/flags/HU.png'),
  },
  {
    code: 'ID',
    name: 'Indonesia',
    callingCode: '+62',
    img: require('./assets/flags/ID.png'),
  },
  {
    code: 'IE',
    name: 'Ireland',
    callingCode: '+353',
    img: require('./assets/flags/IE.png'),
  },
  {
    code: 'IL',
    name: 'Israel',
    callingCode: '+972',
    img: require('./assets/flags/IL.png'),
  },
  {
    code: 'IM',
    name: 'Isle of Man',
    callingCode: '+44',
    img: require('./assets/flags/IM.png'),
  },
  {
    code: 'IN',
    name: 'India',
    callingCode: '+91',
    img: require('./assets/flags/IN.png'),
  },
  {
    code: 'IO',
    name: 'British Indian Ocean Territory',
    callingCode: '+246',
    img: require('./assets/flags/IO.png'),
  },
  {
    code: 'IQ',
    name: 'Iraq',
    callingCode: '+964',
    img: require('./assets/flags/IQ.png'),
  },
  {
    code: 'IR',
    name: 'Iran',
    callingCode: '+98',
    img: require('./assets/flags/IR.png'),
  },
  {
    code: 'IS',
    name: 'Iceland',
    callingCode: '+354',
    img: require('./assets/flags/IS.png'),
  },
  {
    code: 'IT',
    name: 'Italy',
    callingCode: '+39',
    img: require('./assets/flags/IT.png'),
  },
  {
    code: 'JE',
    name: 'Jersey',
    callingCode: '+44',
    img: require('./assets/flags/JE.png'),
  },
  {
    code: 'JM',
    name: 'Jamaica',
    callingCode: '+1 876',
    img: require('./assets/flags/JM.png'),
  },
  {
    code: 'JO',
    name: 'Jordan',
    callingCode: '+962',
    img: require('./assets/flags/JO.png'),
  },
  {
    code: 'JP',
    name: 'Japan',
    callingCode: '+81',
    img: require('./assets/flags/JP.png'),
  },
  {
    code: 'KE',
    name: 'Kenya',
    callingCode: '+254',
    img: require('./assets/flags/KE.png'),
  },
  {
    code: 'KG',
    name: 'Kyrgyzstan',
    callingCode: '+996',
    img: require('./assets/flags/KG.png'),
  },
  {
    code: 'KH',
    name: 'Cambodia',
    callingCode: '+855',
    img: require('./assets/flags/KH.png'),
  },
  {
    code: 'KI',
    name: 'Kiribati',
    callingCode: '+686',
    img: require('./assets/flags/KI.png'),
  },
  {
    code: 'KM',
    name: 'Comoros',
    callingCode: '+269',
    img: require('./assets/flags/KM.png'),
  },
  {
    code: 'KN',
    name: 'St. Kitts & Nevis',
    callingCode: '+1869',
    img: require('./assets/flags/KN.png'),
  },
  {
    code: 'KP',
    name: 'North Korea',
    callingCode: '+850',
    img: require('./assets/flags/KP.png'),
  },
  {
    code: 'KR',
    name: 'South Korea',
    callingCode: '+82',
    img: require('./assets/flags/KR.png'),
  },
  {
    code: 'KW',
    name: 'Kuwait',
    callingCode: '+965',
    img: require('./assets/flags/KW.png'),
  },
  {
    code: 'KY',
    name: 'Cayman Islands',
    callingCode: '+ 345',
    img: require('./assets/flags/KY.png'),
  },
  {
    code: 'KZ',
    name: 'Kazakhstan',
    callingCode: '+7 7',
    img: require('./assets/flags/KZ.png'),
  },
  {
    code: 'LA',
    name: 'Laos',
    callingCode: '+856',
    img: require('./assets/flags/LA.png'),
  },
  {
    code: 'LB',
    name: 'Lebanon',
    callingCode: '+961',
    img: require('./assets/flags/LB.png'),
  },
  {
    code: 'LC',
    name: 'St. Lucia',
    callingCode: '+1758',
    img: require('./assets/flags/LC.png'),
  },
  {
    code: 'LGBT',
    name: 'Pride',
    callingCode: 'N/A',
    img: require('./assets/flags/LGBT.png'),
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    callingCode: '+423',
    img: require('./assets/flags/LI.png'),
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
    callingCode: '+94',
    img: require('./assets/flags/LK.png'),
  },
  {
    code: 'LR',
    name: 'Liberia',
    callingCode: '+231',
    img: require('./assets/flags/LR.png'),
  },
  {
    code: 'LS',
    name: 'Lesotho',
    callingCode: '+266',
    img: require('./assets/flags/LS.png'),
  },
  {
    code: 'LT',
    name: 'Lithuania',
    callingCode: '+370',
    img: require('./assets/flags/LT.png'),
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    callingCode: '+352',
    img: require('./assets/flags/LU.png'),
  },
  {
    code: 'LV',
    name: 'Latvia',
    callingCode: '+371',
    img: require('./assets/flags/LV.png'),
  },
  {
    code: 'LY',
    name: 'Libya',
    callingCode: '+218',
    img: require('./assets/flags/LY.png'),
  },
  {
    code: 'MA',
    name: 'Morocco',
    callingCode: '+212',
    img: require('./assets/flags/MA.png'),
  },
  {
    code: 'MC',
    name: 'Monaco',
    callingCode: '+377',
    img: require('./assets/flags/MC.png'),
  },
  {
    code: 'MD',
    name: 'Moldova',
    callingCode: '+373',
    img: require('./assets/flags/MD.png'),
  },
  {
    code: 'ME',
    name: 'Montenegro',
    callingCode: '+382',
    img: require('./assets/flags/ME.png'),
  },
  {
    code: 'MF',
    name: 'St. Martin',
    callingCode: '+590',
    img: require('./assets/flags/MF.png'),
  },
  {
    code: 'MG',
    name: 'Madagascar',
    callingCode: '+261',
    img: require('./assets/flags/MG.png'),
  },
  {
    code: 'MH',
    name: 'Marshall Islands',
    callingCode: '+692',
    img: require('./assets/flags/MH.png'),
  },
  {
    code: 'MK',
    name: 'Macedonia',
    callingCode: '+389',
    img: require('./assets/flags/MK.png'),
  },
  {
    code: 'ML',
    name: 'Mali',
    callingCode: '+223',
    img: require('./assets/flags/ML.png'),
  },
  {
    code: 'MM',
    name: 'Myanmar',
    callingCode: '+95',
    img: require('./assets/flags/MM.png'),
  },
  {
    code: 'MN',
    name: 'Mongolia',
    callingCode: '+976',
    img: require('./assets/flags/MN.png'),
  },
  {
    code: 'MO',
    name: 'Macau',
    callingCode: '+853',
    img: require('./assets/flags/MO.png'),
  },
  {
    code: 'MP',
    name: 'Northern Mariana Islands',
    callingCode: '+1 670',
    img: require('./assets/flags/MP.png'),
  },
  {
    code: 'MQ',
    name: 'Martinique',
    callingCode: '+596',
    img: require('./assets/flags/MQ.png'),
  },
  {
    code: 'MR',
    name: 'Mauritania',
    callingCode: '+222',
    img: require('./assets/flags/MR.png'),
  },
  {
    code: 'MS',
    name: 'Montserrat',
    callingCode: '+1664',
    img: require('./assets/flags/MS.png'),
  },
  {
    code: 'MT',
    name: 'Malta',
    callingCode: '+356',
    img: require('./assets/flags/MT.png'),
  },
  {
    code: 'MU',
    name: 'Mauritius',
    callingCode: '+230',
    img: require('./assets/flags/MU.png'),
  },
  {
    code: 'MV',
    name: 'Maldives',
    callingCode: '+960',
    img: require('./assets/flags/MV.png'),
  },
  {
    code: 'MW',
    name: 'Malawi',
    callingCode: '+265',
    img: require('./assets/flags/MW.png'),
  },
  {
    code: 'MX',
    name: 'Mexico',
    callingCode: '+52',
    img: require('./assets/flags/MX.png'),
  },
  {
    code: 'MY',
    name: 'Malaysia',
    callingCode: '+60',
    img: require('./assets/flags/MY.png'),
  },
  {
    code: 'MZ',
    name: 'Mozambique',
    callingCode: '+258',
    img: require('./assets/flags/MZ.png'),
  },
  {
    code: 'NA',
    name: 'Namibia',
    callingCode: '+264',
    img: require('./assets/flags/NA.png'),
  },
  {
    code: 'NC',
    name: 'New Caledonia',
    callingCode: '+687',
    img: require('./assets/flags/NC.png'),
  },
  {
    code: 'NE',
    name: 'Niger',
    callingCode: '+227',
    img: require('./assets/flags/NE.png'),
  },
  {
    code: 'NF',
    name: 'Norfolk Island',
    callingCode: '+672',
    img: require('./assets/flags/NF.png'),
  },
  {
    code: 'NG',
    name: 'Nigeria',
    callingCode: '+234',
    img: require('./assets/flags/NG.png'),
  },
  {
    code: 'NI',
    name: 'Nicaragua',
    callingCode: '+505',
    img: require('./assets/flags/NI.png'),
  },
  {
    code: 'NL',
    name: 'Netherlands',
    callingCode: '+31',
    img: require('./assets/flags/NL.png'),
  },
  {
    code: 'NO',
    name: 'Norway',
    callingCode: '+47',
    img: require('./assets/flags/NO.png'),
  },
  {
    code: 'NP',
    name: 'Nepal',
    callingCode: '+977',
    img: require('./assets/flags/NP.png'),
  },
  {
    code: 'NR',
    name: 'Nauru',
    callingCode: '+674',
    img: require('./assets/flags/NR.png'),
  },
  {
    code: 'NU',
    name: 'Niue',
    callingCode: '+683',
    img: require('./assets/flags/NU.png'),
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    callingCode: '+64',
    img: require('./assets/flags/NZ.png'),
  },
  {
    code: 'OM',
    name: 'Oman',
    callingCode: '+968',
    img: require('./assets/flags/OM.png'),
  },
  {
    code: 'PA',
    name: 'Panama',
    callingCode: '+507',
    img: require('./assets/flags/PA.png'),
  },
  {
    code: 'PE',
    name: 'Peru',
    callingCode: '+51',
    img: require('./assets/flags/PE.png'),
  },
  {
    code: 'PF',
    name: 'French Polynesia',
    callingCode: '+689',
    img: require('./assets/flags/PF.png'),
  },
  {
    code: 'PG',
    name: 'Papua New Guinea',
    callingCode: '+675',
    img: require('./assets/flags/PG.png'),
  },
  {
    code: 'PH',
    name: 'Philippines',
    callingCode: '+63',
    img: require('./assets/flags/PH.png'),
  },
  {
    code: 'PK',
    name: 'Pakistan',
    callingCode: '+92',
    img: require('./assets/flags/PK.png'),
  },
  {
    code: 'PL',
    name: 'Poland',
    callingCode: '+48',
    img: require('./assets/flags/PL.png'),
  },
  {
    code: 'PM',
    name: 'St. Pierre & Miquelon',
    callingCode: '+508',
    img: require('./assets/flags/PM.png'),
  },
  {
    code: 'PN',
    name: 'Pitcairn Islands',
    callingCode: '+64',
    img: require('./assets/flags/PN.png'),
  },
  {
    code: 'PR',
    name: 'Puerto Rico',
    callingCode: '+1 787',
    img: require('./assets/flags/PR.png'),
  },
  {
    code: 'PS',
    name: 'Palestinian Territories',
    callingCode: '+970',
    img: require('./assets/flags/PS.png'),
  },
  {
    code: 'PT',
    name: 'Portugal',
    callingCode: '+351',
    img: require('./assets/flags/PT.png'),
  },
  {
    code: 'PW',
    name: 'Palau',
    callingCode: '+680',
    img: require('./assets/flags/PW.png'),
  },
  {
    code: 'PY',
    name: 'Paraguay',
    callingCode: '+595',
    img: require('./assets/flags/PY.png'),
  },
  {
    code: 'QA',
    name: 'Qatar',
    callingCode: '+974',
    img: require('./assets/flags/QA.png'),
  },
  {
    code: 'RE',
    name: 'Réunion',
    callingCode: '+262',
    img: require('./assets/flags/RE.png'),
  },
  {
    code: 'RO',
    name: 'Romania',
    callingCode: '+40',
    img: require('./assets/flags/RO.png'),
  },
  {
    code: 'RS',
    name: 'Serbia',
    callingCode: '+381',
    img: require('./assets/flags/RS.png'),
  },
  {
    code: 'RU',
    name: 'Russia',
    callingCode: '+7',
    img: require('./assets/flags/RU.png'),
  },
  {
    code: 'RW',
    name: 'Rwanda',
    callingCode: '+250',
    img: require('./assets/flags/RW.png'),
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    callingCode: '+966',
    img: require('./assets/flags/SA.png'),
  },
  {
    code: 'SB',
    name: 'Solomon Islands',
    callingCode: '+677',
    img: require('./assets/flags/SB.png'),
  },
  {
    code: 'SC',
    name: 'Seychelles',
    callingCode: '+248',
    img: require('./assets/flags/SC.png'),
  },
  {
    code: 'SD',
    name: 'Sudan',
    callingCode: '+249',
    img: require('./assets/flags/SD.png'),
  },
  {
    code: 'SE',
    name: 'Sweden',
    callingCode: '+46',
    img: require('./assets/flags/SE.png'),
  },
  {
    code: 'SG',
    name: 'Singapore',
    callingCode: '+65',
    img: require('./assets/flags/SG.png'),
  },
  {
    code: 'SH',
    name: 'St. Helena',
    callingCode: '+290',
    img: require('./assets/flags/SH.png'),
  },
  {
    code: 'SI',
    name: 'Slovenia',
    callingCode: '+386',
    img: require('./assets/flags/SI.png'),
  },
  {
    code: 'SJ',
    name: 'Svalbard & Jan Mayen',
    callingCode: '+47',
    img: require('./assets/flags/SJ.png'),
  },
  {
    code: 'SK',
    name: 'Slovakia',
    callingCode: '+421',
    img: require('./assets/flags/SK.png'),
  },
  {
    code: 'SL',
    name: 'Sierra Leone',
    callingCode: '+232',
    img: require('./assets/flags/SL.png'),
  },
  {
    code: 'SM',
    name: 'San Marino',
    callingCode: '+378',
    img: require('./assets/flags/SM.png'),
  },
  {
    code: 'SN',
    name: 'Senegal',
    callingCode: '+221',
    img: require('./assets/flags/SN.png'),
  },
  {
    code: 'SO',
    name: 'Somalia',
    callingCode: '+252',
    img: require('./assets/flags/SO.png'),
  },
  {
    code: 'SR',
    name: 'Suriname',
    callingCode: '+597',
    img: require('./assets/flags/SR.png'),
  },
  {
    code: 'SS',
    name: 'South Sudan',
    callingCode: '+211',
    img: require('./assets/flags/SS.png'),
  },
  {
    code: 'ST',
    name: 'São Tomé & Príncipe',
    callingCode: '+239',
    img: require('./assets/flags/ST.png'),
  },
  {
    code: 'SV',
    name: 'El Salvador',
    callingCode: '+503',
    img: require('./assets/flags/SV.png'),
  },
  {
    code: 'SX',
    name: 'Sint Maarten',
    callingCode: '+599',
    img: require('./assets/flags/SX.png'),
  },
  {
    code: 'SY',
    name: 'Syria',
    callingCode: '+963',
    img: require('./assets/flags/SY.png'),
  },
  {
    code: 'SZ',
    name: 'Swaziland',
    callingCode: '+268',
    img: require('./assets/flags/SZ.png'),
  },
  {
    code: 'TC',
    name: 'Turks & Caicos Islands',
    callingCode: '+1 649',
    img: require('./assets/flags/TC.png'),
  },
  {
    code: 'TD',
    name: 'Chad',
    callingCode: '+235',
    img: require('./assets/flags/TD.png'),
  },
  {
    code: 'TF',
    name: 'French Southern Territories',
    callingCode: '+262',
    img: require('./assets/flags/TF.png'),
  },
  {
    code: 'TG',
    name: 'Togo',
    callingCode: '+228',
    img: require('./assets/flags/TG.png'),
  },
  {
    code: 'TH',
    name: 'Thailand',
    callingCode: '+66',
    img: require('./assets/flags/TH.png'),
  },
  {
    code: 'TJ',
    name: 'Tajikistan',
    callingCode: '+992',
    img: require('./assets/flags/TJ.png'),
  },
  {
    code: 'TK',
    name: 'Tokelau',
    callingCode: '+690',
    img: require('./assets/flags/TK.png'),
  },
  {
    code: 'TL',
    name: 'Timor-Leste',
    callingCode: '+670',
    img: require('./assets/flags/TL.png'),
  },
  {
    code: 'TM',
    name: 'Turkmenistan',
    callingCode: '+993',
    img: require('./assets/flags/TM.png'),
  },
  {
    code: 'TN',
    name: 'Tunisia',
    callingCode: '+216',
    img: require('./assets/flags/TN.png'),
  },
  {
    code: 'TO',
    name: 'Tonga',
    callingCode: '+676',
    img: require('./assets/flags/TO.png'),
  },
  {
    code: 'TR',
    name: 'Turkey',
    callingCode: '+90',
    img: require('./assets/flags/TR.png'),
  },
  {
    code: 'TT',
    name: 'Trinidad & Tobago',
    callingCode: '+1 868',
    img: require('./assets/flags/TT.png'),
  },
  {
    code: 'TV',
    name: 'Tuvalu',
    callingCode: '+688',
    img: require('./assets/flags/TV.png'),
  },
  {
    code: 'TW',
    name: 'Taiwan',
    callingCode: '+886',
    img: require('./assets/flags/TW.png'),
  },
  {
    code: 'TZ',
    name: 'Tanzania',
    callingCode: '+255',
    img: require('./assets/flags/TZ.png'),
  },
  {
    code: 'UA',
    name: 'Ukraine',
    callingCode: '+380',
    img: require('./assets/flags/UA.png'),
  },
  {
    code: 'UG',
    name: 'Uganda',
    callingCode: '+256',
    img: require('./assets/flags/UG.png'),
  },
  {
    code: 'UM',
    name: 'U.S. Outlying Islands',
    callingCode: '+246',
    img: require('./assets/flags/UM.png'),
  },
  {
    code: 'US',
    name: 'United States',
    callingCode: '+1',
    img: require('./assets/flags/US.png'),
  },
  {
    code: 'US-CA',
    name: 'California',
    callingCode: '+1',
    img: require('./assets/flags/US-CA.png'),
  },
  {
    code: 'UY',
    name: 'Uruguay',
    callingCode: '+598',
    img: require('./assets/flags/UY.png'),
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    callingCode: '+998',
    img: require('./assets/flags/UZ.png'),
  },
  {
    code: 'VA',
    name: 'Vatican City',
    callingCode: '+379',
    img: require('./assets/flags/VA.png'),
  },
  {
    code: 'VC',
    name: 'St. Vincent & Grenadines',
    callingCode: '+1784',
    img: require('./assets/flags/VC.png'),
  },
  {
    code: 'VE',
    name: 'Venezuela',
    callingCode: '+58',
    img: require('./assets/flags/VE.png'),
  },
  {
    code: 'VG',
    name: 'British Virgin Islands',
    callingCode: '+1 284',
    img: require('./assets/flags/VG.png'),
  },
  {
    code: 'VI',
    name: 'U.S. Virgin Islands',
    callingCode: '+1 340',
    img: require('./assets/flags/VI.png'),
  },
  {
    code: 'VN',
    name: 'Vietnam',
    callingCode: '+84',
    img: require('./assets/flags/VN.png'),
  },
  {
    code: 'VU',
    name: 'Vanuatu',
    callingCode: '+678',
    img: require('./assets/flags/VU.png'),
  },
  {
    code: 'WF',
    name: 'Wallis & Futuna',
    callingCode: '+681',
    img: require('./assets/flags/WF.png'),
  },
  {
    code: 'WS',
    name: 'Samoa',
    callingCode: '+685',
    img: require('./assets/flags/WS.png'),
  },
  {
    code: 'XK',
    name: 'Kosovo',
    callingCode: '+383',
    img: require('./assets/flags/XK.png'),
  },
  {
    code: 'YE',
    name: 'Yemen',
    callingCode: '+967',
    img: require('./assets/flags/YE.png'),
  },
  {
    code: 'YT',
    name: 'Mayotte',
    callingCode: '+262',
    img: require('./assets/flags/YT.png'),
  },
  {
    code: 'ZA',
    name: 'South Africa',
    callingCode: '+27',
    img: require('./assets/flags/ZA.png'),
  },
  {
    code: 'ZM',
    name: 'Zambia',
    callingCode: '+260',
    img: require('./assets/flags/ZM.png'),
  },
  {
    code: 'ZW',
    name: 'Zimbabwe',
    callingCode: '+263',
    img: require('./assets/flags/ZW.png'),
  },
];

export default countries;