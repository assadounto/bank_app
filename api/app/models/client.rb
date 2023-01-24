class Client < ApplicationRecord
    has_secure_password
    has_many :accounts, dependent: :destroy
    has_many :transactions, through: :accounts
    validates :name, presence: true
    validates :email, presence: true
    
end
