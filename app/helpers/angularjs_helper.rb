module AngularjsHelper

  def ng_controller
    if @js.is_a?(String)
      controller, action = params[:controller], @js
    else
      controller, action = params[:controller], params[:action]
    end
    {"ng-controller" => "#{controller}##{action}"} unless @js.blank?
  end

  def js_params
    @js_params || {}
  end


end