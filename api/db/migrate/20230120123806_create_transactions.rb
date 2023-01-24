class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :transaction_number
      t.string :transaction_type
      t.string :bank
      t.string :name
      t.decimal :amount, precision: 8, scale: 2, default: 0.00
      t.references :account, null: false, foreign_key: true
      t.references :client, null: false, foreign_key: true

    t.timestamps
    end
  end
end
