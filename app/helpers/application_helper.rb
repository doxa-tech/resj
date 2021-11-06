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

  def button_to_confirmation(text, form: {}, button_options: {})
    render "application/popup/form", text: text, form: form, button_options: button_options do
      yield
    end
  end

end
