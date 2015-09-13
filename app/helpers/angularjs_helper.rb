module AngularjsHelper

  def ng_controller
    params[:action] = @js if @js.is_a?(String)
    {"ng-controller" => "#{params[:controller]}##{params[:action]}"} unless @js.blank?
  end

  def js_params
    @js_params || {}
  end


end