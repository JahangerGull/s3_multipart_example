class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.string :s3_key

      t.timestamps
    end
  end
end
