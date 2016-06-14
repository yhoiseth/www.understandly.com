$(document).ready(function () {
  var languagePairs = [
    {
      "lc_src": "fr",
      "lc_tgt": "en-gb",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "de",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "de",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "de",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "es-la",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "fr-ca",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "fr-ca",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "es",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ar",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "id",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "es",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "fr",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "it",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "es-la",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "id",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "pt",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ja",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ko",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "pt-br",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "it",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "pl",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "sv",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "nl",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "pt",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "pt-br",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "pl",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ko",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "nl",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ru",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "sv",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ja",
      "tier": "pro",
      "unit_price": "0.12",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "th",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ms",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "de",
      "lc_tgt": "en-gb",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "fr",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "fr-ca",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "sk",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "zh-tw",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "vi",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "es-la",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "tr",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "es-la",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "es",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "tr",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "fr-ca",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "vi",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "zh-tw",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "zh",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "zh",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "es",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "es",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "ko",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "zh-tw",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "it",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "zh-tw",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "zh",
      "lc_tgt": "en-gb",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "ko",
      "lc_tgt": "ja",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "ko",
      "lc_tgt": "ja",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "nl",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "ko",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "ko",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "zh",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "zh",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "it",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "id",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "id",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "uk",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "nl",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "pl",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "nl",
      "lc_tgt": "en-gb",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "tl",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "fr",
      "lc_tgt": "de",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "zh-tw",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "de",
      "lc_tgt": "nl",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "zh",
      "lc_tgt": "ja",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "zh",
      "lc_tgt": "ja",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "pt",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "tl",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "zh-tw",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "ru",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "zh",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "th",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "fr",
      "lc_tgt": "de",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ms",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "it",
      "lc_tgt": "en-gb",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "de",
      "lc_tgt": "nl",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "th",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "pl",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "en-gb",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "bg",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ro",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "da",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ro",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "bg",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "hu",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "fi",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "fi",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "el",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "no",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "no",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "he",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "el",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "da",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "th",
      "tier": "pro",
      "unit_price": "0.06",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "hu",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "ja",
      "lc_tgt": "ko",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ru",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "cs",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "es",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "ar",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "zh",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "he",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "cs",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "en-gb",
      "tier": "standard",
      "unit_price": "0.03",
      "currency": "USD"
    },
    {
      "lc_src": "pt",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "es",
      "lc_tgt": "en-gb",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "fr",
      "lc_tgt": "en-gb",
      "tier": "machine",
      "unit_price": "0.00",
      "currency": "USD"
    },
    {
      "lc_src": "de",
      "lc_tgt": "en-gb",
      "tier": "machine",
      "unit_price": "0.00",
      "currency": "USD"
    },
    {
      "lc_src": "nl",
      "lc_tgt": "en-gb",
      "tier": "machine",
      "unit_price": "0.00",
      "currency": "USD"
    },
    {
      "lc_src": "it",
      "lc_tgt": "en-gb",
      "tier": "machine",
      "unit_price": "0.00",
      "currency": "USD"
    },
    {
      "lc_src": "es",
      "lc_tgt": "en-gb",
      "tier": "machine",
      "unit_price": "0.00",
      "currency": "USD"
    },
    {
      "lc_src": "fr",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "zh",
      "lc_tgt": "en-gb",
      "tier": "machine",
      "unit_price": "0.00",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "sr",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "pt-br",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "pt-br",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "ru",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "de",
      "lc_tgt": "en",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "sk",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "sr",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    },
    {
      "lc_src": "fr",
      "lc_tgt": "en",
      "tier": "standard",
      "unit_price": "0.05",
      "currency": "USD"
    },
    {
      "lc_src": "en",
      "lc_tgt": "uk",
      "tier": "pro",
      "unit_price": "0.10",
      "currency": "USD"
    }
  ];

  var languages = [
    {
      "language": "Slovak",
      "lc": "sk",
      "localized_name": "Slovenský",
      "unit_type": "word"
    },
    {
      "language": "Ukrainian",
      "lc": "uk",
      "localized_name": "Ukrainian",
      "unit_type": "word"
    },
    {
      "language": "Serbian",
      "lc": "sr",
      "localized_name": "Serbian",
      "unit_type": "word"
    },
    {
      "language": "Arabic",
      "lc": "ar",
      "localized_name": "العربية",
      "unit_type": "word"
    },
    {
      "language": "German",
      "lc": "de",
      "localized_name": "Deutsch",
      "unit_type": "word"
    },
    {
      "language": "English",
      "lc": "en",
      "localized_name": "English",
      "unit_type": "word"
    },
    {
      "language": "Spanish (Spain)",
      "lc": "es",
      "localized_name": "Español",
      "unit_type": "word"
    },
    {
      "language": "Spanish (Latin America)",
      "lc": "es-la",
      "localized_name": "Español (América Latina)",
      "unit_type": "word"
    },
    {
      "language": "Korean",
      "lc": "ko",
      "localized_name": "한국어",
      "unit_type": "character"
    },
    {
      "language": "French",
      "lc": "fr",
      "localized_name": "Français",
      "unit_type": "word"
    },
    {
      "language": "French (Canada)",
      "lc": "fr-ca",
      "localized_name": "Français (Canada)",
      "unit_type": "word"
    },
    {
      "language": "Indonesian",
      "lc": "id",
      "localized_name": "Bahasa Indonesia",
      "unit_type": "word"
    },
    {
      "language": "Italian",
      "lc": "it",
      "localized_name": "Italiano",
      "unit_type": "word"
    },
    {
      "language": "Japanese",
      "lc": "ja",
      "localized_name": "日本語",
      "unit_type": "character"
    },
    {
      "language": "Malay",
      "lc": "ms",
      "localized_name": "Bahasa Melayu",
      "unit_type": "word"
    },
    {
      "language": "Dutch",
      "lc": "nl",
      "localized_name": "Nederlands",
      "unit_type": "word"
    },
    {
      "language": "Portuguese (Europe)",
      "lc": "pt",
      "localized_name": "Português Europeu",
      "unit_type": "word"
    },
    {
      "language": "Portuguese (Brazil)",
      "lc": "pt-br",
      "localized_name": "Português Brasileiro",
      "unit_type": "word"
    },
    {
      "language": "Thai",
      "lc": "th",
      "localized_name": "ไทย",
      "unit_type": "word"
    },
    {
      "language": "Tagalog",
      "lc": "tl",
      "localized_name": "Tagalog",
      "unit_type": "word"
    },
    {
      "language": "Turkish",
      "lc": "tr",
      "localized_name": "Türkçe",
      "unit_type": "word"
    },
    {
      "language": "Chinese (Traditional)",
      "lc": "zh-tw",
      "localized_name": "中文 (台湾)",
      "unit_type": "character"
    },
    {
      "language": "Russian",
      "lc": "ru",
      "localized_name": "русский язык",
      "unit_type": "word"
    },
    {
      "language": "Swedish",
      "lc": "sv",
      "localized_name": "Svenska",
      "unit_type": "word"
    },
    {
      "language": "Bulgarian",
      "lc": "bg",
      "localized_name": "Български",
      "unit_type": "word"
    },
    {
      "language": "Czech",
      "lc": "cs",
      "localized_name": "česky",
      "unit_type": "word"
    },
    {
      "language": "Danish",
      "lc": "da",
      "localized_name": "Dansk",
      "unit_type": "word"
    },
    {
      "language": "Greek",
      "lc": "el",
      "localized_name": "Ελληνικά",
      "unit_type": "word"
    },
    {
      "language": "English (British)",
      "lc": "en-gb",
      "localized_name": "English (UK)",
      "unit_type": "word"
    },
    {
      "language": "Finnish",
      "lc": "fi",
      "localized_name": "Suomen kieli",
      "unit_type": "word"
    },
    {
      "language": "Hebrew",
      "lc": "he",
      "localized_name": "עִבְרִית",
      "unit_type": "word"
    },
    {
      "language": "Hungarian",
      "lc": "hu",
      "localized_name": "Magyar",
      "unit_type": "word"
    },
    {
      "language": "Norwegian",
      "lc": "no",
      "localized_name": "Norsk",
      "unit_type": "word"
    },
    {
      "language": "Polish",
      "lc": "pl",
      "localized_name": "Polski",
      "unit_type": "word"
    },
    {
      "language": "Romanian",
      "lc": "ro",
      "localized_name": "Romanian",
      "unit_type": "word"
    },
    {
      "language": "Vietnamese",
      "lc": "vi",
      "localized_name": "Tiếng Việt",
      "unit_type": "word"
    },
    {
      "language": "Chinese (Simplified)",
      "lc": "zh",
      "localized_name": "中文 (简体)",
      "unit_type": "character"
    }
  ];

  function compare(a, b) {
    if (a.language < b.language) {
      return -1;
    } else if (a.language > b.language) {
      return 1;
    } else {
      return 0;
    }
  }

  languages = languages.filter(function (language) {
    language.targetLanguagePairs = languagePairs.filter(function (languagePair) {
      if (language.lc === languagePair.lc_src && languagePair.tier === 'pro') {
        return languagePair;
      }
    });

    return language;
  });

  languages.sort(compare);

  var sourceLanguages = languages.filter(function (language) {
    if (language.targetLanguagePairs.length > 0) {
      return language;
    }
  });

  var sourceLanguagesOptions = '';

  $.each(sourceLanguages, function (index, language) {
    sourceLanguagesOptions = sourceLanguagesOptions + "<option";

    if (language.lc === 'en') {
      sourceLanguagesOptions += ' selected';
    }

    sourceLanguagesOptions = sourceLanguagesOptions + " value='" + language.lc + "'>" + language.language + "</option>";
  });

  var languagePairsSelect = $("#languagePairsSelect");
  languagePairsSelect.html(sourceLanguagesOptions);

  var populateTargetLanguagesDivs = function (sourceLanguageCode) {
    var sourceLanguage = languages.filter(function (language) {
      if (sourceLanguageCode == language.lc) {
        return language;
      }
    });

    sourceLanguage = sourceLanguage[0];

    var targetLanguages = sourceLanguage.targetLanguagePairs.map(function (targetLanguagePair) {
      var targetLanguage = languages.filter(function (language) {
        if (language.lc === targetLanguagePair.lc_tgt) {
          return language;
        }
      });

      if (targetLanguage.length > 0) {
        return targetLanguage[0];
      }
    });

    targetLanguages = targetLanguages.filter(Boolean);
    targetLanguages = targetLanguages.sort(compare);

    var targetLanguagesDivs = '';

    $.each(targetLanguages, function (key, targetLanguage) {
      targetLanguagesDivs = targetLanguagesDivs +
        '<div class="col-xs-6 col-sm-3 text-center">' +
        targetLanguage.language +
        '</div>'
    });

    $('#languages').html(targetLanguagesDivs);
  };

  populateTargetLanguagesDivs('en');

  languagePairsSelect.change(function () {

    var sourceLanguageCode = languagePairsSelect.val();

    populateTargetLanguagesDivs(sourceLanguageCode);
  });
});
