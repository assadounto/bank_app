class Transaction < ApplicationRecord
    TRANSACTION_TYPES = %w[deposit withdrawal transfer]
    belongs_to :account
    validates :transaction_number, presence: true
    validates :transaction_type, presence: true, inclusion: { in: TRANSACTION_TYPES }
    validates :amount, presence: true
    before_create :add_transaction_number


    def add_transaction_number
        if self.new_record?
        self.transaction_number = SecureRandom.uuid
        end
    end
end
