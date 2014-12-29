module TireSettings
  extend ActiveSupport::Concern

  included do

    def self.default_settings
      {
        number_of_shards: 1, 
        analysis: {
          filter: {
            edge_ngram_filter: {
              type:     "edgeNGram",
              min_gram: 1,
              max_gram: 2
            },
            ngram_filter: {
              type:     "NGram",
              min_gram: 3,
              max_gram: 20
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

end