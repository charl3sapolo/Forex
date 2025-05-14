const currencies = [
    { currencyCode: "AFN", currencyName: "Afghan Afghani", country: "Afghanistan" },
    { currencyCode: "ALL", currencyName: "Albanian Lek", country: "Albania" },
    { currencyCode: "DZD", currencyName: "Algerian Dinar", country: "Algeria" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "American Samoa" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Andorra" },
    { currencyCode: "AOA", currencyName: "Angolan Kwanza", country: "Angola" },
    { currencyCode: "XCD", currencyName: "East Caribbean Dollar", country: "Anguilla" },
    { currencyCode: "XCD", currencyName: "East Caribbean Dollar", country: "Antigua and Barbuda" },
    { currencyCode: "ARS", currencyName: "Argentine Peso", country: "Argentina" },
    { currencyCode: "AMD", currencyName: "Armenian Dram", country: "Armenia" },
    { currencyCode: "AWG", currencyName: "Aruban Florin", country: "Aruba" },
    { currencyCode: "AUD", currencyName: "Australian Dollar", country: "Australia" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Austria" },
    { currencyCode: "AZN", currencyName: "Azerbaijani Manat", country: "Azerbaijan" },
    { currencyCode: "BSD", currencyName: "Bahamian Dollar", country: "Bahamas" },
    { currencyCode: "BHD", currencyName: "Bahraini Dinar", country: "Bahrain" },
    { currencyCode: "BDT", currencyName: "Bangladeshi Taka", country: "Bangladesh" },
    { currencyCode: "BBD", currencyName: "Barbadian Dollar", country: "Barbados" },
    { currencyCode: "BYN", currencyName: "Belarusian Ruble", country: "Belarus" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Belgium" },
    { currencyCode: "BZD", currencyName: "Belize Dollar", country: "Belize" },
    { currencyCode: "XOF", currencyName: "West African CFA Franc", country: "Benin" },
    { currencyCode: "BMD", currencyName: "Bermudian Dollar", country: "Bermuda" },
    { currencyCode: "BTN", currencyName: "Bhutanese Ngultrum", country: "Bhutan" },
    { currencyCode: "BOB", currencyName: "Bolivian Boliviano", country: "Bolivia" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "Bonaire" },
    { currencyCode: "BAM", currencyName: "Bosnia-Herzegovina Convertible Mark", country: "Bosnia and Herzegovina" },
    { currencyCode: "BWP", currencyName: "Botswanan Pula", country: "Botswana" },
    { currencyCode: "BRL", currencyName: "Brazilian Real", country: "Brazil" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "British Virgin Islands" },
    { currencyCode: "BND", currencyName: "Brunei Dollar", country: "Brunei" },
    { currencyCode: "BGN", currencyName: "Bulgarian Lev", country: "Bulgaria" },
    { currencyCode: "XOF", currencyName: "West African CFA Franc", country: "Burkina Faso" },
    { currencyCode: "BIF", currencyName: "Burundian Franc", country: "Burundi" },
    { currencyCode: "CVE", currencyName: "Cape Verdean Escudo", country: "Cabo Verde" },
    { currencyCode: "KHR", currencyName: "Cambodian Riel", country: "Cambodia" },
    { currencyCode: "XAF", currencyName: "Central African CFA Franc", country: "Cameroon" },
    { currencyCode: "CAD", currencyName: "Canadian Dollar", country: "Canada" },
    { currencyCode: "KYD", currencyName: "Cayman Islands Dollar", country: "Cayman Islands" },
    { currencyCode: "XAF", currencyName: "Central African CFA Franc", country: "Central African Republic" },
    { currencyCode: "XAF", currencyName: "Central African CFA Franc", country: "Chad" },
    { currencyCode: "CLP", currencyName: "Chilean Peso", country: "Chile" },
    { currencyCode: "CNY", currencyName: "Chinese Yuan", country: "China" },
    { currencyCode: "AUD", currencyName: "Australian Dollar", country: "Christmas Island" },
    { currencyCode: "AUD", currencyName: "Australian Dollar", country: "Cocos (Keeling) Islands" },
    { currencyCode: "COP", currencyName: "Colombian Peso", country: "Colombia" },
    { currencyCode: "KMF", currencyName: "Comorian Franc", country: "Comoros" },
    { currencyCode: "XAF", currencyName: "Central African CFA Franc", country: "Congo" },
    { currencyCode: "CDF", currencyName: "Congolese Franc", country: "Congo (DRC)" },
    { currencyCode: "NZD", currencyName: "New Zealand Dollar", country: "Cook Islands" },
    { currencyCode: "CRC", currencyName: "Costa Rican Colón", country: "Costa Rica" },
    { currencyCode: "XOF", currencyName: "West African CFA Franc", country: "Côte d'Ivoire" },
    { currencyCode: "HRK", currencyName: "Croatian Kuna", country: "Croatia" },
    { currencyCode: "CUP", currencyName: "Cuban Peso", country: "Cuba" },
    { currencyCode: "ANG", currencyName: "Netherlands Antillean Guilder", country: "Curaçao" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Cyprus" },
    { currencyCode: "CZK", currencyName: "Czech Koruna", country: "Czech Republic" },
    { currencyCode: "DKK", currencyName: "Danish Krone", country: "Denmark" },
    { currencyCode: "DJF", currencyName: "Djiboutian Franc", country: "Djibouti" },
    { currencyCode: "XCD", currencyName: "East Caribbean Dollar", country: "Dominica" },
    { currencyCode: "DOP", currencyName: "Dominican Peso", country: "Dominican Republic" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "Ecuador" },
    { currencyCode: "EGP", currencyName: "Egyptian Pound", country: "Egypt" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "El Salvador" },
    { currencyCode: "XAF", currencyName: "Central African CFA Franc", country: "Equatorial Guinea" },
    { currencyCode: "ERN", currencyName: "Eritrean Nakfa", country: "Eritrea" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Estonia" },
    { currencyCode: "SZL", currencyName: "Swazi Lilangeni", country: "Eswatini" },
    { currencyCode: "ETB", currencyName: "Ethiopian Birr", country: "Ethiopia" },
    { currencyCode: "FKP", currencyName: "Falkland Islands Pound", country: "Falkland Islands" },
    { currencyCode: "DKK", currencyName: "Danish Krone", country: "Faroe Islands" },
    { currencyCode: "FJD", currencyName: "Fijian Dollar", country: "Fiji" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Finland" },
    { currencyCode: "EUR", currencyName: "Euro", country: "France" },
    { currencyCode: "EUR", currencyName: "Euro", country: "French Guiana" },
    { currencyCode: "XPF", currencyName: "CFP Franc", country: "French Polynesia" },
    { currencyCode: "XAF", currencyName: "Central African CFA Franc", country: "Gabon" },
    { currencyCode: "GMD", currencyName: "Gambian Dalasi", country: "Gambia" },
    { currencyCode: "GEL", currencyName: "Georgian Lari", country: "Georgia" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Germany" },
    { currencyCode: "GHS", currencyName: "Ghanaian Cedi", country: "Ghana" },
    { currencyCode: "GIP", currencyName: "Gibraltar Pound", country: "Gibraltar" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Greece" },
    { currencyCode: "DKK", currencyName: "Danish Krone", country: "Greenland" },
    { currencyCode: "XCD", currencyName: "East Caribbean Dollar", country: "Grenada" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Guadeloupe" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "Guam" },
    { currencyCode: "GTQ", currencyName: "Guatemalan Quetzal", country: "Guatemala" },
    { currencyCode: "GBP", currencyName: "British Pound Sterling", country: "Guernsey" },
    { currencyCode: "GNF", currencyName: "Guinean Franc", country: "Guinea" },
    { currencyCode: "XOF", currencyName: "West African CFA Franc", country: "Guinea-Bissau" },
    { currencyCode: "GYD", currencyName: "Guyanese Dollar", country: "Guyana" },
    { currencyCode: "HTG", currencyName: "Haitian Gourde", country: "Haiti" },
    { currencyCode: "AUD", currencyName: "Australian Dollar", country: "Heard Island and McDonald Islands" },
    { currencyCode: "HNL", currencyName: "Honduran Lempira", country: "Honduras" },
    { currencyCode: "HKD", currencyName: "Hong Kong Dollar", country: "Hong Kong" },
    { currencyCode: "HUF", currencyName: "Hungarian Forint", country: "Hungary" },
    { currencyCode: "ISK", currencyName: "Icelandic Króna", country: "Iceland" },
    { currencyCode: "INR", currencyName: "Indian Rupee", country: "India" },
    { currencyCode: "IDR", currencyName: "Indonesian Rupiah", country: "Indonesia" },
    { currencyCode: "IRR", currencyName: "Iranian Rial", country: "Iran" },
    { currencyCode: "IQD", currencyName: "Iraqi Dinar", country: "Iraq" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Ireland" },
    { currencyCode: "GBP", currencyName: "British Pound Sterling", country: "Isle of Man" },
    { currencyCode: "ILS", currencyName: "Israeli New Shekel", country: "Israel" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Italy" },
    { currencyCode: "JMD", currencyName: "Jamaican Dollar", country: "Jamaica" },
    { currencyCode: "JPY", currencyName: "Japanese Yen", country: "Japan" },
    { currencyCode: "GBP", currencyName: "British Pound Sterling", country: "Jersey" },
    { currencyCode: "JOD", currencyName: "Jordanian Dinar", country: "Jordan" },
    { currencyCode: "KZT", currencyName: "Kazakhstani Tenge", country: "Kazakhstan" },
    { currencyCode: "KES", currencyName: "Kenyan Shilling", country: "Kenya" },
    { currencyCode: "AUD", currencyName: "Australian Dollar", country: "Kiribati" },
    { currencyCode: "KPW", currencyName: "North Korean Won", country: "North Korea" },
    { currencyCode: "KRW", currencyName: "South Korean Won", country: "South Korea" },
    { currencyCode: "KWD", currencyName: "Kuwaiti Dinar", country: "Kuwait" },
    { currencyCode: "KGS", currencyName: "Kyrgyzstani Som", country: "Kyrgyzstan" },
    { currencyCode: "LAK", currencyName: "Lao Kip", country: "Laos" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Latvia" },
    { currencyCode: "LBP", currencyName: "Lebanese Pound", country: "Lebanon" },
    { currencyCode: "LSL", currencyName: "Lesotho Loti", country: "Lesotho" },
    { currencyCode: "LRD", currencyName: "Liberian Dollar", country: "Liberia" },
    { currencyCode: "LYD", currencyName: "Libyan Dinar", country: "Libya" },
    { currencyCode: "CHF", currencyName: "Swiss Franc", country: "Liechtenstein" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Lithuania" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Luxembourg" },
    { currencyCode: "MOP", currencyName: "Macanese Pataca", country: "Macao" },
    { currencyCode: "MKD", currencyName: "Macedonian Denar", country: "North Macedonia" },
    { currencyCode: "MGA", currencyName: "Malagasy Ariary", country: "Madagascar" },
    { currencyCode: "MWK", currencyName: "Malawian Kwacha", country: "Malawi" },
    { currencyCode: "MYR", currencyName: "Malaysian Ringgit", country: "Malaysia" },
    { currencyCode: "MVR", currencyName: "Maldivian Rufiyaa", country: "Maldives" },
    { currencyCode: "XOF", currencyName: "West African CFA Franc", country: "Mali" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Malta" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "Marshall Islands" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Martinique" },
    { currencyCode: "MRO", currencyName: "Mauritanian Ouguiya", country: "Mauritania" },
    { currencyCode: "MUR", currencyName: "Mauritian Rupee", country: "Mauritius" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Mayotte" },
    { currencyCode: "MXN", currencyName: "Mexican Peso", country: "Mexico" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "Micronesia" },
    { currencyCode: "MDL", currencyName: "Moldovan Leu", country: "Moldova" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Monaco" },
    { currencyCode: "MNT", currencyName: "Mongolian Tögrög", country: "Mongolia" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Montenegro" },
    { currencyCode: "XCD", currencyName: "East Caribbean Dollar", country: "Montserrat" },
    { currencyCode: "MAD", currencyName: "Moroccan Dirham", country: "Morocco" },
    { currencyCode: "MZN", currencyName: "Mozambican Metical", country: "Mozambique" },
    { currencyCode: "MMK", currencyName: "Myanmar Kyat", country: "Myanmar" },
    { currencyCode: "NAD", currencyName: "Namibian Dollar", country: "Namibia" },
    { currencyCode: "AUD", currencyName: "Australian Dollar", country: "Nauru" },
    { currencyCode: "NPR", currencyName: "Nepalese Rupee", country: "Nepal" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Netherlands" },
    { currencyCode: "XPF", currencyName: "CFP Franc", country: "New Caledonia" },
    { currencyCode: "NZD", currencyName: "New Zealand Dollar", country: "New Zealand" },
    { currencyCode: "NIO", currencyName: "Nicaraguan Córdoba", country: "Nicaragua" },
    { currencyCode: "XOF", currencyName: "West African CFA Franc", country: "Niger" },
    { currencyCode: "NGN", currencyName: "Nigerian Naira", country: "Nigeria" },
    { currencyCode: "NZD", currencyName: "New Zealand Dollar", country: "Niue" },
    { currencyCode: "AUD", currencyName: "Australian Dollar", country: "Norfolk Island" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "Northern Mariana Islands" },
    { currencyCode: "NOK", currencyName: "Norwegian Krone", country: "Norway" },
    { currencyCode: "OMR", currencyName: "Omani Rial", country: "Oman" },
    { currencyCode: "PKR", currencyName: "Pakistani Rupee", country: "Pakistan" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "Palau" },
    { currencyCode: "ILS", currencyName: "Israeli New Shekel", country: "Palestine" },
    { currencyCode: "PAB", currencyName: "Panamanian Balboa", country: "Panama" },
    { currencyCode: "PGK", currencyName: "Papua New Guinean Kina", country: "Papua New Guinea" },
    { currencyCode: "PYG", currencyName: "Paraguayan Guarani", country: "Paraguay" },
    { currencyCode: "PEN", currencyName: "Peruvian Sol", country: "Peru" },
    { currencyCode: "PHP", currencyName: "Philippine Peso", country: "Philippines" },
    { currencyCode: "NZD", currencyName: "New Zealand Dollar", country: "Pitcairn Islands" },
    { currencyCode: "PLN", currencyName: "Polish Złoty", country: "Poland" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Portugal" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "Puerto Rico" },
    { currencyCode: "QAR", currencyName: "Qatari Riyal", country: "Qatar" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Réunion" },
    { currencyCode: "RON", currencyName: "Romanian Leu", country: "Romania" },
    { currencyCode: "RUB", currencyName: "Russian Ruble", country: "Russia" },
    { currencyCode: "RWF", currencyName: "Rwandan Franc", country: "Rwanda" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Saint Barthélemy" },
    { currencyCode: "SHP", currencyName: "Saint Helena Pound", country: "Saint Helena" },
    { currencyCode: "XCD", currencyName: "East Caribbean Dollar", country: "Saint Kitts and Nevis" },
    { currencyCode: "XCD", currencyName: "East Caribbean Dollar", country: "Saint Lucia" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Saint Martin" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Saint Pierre and Miquelon" },
    { currencyCode: "XCD", currencyName: "East Caribbean Dollar", country: "Saint Vincent and the Grenadines" },
    { currencyCode: "WST", currencyName: "Samoan Tala", country: "Samoa" },
    { currencyCode: "EUR", currencyName: "Euro", country: "San Marino" },
    { currencyCode: "STN", currencyName: "São Tomé and Príncipe Dobra", country: "São Tomé and Príncipe" },
    { currencyCode: "SAR", currencyName: "Saudi Riyal", country: "Saudi Arabia" },
    { currencyCode: "XOF", currencyName: "West African CFA Franc", country: "Senegal" },
    { currencyCode: "RSD", currencyName: "Serbian Dinar", country: "Serbia" },
    { currencyCode: "SCR", currencyName: "Seychellois Rupee", country: "Seychelles" },
    { currencyCode: "SLL", currencyName: "Sierra Leonean Leone", country: "Sierra Leone" },
    { currencyCode: "SGD", currencyName: "Singapore Dollar", country: "Singapore" },
    { currencyCode: "ANG", currencyName: "Netherlands Antillean Guilder", country: "Sint Maarten" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Slovakia" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Slovenia" },
    { currencyCode: "SBD", currencyName: "Solomon Islands Dollar", country: "Solomon Islands" },
    { currencyCode: "SOS", currencyName: "Somali Shilling", country: "Somalia" },
    { currencyCode: "ZAR", currencyName: "South African Rand", country: "South Africa" },
    { currencyCode: "GBP", currencyName: "British Pound Sterling", country: "South Georgia and South Sandwich Islands" },
    { currencyCode: "SSP", currencyName: "South Sudanese Pound", country: "South Sudan" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Spain" },
    { currencyCode: "LKR", currencyName: "Sri Lankan Rupee", country: "Sri Lanka" },
    { currencyCode: "SDG", currencyName: "Sudanese Pound", country: "Sudan" },
    { currencyCode: "SRD", currencyName: "Surinamese Dollar", country: "Suriname" },
    { currencyCode: "NOK", currencyName: "Norwegian Krone", country: "Svalbard and Jan Mayen" },
    { currencyCode: "SEK", currencyName: "Swedish Krona", country: "Sweden" },
    { currencyCode: "CHF", currencyName: "Swiss Franc", country: "Switzerland" },
    { currencyCode: "SYP", currencyName: "Syrian Pound", country: "Syria" },
    { currencyCode: "TWD", currencyName: "New Taiwan Dollar", country: "Taiwan" },
    { currencyCode: "TJS", currencyName: "Tajikistani Somoni", country: "Tajikistan" },
    { currencyCode: "TZS", currencyName: "Tanzanian Shilling", country: "Tanzania" },
    { currencyCode: "THB", currencyName: "Thai Baht", country: "Thailand" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "Timor-Leste" },
    { currencyCode: "XOF", currencyName: "West African CFA Franc", country: "Togo" },
    { currencyCode: "NZD", currencyName: "New Zealand Dollar", country: "Tokelau" },
    { currencyCode: "TOP", currencyName: "Tongan Paʻanga", country: "Tonga" },
    { currencyCode: "TTD", currencyName: "Trinidad and Tobago Dollar", country: "Trinidad and Tobago" },
    { currencyCode: "TND", currencyName: "Tunisian Dinar", country: "Tunisia" },
    { currencyCode: "TRY", currencyName: "Turkish Lira", country: "Turkey" },
    { currencyCode: "TMT", currencyName: "Turkmenistani Manat", country: "Turkmenistan" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "Turks and Caicos Islands" },
    { currencyCode: "AUD", currencyName: "Australian Dollar", country: "Tuvalu" },
    { currencyCode: "UGX", currencyName: "Ugandan Shilling", country: "Uganda" },
    { currencyCode: "UAH", currencyName: "Ukrainian Hryvnia", country: "Ukraine" },
    { currencyCode: "AED", currencyName: "UAE Dirham", country: "United Arab Emirates" },
    { currencyCode: "GBP", currencyName: "British Pound Sterling", country: "United Kingdom" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "United States" },
    { currencyCode: "UYU", currencyName: "Uruguayan Peso", country: "Uruguay" },
    { currencyCode: "UZS", currencyName: "Uzbekistani Som", country: "Uzbekistan" },
    { currencyCode: "VUV", currencyName: "Vanuatu Vatu", country: "Vanuatu" },
    { currencyCode: "EUR", currencyName: "Euro", country: "Vatican City" },
    { currencyCode: "VES", currencyName: "Venezuelan Bolívar", country: "Venezuela" },
    { currencyCode: "VND", currencyName: "Vietnamese Đồng", country: "Vietnam" },
    { currencyCode: "USD", currencyName: "United States Dollar", country: "Virgin Islands (U.S.)" },
    { currencyCode: "XPF", currencyName: "CFP Franc", country: "Wallis and Futuna" },
    { currencyCode: "MAD", currencyName: "Moroccan Dirham", country: "Western Sahara" },
    { currencyCode: "YER", currencyName: "Yemeni Rial", country: "Yemen" },
    { currencyCode: "ZMW", currencyName: "Zambian Kwacha", country: "Zambia" },
    { currencyCode: "ZWL", currencyName: "Zimbabwean Dollar", country: "Zimbabwe" }
];
const error = document.getElementById('errorMsg');
const options = document.getElementById('options');
const option2 = document.getElementById('options2');
const btn = document.getElementById('currBtn');
const form = document.getElementById('myform');
const result = document.getElementById('result');
let isClicked = false;
async function fetchCall(basecode, code, amount) {
    const apiKey = "9474710233a934aaf592e187";
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${basecode}/${code}/${amount}`);
    if (!res.ok) {
        throw new Error('Network response was not ok');
    } else {
        const data = await res.json();
        resultsAmount(data);
        console.log(data);
    }
};
const currOptions = () => {
    currencies.forEach((currency) => {
        options.innerHTML += `<option value="${currency.currencyCode}">${currency.currencyName}</option>`;
        option2.innerHTML += `<option value="${currency.currencyCode}">${currency.currencyName}</option>`;
    })
};
currOptions();

const resultsAmount = ({ target_code, conversion_result }) => {
    const appx = formattedNumber(conversion_result.toFixed(2));
    result.textContent = `${target_code} ${appx}`;
}

const formattedNumber = (number) => {
    // Convert the number to a string, split into whole and decimal parts
    let [whole, decimal] = String(number).split(".");

    // Reverse the whole part of the number for easier manipulation
    const numArray = whole.split("").reverse();

    // Insert commas every 3 digits
    for (let i = 3; i < numArray.length; i += 4) {
        numArray.splice(i, 0, ",");
    }

    // Reverse the array back to the original order
    const formattedWhole = numArray.reverse().join("");

    // If there's a decimal part, append it with a dot
    const formattedNumber = decimal ? `${formattedWhole}.${decimal}` : formattedWhole;

    return formattedNumber;
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const baseCurrency = document.getElementById('currency1');
    const convertCurrency = document.getElementById('currency2');
    const currAmount = document.getElementById('amountInCurr');
    isClicked = !isClicked;
    const colorValue = isClicked? "darkgreen" : "red";
    btn.style.backgroundColor = `${colorValue}`;                           
    if (currAmount.value == "") {
        e.preventDefault();
        alert("You can't convert the value of being broke genius");
    } else {
        fetchCall(baseCurrency.value, convertCurrency.value, currAmount.value);
    }
})

