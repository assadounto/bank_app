class Client < ApplicationRecord
    has_many :accounts
    has_many :transactions, through: :accounts
    validates :name, presence: true
    validates :email, presence: true
    
end
