# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Client.destroy_all
Account.destroy_all
user=Client.create!(name: "rich", email: "test@gmail.com", password: "123456", password_confirmation: "123456")
user2=Client.create!(name: "rich2", email: "rich@gmail.com", password: "123456", password_confirmation: "123456")
Account.create!( client: user)
Account.create!( client: user2)
Transaction.create!(account: user.accounts.first, transaction_type: "deposit", amount: 1000,client_id: user.id)
Transaction.create!(account: user.accounts.first, transaction_type: "deposit", amount: 1000,client_id: user.id)
Transaction.create!(account: user2.accounts.first, transaction_type: "deposit", amount: 1000,client_id: user2.id)
Transaction.create!(account: user2.accounts.first, transaction_type: "deposit", amount: 1000,client_id: user2.id)
