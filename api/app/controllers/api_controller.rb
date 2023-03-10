class ApiController < ActionController::API
    include ActionController::HttpAuthentication::Token::ControllerMethods
    def authorize_request
        header = request.headers['Authorization']
        header = header.split(' ').last if header
        begin
            @decoded = AuthenticationTokenService.decode(header)
            @current_user = Client.find(@decoded[:user_id])
        rescue ActiveRecord::RecordNotFound => e
            render json: { errors: e.message }, status: :unauthorized
        rescue JWT::DecodeError => e
            render json: { errors: e.message }, status: :unauthorized
        end
    end
    def record_not_found(*)
        render json: { error: error.message }, status: :not_found
    end

    def current_user
        @current_user
    end
end