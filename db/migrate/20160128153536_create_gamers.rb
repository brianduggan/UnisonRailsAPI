class CreateGamers < ActiveRecord::Migration
  def change
    create_table :gamers do |t|
      t.string :name
      t.string :location
      t.integer :age
      t.string :games

      t.timestamps null: false
    end
  end
end
