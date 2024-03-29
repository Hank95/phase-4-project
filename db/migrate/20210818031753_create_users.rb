class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.text :bio
      t.boolean :admin

      t.timestamps
    end
  end
end
