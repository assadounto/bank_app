class Api::V1::ClientsController < ApiController
before_action :authorize_request, except: [:create]


  def create
      user = Client.create(client_params)
      if user.valid?
          payload = {user_id: user.id}
          token = AuthenticationTokenService.encode(payload)
          render json: {
             signed_up: true
          }
      else
          render json: {
              errors: user.errors.full_messages
          },
          status: 401
      end
  end

  private

  def client_params
      params.permit(:username, :email, :password, :password_digest)
  end
end