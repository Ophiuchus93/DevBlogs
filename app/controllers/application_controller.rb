class ApplicationController < ActionController::API
	include DeviseTokenAuth::Concerns::SetUserByToken
	# prepend_before_filter :configure_permitted_parameters, if: :devise_controller?
	before_action :configure_permitted_parameters, if: :devise_controller?

	protected

	def configure_permitted_parameters
		devise_parameter_sanitizer.permit(:sign_up, keys: [:firstName, :lastName, :userName, :cohort])
	end
end
