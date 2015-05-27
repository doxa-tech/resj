module AngularjsHelper

  def ng_controller
    {"ng-controller" => "#{params[:controller]}##{params[:action]}"} if @js
  end

  def js_params
    @js_params || {}
  end


end