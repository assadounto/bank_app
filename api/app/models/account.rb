class Account < ApplicationRecord
    belongs_to :client
    has_many :transactions
    validates :account_number, presence: true
    validates :balance, presence: true
    before_create :add_account_number, :add_balance

    def add_account_number
        if self.new_record?
        self.account_number = SecureRandom.uuid
        end
    end

    def add_balance
        if self.new_record?
        self.balance = 0.00
        end
    end
end
