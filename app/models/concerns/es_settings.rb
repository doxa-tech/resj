module EsSettings

  def default_settings
    {
      number_of_replicas: 0,
      number_of_shards: 1,
      analysis: {
        filter: {
          edge_ngram_filter: {
            type:     "edgeNGram",
            min_gram: 1,
            max_gram: 15
          },
          ngram_filter: {
            type:     "nGram",
            min_gram: 2,
            max_gram: 3
          },
          french_elision: {
            type: "elision",
            articles: [ "l", "m", "t", "qu", "n", "s",
                        "j", "d", "c", "jusqu", "quoiqu",
                        "lorsqu", "puisqu"]
          },
          french_stop: {
            type: "stop",
            stopwords: "_french_"
          },
          french_stemmer: {
            type: "stemmer",
            language: "light_french"
          }
        },
        analyzer: {
          case_insensitive_sort: {
            type: "custom",
            tokenizer: "keyword",
            filter:  ["lowercase"]
          },
          partial_french: {
            type: "custom",
            tokenizer:  "standard",
            filter: ["french_elision", "lowercase", "french_stop", "french_stemmer", "edge_ngram_filter", "ngram_filter", "asciifolding"]
          },
          default: {
            type: "custom",
            tokenizer: "standard",
             filter: ["french_elision", "lowercase", "french_stop", "french_stemmer", "asciifolding"]
          }
        }
      }
    }
  end

end
