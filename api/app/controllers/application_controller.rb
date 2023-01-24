class ApplicationController < ActionController::API
    include ActionController::HttpAuthentication::Token::ControllerMethods
    before_action :authorize_request, except: [:home,:login]
  
    config.web_console.permissions = '10.0.2.2'
  def home
      render json: {message: "Server is up and running!"}
  end
end
