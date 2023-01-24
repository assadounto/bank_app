class Account < ApplicationRecord
    belongs_to :client
    has_many :transactions
    
    validates :balance, presence: true
    before_create :add_account_number

    def add_account_number
        self.account_number = (SecureRandom.random_number(9e5) + 1e5).to_i

    end


    def deposit(amount)
        self.balance += amount 
        self.save
        Transaction.create(transaction_type: "deposit", amount: amount, account_id: self.id, client_id: self.client_id)    
    end

    def withdraw(amount)
        self.balance -= amount
        self.save
        Transaction.create(transaction_type: "withdrawal", amount: amount, account_id: self.id, client_id: self.client_id)
    end

    def transfer(amount, destination_account, bank, name)
        self.balance -= amount
        self.save
        Transaction.create(transaction_type: "transfer", amount: amount, account_id: self.id, client_id: destination_account.client_id, bank: bank, name: name)
        destination_account.balance += amount
        destination_account.save
        Transaction.create(transaction_type: "received", amount: amount, account_id: destination_account.id,client_id: self.client_id, bank: bank, name: name)
    end
end
