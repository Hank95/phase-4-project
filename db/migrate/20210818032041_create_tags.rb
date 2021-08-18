class CreateTags < ActiveRecord::Migration[6.1]
  def change
    create_table :tags do |t|
      t.string :content
      t.string :sub_content

      t.timestamps
    end
  end
end
