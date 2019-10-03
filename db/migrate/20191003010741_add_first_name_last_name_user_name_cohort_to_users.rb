class AddFirstNameLastNameUserNameCohortToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :firstName, :string
    add_column :users, :lastName, :string
    add_column :users, :userName, :string
    add_column :users, :cohort, :string
  end
end
