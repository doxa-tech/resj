module ApplicationHelper

  def options_for_enum(record, enum)
    model = record.class
    pluralized_enum = enum.to_s.pluralize
    options_for_select(
      model.send(pluralized_enum).map {|k, v|
        [ t("#{model.model_name.i18n_key}.#{pluralized_enum}.#{k}"), k ]
      }, 
      record.send(enum))
  end

  def link_to_with_confirmation(text, url, **args)
    render "confirmation", url: url, action_text: text, args: args do
      yield
    end
  end

end
