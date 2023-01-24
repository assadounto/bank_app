class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :account_number
      t.decimal :balance, precision: 8, scale: 2, default: 0.00,after: :float_value
      t.references :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
