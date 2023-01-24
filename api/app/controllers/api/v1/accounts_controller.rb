# create accounts controller for deposit , transfer and withdraw
# 
# Compare this snippet from api\app\controllers\accounts_controller.rb:
class Api::V1::AccountsController < ApiController
    before_action :authorize_request, except: [:create]
    def history
        client = @current_user
        render json: {
            balance: client.accounts.first.balance,
            history: client.accounts.first.transactions.order(created_at: :desc)
        }
    end
 def new_transaction
        amount = params[:amount].to_f
        transaction_type = params[:transaction_type]
        user = @current_user
        account = user.accounts.first
        if account.nil?
            render json: {
                errors: "No account found"
            },
            status: 401
        end

        case transaction_type
        when "deposit"
            account.deposit(amount)
            if account.errors.any?
                render json: {
                    errors: account.errors.full_messages
                },
                status: 401
            else
                render json: {
                    success: true
                }
            end
        when "withdraw"
            account.withdraw(amount)
            if account.errors.any?
                render json: {
                    errors: account.errors.full_messages
                },
                status: 401
            else
                render json: {
                    success: true
                }
            end

        when "transfer"
            destination_account_id = params[:destination_account_id]
            bank= params[:bank]
            name = params[:name]
            transfer_client = Account.find_by(account_number: destination_account_id)
            if account.balance < 0 || account.balance < amount
                render json: {
                    errors: "Insufficient funds"
                },
                status: 401
            else
                account.transfer(amount, transfer_client, bank, name)
                render json: {
                    success: true
                }
            end
        end 
    end
 end
    
