class AddsContactInfoToGamer < ActiveRecord::Migration
  def change
    add_column :gamers, :contact, :string
  end
end
